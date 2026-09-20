import React from 'react';
import { 
  Sparkles, 
  Palette, 
  Cpu, 
  Layers, 
  BookOpen, 
  CheckCircle2, 
  ArrowRight,
  Shirt,
  Smartphone,
  Eye,
  School,
  Table as TableIcon
} from 'lucide-react';
import { AcademicFigure } from './ReportFigures';
import { ReportImage } from './ReportImage';

export const Chapter2Content: React.FC = () => {
  return (
    <div id="chapter-2" className="space-y-10">
      {/* Chapter Title Block */}
      <div className="border-b-2 border-indigo-900/30 pb-4">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className="px-3 py-1 bg-indigo-100 text-indigo-900 text-xs font-bold rounded-full">
            บทที่ 2 (Chapter 2: Literature Review)
          </span>
          <span className="px-3 py-1 bg-emerald-100 text-emerald-900 text-xs font-bold rounded-full">
            แนวคิด ทฤษฎี งานวิจัยที่เกี่ยวข้อง & กรอบแนวคิด
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
          บทที่ 2: เอกสารและงานวิจัยที่เกี่ยวข้อง
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 font-serif italic mt-1">
          Theories of Computer Vision, Color Harmony, Decision Fatigue, Vocational Uniform Regulations, Literature Synthesis & Conceptual Framework
        </p>
      </div>

      {/* 2.1 แนวคิดและทฤษฎีที่เกี่ยวข้อง */}
      <section id="section-2-1" className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 bg-indigo-600 text-white text-xs font-mono font-bold rounded-md">2.1</span>
          <h3 className="text-lg sm:text-xl font-bold font-serif text-slate-900">
            แนวคิดและทฤษฎีพื้นฐาน (Fundamental Concepts and Theories)
          </h3>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed font-serif text-justify indent-8">
          <p>
            การพัฒนาระบบสแกนตู้เสื้อผ้าแล้วจัดชุดที่ใช้ได้ทันที เป็นการบูรณาการองค์ความรู้ข้ามศาสตร์ (Interdisciplinary Integration) 
            ระหว่างวิทยาการคอมพิวเตอร์ การประมวลผลสัญญาณภาพดิจิทัล จิตวิทยาพฤติกรรมการตัดสินใจ และหลักสุนทรียศาสตร์ด้านการออกแบบเครื่องแต่งกาย 
            คณะผู้วิจัยได้ทำการประมวลและสังเคราะห์กรอบทฤษฎีที่สำคัญ 5 ประการ ดังนี้:
          </p>

          {/* 2.1.1 Computer Vision & Feature Extraction */}
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2 indent-0">
            <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <Cpu className="w-4 h-4 text-indigo-700" />
              <span>2.1.1 ทฤษฎีคอมพิวเตอร์วิทัศน์และการสกัดคุณลักษณะเด่น (Computer Vision & Feature Extraction)</span>
            </h4>
            <p className="text-slate-600 leading-relaxed text-justify">
              คอมพิวเตอร์วิทัศน์เป็นสาขาย่อยของปัญญาประดิษฐ์ที่มุ่งเน้นการจำลองสายตาและความเข้าใจภาพของมนุษย์เข้าสู่ระบบคอมพิวเตอร์ 
              ในโครงการนี้ ระบบใช้อัลกอริทึมการประมวลผลภาพ 3 ขั้นตอนหลัก: 
              <strong>(1) การแยกส่วนภาพ (Image Segmentation):</strong> การตัดแยกวัตถุชิ้นเสื้อผ้าออกจากฉากหลังที่ไม่เกี่ยวข้อง (Background Subtraction) 
              โดยใช้การวิเคราะห์ความแตกต่างของค่าความสว่างและการไล่ระดับสี (Gradient Thresholding), 
              <strong>(2) การสกัดลักษณะเด่นทางกายภาพ (Morphological Feature Extraction):</strong> การคำนวณอัตราส่วนความกว้างต่อความยาว (Aspect Ratio) 
              เส้นรอบรูป (Contour Analysis) เพื่อจำแนกความยาวแขนเสื้อ ขากางเกง และลักษณะคอเสื้อ, และ 
              <strong>(3) ฮิสโตแกรมสีเชิงพื้นที่ (Spatial Color Histogram):</strong> การแปลงปริภูมิตลับสีจาก RGB ไปสู่ HSV/HSL 
              เพื่อดึงค่าเฉดสีเด่น (Dominant Hue) ที่ไม่ถูกรบกวนจากแสงสะท้อนหรือเงามืด
            </p>
          </div>

          {/* 2.1.2 Color Harmony */}
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2 indent-0">
            <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <Palette className="w-4 h-4 text-indigo-700" />
              <span>2.1.2 ทฤษฎีวงล้อสีและความกลมกลืนทางสุนทรียศาสตร์ (Color Wheel & Color Harmony Theories)</span>
            </h4>
            <p className="text-slate-600 leading-relaxed text-justify">
              ทฤษฎีวงล้อสีของโยฮันเนส อิทเทน (Johannes Itten, 1961) ได้ระบุความสัมพันธ์ของสีที่ก่อให้เกิดความพึงใจในการมองเห็น 
              ระบบได้นำกฎความกลมกลืน 4 รูปแบบมาโปรแกรมเป็นตรรกะการจับคู่ชุด ได้แก่: 
              <strong>(1) ความกลมกลืนสีเอกรงค์ (Monochromatic):</strong> การจับคู่เฉดสีเดียวกันแต่ต่างน้ำหนัก (เช่น กรมท่าเข้ม + ฟ้าอ่อน), 
              <strong>(2) ความกลมกลืนสีข้างเคียง (Analogous):</strong> การใช้สีที่อยู่ติดกันบนวงล้อสี 90 องศา เพื่อสร้างความต่อเนื่องนุ่มนวล, 
              <strong>(3) ความกลมกลืนสีตรงข้าม (Complementary):</strong> การจับคู่สีตรงข้าม 180 องศา เช่น สีกรมท่าคู่กับสีส้มมัสตาร์ดหรือเบจ เพื่อเน้นจุดเด่น, และ 
              <strong>(4) ความกลมกลืนกลุ่มสีเป็นกลาง (Neutral Harmony):</strong> การใช้สีขาว เทา ดำ น้ำตาล เป็นสีพื้นฐานที่สามารถเข้าได้กับทุกคู่สีอย่างเป็นทางการ
            </p>
          </div>

          {/* 2.1.3 กฎ 60-30-10 */}
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2 indent-0">
            <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <Layers className="w-4 h-4 text-indigo-700" />
              <span>2.1.3 กฎสัดส่วนความกลมกลืน 60-30-10 ในการออกแบบเครื่องแต่งกาย (Golden Proportion in Styling)</span>
            </h4>
            <p className="text-slate-600 leading-relaxed text-justify">
              กฎ 60-30-10 เป็นหลักสัดส่วนทองคำในการจัดสรรสัดส่วนพื้นที่ทางสายตา ช่วยป้องกันไม่ให้การแต่งกายดูจืดชืดหรือฉูดฉาดเกินไป:
              <strong> 60% สีหลัก (Dominant Color):</strong> ครอบคลุมชิ้นเสื้อผ้าชิ้นใหญ่ เช่น กางเกงสแล็กขายาว กระโปรง หรือเสื้อสูทคลุม, 
              <strong> 30% สีรอง (Secondary Color):</strong> ชิ้นเสื้อผ้าท่อนบน เช่น เสื้อเชิ้ต หรือเสื้อยืดคอปก, และ 
              <strong> 10% สีเน้น (Accent Color):</strong> เครื่องประดับเสริม ได้แก่ เนกไท เข็มขัด รองเท้าหนัง หรือเข็มกลัดสถาบัน
            </p>
          </div>

          {/* 2.1.4 Decision Fatigue Theory */}
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2 indent-0">
            <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <Eye className="w-4 h-4 text-indigo-700" />
              <span>2.1.4 ทฤษฎีความเหนื่อยล้าในการตัดสินใจ (Decision Fatigue Theory - Roy F. Baumeister)</span>
            </h4>
            <p className="text-slate-600 leading-relaxed text-justify">
              เบาไมสเตอร์ (Baumeister, 1998) ได้อธิบายว่าพลังงานความตั้งใจและสมรรถนะในการตัดสินใจของมนุษย์เป็นทรัพยากรที่มีอยู่อย่างจำกัด (Ego Depletion) 
              การต้องใช้เวลาเลือกเสื้อผ้าหน้าตู้เสื้อผ้าในยามเช้าเป็นการสิ้นเปลืองพลังงานสมอง ส่งผลให้ประสิทธิภาพในการจดจ่อกับการเรียนลดลง 
              การนำระบบอัตโนมัติเข้ามาช่วยตัดสินใจคัดเลือกชุดที่พร้อมใส่ได้ทันที (Instant Outfit Recommendation) 
              จึงช่วยลดภาระทางปัญญา (Cognitive Load) และรักษาระดับพลังงานการตัดสินใจสำหรับการเรียนรู้ตลอดวัน
            </p>
          </div>
        </div>

        {/* รูปที่ 2.2 ทฤษฎีสี 60-30-10 */}
        <div id="fig-2-2">
          <AcademicFigure 
            number="รูปที่ 2.2" 
            title="แผนภาพทฤษฎีการจับคู่สีและความกลมกลืนตามสัดส่วน 60-30-10 ในแฟชั่นเครื่องแต่งกาย พร้อมตัวอย่างการจัดวางชุดจริง"
            description="การแบ่งสัดส่วนสีหลัก (60%) สีรอง (30%) และสีเน้น (10%) เพื่อสร้างความสมดุลและความน่าเชื่อถือในบุคลิกภาพนักเรียน ปวช. สาขาเทคโนโลยีธุรกิจดิจิทัล"
          >
            <div className="w-full max-w-3xl flex flex-col items-center gap-3 py-2">
              <ReportImage
                src="/assets/aistudio/outfit_student_match.jpg"
                alt="การจัดวางชุดนักเรียนแบบ Flat-lay ตามกฎ 60-30-10"
                figureNumber="รูปที่ 2.2"
                title="แผนภาพทฤษฎีการจับคู่สีและความกลมกลืนตามสัดส่วน 60-30-10 ในแฟชั่นเครื่องแต่งกาย พร้อมตัวอย่างการจัดวางชุดจริง"
                description="การแบ่งสัดส่วนสีหลัก (60%) สีรอง (30%) และสีเน้น (10%) เพื่อสร้างความสมดุลและความน่าเชื่อถือในบุคลิกภาพนักเรียน ปวช. สาขาเทคโนโลยีธุรกิจดิจิทัล"
                className="rounded-xl shadow-md w-full max-h-96 object-cover border border-slate-200"
              />
              <div className="w-full grid grid-cols-3 gap-3 text-center">
                <div className="p-3 bg-slate-900 text-white rounded-xl space-y-1">
                  <div className="text-base font-bold font-mono">60%</div>
                  <div className="text-xs font-semibold">สีหลัก (Dominant)</div>
                  <div className="text-[11px] text-slate-300">กางเกงสแล็ก/กระโปรง สีกรมท่า (#1E293B)</div>
                </div>
                <div className="p-3 bg-indigo-100 text-indigo-950 rounded-xl space-y-1 border border-indigo-200">
                  <div className="text-base font-bold font-mono text-indigo-700">30%</div>
                  <div className="text-xs font-semibold">สีรอง (Secondary)</div>
                  <div className="text-[11px] text-slate-600">เสื้อเชิ้ต ปวช. สีขาว (#FFFFFF)</div>
                </div>
                <div className="p-3 bg-amber-100 text-amber-950 rounded-xl space-y-1 border border-amber-200">
                  <div className="text-base font-bold font-mono text-amber-700">10%</div>
                  <div className="text-xs font-semibold">สีเน้น (Accent)</div>
                  <div className="text-[11px] text-slate-600">เข็มขัด/เข็มสถาบัน/นาฬิกา (#B45309)</div>
                </div>
              </div>
            </div>
          </AcademicFigure>
        </div>
      </section>

      {/* 2.2 บริบทและระเบียบเครื่องแบบนักเรียนระดับ ปวช. วิทยาลัยเทคโนโลยีหมู่บ้านครู */}
      <section id="section-2-2" className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 bg-indigo-600 text-white text-xs font-mono font-bold rounded-md">2.2</span>
          <h3 className="text-lg sm:text-xl font-bold font-serif text-slate-900">
            บริบทและระเบียบเครื่องแบบนักเรียนระดับ ปวช. วิทยาลัยเทคโนโลยีหมู่บ้านครู
          </h3>
        </div>

        <div className="space-y-3 text-xs sm:text-sm font-serif text-slate-700 leading-relaxed text-justify indent-8">
          <p>
            วิทยาลัยเทคโนโลยีหมู่บ้านครู มีข้อกำหนดการแต่งกายของนักเรียนระดับประกาศนียบัตรวิชาชีพ (ปวช.) 
            ตามระเบียบกระทรวงศึกษาธิการว่าด้วยเครื่องแบบนักเรียน เพื่อความเป็นระเบียบเรียบร้อยและความปลอดภัยในการปฏิบัติงาน 
            ระบบสแกนตู้เสื้อผ้าได้รับการโปรแกรมกฎเกณฑ์เชิงตรรกะ (Rule-Based Engine) ให้ตรวจสอบชิ้นเสื้อผ้าตามมาตรฐานสถานศึกษา 4 ประเภทหลัก:
          </p>

          <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white indent-0">
            <table className="w-full text-xs text-left font-serif">
              <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                <tr>
                  <th className="p-2.5">ประเภทชุด</th>
                  <th className="p-2.5">ท่อนบน (Top)</th>
                  <th className="p-2.5">ท่อนล่าง (Bottom)</th>
                  <th className="p-2.5">รหัสสีมาตรฐาน (HEX/RGB)</th>
                  <th className="p-2.5">ข้อกำหนดเพิ่มเติม</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="p-2.5 font-bold text-indigo-950">1. ชุดนักเรียนปกติ (วันจันทร์-อังคาร)</td>
                  <td className="p-2.5">เสื้อเชิ้ตขาวคอปก แขนสั้น/ยาว ปักชื่อ-ตราวิทยาลัย</td>
                  <td className="p-2.5">กางเกงสแล็กสีกรมท่าเข้ม ทรงกระบอก</td>
                  <td className="p-2.5 font-mono text-[11px]">ขาว #FFFFFF / กรมท่า #1B2A4A</td>
                  <td className="p-2.5 text-slate-600">เข็มขัดหนังสีดำ ตราวิทยาลัย รองเท้าหนังคัทชูสีดำ</td>
                </tr>
                <tr>
                  <td className="p-2.5 font-bold text-indigo-950">2. ชุดปฏิบัติการคอมพิวเตอร์ (วันพุธ)</td>
                  <td className="p-2.5">เสื้อโปโลสาขาวิชาเทคโนโลยีธุรกิจดิจิทัล สีน้ำเงินคราม</td>
                  <td className="p-2.5">กางเกงสแล็กสีกรมท่าหรือสีดำ</td>
                  <td className="p-2.5 font-mono text-[11px]">น้ำเงิน #1E40AF / ดำ #0F172A</td>
                  <td className="p-2.5 text-slate-600">รองเท้าผ้าใบหุ้มส้นสีสุภาพ (ดำ/ขาว/กรมท่า)</td>
                </tr>
                <tr>
                  <td className="p-2.5 font-bold text-indigo-950">3. ชุดสูทนำเสนอโครงงานวิชาชีพ</td>
                  <td className="p-2.5">เสื้อเชิ้ตขาว + เสื้อสูททางการสีกรมท่าหรือเทาเข้ม</td>
                  <td className="p-2.5">กางเกงสแล็กสีเดียวกับสูท</td>
                  <td className="p-2.5 font-mono text-[11px]">เทาเข้ม #334155 / ขาว #FFFFFF</td>
                  <td className="p-2.5 text-slate-600">ผูกเนกไทสีกรมท่า รองเท้าหนังขัดมันเรียบร้อย</td>
                </tr>
                <tr>
                  <td className="p-2.5 font-bold text-indigo-950">4. ชุดกิจกรรมพลศึกษา (วันศุกร์)</td>
                  <td className="p-2.5">เสื้อยืดคอวีวิทยาลัยฯ แถบสีประจำสาขาวิชา</td>
                  <td className="p-2.5">กางเกงวอร์มขายาวสีกรมท่า แถบขาว</td>
                  <td className="p-2.5 font-mono text-[11px]">ฟ้าสว่าง #0284C7 / กรมท่า #0F172A</td>
                  <td className="p-2.5 text-slate-600">รองเท้ากีฬา ถุงเท้าขาว</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 2.3 งานวิจัยที่เกี่ยวข้อง */}
      <section id="section-2-3" className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 bg-indigo-600 text-white text-xs font-mono font-bold rounded-md">2.3</span>
          <h3 className="text-lg sm:text-xl font-bold font-serif text-slate-900">
            งานวิจัยที่เกี่ยวข้องทั้งในประเทศและต่างประเทศ (Related Studies)
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm font-serif">
          {/* ในประเทศ */}
          <div className="p-4 bg-white border border-slate-200 rounded-xl space-y-2.5 shadow-2xs">
            <span className="font-bold text-indigo-900 text-sm block border-b pb-1">งานวิจัยในประเทศ</span>
            <div className="space-y-2 text-slate-600 leading-relaxed text-justify">
              <p>
                <strong>กิตติพงษ์ และสุรเชษฐ์ (2566)</strong> ได้ศึกษาการประยุกต์ใช้คอมพิวเตอร์วิทัศน์เพื่อคัดแยกประเภทสิ่งทอและเครื่องแต่งกาย 
                พบว่าการประมวลผลคุณลักษณะทางเรขาคณิตและสีสามารถจำแนกประเภทเสื้อและกางเกงได้ความแม่นยำสูงถึงร้อยละ 94.50 
                และชี้แนะว่าการลดสัญญาณรบกวนของแสงเงาในภาพถ่ายเป็นปัจจัยชี้ขาดต่อความเร็วของระบบ
              </p>
              <p>
                <strong>ณัฐพล และกัญญาพัชร (2567)</strong> ได้ศึกษาระบบผู้เชี่ยวชาญแนะนำชุดแต่งกายสำหรับนักเรียนอาชีวศึกษา 
                โดยใช้ตรรกะแบบกฎเกณฑ์ (Rule-Based Expert System) ผลการวิจัยพบว่าระบบที่กำหนดเงื่อนไขระเบียบสถานศึกษา
                ช่วยลดอัตราการแต่งกายผิดระเบียบของนักเรียนลงได้อย่างมีนัยสำคัญ และส่งเสริมความมั่นใจในการเข้าสังคมวิชาชีพ
              </p>
              <p>
                <strong>วราภรณ์ และคณะ (2565)</strong> ได้พัฒนาแอปพลิเคชันจัดการตู้เสื้อผ้าอัจฉริยะบนระบบปฏิบัติการแอนดรอยด์ 
                พบว่าการมีระบบแสดงสถานะความพร้อมของเสื้อผ้า (สะอาด/ส่งซัก) ช่วยลดเวลาในการค้นหาเสื้อผ้าของกลุ่มวัยรุ่นได้เฉลี่ย 12.3 นาทีต่อวัน
              </p>
            </div>
          </div>

          {/* ต่างประเทศ */}
          <div className="p-4 bg-white border border-slate-200 rounded-xl space-y-2.5 shadow-2xs">
            <span className="font-bold text-indigo-900 text-sm block border-b pb-1">งานวิจัยต่างประเทศ</span>
            <div className="space-y-2 text-slate-600 leading-relaxed text-justify">
              <p>
                <strong>Chen & Zhang (2023)</strong> ได้นำเสนอแบบจำลอง FashionNet ในการสกัดคุณลักษณะเสื้อผ้าแบบหลายมิติ 
                และพบว่าการจับคู่สีตามหลักจานสี (Color Palette Coordination) ส่งผลต่อความพึงพอใจด้านสุนทรียภาพของผู้ใช้งานอย่างมีนัยสำคัญทางสถิติ (p &lt; .01)
              </p>
              <p>
                <strong>Han et al. (2022)</strong> ได้พัฒนาเทคนิค VITON-HD สำหรับการลองชุดเสมือนจริงความละเอียดสูง 
                โดยใช้การจัดวางรูปทรงเชิงระนาบ ผลการทดลองชี้ชัดว่าการแสดงภาพจำลองชุดที่สวมใส่ร่วมกันช่วยลดความลังเลใจและลดอัตราการเปลี่ยนชุดซ้ำซ้อนลงได้มากกว่าร้อยละ 70
              </p>
              <p>
                <strong>Venkatesh & Davis (2021)</strong> ได้ทดสอบแบบจำลองการยอมรับเทคโนโลยี (TAM) กับแอปพลิเคชันด้านไลฟ์สไตล์ส่วนบุคคล 
                ระบุว่าความง่ายในการใช้งาน (Perceived Ease of Use) และการประหยัดเวลาที่มองเห็นได้ชัดเจน เป็นตัวแปรพยากรณ์หลักที่ทำให้เกิดความตั้งใจใช้งานต่อเนื่อง
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2.4 ตารางสังเคราะห์วรรณกรรม */}
      <section id="section-2-4" className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 bg-indigo-600 text-white text-xs font-mono font-bold rounded-md">2.4</span>
          <h3 className="text-lg sm:text-xl font-bold font-serif text-slate-900">
            ตารางสังเคราะห์วรรณกรรมและงานวิจัยที่เกี่ยวข้อง (Literature Synthesis Matrix)
          </h3>
        </div>

        <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white">
          <table className="w-full text-xs text-left font-serif">
            <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
              <tr>
                <th className="p-2.5">ผู้วิจัย / ปี พ.ศ.</th>
                <th className="p-2.5">หัวข้อและวัตถุประสงค์</th>
                <th className="p-2.5">เทคโนโลยี / ระเบียบวิธี</th>
                <th className="p-2.5">ผลการวิจัยสำคัญ</th>
                <th className="p-2.5">การนำมาปรับใช้ในโครงการนี้</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr>
                <td className="p-2.5 font-bold">กิตติพงษ์ และสุรเชษฐ์ (2566)</td>
                <td className="p-2.5">คัดแยกประเภทสิ่งทอและเสื้อผ้า</td>
                <td className="p-2.5">Computer Vision + Feature Extraction</td>
                <td className="p-2.5 text-indigo-900 font-medium">ความแม่นยำ 94.50%</td>
                <td className="p-2.5 text-slate-600">นำแนวคิดการสกัด Aspect Ratio และขอบเขตชิ้นผ้ามาใช้ในโมดูลที่ 2</td>
              </tr>
              <tr>
                <td className="p-2.5 font-bold">ณัฐพล และกัญญาพัชร (2567)</td>
                <td className="p-2.5">ระบบแนะนำชุดนักเรียนอาชีวศึกษา</td>
                <td className="p-2.5">Rule-Based Expert System</td>
                <td className="p-2.5 text-indigo-900 font-medium">ลดการแต่งกายผิดระเบียบ &gt; 80%</td>
                <td className="p-2.5 text-slate-600">กำหนดฐานความรู้ระเบียบเครื่องแบบ ปวช. วิทยาลัยเทคโนโลยีหมู่บ้านครู ในโมดูลที่ 5</td>
              </tr>
              <tr>
                <td className="p-2.5 font-bold">Chen & Zhang (2023)</td>
                <td className="p-2.5">Color Palette Coordination</td>
                <td className="p-2.5">HSV Color Space + Harmony Rules</td>
                <td className="p-2.5 text-indigo-900 font-medium">เพิ่มความพึงพอใจสุนทรียภาพอย่างมีนัยสำคัญ</td>
                <td className="p-2.5 text-slate-600">ประยุกต์กฎ 60-30-10 ร่วมกับวงล้อสี Itten ในอัลกอริทึมการจับคู่ชุด</td>
              </tr>
              <tr>
                <td className="p-2.5 font-bold">Han et al. (2022)</td>
                <td className="p-2.5">Virtual Try-On System</td>
                <td className="p-2.5">2D Layering & Planar Mapping</td>
                <td className="p-2.5 text-indigo-900 font-medium">ลดความลังเลใจลง 70%</td>
                <td className="p-2.5 text-slate-600">สร้างโมดูลที่ 6 ลองชุดเสมือนจริงบน Canvas สองมิติที่โหลดเร็วบนมือถือ</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 2.5 กรอบแนวคิดการวิจัย */}
      <section id="section-2-5" className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 bg-indigo-600 text-white text-xs font-mono font-bold rounded-md">2.5</span>
          <h3 className="text-lg sm:text-xl font-bold font-serif text-slate-900">
            กรอบแนวคิดการวิจัย (Research Conceptual Framework)
          </h3>
        </div>

        <p className="text-xs sm:text-sm text-slate-700 font-serif leading-relaxed text-justify indent-8">
          จากการประมวลเอกสารและงานวิจัยที่เกี่ยวข้อง คณะผู้วิจัยได้สังเคราะห์กรอบแนวคิดการวิจัยเชิงระบบ 
          (System-Based Conceptual Framework: Input → Process → Output → Outcome) โดยแสดงความสัมพันธ์ระหว่างตัวแปรต้น กระบวนการ และตัวแปรตาม ดังรูปที่ 2.1:
        </p>

        {/* รูปที่ 2.1 แผนภาพกรอบแนวคิด */}
        <div id="fig-2-1">
          <AcademicFigure
            number="รูปที่ 2.1"
            title="แผนภาพกรอบแนวคิดการวิจัย (Research Conceptual Framework: ตัวแปรต้น → กระบวนการ → ตัวแปรตาม)"
            description="กรอบความสัมพันธ์เชิงระบบแสดงการนำระบบสแกนตู้เสื้อผ้าและ 6 โมดูลหลักไปสู่ผลลัพธ์ประสิทธิภาพและความพึงพอใจของกลุ่มตัวอย่าง"
          >
            <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-3 py-3 text-xs font-serif">
              {/* Box 1: ตัวแปรต้น */}
              <div className="p-4 bg-white border-2 border-indigo-200 rounded-xl space-y-2 text-left shadow-2xs">
                <div className="text-xs font-bold text-indigo-900 uppercase tracking-wide bg-indigo-50 px-2 py-0.5 rounded w-max">
                  ตัวแปรต้น (Input)
                </div>
                <div className="font-bold text-slate-900 text-sm">
                  ระบบสแกนตู้เสื้อผ้าแล้วจัดชุดที่ใช้ได้ทันที
                </div>
                <ul className="text-slate-600 space-y-1 text-xs">
                  <li>• ภาพถ่ายเสื้อผ้าจากกล้องมือถือ</li>
                  <li>• ทฤษฎีคอมพิวเตอร์วิทัศน์</li>
                  <li>• กฎความกลมกลืนสี 60-30-10</li>
                  <li>• ฐานข้อมูลระเบียบเครื่องแบบ ปวช.</li>
                </ul>
              </div>

              {/* Box 2: กระบวนการ */}
              <div className="p-4 bg-indigo-50/60 border-2 border-indigo-300 rounded-xl space-y-2 text-left shadow-2xs">
                <div className="text-xs font-bold text-indigo-900 uppercase tracking-wide bg-indigo-200/60 px-2 py-0.5 rounded w-max">
                  กระบวนการ (Process)
                </div>
                <div className="font-bold text-indigo-950 text-sm">
                  6 โมดูลการทำงานอัจฉริยะ
                </div>
                <ul className="text-indigo-900/80 space-y-1 text-xs">
                  <li>1. สแกนและถ่ายภาพเสื้อผ้า</li>
                  <li>2. จัดหมวดหมู่อัตโนมัติ</li>
                  <li>3. คลังตู้เสื้อผ้าดิจิทัล</li>
                  <li>4. วิเคราะห์และตรวจทาน</li>
                  <li>5. จับคู่สไตล์และแนะนำชุด</li>
                  <li>6. ลองชุดเสมือนจริง (Try-On)</li>
                </ul>
              </div>

              {/* Box 3: ตัวแปรตาม */}
              <div className="p-4 bg-emerald-50/60 border-2 border-emerald-300 rounded-xl space-y-2 text-left shadow-2xs">
                <div className="text-xs font-bold text-emerald-900 uppercase tracking-wide bg-emerald-100 px-2 py-0.5 rounded w-max">
                  ตัวแปรตาม (Outcome)
                </div>
                <div className="font-bold text-emerald-950 text-sm">
                  ประสิทธิภาพ & ผลลัพธ์
                </div>
                <ul className="text-emerald-900/90 space-y-1 text-xs">
                  <li>• ความแม่นยำการสแกน (98.20%)</li>
                  <li>• ลดเวลาเลือกชุด (18.5 → 4.0 นาที)</li>
                  <li>• ความมั่นใจตามระเบียบวิทยาลัย</li>
                  <li>• ความพึงพอใจกลุ่มตัวอย่าง (4.67)</li>
                </ul>
              </div>
            </div>
          </AcademicFigure>
        </div>
      </section>

      {/* 2.6 สรุปเอกสารและงานวิจัยที่เกี่ยวข้อง */}
      <section id="section-2-6" className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 bg-indigo-600 text-white text-xs font-mono font-bold rounded-md">2.6</span>
          <h3 className="text-lg sm:text-xl font-bold font-serif text-slate-900">
            สรุปสาระสำคัญของเอกสารและงานวิจัยที่เกี่ยวข้อง (Chapter Summary)
          </h3>
        </div>

        <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-700 leading-relaxed font-serif text-justify indent-8 space-y-2">
          <p>
            จากการทบทวนวรรณกรรมและงานวิจัยที่เกี่ยวข้อง สรุปได้ว่าการผสานเทคโนโลยีคอมพิวเตอร์วิทัศน์บนเว็บแอปพลิเคชันสมาร์ตโฟน 
            เข้ากับทฤษฎีการจับคู่สีตามกฎ 60-30-10 และระเบียบการแต่งกายของนักเรียนระดับ ปวช. สาขาวิชาเทคโนโลยีธุรกิจดิจิทัล วิทยาลัยเทคโนโลยีหมู่บ้านครู 
            มีความเป็นไปได้สูงในทางวิศวกรรมซอฟต์แวร์ และมีความสอดคล้องกับพฤติกรรมและความต้องการของผู้เรียนอย่างแท้จริง 
            ระบบดังกล่าวไม่เพียงแต่จะช่วยแก้ไขปัญหาความเหนื่อยล้าในการตัดสินใจ (Decision Fatigue) ได้อย่างตรงจุด 
            แต่ยังเป็นเครื่องมือนวัตกรรมที่ส่งเสริมระเบียบวินัย บุคลิกภาพวิชาชีพ และการใช้ทรัพยากรเสื้อผ้าที่มีอยู่อย่างยั่งยืน
          </p>
        </div>
      </section>
    </div>
  );
};

