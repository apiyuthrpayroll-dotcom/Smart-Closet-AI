import React from 'react';
import { HelpCircle, CheckCircle, TrendingUp, Cpu } from 'lucide-react';

export const Section1_4_Hypotheses: React.FC = () => {
  return (
    <div id="section-1-4" className="space-y-5 pt-6 border-t border-slate-200">
      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2 font-serif">
        <span className="text-indigo-600 font-mono">1.4</span>
        <span>สมมติฐานของการวิจัยและพัฒนา (Research Hypotheses)</span>
      </h3>

      <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed text-justify">
        <p>
          ในการออกแบบและพัฒนาระบบ Smart Closet AI ผู้วิจัยได้ตั้งสมมติฐานในการทดลองและประเมินผลไว้ 3 ข้อหลัก ดังนี้:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-3">
          <div className="p-4 bg-white rounded-xl border border-indigo-200 shadow-2xs space-y-2">
            <div className="font-bold text-indigo-900 text-sm flex items-center gap-1.5">
              <span className="font-mono text-indigo-600">H1:</span>
              <span>ประสิทธิภาพการลดเวลา</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              การประยุกต์ใช้โมเดลปัญญาประดิษฐ์ในการสแกนและบันทึกข้อมูลเสื้อผ้าอัตโนมัติ 
              สามารถลดระยะเวลาเฉลี่ยในการบันทึกและค้นหารายการเสื้อผ้าลงได้อย่างน้อยร้อยละ 60 
              เมื่อเปรียบเทียบกับการบันทึกข้อมูลด้วยตนเอง (Manual Entry)
            </p>
          </div>

          <div className="p-4 bg-white rounded-xl border border-indigo-200 shadow-2xs space-y-2">
            <div className="font-bold text-indigo-900 text-sm flex items-center gap-1.5">
              <span className="font-mono text-indigo-600">H2:</span>
              <span>ความแม่นยำในการจำแนก</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              แบบจำลองการเรียนรู้เชิงลึก (Deep Learning Model) ที่ผ่านการปรับแต่งเฉพาะด้านแฟชั่น 
              มีความแม่นยำในการจำแนกประเภทและสีของเสื้อผ้า (Top-1 Accuracy) ไม่ต่ำกว่าร้อยละ 85 
              ภายใต้เงื่อนไขภาพถ่ายในสภาพแสงและมุมมองทั่วไป
            </p>
          </div>

          <div className="p-4 bg-white rounded-xl border border-indigo-200 shadow-2xs space-y-2">
            <div className="font-bold text-indigo-900 text-sm flex items-center gap-1.5">
              <span className="font-mono text-indigo-600">H3:</span>
              <span>ความพึงพอใจต่อคำแนะนำ</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              ระบบแนะนำการแต่งกายอัจฉริยะที่บูรณาการทฤษฎีคู่สีร่วมกับ Multimodal LLM 
              ได้รับคะแนนความพึงพอใจจากกลุ่มตัวอย่างผู้ใช้งานจริงเฉลี่ยอยู่ในระดับ "ดีมาก" (คะแนนเฉลี่ย &gt; 4.20 จาก 5.00)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
