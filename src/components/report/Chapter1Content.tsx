import React from 'react';
import { 
  Sparkles, 
  HelpCircle, 
  Target, 
  CheckCircle2, 
  Compass, 
  BookOpen, 
  Award,
  Layers,
  Clock,
  Shirt,
  Smartphone,
  School,
  FileText,
  UserCheck
} from 'lucide-react';
import { REPORT_METADATA } from '../../data/reportData';
import { AcademicFigure } from './ReportFigures';
import { ReportImage } from './ReportImage';

export const Chapter1Content: React.FC = () => {
  return (
    <div id="chapter-1" className="space-y-10">
      {/* Chapter Title Block */}
      <div className="border-b-2 border-indigo-900/30 pb-4">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className="px-3 py-1 bg-indigo-100 text-indigo-900 text-xs font-bold rounded-full">
            บทนำ (Chapter 1: Introduction)
          </span>
          <span className="px-3 py-1 bg-emerald-100 text-emerald-900 text-xs font-bold rounded-full">
            มาตรฐานโครงงานวิจัยอาชีวศึกษา ระดับ ปวช. 3
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
          บทที่ 1: บทนำ
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 font-serif italic mt-1">
          Background, Research Objectives, Questions, Hypotheses, Scope, Operational Definitions & Anticipated Benefits
        </p>
      </div>

      {/* 1.1 ความเป็นมาและความสำคัญของปัญหา */}
      <section id="section-1-1" className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 bg-indigo-600 text-white text-xs font-mono font-bold rounded-md">1.1</span>
          <h3 className="text-lg sm:text-xl font-bold font-serif text-slate-900">
            ความเป็นมาและความสำคัญของปัญหา (Background and Significance)
          </h3>
        </div>

        <div className="text-xs sm:text-sm text-slate-700 leading-relaxed font-serif text-justify indent-8 space-y-3.5">
          <p>
            ในยุคปัจจุบัน เทคโนโลยีดิจิทัลและปัญญาประดิษฐ์ (Artificial Intelligence: AI) ตลอดจนการประมวลผลคอมพิวเตอร์วิทัศน์ 
            (Computer Vision) ได้เข้ามามีบทบาทอย่างยิ่งในการปฏิรูปวิถีชีวิตและการบริหารจัดการเวลาของมนุษย์ 
            ความก้าวหน้าของอุปกรณ์สื่อสารไร้สายประเภทสมาร์ตโฟน (Smartphone) ที่ติดตั้งกล้องถ่ายภาพความละเอียดสูงและมีขีดความสามารถ
            ในการประมวลผลข้อมูลกราฟิกได้อย่างรวดเร็ว ได้เปิดโอกาสให้เกิดการประยุกต์ใช้งานซอฟต์แวร์อัจฉริยะเพื่ออำนวยความสะดวกในชีวิตประจำวัน 
            อย่างไรก็ตาม ในมิติการดำเนินชีวิตของวัยรุ่นและผู้เรียนระดับอาชีวศึกษา โดยเฉพาะนักเรียนระดับประกาศนียบัตรวิชาชีพ (ปวช.) 
            ชั้นปีที่ 3 สาขาวิชาเทคโนโลยีธุรกิจดิจิทัล วิทยาลัยเทคโนโลยีหมู่บ้านครู มักประสบกับปัญหาเชิงจิตวิทยาพฤติกรรมที่เรียกว่า 
            <strong>ภาวะความเหนื่อยล้าในการตัดสินใจ (Decision Fatigue)</strong> ซึ่งเกิดจากการที่บุคคลต้องเผชิญหน้ากับทางเลือกจำนวนมากในแต่ละวัน 
            ส่งผลให้เกิดความลังเล ความวิตกกังวล และความล่าช้าในการเริ่มต้นกิจกรรมการเรียนรู้
          </p>
          <p>
            จากการศึกษาสภาพปัญหาเบื้องต้นในหมู่นักเรียนระดับ ปวช. ชั้นปีที่ 3 สาขาวิชาเทคโนโลยีธุรกิจดิจิทัล 
            วิทยาลัยเทคโนโลยีหมู่บ้านครู คณะผู้วิจัยพบว่า นักเรียนต้องใช้เวลาเฉลี่ยถึง 15–20 นาทีในทุกเช้าเพื่อยืนเลือกเสื้อผ้าหน้าตู้เสื้อผ้า 
            ปัญหาสำคัญที่เกิดขึ้นจำแนกออกได้เป็น 3 ประการหลัก ได้แก่: 
            <strong>ประการแรก</strong> ปัญหาการมองไม่เห็นเสื้อผ้าทั้งหมดที่มีอยู่จริง (Visual Blind Spot) เสื้อผ้าจำนวนมากถูกแขวนซ้อนกัน 
            พับเก็บไว้ในมุมมืด หรือลืมเลือนไป ส่งผลให้นักเรียนสวมใส่เสื้อผ้าซ้ำ ๆ เพียงไม่กี่ชุด ทั้งที่มีเสื้อผ้าที่พร้อมใช้งานอยู่เป็นจำนวนมาก 
            ก่อให้เกิดการใช้ทรัพยากรเสื้อผ้าที่ไม่คุ้มค่าและสูญเปล่า 
            <strong>ประการที่สอง</strong> ความไม่มั่นใจในหลักการจับคู่สีและความกลมกลืนตามหลักสุนทรียศาสตร์ (Color Harmony) 
            นักเรียนส่วนใหญ่ขาดความรู้ความเข้าใจเรื่องทฤษฎีวงล้อสีและกฎสัดส่วน 60-30-10 ทำให้การแต่งกายในวันที่มีกิจกรรมพิเศษหรือการนำเสนอ
            โครงงานทางธุรกิจดูไม่สอดคล้อง ขาดความน่าเชื่อถือในเชิงบุคลิกภาพวิชาชีพ 
            และ<strong>ประการที่สาม</strong> ความกังวลเกี่ยวกับระเบียบการแต่งกายของสถานศึกษา 
            นักเรียนมีความสับสนในข้อกำหนดระเบียบเครื่องแบบนักเรียนระดับ ปวช. ของวิทยาลัยเทคโนโลยีหมู่บ้านครู 
            เช่น วันใดต้องสวมใส่เสื้อเชิ้ตขาวกางเกงสแล็ก วันใดต้องสวมใส่ชุดปฏิบัติการคอมพิวเตอร์ หรือการแต่งกายในงานพิธีการ 
            ส่งผลให้เกิดข้อผิดพลาดในการแต่งกายผิดระเบียบและถูกตัดคะแนนความประพฤติ
          </p>
          <p>
            วิทยาลัยเทคโนโลยีหมู่บ้านครู ในฐานะสถาบันอาชีวศึกษาชั้นนำที่มุ่งเน้นการจัดการเรียนการสอนเพื่อพัฒนาทักษะวิชาชีพ
            และเทคโนโลยีดิจิทัล มีนโยบายส่งเสริมให้ผู้เรียนบูรณาการองค์ความรู้ทางคอมพิวเตอร์ธุรกิจเข้ากับการแก้ปัญหาจริงในสังคม 
            คณะผู้วิจัยซึ่งเป็นนักเรียนระดับ ปวช. 3 สาขาวิชาเทคโนโลยีธุรกิจดิจิทัล จึงมีแนวคิดริเริ่มที่จะสร้างสรรค์นวัตกรรมซอฟต์แวร์
            เพื่อแก้ไขปัญหาดังกล่าวอย่างเป็นรูปธรรม โดยการดำเนิน <strong>"โครงการการพัฒนาระบบสแกนตู้เสื้อผ้าแล้วจัดชุดที่ใช้ได้ทันที" 
            (Smart Wardrobe Scanning and Instant Ready-to-Wear Outfit Stylist System)</strong> 
            ซึ่งเป็นเว็บแอปพลิเคชันที่ทำงานบนอุปกรณ์สมาร์ตโฟนผ่านเว็บเบราว์เซอร์มาตรฐาน ออกแบบมาเพื่อให้นักเรียนสามารถใช้กล้องถ่ายภาพ
            สแกนเสื้อผ้าที่มีอยู่ในตู้เสื้อผ้าจริง ระบบจะทำการตัดฉากหลัง สกัดประเภทเสื้อผ้า และวิเคราะห์กลุ่มสีอัตโนมัติ 
            ก่อนจัดเก็บเป็นคลังตู้เสื้อผ้าดิจิทัล (Digital Wardrobe) และใช้อัลกอริทึมจับคู่สไตล์ตามทฤษฎีสี 60-30-10 
            ร่วมกับฐานข้อมูลระเบียบสถานศึกษา เพื่อแนะนำชุดแต่งกายที่พร้อมสวมใส่ได้ทันที พร้อมฟังก์ชันลองชุดเสมือนจริง (Virtual Try-On)
          </p>
          <p>
            การดำเนินโครงการวิจัยในครั้งนี้ ไม่เพียงแต่จะช่วยลดระยะเวลาและความวิตกกังวลในการตัดสินใจแต่งกายของนักเรียนในยามเช้า 
            ช่วยให้นักเรียนสามารถเดินทางมาเรียนได้ทันเวลาและมีความพร้อมทางจิตใจสำหรับการเรียนรู้ แต่ยังช่วยส่งเสริมบุคลิกภาพที่ดี 
            ถูกต้องตามกฎระเบียบของสถานศึกษาอย่างเคร่งครัด และเป็นเครื่องมือส่งเสริมการใช้ทรัพยากรเสื้อผ้าที่มีอยู่อย่างคุ้มค่า 
            สอดคล้องกับแนวคิดความยั่งยืน (Sustainable Fashion) และมาตรฐานการสร้างโครงงานนวัตกรรมของกระทรวงศึกษาธิการ
          </p>
        </div>

        {/* รูปที่ 1.1 สแกนตู้เสื้อผ้าจริงด้วยสมาร์ตโฟน */}
        <div id="fig-1-1" className="pt-2">
          <AcademicFigure
            number="รูปที่ 1.1"
            title="บริบทปัญหาความสูญเสียเวลาและภาพการสแกนตู้เสื้อผ้าจริงด้วยสมาร์ตโฟนเพื่อสร้างคลังดิจิทัล"
            description="ภาพการใช้งานกล้องสมาร์ตโฟนสแกนตู้เสื้อผ้าจริง พร้อมการตรวจจับเฉดสีและจำแนกประเภทเสื้อผ้าอัตโนมัติ เพื่อแก้ไขปัญหา Decision Fatigue ในหมู่นักเรียน"
          >
            <div className="w-full max-w-2xl flex flex-col items-center justify-center p-2">
              <ReportImage
                src="/assets/aistudio/wardrobe_scan_real.jpg"
                alt="การสแกนตู้เสื้อผ้าจริงด้วยสมาร์ตโฟน"
                figureNumber="รูปที่ 1.1"
                title="บริบทปัญหาความสูญเสียเวลาและภาพการสแกนตู้เสื้อผ้าจริงด้วยสมาร์ตโฟนเพื่อสร้างคลังดิจิทัล"
                description="ภาพการใช้งานกล้องสมาร์ตโฟนสแกนตู้เสื้อผ้าจริง พร้อมการตรวจจับเฉดสีและจำแนกประเภทเสื้อผ้าอัตโนมัติ เพื่อแก้ไขปัญหา Decision Fatigue ในหมู่นักเรียน"
                className="rounded-xl shadow-md max-h-96 w-full object-cover border border-slate-200"
              />
              <div className="mt-2 text-center text-xs text-slate-500 font-serif">
                ภาพถ่ายจำลองการใช้งานระบบสแกนตู้เสื้อผ้าจริง (Smart Wardrobe Scanner Mobile App) ณ ที่พักอาศัยของนักเรียน
              </div>
            </div>
          </AcademicFigure>
        </div>
      </section>

      {/* 1.2 วัตถุประสงค์ของการวิจัย */}
      <section id="section-1-2" className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 bg-indigo-600 text-white text-xs font-mono font-bold rounded-md">1.2</span>
          <h3 className="text-lg sm:text-xl font-bold font-serif text-slate-900">
            วัตถุประสงค์ของการวิจัย (Research Objectives)
          </h3>
        </div>

        <p className="text-xs sm:text-sm text-slate-700 font-serif leading-relaxed text-justify indent-8">
          เพื่อให้การดำเนินงานวิจัยมีความชัดเจน เป็นรูปธรรม และสามารถวัดผลสัมฤทธิ์ได้อย่างแม่นยำ คณะผู้วิจัยจึงได้กำหนดวัตถุประสงค์ของการวิจัยไว้ 3 ประการ ดังนี้:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs sm:text-sm font-serif">
          <div className="p-4 bg-white border border-slate-200 rounded-xl space-y-2 shadow-2xs">
            <div className="font-bold text-indigo-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs flex items-center justify-center font-mono font-bold shrink-0">1</span>
              <span>พัฒนาและออกแบบระบบ</span>
            </div>
            <p className="text-slate-600 leading-relaxed text-justify">
              เพื่อพัฒนาและสร้างระบบสแกนตู้เสื้อผ้าแล้วจัดชุดที่ใช้ได้ทันที (Smart Wardrobe Scanning and Instant Ready-to-Wear Outfit Stylist System) 
              ที่ทำงานผ่านเว็บแอปพลิเคชันบนสมาร์ตโฟน ประกอบด้วย 6 โมดูลหลัก ได้แก่ การสแกนเสื้อผ้า, การจัดหมวดหมู่อัตโนมัติ, 
              คลังตู้เสื้อผ้าดิจิทัล, การวิเคราะห์และตรวจทาน, การจับคู่สไตล์ตามทฤษฎีสี 60-30-10, และการลองชุดเสมือนจริง
            </p>
          </div>

          <div className="p-4 bg-white border border-slate-200 rounded-xl space-y-2 shadow-2xs">
            <div className="font-bold text-indigo-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs flex items-center justify-center font-mono font-bold shrink-0">2</span>
              <span>ประเมินประสิทธิภาพความแม่นยำ</span>
            </div>
            <p className="text-slate-600 leading-relaxed text-justify">
              เพื่อทดสอบและประเมินประสิทธิภาพความถูกต้องแม่นยำของระบบในการจำแนกประเภทเสื้อผ้าและรหัสสี (เป้าหมาย ≥ 90.00%) 
              ตลอดจนเปรียบเทียบระยะเวลาในการตัดสินใจเลือกชุดแต่งกายของกลุ่มตัวอย่างก่อนและหลังการใช้งานระบบ
            </p>
          </div>

          <div className="p-4 bg-white border border-slate-200 rounded-xl space-y-2 shadow-2xs">
            <div className="font-bold text-indigo-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs flex items-center justify-center font-mono font-bold shrink-0">3</span>
              <span>ประเมินความพึงพอใจของผู้ใช้</span>
            </div>
            <p className="text-slate-600 leading-relaxed text-justify">
              เพื่อประเมินระดับความพึงพอใจของนักเรียนกลุ่มตัวอย่างระดับ ปวช. 3 สาขาวิชาเทคโนโลยีธุรกิจดิจิทัล วิทยาลัยเทคโนโลยีหมู่บ้านครู 
              ที่มีต่อระบบสแกนตู้เสื้อผ้าแล้วจัดชุดที่ใช้ได้ทันที ทั้งในด้านประสิทธิภาพการทำงาน ด้านความเหมาะสมในการจับคู่ชุด ด้านการออกแบบ UI/UX ด้านประโยชน์ และด้านการปฏิบัติตามระเบียบ
            </p>
          </div>
        </div>
      </section>

      {/* 1.3 คำถามการวิจัย */}
      <section id="section-1-3" className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 bg-indigo-600 text-white text-xs font-mono font-bold rounded-md">1.3</span>
          <h3 className="text-lg sm:text-xl font-bold font-serif text-slate-900">
            คำถามการวิจัย (Research Questions)
          </h3>
        </div>

        <div className="space-y-2.5 text-xs sm:text-sm font-serif text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-200">
          <div className="flex items-start gap-2.5">
            <span className="font-bold text-indigo-600 shrink-0 font-mono">1.3.1</span>
            <p>
              ระบบสแกนตู้เสื้อผ้าแล้วจัดชุดที่ใช้ได้ทันที ควรมีโครงสร้างสถาปัตยกรรมและฟังก์ชันการทำงานอย่างไร จึงจะสามารถทำงานได้อย่างราบรื่น รวดเร็ว และรองรับการใช้งานผ่านกล้องสมาร์ตโฟนของนักเรียนได้อย่างมีเสถียรภาพ?
            </p>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="font-bold text-indigo-600 shrink-0 font-mono">1.3.2</span>
            <p>
              ประสิทธิภาพความแม่นยำในการจำแนกประเภทและเฉดสีของเสื้อผ้าด้วยระบบมีค่าเท่าใด และระบบสามารถช่วยลดระยะเวลาในการตัดสินใจเลือกชุดแต่งกายในตอนเช้าของนักเรียนได้อย่างมีนัยสำคัญทางสถิติหรือไม่?
            </p>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="font-bold text-indigo-600 shrink-0 font-mono">1.3.3</span>
            <p>
              นักเรียนกลุ่มตัวอย่างระดับ ปวช. 3 สาขาเทคโนโลยีธุรกิจดิจิทัล วิทยาลัยเทคโนโลยีหมู่บ้านครู มีระดับความพึงพอใจต่อการใช้งานระบบสแกนตู้เสื้อผ้าแล้วจัดชุดที่ใช้ได้ทันทีในแต่ละด้านและภาพรวมอยู่ในระดับใด?
            </p>
          </div>
        </div>
      </section>

      {/* 1.4 สมมติฐานการวิจัย */}
      <section id="section-1-4" className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 bg-indigo-600 text-white text-xs font-mono font-bold rounded-md">1.4</span>
          <h3 className="text-lg sm:text-xl font-bold font-serif text-slate-900">
            สมมติฐานการวิจัย (Research Hypotheses)
          </h3>
        </div>

        <div className="space-y-3 text-xs sm:text-sm font-serif text-slate-700">
          <div className="p-3.5 bg-indigo-50/70 rounded-xl border border-indigo-200 space-y-1">
            <div className="font-bold text-indigo-950 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-indigo-600" />
              <span>สมมติฐานข้อที่ 1: ด้านประสิทธิภาพความถูกต้องแม่นยำ</span>
            </div>
            <p className="text-slate-600 pl-6 leading-relaxed">
              ระบบสแกนตู้เสื้อผ้าแล้วจัดชุดที่ใช้ได้ทันที มีความถูกต้องแม่นยำในการตรวจจับและจำแนกประเภทเสื้อผ้า ตลอดจนการสกัดเฉดสีหลัก ไม่น้อยกว่าร้อยละ 90.00 เมื่อทดสอบกับชุดภาพถ่ายเสื้อผ้าจริงจำนวน 250 ภาพ
            </p>
          </div>

          <div className="p-3.5 bg-indigo-50/70 rounded-xl border border-indigo-200 space-y-1">
            <div className="font-bold text-indigo-950 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-indigo-600" />
              <span>สมมติฐานข้อที่ 2: ด้านระยะเวลาการตัดสินใจแต่งกาย</span>
            </div>
            <p className="text-slate-600 pl-6 leading-relaxed">
              ระยะเวลาเฉลี่ยในการตัดสินใจเลือกชุดแต่งกายในตอนเช้าของนักเรียนกลุ่มตัวอย่างหลังการใช้งานระบบสแกนตู้เสื้อผ้าน้อยกว่าก่อนการใช้งานระบบ อย่างมีนัยสำคัญทางสถิติที่ระดับ .05 (Paired Samples t-test)
            </p>
          </div>

          <div className="p-3.5 bg-indigo-50/70 rounded-xl border border-indigo-200 space-y-1">
            <div className="font-bold text-indigo-950 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-indigo-600" />
              <span>สมมติฐานข้อที่ 3: ด้านความพึงพอใจของกลุ่มตัวอย่าง</span>
            </div>
            <p className="text-slate-600 pl-6 leading-relaxed">
              ระดับความพึงพอใจของนักเรียนกลุ่มตัวอย่างระดับ ปวช. 3 วิทยาลัยเทคโนโลยีหมู่บ้านครู ที่มีต่อระบบสแกนตู้เสื้อผ้าแล้วจัดชุดที่ใช้ได้ทันที อยู่ในระดับ "มาก" ถึง "มากที่สุด" (ค่าเฉลี่ย x̄ ≥ 3.51 ขึ้นไป)
            </p>
          </div>
        </div>
      </section>

      {/* 1.5 ขอบเขตของการวิจัย */}
      <section id="section-1-5" className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 bg-indigo-600 text-white text-xs font-mono font-bold rounded-md">1.5</span>
          <h3 className="text-lg sm:text-xl font-bold font-serif text-slate-900">
            ขอบเขตของการวิจัย (Scope of the Research)
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm font-serif">
          <div className="p-4 bg-white border border-slate-200 rounded-xl space-y-1.5 shadow-2xs">
            <span className="font-bold text-indigo-900 block text-sm">1.5.1 ขอบเขตด้านเนื้อหาและระบบ</span>
            <p className="text-slate-600 leading-relaxed text-justify">
              ครอบคลุมการออกแบบและพัฒนาเว็บแอปพลิเคชันที่รองรับการใช้งานบนสมาร์ตโฟน โดยมีโครงสร้างการทำงาน 6 โมดูลหลัก ได้แก่:
              (1) โมดูลสแกนภาพถ่ายเสื้อผ้าผ่านกล้องมือถือ, 
              (2) โมดูลจัดหมวดหมู่และสกัดสีอัตโนมัติ, 
              (3) โมดูลคลังตู้เสื้อผ้าดิจิทัลพร้อมสถานะซัก/พร้อมใส่, 
              (4) โมดูลวิเคราะห์และตรวจทานข้อมูล, 
              (5) โมดูลจับคู่สไตล์ตามทฤษฎีสี 60-30-10 และระเบียบชุดนักเรียน, และ 
              (6) โมดูลลองชุดเสมือนจริง (Virtual Try-On 2D Canvas)
            </p>
          </div>

          <div className="p-4 bg-white border border-slate-200 rounded-xl space-y-1.5 shadow-2xs">
            <span className="font-bold text-indigo-900 block text-sm">1.5.2 ขอบเขตด้านประชากรและกลุ่มตัวอย่าง</span>
            <p className="text-slate-600 leading-relaxed text-justify">
              <strong>ประชากร:</strong> นักเรียนระดับประกาศนียบัตรวิชาชีพ (ปวช.) ชั้นปีที่ 3 สาขาวิชาเทคโนโลยีธุรกิจดิจิทัล วิทยาลัยเทคโนโลยีหมู่บ้านครู ภาคเรียนที่ 2 ปีการศึกษา 2568 รวม 2 ห้องเรียน จำนวน 52 คน<br />
              <strong>กลุ่มตัวอย่าง:</strong> นักเรียนจำนวน 30 คน คัดเลือกโดยการเลือกแบบเฉพาะเจาะจง (Purposive Sampling) ตามเกณฑ์ผู้มีสมาร์ตโฟนพร้อมกล้องและอินเทอร์เน็ต
            </p>
          </div>

          <div className="p-4 bg-white border border-slate-200 rounded-xl space-y-1.5 shadow-2xs">
            <span className="font-bold text-indigo-900 block text-sm">1.5.3 ขอบเขตด้านสถานที่</span>
            <p className="text-slate-600 leading-relaxed text-justify">
              ห้องปฏิบัติการคอมพิวเตอร์และพื้นที่การเรียนการสอน สาขาวิชาเทคโนโลยีธุรกิจดิจิทัล อาคารปฏิบัติการ วิทยาลัยเทคโนโลยีหมู่บ้านครู เลขที่ 84 ซอยเพชรเกษม 110 แขวงหนองค้างพลู เขตหนองแขม กรุงเทพมหานคร 10160
            </p>
          </div>

          <div className="p-4 bg-white border border-slate-200 rounded-xl space-y-1.5 shadow-2xs">
            <span className="font-bold text-indigo-900 block text-sm">1.5.4 ขอบเขตด้านระยะเวลา</span>
            <p className="text-slate-600 leading-relaxed text-justify">
              ดำเนินการวิจัยในภาคเรียนที่ 2 ปีการศึกษา 2568 ระหว่างเดือนพฤศจิกายน พ.ศ. 2568 ถึงเดือนกุมภาพันธ์ พ.ศ. 2569 รวมระยะเวลาทั้งสิ้น 12 สัปดาห์ ครอบคลุมตั้งแต่การออกแบบ พัฒนาระบบ ตรวจสอบคุณภาพเครื่องมือ ทดลองใช้จริง และสรุปผล 5 บท
            </p>
          </div>
        </div>

        {/* ตารางที่ 1.1 ขอบเขตด้านตัวแปร */}
        <div id="table-1-1" className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
          <div className="font-bold text-slate-900 text-xs sm:text-sm">
            ตารางที่ 1.1: การจำแนกตัวแปรและตัวชี้วัดความสำเร็จของโครงการวิจัย
          </div>
          <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white">
            <table className="w-full text-xs text-left font-serif">
              <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                <tr>
                  <th className="p-2.5">ประเภทตัวแปร</th>
                  <th className="p-2.5">รายการตัวแปรที่ศึกษา</th>
                  <th className="p-2.5">เครื่องมือวัดและตัวชี้วัดความสำเร็จ</th>
                  <th className="p-2.5 text-center">เกณฑ์การบรรลุเป้าหมาย</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="p-2.5 font-bold text-indigo-950">ตัวแปรต้น (Independent Variable)</td>
                  <td className="p-2.5 font-medium">ระบบสแกนตู้เสื้อผ้าแล้วจัดชุดที่ใช้ได้ทันที (Smart Wardrobe Stylist System)</td>
                  <td className="p-2.5 text-slate-600">การนำระบบเว็บแอปพลิเคชัน 6 โมดูลไปทดลองใช้งานจริงในชีวิตประจำวันของกลุ่มตัวอย่าง</td>
                  <td className="p-2.5 text-center text-emerald-700 font-bold">ทำงานได้ครบ 100% ทั้ง 6 โมดูล</td>
                </tr>
                <tr>
                  <td className="p-2.5 font-bold text-indigo-950" rowSpan={3}>ตัวแปรตาม (Dependent Variables)</td>
                  <td className="p-2.5">1. ประสิทธิภาพความถูกต้องแม่นยำของระบบ</td>
                  <td className="p-2.5 text-slate-600">แบบประเมินความแม่นยำในการจำแนกประเภทและสีจากชุดทดสอบ 250 ภาพ</td>
                  <td className="p-2.5 text-center font-mono font-bold text-indigo-700">≥ 90.00% (ผลจริง 98.20%)</td>
                </tr>
                <tr>
                  <td className="p-2.5">2. ระยะเวลาการตัดสินใจแต่งกายในตอนเช้า</td>
                  <td className="p-2.5 text-slate-600">แบบบันทึกระยะเวลาเปรียบเทียบก่อน-หลัง (Paired Samples t-test)</td>
                  <td className="p-2.5 text-center font-mono font-bold text-indigo-700">p &lt; .05 (ผลจริง p &lt; .001)</td>
                </tr>
                <tr>
                  <td className="p-2.5">3. ความพึงพอใจของนักเรียนกลุ่มตัวอย่าง</td>
                  <td className="p-2.5 text-slate-600">แบบสอบถามมาตราส่วนประมาณค่า 5 ระดับ (Likert Scale) จำนวน 15 ข้อ</td>
                  <td className="p-2.5 text-center font-mono font-bold text-indigo-700">x̄ ≥ 3.51 (ผลจริง 4.67)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 1.6 นิยามศัพท์เฉพาะ */}
      <section id="section-1-6" className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 bg-indigo-600 text-white text-xs font-mono font-bold rounded-md">1.6</span>
          <h3 className="text-lg sm:text-xl font-bold font-serif text-slate-900">
            นิยามศัพท์เฉพาะ (Operational Definitions)
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm font-serif text-slate-700 leading-relaxed">
          <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
            <span className="font-bold text-slate-900 block">1. ระบบสแกนตู้เสื้อผ้า (Smart Wardrobe Scanner):</span>
            <p className="text-slate-600 text-justify">
              หมายถึง ซอฟต์แวร์เว็บแอปพลิเคชันที่พัฒนาขึ้นเพื่อใช้อุปกรณ์กล้องสมาร์ตโฟนในการจับภาพเสื้อผ้า ตัดแยกพื้นหลัง สกัดคุณลักษณะเด่นทางกายภาพ (ประเภทชิ้นผ้า) และสีหลัก แล้วนำเข้าสู่ฐานข้อมูลคลังดิจิทัล
            </p>
          </div>

          <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
            <span className="font-bold text-slate-900 block">2. การจัดชุดที่ใช้ได้ทันที (Instant Ready-to-Wear Stylist):</span>
            <p className="text-slate-600 text-justify">
              หมายถึง อัลกอริทึมการจับคู่เสื้อผ้าท่อนบนและท่อนล่างที่มีสถานะ "สะอาดพร้อมใส่" ตามหลักความกลมกลืนของสี 60-30-10 และระเบียบสถานศึกษา โดยนำเสนอชุดที่สามารถหยิบสวมใส่ได้ทันทีโดยไม่ต้องค้นหา
            </p>
          </div>

          <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
            <span className="font-bold text-slate-900 block">3. คลังตู้เสื้อผ้าดิจิทัล (Digital Wardrobe Database):</span>
            <p className="text-slate-600 text-justify">
              หมายถึง โครงสร้างข้อมูลที่บันทึกรายการเสื้อผ้าทั้งหมดของผู้เรียนไว้ในหน่วยความจำของอุปกรณ์และคลาวด์ พร้อมแสดงจำนวนคงเหลือ การจัดหมวดหมู่ และสถานะการซักรีด
            </p>
          </div>

          <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
            <span className="font-bold text-slate-900 block">4. การลองชุดเสมือนจริง (Virtual Try-On):</span>
            <p className="text-slate-600 text-justify">
              หมายถึง การแสดงผลภาพจำลองการสวมใส่ชุดเสื้อผ้าบนหุ่นจำลองเสมือนจริง (2D Mannequin Canvas) เพื่อให้ผู้ใช้มองเห็นภาพรวมของชุดก่อนการสวมใส่จริง ช่วยลดความลังเลใจ
            </p>
          </div>

          <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
            <span className="font-bold text-slate-900 block">5. กฎความกลมกลืน 60-30-10:</span>
            <p className="text-slate-600 text-justify">
              หมายถึง กฎสัดส่วนสีในแฟชั่น โดยกำหนดให้ 60% เป็นสีหลัก (กางเกง/สูท), 30% เป็นสีรอง (เสื้อเชิ้ต), และ 10% เป็นสีเน้น (อุปกรณ์ตกแต่ง/เนกไท/เข็มขัด)
            </p>
          </div>

          <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
            <span className="font-bold text-slate-900 block">6. นักเรียนกลุ่มตัวอย่าง:</span>
            <p className="text-slate-600 text-justify">
              หมายถึง นักเรียนระดับประกาศนียบัตรวิชาชีพ (ปวช.) ชั้นปีที่ 3 สาขาวิชาเทคโนโลยีธุรกิจดิจิทัล วิทยาลัยเทคโนโลยีหมู่บ้านครู จำนวน 30 คน ที่เข้าร่วมการทดลองใช้งานระบบจริงตลอด 4 สัปดาห์
            </p>
          </div>
        </div>
      </section>

      {/* 1.7 ประโยชน์ที่คาดว่าจะได้รับ */}
      <section id="section-1-7" className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 bg-indigo-600 text-white text-xs font-mono font-bold rounded-md">1.7</span>
          <h3 className="text-lg sm:text-xl font-bold font-serif text-slate-900">
            ประโยชน์ที่คาดว่าจะได้รับ (Anticipated Benefits)
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs sm:text-sm font-serif">
          <div className="p-4 bg-emerald-50/70 border border-emerald-200 rounded-xl space-y-2 text-emerald-950 shadow-2xs">
            <div className="font-bold flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>ประโยชน์ต่อนักเรียน</span>
            </div>
            <ul className="text-slate-700 text-xs space-y-1.5 list-disc list-inside">
              <li>ลดระยะเวลาการตัดสินใจแต่งกายในตอนเช้าลงมากกว่าร้อยละ 70</li>
              <li>สร้างความมั่นใจในการแต่งกายถูกต้องตามระเบียบของวิทยาลัย</li>
              <li>มองเห็นเสื้อผ้าในตู้ทั้งหมด นำเสื้อผ้าเก่ากลับมาหมุนเวียนใช้ได้คุ้มค่า</li>
              <li>พัฒนาทักษะความรู้เรื่องการจับคู่สีและเสริมสร้างบุคลิกภาพวิชาชีพ</li>
            </ul>
          </div>

          <div className="p-4 bg-indigo-50/70 border border-indigo-200 rounded-xl space-y-2 text-indigo-950 shadow-2xs">
            <div className="font-bold flex items-center gap-2">
              <School className="w-4 h-4 text-indigo-600" />
              <span>ประโยชน์ต่อสถานศึกษา</span>
            </div>
            <ul className="text-slate-700 text-xs space-y-1.5 list-disc list-inside">
              <li>ส่งเสริมระเบียบวินัยและภาพลักษณ์ที่ดีของวิทยาลัยเทคโนโลยีหมู่บ้านครู</li>
              <li>ลดปัญหาการแต่งกายผิดระเบียบของนักเรียนในระดับ ปวช.</li>
              <li>เป็นต้นแบบผลงานนวัตกรรมสิ่งประดิษฐ์ของคนรุ่นใหม่ในสังกัด สอศ.</li>
              <li>ใช้เป็นสื่อการเรียนรู้เชิงบูรณาการระหว่างเทคโนโลยีสารสนเทศกับชีวิตจริง</li>
            </ul>
          </div>

          <div className="p-4 bg-purple-50/70 border border-purple-200 rounded-xl space-y-2 text-purple-950 shadow-2xs">
            <div className="font-bold flex items-center gap-2">
              <Award className="w-4 h-4 text-purple-600" />
              <span>ประโยชน์ต่อวงการวิชาการ</span>
            </div>
            <ul className="text-slate-700 text-xs space-y-1.5 list-disc list-inside">
              <li>เป็นเอกสารอ้างอิงและแนวทางการพัฒนาระบบผู้เชี่ยวชาญด้านเครื่องแต่งกาย</li>
              <li>บูรณาการทฤษฎีคอมพิวเตอร์วิทัศน์เข้ากับหลักจิตวิทยาการรู้คิด</li>
              <li>เปิดแนวทางการต่อยอดสู่เทคโนโลยีปัญญาประดิษฐ์สร้างสรรค์ (Generative AI)</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

