import React from 'react';
import { Figure2_2_FrameworkComparison, Figure2_2A_BANTDimensions } from '../ReportFigures';
import { Target, ShieldCheck, Zap, Flame, Check, HelpCircle, FileSpreadsheet } from 'lucide-react';

export const Section2_2_QualificationFrameworks: React.FC = () => {
  return (
    <div id="section-2-2" className="space-y-5 pt-6 border-t border-slate-200">
      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2 font-serif">
        <span className="text-indigo-600 font-mono">2.2</span>
        <span>กรอบการประเมินและคัดกรองลูกค้ามุ่งหวัง (Lead Qualification Methodologies)</span>
      </h3>

      <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed text-justify">
        <p>
          ในการบริหารงานขายเชิงวิทยาศาสตร์ (Scientific Sales Management) ปัญหาสำคัญที่สุดประการหนึ่งของทีมขาย 
          คือการสิ้นเปลืองเวลาและพลังงานไปกับผู้ติดต่อที่ไม่มีโอกาสซื้อจริง (Unqualified Leads หรือ "ลูกค้าสอบถามเล่นๆ") 
          ส่งผลให้สูญเสียโอกาสในการดูแลลูกค้าที่มีกำลังซื้อและพร้อมปิดการขาย (High-Intent Buyers) 
          จึงมีความจำเป็นต้องกำหนดกรอบการคัดกรองคุณสมบัติ (Lead Qualification Framework) ที่มีมาตรฐานและวัดผลได้อย่างเป็นรูปธรรม
        </p>

        <h4 className="font-bold text-slate-900 text-base sm:text-lg mt-4">
          2.2.1 กรอบ BANT Framework เจาะลึก 4 มิติทางธุรกิจ
        </h4>
        <p>
          กรอบ <strong>BANT</strong> ได้รับการพัฒนาโดยบรรษัทไอบีเอ็ม (IBM) ในทศวรรษ 1950 และยังคงเป็นกรอบแนวคิดพื้นฐานที่เป็นเสาหลักของวงการขายสากล 
          โดยในการพัฒนาโครงการนี้ ผู้จัดทำได้นำ BANT มาแปลงเป็นเกณฑ์เชิงปริมาณ (Quantitative Heuristics) ประกอบด้วย:
        </p>

        <Figure2_2A_BANTDimensions />

        <h4 className="font-bold text-slate-900 text-base sm:text-lg mt-5">
          2.2.2 การเปรียบเทียบ BANT กับ MEDDIC, ANUM และ SPIN Selling
        </h4>
        <p>
          แม้ว่าในวงการขายจะมีกรอบการทำงานหลายรูปแบบ เช่น <strong>MEDDIC</strong> ซึ่งเหมาะกับองค์กรขนาดยักษ์ (Enterprise Software) 
          ที่มีผู้มีส่วนได้ส่วนเสียจำนวนมาก และ <strong>SPIN Selling (Rackham, 1988)</strong> ซึ่งเน้นการสัมภาษณ์เจาะลึก 
          แต่งานวิจัยนี้เลือกใช้ <strong>BANT Framework</strong> เป็นสถาปัตยกรรมหลักสำหรับ Smart Closer AI 
          เนื่องจาก BANT มีความกะทัดรัด สามารถประเมินความสมบูรณ์ของข้อมูลผ่านการสนทนาทางแชท (Chat-based Inbound Leads) 
          ได้อย่างรวดเร็ว โดยไม่ทำให้ลูกค้ารู้สึกอึดอัดเหมือนการถูกซักประวัติการเงิน
        </p>

        {/* ตารางการสกัดคีย์เวิร์ดภาษาไทย */}
        <div className="my-5 border border-slate-200 rounded-xl overflow-hidden bg-white shadow-xs">
          <div className="bg-slate-100 px-4 py-2.5 border-b border-slate-200 font-bold text-xs text-slate-800 flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <FileSpreadsheet className="w-4 h-4 text-indigo-600" />
              <span>ตารางที่ 2.A ตัวอย่างการสกัดเอนทิตีและการให้คะแนน BANT จากบริบทข้อความภาษาไทย</span>
            </span>
            <span className="text-[10px] text-slate-500 font-normal">Thai NLP Intent Heuristic Matrix</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-700 font-semibold">
                  <th className="p-3">มิติ BANT</th>
                  <th className="p-3">ตัวอย่างข้อความแชทภาษาไทยของลูกค้า</th>
                  <th className="p-3">การตีความเจตนาของ AI (NLP Interpretation)</th>
                  <th className="p-3 text-center">คะแนนฐาน (0-100)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr>
                  <td className="p-3 font-bold text-indigo-900">Budget</td>
                  <td className="p-3 italic">"เตรียมงบไว้ราวๆ 80,000 - 100,000 ครับ ถ้าเกินกว่านี้ต้องขอส่วนลด"</td>
                  <td className="p-3">งบประมาณตรงกับระดับ Enterprise Package มีความพร้อมจ่ายสูง</td>
                  <td className="p-3 text-center font-mono font-bold text-emerald-600">95</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-indigo-900">Authority</td>
                  <td className="p-3 italic">"ผมเป็นเจ้าของบริษัทครับ ตัดสินใจเองได้เลย ขอข้อเสนอดีๆ"</td>
                  <td className="p-3">ระบุตัวตนชัดเจนว่าเป็น Sole Decision Maker ไม่ต้องผ่านบอร์ด</td>
                  <td className="p-3 text-center font-mono font-bold text-emerald-600">100</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-indigo-900">Need</td>
                  <td className="p-3 italic">"ตอนนี้แอดมินตอบแชทช้ามาก ลูกค้าบ่นและหนีไปซื้อร้านอื่น เสียหายเยอะ"</td>
                  <td className="p-3">Critical Pain Point: การสูญเสียยอดขายเนื่องจากตอบแชทล่าช้า</td>
                  <td className="p-3 text-center font-mono font-bold text-emerald-600">90</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-indigo-900">Timeline</td>
                  <td className="p-3 italic">"อยากเริ่มใช้งานสัปดาห์หน้าเลยครับ ทันไหมครับ"</td>
                  <td className="p-3">Urgent Requirement: กรอบเวลาเร่งด่วน &lt; 7 วัน</td>
                  <td className="p-3 text-center font-mono font-bold text-emerald-600">95</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* แทรกรูปที่ 2.2 */}
      <Figure2_2_FrameworkComparison />
    </div>
  );
};
