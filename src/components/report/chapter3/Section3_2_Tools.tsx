import React from 'react';
import { Laptop, Cpu, Code2, FileSpreadsheet, Server, Database, Bot, ShieldCheck } from 'lucide-react';

export const Section3_2_Tools: React.FC = () => {
  return (
    <div id="section-3-2" className="space-y-5 pt-6 border-t border-slate-200">
      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2 font-serif">
        <span className="text-indigo-600 font-mono">3.2</span>
        <span>เครื่องมือที่ใช้ในการวิจัยและพัฒนา (Research & Development Instruments)</span>
      </h3>

      <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed text-justify">
        <p>
          ในการออกแบบ พัฒนา และประเมินผลระบบ Smart Closer AI ผู้วิจัยได้เลือกใช้เครื่องมือ อุปกรณ์ และเทคโนโลยีที่มีมาตรฐานระดับสากล 
          ครอบคลุม 5 มิติหลัก ทั้งการประมวลผลโมเดลภาษาขนาดใหญ่ การเชื่อมต่อเรียลไทม์ และระบบรักษาความปลอดภัย ดังนี้:
        </p>

        {/* ตารางเปรียบเทียบและสรุปเครื่องมือ */}
        <div className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-2xs my-3">
          <div className="bg-slate-100 px-4 py-2.5 border-b border-slate-200 font-bold text-xs text-slate-800">
            ตารางที่ 3.1: รายการเครื่องมือ ฮาร์ดแวร์ ซอฟต์แวร์ และเฟรมเวิร์กที่ใช้ในการดำเนินงานวิจัย
          </div>
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-700">
                <th className="p-3 w-1/4">หมวดหมู่เครื่องมือ</th>
                <th className="p-3 w-1/3">รายการเครื่องมือ / สเปก</th>
                <th className="p-3">วัตถุประสงค์การใช้งาน</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr>
                <td className="p-3 font-semibold text-indigo-900">1. เครื่องมือด้านฮาร์ดแวร์ (Hardware)</td>
                <td className="p-3 font-mono text-[11px]">
                  • Cloud Workstation / Intel Core i7 16-Core<br/>
                  • RAM 32 GB, SSD 1TB NVMe<br/>
                  • Audio Input/Output: Studio Condenser Mic & Sound Card
                </td>
                <td className="p-3 text-slate-600">
                  ใช้สำหรับการประมวลผลโค้ด จำลองเซิร์ฟเวอร์ และทดสอบการรับฟังคำพูดสด (Live Voice Ingestion) และแปลงเสียงเรียลไทม์
                </td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-indigo-900">2. เทคโนโลยีส่วนหน้า (Frontend Web/Mobile)</td>
                <td className="p-3 font-mono text-[11px]">
                  • React 18 & TypeScript 5.x<br/>
                  • Tailwind CSS v4.0 & Lucide Icons<br/>
                  • Web Audio API & MediaStream Recording
                </td>
                <td className="p-3 text-slate-600">
                  สร้าง Sales Copilot Interface ที่ตอบสนองรวดเร็ว รองรับการแสดงผลสคริปต์แบบเรียลไทม์ และตรวจจับระดับเสียงสนทนา
                </td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-indigo-900">3. ส่วนบริการแบ็กเอนด์และตัวกลาง (Backend & Gateway)</td>
                <td className="p-3 font-mono text-[11px]">
                  • Node.js & Express.js Engine<br/>
                  • Server-Sent Events (SSE) Streaming<br/>
                  • Environment Secret Vault (Proxy API Security)
                </td>
                <td className="p-3 text-slate-600">
                  ทำหน้าที่เป็น API Gateway รับส่งสตรีมข้อความ ตรวจสอบความถูกต้องของคำขอ และปกป้อง API Key ไม่ให้หลุดสู่ฝั่งไคลเอนต์
                </td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-indigo-900">4. สถาปัตยกรรม AI & Cognitive Models</td>
                <td className="p-3 font-mono text-[11px]">
                  • Google Gemini 2.5 Flash API (Multimodal/NLP)<br/>
                  • Rule-based BANT Scoring Matrix<br/>
                  • Dynamic Sales Knowledge Base (In-Memory RAG)
                </td>
                <td className="p-3 text-slate-600">
                  วิเคราะห์อารมณ์และเจตนาของลูกค้า ตรวจจับข้อโต้แย้ง 3 มิติ คำนวณคะแนน BANT และสังเคราะห์สคริปต์ปิดการขายเฉพาะบุคคล
                </td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-indigo-900">5. เครื่องมือวัดผลและการประเมิน (Evaluation Tools)</td>
                <td className="p-3 font-mono text-[11px]">
                  • แบบประเมิน UAT Likert Scale 5 ระดับ<br/>
                  • ตัวชี้วัดธุรกิจ (Win Rate, Time to Close, Deal Size)<br/>
                  • Confusion Matrix (Precision, Recall, F1)
                </td>
                <td className="p-3 text-slate-600">
                  ใช้ในการเก็บรวบรวมและวิเคราะห์ข้อมูลความพึงพอใจของผู้ใช้งาน และวัดผลสัมฤทธิ์ทางการค้าจริงของระบบ
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
