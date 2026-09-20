import React from 'react';
import { 
  Figure3_4_ScoringVerification, 
  Figure3_6_DealConversion 
} from '../ReportFigures';
import { CheckSquare, Activity, BarChart3, Star, HelpCircle, Target, TrendingUp } from 'lucide-react';

export const Section3_6_TestingEvaluation: React.FC = () => {
  return (
    <div id="section-3-6" className="space-y-5 pt-6 border-t border-slate-200">
      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2 font-serif">
        <span className="text-indigo-600 font-mono">3.6</span>
        <span>การทดสอบและการประเมินผลระบบ (System Testing & Performance Evaluation Methodology)</span>
      </h3>

      <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed text-justify">
        <p>
          เพื่อตรวจสอบความถูกต้อง แม่นยำ และประสิทธิภาพในการช่วยปิดการขายของระบบ <strong>Smart Closer AI</strong> 
          ผู้วิจัยได้กำหนดระเบียบวิธีทดสอบครอบคลุม 3 มิติ ได้แก่ การทดสอบการวินิจฉัยและคำนวณคะแนน BANT Score (Lead Scoring Verification), 
          การทดสอบฟังก์ชันการทำงานของซอฟต์แวร์ (Functional & Integration Testing), และการประเมินผลสัมฤทธิ์การปิดการขายจริง (Deal Conversion Evaluation) ดังนี้:
        </p>

        {/* 3.6.1 การทดสอบการประเมินคะแนนลูกค้า BANT Scoring */}
        <div className="p-4 bg-white border border-indigo-200 rounded-xl shadow-2xs space-y-3">
          <h4 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
            <Target className="w-4 h-4 text-indigo-600" />
            <span>3.6.1 การทดสอบความถูกต้องของการประเมินคะแนนลูกค้า (BANT Scoring Verification)</span>
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 pl-4 leading-relaxed">
            ทดสอบการจำแนกและให้คะแนนความพร้อมของลูกค้า (BANT: Budget, Authority, Need, Timeline) จากชุดบทสนทนาจำลอง 100 สถานการณ์ 
            เพื่อตรวจสอบว่าโมเดลสามารถคำนวณคะแนนรวมได้อย่างแม่นยำ และจำแนกสถานะ Hot Lead / Qualified / Cold Lead ได้ตรงตามเกณฑ์มาตรฐาน ดังแสดงในภาพประกอบที่ 3.4:
          </p>

          {/* รูปที่ 3.4 BANT Scoring Verification */}
          <div className="pt-2">
            <Figure3_4_ScoringVerification />
          </div>
        </div>

        {/* 3.6.2 การประเมินโมเดล AI */}
        <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
          <h4 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
            <Activity className="w-4 h-4 text-indigo-600" />
            <span>3.6.2 ตัวชี้วัดประสิทธิภาพของแบบจำลองปัญญาประดิษฐ์ (AI Evaluation Metrics)</span>
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 pl-4">
            วัดประสิทธิภาพการจำแนกประเภทข้อโต้แย้งและความพึงพอใจของสคริปต์ปิดการขาย ผ่านมาตรวัดสากล 4 ค่า ได้แก่:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pl-4 text-center">
            <div className="p-2.5 bg-white rounded-lg border border-slate-200">
              <span className="text-[11px] font-bold text-slate-600 block">Accuracy</span>
              <span className="font-mono text-xs text-indigo-700 font-semibold">(TP+TN) / Total</span>
            </div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200">
              <span className="text-[11px] font-bold text-slate-600 block">Precision</span>
              <span className="font-mono text-xs text-indigo-700 font-semibold">TP / (TP+FP)</span>
            </div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200">
              <span className="text-[11px] font-bold text-slate-600 block">Recall</span>
              <span className="font-mono text-xs text-indigo-700 font-semibold">TP / (TP+FN)</span>
            </div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200">
              <span className="text-[11px] font-bold text-slate-600 block">F1-Score</span>
              <span className="font-mono text-xs text-indigo-700 font-semibold">2*(P*R)/(P+R)</span>
            </div>
          </div>
        </div>

        {/* 3.6.3 การประเมินผลสัมฤทธิ์การปิดการขายจริง */}
        <div className="p-4 bg-white border border-emerald-200 rounded-xl shadow-2xs space-y-3">
          <h4 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-emerald-600" />
            <span>3.6.3 การประเมินผลสัมฤทธิ์การปิดการขายจริงและการทำ Closed Won (Deal Conversion Execution)</span>
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 pl-4 leading-relaxed">
            ทดสอบการนำสคริปต์ที่แนะนำโดยระบบไปใช้เจรจากับลูกค้าจริงผ่านช่องทางแชท โดยบันทึกตัวชี้วัดสำคัญทางธุรกิจ ได้แก่ 
            อัตราความเร็วในการปิดดีล (Closing Speed จากเดิม 7 วัน ลดเหลือ 2 วัน), อัตราความสำเร็จในการปิดการขาย (Win Rate เพิ่มขึ้นเป็น 44%), 
            และมูลค่าสัญญารวมที่สำเร็จ ดังแสดงในภาพประกอบที่ 3.6:
          </p>

          {/* รูปที่ 3.6 Deal Conversion */}
          <div className="pt-2">
            <Figure3_6_DealConversion />
          </div>
        </div>

        {/* 3.6.4 การทดสอบความพึงพอใจ UAT */}
        <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
          <h4 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
            <Star className="w-4 h-4 text-amber-500" />
            <span>3.6.4 เกณฑ์การประเมินความพึงพอใจของผู้ใช้งานจริง (User Acceptance Testing: UAT)</span>
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 pl-4 leading-relaxed">
            ประเมินผลกับกลุ่มตัวอย่างพนักงานขายและผู้ประกอบการจำนวน 30 คน ภายหลังการทดลองใช้งานระบบผ่านแบบสอบถามมาตราส่วนประมาณค่า 5 ระดับของลิเคิร์ท (5-Point Likert Scale) 
            โดยมีเกณฑ์การแปลผลคะแนนเฉลี่ยดังนี้:
          </p>

          <div className="border border-slate-200 rounded-lg overflow-hidden bg-white ml-4 text-xs">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-200 text-slate-700">
                  <th className="p-2 text-center w-28">ช่วงคะแนนเฉลี่ย (Mean)</th>
                  <th className="p-2 w-32">ระดับความพึงพอใจ</th>
                  <th className="p-2">ความหมายเชิงคุณภาพ (Interpretation)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr>
                  <td className="p-2 text-center font-mono font-bold text-emerald-700">4.51 - 5.00</td>
                  <td className="p-2 font-bold text-emerald-800">มากที่สุด (Highest)</td>
                  <td className="p-2 text-slate-600">ระบบมีประสิทธิภาพและตอบสนองความต้องการในการปิดการขายระดับยอดเยี่ยม</td>
                </tr>
                <tr>
                  <td className="p-2 text-center font-mono font-bold text-indigo-700">3.51 - 4.50</td>
                  <td className="p-2 font-bold text-indigo-800">มาก (High)</td>
                  <td className="p-2 text-slate-600">ระบบมีความสะดวก แม่นยำ สคริปต์ตอบคำถามได้ตรงจุดและน่าพึงพอใจ</td>
                </tr>
                <tr>
                  <td className="p-2 text-center font-mono font-bold text-slate-700">2.51 - 3.50</td>
                  <td className="p-2 font-bold text-slate-800">ปานกลาง (Moderate)</td>
                  <td className="p-2 text-slate-600">ระบบสามารถช่วยงานขายได้ตามมาตรฐานทั่วไป</td>
                </tr>
                <tr>
                  <td className="p-2 text-center font-mono font-bold text-amber-700">1.51 - 2.50</td>
                  <td className="p-2 font-bold text-amber-800">น้อย (Low)</td>
                  <td className="p-2 text-slate-600">ยังมีจุดที่ต้องปรับปรุงเรื่องความยืดหยุ่นของสคริปต์</td>
                </tr>
                <tr>
                  <td className="p-2 text-center font-mono font-bold text-rose-700">1.00 - 1.50</td>
                  <td className="p-2 font-bold text-rose-800">น้อยที่สุด (Lowest)</td>
                  <td className="p-2 text-slate-600">ระบบมีข้อผิดพลาดหรือไม่ตรงกับสถานการณ์การขายจริง</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
