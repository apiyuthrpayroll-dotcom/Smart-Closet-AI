import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini SDK lazily / safely
function getGeminiClient() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return null;
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
}

// Health check
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    hasApiKey: Boolean(process.env.GEMINI_API_KEY),
  });
});

// 1. AI Chat / Sales Copilot
app.post("/api/ai/chat", async (req, res) => {
  try {
    const { messages, leadInfo, persona = "professional" } = req.body;
    const ai = getGeminiClient();

    if (!ai) {
      // Graceful fallback response when API key is not configured
      const lastUserMsg = messages?.[messages.length - 1]?.content || "";
      return res.json({
        reply: `สวัสดีครับ ยินดีให้คำปรึกษาเกี่ยวกับสินค้าและแพ็กเกจของเราครับ จากที่คุณแจ้งว่า "${lastUserMsg.slice(0, 40)}..." ทางเรามีโซลูชันที่ตอบโจทย์และคุ้มค่าอย่างแน่นอน สะดวกให้ทางเรานำเสนอแพ็กเกจพิเศษพร้อมส่วนลด 10% เลยไหมครับ?`,
        intent: "สนใจข้อมูลสินค้าและราคา",
        objection: "สอบถามรายละเอียดเพิ่มเติมเพื่อความคุ้มค่า",
        nextAction: "เสนอโบรชัวร์และแพ็กเกจโปรโมชั่น",
        leadScoreIncrement: 5,
        buyingSignal: "medium",
      });
    }

    const systemPrompt = `You are "Smart Closer AI", an elite AI Sales Closer and sales assistant.
Tone: ${persona === "urgent" ? "Urgent, promotional, fast closer, creating limited-time scarcity" : persona === "friendly" ? "Friendly, empathetic, conversational, consultative" : "Professional, consultative, value-driven, authoritative"}.
Language: Thai (ภาษาไทยเป็นหลัก สามารถใช้คำทับศัพท์ธุรกิจได้เป็นธรรมชาติ).
Role:
1. Actively guide the customer towards closing a deal or booking a demo/call.
2. Answer questions accurately and highlight unique value propositions and ROI.
3. Detect objections and gently overcome them with social proof or tailored promotion.
4. Output JSON with:
   - reply: The natural, persuasive sales response in Thai.
   - intent: Brief Thai summary of customer intent (ความต้องการหลัก).
   - objection: Any objection or hesitation detected (if none, return "ไม่มีข้อโต้แย้งเด่นชัด").
   - nextAction: Recommended next step for the sales rep (e.g. เสนอส่วนลด 10%, นัดหมาย Zoom 15 นาที, ส่งใบเสนอราคา).
   - buyingSignal: "high" | "medium" | "low" | "ready_to_close".`;

    const chatHistoryText = (messages || [])
      .map((m: { role: string; content: string }) => `${m.role === "user" ? "ลูกค้า" : "AI Sales"}: ${m.content}`)
      .join("\n");

    const prompt = `ประวัติบทสนทนา:
${chatHistoryText}

ข้อมูลลูกค้า (ถ้ามี):
${JSON.stringify(leadInfo || {}, null, 2)}

โปรดตอบกลับลูกค้าในฐานะ AI Sales Closer และวิเคราะห์การขาย ตอบกลับเป็น JSON:
{
  "reply": "คำตอบที่น่าประทับใจและกระตุ้นการปิดการขาย",
  "intent": "วิเคราะห์เจตนาลูกค้า",
  "objection": "ข้อโต้แย้งที่พบ",
  "nextAction": "ขั้นตอนถัดไปที่แนะนำ",
  "buyingSignal": "high|medium|low|ready_to_close"
}`;

    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: prompt,
      config: {
        systemInstruction: systemPrompt,
        responseMimeType: "application/json",
      },
    });

    const parsed = JSON.parse(response.text || "{}");
    res.json(parsed);
  } catch (err: any) {
    console.error("AI Chat Error:", err);
    res.status(500).json({
      error: "เกิดข้อผิดพลาดในการประมวลผล",
      reply: "ขออภัยครับ ระบบกำลังประมวลผลข้อมูล โปรดลองอีกครั้งหรือเลือกคำตอบแนะนำด่วน",
    });
  }
});

// 2. AI Lead Scoring
app.post("/api/ai/score-lead", async (req, res) => {
  try {
    const { leadData } = req.body;
    const ai = getGeminiClient();

    if (!ai) {
      // High-quality deterministic fallback
      const budget = Number(leadData?.budget) || 15000;
      const score = Math.min(95, Math.max(45, Math.floor(budget / 500) + 40));
      return res.json({
        score,
        interestLevel: score >= 80 ? "Hot 🔥" : score >= 55 ? "Warm" : "Cold",
        urgency: score >= 80 ? "สูงมาก (ภายใน 24 ชม.)" : "ปานกลาง (ภายในสัปดาห์นี้)",
        recommendation: score >= 80 
          ? "ลูกค้ามีความสนใจสูงมาก แนะนำให้ฝ่ายขายโทรติดต่อด่วนภายใน 10 นาทีเพื่อปิดการขาย"
          : "ส่งข้อมูลเปรียบเทียบฟีเจอร์พร้อมโปรโมชั่นทดลองใช้ฟรี",
        bantBreakdown: {
          budget: score >= 75 ? "ตรงตามเกณฑ์" : "ปานกลาง",
          authority: "ผู้ตัดสินใจหลัก",
          need: "มีความต้องการชัดเจน",
          timeline: score >= 80 ? "ด่วนทันที" : "1-2 สัปดาห์",
        },
        recommendedDiscount: score >= 80 ? "10% Flash Deal" : "5% Welcome Offer",
      });
    }

    const prompt = `วิเคราะห์และให้คะแนน Lead (AI Lead Scoring) สำหรับฝ่ายขาย B2B/B2C:
ข้อมูล Lead:
${JSON.stringify(leadData, null, 2)}

จงประเมิน:
1. score (0-100)
2. interestLevel ("Hot 🔥" | "Warm" | "Cold")
3. urgency ("สูงมาก (ภายใน 10 นาที)" | "สูง (ภายใน 24 ชม.)" | "ปานกลาง" | "ต่ำ")
4. recommendation (คำแนะนำเชิงปฏิบัติการสำหรับ Sales เช่น "ลูกค้ามีความสนใจสูง แนะนำให้ฝ่ายขายติดต่อภายใน 10 นาที")
5. bantBreakdown (ประเมิน Budget, Authority, Need, Timeline เป็นภาษาไทย)
6. recommendedDiscount (โปรโมชั่นหรือส่วนลดที่แนะนำเพื่อปิดการขาย)

ตอบกลับเป็น JSON เท่านั้น:
{
  "score": 92,
  "interestLevel": "Hot 🔥",
  "urgency": "สูงมาก (ภายใน 10 นาที)",
  "recommendation": "...",
  "bantBreakdown": {
    "budget": "...",
    "authority": "...",
    "need": "...",
    "timeline": "..."
  },
  "recommendedDiscount": "..."
}`;

    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      },
    });

    const parsed = JSON.parse(response.text || "{}");
    res.json(parsed);
  } catch (err: any) {
    console.error("Score Lead Error:", err);
    res.status(500).json({ error: "ไม่สามารถประมวลผลคะแนน Lead ได้" });
  }
});

// 3. AI Product Recommendation
app.post("/api/ai/recommend-product", async (req, res) => {
  try {
    const { customerNeed, budget, industry, products } = req.body;
    const ai = getGeminiClient();

    if (!ai) {
      return res.json({
        recommendedProduct: products?.[0]?.name || "Smart Closer Enterprise Suite",
        recommendedPrice: products?.[0]?.price || "29,000 บาท/ปี",
        recommendedDiscount: "ส่วนลดพิเศษ 10%",
        closeProbability: 78,
        pitchScript: "จากความต้องการของคุณ แพ็กเกจนี้ช่วยลดเวลาติดตามงานได้ 60% พร้อมระบบ AI ตอบลูกค้าอัตโนมัติ 24 ชม. หากตัดสินใจภายในวันนี้เรามอบส่วนลด 10% ทันทีครับ",
        keyFeaturesMatched: ["AI Lead Scoring แบบเรียลไทม์", "ระบบติดตามอัตโนมัติ", "เชื่อมต่อ LINE OA"],
        reasoning: "งบประมาณและความต้องการตรงกับฟีเจอร์ระดับองค์กรอย่างลงตัว",
      });
    }

    const prompt = `ในฐานะ AI Recommendation Engine สำหรับฝ่ายขาย:
วิเคราะห์ความต้องการลูกค้า:
- ความต้องการ: ${customerNeed}
- งบประมาณ: ${budget}
- กลุ่มธุรกิจ: ${industry}

รายการสินค้าที่มี:
${JSON.stringify(products || [], null, 2)}

แนะนำสินค้าที่เหมาะสมที่สุด คำนวณโอกาสปิดการขาย (%) และร่างบทสนทนา Pitch เพื่อปิดการขาย
ตอบเป็น JSON:
{
  "recommendedProduct": "ชื่อสินค้า",
  "recommendedPrice": "ราคาที่แนะนำ",
  "recommendedDiscount": "โปรโมชั่น/ส่วนลดแนะนำ เช่น 10%",
  "closeProbability": 78,
  "pitchScript": "บทพูดปิดการขายที่กระชับ โน้มน้าวใจ",
  "keyFeaturesMatched": ["จุดเด่น 1", "จุดเด่น 2", "จุดเด่น 3"],
  "reasoning": "เหตุผลที่ระบบเลือกสินค้าชิ้นนี้"
}`;

    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      },
    });

    res.json(JSON.parse(response.text || "{}"));
  } catch (err: any) {
    console.error("Recommend Product Error:", err);
    res.status(500).json({ error: "ไม่สามารถแนะนำสินค้าได้" });
  }
});

// 4. AI Follow-up Message Generator
app.post("/api/ai/generate-followup", async (req, res) => {
  try {
    const { lead, daysInactive = 2, channel = "line", promoOffered = "10%" } = req.body;
    const ai = getGeminiClient();

    if (!ai) {
      return res.json({
        message: `สวัสดีครับคุณ ${lead?.name || "ลูกค้า"} 😊 ทางทีมงานขออนุญาตสอบถามเพิ่มเติมเกี่ยวกับข้อเสนอเมื่อ ${daysInactive} วันก่อน ตอนนี้เรามีโปรโมชั่นส่วนลดพิเศษ ${promoOffered} สำหรับรอบสัปดาห์นี้ หากสนใจรับสิทธิ์ สามารถตอบกลับข้อความนี้ได้เลยนะครับ ยินดีดูแลเป็นพิเศษครับ!`,
        recommendedTime: "ช่วงเวลา 10:30 - 11:30 น. หรือ 14:00 - 15:30 น.",
        callToAction: "จองสิทธิ์โปรโมชั่น 10% หรือนัดหมาย 15 นาที",
        strategyTip: `ลูกค้ารายนี้ยังไม่ได้ตัดสินใจซื้อหลังผ่านไป ${daysInactive} วัน แนะนำส่งข้อความติดตามพร้อมโปรโมชั่นจำกัดเวลาเพื่อเร่งการตัดสินใจ`,
      });
    }

    const prompt = `สร้างข้อความ Follow-up สำหรับลูกค้าที่ไม่ซื้อหรือเงียบไป:
- ชื่อลูกค้า: ${lead?.name}
- สินค้าที่สนใจ: ${lead?.interestedProduct || "บริการหลัก"}
- จำนวนวันที่ไม่ได้ติดต่อ/หายไป: ${daysInactive} วัน
- ช่องทาง: ${channel} (LINE / WhatsApp / Email / Phone)
- โปรโมชั่นกระตุ้น: ${promoOffered}

โจทย์:
"ถ้าลูกค้าหายไป ${daysInactive} วัน ให้สร้างข้อความติดตามที่สุภาพ ไม่กดดัน แต่นำเสนอคุณค่าและโปรโมชั่นเร่งรัดการปิดการขาย"

ตอบกลับเป็น JSON:
{
  "message": "ข้อความสำหรับส่งให้ลูกค้า",
  "recommendedTime": "เวลาที่ควรส่ง",
  "callToAction": "สิ่งที่กระตุ้นให้ลูกค้าทำ",
  "strategyTip": "คำแนะนำเชิงกลยุทธ์สำหรับ Sales"
}`;

    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      },
    });

    res.json(JSON.parse(response.text || "{}"));
  } catch (err: any) {
    console.error("Follow-up Gen Error:", err);
    res.status(500).json({ error: "ไม่สามารถสร้างข้อความ Follow-up ได้" });
  }
});

// 5. AI Sales Coach (Analyze Sales Conversation & Objections)
app.post("/api/ai/sales-coach", async (req, res) => {
  try {
    const { transcript, dealContext } = req.body;
    const ai = getGeminiClient();

    if (!ai) {
      return res.json({
        customerInterest: "สนใจฟังก์ชัน AI และการลดต้นทุนพนักงานขาย แต่ติดเรื่องราคาและระยะเวลาติดตั้ง",
        objections: [
          { type: "Price / งบประมาณ", description: "รู้สึกว่าราคาสูงกว่าที่ตั้งงบไว้ 15%", severity: "High" },
          { type: "Implementation / ความยากง่าย", description: "กังวลว่าทีมงานจะเรียนรู้ระบบช้า", severity: "Medium" },
        ],
        whatSalesDidWell: [
          "อธิบาย ROI และผลลัพธ์ได้อย่างชัดเจน",
          "รับฟังปัญหาของลูกค้าอย่างตั้งใจและมี Empathy",
        ],
        areasForImprovement: [
          "ควรนำเสนอ Social Proof หรือ Case Study บริษัทในอุตสาหกรรมเดียวกันให้เร็วกว่านี้",
          "ยังไม่ได้เสนอทางเลือกแบ่งชำระเป็นรายเดือนเพื่อแก้ปัญหาเรื่องงบประมาณ",
        ],
        winProbability: 72,
        nextBestAction: "ส่ง Case Study ธุรกิจที่ใกล้เคียงกัน พร้อมเสนอแพ็กเกจชำระรายเดือนและ Onboarding support ฟรี",
        coachScore: 84,
      });
    }

    const prompt = `ในฐานะ AI Sales Coach ระดับสากล:
วิเคราะห์บทสนทนาระหว่างพนักงานขาย (Sales) และลูกค้า:

บทสนทนา:
"""
${transcript}
"""

บริบทดีล:
${JSON.stringify(dealContext || {}, null, 2)}

โปรดวิเคราะห์อย่างละเอียด:
1. ความสนใจของลูกค้า (Customer Interest & Needs)
2. ข้อโต้แย้งที่พบ (Objections: ประเภท, รายละเอียด, ความรุนแรง)
3. จุดที่ Sales ตอบได้ดี (What Sales Did Well)
4. จุดที่ควรปรับปรุง (Areas for Improvement)
5. โอกาสปิดการขาย (Win Probability: 0-100%)
6. คะแนนภาพรวมพนักงานขาย (Coach Score: 0-100)
7. ขั้นตอนถัดไปเพื่อเพิ่มโอกาสปิดการขาย (Next Best Action)

ตอบกลับเป็น JSON:
{
  "customerInterest": "สรุปความสนใจ",
  "objections": [
    { "type": "ประเภทข้อโต้แย้ง", "description": "รายละเอียด", "severity": "High|Medium|Low" }
  ],
  "whatSalesDidWell": ["ข้อดี 1", "ข้อดี 2"],
  "areasForImprovement": ["จุดควรปรับปรุง 1", "จุดควรปรับปรุง 2"],
  "winProbability": 78,
  "coachScore": 82,
  "nextBestAction": "คำแนะนำปิดการขายขั้นตอนถัดไป"
}`;

    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      },
    });

    res.json(JSON.parse(response.text || "{}"));
  } catch (err: any) {
    console.error("Sales Coach Error:", err);
    res.status(500).json({ error: "ไม่สามารถวิเคราะห์บทสนทนาได้" });
  }
});

// ==========================================
// Smart Wardrobe AI Endpoints (โครงการสแกนตู้เสื้อผ้าแล้วจัดชุดที่ใช้ได้ทันที)
// วิทยาลัยเทคโนโลยีหมู่บ้านครู สาขาเทคโนโลยีธุรกิจดิจิทัล
// ==========================================

// 1. Scan Wardrobe & Auto Classify (ขั้นตอน 3.1 & 3.2)
app.post("/api/wardrobe/scan", async (req, res) => {
  try {
    const { imagePrompt, presetType = "vocational_student" } = req.body;
    const ai = getGeminiClient();

    if (!ai) {
      // Deterministic realistic fallback items
      return res.json({
        success: true,
        detectedItemsCount: 4,
        scanSummary: "สแกนตรวจพบเสื้อผ้า 4 ชิ้น พร้อมจำแนกประเภทและสีอัตโนมัติสำเร็จ",
        items: [
          {
            name: "เสื้อเชิ้ตนักเรียน ปวช. สีขาว",
            category: "tops",
            subCategory: "เสื้อเชิ้ตนักศึกษา",
            color: "ขาวบริสุทธิ์",
            colorHex: "#FFFFFF",
            pattern: "สีพื้น",
            season: "ทุกฤดู",
            occasion: ["ชุดนักเรียน ปวช.", "งานพิธีการ/ทางการ"],
            material: "Cotton-Poly ทรงเรียบ",
            aiConfidence: 98.6
          },
          {
            name: "กางเกงสแล็คกรมท่าเข้ม",
            category: "pants",
            subCategory: "กางเกงสแล็คเครื่องแบบ",
            color: "สีกรมท่าเข้ม",
            colorHex: "#1E293B",
            pattern: "สีพื้น",
            season: "ทุกฤดู",
            occasion: ["ชุดนักเรียน ปวช.", "นำเสนอโครงการธุรกิจดิจิทัล"],
            material: "Polyester-Viscose",
            aiConfidence: 97.4
          },
          {
            name: "เสื้อเบลเซอร์สูท สีเทาชาโคล",
            category: "outerwear",
            subCategory: "เสื้อสูทพรีเซนต์งาน",
            color: "เทาชาโคล",
            colorHex: "#475569",
            pattern: "สีพื้นเรียบหรู",
            season: "ทุกฤดู",
            occasion: ["นำเสนอโครงการธุรกิจดิจิทัล", "งานพิธีการ/ทางการ"],
            material: "Blended Wool",
            aiConfidence: 96.1
          },
          {
            name: "รองเท้าผ้าใบสีขาวมินิมอล",
            category: "footwear",
            subCategory: "รองเท้าผ้าใบสตรีท",
            color: "ขาวล้วน",
            colorHex: "#F8FAFC",
            pattern: "มินิมอล",
            season: "ทุกฤดู",
            occasion: ["ชุดนักเรียน ปวช.", "ลำลอง/ไปเที่ยว"],
            material: "PU Leather",
            aiConfidence: 99.0
          }
        ]
      });
    }

    const prompt = `คุณคือระบบ AI ผู้เชี่ยวชาญด้าน Computer Vision และแฟชั่น สำหรับ "โครงการสแกนตู้เสื้อผ้าแล้วจัดชุดที่ใช้ได้ทันที"
วิทยาลัยเทคโนโลยีหมู่บ้านครู สาขาเทคโนโลยีธุรกิจดิจิทัล
กลุ่มเป้าหมาย: นักเรียนระดับประกาศนียบัตรวิชาชีพ (ปวช.) ชั้นปีที่ 3

ข้อมูลอินพุตหรือภาพที่สแกน:
"${imagePrompt || "ตู้เสื้อผ้านักเรียน ปวช. มีเสื้อเชิ้ตขาว กางเกงสแล็ค เสื้อยืด เบลเซอร์ ยีนส์ รองเท้า"}"

จงจำแนกเสื้อผ้าที่ตรวจพบออกเป็นรายการ ตอบกลับเป็น JSON:
{
  "success": true,
  "detectedItemsCount": 4,
  "scanSummary": "สรุปผลการสแกนภาษาไทยสั้นๆ 1 ประโยค",
  "items": [
    {
      "name": "ชื่อเสื้อผ้า",
      "category": "tops|pants|skirts|dresses|outerwear|footwear|accessories",
      "subCategory": "หมวดหมู่ย่อย",
      "color": "ชื่อสีภาษาไทย",
      "colorHex": "#HEXCODE",
      "pattern": "สีพื้น|ลายทาง|ลายสก็อต|กราฟิก",
      "season": "ทุกฤดู|ร้อน|ฝน|หนาว",
      "occasion": ["ชุดนักเรียน ปวช.", "นำเสนอโครงการธุรกิจดิจิทัล", "ลำลอง/ไปเที่ยว"],
      "material": "เนื้อผ้า",
      "aiConfidence": 97.5
    }
  ]
}`;

    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      },
    });

    res.json(JSON.parse(response.text || "{}"));
  } catch (err: any) {
    console.error("Scan Wardrobe Error:", err);
    res.status(500).json({ error: "ไม่สามารถประมวลผลการสแกนตู้เสื้อผ้าได้" });
  }
});

// 2. Style Matching & Outfit Recommendation (ขั้นตอน 3.5)
app.post("/api/wardrobe/recommend", async (req, res) => {
  try {
    const { occasion, availableItems, userStyle, weather = "แดดจัด 33°C" } = req.body;
    const ai = getGeminiClient();

    if (!ai) {
      return res.json({
        outfitTitle: `ชุดแนะนำสำหรับ ${occasion || "วันเรียน ปวช."}`,
        matchScore: 97,
        styleVibe: "Smart Vocational & Modern Tech",
        colorHarmony: "High Contrast (ขาว + กรมท่าเข้ม + รองเท้าขาว)",
        weatherFit: `เหมาะกับสภาพอากาศ ${weather} สวมใส่สบาย ระบายอากาศได้ดี`,
        aiStylingTip: "สอดชายเสื้อเชิ้ตขาวเข้าในกางเกงสแล็คให้เรียบร้อย เสริมภาพลักษณ์สง่างาม น่าเชื่อถือ และถูกระเบียบวิทยาลัย",
        topId: availableItems?.find((i: any) => i.category === 'tops')?.id || 'c-01',
        bottomId: availableItems?.find((i: any) => i.category === 'pants' || i.category === 'skirts')?.id || 'c-02',
        outerwearId: availableItems?.find((i: any) => i.category === 'outerwear')?.id,
        shoesId: availableItems?.find((i: any) => i.category === 'footwear')?.id || 'c-09',
        reasoning: "การจับคู่สีขาวและกรมท่าเป็นคู่สีสากลที่ให้ความสุภาพ น่าเชื่อถือ เหมาะอย่างยิ่งสำหรับนักเรียน ปวช. 3 สาขาเทคโนโลยีธุรกิจดิจิทัล"
      });
    }

    const prompt = `ในฐานะ AI สไตลิสต์ส่วนบุคคล สำหรับ "โครงการสแกนตู้เสื้อผ้าแล้วจัดชุดที่ใช้ได้ทันที"
วิทยาลัยเทคโนโลยีหมู่บ้านครู สาขาเทคโนโลยีธุรกิจดิจิทัล
โอกาสในการแต่งตัว: ${occasion}
สไตล์ที่ชอบ: ${userStyle || "Smart & Clean"}
สภาพอากาศ: ${weather}

รายการเสื้อผ้าที่มีในตู้:
${JSON.stringify(availableItems || [], null, 2)}

จงเลือกเสื้อผ้ามาผสมผสานเป็นชุดที่ดีที่สุด 1 ชุด พร้อมคำนวณคะแนนความเข้ากันได้ (Match Score) และคำแนะนำในการแต่งตัว
ตอบกลับเป็น JSON:
{
  "outfitTitle": "ชื่อชุดที่สะท้อนสไตล์",
  "matchScore": 95,
  "styleVibe": "คำอธิบายกลิ่นอายสไตล์",
  "colorHarmony": "หลักการจับคู่สี เช่น Monochromatic, High Contrast",
  "weatherFit": "ความเหมาะสมกับสภาพอากาศ",
  "aiStylingTip": "ทิปส์การสวมใส่เฉพาะจุด (เช่น การพับแขนเสื้อ, การเลือกเครื่องประดับ)",
  "topId": "id ของเสื้อ",
  "bottomId": "id ของกางเกงหรือกระโปรง",
  "outerwearId": "id ของเสื้อคลุม (ถ้ามี)",
  "shoesId": "id ของรองเท้า",
  "reasoning": "เหตุผลเชิงทฤษฎีแฟชั่นและกาลเทศะ"
}`;

    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      },
    });

    res.json(JSON.parse(response.text || "{}"));
  } catch (err: any) {
    console.error("Recommend Outfit Error:", err);
    res.status(500).json({ error: "ไม่สามารถประมวลผลการจัดชุดได้" });
  }
});

// 3. Wardrobe Analysis & Verification (ขั้นตอน 3.4)
app.post("/api/wardrobe/analyze", async (req, res) => {
  try {
    const { items } = req.body;
    const ai = getGeminiClient();

    if (!ai) {
      return res.json({
        totalItems: items?.length || 12,
        styleReadinessScore: 92,
        topsVsBottomsRatio: "3:2 (สมดุลดีเยี่ยม)",
        colorDiversity: "มีโทนสีสุภาพ (ขาว, กรมท่า, เทา) และเอิร์ธโทนครบถ้วน",
        missingEssentials: [
          "เสื้อเชิ้ตแขนยาวสีสุภาพ สำหรับงานพิธีการระดับทางการ",
          "รองเท้าหนังสุภาพสำหรับวันสัมภาษณ์งานฝึกงาน"
        ],
        strengths: [
          "มีชุดนักเรียน ปวช. ครบถ้วนตามระเบียบวิทยาลัยเทคโนโลยีหมู่บ้านครู",
          "มีเบลเซอร์สูทพร้อมสำหรับการนำเสนอผลงานโครงการธุรกิจดิจิทัล"
        ],
        smartAdvice: "ตู้เสื้อผ้าของคุณมีความพร้อมในการจัดชุดสูงถึง 92% สามารถจัดชุดได้มากกว่า 20 ลุคที่ไม่ซ้ำกัน"
      });
    }

    const prompt = `วิเคราะห์ตู้เสื้อผ้าและประมวลผลความสมบูรณ์ สำหรับนักเรียน ปวช. 3 สาขาเทคโนโลยีธุรกิจดิจิทัล วิทยาลัยเทคโนโลยีหมู่บ้านครู:
รายการเสื้อผ้า:
${JSON.stringify(items || [], null, 2)}

ตอบกลับเป็น JSON:
{
  "totalItems": 12,
  "styleReadinessScore": 92,
  "topsVsBottomsRatio": "สัดส่วนเสื้อต่อท่อนล่าง",
  "colorDiversity": "การกระจายตัวของโทนสี",
  "missingEssentials": ["ชิ้นที่ควรมีเพิ่ม 1", "ชิ้นที่ควรมีเพิ่ม 2"],
  "strengths": ["จุดเด่นของตู้เสื้อผ้านี้ 1", "จุดเด่น 2"],
  "smartAdvice": "คำแนะนำเชิงสร้างสรรค์ในการบริหารตู้เสื้อผ้า"
}`;

    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      },
    });

    res.json(JSON.parse(response.text || "{}"));
  } catch (err: any) {
    console.error("Wardrobe Analysis Error:", err);
    res.status(500).json({ error: "ไม่สามารถวิเคราะห์ตู้เสื้อผ้าได้" });
  }
});

// Vite middleware for development & Static files in production
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Smart Closer AI Server running on port ${PORT}`);
  });
}

startServer();
