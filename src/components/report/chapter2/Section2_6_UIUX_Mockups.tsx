import React from 'react';
import { 
  MockupFigure2_9_Dashboard, 
  MockupFigure2_10_Copilot, 
  MockupFigure2_11_Kanban, 
  MockupFigure2_12_VoiceCloser 
} from '../ReportFigures';
import { Layout, Users, Monitor, Sparkles, Sliders, Smartphone } from 'lucide-react';

export const Section2_6_UIUX_Mockups: React.FC = () => {
  return (
    <div id="section-2-6" className="space-y-5 pt-6 border-t border-slate-200">
      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2 font-serif">
        <span className="text-indigo-600 font-mono">2.6</span>
        <span>ทฤษฎีการออกแบบส่วนต่อประสานผู้ใช้และภาพจำลองระบบ (UI/UX Principles & System Mockups)</span>
      </h3>

      <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed text-justify">
        <p>
          ระบบปัญญาประดิษฐ์ที่มีอัลกอริทึมซับซ้อนจะไม่สามารถสร้างมูลค่าทางธุรกิจได้จริง หากส่วนต่อประสานผู้ใช้งาน (UI) 
          ถูกออกแบบมาอย่างสับสน ยุ่งยาก หรือเพิ่มภาระงานให้แก่พนักงานขาย 
          ในการออกแบบระบบ Smart Closer AI จึงได้ยึดถือหลักการ <strong>"Human-AI Teaming"</strong> 
          ซึ่งวางตำแหน่ง AI ให้เป็น "ผู้ช่วยเคียงข้าง" (Copilot) คอยเสนอแนะและอำนวยความสะดวก 
          โดยยังคงให้พนักงานขายเป็นผู้มีอำนาจตัดสินใจขั้นสุดท้าย (Human-in-the-Loop)
        </p>

        <h4 className="font-bold text-slate-900 text-base sm:text-lg mt-4">
          2.6.1 หลักสรีรวิทยาการมองเห็น กฎของฟิตส์ (Fitts's Law) และการลดภาระการรู้คิด
        </h4>
        <p>
          เพื่อตอบสนองต่อสภาพแวดล้อมการขายออนไลน์ที่ต้องการความรวดเร็วและแม่นยำสูง ระบบได้นำหลักการยศาสตร์ (Ergonomics) 
          และจิตวิทยาการรับรู้มาประยุกต์ใช้ 3 ด้าน:
        </p>

        <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
          <li>
            <strong>Cognitive Load Reduction (การลดภาระการรู้คิด):</strong> จัดกลุ่มข้อมูลที่เกี่ยวข้องกันไว้ด้วยกัน 
            ไม่แสดงข้อมูลที่เกินความจำเป็น และใช้รหัสสีที่เป็นสากล (เขียว = ปิดการขายสำเร็จ, ส้ม = Hot Lead เร่งด่วน, ฟ้า = ติดตามผล)
          </li>
          <li>
            <strong>Fitts's Law Optimization:</strong> ปุ่มสำคัญในการดำเนินการ เช่น "ส่งข้อความตอบกลับ", "คัดลอกสคริปต์", 
            และ "โทรติดต่อลูกค้า" ถูกขยายขนาดให้คลิกง่าย และจัดวางในตำแหน่งที่การเคลื่อนไหวของเมาส์สั้นที่สุด
          </li>
          <li>
            <strong>One-Click Actionability:</strong> สคริปต์แก้ข้อโต้แย้งที่ AI แนะนำ สามารถคัดลอกหรือส่งแทนได้ทันทีด้วยคลิกเดียว 
            ลดเวลาการพิมพ์ข้อความของพนักงานขายลงมากกว่า 70%
          </li>
        </ul>

        <h4 className="font-bold text-slate-900 text-base sm:text-lg mt-6">
          2.6.2 ภาพจำลองหน้าจอที่ 1: แดชบอร์ดภาพรวมการขายและตัวชี้วัดประสิทธิภาพ (Sales Executive Dashboard)
        </h4>
        <p>
          แดชบอร์ดหลักถูกออกแบบตามโครงสร้าง Bento Grid ที่ให้ความสำคัญกับการแสดงตัวชี้วัดผลการดำเนินงานหลัก (KPIs) 
          และแถบแจ้งเตือน Hot Leads ที่กำลังจะหลุดเกณฑ์ SLA (Time-to-First-Touch &gt; 5 นาที) 
          เพื่อให้ผู้บริหารและหัวหน้าทีมขายมองเห็นภาพรวมสุขภาพของท่อการขายได้ในเสี้ยววินาที
        </p>
      </div>

      {/* แทรกรูปที่ 2.9 MOCKUP 1 */}
      <MockupFigure2_9_Dashboard />

      <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed text-justify mt-6">
        <h4 className="font-bold text-slate-900 text-base sm:text-lg mt-4">
          2.6.3 ภาพจำลองหน้าจอที่ 2: ระบบ AI Sales Copilot สำหรับรับมือข้อโต้แย้งและคัดกรอง BANT
        </h4>
        <p>
          หน้าต่างการทำงานหลักของพนักงานขาย (Seller Workspace) แบ่งออกเป็น 2 ส่วนเคียงคู่กัน 
          ด้านซ้ายคือบทสนทนากับลูกค้าแบบเรียลไทม์ และด้านขวาคือหน้าต่างคำแนะนำของ AI Copilot 
          ซึ่งแสดงเกณฑ์ BANT ที่สกัดได้แบบสดๆ พร้อมร่างสคริปต์แก้ข้อโต้แย้งที่ดึงสิทธิพิเศษและโปรโมชั่นมาช่วยปิดการขาย
        </p>
      </div>

      {/* แทรกรูปที่ 2.10 MOCKUP 2 */}
      <MockupFigure2_10_Copilot />

      <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed text-justify mt-6">
        <h4 className="font-bold text-slate-900 text-base sm:text-lg mt-4">
          2.6.4 ภาพจำลองหน้าจอที่ 3: กระดานท่อการขายแบบคัมบัง (Kanban Pipeline Deal Flow)
        </h4>
        <p>
          กระดานคัมบังจำลองกระบวนการขายแบบไปข้างหน้า (Linear Deal Flow) ช่วยให้พนักงานขายสามารถลากและวาง (Drag & Drop) 
          การ์ดลูกค้าข้ามขั้นตอน ตั้งแต่ Leads เข้าใหม่ ไปจนถึงการยื่นใบเสนอราคา และปิดการขายสำเร็จ 
          โดยบนการ์ดแต่ละใบจะแสดงคะแนน Lead Score และมูลค่าเงินที่คาดหวังอย่างชัดเจน
        </p>
      </div>

      {/* แทรกรูปที่ 2.11 MOCKUP 3 */}
      <MockupFigure2_11_Kanban />

      <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed text-justify mt-6">
        <h4 className="font-bold text-slate-900 text-base sm:text-lg mt-4">
          2.6.5 ภาพจำลองหน้าจอที่ 4: ระบบจำลองการสนทนาโต้ตอบเสียงแบบเรียลไทม์ (Real-time Voice Closer Simulation)
        </h4>
        <p>
          ส่วนต่อประสานสำหรับจำลองการโทรหาลูกค้า แสดงคลื่นสัญญาณเสียงพูด (Audio Waveform) 
          การถอดเสียงภาษาไทยสดๆ พร้อมหน้าจอ Heads-Up Display (HUD) วิเคราะห์อารมณ์ความสนใจของลูกค้า 
          และแนะนำประเด็นที่ควรพูดถัดไปในทันที
        </p>
      </div>

      {/* แทรกรูปที่ 2.12 MOCKUP 4 */}
      <MockupFigure2_12_VoiceCloser />
    </div>
  );
};
