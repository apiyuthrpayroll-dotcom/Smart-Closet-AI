import React from 'react';
import { Users, Calculator, CheckCircle2, UserCheck, Briefcase } from 'lucide-react';

export const Section3_1_Population: React.FC = () => {
  return (
    <div id="section-3-1" className="space-y-5 pt-6 border-t border-slate-200">
      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2 font-serif">
        <span className="text-indigo-600 font-mono">3.1</span>
        <span>ประชากรและกลุ่มตัวอย่าง (Target Population & Sampling Methodology)</span>
      </h3>

      <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed text-justify">
        <p>
          ในการประเมินประสิทธิภาพและการยอมรับการใช้งานระบบปัญญาประดิษฐ์ผู้ช่วยปิดการขายอัจฉริยะ (Smart Closer AI) 
          ผู้วิจัยได้กำหนดระเบียบวิธีวิจัยและคัดเลือกประชากรและกลุ่มตัวอย่างตามหลักการทางสถิติและบริบทของงานขายเชิงพาณิชย์ ดังนี้:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 my-3">
          {/* ประชากรเป้าหมาย */}
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
            <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <Users className="w-4 h-4 text-indigo-600" />
              <span>3.1.1 ประชากรเป้าหมาย (Target Population)</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              ประชากรที่ใช้ในการศึกษาคือ พนักงานขายสินค้าออนไลน์ (Live Commerce / Chat Sales), ตัวแทนฝ่ายขายและการตลาด (Sales Representatives / Tele-sales), 
              ผู้ประกอบการขนาดย่อม (SMEs) และนักศึกษาวิชาชีพด้านการตลาดและการจัดการธุรกิจ ที่ต้องเผชิญกับข้อโต้แย้งของลูกค้า 
              และการเจรจาปิดการขายผ่านช่องทางสนทนาและโทรศัพท์ในชีวิตประจำวัน
            </p>
          </div>

          {/* กลุ่มตัวอย่างและการคำนวณ */}
          <div className="p-4 bg-indigo-50/60 rounded-xl border border-indigo-200 space-y-2">
            <h4 className="font-bold text-indigo-950 text-sm flex items-center gap-2">
              <Calculator className="w-4 h-4 text-indigo-700" />
              <span>3.1.2 การกำหนดขนาดกลุ่มตัวอย่าง (Sample Size Determination)</span>
            </h4>
            <p className="text-xs sm:text-sm text-indigo-900/90 leading-relaxed">
              สำหรับการทดสอบความพึงพอใจของผู้ใช้งาน (User Acceptance Testing: UAT) และการทดลองใช้ระบบในการปิดดีลจริง (Pilot Sales Trials) 
              ผู้วิจัยได้กำหนดขนาดกลุ่มตัวอย่างแบบเจาะจง (Purposive Sampling) จำนวน <strong>30 คน</strong> 
              ซึ่งประกอบด้วยพนักงานขายมืออาชีพ 15 คน และผู้ประกอบการร้านค้าออนไลน์ 15 คน 
              สอดคล้องกับเกณฑ์มาตรฐานการทดสอบระบบสารสนเทศตามหลัก Nielsen Norman Group (NN/g)
            </p>
          </div>
        </div>

        {/* สูตรการคำนวณทางสถิติ Taro Yamane */}
        <div className="p-4 bg-white border border-slate-200 rounded-xl space-y-2 shadow-2xs">
          <div className="text-xs font-bold text-slate-700 font-mono">
            การคำนวณขนาดตัวอย่างสำหรับการสำรวจปัญหาและอุปสรรคการขายเบื้องต้น (Taro Yamane Formula, 1973):
          </div>
          <div className="p-3 bg-slate-900 text-emerald-300 rounded-lg font-mono text-center text-xs sm:text-sm overflow-x-auto">
            n = N / (1 + N * e²)
          </div>
          <p className="text-[11px] text-slate-500 leading-relaxed">
            โดยที่ <em>n</em> คือขนาดกลุ่มตัวอย่าง, <em>N</em> คือขนาดประชากรผู้ประกอบการค้าปลีกและพนักงานขายออนไลน์โดยประมาณ (10,000 คน), 
            และ <em>e</em> คือระดับความคลาดเคลื่อนที่ยอมรับได้ (0.05 หรือ 5% ที่ระดับความเชื่อมั่น 95%) 
            ได้ขนาดตัวอย่างสำรวจความต้องการและข้อโต้แย้งเบื้องต้นเท่ากับ 385 คน
          </p>
        </div>

        {/* เกณฑ์การคัดเลือกกลุ่มตัวอย่าง */}
        <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-3">
          3.1.3 เกณฑ์การคัดเลือกกลุ่มตัวอย่างเข้าร่วมการทดลอง (Inclusion & Exclusion Criteria)
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="p-3 bg-emerald-50/50 border border-emerald-200 rounded-xl space-y-1">
            <span className="font-bold text-emerald-900 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>เกณฑ์การคัดเข้า (Inclusion Criteria)</span>
            </span>
            <ul className="list-disc pl-5 text-slate-700 space-y-1">
              <li>เป็นผู้มีประสบการณ์ด้านงานขาย ให้บริการลูกค้า หรือปิดการขายออนไลน์อย่างน้อย 6 เดือน</li>
              <li>มีอุปกรณ์คอมพิวเตอร์ แท็บเล็ต หรือสมาร์ตโฟนที่สามารถเชื่อมต่ออินเทอร์เน็ตและใช้งานเว็บบราวเซอร์ได้</li>
              <li>ยินยอมเข้าร่วมการทดสอบนำเข้าข้อมูลลูกค้า (Lead Ingestion) ไม่น้อยกว่า 10 รายการ และทดลองใช้สคริปต์ปิดการขายจริง</li>
            </ul>
          </div>

          <div className="p-3 bg-rose-50/50 border border-rose-200 rounded-xl space-y-1">
            <span className="font-bold text-rose-900 flex items-center gap-1.5">
              <UserCheck className="w-4 h-4 text-rose-600" />
              <span>เกณฑ์การคัดออก (Exclusion Criteria)</span>
            </span>
            <ul className="list-disc pl-5 text-slate-700 space-y-1">
              <li>ผู้ที่ไม่ยินยอมให้บันทึกสถิติความเร็วการตอบกลับและผลลัพธ์การปิดการขาย (Won/Lost Deal)</li>
              <li>ผู้ที่ไม่สามารถสละเวลาในการทำแบบประเมิน UAT และตอบแบบสอบถามประเมินผลระบบได้ครบถ้วน</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
