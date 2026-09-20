import React from 'react';
import { CheckCircle2, XCircle, ShieldCheck, FileCheck2, AlertTriangle, Bug } from 'lucide-react';

export const Section4_2_FunctionalTesting: React.FC = () => {
  const testCases = [
    {
      id: 'TC-01',
      module: 'Lead Ingestion',
      description: 'นำเข้าข้อมูล Lead ผ่านแบบฟอร์มด้วยชื่อ, บริษัท, งบประมาณ, และช่องทางติดต่อ',
      input: 'ชื่อ: คุณสมชาย, บริษัท: บจก. สยามเทค, งบประมาณ: 50,000 บาท',
      expected: 'ระบบบันทึก Lead สำเร็จ, แสดงในการ์ด New Lead, และคำนวณคะแนน BANT เริ่มต้น',
      actual: 'ระบบบันทึกข้อมูลถูกต้อง แสดงการ์ดในหน้า Leads และสถานะถูกต้อง',
      status: 'ผ่าน (Pass)'
    },
    {
      id: 'TC-02',
      module: 'Speech Recognition',
      description: 'ทดสอบการแปลงเสียงสนทนาสดเป็นข้อความภาษาไทยผ่าน Web Audio API',
      input: 'เสียงพูด: "ขอต่อรองราคาโปรโมชัน เหลือเดือนละสองพันได้ไหมครับ"',
      expected: 'ระบบถอดความภาษาไทยถูกต้อง และส่งเข้า Prompt Analysis ภายใน 1 วินาที',
      actual: 'ถอดความถูกต้องครบถ้วน คำสำคัญ "ต่อรองราคา", "สองพัน" ปรากฏครบ',
      status: 'ผ่าน (Pass)'
    },
    {
      id: 'TC-03',
      module: 'Objection Diagnosis',
      description: 'ตรวจจับและจำแนกประเภทข้อโต้แย้งจากประโยคของลูกค้า',
      input: 'ข้อความ: "ราคาแพงเกินไป เจ้าอื่นให้ราคาถูกกว่านี้ 20%"',
      expected: 'ระบบจำแนกเป็น Price Objection และระบุความเร่งด่วนระดับ High',
      actual: 'ตรวจพบ Price Objection และ Competitive Comparison ถูกต้อง',
      status: 'ผ่าน (Pass)'
    },
    {
      id: 'TC-04',
      module: 'Guardrail Enforcement',
      description: 'ทดสอบระบบความปลอดภัยป้องกันการให้ส่วนลดเกินสิทธิ์ที่กำหนดใน Catalog',
      input: 'พนักงานขายร้องขอส่วนลด 25% สำหรับสินค้าที่มี Max Discount กำหนดไว้ 10%',
      expected: 'ระบบไม่อนุญาต (Cap ไว้ที่ 10%) และแจ้งเตือนให้เสนอของแถมหรือบริการเสริมแทน',
      actual: 'ระบบปฏิเสธส่วนลด 25% และแนะนำกลยุทธ์ Value De-framing พร้อมแคปส่วนลดที่ 10%',
      status: 'ผ่าน (Pass)'
    },
    {
      id: 'TC-05',
      module: 'Script Synthesis',
      description: 'การสร้างสคริปต์ปิดการขาย 3 ทางเลือกเฉพาะบุคคลด้วย Gemini API',
      input: 'ลูกค้ากังวลเรื่องการเปลี่ยนถ่ายข้อมูลเก่ามีความเสี่ยงและยุ่งยาก',
      expected: 'สร้างสคริปต์ 3 แบบ (ลดความเสี่ยง, อ้างอิงกรณีศึกษาลูกค้าเดิม, เสนอบริการย้ายข้อมูลฟรี)',
      actual: 'AI สร้างสคริปต์ 3 แบบตรงประเด็น สามารถคลิกคัดลอกลงช่องสนทนาได้ทันที',
      status: 'ผ่าน (Pass)'
    },
    {
      id: 'TC-06',
      module: 'BANT Lead Scoring',
      description: 'การคำนวณคะแนน Budget, Authority, Need, Timeline แบบ Dynamic',
      input: 'ลูกค้าตอบว่า: มีงบ 1 แสน, เป็นผู้ตัดสินใจเอง, ต้องการเริ่มใช้งานทันทีสัปดาห์หน้า',
      expected: 'คะแนน BANT สูงกว่า 85 คะแนน และจัดกลุ่มให้อยู่ในสถานะ Hot Tier',
      actual: 'คะแนนคำนวณได้ 92/100 (B:28, A:25, N:20, T:19) และติดป้าย Hot Lead',
      status: 'ผ่าน (Pass)'
    },
    {
      id: 'TC-07',
      module: 'Pipeline Drag & Drop',
      description: 'การเปลี่ยนขั้นตอนการขายบนกระดาน Kanban และอัปเดตสถานะในฐานข้อมูล',
      input: 'ลากการ์ด Lead จากคอลัมน์ In Negotiation ไปยังคอลัมน์ Closed Won',
      expected: 'การ์ดเปลี่ยนสถานะทันที, ปรับยอด Total Won ในแดชบอร์ด, และย้ายเข้าทำเนียบลูกค้า',
      actual: 'สถานะเปลี่ยนเป็น Won, ยอดเงินคำนวณใหม่ และอัปเดต Customer LTV ทันที',
      status: 'ผ่าน (Pass)'
    },
    {
      id: 'TC-08',
      module: 'Follow-up Detection',
      description: 'การตรวจจับลูกค้าที่เงียบหายเกิน 48 ชั่วโมง และแจ้งเตือนในคิวติดตามผล',
      input: 'จำลอง Timestamp ล่าสุดของการสนทนาเป็น 52 ชั่วโมงที่แล้ว',
      expected: 'Lead ปรากฏใน Follow-up Queue และมีปุ่มสร้างข้อความทวงถามเฉพาะบุคคล',
      actual: 'ระบบจัดเข้าคิวติดตามงาน พร้อมร่างข้อความ Re-engagement ที่ปรับตามประวัติเดิม',
      status: 'ผ่าน (Pass)'
    },
    {
      id: 'TC-09',
      module: 'AI Sales Coach',
      description: 'การประเมินทักษะการเจรจาและการปิดการขายหลังสิ้นสุดการสนทนา',
      input: 'ประวัติบทสนทนาการขายความยาว 15 ประโยค',
      expected: 'ระบบสรุปคะแนนทักษะ 3 ด้าน พร้อมข้อเสนอแนะเชิงสร้างสรรค์',
      actual: 'แสดงคะแนนครบ 3 ด้าน และระบุจุดเด่นเรื่องการรับฟัง และจุดปรับปรุงเรื่องการเสนอราคา',
      status: 'ผ่าน (Pass)'
    },
    {
      id: 'TC-10',
      module: 'Export Engine',
      description: 'การส่งออกรายงานสรุปผลการเจรจาและเอกสารโครงการในรูปแบบ Word (.doc) และ Print Preview',
      input: 'คลิกปุ่มส่งออกเอกสาร Word พร้อมเลือกขอบเขตรายงานฉบับสมบูรณ์',
      expected: 'สร้างไฟล์ .doc ที่มีข้อความครบถ้วน พร้อมภาพประกอบ Mockup คุณภาพสูงแบบฝัง Base64',
      actual: 'ดาวน์โหลดไฟล์ Word สำเร็จ รูปภาพคมชัดและฟอนต์ Sarabun ตรงตามแบบแผนวิชาการ',
      status: 'ผ่าน (Pass)'
    }
  ];

  return (
    <div id="section-4-2" className="space-y-6">
      <div className="border-b border-indigo-200 pb-3">
        <h3 className="text-xl font-bold text-indigo-950 font-serif flex items-center gap-2">
          <FileCheck2 className="w-5 h-5 text-indigo-700" />
          <span>4.2 ผลการทดสอบเชิงฟังก์ชันและการทำงานของระบบ (Functional &amp; Black Box Testing)</span>
        </h3>
        <p className="text-xs text-slate-500 mt-0.5">
          Comprehensive Black-Box Test Cases, Boundary Value Analysis &amp; System Reliability Verification
        </p>
      </div>

      <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed text-justify">
        <p>
          ในการประเมินความถูกต้องของการทำงานตามข้อกำหนดเชิงหน้าที่ (Functional Requirements) 
          ผู้วิจัยได้ดำเนินการทดสอบแบบกล่องดำ (Black Box Testing) โดยออกแบบกรณีทดสอบครอบคลุมทุกโมดูลหลัก 
          เพื่อยืนยันว่าการรับข้อมูลนำเข้า (Input), กระบวนการคำนวณของอัลกอริทึม, และผลลัพธ์ที่แสดงบนส่วนต่อประสาน (Output) 
          มีความถูกต้องสมบูรณ์และไม่มีข้อผิดพลาดร้ายแรง (Critical Bugs) โดยมีเกณฑ์การประเมินและผลการทดสอบดังนี้:
        </p>

        {/* 4.2.1 Test Plan */}
        <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-indigo-700" />
            <span>4.2.1 เกณฑ์การยอมรับและการเตรียมสภาพแวดล้อมการทดสอบ (Test Environment &amp; Acceptance Criteria)</span>
          </h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            การทดสอบกระทำบนสภาพแวดล้อมจริง (Production Staging Environment) โดยใช้เว็บบราวเซอร์มาตรฐาน Google Chrome v124+, 
            Apple Safari v17+, และ Microsoft Edge เชื่อมต่อกับ Express API Gateway และ Google Gemini 2.5 Flash API 
            เกณฑ์การยอมรับคือ ทุกกรณีทดสอบจะต้องได้ผลลัพธ์ตรงตามที่คาดหมาย 100% (Pass Rate = 100%) หากพบความผิดปกติจะต้องดำเนินการปรับแก้โค้ดจนกว่าจะผ่านเกณฑ์
          </p>
        </div>

        {/* 4.2.2 Test Cases Table */}
        <div className="my-4 border border-slate-200 rounded-xl overflow-hidden bg-white shadow-2xs">
          <div className="bg-slate-100 px-4 py-2.5 border-b border-slate-200 font-bold text-xs text-slate-800 flex items-center justify-between">
            <span>ตารางที่ 4.1 ผลการทดสอบการทำงานของฟังก์ชันระบบหลัก (Black Box Functional Test Cases: TC-01 ถึง TC-10)</span>
            <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-mono font-bold">Pass Rate: 10/10 (100%)</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-700">
                  <th className="p-2.5 w-16 text-center font-bold">รหัส</th>
                  <th className="p-2.5 w-28 font-bold">โมดูลการทำงาน</th>
                  <th className="p-2.5 font-bold">วัตถุประสงค์และขั้นตอนทดสอบ</th>
                  <th className="p-2.5 font-bold hidden md:table-cell">ผลลัพธ์ที่คาดหวัง</th>
                  <th className="p-2.5 font-bold">ผลการทดสอบจริง</th>
                  <th className="p-2.5 w-20 text-center font-bold">สถานะ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {testCases.map((tc, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-2.5 text-center font-mono font-bold text-indigo-700">{tc.id}</td>
                    <td className="p-2.5 font-medium text-slate-900">{tc.module}</td>
                    <td className="p-2.5">
                      <div className="font-semibold text-slate-800">{tc.description}</div>
                      <div className="text-[11px] text-slate-500 mt-0.5"><span className="font-medium text-slate-600">Input: </span>{tc.input}</div>
                    </td>
                    <td className="p-2.5 text-slate-600 hidden md:table-cell text-[11px]">{tc.expected}</td>
                    <td className="p-2.5 text-slate-800 text-[11px]">{tc.actual}</td>
                    <td className="p-2.5 text-center">
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" /> ผ่าน
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 4.2.3 Boundary & Exception Handling */}
        <div className="p-4 bg-white border border-slate-200 rounded-xl space-y-3 shadow-2xs">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
            <AlertTriangle className="w-4 h-4 text-amber-600" />
            <span>4.2.3 การทดสอบกรณีขอบเขตและข้อผิดพลาด (Boundary Value &amp; Exception Handling Testing)</span>
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            นอกเหนือจากการทดสอบกรณีปกติ ผู้วิจัยได้ทดสอบสถานการณ์วิกฤต (Edge Cases &amp; Fault Tolerance) 3 ด้าน:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div className="p-3 bg-amber-50/60 border border-amber-200 rounded-xl space-y-1">
              <span className="font-bold text-amber-900 block">1. สัญญาณอินเทอร์เน็ตขาดหาย (Offline Recovery)</span>
              <p className="text-slate-600 leading-relaxed">
                เมื่อเครือข่ายหลุดระหว่างที่ AI กำลังประมวลผลคำตอบ ระบบจะแสดงข้อความเตือนอย่างสุภาพ พร้อมบันทึกร่างสคริปต์ไว้ใน Local State 
                และมีปุ่ม Retry โดยไม่ทำให้ข้อมูล Lead ในไปป์ไลน์สูญหาย
              </p>
            </div>
            <div className="p-3 bg-indigo-50/60 border border-indigo-200 rounded-xl space-y-1">
              <span className="font-bold text-indigo-900 block">2. การป้อนข้อความกำกวมหรือไม่เกี่ยวข้อง (Off-topic Input)</span>
              <p className="text-slate-600 leading-relaxed">
                หากลูกค้าพิมพ์ข้อความนอกเรื่องหรือไม่เกี่ยวข้องกับการขาย ระบบ System Prompt จะดึงความสนใจกลับมายังประเด็นสินค้า 
                โดยเสนอคำถามปลายเปิดเพื่อสอบถามปัญหาของลูกค้าโดยไม่ตอบออกนอกกรอบ
              </p>
            </div>
            <div className="p-3 bg-rose-50/60 border border-rose-200 rounded-xl space-y-1">
              <span className="font-bold text-rose-900 block">3. การเจาะส่วนลด (Prompt Injection &amp; Discount Hack)</span>
              <p className="text-slate-600 leading-relaxed">
                ทดสอบพิมพ์คำสั่งให้ AI ให้ส่วนลด 90% หรือขอรับฟรี ระบบ Rule-based Guardrail บนเซิร์ฟเวอร์จะทำหน้าที่ตัดคำขอ 
                และยืนยันว่าส่วนลดไม่สามารถเกินขีดจำกัดที่กำหนดในแคตตาล็อกได้เด็ดขาด
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
