import React from 'react';
import { Figure2_8_SystemArchitecture } from '../ReportFigures';
import { Layers, Server, Cpu, Database, BookOpen, CheckCircle, ShieldCheck } from 'lucide-react';

export const Section2_7_TechStack_RelatedWorks: React.FC = () => {
  return (
    <div id="section-2-7" className="space-y-5 pt-6 border-t border-slate-200">
      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2 font-serif">
        <span className="text-indigo-600 font-mono">2.7</span>
        <span>เทคโนโลยีที่ใช้ในการพัฒนาและงานวิจัยที่เกี่ยวข้อง (Tech Stack & Literature Review)</span>
      </h3>

      <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed text-justify">
        <p>
          ในการเลือกเฟรมเวิร์กและเทคโนโลยีสำหรับระบบ Smart Closer AI ผู้พัฒนาได้กำหนดเกณฑ์การคัดเลือกบนพื้นฐานของ 
          (1) ความปลอดภัยของข้อมูลความลับทางธุรกิจ (Data Security), 
          (2) ประสิทธิภาพการประมวลผลที่มีความหน่วงต่ำ (Low Latency), 
          และ (3) ความสามารถในการขยายขนาดระบบ (Scalability) เพื่อรองรับทราฟฟิกของผู้ใช้จำนวนมาก
        </p>

        <h4 className="font-bold text-slate-900 text-base sm:text-lg mt-4">
          2.7.1 สถาปัตยกรรม Full-Stack แบบ Client-Server และความปลอดภัยของ API Key
        </h4>
        <p>
          ระบบถูกออกแบบให้สอดคล้องกับมาตรฐานความปลอดภัยระดับองค์กร โดยแบ่งการทำงานออกเป็น:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
          <li>
            <strong>Frontend Single Page Application (SPA):</strong> พัฒนาด้วย React 19 และ TypeScript 
            ช่วยให้การแสดงผลและการอัปเดตสถานะของแชท รวดเร็ว ไร้การกระตุก (Smooth State Transitions)
          </li>
          <li>
            <strong>Backend API Gateway:</strong> ใช้ Node.js ร่วมกับ Express.js ทำหน้าที่เป็นตัวกลาง (Reverse Proxy) 
            ในการส่งคำร้องขอไปยังโมเดล Google Gemini API โดย API Key จะถูกเก็บรักษาไว้ในสภาพแวดล้อมฝั่งเซิร์ฟเวอร์เท่านั้น 
            ไม่รั่วไหลไปยังบราวเซอร์ของไคลเอนต์เด็ดขาด
          </li>
          <li>
            <strong>Unified Port Binding:</strong> ระบบทำการผูกการทำงานเข้ากับ Host 0.0.0.0 และ Port 3000 มาตรฐาน 
            สอดคล้องกับข้อกำหนดของ Google Cloud Run และสถาปัตยกรรมคอนเทนเนอร์สมัยใหม่
          </li>
        </ul>

        {/* ตารางที่ 2.2 */}
        <div className="my-5 border border-slate-200 rounded-xl overflow-hidden bg-white shadow-xs">
          <div className="bg-slate-100 px-4 py-2.5 border-b border-slate-200 font-bold text-xs text-slate-800 flex items-center justify-between">
            <span>ตารางที่ 2.2 สรุปเทคโนโลยีและเครื่องมือที่ใช้ในการพัฒนาระบบ Smart Closer AI</span>
            <span className="text-[10px] text-slate-500 font-normal">สถาปัตยกรรมระบบเวอร์ชัน 2.0</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-700 font-semibold">
                  <th className="p-3">หมวดหมู่</th>
                  <th className="p-3">เทคโนโลยี / เครื่องมือ</th>
                  <th className="p-3">บทบาทหน้าที่ในระบบ</th>
                  <th className="p-3">เหตุผลความเหมาะสม</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr>
                  <td className="p-3 font-semibold text-indigo-900">Frontend Framework</td>
                  <td className="p-3 font-mono font-bold">React 19 & TypeScript</td>
                  <td className="p-3">ส่วนติดต่อผู้ใช้งานแบบ Single Page Application (SPA)</td>
                  <td className="p-3">ความปลอดภัยด้าน Data Types และการจัดการ State ที่มีประสิทธิภาพ</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-indigo-900">Styling & UI</td>
                  <td className="p-3 font-mono font-bold">Tailwind CSS v4 & Lucide Icons</td>
                  <td className="p-3">การจัดเลย์เอาต์ ออกแบบคอมโพเนนต์และไอคอนตามหลัก UX/UI</td>
                  <td className="p-3">โหลดเร็ว ปรับแต่งได้ตามมาตรฐาน Mobile-first Responsive</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-indigo-900">Backend & API</td>
                  <td className="p-3 font-mono font-bold">Node.js, Express & Vite</td>
                  <td className="p-3">API Gateway สำหรับกระจาย Request และซ่อน API Key</td>
                  <td className="p-3">ป้องกันคีย์รั่วไหลสู่ไคลเอนต์และเชื่อมต่อ Port 3000 มาตรฐาน</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-indigo-900">AI Intelligence Core</td>
                  <td className="p-3 font-mono font-bold">Google Gemini API (@google/genai)</td>
                  <td className="p-3">วิเคราะห์เจตนา ตอบข้อโต้แย้ง และคำนวณ Lead Score</td>
                  <td className="p-3">รองรับภาษาไทยดีเยี่ยม มีความเร็วต่ำกว่า 1.5 วินาที</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-indigo-900">Build Tool & Bundler</td>
                  <td className="p-3 font-mono font-bold">Vite & esbuild</td>
                  <td className="p-3">คอมไพล์โค้ดเป็น Bundle ไฟล์เดียวและเริ่มระบบทันที</td>
                  <td className="p-3">ความเร็วในการคอมไพล์สูงและสนับสนุน Cloud Run Containers</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* แทรกรูปที่ 2.8 */}
      <Figure2_8_SystemArchitecture />

      {/* 2.7.2 ทบทวนวรรณกรรมและงานวิจัยที่เกี่ยวข้อง */}
      <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed text-justify mt-6">
        <h4 className="font-bold text-slate-900 text-base sm:text-lg mt-4">
          2.7.2 เอกสารและงานวิจัยที่เกี่ยวข้องในระดับสากล (Literature Review)
        </h4>
        <p>
          ในการศึกษาวิจัย ผู้พัฒนาได้ทบทวนผลงานวิจัยที่เกี่ยวข้องโดยตรง 3 ชิ้นงานหลัก:
        </p>

        <div className="space-y-3">
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
            <div className="font-bold text-slate-900 text-xs sm:text-sm">
              1. Oldroyd, McElheran & Elkington (2011) - Harvard Business Review
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              งานวิจัย <em>"The Short Life of Online Sales Leads"</em> ได้วิเคราะห์ข้อมูลประวัติการติดต่อ Lead 
              จำนวน 1.25 ล้านรายการจาก 2,241 บริษัทในสหรัฐอเมริกา และค้นพบข้อสรุปที่น่าตกใจว่า 
              บริษัทส่วนใหญ่ใช้เวลาตอบกลับลูกค้านานเกิน 42 ชั่วโมง และบริษัทที่สามารถตอบกลับได้ภายใน 5 นาทีแรก 
              มีโอกาสติดต่อลูกค้าสำเร็จสูงกว่าบริษัทที่รอ 30 นาทีถึง <strong>21 เท่า</strong> 
              ซึ่งเป็นแรงบันดาลใจหลักในการสร้างระบบเตือน Hot Leads แบบฉับพลันในโครงการนี้
            </p>
          </div>

          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
            <div className="font-bold text-slate-900 text-xs sm:text-sm">
              2. McKinsey & Company Global Report (2023)
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              รายงานวิจัย <em>"The Economic Potential of Generative AI: The Next Productivity Frontier"</em> 
              ระบุว่าการประยุกต์ใช้ Generative AI ในงานด้าน Commercial, Marketing และ Sales 
              สามารถเพิ่มประสิทธิภาพในการปิดการขายได้ถึง 20-30% และลดต้นทุนการดำเนินงานลง 15% 
              โดยเฉพาะฟังก์ชันการให้คำแนะนำการเจรจาและการสร้างข้อความเฉพาะบุคคล (Personalized Messaging)
            </p>
          </div>

          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
            <div className="font-bold text-slate-900 text-xs sm:text-sm">
              3. Jannach, Manzoor, Cai & Chen (2021) - ACM Computing Surveys
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              การสำรวจ <em>"A Survey on Conversational Recommender Systems"</em> ชี้ให้เห็นว่า 
              การสื่อสารสองทิศทางแบบต่อเนื่อง (Multi-turn Dialogue) ช่วยลดความคลุมเครือในความต้องการของผู้บริโภค 
              และเพิ่มความพึงพอใจต่อข้อเสนอแนะสินค้าสูงกว่าระบบค้นหาแบบเดิมอย่างมีนัยสำคัญ
            </p>
          </div>
        </div>

        {/* ตารางที่ 2.3 */}
        <div className="my-5 border border-slate-200 rounded-xl overflow-hidden bg-white shadow-xs">
          <div className="bg-slate-100 px-4 py-2.5 border-b border-slate-200 font-bold text-xs text-slate-800 flex items-center justify-between">
            <span>ตารางที่ 2.3 การเปรียบเทียบคุณสมบัติระบบ Smart Closer AI กับระบบ CRM และ Chatbot ทั่วไป</span>
            <span className="text-[10px] text-slate-500 font-normal">การเปรียบเทียบเชิงวิชาการ</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-700 font-semibold">
                  <th className="p-3">คุณสมบัติการทำงาน</th>
                  <th className="p-3 text-center">Chatbot กฎตายตัวทั่วไป</th>
                  <th className="p-3 text-center">Traditional CRM (ทั่วไป)</th>
                  <th className="p-3 text-center bg-indigo-50 font-bold text-indigo-900">Smart Closer AI</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr>
                  <td className="p-3 font-medium">การเข้าใจคำถามและข้อโต้แย้งซับซ้อน</td>
                  <td className="p-3 text-center text-rose-500">ต่ำ (ตามคีย์เวิร์ด)</td>
                  <td className="p-3 text-center text-slate-400">-</td>
                  <td className="p-3 text-center bg-indigo-50 font-bold text-emerald-600">สูงมาก (LLM Reasoning)</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">การจัดคะแนน Lead Scoring อัตโนมัติ</td>
                  <td className="p-3 text-center text-slate-400">ไม่มี</td>
                  <td className="p-3 text-center text-amber-600">ใช้มนุษย์กรอกเอง</td>
                  <td className="p-3 text-center bg-indigo-50 font-bold text-emerald-600">อัตโนมัติ (BANT Matrix)</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">การสร้างสคริปต์แก้ข้อโต้แย้งเฉพาะราย</td>
                  <td className="p-3 text-center text-slate-400">ไม่มี</td>
                  <td className="p-3 text-center text-slate-400">ไม่มี</td>
                  <td className="p-3 text-center bg-indigo-50 font-bold text-emerald-600">มี (Personalized Rebuttal)</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">การตรวจจับลูกค้าเงียบหาย & สร้าง Follow-up</td>
                  <td className="p-3 text-center text-slate-400">ไม่มี</td>
                  <td className="p-3 text-center text-amber-600">แจ้งเตือนธรรมดา</td>
                  <td className="p-3 text-center bg-indigo-50 font-bold text-emerald-600">เตือนพร้อมร่างข้อความกระตุ้น</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Voice Agent โต้ตอบด้วยเสียง Real-time</td>
                  <td className="p-3 text-center text-slate-400">ไม่มี</td>
                  <td className="p-3 text-center text-slate-400">ไม่มี</td>
                  <td className="p-3 text-center bg-indigo-50 font-bold text-emerald-600">มี (Web Speech & AI Voice)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 2.7.3 สรุปสาระสำคัญของบทที่ 2 */}
        <h4 className="font-bold text-slate-900 text-base sm:text-lg mt-6">
          2.7.3 สรุปสาระสำคัญของบทที่ 2 (Chapter Synthesis)
        </h4>
        <p>
          จากการทบทวนวรรณกรรมและทฤษฎีที่เกี่ยวข้องในบทนี้ สามารถสรุปได้ว่า ความล้มเหลวของการขายออนไลน์ส่วนใหญ่เกิดจากการตอบสนองล่าช้า 
          และการขาดทักษะในการขจัดข้อโต้แย้งของพนักงาน การนำกรอบ <strong>BANT Framework</strong> มาผสานร่วมกับ 
          <strong>สถาปัตยกรรม Context-Injected LLMs</strong> และอัลกอริทึม <strong>Predictive Lead Scoring</strong> 
          ช่วยอุดช่องว่างดังกล่าวได้อย่างเป็นรูปธรรม ทฤษฎีและโมเดลทั้งหมดที่ได้รับการวิเคราะห์ในบทที่ 2 นี้ 
          จะถูกนำไปใช้เป็นรากฐานโดยตรงในการออกแบบโครงสร้างสถาปัตยกรรมระบบ (System Design) 
          และแบบจำลองฐานข้อมูลในบทที่ 3 ต่อไป
        </p>
      </div>
    </div>
  );
};
