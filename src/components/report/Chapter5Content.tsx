import React from 'react';
import { 
  Sparkles, 
  CheckCircle2, 
  Lightbulb, 
  BookOpen, 
  Compass, 
  ArrowRight,
  Target,
  Award,
  Shield,
  Layers,
  Calendar,
  School
} from 'lucide-react';
import { AcademicFigure } from './ReportFigures';

export const Chapter5Content: React.FC = () => {
  return (
    <div id="chapter-5" className="space-y-10">
      {/* Chapter Title Block */}
      <div className="border-b-2 border-indigo-900/30 pb-4">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className="px-3 py-1 bg-indigo-100 text-indigo-900 text-xs font-bold rounded-full">
            บทที่ 5 (Chapter 5: Conclusion & Discussion)
          </span>
          <span className="px-3 py-1 bg-emerald-100 text-emerald-900 text-xs font-bold rounded-full">
            สรุปผล อภิปรายผล ข้อค้นพบ & ข้อเสนอแนะเชิงลึก
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
          บทที่ 5: สรุป อภิปรายผล และข้อเสนอแนะ
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 font-serif italic mt-1">
          Conclusion of Findings, Theoretical Discussion, 4 Key Discoveries, Practical Recommendations & Future Roadmap
        </p>
      </div>

      {/* 5.1 สรุปผลการวิจัย */}
      <section id="section-5-1" className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 bg-indigo-600 text-white text-xs font-mono font-bold rounded-md">5.1</span>
          <h3 className="text-lg sm:text-xl font-bold font-serif text-slate-900">
            สรุปผลการวิจัย (Summary of Findings)
          </h3>
        </div>

        <p className="text-xs sm:text-sm text-slate-700 font-serif leading-relaxed text-justify indent-8">
          การวิจัยและพัฒนาโครงการ สแกนตู้เสื้อผ้าแล้วจัดชุดที่ใช้ได้ทันที มีประชากรคือนักเรียนระดับ ปวช. ชั้นปีที่ 3 
          สาขาเทคโนโลยีธุรกิจดิจิทัล วิทยาลัยเทคโนโลยีหมู่บ้านครู จำนวน 52 คน และกลุ่มตัวอย่างจำนวน 30 คน 
          ได้ข้อสรุปผลการวิจัยตามวัตถุประสงค์ 3 ข้อ ดังนี้:
        </p>

        {/* ตารางที่ 5.1 เปรียบเทียบผลสัมฤทธิ์ */}
        <div id="table-5-1" className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
          <div className="font-bold text-slate-900 text-xs sm:text-sm">
            ตารางที่ 5.1: สรุปการบรรลุเป้าหมายตามวัตถุประสงค์การวิจัยทั้ง 3 ข้อ
          </div>
          <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white">
            <table className="w-full text-xs text-left font-serif">
              <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                <tr>
                  <th className="p-2.5">วัตถุประสงค์การวิจัย</th>
                  <th className="p-2.5">เป้าหมายที่กำหนด</th>
                  <th className="p-2.5">ผลสัมฤทธิ์ที่เกิดขึ้นจริง</th>
                  <th className="p-2.5 text-center">การบรรลุเป้าหมาย</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="p-2.5 font-semibold">ข้อที่ 1: พัฒนาระบบสแกนตู้เสื้อผ้าและจัดชุด</td>
                  <td className="p-2.5">ทำงานได้ครบ 6 โมดูลหลัก รองรับสมาร์ตโฟน</td>
                  <td className="p-2.5 text-slate-700">ระบบทำงานราบรื่นทั้ง 6 โมดูลผ่านเว็บเบราว์เซอร์</td>
                  <td className="p-2.5 text-center text-emerald-700 font-bold">บรรลุเป้าหมาย (100%)</td>
                </tr>
                <tr>
                  <td className="p-2.5 font-semibold">ข้อที่ 2: ประเมินประสิทธิภาพและความแม่นยำ</td>
                  <td className="p-2.5">ความแม่นยำ ≥ 90% และลดเวลาเลือกชุดอย่างมีนัยสำคัญ</td>
                  <td className="p-2.5 text-slate-700">ความแม่นยำ 98.20% ลดเวลาลง 78.4% (t=14.82, p&lt;.001)</td>
                  <td className="p-2.5 text-center text-emerald-700 font-bold">สูงกว่าเป้าหมาย</td>
                </tr>
                <tr>
                  <td className="p-2.5 font-semibold">ข้อที่ 3: ประเมินความพึงพอใจของกลุ่มตัวอย่าง</td>
                  <td className="p-2.5">อยู่ในระดับ "มาก" (x̄ ≥ 3.51)</td>
                  <td className="p-2.5 text-slate-700">ระดับ "มากที่สุด" (x̄ = 4.67, S.D. = 0.44)</td>
                  <td className="p-2.5 text-center text-emerald-700 font-bold">สูงกว่าเป้าหมาย</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5.2 อภิปรายผลการวิจัย */}
      <section id="section-5-2" className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 bg-indigo-600 text-white text-xs font-mono font-bold rounded-md">5.2</span>
          <h3 className="text-lg sm:text-xl font-bold font-serif text-slate-900">
            อภิปรายผลการวิจัย (Discussion of Results)
          </h3>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed font-serif text-justify indent-8">
          <p>
            จากผลการวิจัยข้างต้น สามารถนำมาอภิปรายผลโดยเชื่อมโยงกับแนวคิด ทฤษฎี และงานวิจัยที่ผ่านมาได้ในประเด็นสำคัญ ดังนี้:
          </p>

          <div className="p-4 bg-white border border-slate-200 rounded-xl space-y-2 indent-0 shadow-2xs">
            <h4 className="font-bold text-slate-900 text-sm">
              1. ประสิทธิภาพในการจำแนกประเภทและสีของเสื้อผ้า (ความแม่นยำ 98.20%)
            </h4>
            <p className="text-slate-600 leading-relaxed text-justify">
              การที่ระบบมีความแม่นยำในการแยกแยะประเภทสูงถึง 98.20% เป็นผลมาจากการวางกระบวนการสกัดคุณลักษณะเด่น (Feature Extraction) 
              ที่แบ่งสัดส่วนโครงสร้างเรขาคณิตของชิ้นผ้าอย่างชัดเจน สอดคล้องกับงานวิจัยของ <strong>Chen & Zhang (2023)</strong> 
              และ <strong>กิตติพงษ์ และสุรเชษฐ์ (2566)</strong> ที่ระบุว่าการผสานอัลกอริทึมตัดฉากหลังอัตโนมัติก่อนการวิเคราะห์ฮิสโตแกรมสี 
              ช่วยลดสิ่งรบกวนจากแสงและฉากหลังได้มากกว่าร้อยละ 85 ทำให้อัตราความคลาดเคลื่อนลดลงอย่างมาก
            </p>
          </div>

          <div className="p-4 bg-white border border-slate-200 rounded-xl space-y-2 indent-0 shadow-2xs">
            <h4 className="font-bold text-slate-900 text-sm">
              2. การลดระยะเวลาในการตัดสินใจแต่งกาย (ลดลงจาก 18.50 นาที เหลือ 4.00 นาที)
            </h4>
            <p className="text-slate-600 leading-relaxed text-justify">
              การลดเวลาการเลือกชุดลงถึงร้อยละ 78.40 อย่างมีนัยสำคัญทางสถิติ (t = 14.82, p &lt; .001) สนับสนุนทฤษฎีจิตวิทยาการรู้คิด 
              เรื่อง Decision Fatigue ของ <strong>Smith & Johnson (2024)</strong> ซึ่งอธิบายว่าการที่มนุษย์ต้องประมวลผลทางเลือกจำนวนมาก 
              โดยไม่มีระบบช่วยจัดโครงสร้าง จะก่อให้เกิดความลังเลใจและความล่าช้า การมีคลังดิจิทัลที่คัดกรองชุดพร้อมใช้งานได้ทันที 
              จึงช่วยปลดล็อกภาระทางสมองในยามเช้าของนักเรียนได้อย่างชัดเจน
            </p>
          </div>

          <div className="p-4 bg-white border border-slate-200 rounded-xl space-y-2 indent-0 shadow-2xs">
            <h4 className="font-bold text-slate-900 text-sm">
              3. ความพึงพอใจในการจับคู่ชุดตามกฎ 60-30-10 และระเบียบวิทยาลัย (x̄ = 4.68)
            </h4>
            <p className="text-slate-600 leading-relaxed text-justify">
              การผสานกฎความกลมกลืน 60-30-10 ร่วมกับระเบียบเครื่องแบบนักเรียน วิทยาลัยเทคโนโลยีหมู่บ้านครู 
              ช่วยให้นักเรียนมีความมั่นใจในการแต่งกายมากขึ้น สอดคล้องกับงานวิจัยของ <strong>ณัฐพล และกัญญาพัชร (2567)</strong> 
              ที่พบว่าระบบผู้เชี่ยวชาญที่มีการกำหนดเงื่อนไขกฎระเบียบของสถานศึกษา จะช่วยสร้างความไว้วางใจให้กับผู้เรียนและผู้ปกครอง
            </p>
          </div>
        </div>
      </section>

      {/* 5.3 ข้อค้นพบจากการวิจัย */}
      <section id="section-5-3" className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 bg-indigo-600 text-white text-xs font-mono font-bold rounded-md">5.3</span>
          <h3 className="text-lg sm:text-xl font-bold font-serif text-slate-900">
            ข้อค้นพบจากการวิจัย (Key Research Discoveries)
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-serif">
          <div className="p-4 bg-indigo-50/50 border border-indigo-200 rounded-xl space-y-1.5 shadow-2xs">
            <span className="font-bold text-indigo-950 block">ข้อค้นพบที่ 1: การลดปัญหาเสื้อผ้าค้างตู้ (Dormant Clothes)</span>
            <p className="text-slate-600">
              ผู้เรียนร้อยละ 86.67 รายงานว่าค้นพบเสื้อผ้าที่ตนเองลืมไปแล้วว่ามีอยู่ และสามารถนำกลับมาสวมใส่หมุนเวียนได้เฉลี่ยเพิ่มขึ้นถึง 3-4 ชุดต่อสัปดาห์
            </p>
          </div>

          <div className="p-4 bg-indigo-50/50 border border-indigo-200 rounded-xl space-y-1.5 shadow-2xs">
            <span className="font-bold text-indigo-950 block">ข้อค้นพบที่ 2: ความสำคัญของการพรีวิวภาพเสมือน (Virtual Try-On)</span>
            <p className="text-slate-600">
              ฟังก์ชัน Virtual Try-On เป็นโมดูลที่ได้รับคะแนนความสนใจสูงสุด เนื่องจากช่วยลดความลังเลใจในการสวมใส่จริงได้มากที่สุด
            </p>
          </div>

          <div className="p-4 bg-indigo-50/50 border border-indigo-200 rounded-xl space-y-1.5 shadow-2xs">
            <span className="font-bold text-indigo-950 block">ข้อค้นพบที่ 3: บทบาทของการตั้งค่าตามกาลเทศะ</span>
            <p className="text-slate-600">
              นักเรียน ปวช. 3 ต้องการการคัดกรองชุดสำหรับการนำเสนอโครงงานธุรกิจดิจิทัลและวันพิธีการ ซึ่งระบบสามารถตอบโจทย์ได้ครบถ้วน
            </p>
          </div>

          <div className="p-4 bg-indigo-50/50 border border-indigo-200 rounded-xl space-y-1.5 shadow-2xs">
            <span className="font-bold text-indigo-950 block">ข้อค้นพบที่ 4: ความเสถียรบนอุปกรณ์พกพา</span>
            <p className="text-slate-600">
              การพัฒนาในรูปแบบ Web Application ช่วยให้นักเรียนสามารถเข้าถึงได้ทันทีโดยไม่ต้องดาวน์โหลดแอปพลิเคชันขนาดใหญ่
            </p>
          </div>
        </div>
      </section>

        {/* ตารางผลกระทบเชิงพัฒนาการและเศรษฐศาสตร์ */}
        <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
          <div className="font-bold text-slate-900 text-xs sm:text-sm">
            ตารางที่ 5.2: การวิเคราะห์ผลกระทบเชิงพัฒนาการและคุณค่าเพิ่ม (Developmental & Economic Impact Matrix)
          </div>
          <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white">
            <table className="w-full text-xs text-left font-serif">
              <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                <tr>
                  <th className="p-2.5">มิติการประเมินผลกระทบ</th>
                  <th className="p-2.5">สภาพก่อนมีระบบ</th>
                  <th className="p-2.5">สภาพหลังมีระบบ</th>
                  <th className="p-2.5">ผลลัพธ์เชิงประจักษ์</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr>
                  <td className="p-2 font-bold text-indigo-950">1. การบริหารเวลา (Time Management)</td>
                  <td className="p-2">ใช้เวลาเฉลี่ย 18.50 นาที/วัน</td>
                  <td className="p-2">ใช้เวลาเพียง 4.00 นาที/วัน</td>
                  <td className="p-2 text-emerald-700 font-bold">ประหยัดเวลาได้ 14.50 นาที/วัน (72.5 นาที/สัปดาห์)</td>
                </tr>
                <tr>
                  <td className="p-2 font-bold text-indigo-950">2. ด้านวินัยการแต่งกาย (Dress Code)</td>
                  <td className="p-2">พบการแต่งกายผิดระเบียบเฉลี่ย 21%</td>
                  <td className="p-2">การแต่งกายถูกต้องตามระเบียบ 100%</td>
                  <td className="p-2 text-emerald-700 font-bold">ลดอัตราการผิดระเบียบเป็นศูนย์ในกลุ่มทดลอง</td>
                </tr>
                <tr>
                  <td className="p-2 font-bold text-indigo-950">3. การใช้ทรัพยากรเสื้อผ้า (Sustainability)</td>
                  <td className="p-2">ใส่เสื้อผ้าซ้ำเดิม ลืมเสื้อผ้าก้นตู้</td>
                  <td className="p-2">หมุนเวียนสวมใส่ครบทุกชิ้น</td>
                  <td className="p-2 text-emerald-700 font-bold">นำเสื้อผ้าค้างตู้กลับมาใส่เพิ่ม 3-4 ชุด/สัปดาห์</td>
                </tr>
                <tr>
                  <td className="p-2 font-bold text-indigo-950">4. สภาวะจิตวิทยา (Cognitive Load)</td>
                  <td className="p-2">เกิดความเครียดและความเหนื่อยล้าตอนเช้า</td>
                  <td className="p-2">มั่นใจและพร้อมเริ่มกิจกรรมการเรียน</td>
                  <td className="p-2 text-emerald-700 font-bold">ลดภาวะ Decision Fatigue อย่างมีนัยสำคัญ</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 5.3.1 ข้อจำกัดของการวิจัย */}
        <div className="p-4 bg-amber-50/60 border border-amber-200 rounded-xl space-y-2 text-xs font-serif text-amber-950">
          <div className="font-bold text-sm">ข้อจำกัดของการวิจัย (Research Limitations)</div>
          <p className="leading-relaxed text-justify indent-6">
            1. การวิจัยครั้งนี้ศึกษาเฉพาะกลุ่มตัวอย่างนักเรียนระดับ ปวช. 3 สาขาวิชาเทคโนโลยีธุรกิจดิจิทัล วิทยาลัยเทคโนโลยีหมู่บ้านครู จำนวน 30 คน จึงอาจมีข้อจำกัดในการอ้างอิงสู่กลุ่มผู้เรียนสาขาวิชาช่างอุตสาหกรรมที่มีข้อกำหนดชุดช็อปฝึกงานแตกต่างออกไป<br />
            2. ประสิทธิภาพของการสแกนและตัดพื้นหลังรูปภาพขึ้นอยู่กับคุณภาพของกล้องสมาร์ตโฟนและสภาพแสงสว่างในห้องของผู้ใช้งาน หากสแกนในที่มืดอาจส่งผลต่อการตรวจจับฮิสโตแกรมสี<br />
            3. ระบบการลองชุดเสมือนจริงในปัจจุบันยังเป็นการแสดงผลแบบ 2 มิติ (2D Planar Superimposition) ยังไม่สามารถจำลองรอยยับและความพลิ้วไหวของเนื้อผ้าแบบ 3 มิติได้
          </p>
        </div>
      <section id="section-5-4" className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 bg-indigo-600 text-white text-xs font-mono font-bold rounded-md">5.4</span>
          <h3 className="text-lg sm:text-xl font-bold font-serif text-slate-900">
            ข้อเสนอแนะจากผลการวิจัย (การนำผลไปใช้จริง)
          </h3>
        </div>

        <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3 text-xs sm:text-sm font-serif text-slate-700">
          <div className="flex items-start gap-2">
            <span className="font-bold text-indigo-700">1. สำหรับสถานศึกษา:</span>
            <p className="text-slate-600">ควรนำระบบนี้ไปประชาสัมพันธ์หรือบรรจุเป็นเครื่องมือแนะนำการแต่งกายสำหรับนักเรียนใหม่ เพื่อสร้างเสริมระเบียบวินัยและภาพลักษณ์ที่ดีของสถาบัน</p>
          </div>
          <div className="flex items-start gap-2">
            <span className="font-bold text-indigo-700">2. สำหรับนักเรียน:</span>
            <p className="text-slate-600">ควรสแกนเสื้อผ้าอย่างสม่ำเสมอเมื่อมีการซื้อเสื้อผ้าใหม่ และปรับปรุงสถานะการซักรีด เพื่อให้ระบบสามารถแนะนำชุดที่พร้อมสวมใส่ได้อย่างแม่นยำ</p>
          </div>
          <div className="flex items-start gap-2">
            <span className="font-bold text-indigo-700">3. สำหรับผู้ปกครอง:</span>
            <p className="text-slate-600">ช่วยลดภาระค่าใช้จ่ายในการซื้อเสื้อผ้าซ้ำซ้อน เพราะบุตรหลานสามารถมองเห็นเสื้อผ้าทั้งหมดที่มีอยู่และนำมาจับคู่ได้หลากหลายสไตล์</p>
          </div>
        </div>
      </section>

      {/* 5.5 ข้อเสนอแนะสำหรับการวิจัยครั้งต่อไป */}
      <section id="section-5-5" className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 bg-indigo-600 text-white text-xs font-mono font-bold rounded-md">5.5</span>
          <h3 className="text-lg sm:text-xl font-bold font-serif text-slate-900">
            ข้อเสนอแนะสำหรับการวิจัยครั้งต่อไป (Future Research Directions)
          </h3>
        </div>

        <ul className="space-y-2 text-xs sm:text-sm font-serif text-slate-700 list-disc list-inside bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
          <li>ควรพัฒนาให้ระบบสามารถเชื่อมต่อกับสภาพอากาศแบบเรียลไทม์ (Weather API) เพื่อแนะนำเสื้อผ้าที่เหมาะสมกับอุณหภูมิและความชื้นของวันนั้น ๆ</li>
          <li>ควรเพิ่มระบบปัญญาประดิษฐ์สร้างสรรค์ (Generative AI) เพื่อสร้างภาพลองชุดแบบ 3 มิติ (3D Avatar) ที่มีความสมจริงของสรีระแต่ละบุคคล</li>
          <li>ควรขยายผลการวิจัยไปยังระดับประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.) และสาขาวิชาอื่น ๆ ภายในวิทยาลัยเทคโนโลยีหมู่บ้านครู</li>
        </ul>

        {/* รูปที่ 5.1 แผนที่การพัฒนาต่อยอดระบบ */}
        <div id="fig-5-1">
          <AcademicFigure
            number="รูปที่ 5.1"
            title="แผนที่การพัฒนาต่อยอดระบบในอนาคต (Future System Enhancement Roadmap 3 ระยะ)"
            description="ทิศทางการขยายผลนวัตกรรมจากระดับห้องเรียนสู่นวัตกรรมระดับอาชีวศึกษาเพื่อการใช้งานในวงกว้าง"
          >
            <div className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-3 gap-3 py-2 text-xs font-serif text-left">
              <div className="p-3 bg-white border border-slate-200 rounded-xl space-y-1">
                <span className="text-indigo-600 font-bold font-mono">ระยะที่ 1 (ปัจจุบัน)</span>
                <div className="font-bold text-slate-900">เว็บแอปพลิเคชัน 6 โมดูล</div>
                <p className="text-slate-500 text-[11px]">สแกน จับคู่สไตล์ 60-30-10 และลองชุดเสมือนจริง 2D</p>
              </div>

              <div className="p-3 bg-indigo-50 border border-indigo-200 rounded-xl space-y-1">
                <span className="text-indigo-700 font-bold font-mono">ระยะที่ 2 (6 เดือนข้างหน้า)</span>
                <div className="font-bold text-indigo-950">เชื่อมต่อ Weather & Calendar API</div>
                <p className="text-slate-600 text-[11px]">แนะนำชุดตามสภาพอากาศและตารางเรียนอัตโนมัติ</p>
              </div>

              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl space-y-1">
                <span className="text-emerald-700 font-bold font-mono">ระยะที่ 3 (1-2 ปีข้างหน้า)</span>
                <div className="font-bold text-emerald-950">3D Generative AI Fitting</div>
                <p className="text-slate-600 text-[11px]">หุ่นอวาตาร์ 3 มิติตามสัดส่วนจริง และขยายผลทั่วทั้งสถาบัน</p>
              </div>
            </div>
          </AcademicFigure>
        </div>
      </section>
    </div>
  );
};
