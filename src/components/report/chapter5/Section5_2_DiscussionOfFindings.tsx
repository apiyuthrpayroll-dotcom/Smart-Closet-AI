import React from 'react';
import { BookOpen, Brain, Sparkles, Scale, ShieldAlert, Users2, Check } from 'lucide-react';

export const Section5_2_DiscussionOfFindings: React.FC = () => {
  return (
    <div id="section-5-2" className="space-y-6 pt-4">
      <div className="border-b border-indigo-100 pb-3">
        <div className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold text-sm shadow-xs">
            5.2
          </span>
          <h3 className="text-xl font-bold text-slate-900 font-serif">
            อภิปรายผลการวิจัย (Discussion of Research Findings &amp; Theoretical Insights)
          </h3>
        </div>
        <p className="text-xs text-slate-500 mt-1 italic">
          Theoretical Alignment, NLP Grounding Mechanisms, Behavioral Psychology &amp; Human-AI Collaboration Insights
        </p>
      </div>

      <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed text-justify">
        <p>
          จากผลการทดสอบการทำงานของระบบและผลการทดลองใช้งานจริงภาคสนามในบทที่ 4 ซึ่งแสดงให้เห็นถึงพัฒนาการอย่างก้าวกระโดดของตัวชี้วัดประสิทธิภาพการขาย คณะผู้วิจัยสามารถนำประเด็นผลลัพธ์มาอภิปรายเชิงวิชาการ โดยเชื่อมโยงเข้ากับทฤษฎี กรอบแนวคิด และสถาปัตยกรรมทางเทคโนโลยีที่เกี่ยวข้องได้ใน 5 มิติหลัก ดังต่อไปนี้:
        </p>

        {/* 5.2.1 ทฤษฎีจิตวิทยาการขาย */}
        <div className="p-4 sm:p-5 rounded-xl border border-slate-200 bg-white space-y-3 shadow-xs">
          <h4 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-indigo-600 shrink-0" />
            <span>5.2.1 การผสานจิตวิทยาการขาย (Influence &amp; SPIN Selling) เข้ากับ Prompt Engineering</span>
          </h4>
          <p>
            หนึ่งในข้อค้นพบที่สำคัญที่สุดของโครงงานนี้คือ <em>"ความฉลาดของ AI มิได้ขึ้นอยู่กับขนาดพารามิเตอร์ของโมเดลภาษาเพียงอย่างเดียว หากแต่อยู่ที่การวางโครงสร้างและกรอบชี้นำความคิด (Cognitive Scaffolding) ผ่านระบบ Prompt Architecture"</em>
          </p>
          <p>
            ในระบบแชทบอทหรือเครื่องมือช่วยตอบทั่วไป การให้คำตอบมักเป็นในลักษณะ <strong>"ชี้แจงข้อเท็จจริง (Informational Retort)"</strong> เช่น เมื่อลูกค้าทักว่า "ราคาแพงเกินไป" บอททั่วไปจะตอบเพียงการแจกแจงรายการคุณสมบัติสินค้า ซึ่งผลการวิจัยยืนยันว่าการตอบในลักษณะนี้มักกระตุ้นให้ลูกค้าเกิดกลไกป้องกันตัว (Defensive Mechanism) และยุติการเจรจา
          </p>
          <p>
            ในทางตรงกันข้าม ระบบ <strong>Smart Closer AI</strong> ได้นำหลักการจิตวิทยาการขายของ <strong>Cialdini (2021)</strong> และระเบียบวิธี <strong>SPIN Selling ของ Rackham (1988)</strong> มาออกแบบเป็นกลยุทธ์ 3 ทิศทางแบบอัตโนมัติ:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-700">
            <li>
              <strong>Value Re-framing (การปรับกรอบมูลค่า):</strong> สอดคล้องกับ Need-Payoff Question ใน SPIN โดยเปลี่ยนจุดโฟกัสจาก "ราคาที่ต้องจ่ายวันนี้" ไปสู่ "ต้นทุนของปัญหาที่เกิดขึ้นหากไม่แก้ไข" หรือการคำนวณผลตอบแทนการลงทุน (ROI) ซึ่งช่วยให้ลูกค้าตระหนักถึงมูลค่าระยะยาว
            </li>
            <li>
              <strong>Social Proof (หลักฐานทางสังคมและการยืนยัน):</strong> ใช้พลังของการยอมรับจากคนกลุ่มเดียวกัน โดยยกเคสอ้างอิงลูกค้าในอุตสาหกรรมใกล้เคียงที่มีผลลัพธ์ประจักษ์ชัด ช่วยลดความลังเลใจและความกังวลในตัวสินค้า (Risk Aversion)
            </li>
            <li>
              <strong>Scarcity &amp; Urgency (ความขาดแคลนและความเร่งด่วนตามเงื่อนไขจริง):</strong> กระตุ้นการตัดสินใจผ่านสิทธิพิเศษหรือโควตาส่วนลดที่มีจำนวนและเวลาจำกัดตามที่ผู้บริหารกำหนดไว้ในแคตตาล็อกจริง
            </li>
          </ul>
          <p className="text-xs text-slate-600 italic">
            การสร้างสคริปต์ 3 ตัวเลือกที่วางอยู่บนหลักการดังกล่าว ทำให้พนักงานขายสามารถเลือกแนวทางที่สอดคล้องกับบุคลิกของลูกค้าได้ทันที ซึ่งส่งผลโดยตรงต่อการเพิ่มขึ้นของ Conversion Rate ถึง +89.1% ในการทดลองภาคสนาม
          </p>
        </div>

        {/* 5.2.2 การประมวลผลภาษาไทยและ In-Context Grounding */}
        <div className="p-4 sm:p-5 rounded-xl border border-slate-200 bg-white space-y-3 shadow-xs">
          <h4 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
            <Brain className="w-5 h-5 text-indigo-600 shrink-0" />
            <span>5.2.2 ประสิทธิผลของการใช้ In-Context Grounding แก้ไขปัญหา Hallucination ในภาษาไทย</span>
          </h4>
          <p>
            อุปสรรคสำคัญของการนำ Generative AI มาใช้ในการค้าเชิงพาณิชย์คือปัญหา <strong>การกุข้อมูลเท็จ (Hallucination)</strong> โดยเฉพาะการจำหรือเดาราคาสินค้า เงื่อนไขการรับประกัน หรือการสร้างโปรโมชันที่ไม่มีอยู่จริง ซึ่งอาจก่อให้เกิดความเสียหายทางกฎหมายและการเงินแก่ธุรกิจ
          </p>
          <p>
            ในการวิจัยนี้ คณะผู้วิจัยได้เลือกใช้แนวทาง <strong>Strict In-Context Grounding</strong> โดยการนำข้อมูลแคตตาล็อกสินค้า, ราคา, คุณสมบัติเฉพาะ และเพดานส่วนลดมาเข้ารหัสและฉีดเข้าไปใน System Prompt โดยตรง (Direct Context Injection) ร่วมกับการใช้โมเดล Google Gemini
          </p>
          <p>
            ผลการทดสอบยืนยันว่า เทคนิคดังกล่าวมีประสิทธิภาพสูงมาก โดยมี <strong>อัตราความถูกต้องของราคาตามแคตตาล็อกสูงถึง 98.2%</strong> และไม่มีกรณีใดที่ AI สัญญาการลดราคาเกินกว่าโควตาสูงสุดที่ระบุไว้ในระบบ (Max Discount Cap Enforced 100%) นอกจากนี้ โมเดลยังสามารถเข้าใจภาษาพูด คำสแลง และบริบทการต่อรองของสังคมไทยได้อย่างเป็นธรรมชาติ เช่น คำว่า "ขอปรึกษาแฟนก่อน", "ช่วยลดให้อีกนิดได้ไหม", "เจ้าอื่นเขาให้ของแถมเยอะกว่า" ได้อย่างถูกต้องแม่นยำ
          </p>
        </div>

        {/* 5.2.3 BANT Lead Scoring กับ Attention Economy */}
        <div className="p-4 sm:p-5 rounded-xl border border-slate-200 bg-white space-y-3 shadow-xs">
          <h4 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
            <Scale className="w-5 h-5 text-indigo-600 shrink-0" />
            <span>5.2.3 บทบาทของ BANT Scoring ต่อการลดต้นทุนค่าเสียโอกาส (Opportunity Cost)</span>
          </h4>
          <p>
            ตามหลักเศรษฐศาสตร์พฤติกรรมและแนวคิด Attention Economy เวลาและความสนใจของพนักงานขายเป็นทรัพยากรที่มีขีดจำกัดอย่างยิ่ง (Scarce Resource) งานวิจัยของ Oldroyd et al. (2011) ระบุว่าทีมขายทั่วไปใช้เวลากว่า 60-70% ไปกับลีดที่ไม่มีโอกาสซื้อ ส่งผลให้เกิดต้นทุนค่าเสียโอกาสมหาศาล
          </p>
          <p>
            การนำโมเดล <strong>Predictive BANT Lead Scoring (100 คะแนน)</strong> มาประยุกต์ใช้ ช่วยเปลี่ยนรูปแบบการทำงานจากการสุ่มติดต่อ (Ad-hoc Dialing) ไปสู่ <strong>การขายที่ขับเคลื่อนด้วยข้อมูล (Data-Driven Prioritization)</strong>:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs my-2">
            <div className="p-3 bg-red-50/70 border border-red-200 rounded-lg">
              <span className="font-bold text-red-900 block mb-1">Tier A (Hot: 80-100)</span>
              มีทั้งงบประมาณและอำนาจตัดสินใจ พร้อมซื้อภายใน 7 วัน ระบบสั่งให้พนักงานติดต่อกลับทันทีภายใน 10 นาทีแรก
            </div>
            <div className="p-3 bg-amber-50/70 border border-amber-200 rounded-lg">
              <span className="font-bold text-amber-900 block mb-1">Tier B (Warm: 60-79)</span>
              มีความต้องการชัดเจนแต่ติดเรื่องเวลาหรือรออนุมัติ ระบบแนะนำสคริปต์เสริมความมั่นใจและการส่ง Case Study
            </div>
            <div className="p-3 bg-slate-100 border border-slate-200 rounded-lg">
              <span className="font-bold text-slate-800 block mb-1">Tier C (Cold: 0-59)</span>
              ยังไม่มีงบประมาณหรือขาดอำนาจตัดสินใจ ระบบปรับเข้าสู่การฟูมฟัก (Nurturing) แบบอัตโนมัติ ไม่เปลืองเวลาทีมขาย
            </div>
          </div>
          <p>
            ผลการศึกษาเปรียบเทียบชี้ชัดว่า การจัดลำดับความสำคัญนี้ช่วยให้ <strong>ระยะเวลาในวงจรการขาย (Sales Cycle) ลดลงจาก 14.2 วัน เหลือเพียง 8.1 วัน (-42.9%)</strong> เนื่องจากทีมขายทุ่มเทพลังงานให้กับลูกค้าที่พร้อมตัดสินใจได้ตรงเป้า
          </p>
        </div>

        {/* 5.2.4 Discount Guardrails และ Margin Protection */}
        <div className="p-4 sm:p-5 rounded-xl border border-slate-200 bg-white space-y-3 shadow-xs">
          <h4 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-indigo-600 shrink-0" />
            <span>5.2.4 กลไก Guardrail Rules ในการพิทักษ์อัตรากำไรขั้นต้น (Gross Profit Margin Protection)</span>
          </h4>
          <p>
            ในวงการขายทั่วไป พนักงานขายมักเลือกทางที่ง่ายที่สุดในการปิดการขาย คือ <em>"การตัดราคาหรือการให้ส่วนลดสูงสุดในทันที"</em> ส่งผลให้อัตรากำไรของบริษัทถูกกัดกร่อนอย่างรวดเร็ว (Margin Erosion)
          </p>
          <p>
            ระบบ Smart Closer AI ได้พิสูจน์ให้เห็นถึงพลังของ <strong>Discount Guardrails Architecture</strong> โดยระบบจะไม่อนุญาตให้ AI แนะนำส่วนลดเกินเพดานที่ตั้งไว้ และในสคริปต์เริ่มต้น AI จะเสนอการเพิ่มมูลค่า (Value-Add) หรือของแถมทดแทนการลดเงินสด ส่งผลให้การทดลองภาคสนามสามารถรักษาอัตรากำไรขั้นต้นได้สูงถึง <strong>41.2%</strong> เมื่อเทียบกับกลุ่มควบคุมเดิมที่กำไรลดเหลือเพียง 33.8% จากการลดราคาอย่างไร้การควบคุม
          </p>
        </div>

        {/* 5.2.5 Human-in-the-Loop & AI Symbiosis */}
        <div className="p-4 sm:p-5 rounded-xl border border-slate-200 bg-white space-y-3 shadow-xs">
          <h4 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
            <Users2 className="w-5 h-5 text-indigo-600 shrink-0" />
            <span>5.2.5 การทำงานประสานกันระหว่างมนุษย์และ AI (Human-AI Symbiosis) มากกว่าการแทนที่อย่างสมบูรณ์</span>
          </h4>
          <p>
            การตัดสินใจซื้อในสินค้าที่มีมูลค่าปานกลางถึงสูง (High-Involvement B2B/B2C Products) เช่น อสังหาริมทรัพย์, ยานยนต์, โซลูชันซอฟต์แวร์ หรือแพ็กเกจประกันภัย จำเป็นต้องอาศัย <strong>ความไว้วางใจ (Empathy, Emotional Connection &amp; Trust)</strong> ซึ่งเป็นมิติที่บอทอัตโนมัติเต็มรูปแบบ (Pure Autonomous Bot) ยังไม่สามารถทดแทนมนุษย์ได้อย่างสมบูรณ์
          </p>
          <p>
            โครงงานนี้จึงเลือกวางตำแหน่งระบบเป็น <strong>"AI Sales Copilot" (ผู้ช่วยอัจฉริยะเคียงข้างพนักงานขาย)</strong> โดยมีหลักการคือ <em>"AI ทำหน้าที่เป็นมันสมองที่ประมวลผลข้อมูล สกัดสาระสำคัญ วินิจฉัยข้อโต้แย้ง และเตรียมบทพูดให้ ส่วนมนุษย์ทำหน้าที่เป็นผู้ส่งมอบน้ำเสียง อารมณ์ ความจริงใจ และความเข้าใจลูกค้า"</em>
          </p>
          <p>
            การผสานพลังนี้ (Human-AI Symbiosis) ส่งผลให้พนักงานขายมีความมั่นใจสูงขึ้น ลดความเครียดและความประหม่าหน้างาน และทำให้ลูกค้ารู้สึกว่าได้รับการดูแลจากผู้เชี่ยวชาญตัวจริงมากกว่าการคุยกับหุ่นยนต์ ซึ่งเป็นกุญแจสำคัญที่ทำให้ได้รับคะแนนความพึงพอใจ UAT สูงถึง 4.80/5.00
          </p>
        </div>
      </div>
    </div>
  );
};
