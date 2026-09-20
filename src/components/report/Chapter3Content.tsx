import React from 'react';
import { 
  Sparkles, 
  Users, 
  Wrench, 
  CheckCircle2, 
  Database, 
  Calculator, 
  GitFork, 
  Calendar, 
  Clock,
  Laptop,
  Layers,
  ArrowRight
} from 'lucide-react';
import { AcademicFigure } from './ReportFigures';

export const Chapter3Content: React.FC = () => {
  return (
    <div id="chapter-3" className="space-y-10">
      {/* Chapter Title Block */}
      <div className="border-b-2 border-indigo-900/30 pb-4">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className="px-3 py-1 bg-indigo-100 text-indigo-900 text-xs font-bold rounded-full">
            วิธีดำเนินการวิจัย (Chapter 3: Methodology)
          </span>
          <span className="px-3 py-1 bg-emerald-100 text-emerald-900 text-xs font-bold rounded-full">
            วิทยาลัยเทคโนโลยีหมู่บ้านครู • ปวช. 3 เทคโนโลยีธุรกิจดิจิทัล
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
          บทที่ 3: วิธีดำเนินการวิจัย
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 font-serif italic mt-1">
          Research Design, Population & Sampling, Instruments, IOC & Reliability, 6-Step Data Collection, Statistics, Flowchart & Gantt Chart
        </p>
      </div>

      {/* 3.1 รูปแบบการวิจัย */}
      <section id="section-3-1" className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 bg-indigo-600 text-white text-xs font-mono font-bold rounded-md">3.1</span>
          <h3 className="text-lg sm:text-xl font-bold font-serif text-slate-900">
            รูปแบบการวิจัย (Research Design)
          </h3>
        </div>

        <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-700 leading-relaxed font-serif text-justify indent-8 space-y-2">
          <p>
            การวิจัยครั้งนี้เป็นการวิจัยและพัฒนา (Research and Development: R&D) มุ่งเน้นการสร้างสรรค์นวัตกรรมซอฟต์แวร์ประยุกต์ 
            ควบคู่กับการประเมินผลเชิงประจักษ์ในสภาพแวดล้อมการเรียนรู้จริง โดยแบ่งกระบวนการออกเป็น 3 ระยะหลัก: 
            <strong>ระยะที่ 1:</strong> การศึกษาบริบทและสำรวจความต้องการของผู้เรียน, 
            <strong>ระยะที่ 2:</strong> การออกแบบ พัฒนา และทดสอบระบบเว็บแอปพลิเคชัน 6 โมดูล, และ 
            <strong>ระยะที่ 3:</strong> การทดลองใช้ระบบจริงกับกลุ่มตัวอย่างและการประเมินประสิทธิผล
          </p>
        </div>
      </section>

      {/* 3.2 ประชากรและกลุ่มตัวอย่าง */}
      <section id="section-3-2" className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 bg-indigo-600 text-white text-xs font-mono font-bold rounded-md">3.2</span>
          <h3 className="text-lg sm:text-xl font-bold font-serif text-slate-900">
            ประชากรและกลุ่มตัวอย่าง (Population & Sample Group)
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm font-serif">
          {/* ประชากร */}
          <div className="p-4 bg-white border border-slate-200 rounded-xl space-y-2 shadow-2xs">
            <div className="flex items-center gap-2 font-bold text-slate-900">
              <Users className="w-4 h-4 text-indigo-700" />
              <span>3.2.1 ประชากรที่ใช้ในการวิจัย</span>
            </div>
            <p className="text-slate-600 leading-relaxed text-justify">
              ประชากรที่ใช้ในการวิจัยครั้งนี้ ได้แก่ <strong>นักเรียนระดับประกาศนียบัตรวิชาชีพ (ปวช.) ชั้นปีที่ 3 
              สาขาวิชาเทคโนโลยีธุรกิจดิจิทัล วิทยาลัยเทคโนโลยีหมู่บ้านครู</strong> ภาคเรียนที่ 2 ปีการศึกษา 2568 
              จำนวนทั้งสิ้น <strong>52 คน</strong>
            </p>
          </div>

          {/* กลุ่มตัวอย่าง */}
          <div className="p-4 bg-indigo-50/50 border border-indigo-200 rounded-xl space-y-2 shadow-2xs">
            <div className="flex items-center gap-2 font-bold text-indigo-950">
              <CheckCircle2 className="w-4 h-4 text-indigo-600" />
              <span>3.2.2 กลุ่มตัวอย่างที่ใช้ในการวิจัย</span>
            </div>
            <p className="text-indigo-900/90 leading-relaxed text-justify">
              กลุ่มตัวอย่างที่ใช้ในการวิจัยครั้งนี้ ได้แก่ นักเรียนระดับ ปวช. ชั้นปีที่ 3 สาขาเทคโนโลยีธุรกิจดิจิทัล 
              วิทยาลัยเทคโนโลยีหมู่บ้านครู จำนวน <strong>30 คน</strong> ได้มาโดย <strong>การเลือกแบบเฉพาะเจาะจง (Purposive Sampling)</strong> 
              ตามเกณฑ์การลงทะเบียนเรียนครบถ้วน และมีการถือครองอุปกรณ์สมาร์ตโฟนที่มีกล้องถ่ายภาพพร้อมเชื่อมต่ออินเทอร์เน็ต
            </p>
          </div>
        </div>
      </section>

      {/* 3.3 เครื่องมือที่ใช้ในการวิจัย */}
      <section id="section-3-3" className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 bg-indigo-600 text-white text-xs font-mono font-bold rounded-md">3.3</span>
          <h3 className="text-lg sm:text-xl font-bold font-serif text-slate-900">
            เครื่องมือที่ใช้ในการวิจัย
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-serif">
          <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
            <span className="font-bold text-slate-900">1. ระบบสแกนตู้เสื้อผ้าแล้วจัดชุดที่ใช้ได้ทันที:</span>
            <p className="text-slate-600">เว็บแอปพลิเคชันที่พัฒนาขึ้นบนมาตรฐานเทคโนโลยีเว็บ มี 6 โมดูลหลักรองรับการทำงานบนสมาร์ตโฟนทุกระบบปฏิบัติการ</p>
          </div>

          <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
            <span className="font-bold text-slate-900">2. แบบสอบถามความต้องการและความพึงพอใจ:</span>
            <p className="text-slate-600">แบบวัดมาตราส่วนประมาณค่า 5 ระดับ (Likert Scale) จำนวน 15 ข้อ ครอบคลุมด้านการทำงาน สุนทรียภาพ และประโยชน์</p>
          </div>

          <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
            <span className="font-bold text-slate-900">3. แบบประเมินประสิทธิภาพของระบบ:</span>
            <p className="text-slate-600">แบบบันทึกความถูกต้องในการจำแนกประเภทเสื้อผ้าและรหัสสี เปรียบเทียบกับชุดข้อมูลจริงจำนวน 250 ภาพ</p>
          </div>

          <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
            <span className="font-bold text-slate-900">4. แบบสัมภาษณ์เชิงลึก:</span>
            <p className="text-slate-600">แบบสัมภาษณ์กึ่งโครงสร้าง (Semi-structured Interview) เพื่อเก็บข้อมูลเชิงคุณภาพและข้อเสนอแนะในการปรับปรุง</p>
          </div>
        </div>

        {/* รูปที่ 3.2 สถาปัตยกรรมระบบ */}
        <div id="fig-3-2">
          <AcademicFigure
            number="รูปที่ 3.2"
            title="แผนภูมิสถาปัตยกรรมระบบสแกนตู้เสื้อผ้าและการเชื่อมต่อ 6 โมดูลการทำงาน"
            description="แสดงโครงสร้างตั้งแต่การรับภาพจากกล้อง การประมวลผล การจัดเก็บในคลังดิจิทัล ไปจนถึงการลองชุดเสมือนจริง"
          >
            <div className="w-full max-w-4xl grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-center py-2 text-xs font-serif">
              <div className="p-3 bg-white border border-slate-200 rounded-xl space-y-1 shadow-2xs">
                <span className="text-indigo-600 font-bold font-mono">Module 1</span>
                <div className="font-bold text-slate-800">สแกนเสื้อผ้า</div>
                <div className="text-[11px] text-slate-500">Scan Clothes</div>
              </div>
              <div className="p-3 bg-white border border-slate-200 rounded-xl space-y-1 shadow-2xs">
                <span className="text-indigo-600 font-bold font-mono">Module 2</span>
                <div className="font-bold text-slate-800">จัดหมวดหมู่</div>
                <div className="text-[11px] text-slate-500">Auto Classify</div>
              </div>
              <div className="p-3 bg-white border border-slate-200 rounded-xl space-y-1 shadow-2xs">
                <span className="text-indigo-600 font-bold font-mono">Module 3</span>
                <div className="font-bold text-slate-800">คลังดิจิทัล</div>
                <div className="text-[11px] text-slate-500">Wardrobe DB</div>
              </div>
              <div className="p-3 bg-white border border-slate-200 rounded-xl space-y-1 shadow-2xs">
                <span className="text-indigo-600 font-bold font-mono">Module 4</span>
                <div className="font-bold text-slate-800">วิเคราะห์/ตรวจทาน</div>
                <div className="text-[11px] text-slate-500">Verify & Edit</div>
              </div>
              <div className="p-3 bg-white border border-slate-200 rounded-xl space-y-1 shadow-2xs">
                <span className="text-indigo-600 font-bold font-mono">Module 5</span>
                <div className="font-bold text-slate-800">จับคู่สไตล์</div>
                <div className="text-[11px] text-slate-500">Style Match</div>
              </div>
              <div className="p-3 bg-white border border-slate-200 rounded-xl space-y-1 shadow-2xs">
                <span className="text-indigo-600 font-bold font-mono">Module 6</span>
                <div className="font-bold text-slate-800">ลองชุดเสมือนจริง</div>
                <div className="text-[11px] text-slate-500">Virtual Try-On</div>
              </div>
            </div>
          </AcademicFigure>
        </div>
      </section>

      {/* 3.4 การสร้างและตรวจสอบคุณภาพเครื่องมือ */}
      <section id="section-3-4" className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 bg-indigo-600 text-white text-xs font-mono font-bold rounded-md">3.4</span>
          <h3 className="text-lg sm:text-xl font-bold font-serif text-slate-900">
            การสร้างและตรวจสอบคุณภาพเครื่องมือ (IOC & Reliability)
          </h3>
        </div>

        <div className="space-y-3 text-xs sm:text-sm font-serif text-slate-700 leading-relaxed text-justify indent-8">
          <p>
            คณะผู้วิจัยได้ดำเนินการตรวจสอบคุณภาพของเครื่องมือวิจัยอย่างเป็นระบบตามขั้นตอนมาตรฐานทางวิชาการ:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 indent-0">
            <div className="p-4 bg-white border border-slate-200 rounded-xl space-y-2 shadow-2xs">
              <span className="font-bold text-indigo-900 block">1. ความตรงเชิงเนื้อหา (Content Validity - IOC)</span>
              <p className="text-slate-600 text-xs">
                นำแบบสอบถามเสนอผู้เชี่ยวชาญ 3 ท่านเพื่อประเมินค่าดัชนีความสอดคล้อง (IOC) รายข้อ โดยทุกข้อคำถามได้ค่า IOC อยู่ระหว่าง <strong>0.80 ถึง 1.00</strong> ซึ่งผ่านเกณฑ์ที่ยอมรับได้ (IOC ≥ 0.50)
              </p>
            </div>

            <div className="p-4 bg-white border border-slate-200 rounded-xl space-y-2 shadow-2xs">
              <span className="font-bold text-indigo-900 block">2. ค่าความเชื่อมั่น (Reliability - Cronbach's Alpha)</span>
              <p className="text-slate-600 text-xs">
                นำแบบสอบถามไปทดลองใช้ (Try-out) เพื่อหาค่าสัมประสิทธิ์แอลฟ่าของครอนบาค ได้ค่าความเชื่อมั่นรวมทั้งฉบับเท่ากับ <strong>0.924</strong> ซึ่งถือว่าเครื่องมือมีความเชื่อมั่นในระดับสูงมาก
              </p>
            </div>
          </div>
        </div>

        {/* ตารางที่ 3.1 ตาราง IOC */}
        <div id="table-3-1" className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
          <div className="font-bold text-slate-900 text-xs sm:text-sm">
            ตารางที่ 3.1: ผลการประเมินค่าดัชนีความสอดคล้อง (IOC) ของเครื่องมือวิจัยโดยผู้เชี่ยวชาญ 3 ท่าน
          </div>
          <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white">
            <table className="w-full text-xs text-left font-serif">
              <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                <tr>
                  <th className="p-2.5">ด้านการประเมิน</th>
                  <th className="p-2.5 text-center">จำนวนข้อ</th>
                  <th className="p-2.5 text-center">ช่วงค่า IOC</th>
                  <th className="p-2.5 text-center">ค่าเฉลี่ย IOC</th>
                  <th className="p-2.5 text-center">ผลการประเมิน</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr><td className="p-2.5 font-semibold">1. ด้านประสิทธิภาพการทำงานของระบบ</td><td className="text-center font-mono">5</td><td className="text-center font-mono">0.80 - 1.00</td><td className="text-center font-mono font-bold">0.93</td><td className="text-center text-emerald-700 font-bold">ใช้ได้</td></tr>
                <tr><td className="p-2.5 font-semibold">2. ด้านความเหมาะสมในการจับคู่ชุด</td><td className="text-center font-mono">5</td><td className="text-center font-mono">1.00 - 1.00</td><td className="text-center font-mono font-bold">1.00</td><td className="text-center text-emerald-700 font-bold">ใช้ได้</td></tr>
                <tr><td className="p-2.5 font-semibold">3. ด้านประโยชน์และการนำไปใช้จริง</td><td className="text-center font-mono">5</td><td className="text-center font-mono">0.80 - 1.00</td><td className="text-center font-mono font-bold">0.87</td><td className="text-center text-emerald-700 font-bold">ใช้ได้</td></tr>
                <tr className="bg-slate-50 font-bold"><td className="p-2.5">รวมทั้งฉบับ (15 ข้อ)</td><td className="text-center font-mono">15</td><td className="text-center font-mono">0.80 - 1.00</td><td className="text-center font-mono font-bold text-indigo-700">0.933</td><td className="text-center text-emerald-700 font-bold">ผ่านเกณฑ์ทุกข้อ</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 3.5 การเก็บรวบรวมข้อมูล 6 ขั้นตอน */}
      <section id="section-3-5" className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 bg-indigo-600 text-white text-xs font-mono font-bold rounded-md">3.5</span>
          <h3 className="text-lg sm:text-xl font-bold font-serif text-slate-900">
            การเก็บรวบรวมข้อมูล (Data Collection: 6 ขั้นตอน)
          </h3>
        </div>

        <p className="text-xs sm:text-sm text-slate-700 font-serif leading-relaxed text-justify indent-8">
          การดำเนินงานวิจัยและเก็บรวบรวมข้อมูลดำเนินการตาม 6 ขั้นตอนของระบบอย่างเป็นระเบียบ ดังนี้:
        </p>

        <div className="space-y-2 text-xs sm:text-sm font-serif">
          <div className="p-3 bg-white border border-slate-200 rounded-xl flex items-start gap-3 shadow-2xs">
            <span className="w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xs shrink-0 font-mono">1</span>
            <div>
              <strong className="text-slate-900">ขั้นตอนที่ 1: การสแกนเสื้อผ้า (Scan Clothes)</strong>
              <p className="text-slate-600">กลุ่มตัวอย่างถ่ายภาพเสื้อผ้าของตนเองผ่านกล้องสมาร์ตโฟน โดยระบบแนะนำการจัดวางให้เห็นชิ้นผ้าชัดเจน</p>
            </div>
          </div>

          <div className="p-3 bg-white border border-slate-200 rounded-xl flex items-start gap-3 shadow-2xs">
            <span className="w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xs shrink-0 font-mono">2</span>
            <div>
              <strong className="text-slate-900">ขั้นตอนที่ 2: การจัดหมวดหมู่อัตโนมัติ (Auto Classification)</strong>
              <p className="text-slate-600">ระบบประมวลผลตัดฉากหลัง สกัดประเภท (เสื้อเชิ้ต, กางเกง, กระโปรง, ชุดนักเรียน) และระบุกลุ่มสีอัตโนมัติ</p>
            </div>
          </div>

          <div className="p-3 bg-white border border-slate-200 rounded-xl flex items-start gap-3 shadow-2xs">
            <span className="w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xs shrink-0 font-mono">3</span>
            <div>
              <strong className="text-slate-900">ขั้นตอนที่ 3: คลังตู้เสื้อผ้าดิจิทัล (Digital Wardrobe Database)</strong>
              <p className="text-slate-600">บันทึกรายการเสื้อผ้าเข้าสู่ตู้เสื้อผ้าส่วนตัว สามารถดูรายการคงคลัง และติดแท็กสถานะพร้อมสวมใส่</p>
            </div>
          </div>

          <div className="p-3 bg-white border border-slate-200 rounded-xl flex items-start gap-3 shadow-2xs">
            <span className="w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xs shrink-0 font-mono">4</span>
            <div>
              <strong className="text-slate-900">ขั้นตอนที่ 4: การวิเคราะห์และตรวจทาน (Analysis & Verification)</strong>
              <p className="text-slate-600">ผู้เรียนตรวจสอบความถูกต้องของรายการ แก้ไขข้อมูลเพิ่มเติม หรือระบุโอกาสในการสวมใส่พิเศษ</p>
            </div>
          </div>

          <div className="p-3 bg-white border border-slate-200 rounded-xl flex items-start gap-3 shadow-2xs">
            <span className="w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xs shrink-0 font-mono">5</span>
            <div>
              <strong className="text-slate-900">ขั้นตอนที่ 5: การจับคู่สไตล์และแนะนำชุด (Style Matching & Recommendation)</strong>
              <p className="text-slate-600">ระบบจับคู่ชุดเสื้อและกางเกง/กระโปรงตามกฎ 60-30-10 สภาพอากาศประจำวัน และระเบียบสถานศึกษา</p>
            </div>
          </div>

          <div className="p-3 bg-white border border-slate-200 rounded-xl flex items-start gap-3 shadow-2xs">
            <span className="w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xs shrink-0 font-mono">6</span>
            <div>
              <strong className="text-slate-900">ขั้นตอนที่ 6: การลองชุดเสมือนจริง (Virtual Try-On Output)</strong>
              <p className="text-slate-600">แสดงผลพรีวิวการสวมใส่บนหุ่นจำลองเสมือนจริง พร้อมสรุปเวลาและความพร้อมใช้งาน</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3.6 การวิเคราะห์ข้อมูล */}
      <section id="section-3-6" className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 bg-indigo-600 text-white text-xs font-mono font-bold rounded-md">3.6</span>
          <h3 className="text-lg sm:text-xl font-bold font-serif text-slate-900">
            การวิเคราะห์ข้อมูลและสถิติที่ใช้ (Data Analysis & Statistics)
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-serif">
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
            <span className="font-bold text-slate-900 block">1. สถิติพรรณนา (Descriptive Statistics)</span>
            <ul className="text-slate-600 text-xs space-y-1.5 list-disc list-inside">
              <li><strong>ค่าร้อยละ (Percentage: %):</strong> วิเคราะห์ข้อมูลสถานภาพทั่วไปของกลุ่มตัวอย่าง P = (f / N) × 100</li>
              <li><strong>ค่าเฉลี่ยเลขคณิต (Mean: x̄):</strong> ระดับความคิดเห็นและความพึงพอใจ x̄ = Σx / N</li>
              <li><strong>ส่วนเบี่ยงเบนมาตรฐาน (Standard Deviation: S.D.):</strong> การกระจายตัวของความคิดเห็น S.D. = √[Σ(x - x̄)² / (N - 1)]</li>
            </ul>
            <div className="p-2 bg-white rounded border border-slate-200 text-[11px] text-slate-600">
              <strong>เกณฑ์การแปลผลคะแนนเฉลี่ย 5 ระดับ (Likert Scale):</strong><br/>
              4.51 - 5.00 หมายถึง มีความพึงพอใจในระดับมากที่สุด<br/>
              3.51 - 4.50 หมายถึง มีความพึงพอใจในระดับมาก<br/>
              2.51 - 3.50 หมายถึง มีความพึงพอใจในระดับปานกลาง<br/>
              1.51 - 2.50 หมายถึง มีความพึงพอใจในระดับน้อย<br/>
              1.00 - 1.50 หมายถึง มีความพึงพอใจในระดับน้อยที่สุด
            </div>
          </div>

          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
            <span className="font-bold text-slate-900 block">2. สถิติทดสอบสมมติฐาน (Inferential Statistics)</span>
            <ul className="text-slate-600 text-xs space-y-1.5 list-disc list-inside">
              <li><strong>Paired Samples t-test:</strong> เปรียบเทียบความแตกต่างของระยะเวลาการเลือกเสื้อผ้าระหว่างก่อนและหลังการใช้ระบบ โดยมีสูตรคำนวณ: t = (ΣD) / √[(N ΣD² - (ΣD)²) / (N - 1)]</li>
              <li><strong>การวิเคราะห์ความแม่นยำ (Accuracy Rate):</strong> คำนวณร้อยละของความถูกต้องในการจำแนกประเภทเสื้อผ้าและคู่สีตามเกณฑ์: Accuracy = (Correct / Total) × 100%</li>
            </ul>
            <div className="p-2 bg-white rounded border border-slate-200 text-[11px] text-slate-600">
              <strong>ระดับนัยสำคัญทางสถิติ:</strong> กำหนดที่ระดับ .05 (α = .05, df = N - 1 = 29) สำหรับการทดสอบสมมติฐานเปรียบเทียบระยะเวลา
            </div>
          </div>
        </div>

        {/* ตารางแสดงรายนามผู้เชี่ยวชาญตรวจสอบเครื่องมือ */}
        <div className="p-4 bg-white border border-slate-200 rounded-xl space-y-2 text-xs font-serif">
          <div className="font-bold text-indigo-950 text-sm">
            คณะผู้เชี่ยวชาญตรวจสอบคุณภาพเครื่องมือวิจัย (Expert Panel for IOC Evaluation)
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead className="bg-slate-100 text-slate-900 font-bold border-b">
                <tr>
                  <th className="p-2">ลำดับ</th>
                  <th className="p-2">ชื่อ - สกุล ผู้เชี่ยวชาญ</th>
                  <th className="p-2">ตำแหน่ง / วุฒิการศึกษา</th>
                  <th className="p-2">สังกัด / สถานศึกษา</th>
                  <th className="p-2">ความเชี่ยวชาญ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr>
                  <td className="p-2 text-center font-mono">1</td>
                  <td className="p-2 font-semibold">อาจารย์ ดร. สมศักดิ์ กุลประสิทธิ์</td>
                  <td className="p-2">ปร.ด. (วิทยาการคอมพิวเตอร์)</td>
                  <td className="p-2">คณะเทคโนโลยีสารสนเทศ มหาวิทยาลัยสยาม</td>
                  <td className="p-2 text-indigo-900">Computer Vision & AI</td>
                </tr>
                <tr>
                  <td className="p-2 text-center font-mono">2</td>
                  <td className="p-2 font-semibold">อาจารย์ ภัทรพร ศรีสุวรรณ</td>
                  <td className="p-2">ค.ม. (เทคโนโลยีและสื่อสารการศึกษา)</td>
                  <td className="p-2">วิทยาลัยเทคโนโลยีหมู่บ้านครู</td>
                  <td className="p-2 text-indigo-900">การวัดและประเมินผลทางการศึกษา</td>
                </tr>
                <tr>
                  <td className="p-2 text-center font-mono">3</td>
                  <td className="p-2 font-semibold">อาจารย์ วิไลรัตน์ โสภณพานิช</td>
                  <td className="p-2">ศศ.ม. (การจัดการธุรกิจดิจิทัล)</td>
                  <td className="p-2">วิทยาลัยเทคโนโลยีหมู่บ้านครู</td>
                  <td className="p-2 text-indigo-900">เทคโนโลยีธุรกิจดิจิทัลและระเบียบวิทยาลัย</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 3.7 ขั้นตอนการดำเนินงานวิจัย (Flowchart) */}
      <section id="section-3-7" className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 bg-indigo-600 text-white text-xs font-mono font-bold rounded-md">3.7</span>
          <h3 className="text-lg sm:text-xl font-bold font-serif text-slate-900">
            ขั้นตอนการดำเนินงานวิจัย (Research Flowchart)
          </h3>
        </div>

        <div id="fig-3-1">
          <AcademicFigure
            number="รูปที่ 3.1"
            title="ผังงานกระบวนการดำเนินงานวิจัยและพัฒนา (Research & Development Flowchart)"
            description="ผังขั้นตอนการดำเนินงานวิจัยตั้งแต่การกำหนดปัญหา การสร้างระบบ การทดสอบ IOC และการประเมินผลกลุ่มตัวอย่าง"
          >
            <div className="w-full max-w-3xl py-2 space-y-2 text-xs font-serif">
              <div className="p-3 bg-slate-900 text-white rounded-xl text-center font-bold">
                1. ศึกษาปัญหา Decision Fatigue ในหมู่นักเรียน ปวช. 3 วิทยาลัยเทคโนโลยีหมู่บ้านครู
              </div>
              <div className="w-0.5 h-3 bg-slate-300 mx-auto"></div>
              <div className="p-3 bg-indigo-50 border border-indigo-200 rounded-xl text-center text-indigo-950 font-bold">
                2. ออกแบบระบบเว็บแอปพลิเคชัน 6 โมดูล และสร้างแบบสอบถามวัดความพึงพอใจ
              </div>
              <div className="w-0.5 h-3 bg-slate-300 mx-auto"></div>
              <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-center text-amber-950 font-bold">
                3. ตรวจสอบคุณภาพเครื่องมือโดยผู้เชี่ยวชาญ 3 ท่าน (IOC = 0.933, Alpha = 0.924)
              </div>
              <div className="w-0.5 h-3 bg-slate-300 mx-auto"></div>
              <div className="p-3 bg-indigo-50 border border-indigo-200 rounded-xl text-center text-indigo-950 font-bold">
                4. ทดลองใช้ระบบกับกลุ่มตัวอย่าง ปวช. 3 จำนวน 30 คน (6 ขั้นตอนการทำงาน)
              </div>
              <div className="w-0.5 h-3 bg-slate-300 mx-auto"></div>
              <div className="p-3 bg-emerald-50 border border-emerald-300 rounded-xl text-center text-emerald-950 font-bold">
                5. วิเคราะห์ผลทางสถิติ (x̄, S.D., Paired t-test) สรุป อภิปรายผล และจัดทำรายงานฉบับสมบูรณ์
              </div>
            </div>
          </AcademicFigure>
        </div>
      </section>

      {/* 3.8 ระยะเวลาการดำเนินงาน (ตาราง Gantt Chart 12 สัปดาห์) */}
      <section id="section-3-8" className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 bg-indigo-600 text-white text-xs font-mono font-bold rounded-md">3.8</span>
          <h3 className="text-lg sm:text-xl font-bold font-serif text-slate-900">
            ระยะเวลาการดำเนินงาน (Timeline / Gantt Chart)
          </h3>
        </div>

        <div id="table-3-2" className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
          <div className="font-bold text-slate-900 text-xs sm:text-sm">
            ตารางที่ 3.2: แผนการดำเนินงานวิจัยและตารางการปฏิบัติงาน (Timeline / Gantt Chart 12 สัปดาห์)
          </div>
          <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white">
            <table className="w-full text-xs text-left font-serif">
              <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                <tr>
                  <th className="p-2.5">กิจกรรมการดำเนินงาน</th>
                  <th className="p-2.5 text-center">สัปดาห์ 1-3</th>
                  <th className="p-2.5 text-center">สัปดาห์ 4-6</th>
                  <th className="p-2.5 text-center">สัปดาห์ 7-9</th>
                  <th className="p-2.5 text-center">สัปดาห์ 10-12</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="p-2 font-medium">1. ศึกษาปัญหา ออกแบบ และเสนอหัวข้อโครงการ</td>
                  <td className="p-2 text-center bg-indigo-50 font-bold text-indigo-700">■■■</td>
                  <td className="p-2 text-center text-slate-300">-</td>
                  <td className="p-2 text-center text-slate-300">-</td>
                  <td className="p-2 text-center text-slate-300">-</td>
                </tr>
                <tr>
                  <td className="p-2 font-medium">2. พัฒนาระบบเว็บแอปพลิเคชัน 6 โมดูลหลัก</td>
                  <td className="p-2 text-center text-slate-300">-</td>
                  <td className="p-2 text-center bg-indigo-50 font-bold text-indigo-700">■■■</td>
                  <td className="p-2 text-center text-slate-300">-</td>
                  <td className="p-2 text-center text-slate-300">-</td>
                </tr>
                <tr>
                  <td className="p-2 font-medium">3. ตรวจสอบ IOC ทดลอง Try-out และปรับปรุง</td>
                  <td className="p-2 text-center text-slate-300">-</td>
                  <td className="p-2 text-center text-slate-300">-</td>
                  <td className="p-2 text-center bg-indigo-50 font-bold text-indigo-700">■■■</td>
                  <td className="p-2 text-center text-slate-300">-</td>
                </tr>
                <tr>
                  <td className="p-2 font-medium">4. ทดลองใช้จริง เก็บข้อมูล สรุปผล 5 บท</td>
                  <td className="p-2 text-center text-slate-300">-</td>
                  <td className="p-2 text-center text-slate-300">-</td>
                  <td className="p-2 text-center text-slate-300">-</td>
                  <td className="p-2 text-center bg-emerald-50 font-bold text-emerald-700">■■■</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};
