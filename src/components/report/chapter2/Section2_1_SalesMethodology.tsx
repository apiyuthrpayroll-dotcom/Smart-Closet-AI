import React from 'react';
import { Figure2_1_SalesFunnel, Figure2_1A_SalesEvolution } from '../ReportFigures';
import { Target, TrendingUp, Clock, AlertTriangle, CheckCircle2 } from 'lucide-react';

export const Section2_1_SalesMethodology: React.FC = () => {
  return (
    <div id="section-2-1" className="space-y-5 pt-6 border-t border-slate-200">
      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2 font-serif">
        <span className="text-indigo-600 font-mono">2.1</span>
        <span>ทฤษฎีและพลวัตกระบวนการขายเชิงพาณิชย์ (Modern Commercial Sales & Consultative Methodologies)</span>
      </h3>

      <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed text-justify">
        <p>
          ในยุคเศรษฐกิจดิจิทัล (Digital Economy) พฤติกรรมของผู้บริโภคและผู้จัดซื้อระดับองค์กร (B2B / B2C Buyers) 
          ได้เกิดการเปลี่ยนแปลงอย่างมีนัยสำคัญ ข้อมูลจากสถาบันวิจัยการตลาดชั้นนำชี้ให้เห็นว่า ผู้ซื้อมากกว่า 70% 
          ได้ทำการศึกษา ค้นคว้าข้อมูลผลิตภัณฑ์ และเปรียบเทียบข้อเสนอในตลาดด้วยตนเองผ่านช่องทางดิจิทัล ก่อนที่จะเริ่มต้นติดต่อพนักงานขาย 
          ทำให้รูปแบบการขายแบบดั้งเดิมที่มุ่งเน้นการยัดเยียดผลิตภัณฑ์ (Hard Selling หรือ Transactional Selling) 
          มีประสิทธิภาพลดลงอย่างรุนแรง และถูกแทนที่ด้วย <strong>การขายเชิงให้คำปรึกษา (Consultative Selling)</strong> 
          และการขายที่มุ่งเน้นคุณค่าของโซลูชัน (Value-Based Selling)
        </p>

        <h4 className="font-bold text-slate-900 text-base sm:text-lg mt-4 flex items-center gap-2">
          <span>2.1.1 วิวัฒนาการของกระบวนการขายเชิงพาณิชย์</span>
        </h4>
        <p>
          วิวัฒนาการของการขายสามารถจำแนกออกเป็น 3 ยุคสมัยหลักตามระดับความซับซ้อนของเทคโนโลยีและพฤติกรรมตลาด:
        </p>

        <Figure2_1A_SalesEvolution />

        <h4 className="font-bold text-slate-900 text-base sm:text-lg mt-5 flex items-center gap-2">
          <span>2.1.2 ทฤษฎี Sales Conversion Funnel และ Customer Journey</span>
        </h4>
        <p>
          ทฤษฎีกรวยการขาย (Sales Conversion Funnel) เป็นกรอบแนวคิดเชิงปริมาณที่ใช้ติดตามความคืบหน้าของกลุ่มเป้าหมาย 
          ตั้งแต่เริ่มรับรู้ (Awareness) จนกระทั่งเปลี่ยนสถานะเป็นลูกค้าที่สร้างรายได้ (Closed-Won Customer) 
          โดยในการพัฒนาโครงการ Smart Closer AI ได้แบ่งกระบวนการออกเป็น 5 ลำดับขั้นหลัก:
        </p>

        <ol className="list-decimal pl-5 space-y-2 text-xs sm:text-sm">
          <li>
            <strong>Inbound Leads Acquisition (การรับรายชื่อลูกค้ามุ่งหวัง):</strong> รวบรวมข้อมูลการติดต่อผ่านช่องทางโซเชียลมีเดีย 
            เว็บไซต์ โฆษณาออนไลน์ (Facebook, TikTok, Google Ads) และแอปพลิเคชันส่งข้อความ เช่น LINE Official Account
          </li>
          <li>
            <strong>Automated Qualification (การคัดกรองคุณสมบัติอัตโนมัติ):</strong> ตรวจสอบว่า Lead มีความต้องการและศักยภาพเพียงพอที่จะเป็นลูกค้าหรือไม่ 
            โดยประยุกต์ใช้กรอบ BANT เพื่อป้องกันการสูญเสียเวลาของทีมขาย
          </li>
          <li>
            <strong>Lead Tiering & Prioritization (การแบ่งระดับความสำคัญ):</strong> ประเมินคะแนน Lead Score (0 - 100 คะแนน) 
            และจำแนกออกเป็นกลุ่ม Hot, Warm, Cold เพื่อจัดสรรคิวงานและทรัพยากรการติดต่อ
          </li>
          <li>
            <strong>AI Copilot & Objection Handling (การให้คำปรึกษาและขจัดข้อโต้แย้ง):</strong> วิเคราะห์ข้อกังวลใจของลูกค้า 
            และสร้างสคริปต์โน้มน้าวใจเฉพาะบุคคลแบบเรียลไทม์
          </li>
          <li>
            <strong>Deal Closing & Retention (การปิดการขายและการบริหารความสัมพันธ์):</strong> ยื่นใบเสนอราคา บันทึกสัญญา 
            และกำหนดการติดตามผลต่อเนื่อง (Follow-up)
          </li>
        </ol>

        <h4 className="font-bold text-slate-900 text-base sm:text-lg mt-5 flex items-center gap-2">
          <span>2.1.3 ปัญหา Lead Decay และ Time-to-First-Touch ในการขายออนไลน์</span>
        </h4>
        <p>
          หนึ่งในสมมติฐานหลักของงานวิจัยชิ้นนี้คือ ปรากฏการณ์ <strong>"การเสื่อมสลายของลูกค้ามุ่งหวัง" (Lead Decay Phenomenon)</strong> 
          การศึกษาเชิงประจักษ์โดยสถาบัน MIT และ Harvard Business Review พบว่า ความน่าจะเป็นในการติดต่อลูกค้าได้สำเร็จ 
          (Odds of Contacting a Lead) จะลดลงมากกว่า <strong>10 เท่า</strong> หากการตอบกลับล่าช้าเกิน 5 นาทีแรกหลังลูกค้ากรอกแบบฟอร์ม 
          และอัตราการคัดกรองคุณสมบัติสำเร็จ (Odds of Qualifying a Lead) จะลดลงถึง <strong>21 เท่า</strong> หากรอเกิน 30 นาที 
          สาเหตุเกิดจากความตื่นตัวของผู้บริโภคออนไลน์ (Attention Span) ที่สั้นมาก และโอกาสสูงที่ลูกค้าจะเปิดดูโฆษณาของคู่แข่งคู่ขนานกัน 
          ระบบ Smart Closer AI จึงได้รับการออกแบบมาเพื่อลดระยะเวลาตอบสนองแรก (Time-to-First-Touch) ให้ต่ำกว่า 2 นาที 
          โดยใช้ระบบจัดคะแนนและร่างข้อความตอบโต้ของปัญญาประดิษฐ์อัตโนมัติ
        </p>
      </div>

      {/* แทรกรูปที่ 2.1 */}
      <Figure2_1_SalesFunnel />
    </div>
  );
};
