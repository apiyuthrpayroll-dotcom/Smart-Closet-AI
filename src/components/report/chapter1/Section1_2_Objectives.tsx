import React from 'react';
import { Target, CheckCircle2, Award, Zap } from 'lucide-react';

export const Section1_2_Objectives: React.FC = () => {
  return (
    <div id="section-1-2" className="space-y-5 pt-6 border-t border-slate-200">
      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2 font-serif">
        <span className="text-indigo-600 font-mono">1.2</span>
        <span>วัตถุประสงค์ของโครงงาน (Project Objectives)</span>
      </h3>

      <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed text-justify">
        <p>
          ในการดำเนินโครงงานวิจัยและพัฒนาระบบผู้ช่วยปัญญาประดิษฐ์สำหรับการจัดการตู้เสื้อผ้าและแนะนำการแต่งกายอัจฉริยะ (Smart Closet AI) 
          คณะผู้วิจัยได้กำหนดวัตถุประสงค์หลักไว้ 4 ประการ ดังนี้:
        </p>

        <div className="space-y-3 my-4">
          <div className="p-4 bg-white rounded-xl border border-indigo-200 shadow-2xs flex items-start gap-3.5">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
              1
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                เพื่อออกแบบและพัฒนาระบบดิจิทัลสำหรับสแกน บันทึก และจัดหมวดหมู่เสื้อผ้าอัตโนมัติ
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                พัฒนาระบบที่รองรับการนำเข้ารูปภาพเสื้อผ้าผ่านกล้องหรือไฟล์รูปภาพ โดยประยุกต์ใช้โมเดลการเรียนรู้เชิงลึก (Deep Learning & Computer Vision) 
                เพื่อสกัดคุณลักษณะ (Features) ตรวจจับชนิด สี ลวดลาย และสไตล์ของเสื้อผ้า แล้วจัดเก็บเข้าสู่ฐานข้อมูลตู้เสื้อผ้าเสมือนจริง (Virtual Closet) โดยอัตโนมัติ 
                ลดภาระการกรอกข้อมูลด้วยตนเองของผู้ใช้งาน
              </p>
            </div>
          </div>

          <div className="p-4 bg-white rounded-xl border border-indigo-200 shadow-2xs flex items-start gap-3.5">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
              2
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                เพื่อพัฒนาระบบค้นหาและเครื่องมือแนะนำการจับคู่ชุดแต่งกายอัจฉริยะ (Intelligent Outfit Recommendation Engine)
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                พัฒนาอัลกอริทึมการจับคู่ชุดเสื้อผ้าที่เข้ากันได้ (Compatibility Scoring) โดยใช้หลักการทฤษฎีคู่สี (Color Theory), สไตล์การแต่งกาย, 
                และบริบทการใช้งาน (เช่น การทำงาน กึ่งทางการ ท่องเที่ยว ลำลอง สภาพอากาศ) ร่วมกับโมเดลภาษาขนาดใหญ่ (LLM) ในการอธิบายเหตุผลของการจับคู่ชุดได้อย่างเป็นธรรมชาติ
              </p>
            </div>
          </div>

          <div className="p-4 bg-white rounded-xl border border-indigo-200 shadow-2xs flex items-start gap-3.5">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
              3
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                เพื่อทดสอบและประเมินประสิทธิภาพทางเทคนิคของโมเดลปัญญาประดิษฐ์และระบบโดยรวม
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                ประเมินความแม่นยำ (Accuracy, Precision, Recall, F1-Score) ของโมเดลจำแนกประเภทเสื้อผ้า และทดสอบเวลาในการตอบสนอง (Response Latency) 
                ของการสแกนและประมวลผลคำแนะนำ เพื่อให้ได้ระบบที่มีเสถียรภาพและเหมาะสมกับการใช้งานจริง
              </p>
            </div>
          </div>

          <div className="p-4 bg-white rounded-xl border border-indigo-200 shadow-2xs flex items-start gap-3.5">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
              4
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                เพื่อประเมินความพึงพอใจและการยอมรับของผู้ใช้งาน (User Acceptance Testing: UAT)
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                ศึกษาผลตอบรับและความพึงพอใจของกลุ่มตัวอย่างผู้ใช้งานจริง ครอบคลุมด้านการออกแบบส่วนต่อประสานผู้ใช้ (UI/UX), 
                ความสะดวกในการสแกนข้อมูล, ประโยชน์ของคำแนะนำการแต่งกาย, และความพึงพอใจภาพรวมตามหลักมาตรวัด Likert Scale
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
