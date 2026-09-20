import React from 'react';
import { Figure3_10_DatabaseERD } from '../ReportFigures';
import { Layout, Database, Table, Key, CheckCircle2 } from 'lucide-react';

export const Section3_5_DesignSchema: React.FC = () => {
  return (
    <div id="section-3-5" className="space-y-5 pt-6 border-t border-slate-200">
      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2 font-serif">
        <span className="text-indigo-600 font-mono">3.5</span>
        <span>การออกแบบส่วนต่อประสานและแบบจำลองฐานข้อมูล (UI/UX Design & Database Schema)</span>
      </h3>

      <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed text-justify">
        <p>
          การออกแบบระบบ <strong>Smart Closer AI</strong> คำนึงถึง 2 องค์ประกอบหลัก ได้แก่ การออกแบบประสบการณ์ส่วนต่อประสานสำหรับพนักงานขาย (Sales Copilot UX) 
          เพื่อให้สามารถเข้าถึงข้อมูลและสคริปต์ได้ในพริบตา และการออกแบบโครงสร้างฐานข้อมูลเชิงสัมพันธ์ (Relational Database Design) 
          ที่รองรับข้อมูลลูกค้า บทสนทนา และการติดตามผลการปิดการขาย:
        </p>

        {/* 3.5.1 การออกแบบส่วนต่อประสาน */}
        <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
          <h4 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
            <Layout className="w-4 h-4 text-indigo-600" />
            <span>3.5.1 ปรัชญาการออกแบบส่วนต่อประสานผู้ใช้ (Sales Copilot UI/UX Philosophy)</span>
          </h4>
          <ul className="list-disc pl-9 space-y-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
            <li><strong>Low Cognitive Friction & Rapid Response:</strong> อินเทอร์เฟซเน้นความกระชับ แสดงสคริปต์ปิดการขายพร้อมปุ่มคัดลอก (One-Click Copy) เพื่อให้เซลส์ส่งต่อคำตอบได้ทันต่อสถานการณ์การเจรจา</li>
            <li><strong>Traffic Light BANT Indicator:</strong> ใช้ระบบรหัสสีแบบไฟจราจร (เขียว/เหลือง/แดง) สะท้อนคะแนน BANT Score เพื่อให้พนักงานขายจัดลำดับความสำคัญของลูกค้ามุ่งหวังได้ใน 1 วินาที</li>
            <li><strong>Responsive Desktop & Mobile Floating Widget:</strong> รองรับการเปิดเป็นหน้าต่างคู่ขนาน (Side-by-side) ข้างโปรแกรมแชทหรือบนสมาร์ตโฟนระหว่างออกพบลูกค้า</li>
          </ul>
        </div>

        {/* 3.5.2 แบบจำลองฐานข้อมูล ERD */}
        <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-4 flex items-center gap-2">
          <Database className="w-4 h-4 text-indigo-600" />
          <span>3.5.2 แผนภาพความสัมพันธ์ของเอนทิตี (Entity-Relationship Diagram: ERD)</span>
        </h4>
        <p>
          โครงสร้างฐานข้อมูลประกอบด้วย 4 เอนทิตีหลัก ได้แก่ ตารางพนักงานขาย (USERS), ตารางข้อมูลลูกค้าและประวัติการสนทนา (LEADS_CONVERSATIONS), 
          ตารางแคตตาล็อกสินค้าและคลังความรู้ (SALES_KNOWLEDGE_VAULT), และตารางบันทึกผลการปิดการขาย (DEALS_CONVERSIONS) 
          มีความสัมพันธ์แบบ One-to-Many (1:N) ดังแสดงในแผนภาพ:
        </p>

        {/* รูปที่ 3.10 ERD */}
        <Figure3_10_DatabaseERD />

        {/* ตารางพจนานุกรมข้อมูล (Data Dictionary) */}
        <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-6 flex items-center gap-2">
          <Table className="w-4 h-4 text-indigo-600" />
          <span>3.5.3 พจนานุกรมข้อมูลตารางลูกค้าและการสนทนา (Data Dictionary: LEADS_CONVERSATIONS Table)</span>
        </h4>

        <div className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-2xs my-2">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="bg-slate-100 border-b border-slate-200 text-slate-700">
                <th className="p-2.5 font-mono">Column Name</th>
                <th className="p-2.5">Data Type</th>
                <th className="p-2.5 text-center">Key Type</th>
                <th className="p-2.5">คำอธิบายคุณลักษณะ (Description)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-mono text-[11px] text-slate-700">
              <tr>
                <td className="p-2.5 font-bold text-indigo-700">lead_id</td>
                <td className="p-2.5">UUID / VARCHAR(36)</td>
                <td className="p-2.5 text-center"><span className="px-2 py-0.5 bg-amber-100 text-amber-900 rounded font-bold text-[10px]">PK</span></td>
                <td className="p-2.5 font-sans text-slate-600">รหัสเฉพาะประจำตัวลูกค้ามุ่งหวังแต่ละราย</td>
              </tr>
              <tr>
                <td className="p-2.5 font-bold text-indigo-700">customer_name</td>
                <td className="p-2.5">VARCHAR(100)</td>
                <td className="p-2.5 text-center text-slate-400">-</td>
                <td className="p-2.5 font-sans text-slate-600">ชื่อหรือชื่อองค์กรของลูกค้า</td>
              </tr>
              <tr>
                <td className="p-2.5 font-bold text-indigo-700">bant_score</td>
                <td className="p-2.5">INTEGER</td>
                <td className="p-2.5 text-center text-slate-400">-</td>
                <td className="p-2.5 font-sans text-slate-600">คะแนนความพร้อมในการซื้อจากการประเมิน BANT (0 - 100)</td>
              </tr>
              <tr>
                <td className="p-2.5 font-bold text-indigo-700">objection_type</td>
                <td className="p-2.5">VARCHAR(50)</td>
                <td className="p-2.5 text-center text-slate-400">-</td>
                <td className="p-2.5 font-sans text-slate-600">ประเภทข้อโต้แย้งหลัก เช่น price, competitor, timeline, budget</td>
              </tr>
              <tr>
                <td className="p-2.5 font-bold text-indigo-700">last_intent</td>
                <td className="p-2.5">TEXT</td>
                <td className="p-2.5 text-center text-slate-400">-</td>
                <td className="p-2.5 font-sans text-slate-600">สรุปเจตนาและข้อความล่าสุดที่ลูกค้าแจ้ง</td>
              </tr>
              <tr>
                <td className="p-2.5 font-bold text-indigo-700">user_id</td>
                <td className="p-2.5">UUID / VARCHAR(36)</td>
                <td className="p-2.5 text-center"><span className="px-2 py-0.5 bg-indigo-100 text-indigo-900 rounded font-bold text-[10px]">FK</span></td>
                <td className="p-2.5 font-sans text-slate-600">รหัสพนักงานขายที่เป็นผู้รับผิดชอบดีลนี้ (เชื่อมโยง USERS)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
