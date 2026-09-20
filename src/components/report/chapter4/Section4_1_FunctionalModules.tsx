import React from 'react';
import { 
  Figure4_1_DashboardInterface, 
  Figure4_2_SalesCopilotInterface, 
  Figure4_3_PipelineKanbanInterface, 
  Figure4_4_FollowUpQueueInterface 
} from '../ReportFigures';
import { 
  LayoutDashboard, 
  Bot, 
  Kanban, 
  Clock, 
  ShieldAlert, 
  Award, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  Package, 
  Users, 
  BarChart3 
} from 'lucide-react';

export const Section4_1_FunctionalModules: React.FC = () => {
  return (
    <div id="section-4-1" className="space-y-6">
      <div className="border-b border-indigo-200 pb-3">
        <h3 className="text-xl font-bold text-indigo-950 font-serif flex items-center gap-2">
          <LayoutDashboard className="w-5 h-5 text-indigo-700" />
          <span>4.1 ผลการพัฒนาระบบส่วนต่อประสานผู้ใช้และการทำงานแต่ละโมดูล (System UI & Modules Implementation)</span>
        </h3>
        <p className="text-xs text-slate-500 mt-0.5">
          Detailed Functional Demonstration of the 8 Operational Modules in Smart Closer AI Platform
        </p>
      </div>

      <div className="space-y-5 text-slate-700 text-sm sm:text-base leading-relaxed text-justify">
        <p>
          จากการดำเนินงานวิจัยและพัฒนาระบบตามระเบียบวิธีที่ได้ออกแบบไว้ในบทที่ 3 ผู้วิจัยได้ดำเนินการสร้างระบบ
          <strong> Smart Closer AI (ระบบปัญญาประดิษฐ์ผู้ช่วยปิดการขายอัจฉริยะ)</strong> 
          จนเสร็จสมบูรณ์ตรงตามขอบเขตและเป้าประสงค์ของโครงงาน โดยระบบได้รับการพัฒนาในรูปแบบ Responsive Web Application 
          ที่รองรับการใช้งานทั้งบนจอคอมพิวเตอร์ตั้งโต๊ะ แล็ปท็อป และแท็บเล็ตของฝ่ายขาย ประกอบด้วยโมดูลการทำงานหลัก 8 โมดูล ดังมีรายละเอียดและภาพประกอบหน้าจอการทำงานจริงต่อไปนี้:
        </p>

        {/* 4.1.1 Dashboard */}
        <div className="p-4 sm:p-5 bg-white border border-slate-200 rounded-2xl space-y-3 shadow-2xs">
          <h4 className="font-bold text-slate-900 text-base flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-800 flex items-center justify-center text-xs font-mono font-bold">1</span>
            <span>4.1.1 หน้าจอแดชบอร์ดสรุปผลการขายและตัวชี้วัดสำคัญ (Executive Sales & Performance Dashboard)</span>
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            หน้าจอแดชบอร์ดได้รับการออกแบบเพื่อเป็นศูนย์บัญชาการ (Command Center) สำหรับผู้จัดการฝ่ายขายและตัวแทนขาย 
            โดยประมวลผลข้อมูลไปป์ไลน์ทั้งหมดแบบเรียลไทม์ แสดงตัวชี้วัดสำคัญ 4 ด้าน ได้แก่:
          </p>
          <ul className="list-disc pl-5 text-xs sm:text-sm text-slate-600 space-y-1">
            <li><strong>มูลค่าไปป์ไลน์รวม (Total Pipeline Value):</strong> สรุปมูลค่าการเจรจาดีลที่กำลังดำเนินการอยู่ทั้งหมดในรอบไตรมาส พร้อมแนวโน้มการเติบโตเปรียบเทียบกับเดือนที่ผ่านมา</li>
            <li><strong>อัตราความสำเร็จในการปิดการขาย (Closing Win Rate):</strong> คำนวณเปอร์เซ็นต์ของดีลที่เปลี่ยนเป็นสถานะ Closed Won เทียบกับจำนวน Lead ทั้งหมดที่เข้าสู่กระบวนการเจรจา</li>
            <li><strong>เวลาเฉลี่ยในการตอบสนอง (Average Response Latency):</strong> วัดความเร็วตั้งแต่ระบบตรวจพบคำถามหรือข้อโต้แย้ง จนกระทั่ง AI สังเคราะห์สคริปต์แนะนำให้แก่พนักงานขาย</li>
            <li><strong>การกระจายตัวของ Lead ตามคะแนน BANT (Lead Tier Distribution):</strong> แสดงสัดส่วนของลูกค้าในระดับ Hot (คะแนน 80-100), Warm (คะแนน 50-79) และ Cold (คะแนนต่ำกว่า 50)</li>
          </ul>

          <Figure4_1_DashboardInterface />
        </div>

        {/* 4.1.2 Sales Copilot */}
        <div className="p-4 sm:p-5 bg-white border border-slate-200 rounded-2xl space-y-3 shadow-2xs">
          <h4 className="font-bold text-slate-900 text-base flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-800 flex items-center justify-center text-xs font-mono font-bold">2</span>
            <span>4.1.2 หน้าจอผู้ช่วยปิดการขายอัจฉริยะแบบสนทนาและเสียง (Conversational & Voice Sales Copilot Workspace)</span>
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            โมดูลหลักที่เป็นหัวใจของระบบ คือพื้นที่ทำงานเจรจาปิดการขายแบบ Dual-Pane โดยหน้าจอด้านซ้ายจำลองการสนทนากับลูกค้า 
            (รองรับทั้งการพิมพ์ข้อความแชท และการแปลงเสียงพูดแบบเรียลไทม์ด้วย Web Audio API) 
            เมื่อลูกค้าพิมพ์หรือเอ่ยข้อความที่มีลักษณะเป็นข้อโต้แย้ง (Objection) เช่น ปัญหาเรื่องราคาแพง, ขอปรึกษาผู้บริหาร, หรือเปรียบเทียบกับคู่แข่ง 
            โมดูล AI ในพาเนลด้านขวาจะดำเนินการประมวลผลทันที โดยแสดงผล:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 my-2">
            <div className="p-3 bg-indigo-50/70 border border-indigo-200 rounded-xl text-xs">
              <span className="font-bold text-indigo-900 block mb-1">1. Objection Diagnosis</span>
              <span className="text-slate-600">ระบุประเภทข้อโต้แย้งอย่างแม่นยำ (ราคา, เวลา, ความเสี่ยง หรือสเปก)</span>
            </div>
            <div className="p-3 bg-amber-50/70 border border-amber-200 rounded-xl text-xs">
              <span className="font-bold text-amber-900 block mb-1">2. Guardrail Limit</span>
              <span className="text-slate-600">ตรวจสอบกรอบส่วนลดสูงสุดที่อนุญาต เพื่อไม่ให้กระทบกำไรขั้นต่ำของบริษัท</span>
            </div>
            <div className="p-3 bg-emerald-50/70 border border-emerald-200 rounded-xl text-xs">
              <span className="font-bold text-emerald-900 block mb-1">3. Tri-Strategy Scripts</span>
              <span className="text-slate-600">สร้างสคริปต์ 3 กลยุทธ์ (Value Re-framing, Social Proof, Scarcity Closing)</span>
            </div>
          </div>

          <Figure4_2_SalesCopilotInterface />
        </div>

        {/* 4.1.3 Lead Qualification & BANT */}
        <div className="p-4 sm:p-5 bg-white border border-slate-200 rounded-2xl space-y-3 shadow-2xs">
          <h4 className="font-bold text-slate-900 text-base flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-800 flex items-center justify-center text-xs font-mono font-bold">3</span>
            <span>4.1.3 หน้าจอระบบการคัดกรองและประเมินคะแนน BANT Score (Lead Qualification & Predictive Scoring)</span>
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            หน้าจอรายการ Lead แสดงตารางข้อมูลลูกค้ามุ่งหวังทั้งหมด พร้อมการจัดลำดับความสำคัญอัตโนมัติ 
            โดยระบบประเมินบทสนทนาและคำตอบของลูกค้าตามหลัก <strong>BANT Framework</strong> ออกมาเป็นคะแนนเต็ม 100 คะแนน:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
            <div className="p-2.5 bg-slate-50 border rounded-lg text-center">
              <div className="font-bold text-indigo-900">Budget (30 คะแนน)</div>
              <div className="text-[11px] text-slate-500 mt-0.5">งบประมาณและกำลังซื้อที่ยืนยันได้</div>
            </div>
            <div className="p-2.5 bg-slate-50 border rounded-lg text-center">
              <div className="font-bold text-indigo-900">Authority (25 คะแนน)</div>
              <div className="text-[11px] text-slate-500 mt-0.5">อำนาจในการเซ็นอนุมัติจัดซื้อ</div>
            </div>
            <div className="p-2.5 bg-slate-50 border rounded-lg text-center">
              <div className="font-bold text-indigo-900">Need (25 คะแนน)</div>
              <div className="text-[11px] text-slate-500 mt-0.5">ระดับความเจ็บปวดและความจำเป็น</div>
            </div>
            <div className="p-2.5 bg-slate-50 border rounded-lg text-center">
              <div className="font-bold text-indigo-900">Timeline (20 คะแนน)</div>
              <div className="text-[11px] text-slate-500 mt-0.5">กรอบเวลาที่ต้องการเริ่มใช้งานจริง</div>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            พนักงานขายสามารถกรองดูเฉพาะกลุ่ม <em>Hot Leads</em> เพื่อเร่งปิดการขายในวันนั้น หรือตรวจสอบข้อโต้แย้งที่ค้างอยู่ของแต่ละรายได้อย่างรวดเร็ว
          </p>
        </div>

        {/* 4.1.4 Customer 360 */}
        <div className="p-4 sm:p-5 bg-white border border-slate-200 rounded-2xl space-y-3 shadow-2xs">
          <h4 className="font-bold text-slate-900 text-base flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-800 flex items-center justify-center text-xs font-mono font-bold">4</span>
            <span>4.1.4 หน้าจอทำเนียบลูกค้าและมูลค่าตลอดชีพ (Customer 360 & Lifetime Value Directory)</span>
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            จัดเก็บข้อมูลลูกค้าที่เคยปิดการขายสำเร็จแล้ว (Existing Accounts) พร้อมบันทึกมูลค่าการซื้อสะสม (Customer Lifetime Value: LTV), 
            ประวัติสัญญาที่ยังใช้งานอยู่ (Active Subscriptions), ช่องทางการสื่อสารที่ลูกค้าชอบ (LINE, โทรศัพท์, Email) 
            รวมถึงบันทึกบุคลิกภาพและความต้องการเฉพาะรายที่ AI ช่วยวิเคราะห์ไว้ (AI Persona Insights) 
            เพื่อใช้ในการเสนอขายสินค้าเพิ่มเติม (Cross-selling) และการต่ออายุสัญญา (Renewal Retention)
          </p>
        </div>

        {/* 4.1.5 Product Catalog */}
        <div className="p-4 sm:p-5 bg-white border border-slate-200 rounded-2xl space-y-3 shadow-2xs">
          <h4 className="font-bold text-slate-900 text-base flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-800 flex items-center justify-center text-xs font-mono font-bold">5</span>
            <span>4.1.5 หน้าจอคลังแคตตาล็อกสินค้าและโควตาส่วนลดอัจฉริยะ (Smart Product Catalog & Guardrail Matrix)</span>
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            โมดูลคลังข้อมูลความรู้สินค้า (Grounding Knowledge Base) ที่จัดเก็บรายการสินค้า ราคาขายมาตรฐาน จุดขายเด่น (Key Selling Points) 
            และข้อโต้แย้งที่พบบ่อยพร้อมวิธีแก้ต่างที่พิสูจน์แล้วว่าได้ผล ที่สำคัญคือมีการกำหนด <strong>Max Discount Guardrail (%)</strong> 
            ของแต่ละสินค้า เพื่อป้องกันไม่ให้พนักงานขายหรือ AI นำเสนอส่วนลดที่เกินอำนาจอนุมัติ 
            ทำให้ระบบรักษาผลกำไรของกิจการได้อย่างรัดกุม 100%
          </p>
        </div>

        {/* 4.1.6 Pipeline Kanban */}
        <div className="p-4 sm:p-5 bg-white border border-slate-200 rounded-2xl space-y-3 shadow-2xs">
          <h4 className="font-bold text-slate-900 text-base flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-800 flex items-center justify-center text-xs font-mono font-bold">6</span>
            <span>4.1.6 หน้าจอกระดานติดตามกระบวนการขาย (Visual Sales Pipeline Kanban Board)</span>
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            กระดานคัมบังจำลองขั้นตอนการขาย 4 สเตจ: <em>Discovery &gt; Qualified BANT &gt; In Negotiation &gt; Closed Won</em> 
            ผู้ใช้งานสามารถลากวาง (Drag &amp; Drop) การ์ดดีลเพื่อเปลี่ยนขั้นตอนได้อย่างสะดวก พร้อมทั้งมีระบบไฮไลต์การ์ดที่มีความเสี่ยงจะหลุดมือ 
            (Urgency Glow) และแสดงมูลค่าดีลรวมในแต่ละคอลัมน์เพื่อประเมินความน่าจะเป็นของรายรับในอนาคต
          </p>

          <Figure4_3_PipelineKanbanInterface />
        </div>

        {/* 4.1.7 Follow-up Engine */}
        <div className="p-4 sm:p-5 bg-white border border-slate-200 rounded-2xl space-y-3 shadow-2xs">
          <h4 className="font-bold text-slate-900 text-base flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-800 flex items-center justify-center text-xs font-mono font-bold">7</span>
            <span>4.1.7 หน้าจอระบบตรวจจับการเงียบหายและร่างข้อความติดตามงาน (Automated Follow-up & Re-engagement Engine)</span>
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            ระบบแก้ปัญหาคลาสสิกของทีมขายที่มักลืมติดตามลูกค้าที่ยังไม่ตัดสินใจ โดยระบบจะตรวจสอบ Timestamp ของการติดต่อล่าสุด 
            หากเกิน 24, 48 หรือ 72 ชั่วโมง ระบบจะกระตุ้นคิวเตือนขึ้นมาอัตโนมัติ 
            พร้อมทั้งใช้ AI สังเคราะห์ข้อความทวงถามเฉพาะบุคคล (Personalized Re-engagement Copy) 
            ที่อ้างอิงหัวข้อที่เคยคุยกันไว้ เช่น การเตือนสิทธิ์โปรโมชันที่กำลังจะหมด หรือการส่งกรณีศึกษาเพิ่มเติม 
            ทำให้พนักงานขายสามารถกดส่งข้อความเข้าแอปพลิเคชันแชทได้ในคลิกเดียว
          </p>

          <Figure4_4_FollowUpQueueInterface />
        </div>

        {/* 4.1.8 AI Coach */}
        <div className="p-4 sm:p-5 bg-white border border-slate-200 rounded-2xl space-y-3 shadow-2xs">
          <h4 className="font-bold text-slate-900 text-base flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-800 flex items-center justify-center text-xs font-mono font-bold">8</span>
            <span>4.1.8 หน้าจอวิเคราะห์ประสิทธิภาพและโค้ชการขายด้วย AI (Post-Call AI Sales Coach & Analytics)</span>
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            ทำหน้าที่เป็นผู้ฝึกสอนส่วนบุคคลให้แก่พนักงานขาย โดยนำบันทึกบทสนทนาการเจรจาที่ผ่านมามาให้คะแนน 3 ด้าน: 
            การฟังความต้องการลูกค้า (Active Listening), ความแม่นยำในการแก้ข้อโต้แย้ง (Objection Handling Effectiveness), 
            และการกล้าขอคำสั่งซื้อ (Closing Assertiveness) พร้อมทั้งระบุจุดแข็งและจุดที่ต้องปรับปรุงในดีลถัดไป
          </p>
        </div>
      </div>
    </div>
  );
};
