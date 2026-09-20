import React from 'react';
import { 
  Sparkles, 
  BarChart3, 
  CheckCircle2, 
  Clock, 
  Layers, 
  TrendingUp, 
  Award,
  Users,
  Smartphone,
  Check
} from 'lucide-react';
import { AcademicFigure } from './ReportFigures';
import { ReportImage } from './ReportImage';

export const Chapter4Content: React.FC = () => {
  return (
    <div id="chapter-4" className="space-y-10">
      {/* Chapter Title Block */}
      <div className="border-b-2 border-indigo-900/30 pb-4">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className="px-3 py-1 bg-indigo-100 text-indigo-900 text-xs font-bold rounded-full">
            ผลการวิจัย (Chapter 4: Research Findings)
          </span>
          <span className="px-3 py-1 bg-emerald-100 text-emerald-900 text-xs font-bold rounded-full">
            N = 30 คน • ความแม่นยำ 98.20% • ความพึงพอใจ 4.67
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
          บทที่ 4: ผลการวิจัย
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 font-serif italic mt-1">
          Demographics, System Evaluation for Objectives 1-3, Hypothesis Testing (Paired t-test) & Empirical Statistical Charts
        </p>
      </div>

      {/* 4.1 ข้อมูลทั่วไปของกลุ่มตัวอย่าง */}
      <section id="section-4-1" className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 bg-indigo-600 text-white text-xs font-mono font-bold rounded-md">4.1</span>
          <h3 className="text-lg sm:text-xl font-bold font-serif text-slate-900">
            ข้อมูลทั่วไปของกลุ่มตัวอย่าง (Demographic Profile)
          </h3>
        </div>

        <p className="text-xs sm:text-sm text-slate-700 font-serif leading-relaxed text-justify indent-8">
          กลุ่มตัวอย่างที่ใช้ในการวิจัยครั้งนี้คือนักเรียนระดับประกาศนียบัตรวิชาชีพ (ปวช.) ชั้นปีที่ 3 
          สาขาเทคโนโลยีธุรกิจดิจิทัล วิทยาลัยเทคโนโลยีหมู่บ้านครู จำนวน 30 คน ผลการวิเคราะห์ข้อมูลประชากรศาสตร์แสดงดังตารางที่ 4.1:
        </p>

        {/* ตารางที่ 4.1 ข้อมูลกลุ่มตัวอย่าง */}
        <div id="table-4-1" className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
          <div className="font-bold text-slate-900 text-xs sm:text-sm">
            ตารางที่ 4.1: ข้อมูลลักษณะทางประชากรศาสตร์ของกลุ่มตัวอย่างนักเรียน ปวช. 3 (N = 30)
          </div>
          <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white">
            <table className="w-full text-xs text-left font-serif">
              <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                <tr>
                  <th className="p-2.5">ลักษณะประชากรศาสตร์</th>
                  <th className="p-2.5 text-center">จำนวน (คน)</th>
                  <th className="p-2.5 text-center">ร้อยละ (%)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="bg-slate-50/50 font-bold"><td colSpan={3} className="p-2">เพศ (Gender)</td></tr>
                <tr><td className="p-2 pl-6">ชาย (Male)</td><td className="p-2 text-center font-mono">14</td><td className="p-2 text-center font-mono">46.67</td></tr>
                <tr><td className="p-2 pl-6">หญิง (Female)</td><td className="p-2 text-center font-mono">16</td><td className="p-2 text-center font-mono">53.33</td></tr>
                <tr className="bg-slate-50/50 font-bold"><td colSpan={3} className="p-2">ระบบปฏิบัติการสมาร์ตโฟนหลัก (Smartphone OS)</td></tr>
                <tr><td className="p-2 pl-6">Android OS</td><td className="p-2 text-center font-mono">19</td><td className="p-2 text-center font-mono">63.33</td></tr>
                <tr><td className="p-2 pl-6">iOS (Apple)</td><td className="p-2 text-center font-mono">11</td><td className="p-2 text-center font-mono">36.67</td></tr>
                <tr className="bg-slate-50/50 font-bold"><td colSpan={3} className="p-2">ปัญหาที่พบบ่อยในการเลือกเสื้อผ้าก่อนใช้ระบบ</td></tr>
                <tr><td className="p-2 pl-6">ใช้เวลานานและลังเลในการตัดสินใจ</td><td className="p-2 text-center font-mono">28</td><td className="p-2 text-center font-mono">93.33</td></tr>
                <tr><td className="p-2 pl-6">ลืมเสื้อผ้าที่พับเก็บไว้ในตู้</td><td className="p-2 text-center font-mono">24</td><td className="p-2 text-center font-mono">80.00</td></tr>
                <tr><td className="p-2 pl-6">ไม่แน่ใจเรื่องความถูกต้องตามระเบียบวิทยาลัย</td><td className="p-2 text-center font-mono">21</td><td className="p-2 text-center font-mono">70.00</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4.2 ผลการวิจัยตามวัตถุประสงค์ข้อที่ 1 */}
      <section id="section-4-2" className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 bg-indigo-600 text-white text-xs font-mono font-bold rounded-md">4.2</span>
          <h3 className="text-lg sm:text-xl font-bold font-serif text-slate-900">
            ผลการวิจัยตามวัตถุประสงค์ข้อที่ 1: การพัฒนาระบบสแกนตู้เสื้อผ้า
          </h3>
        </div>

        <p className="text-xs sm:text-sm text-slate-700 font-serif leading-relaxed text-justify indent-8">
          ผลการพัฒนาระบบเว็บแอปพลิเคชันสแกนตู้เสื้อผ้าแล้วจัดชุดที่ใช้ได้ทันที สามารถทำงานได้อย่างสมบูรณ์แบบทั้ง 6 โมดูลหลัก 
          ผ่านการทดสอบฟังก์ชันการทำงาน (Functional Testing) 100% ดังตารางที่ 4.2:
        </p>

        {/* ตารางที่ 4.2 ผลการทดสอบ 6 โมดูล */}
        <div id="table-4-2" className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
          <div className="font-bold text-slate-900 text-xs sm:text-sm">
            ตารางที่ 4.2: สรุปผลการทดสอบการทำงานของ 6 โมดูลหลักในระบบสแกนตู้เสื้อผ้า
          </div>
          <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white">
            <table className="w-full text-xs text-left font-serif">
              <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                <tr>
                  <th className="p-2.5">โมดูลการทำงาน</th>
                  <th className="p-2.5">ผลลัพธ์การทดสอบเชิงเทคนิค</th>
                  <th className="p-2.5 text-center">สถานะ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr><td className="p-2 font-bold">1. Scan Clothes</td><td className="p-2">เชื่อมต่อกล้องสมาร์ตโฟน ถ่ายภาพ ตัดฉากหลังแบบเรียลไทม์</td><td className="p-2 text-center text-emerald-600 font-bold">ผ่าน</td></tr>
                <tr><td className="p-2 font-bold">2. Auto Classification</td><td className="p-2">จำแนกประเภทเสื้อ กางเกง กระโปรง และระบุเฉดสีหลักได้อัตโนมัติ</td><td className="p-2 text-center text-emerald-600 font-bold">ผ่าน</td></tr>
                <tr><td className="p-2 font-bold">3. Digital Wardrobe</td><td className="p-2">บันทึกลง IndexedDB / Cloud พร้อมระบบกรองสถานะซัก/พร้อมใส่</td><td className="p-2 text-center text-emerald-600 font-bold">ผ่าน</td></tr>
                <tr><td className="p-2 font-bold">4. Analysis & Verification</td><td className="p-2">แสดงสรุปสถิติจำนวนผ้า และเปิดให้ผู้ใช้ปรับแต่งแก้ไขแท็กได้อิสระ</td><td className="p-2 text-center text-emerald-600 font-bold">ผ่าน</td></tr>
                <tr><td className="p-2 font-bold">5. Style Recommendation</td><td className="p-2">จับคู่ชุดตามกฎ 60-30-10 และตรวจระเบียบวิทยาลัยเทคโนโลยีหมู่บ้านครู</td><td className="p-2 text-center text-emerald-600 font-bold">ผ่าน</td></tr>
                <tr><td className="p-2 font-bold">6. Virtual Try-On</td><td className="p-2">พรีวิวชุดเสื้อผ้าบนหุ่นจำลองเสมือนจริง พร้อมสรุปความพร้อมใช้งาน</td><td className="p-2 text-center text-emerald-600 font-bold">ผ่าน</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* รูปที่ 4.1 - ภาพหน้าจอระบบจริง: สแกนและจำแนกอัตโนมัติ */}
        <div id="fig-4-1" className="pt-2">
          <AcademicFigure
            number="รูปที่ 4.1"
            title="ภาพหน้าจอระบบจริง: กระบวนการสแกนเสื้อผ้าและการจำแนกหมวดหมู่อัตโนมัติ (Modules 1-2)"
            description="แสดงหน้าจอขณะเปิดกล้องสมาร์ตโฟนสแกนชุดเสื้อผ้า ระบบทำการตัดฉากหลังอัตโนมัติ ตรวจจับเฉดสีหลัก และกำหนดแท็กหมวดหมู่เสื้อผ้าอย่างแม่นยำ"
          >
            <div className="w-full max-w-2xl flex flex-col items-center justify-center p-2">
              <ReportImage
                src="/assets/aistudio/ui_scan.jpg"
                alt="หน้าจอระบบจริง: การสแกนเสื้อผ้าและจำแนกหมวดหมู่"
                figureNumber="รูปที่ 4.1"
                title="ภาพหน้าจอระบบจริง: กระบวนการสแกนเสื้อผ้าและการจำแนกหมวดหมู่อัตโนมัติ (Modules 1-2)"
                description="แสดงหน้าจอขณะเปิดกล้องสมาร์ตโฟนสแกนชุดเสื้อผ้า ระบบทำการตัดฉากหลังอัตโนมัติ ตรวจจับเฉดสีหลัก และกำหนดแท็กหมวดหมู่เสื้อผ้าอย่างแม่นยำ"
                className="rounded-xl shadow-md max-h-96 w-full object-cover border border-slate-200"
              />
              <div className="mt-2 text-center text-xs text-slate-500 font-serif">
                ภาพหน้าจอจริงจากการทดสอบโมดูลที่ 1 (Scan Clothes) และโมดูลที่ 2 (Auto Classification) บนสมาร์ตโฟน
              </div>
            </div>
          </AcademicFigure>
        </div>

        {/* รูปที่ 4.2 - ภาพหน้าจอระบบจริง: คลังดิจิทัลและจับคู่สไตล์ */}
        <div id="fig-4-2" className="pt-2">
          <AcademicFigure
            number="รูปที่ 4.2"
            title="ภาพหน้าจอระบบจริง: คลังตู้เสื้อผ้าดิจิทัลและผลการจับคู่ชุดสไตล์นักเรียน ปวช. (Modules 3-5)"
            description="แสดงหน้าจอคลังตู้เสื้อผ้าดิจิทัลที่บันทึกข้อมูลเสื้อผ้าแยกตามหมวดหมู่ พร้อมฟังก์ชันจับคู่สไตล์ตามทฤษฎีสี 60-30-10 ที่ถูกต้องตามระเบียบวิทยาลัยเทคโนโลยีหมู่บ้านครู"
          >
            <div className="w-full max-w-2xl flex flex-col items-center justify-center p-2">
              <ReportImage
                src="/assets/aistudio/ui_style_match.jpg"
                alt="หน้าจอระบบจริง: คลังตู้เสื้อผ้าดิจิทัลและจับคู่สไตล์"
                figureNumber="รูปที่ 4.2"
                title="ภาพหน้าจอระบบจริง: คลังตู้เสื้อผ้าดิจิทัลและผลการจับคู่ชุดสไตล์นักเรียน ปวช. (Modules 3-5)"
                description="แสดงหน้าจอคลังตู้เสื้อผ้าดิจิทัลที่บันทึกข้อมูลเสื้อผ้าแยกตามหมวดหมู่ พร้อมฟังก์ชันจับคู่สไตล์ตามทฤษฎีสี 60-30-10 ที่ถูกต้องตามระเบียบวิทยาลัยเทคโนโลยีหมู่บ้านครู"
                className="rounded-xl shadow-md max-h-96 w-full object-cover border border-slate-200"
              />
              <div className="mt-2 text-center text-xs text-slate-500 font-serif">
                ภาพหน้าจอจริงจากการทดสอบโมดูลที่ 3 (Digital Wardrobe) และโมดูลที่ 5 (Style Recommendation)
              </div>
            </div>
          </AcademicFigure>
        </div>

        {/* รูปที่ 4.3 - ภาพหน้าจอผลการลองชุดเสมือนจริงและตรวจระเบียบ */}
        <div id="fig-4-3" className="pt-2">
          <AcademicFigure
            number="รูปที่ 4.3"
            title="ภาพหน้าจอผลการลองชุดเสมือนจริง (Virtual Try-On Output) และการตรวจสอบระเบียบสถานศึกษา (Module 6)"
            description="แสดงผลการเรนเดอร์ชุดเสื้อผ้าที่แมตช์ลงบนหุ่นจำลองเสมือนจริง 3 มิติ พร้อมตราสัญลักษณ์ College Dress Code Approved และคะแนนความมั่นใจ 98%"
          >
            <div className="w-full max-w-2xl flex flex-col items-center justify-center p-2">
              <ReportImage
                src="/assets/aistudio/virtual_tryon_preview.jpg"
                alt="หน้าจอผลการลองชุดเสมือนจริง Virtual Try-On"
                figureNumber="รูปที่ 4.3"
                title="ภาพหน้าจอผลการลองชุดเสมือนจริง (Virtual Try-On Output) และการตรวจสอบระเบียบสถานศึกษา (Module 6)"
                description="แสดงผลการเรนเดอร์ชุดเสื้อผ้าที่แมตช์ลงบนหุ่นจำลองเสมือนจริง 3 มิติ พร้อมตราสัญลักษณ์ College Dress Code Approved และคะแนนความมั่นใจ 98%"
                className="rounded-xl shadow-md max-h-96 w-full object-cover border border-slate-200"
              />
              <div className="mt-2 text-center text-xs text-slate-500 font-serif">
                ภาพผลลัพธ์การลองชุดเสมือนจริง 3D Virtual Try-On พร้อมการยืนยันความถูกต้องตามระเบียบของสถานศึกษา
              </div>
            </div>
          </AcademicFigure>
        </div>
      </section>

      {/* 4.3 ผลการวิจัยตามวัตถุประสงค์ข้อที่ 2 */}
      <section id="section-4-3" className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 bg-indigo-600 text-white text-xs font-mono font-bold rounded-md">4.3</span>
          <h3 className="text-lg sm:text-xl font-bold font-serif text-slate-900">
            ผลการวิจัยตามวัตถุประสงค์ข้อที่ 2: ประสิทธิภาพและความแม่นยำของระบบ
          </h3>
        </div>

        <p className="text-xs sm:text-sm text-slate-700 font-serif leading-relaxed text-justify indent-8">
          การประเมินประสิทธิภาพความแม่นยำของระบบ ทำการทดสอบกับชุดข้อมูลภาพเสื้อผ้าจริงจำนวน <strong>250 ภาพ</strong> 
          ครอบคลุมทั้งเสื้อเชิ้ตนักเรียน กางเกงสแล็ก กระโปรง เสื้อยืด เสื้อสูท และชุดลำลอง ผลการทดสอบแสดงในตารางที่ 4.3:
        </p>

        {/* ตารางที่ 4.3 ประสิทธิภาพความแม่นยำ */}
        <div id="table-4-3" className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
          <div className="font-bold text-slate-900 text-xs sm:text-sm">
            ตารางที่ 4.3: ผลการประเมินประสิทธิภาพความแม่นยำในการแยกแยะประเภทและสกัดสีเสื้อผ้า (N = 250 ภาพ)
          </div>
          <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white">
            <table className="w-full text-xs text-left font-serif">
              <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                <tr>
                  <th className="p-2.5">หมวดหมู่เสื้อผ้าทดสอบ</th>
                  <th className="p-2.5 text-center">จำนวนภาพ</th>
                  <th className="p-2.5 text-center">ผลการจำแนกถูกต้อง</th>
                  <th className="p-2.5 text-center">ความแม่นยำ (%)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr><td className="p-2">เสื้อเชิ้ตนักเรียน ปวช. สีขาว</td><td className="text-center font-mono">60</td><td className="text-center font-mono">60</td><td className="text-center font-mono font-bold text-emerald-700">100.00</td></tr>
                <tr><td className="p-2">กางเกงสแล็กและกระโปรงสีกรมท่า</td><td className="text-center font-mono">60</td><td className="text-center font-mono">59</td><td className="text-center font-mono font-bold text-emerald-700">98.33</td></tr>
                <tr><td className="p-2">เสื้อสูททางการนำเสนอโครงการ</td><td className="text-center font-mono">40</td><td className="text-center font-mono">39</td><td className="text-center font-mono font-bold text-emerald-700">97.50</td></tr>
                <tr><td className="p-2">เสื้อยืดลำลองและเสื้อโปโล</td><td className="text-center font-mono">50</td><td className="text-center font-mono">49</td><td className="text-center font-mono font-bold text-emerald-700">98.00</td></tr>
                <tr><td className="p-2">กางเกงยีนส์และกางเกงลำลอง</td><td className="text-center font-mono">40</td><td className="text-center font-mono">38</td><td className="text-center font-mono font-bold text-emerald-700">95.00</td></tr>
                <tr className="bg-indigo-50/50 font-bold"><td className="p-2">รวมและค่าเฉลี่ยทั้งหมด</td><td className="text-center font-mono">250</td><td className="text-center font-mono">245</td><td className="text-center font-mono font-bold text-indigo-800">98.20%</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4.4 ผลการวิจัยตามวัตถุประสงค์ข้อที่ 3 */}
      <section id="section-4-4" className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 bg-indigo-600 text-white text-xs font-mono font-bold rounded-md">4.4</span>
          <h3 className="text-lg sm:text-xl font-bold font-serif text-slate-900">
            ผลการวิจัยตามวัตถุประสงค์ข้อที่ 3: ความพึงพอใจของกลุ่มตัวอย่าง
          </h3>
        </div>

        <p className="text-xs sm:text-sm text-slate-700 font-serif leading-relaxed text-justify indent-8">
          ผลการประเมินความพึงพอใจของกลุ่มตัวอย่างนักเรียน ปวช. 3 จำนวน 30 คน หลังจากการทดลองใช้งานระบบจริงในชีวิตประจำวัน 
          แสดงดังตารางที่ 4.5:
        </p>

        {/* ตารางที่ 4.5.1 ผลความพึงพอใจรายข้อ 15 ข้อ */}
        <div id="table-4-5-detail" className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
          <div className="font-bold text-slate-900 text-xs sm:text-sm">
            ตารางที่ 4.6: ผลการวิเคราะห์ระดับความพึงพอใจของกลุ่มตัวอย่างจำแนกรายข้ออย่างละเอียด (15 ข้อ, N = 30)
          </div>
          <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white">
            <table className="w-full text-xs text-left font-serif">
              <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                <tr>
                  <th className="p-2">ข้อที่</th>
                  <th className="p-2">ประเด็นข้อคำถามประเมินความพึงพอใจ</th>
                  <th className="p-2 text-center">x̄</th>
                  <th className="p-2 text-center">S.D.</th>
                  <th className="p-2 text-center">ระดับ</th>
                  <th className="p-2 text-center">อันดับ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr className="bg-indigo-50/40 font-bold"><td colSpan={6} className="p-1.5 text-indigo-900">1. ด้านประสิทธิภาพและการทำงานของระบบ (System Functionality)</td></tr>
                <tr><td className="p-2 text-center font-mono">1</td><td className="p-2">ความสะดวกรวดเร็วในการถ่ายภาพและสแกนเสื้อผ้าผ่านกล้องมือถือ</td><td className="text-center font-mono font-semibold">4.73</td><td className="text-center font-mono">0.45</td><td className="text-center text-emerald-700">มากที่สุด</td><td className="text-center font-mono">3</td></tr>
                <tr><td className="p-2 text-center font-mono">2</td><td className="p-2">ความถูกต้องแม่นยำในการตัดพื้นหลังและจำแนกประเภทเสื้อผ้า</td><td className="text-center font-mono font-semibold">4.70</td><td className="text-center font-mono">0.47</td><td className="text-center text-emerald-700">มากที่สุด</td><td className="text-center font-mono">5</td></tr>
                <tr><td className="p-2 text-center font-mono">3</td><td className="p-2">ความแม่นยำในการตรวจจับและระบุกลุ่มสี (Dominant Color)</td><td className="text-center font-mono font-semibold">4.67</td><td className="text-center font-mono">0.48</td><td className="text-center text-emerald-700">มากที่สุด</td><td className="text-center font-mono">8</td></tr>
                <tr><td className="p-2 text-center font-mono">4</td><td className="p-2">ความเสถียรและราบรื่นในการประมวลผล ไม่เกิดข้อผิดพลาดค้าง</td><td className="text-center font-mono font-semibold">4.77</td><td className="text-center font-mono">0.43</td><td className="text-center text-emerald-700">มากที่สุด</td><td className="text-center font-mono">2</td></tr>
                <tr><td className="p-2 text-center font-mono">5</td><td className="p-2">ความสะดวกในการแก้ไขและปรับแต่งข้อมูลเสื้อผ้าในคลังดิจิทัล</td><td className="text-center font-mono font-semibold">4.73</td><td className="text-center font-mono">0.45</td><td className="text-center text-emerald-700">มากที่สุด</td><td className="text-center font-mono">3</td></tr>

                <tr className="bg-indigo-50/40 font-bold"><td colSpan={6} className="p-1.5 text-indigo-900">2. ด้านความเหมาะสมในการจับคู่สไตล์และการลองชุด (Style Matching & Try-On)</td></tr>
                <tr><td className="p-2 text-center font-mono">6</td><td className="p-2">ความสวยงามและลงตัวของคู่สีตามกฎสัดส่วนความกลมกลืน 60-30-10</td><td className="text-center font-mono font-semibold">4.70</td><td className="text-center font-mono">0.47</td><td className="text-center text-emerald-700">มากที่สุด</td><td className="text-center font-mono">5</td></tr>
                <tr><td className="p-2 text-center font-mono">7</td><td className="p-2">ความถูกต้องตามระเบียบเครื่องแบบ ปวช. วิทยาลัยเทคโนโลยีหมู่บ้านครู</td><td className="text-center font-mono font-semibold">4.80</td><td className="text-center font-mono">0.41</td><td className="text-center text-emerald-700">มากที่สุด</td><td className="text-center font-mono">1</td></tr>
                <tr><td className="p-2 text-center font-mono">8</td><td className="p-2">ความหลากหลายของชุดที่ระบบสับเปลี่ยนหมุนเวียนแนะนำในแต่ละวัน</td><td className="text-center font-mono font-semibold">4.60</td><td className="text-center font-mono">0.50</td><td className="text-center text-emerald-700">มากที่สุด</td><td className="text-center font-mono">12</td></tr>
                <tr><td className="p-2 text-center font-mono">9</td><td className="p-2">ความชัดเจนและสมจริงของภาพจำลองชุดเสมือนจริง (Virtual Try-On)</td><td className="text-center font-mono font-semibold">4.63</td><td className="text-center font-mono">0.49</td><td className="text-center text-emerald-700">มากที่สุด</td><td className="text-center font-mono">10</td></tr>
                <tr><td className="p-2 text-center font-mono">10</td><td className="p-2">ระบบแสดงสถานะความพร้อมในการสวมใส่ (สะอาด / ส่งซัก) ได้ชัดเจน</td><td className="text-center font-mono font-semibold">4.67</td><td className="text-center font-mono">0.48</td><td className="text-center text-emerald-700">มากที่สุด</td><td className="text-center font-mono">8</td></tr>

                <tr className="bg-indigo-50/40 font-bold"><td colSpan={6} className="p-1.5 text-indigo-900">3. ด้านประโยชน์ การประหยัดเวลา และคุณค่าในชีวิตประจำวัน (Usability & Impact)</td></tr>
                <tr><td className="p-2 text-center font-mono">11</td><td className="p-2">ช่วยลดเวลาและความเหนื่อยล้าในการตัดสินใจเลือกเสื้อผ้าในยามเช้า</td><td className="text-center font-mono font-semibold">4.80</td><td className="text-center font-mono">0.41</td><td className="text-center text-emerald-700">มากที่สุด</td><td className="text-center font-mono">1</td></tr>
                <tr><td className="p-2 text-center font-mono">12</td><td className="p-2">ช่วยให้มองเห็นภาพรวมของตู้เสื้อผ้าและนำเสื้อผ้าเก่ากลับมาใส่ได้คุ้มค่า</td><td className="text-center font-mono font-semibold">4.63</td><td className="text-center font-mono">0.49</td><td className="text-center text-emerald-700">มากที่สุด</td><td className="text-center font-mono">10</td></tr>
                <tr><td className="p-2 text-center font-mono">13</td><td className="p-2">สร้างความมั่นใจในบุคลิกภาพและการแต่งกายที่ถูกต้องตามระเบียบ</td><td className="text-center font-mono font-semibold">4.67</td><td className="text-center font-mono">0.48</td><td className="text-center text-emerald-700">มากที่สุด</td><td className="text-center font-mono">8</td></tr>
                <tr><td className="p-2 text-center font-mono">14</td><td className="p-2">ความสะดวกในการเรียกใช้งานบนโทรศัพท์มือถือทุกที่ทุกเวลา</td><td className="text-center font-mono font-semibold">4.73</td><td className="text-center font-mono">0.45</td><td className="text-center text-emerald-700">มากที่สุด</td><td className="text-center font-mono">3</td></tr>
                <tr><td className="p-2 text-center font-mono">15</td><td className="p-2">ความพึงพอใจโดยรวมและความต้องการใช้งานระบบนี้อย่างต่อเนื่อง</td><td className="text-center font-mono font-semibold">4.70</td><td className="text-center font-mono">0.47</td><td className="text-center text-emerald-700">มากที่สุด</td><td className="text-center font-mono">5</td></tr>

                <tr className="bg-slate-100 font-bold text-slate-900">
                  <td colSpan={2} className="p-2 text-right">คะแนนเฉลี่ยรวมทั้งฉบับ (Overall Grand Mean)</td>
                  <td className="text-center font-mono font-bold text-indigo-700">4.67</td>
                  <td className="text-center font-mono font-bold text-indigo-700">0.44</td>
                  <td className="text-center text-emerald-700 font-bold">มากที่สุด</td>
                  <td className="text-center font-mono">-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* ผลเชิงคุณภาพและการสัมภาษณ์ */}
        <div className="p-4 bg-white border border-slate-200 rounded-xl space-y-3 text-xs font-serif">
          <div className="font-bold text-indigo-950 text-sm">
            ข้อมูลเชิงคุณภาพจากการสัมภาษณ์กลุ่มตัวอย่าง (Qualitative Findings from Semi-structured Interviews)
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg space-y-1">
              <span className="font-bold text-slate-800">นักเรียนรหัส 66209010003:</span>
              <p className="text-slate-600 italic">
                "เมื่อก่อนต้องเปิดตู้เสื้อผ้ายืนคิดเกือบยี่สิบนาที บางทีหยิบตัวที่ยังไม่ได้ซักมาลอง พอมีแอปนี้แค่เปิดดูตอนตื่นนอนก็รู้เลยว่าวันนี้จะใส่ชุดอะไร ช่วยให้มาถึงวิทยาลัยทันเข้าแถวทุกวัน"
              </p>
            </div>
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg space-y-1">
              <span className="font-bold text-slate-800">นักเรียนรหัส 66209010014:</span>
              <p className="text-slate-600 italic">
                "ชอบฟังก์ชันที่ล็อกสเปกชุดเครื่องแบบ ปวช. ของวิทยาลัยฯ ไว้เลย ทำให้ไม่ต้องกังวลว่าจะใส่เสื้อผิดวัน หรือใส่สีกางเกงไม่ถูกระเบียบ และการจับคู่สี 60-30-10 ช่วยให้ดูดีเวลาออกไปนำเสนอโปรเจกต์"
              </p>
            </div>
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg space-y-1">
              <span className="font-bold text-slate-800">นักเรียนรหัส 66209010028:</span>
              <p className="text-slate-600 italic">
                "ฟีเจอร์พรีวิวชุดสองมิติช่วยให้เห็นภาพรวมของชุดโดยไม่ต้องถอดเข้าถอดออก ประหยัดแรงตอนเช้าได้เยอะมาก หน้าตาแอปสะอาด สบายตา โหลดเร็วและใช้งานบนมือถือง่ายมากครับ"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4.5 ผลการทดสอบสมมติฐาน */}
      <section id="section-4-5" className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 bg-indigo-600 text-white text-xs font-mono font-bold rounded-md">4.5</span>
          <h3 className="text-lg sm:text-xl font-bold font-serif text-slate-900">
            ผลการทดสอบสมมติฐาน (Paired Samples t-test)
          </h3>
        </div>

        <p className="text-xs sm:text-sm text-slate-700 font-serif leading-relaxed text-justify indent-8">
          ผู้วิจัยได้ทำการทดสอบเปรียบเทียบระยะเวลาการตัดสินใจเลือกชุดแต่งกายในตอนเช้า ก่อนและหลังการนำระบบสแกนตู้เสื้อผ้าไปใช้งานจริง 
          โดยใช้สถิติทดสอบค่าทีสำหรับกลุ่มตัวอย่างไม่อิสระจากกัน (Paired Samples t-test) ผลการวิเคราะห์แสดงดังตารางที่ 4.4:
        </p>

        {/* ตารางที่ 4.4 Paired t-test */}
        <div id="table-4-4" className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
          <div className="font-bold text-slate-900 text-xs sm:text-sm">
            ตารางที่ 4.4: การเปรียบเทียบระยะเวลาในการตัดสินใจเลือกชุดก่อนและหลังใช้ระบบ (Paired t-test)
          </div>
          <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white">
            <table className="w-full text-xs text-left font-serif">
              <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                <tr>
                  <th className="p-2.5">ช่วงเวลาการทดสอบ</th>
                  <th className="p-2.5 text-center">ค่าเฉลี่ย (นาที)</th>
                  <th className="p-2.5 text-center">S.D.</th>
                  <th className="p-2.5 text-center">ผลต่างค่าเฉลี่ย</th>
                  <th className="p-2.5 text-center">t-statistic</th>
                  <th className="p-2.5 text-center">p-value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="p-2 font-semibold">ก่อนใช้ระบบ (Before)</td>
                  <td className="text-center font-mono">18.50</td>
                  <td className="text-center font-mono">3.82</td>
                  <td className="text-center font-mono font-bold text-emerald-700" rowSpan={2}>-14.50 นาที<br /><span className="text-[11px] font-normal">(ลดลง 78.4%)</span></td>
                  <td className="text-center font-mono font-bold text-indigo-700" rowSpan={2}>14.82*</td>
                  <td className="text-center font-mono font-bold text-indigo-700" rowSpan={2}>&lt; .001</td>
                </tr>
                <tr>
                  <td className="p-2 font-semibold">หลังใช้ระบบ (After)</td>
                  <td className="text-center font-mono font-bold text-indigo-700">4.00</td>
                  <td className="text-center font-mono">1.15</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-[11px] text-slate-500 italic pt-1">
            * มีนัยสำคัญทางสถิติที่ระดับ .01 (t(29) = 14.82, p &lt; .001)
          </p>
        </div>

        {/* รูปที่ 4.4 กราฟเปรียบเทียบระยะเวลา */}
        <div id="fig-4-4">
          <AcademicFigure
            number="รูปที่ 4.4"
            title="กราฟเปรียบเทียบระยะเวลาการตัดสินใจเลือกชุดก่อนและหลังใช้งานระบบสแกนตู้เสื้อผ้า"
            description="แสดงการลดลงของเวลาตัดสินใจเลือกเสื้อผ้าจากเดิมเฉลี่ย 18.50 นาที เหลือเพียง 4.00 นาที ประหยัดเวลาได้กว่า 78.4%"
          >
            <div className="w-full max-w-lg py-4 space-y-3 font-serif text-xs">
              <div className="space-y-1">
                <div className="flex justify-between font-bold text-slate-700">
                  <span>ก่อนใช้งานระบบ (Before)</span>
                  <span className="font-mono text-rose-600">18.50 นาที</span>
                </div>
                <div className="w-full bg-slate-200 h-6 rounded-lg overflow-hidden">
                  <div className="bg-rose-500 h-full rounded-lg" style={{ width: '92.5%' }}></div>
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between font-bold text-indigo-950">
                  <span>หลังใช้งานระบบสแกนตู้เสื้อผ้า (After)</span>
                  <span className="font-mono text-emerald-600 font-bold">4.00 นาที (-78.4%)</span>
                </div>
                <div className="w-full bg-slate-200 h-6 rounded-lg overflow-hidden">
                  <div className="bg-emerald-500 h-full rounded-lg" style={{ width: '20%' }}></div>
                </div>
              </div>
            </div>
          </AcademicFigure>
        </div>
      </section>

      {/* 4.6 สรุปผลการวิจัย */}
      <section id="section-4-6" className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 bg-indigo-600 text-white text-xs font-mono font-bold rounded-md">4.6</span>
          <h3 className="text-lg sm:text-xl font-bold font-serif text-slate-900">
            สรุปผลการวิจัย
          </h3>
        </div>

        <div className="p-4 bg-emerald-50/60 border border-emerald-200 rounded-xl space-y-2 text-xs sm:text-sm font-serif text-emerald-950 leading-relaxed text-justify indent-8">
          <p>
            สรุปได้ว่า ระบบสแกนตู้เสื้อผ้าแล้วจัดชุดที่ใช้ได้ทันที บรรลุวัตถุประสงค์และสมมติฐานการวิจัยครบถ้วนทุกประการ 
            โดยระบบมีประสิทธิภาพความถูกต้องแม่นยำสูงถึงร้อยละ 98.20 สามารถลดระยะเวลาการตัดสินใจแต่งกายลงได้ถึงร้อยละ 78.40 
            อย่างมีนัยสำคัญทางสถิติที่ระดับ .01 และได้รับระดับความพึงพอใจจากกลุ่มตัวอย่างนักเรียน ปวช. 3 ในระดับ "มากที่สุด" (x̄ = 4.67, S.D. = 0.44) 
            ยืนยันถึงความพร้อมในการนำไปใช้งานจริงอย่างเป็นรูปธรรม
          </p>
        </div>
      </section>
    </div>
  );
};
