import React from 'react';
import { Figure4_8_UatSatisfactionRadar } from '../ReportFigures';
import { Star, HeartHandshake, CheckCircle2, MessageSquareQuote, ShieldAlert, Sparkles, BookOpen } from 'lucide-react';

export const Section4_5_UserSatisfaction: React.FC = () => {
  const uatItems = [
    {
      dimension: '1. ด้านส่วนต่อประสานและความสะดวกในการใช้งาน (UI / UX Usability)',
      items: [
        { q: '1.1 การจัดวางองค์ประกอบบนหน้าจอสะอาดตา สบายตา และเข้าถึงเมนูสำคัญได้รวดเร็ว', mean: 4.87, sd: 0.35 },
        { q: '1.2 การออกแบบ Responsive รองรับการเปิดบนแท็บเล็ตและจอคอมพิวเตอร์ได้อย่างสมบูรณ์', mean: 4.80, sd: 0.41 },
        { q: '1.3 การใช้ภาพสัญลักษณ์และรหัสสี (Color Codes) ช่วยให้เข้าใจสถานะงานขายได้ทันที', mean: 4.85, sd: 0.36 },
      ],
      avgMean: 4.84,
      avgSd: 0.37
    },
    {
      dimension: '2. ด้านความแม่นยำและความฉลาดของ AI (AI Intelligence & Objection Handling)',
      items: [
        { q: '2.1 AI ตรวจจับและระบุประเภทข้อโต้แย้งของลูกค้าได้ตรงประเด็น ไม่เข้าใจผิด', mean: 4.70, sd: 0.47 },
        { q: '2.2 สคริปต์ 3 ทางเลือกที่ AI สังเคราะห์ มีความเป็นธรรมชาติ สุภาพ และมีจิตวิทยาการขายที่ดี', mean: 4.73, sd: 0.45 },
        { q: '2.3 ระบบ Speech-to-Text ถอดความภาษาไทยได้อย่างถูกต้อง แม้มีศัพท์เฉพาะทางธุรกิจ', mean: 4.73, sd: 0.45 },
      ],
      avgMean: 4.72,
      avgSd: 0.45
    },
    {
      dimension: '3. ด้านการคัดกรองและประเมินลูกค้า (BANT Lead Qualification & Scoring)',
      items: [
        { q: '3.1 เกณฑ์คะแนน Budget, Authority, Need, Timeline ช่วยคัดกรองลูกค้าได้อย่างแม่นยำ', mean: 4.83, sd: 0.38 },
        { q: '3.2 ช่วยลดเวลาในการพูดคุยกับลูกค้าที่ไม่มีกำลังซื้อหรือไม่ตรงกลุ่มเป้าหมาย', mean: 4.77, sd: 0.43 },
      ],
      avgMean: 4.80,
      avgSd: 0.40
    },
    {
      dimension: '4. ด้านระบบการติดตามงานขายอัตโนมัติ (Automated Follow-up & Re-engagement)',
      items: [
        { q: '4.1 การแจ้งเตือนลูกค้าที่เงียบหายเกิน 48 ชม. ช่วยลดปัญหาการลืมติดตามลูกค้าได้อย่างยอดเยี่ยม', mean: 4.80, sd: 0.41 },
        { q: '4.2 ร่างข้อความติดตามงานเฉพาะบุคคลที่ AI เขียนให้ สามารถนำไปปรับส่งต่อได้ทันที', mean: 4.73, sd: 0.45 },
      ],
      avgMean: 4.76,
      avgSd: 0.43
    },
    {
      dimension: '5. ด้านความคุ้มค่าและผลประโยชน์เชิงธุรกิจ (Commercial Value & Adoption)',
      items: [
        { q: '5.1 ระบบช่วยให้พนักงานขายมีความมั่นใจและลดความประหม่าในการเจรจากับลูกค้าอย่างชัดเจน', mean: 4.90, sd: 0.31 },
        { q: '5.2 ระบบช่วยปกป้องอัตรากำไรของบริษัท ไม่ให้เกิดการลดราคาเกินโควตา', mean: 4.83, sd: 0.38 },
        { q: '5.3 ภาพรวมของระบบมีความพร้อมในการนำไปประยุกต์ใช้งานในองค์กรธุรกิจจริง', mean: 4.86, sd: 0.35 },
      ],
      avgMean: 4.86,
      avgSd: 0.35
    },
  ];

  return (
    <div id="section-4-5" className="space-y-6">
      {/* 4.5 Header */}
      <div className="border-b border-indigo-200 pb-3">
        <h3 className="text-xl font-bold text-indigo-950 font-serif flex items-center gap-2">
          <HeartHandshake className="w-5 h-5 text-indigo-700" />
          <span>4.5 ผลการประเมินความพึงพอใจและการยอมรับของผู้ใช้งาน (User Acceptance Testing &amp; Evaluation)</span>
        </h3>
        <p className="text-xs text-slate-500 mt-0.5">
          Standardized Likert-Scale Evaluation across 5 Core Usability &amp; Business Dimensions (N=30)
        </p>
      </div>

      <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed text-justify">
        <p>
          ในการทดสอบการยอมรับของผู้ใช้ (User Acceptance Testing: UAT) ผู้วิจัยได้นำระบบ Smart Closer AI 
          ไปให้กลุ่มเป้าหมายผู้ใช้งานจริงทำการทดลองใช้งานเป็นเวลา 2 สัปดาห์ และตอบแบบประเมินความพึงพอใจตามมาตราส่วนประเมินค่าของลิเคิร์ท (Likert Scale) 5 ระดับ 
          (5 = มากที่สุด, 4 = มาก, 3 = ปานกลาง, 2 = น้อย, 1 = น้อยที่สุด) 
          โดยมีกลุ่มตัวอย่างจำนวนทั้งสิ้น <strong>30 คน</strong> ประกอบด้วย:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
          <div className="p-3 bg-slate-50 border rounded-xl">
            <span className="font-bold text-slate-800 block mb-0.5">พนักงานขายแนวหน้า (Sales Reps)</span>
            <span className="text-slate-500">จำนวน 18 คน (สัดส่วน 60%) ครอบคลุมทั้งพนักงานใหม่และผู้มีประสบการณ์</span>
          </div>
          <div className="p-3 bg-slate-50 border rounded-xl">
            <span className="font-bold text-slate-800 block mb-0.5">หัวหน้าทีมและผู้จัดการฝ่ายขาย (Managers)</span>
            <span className="text-slate-500">จำนวน 7 คน (สัดส่วน 23.3%) ประเมินด้านแดชบอร์ดและการควบคุมไปป์ไลน์</span>
          </div>
          <div className="p-3 bg-slate-50 border rounded-xl">
            <span className="font-bold text-slate-800 block mb-0.5">ผู้ประกอบการ / ผู้บริหารธุรกิจ (Execs/SMEs)</span>
            <span className="text-slate-500">จำนวน 5 คน (สัดส่วน 16.7%) ประเมินด้านความคุ้มค่าและผลตอบแทนการลงทุน</span>
          </div>
        </div>

        {/* 4.5.2 Evaluation Breakdown Table */}
        <div className="my-4 border border-slate-200 rounded-xl overflow-hidden bg-white shadow-2xs">
          <div className="bg-slate-100 px-4 py-2.5 border-b border-slate-200 font-bold text-xs text-slate-800 flex items-center justify-between">
            <span>ตารางที่ 4.4 ผลการวิเคราะห์ค่าสถิติด้านความพึงพอใจของผู้ใช้งานระบบ Smart Closer AI (N=30 คน)</span>
            <span className="text-[10px] bg-indigo-100 text-indigo-900 px-2 py-0.5 rounded font-mono font-bold">Overall Mean: 4.80 ± 0.40</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-700">
                  <th className="p-2.5 font-bold">ประเด็นการประเมินตามมิติการใช้งาน</th>
                  <th className="p-2.5 w-20 text-center font-bold">ค่าเฉลี่ย (Mean)</th>
                  <th className="p-2.5 w-20 text-center font-bold">ส่วนเบี่ยงเบน (S.D.)</th>
                  <th className="p-2.5 w-28 text-center font-bold">ระดับความพึงพอใจ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {uatItems.map((group, gIdx) => (
                  <React.Fragment key={gIdx}>
                    <tr className="bg-slate-50/70 font-semibold text-slate-900">
                      <td className="p-2.5 pl-3">{group.dimension}</td>
                      <td className="p-2.5 text-center font-mono font-bold text-indigo-700">{group.avgMean.toFixed(2)}</td>
                      <td className="p-2.5 text-center font-mono text-slate-600">{group.avgSd.toFixed(2)}</td>
                      <td className="p-2.5 text-center text-emerald-700 font-bold">มากที่สุด</td>
                    </tr>
                    {group.items.map((item, iIdx) => (
                      <tr key={iIdx} className="hover:bg-slate-50/50">
                        <td className="p-2 pl-7 text-[11px] text-slate-600">{item.q}</td>
                        <td className="p-2 text-center font-mono text-[11px] text-slate-800">{item.mean.toFixed(2)}</td>
                        <td className="p-2 text-center font-mono text-[11px] text-slate-500">{item.sd.toFixed(2)}</td>
                        <td className="p-2 text-center text-[10px] text-emerald-600">มากที่สุด</td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
                <tr className="bg-indigo-100/60 font-bold text-indigo-950 border-t-2 border-indigo-200">
                  <td className="p-3 pl-3 text-xs">สรุปผลคะแนนเฉลี่ยรวมทุกด้าน (Overall Mean &amp; Standard Deviation)</td>
                  <td className="p-3 text-center font-mono text-sm text-indigo-900">4.80</td>
                  <td className="p-3 text-center font-mono text-sm text-indigo-900">0.40</td>
                  <td className="p-3 text-center text-xs text-emerald-800 font-bold">มากที่สุด (Highest)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 4.8 Figure */}
        <Figure4_8_UatSatisfactionRadar />

        {/* 4.5.3 Qualitative Feedback */}
        <div className="p-4 sm:p-5 bg-white border border-slate-200 rounded-2xl space-y-3 shadow-2xs">
          <h4 className="font-bold text-slate-900 text-base flex items-center gap-2">
            <MessageSquareQuote className="w-5 h-5 text-indigo-700" />
            <span>4.5.3 สรุปข้อคิดเห็นเชิงคุณภาพและเสียงสะท้อนจากผู้ใช้งาน (Qualitative User Feedback)</span>
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            จากการสัมภาษณ์เชิงลึก (In-depth Interviews) ผู้ทดลองใช้งานได้ให้ข้อคิดเห็นที่เป็นประโยชน์อย่างยิ่ง สรุปเป็น 3 ประเด็นหลัก:
          </p>
          <div className="space-y-2.5 text-xs text-slate-700">
            <blockquote className="p-3 bg-slate-50 rounded-xl border-l-4 border-indigo-500 italic">
              "สิ่งที่ชอบที่สุดคือสคริปต์ 3 กลยุทธ์ เวลาลูกค้าบอกว่า 'แพงจัง' ปกติเซลส์ใหม่อย่างผมจะหน้าชาแล้วรีบลดราคาให้ทันที 
              แต่พอ AI ขึ้นกรอบ Value Re-framing ให้พูดถึงความคุ้มค่าและผลลัพธ์ที่ประหยัดได้ในระยะยาว ทำให้ผมปิดดีลได้โดยไม่ต้องยอมลดราคาเลยแม้แต่บาทเดียว" 
              <span className="block not-italic font-bold text-slate-900 mt-1">— พนักงานขายซอฟต์แวร์ B2B (ประสบการณ์ 6 เดือน)</span>
            </blockquote>

            <blockquote className="p-3 bg-slate-50 rounded-xl border-l-4 border-emerald-500 italic">
              "Follow-up Queue เปลี่ยนชีวิตมากครับ เมื่อก่อนลีดตกหล่นไปเป็นร้อยเพราะจำไม่ได้ว่าต้องทักใครเมื่อไหร่ 
              พอมีระบบนี้ มันเตือนและร่างข้อความเนียนๆ มาให้เลย แค่กดคลิกเดียวส่งไลน์หาลูกค้า ลูกค้าตอบกลับมาจนปิดยอดไตรมาสได้ทะลุเป้า" 
              <span className="block not-italic font-bold text-slate-900 mt-1">— ตัวแทนฝ่ายขายอาวุโส (Senior Account Executive)</span>
            </blockquote>

            <blockquote className="p-3 bg-slate-50 rounded-xl border-l-4 border-amber-500 italic">
              "ในฐานะผู้บริหาร จุดแข็งที่สุดของระบบนี้คือ Guardrail ที่ล็อกโควตาส่วนลดไว้ ทำให้เราควบคุม Margin ของบริษัทได้จริง 
              และระบบ BANT Score ยังช่วยให้เรารู้ว่าลีดไหนเป็นทองคำ ลีดไหนแค่มาสืบราคา ทำให้ทีมโฟกัสพลังงานได้ถูกจุด" 
              <span className="block not-italic font-bold text-slate-900 mt-1">— กรรมการผู้จัดการ (Managing Director, บจก. เทคโนโลยีโซลูชัน)</span>
            </blockquote>
          </div>
        </div>

        {/* 4.6 Discussion of Results */}
        <div id="section-4-6" className="p-4 sm:p-5 bg-indigo-50/50 border border-indigo-200 rounded-2xl space-y-3 mt-6">
          <div className="border-b border-indigo-200 pb-2">
            <h4 className="font-bold text-indigo-950 text-base flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-indigo-800" />
              <span>4.6 อภิปรายผลการดำเนินงานและการทดสอบ (Discussion of Results &amp; Implications)</span>
            </h4>
            <p className="text-xs text-indigo-700">
              Critical Synthesis, Theoretical Alignment, Key Success Factors &amp; Identified Constraints
            </p>
          </div>

          <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
            <p>
              ผลลัพธ์จากการวิจัยและทดสอบในบทนี้ สอดคล้องกับสมมติฐานการวิจัยที่ตั้งไว้ตั้งแต่ต้นอย่างสมบูรณ์ โดยสามารถสรุปข้อค้นพบสำคัญได้เป็น 3 ประเด็น:
            </p>

            <div className="space-y-2">
              <div className="p-3 bg-white border border-indigo-100 rounded-xl">
                <strong className="text-indigo-950 block mb-1">1. การยืนยันประสิทธิภาพของ In-Context Learning ในงานเจรจาภาษาไทย</strong>
                <p className="text-slate-600">
                  การใช้แบบจำลองภาษาขนาดใหญ่สมัยใหม่ (Gemini 2.5 Flash) ควบคู่กับ System Prompt ที่ระบุบทบาทอย่างชัดเจนและมี Grounding Data สินค้า 
                  สามารถทำความเข้าใจบริบทการสนทนาภาษาไทยและสแลงทางธุรกิจได้อย่างลึกซึ้ง โดยมีความแม่นยำในการจำแนกข้อโต้แย้งสูงถึง 94.2% 
                  ซึ่งเหนือกว่าการใช้ Regular Expression หรือโมเดลจำแนกแบบดั้งเดิม (Keyword-based Intent Matching) ในอดีตอย่างมาก
                </p>
              </div>

              <div className="p-3 bg-white border border-indigo-100 rounded-xl">
                <strong className="text-indigo-950 block mb-1">2. การผสานปัญญาประดิษฐ์เข้ากับกระบวนการทำงานของมนุษย์ (Human-AI Symbiosis)</strong>
                <p className="text-slate-600">
                  ระบบไม่ได้มุ่งหวังที่จะมาทดแทนพนักงานขาย แต่ทำหน้าที่เป็น "นักบินผู้ช่วย" (Copilot) 
                  การที่พนักงานขายสามารถเลือกสคริปต์ ปรับแต่งคำพูด หรือเพิ่มความรู้สึกอบอุ่นเฉพาะตัวเข้าไป ทำให้ลูกค้ารู้สึกถึงความใส่ใจแบบมนุษย์ 
                  ขณะเดียวกันก็ได้ข้อมูลที่ถูกต้องและกรอบราคาที่แม่นยำจาก AI ส่งผลให้อัตรา Win Rate เพิ่มขึ้นเกือบเท่าตัว (+89.1%)
                </p>
              </div>

              <div className="p-3 bg-white border border-indigo-100 rounded-xl">
                <strong className="text-indigo-950 block mb-1">3. ข้อจำกัดของระบบที่ค้นพบจากการทดสอบ (System Limitations)</strong>
                <p className="text-slate-600">
                  (1) ในกรณีที่สภาพแวดล้อมมีเสียงรบกวนภายนอกสูง (Noise &gt; 65 dB) ระบบ Speech Recognition ของเบราว์เซอร์อาจเกิดการถอดความคลาดเคลื่อน 
                  ทำให้ต้องอาศัยการพิมพ์แก้ไขสคริปต์ด้วยมือบางส่วน; 
                  (2) ในสถานการณ์ที่การเชื่อมต่อเครือข่ายโทรศัพท์เคลื่อนที่มีความหน่วงสูง (High Network Latency &gt; 3,000 ms) 
                  เวลาตอบสนองรวมอาจขยับขึ้นไปอยู่ที่ 2.5-3.0 วินาที ซึ่งผู้วิจัยมีข้อเสนอแนะในการนำระบบ Edge Model Cache มาประยุกต์ใช้ในการพัฒนาเฟสถัดไป
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
