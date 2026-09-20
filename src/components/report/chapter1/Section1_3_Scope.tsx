import React from 'react';
import { Layers, Smartphone, Cpu, Database, CheckCircle2 } from 'lucide-react';

export const Section1_3_Scope: React.FC = () => {
  return (
    <div id="section-1-3" className="space-y-5 pt-6 border-t border-slate-200">
      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2 font-serif">
        <span className="text-indigo-600 font-mono">1.3</span>
        <span>ขอบเขตของโครงงาน (Project Scope)</span>
      </h3>

      <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed text-justify">
        <p>
          เพื่อให้การดำเนินงานวิจัยและพัฒนาระบบมีความชัดเจน สอดคล้องกับกรอบระยะเวลา และบรรลุเป้าหมายอย่างมีประสิทธิภาพ 
          คณะผู้วิจัยจึงได้กำหนดขอบเขตของโครงงานออกเป็น 4 ด้านหลัก ดังนี้:
        </p>

        {/* 1.3.1 ขอบเขตด้านกลุ่มเป้าหมาย */}
        <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
          <h4 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
            <span>1.3.1 ขอบเขตด้านกลุ่มเป้าหมายและประชากรศึกษา (Target Audience)</span>
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-4">
            กลุ่มเป้าหมายหลักคือ บุคคลทั่วไป นักศึกษา วัยทำงาน และผู้ที่ให้ความสำคัญกับการแต่งกายในชีวิตประจำวัน 
            ที่มีปัญหาเสื้อผ้าจำนวนมากในตู้เสื้อผ้า หรือใช้เวลาในการเลือกชุดนาน โดยเน้นกลุ่มผู้ใช้งานอุปกรณ์สมาร์ตโฟน 
            แท็บเล็ต และคอมพิวเตอร์ที่เชื่อมต่อเครือข่ายอินเทอร์เน็ต
          </p>
        </div>

        {/* 1.3.2 ขอบเขตด้านการทำงานของระบบ */}
        <div className="p-4 bg-white rounded-xl border border-indigo-200 shadow-2xs space-y-3">
          <h4 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
            <span>1.3.2 ขอบเขตด้านการทำงานของระบบ (Functional Scope)</span>
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 pl-4">
            ระบบประกอบด้วย 5 โมดูลฟังก์ชันการทำงานหลัก ได้แก่:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 pl-4 text-xs">
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-1">
              <strong className="text-indigo-900 font-semibold">1) โมดูลสแกนและประมวลผลรูปภาพ (Image Scanning & Upload):</strong>
              <p className="text-slate-600">รองรับการถ่ายภาพผ่านกล้องหรืออัปโหลดไฟล์ (JPG, PNG, WebP) เพื่อทำการตัดพื้นหลังและตรวจจับชิ้นเสื้อผ้า</p>
            </div>
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-1">
              <strong className="text-indigo-900 font-semibold">2) โมดูลจำแนกหมวดหมู่และลงแท็กอัตโนมัติ (Auto-Tagging & Classification):</strong>
              <p className="text-slate-600">ระบุประเภทเสื้อผ้า (เสื้อ กางเกง กระโปรง เดรส เสื้อคลุม รองเท้า), โทนสีหลัก, และสไตล์การสวมใส่</p>
            </div>
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-1">
              <strong className="text-indigo-900 font-semibold">3) โมดูลตู้เสื้อผ้าเสมือนและการค้นหา (Virtual Closet & Filter):</strong>
              <p className="text-slate-600">แสดงภาพรวมเสื้อผ้าทั้งหมดในตู้ แยกตามหมวดหมู่ ค้นหาตามคำสำคัญ และกรองตามสีหรือโอกาส</p>
            </div>
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-1">
              <strong className="text-indigo-900 font-semibold">4) โมดูลแนะนำการจับคู่ชุดอัจฉริยะ (AI Outfit Stylist Engine):</strong>
              <p className="text-slate-600">แนะนำการผสมผสานชุด (Mix & Match) ตามโอกาส สภาพอากาศ และความเข้ากันได้ พร้อมคำอธิบายเหตุผล</p>
            </div>
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-1 md:col-span-2">
              <strong className="text-indigo-900 font-semibold">5) โมดูลวิเคราะห์และบันทึกประวัติการสวมใส่ (Wardrobe Analytics & Wear History):</strong>
              <p className="text-slate-600">บันทึกสถิติความถี่ในการสวมใส่ แจ้งเตือนเสื้อผ้าที่ไม่ได้ใช้งานนาน และประเมินความคุ้มค่า (Cost Per Wear)</p>
            </div>
          </div>
        </div>

        {/* 1.3.3 ขอบเขตด้านเทคโนโลยี */}
        <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
          <h4 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
            <span>1.3.3 ขอบเขตด้านฮาร์ดแวร์ ซอฟต์แวร์ และเทคโนโลยี (Technical Scope)</span>
          </h4>
          <ul className="list-disc pl-9 space-y-1 text-xs sm:text-sm text-slate-600">
            <li><strong>ส่วนแสดงผล (Frontend Client):</strong> พัฒนาในรูปแบบ Responsive Web Application รองรับทั้งคอมพิวเตอร์และสมาร์ตโฟน ด้วย React 18, TypeScript, และ Tailwind CSS</li>
            <li><strong>ส่วนบริการเว็บและตัวกลาง (Backend API Gateway):</strong> พัฒนาด้วย Node.js และ Express ในการบริหารจัดการคำขอ ตรวจสอบสิทธิ์ และรักษาความปลอดภัย API Key</li>
            <li><strong>โมเดลปัญญาประดิษฐ์ (AI Models):</strong> ใช้ประโยชน์จาก Computer Vision & Deep Learning ร่วมกับ Multimodal Large Language Models (LLM) ในการวิเคราะห์สไตล์และสกัดคุณลักษณะ</li>
            <li><strong>ฐานข้อมูล (Database):</strong> ฐานข้อมูลสำหรับจัดเก็บโครงสร้างข้อมูลเสื้อผ้า ประวัติการสวมใส่ และเวกเตอร์คุณลักษณะ</li>
          </ul>
        </div>

        {/* 1.3.4 ขอบเขตด้านชุดข้อมูล */}
        <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
          <h4 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
            <span>1.3.4 ขอบเขตด้านชุดข้อมูล (Data & Categories Scope)</span>
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 pl-4 leading-relaxed">
            ระบบกำหนดหมวดหมู่เสื้อผ้าหลัก 7 ประเภท ได้แก่ เสื้อตัวบน (Tops), เสื้อชั้นนอก/แจ็กเก็ต (Outerwear), ท่อนล่าง/กางเกง (Bottoms), 
            กระโปรง/เดรส (Dresses & Skirts), รองเท้า (Footwear), กระเป๋า (Bags), และเครื่องประดับ (Accessories) 
            โดยรองรับการระบุคู่สีมาตรฐาน 12 โทนสี และโอกาสการใช้งาน 6 รูปแบบ (ทำงาน, สัมภาษณ์/ทางการ, ลำลอง, ปาร์ตี้, ออกกำลังกาย, ท่องเที่ยว)
          </p>
        </div>
      </div>
    </div>
  );
};
