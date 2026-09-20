import React from 'react';
import { AlertCircle, ShieldAlert, CheckSquare } from 'lucide-react';

export const Section1_5_Delimitations: React.FC = () => {
  return (
    <div id="section-1-5" className="space-y-5 pt-6 border-t border-slate-200">
      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2 font-serif">
        <span className="text-indigo-600 font-mono">1.5</span>
        <span>ข้อจำกัดและข้อตกลงเบื้องต้นของโครงงาน (Delimitations & Assumptions)</span>
      </h3>

      <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed text-justify">
        <p>
          เพื่อให้ผลการวิจัยและการประเมินผลมีความสมเหตุสมผลภายใต้ขอบเขตการทดลอง คณะผู้วิจัยได้ระบุข้อจำกัดและข้อตกลงเบื้องต้นไว้ดังนี้:
        </p>

        <div className="space-y-3 my-3">
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1.5">
            <div className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              <span>1.5.1 คุณภาพของภาพถ่ายนำเข้า (Input Image Quality Constraints)</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-4">
              ความแม่นยำในการตรวจจับและตัดพื้นหลัง (Segmentation) ขึ้นอยู่กับความคมชัดของภาพ ความสว่างของแสงธรรมชาติหรือหลอดไฟ 
              และมุมกล้อง ภาพถ่ายที่มืดเกินไปหรือมีวัตถุบดบังมากกว่าร้อยละ 50 อาจส่งผลให้ความแม่นยำในการระบุสีและลวดลายลดลง
            </p>
          </div>

          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1.5">
            <div className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              <span>1.5.2 ความชอบส่วนบุคคลด้านแฟชั่น (Subjectivity of Fashion Preferences)</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-4">
              นิยามของ "ความสวยงาม" และ "ความเหมาะสมของชุด" เป็นปัจจัยเชิงนามธรรมที่มีความหลากหลายสูงตามรสนิยมของแต่ละบุคคล 
              ระบบจึงมุ่งเน้นการใช้หลักการทฤษฎีคู่สีสากล (Color Wheel Harmony) และความเหมาะสมตามโอกาสมาตรฐานเป็นเกณฑ์ตั้งต้น
            </p>
          </div>

          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1.5">
            <div className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              <span>1.5.3 สภาพแวดล้อมการเชื่อมต่อเครือข่าย (Network Connectivity Dependency)</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-4">
              การประมวลผลโมเดลขนาดใหญ่และโมเดล Vision Inference อาศัยการเชื่อมต่ออินเทอร์เน็ตเพื่อสื่อสารกับเซิร์ฟเวอร์และ AI Gateway 
              ความเร็วในการประมวลผลจึงขึ้นอยู่กับแบนด์วิดท์และความเสถียรของการเชื่อมต่อของผู้ใช้เป็นสำคัญ
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
