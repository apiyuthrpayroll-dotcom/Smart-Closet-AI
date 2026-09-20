import React from 'react';
import { Award, Briefcase, Building, GraduationCap, CheckCircle2, HeartHandshake, ShieldCheck, TrendingUp, Sparkles } from 'lucide-react';

export const Section5_3_ProjectContributions: React.FC = () => {
  return (
    <div id="section-5-3" className="space-y-6 pt-4">
      <div className="border-b border-indigo-100 pb-3">
        <div className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold text-sm shadow-xs">
            5.3
          </span>
          <h3 className="text-xl font-bold text-slate-900 font-serif">
            ประโยชน์และคุณค่าที่ได้รับจากโครงงาน (Project Contributions &amp; Value Creation)
          </h3>
        </div>
        <p className="text-xs text-slate-500 mt-1 italic">
          Operational, Strategic Business, and Academic Information Technology Contributions
        </p>
      </div>

      <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed text-justify">
        <p>
          โครงงานวิจัยและพัฒนานวัตกรรม <strong>Smart Closer AI</strong> มิได้เป็นเพียงการสร้างซอฟต์แวร์ต้นแบบเชิงเทคนิคเท่านั้น หากแต่ได้สร้างคุณูปการและคุณค่าที่เป็นรูปธรรมทั้งในระดับบุคคล ระดับองค์กรธุรกิจ และระดับวิชาการด้านเทคโนโลยีสารสนเทศ ดังนี้:
        </p>

        {/* ตารางเมทริกซ์สรุปคุณค่า 3 มิติ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
          <div className="p-4 rounded-xl border border-indigo-200 bg-indigo-50/50 space-y-2.5">
            <div className="w-9 h-9 rounded-lg bg-indigo-600 text-white flex items-center justify-center">
              <Briefcase className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-indigo-950 text-base">ระดับปฏิบัติการ (Operational)</h4>
            <p className="text-xs text-slate-600">
              เสริมพลังและเพิ่มประสิทธิภาพพนักงานขายหน้างาน (Sales Reps) ลดความเหนื่อยล้าทางสมอง และเพิ่มความมั่นใจในการเจรจา
            </p>
            <ul className="text-xs text-slate-700 space-y-1 pl-4 list-disc">
              <li>ลดเวลาตอบข้อโต้แย้งเหลือ 1.28 วินาที</li>
              <li>ลดเวลาฝึกอบรมเซลส์ใหม่ลงกว่า 60%</li>
              <li>มีบทพูด 3 กลยุทธ์พร้อมใช้ทันที</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/50 space-y-2.5">
            <div className="w-9 h-9 rounded-lg bg-emerald-600 text-white flex items-center justify-center">
              <Building className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-emerald-950 text-base">ระดับองค์กรธุรกิจ (Strategic)</h4>
            <p className="text-xs text-slate-600">
              สร้างความสามารถในการคาดการณ์รายได้ ปกป้องกำไรขั้นต้น และลดการสูญเสียโอกาสทางธุรกิจ
            </p>
            <ul className="text-xs text-slate-700 space-y-1 pl-4 list-disc">
              <li>เพิ่ม Win Rate สูงขึ้น +89.1%</li>
              <li>ปกป้อง Gross Margin ที่ 41.2%</li>
              <li>กู้คืนลูกค้าเงียบหายได้ 37.1% (5.9 เท่า)</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl border border-purple-200 bg-purple-50/50 space-y-2.5">
            <div className="w-9 h-9 rounded-lg bg-purple-600 text-white flex items-center justify-center">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-purple-950 text-base">ระดับวิชาการ (Academic)</h4>
            <p className="text-xs text-slate-600">
              ต้นแบบสถาปัตยกรรม Human-in-the-loop, Thai RAG Prompting และการประเมินผล AI ในกระบวนการขาย
            </p>
            <ul className="text-xs text-slate-700 space-y-1 pl-4 list-disc">
              <li>โมเดลจำแนกข้อโต้แย้งภาษาไทย 94.2%</li>
              <li>สถาปัตยกรรม Zero-Hallucination Catalog</li>
              <li>เกณฑ์ประเมินสคริปต์การขาย 4 มิติ</li>
            </ul>
          </div>
        </div>

        {/* รายละเอียดแต่ละหัวข้อ */}
        <h4 className="text-base sm:text-lg font-bold text-slate-900 pt-2 flex items-center gap-2">
          <Briefcase className="w-5 h-5 text-indigo-600 shrink-0" />
          <span>5.3.1 ประโยชน์ต่อพนักงานขายและฝ่ายปฏิบัติการ (Frontline Sales Empowerment)</span>
        </h4>
        <div className="space-y-2 text-xs sm:text-sm pl-4 border-l-2 border-indigo-200">
          <p>
            <strong>1. ลดภาระการคิดและคลายความวิตกกังวลหน้างาน (Cognitive Load Reduction):</strong> ในการขายสด โดยเฉพาะการเผชิญหน้ากับคำถามยากๆ เช่น "ทำไมแพงกว่าเจ้าอื่น?", "ไม่มั่นใจในผลลัพธ์", "ขอส่วนลด 30% ได้ไหม" พนักงานมักเกิดอาการตกใจและตอบผิดพลาด การมี AI เป็นผู้ช่วยวิเคราะห์และเสนอสคริปต์ 3 ตัวเลือกภายใน 1.28 วินาที ช่วยให้พนักงานมีเสาหลักทางความคิดและสื่อสารออกไปอย่างสุขุมน่าเชื่อถือ
          </p>
          <p>
            <strong>2. ลดระยะเวลาการเรียนรู้ของพนักงานขายใหม่ (Ramping Time Optimization):</strong> ปกติแล้วการฝึกอบรมพนักงานขายใหม่ให้เข้าใจข้อมูลสินค้า ท่องจำราคา และเรียนรู้เทคนิคการขจัดข้อโต้แย้งต้องใช้เวลานาน 2-3 เดือน ระบบ Smart Closer AI ทำหน้าที่เสมือนคู่หูที่มีความรู้สินค้าสมบูรณ์แบบตั้งแต่วันแรก ทำให้พนักงานใหม่เริ่มทำงานและปิดการขายจริงได้ภายในสัปดาห์แรกของการทำงาน
          </p>
          <p>
            <strong>3. ป้องกันงานตกหล่นด้วยระบบติดตามอัจฉริยะ (Follow-up Automation):</strong> พนักงานไม่ต้องคอยจดจำเองว่าลูกค้าคนไหนถึงเวลาต้องทักซ้ำ ระบบตรวจจับการเงียบหายและสร้างข้อความที่ปรับให้เหมาะกับประวัติการคุยของลูกค้าแต่ละคนพร้อมส่งทันที ช่วยประหยัดเวลาพิมพ์ข้อความได้กว่า 45-60 นาทีต่อวัน
          </p>
        </div>

        <h4 className="text-base sm:text-lg font-bold text-slate-900 pt-3 flex items-center gap-2">
          <Building className="w-5 h-5 text-emerald-600 shrink-0" />
          <span>5.3.2 ประโยชน์ต่อผู้บริหารและองค์กรธุรกิจ (Strategic &amp; Executive Value)</span>
        </h4>
        <div className="space-y-2 text-xs sm:text-sm pl-4 border-l-2 border-emerald-200">
          <p>
            <strong>1. เพิ่มประสิทธิภาพและผลิตภาพของกระบวนการขาย (Sales Productivity Multiplier):</strong> ด้วยการที่วงจรการขาย (Sales Cycle) หดสั้นลงจาก 14.2 วัน เหลือเพียง 8.1 วัน ทำให้ทีมขายสามารถรองรับและบริหารจัดการลีดจำนวนมากขึ้นได้โดยไม่ต้องเพิ่มจำนวนบุคลากร เป็นการเพิ่มความสามารถในการสร้างรายได้ต่อหัว (Revenue per Rep) อย่างชัดเจน
          </p>
          <p>
            <strong>2. การปกป้องส่วนต่างกำไรของบริษัท (Margin Defense &amp; Financial Governance):</strong> ผู้บริหารสามารถกำหนดเพดานส่วนลดและกติกาโปรโมชันผ่านระบบ Smart Catalog ได้แบบรวมศูนย์ โดย AI จะช่วยรักษาผลประโยชน์ขององค์กร ไม่ยอมให้เกิดการตัดราคาตามอำเภอใจ แต่เน้นการสร้างมูลค่าเพิ่ม (Value Selling)
          </p>
          <p>
            <strong>3. ความโปร่งใสของท่อส่งยอดขาย (Pipeline Visibility &amp; Predictability):</strong> ระบบ Kanban Board และ BANT Score ช่วยให้ผู้จัดการฝ่ายขายเห็นภาพรวมของสุขภาพไปป์ไลน์ (Pipeline Health) ได้แบบเรียลไทม์ สามารถพยากรณ์ยอดขายล่วงหน้า (Sales Forecasting) ได้แม่นยำยิ่งขึ้น และเข้าช่วยเหลือเคสที่ติดขัดได้ทันท่วงที
          </p>
        </div>

        <h4 className="text-base sm:text-lg font-bold text-slate-900 pt-3 flex items-center gap-2">
          <GraduationCap className="w-5 h-5 text-purple-600 shrink-0" />
          <span>5.3.3 คุณค่าทางวิชาการและเทคโนโลยีสารสนเทศ (Academic Contributions)</span>
        </h4>
        <div className="space-y-2 text-xs sm:text-sm pl-4 border-l-2 border-purple-200">
          <p>
            <strong>1. ต้นแบบการประยุกต์ใช้ Large Language Model ในงานขายภาษาไทย:</strong> โครงงานนี้เป็นหลักฐานเชิงประจักษ์ชิ้นสำคัญที่แสดงว่า โมเดลภาษาขนาดใหญ่ระดับสากล (เช่น Google Gemini) สามารถถูกปรับแต่ง (Fine-Prompting) และวางแนวป้องกัน (Grounding Guardrails) ให้ทำงานในบริบทภาษาไทยที่มีความซับซ้อนของการต่อรองและการปฏิเสธอย่างนุ่มนวลได้อย่างมีประสิทธิผลสูงถึง 94.2%
          </p>
          <p>
            <strong>2. กรอบแนวคิดการประเมินคุณภาพสคริปต์การขาย (Sales Script Evaluation Rubric):</strong> ได้พัฒนาและทดสอบเกณฑ์การประเมินสคริปต์ปิดการขาย 4 มิติ (ความถูกต้อง, การปรับกรอบความคิด, การรักษาความสัมพันธ์ และความเร่งด่วน) ซึ่งสามารถนำไปใช้เป็นมาตรฐานอ้างอิงสำหรับงานวิจัยด้าน AI-Assisted Negotiation ในอนาคต
          </p>
          <p>
            <strong>3. สถาปัตยกรรมระบบแบบ Zero-Latency Dual-Pane:</strong> เป็นกรณีศึกษาการออกแบบซอฟต์แวร์บนเว็บที่เชื่อมต่อระหว่าง Frontend React, Express Gateway, Local Caching และ Cloud AI API ที่รักษาเวลาตอบสนองรวมให้อยู่ในระดับ 1.28 วินาที ซึ่งเหมาะสำหรับสภาพแวดล้อมการทำงานแบบ Real-time Copilot
          </p>
        </div>
      </div>
    </div>
  );
};
