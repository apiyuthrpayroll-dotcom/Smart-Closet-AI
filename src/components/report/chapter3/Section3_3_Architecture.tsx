import React from 'react';
import { 
  Figure3_7_SystemArchitectureExtended, 
  Figure3_8_DataFlowDiagram, 
  Figure3_9_UseCaseDiagram 
} from '../ReportFigures';
import { Network, GitBranch, Layers, Cpu, ShieldCheck } from 'lucide-react';

export const Section3_3_Architecture: React.FC = () => {
  return (
    <div id="section-3-3" className="space-y-5 pt-6 border-t border-slate-200">
      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2 font-serif">
        <span className="text-indigo-600 font-mono">3.3</span>
        <span>ขั้นตอนการดำเนินงานและการออกแบบสถาปัตยกรรมระบบ (System Architecture & Operational Flow)</span>
      </h3>

      <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed text-justify">
        <p>
          การพัฒนาระบบ <strong>Smart Closer AI</strong> ได้ประยุกต์ใช้ระเบียบวิธีพัฒนาซอฟต์แวร์แบบ <strong>Agile Development Framework</strong> 
          ที่มีการทำงานเป็นรอบสปรินต์ (Sprints) มีการทดสอบความแม่นยำของโมเดลปัญญาประดิษฐ์และอินเทอร์เฟซผู้ช่วยปิดการขายร่วมกับพนักงานขายอย่างต่อเนื่อง 
          โดยแบ่งสถาปัตยกรรมระบบออกเป็น 4 ระดับชั้น (4-Tier Architectural Model) เพื่อความปลอดภัย ประสิทธิภาพการประมวลผลแบบเรียลไทม์ และความยืดหยุ่นในการขยายตัว (Scalability):
        </p>

        {/* รายละเอียด 4-Tier Model */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-3">
          <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
            <span className="font-bold text-indigo-900 text-xs sm:text-sm flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
              <span>1. Client Presentation Tier (Frontend UI / Copilot Overlay):</span>
            </span>
            <p className="text-xs text-slate-600 leading-relaxed pl-3.5">
              ส่วนต่อประสานผู้ใช้ที่ทำงานบนเบราว์เซอร์และหน้าต่าง Floating Widget มีหน้าที่รับข้อมูลแชทลูกค้าจาก LINE Official Account, Facebook Messenger หรือเสียงสนทนาสด แสดงสคริปต์คำตอบแนะนำ และสรุปผลคะแนน BANT Score
            </p>
          </div>

          <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
            <span className="font-bold text-indigo-900 text-xs sm:text-sm flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
              <span>2. Application & API Gateway Tier (Express & Vite Backend):</span>
            </span>
            <p className="text-xs text-slate-600 leading-relaxed pl-3.5">
              เซิร์ฟเวอร์ Express.js ทำหน้าที่ควบคุมสิทธิ์การเข้าถึง (Authentication), ควบคุมเพดานส่วนลดของพนักงานขาย, จัดการ Webhook ขาเข้าจากแอปแชท, และรักษาความปลอดภัยของ API Keys ก่อนส่งต่อไปยังโมเดล AI
            </p>
          </div>

          <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
            <span className="font-bold text-indigo-900 text-xs sm:text-sm flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
              <span>3. AI Intelligence & Inference Tier (Gemini 2.5 Flash Engine):</span>
            </span>
            <p className="text-xs text-slate-600 leading-relaxed pl-3.5">
              แกนสมองปัญญาประดิษฐ์ ดำเนินการสกัดเจตนาลูกค้า (Intent Extraction), จัดหมวดหมู่ข้อโต้แย้ง 3 มิติ (ราคา, คู่แข่ง, เวลา), คำนวณคะแนน BANT (0-100), และสังเคราะห์สคริปต์ปิดการขายตามหลักจิตวิทยาแบบเรียลไทม์
            </p>
          </div>

          <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
            <span className="font-bold text-indigo-900 text-xs sm:text-sm flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
              <span>4. Data Persistence & Knowledge Tier (Sales Vault & Vector DB):</span>
            </span>
            <p className="text-xs text-slate-600 leading-relaxed pl-3.5">
              คลังจัดเก็บแคตตาล็อกสินค้า, กฎส่วนลดที่ได้รับอนุมัติ (Pricing Rules), สคริปต์แก้เกมที่เคยปิดดีลสำเร็จ (Winning Rebuttals), และฐานข้อมูลประวัติการเจรจากับลูกค้าแต่ละราย
            </p>
          </div>
        </div>

        {/* รูปที่ 3.7 สถาปัตยกรรมระบบ 4 ชั้น */}
        <Figure3_7_SystemArchitectureExtended />

        <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-6">
          3.3.1 แผนภาพการไหลของข้อมูล (Data Flow Diagram: DFD)
        </h4>
        <p>
          การเคลื่อนย้ายข้อมูลภายในระบบ Smart Closer AI เริ่มต้นจากการรับเข้าข้อความแชทหรือเสียงสนทนาของลูกค้า ผ่านกระบวนการถอดความและจัดรูปแบบ (Data Ingestion & Formatting) 
          ส่งต่อไปยังกระบวนการวิเคราะห์ความต้องการและเจตนา (Process 1.0) เพื่อประเมินข้อโต้แย้งและคำนวณคะแนน BANT Score จากนั้นระบบจะดึงบริบทสินค้าและส่วนลดจากคลังความรู้ (Sales Vault) 
          มาส่งเข้าสู่กระบวนการสังเคราะห์สคริปต์ปิดการขาย (Process 2.0 & 3.0) และส่งกลับไปให้พนักงานขายใช้งานได้ทันทีภายในเวลาเสี้ยววินาที:
        </p>

        {/* รูปที่ 3.8 DFD */}
        <Figure3_8_DataFlowDiagram />

        <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-6">
          3.3.2 แผนภาพกรณีการใช้งาน (Use Case Diagram & System Specifications)
        </h4>
        <p>
          ระบบมีผู้แสดงบทบาทหลัก 2 ฝ่าย ได้แก่ <strong>พนักงานขาย (Sales Representative)</strong> ซึ่งเป็นผู้ใช้งานหลัก และ <strong>ผู้ดูแลระบบ / โมเดล AI (System Admin & AI Engine)</strong> 
          ครอบคลุมกรณีการใช้งาน 7 ประการ ตั้งแต่การเข้าสู่ระบบ, การสแกนรับเข้าข้อมูลลูกค้า, การวินิจฉัยข้อโต้แย้ง, การคำนวณคะแนน BANT, การขอรับสคริปต์ปิดการขาย, การบันทึกปิดดีลสำเร็จ, ตลอดจนการจัดการแคตตาล็อกสินค้า:
        </p>

        {/* รูปที่ 3.9 Use Case */}
        <Figure3_9_UseCaseDiagram />
      </div>
    </div>
  );
};
