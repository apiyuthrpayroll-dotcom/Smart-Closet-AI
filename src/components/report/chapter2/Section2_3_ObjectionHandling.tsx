import React from 'react';
import { Figure2_3_ObjectionTree } from '../ReportFigures';
import { Brain, Sparkles, AlertCircle, HeartHandshake, ShieldAlert, Award } from 'lucide-react';

export const Section2_3_ObjectionHandling: React.FC = () => {
  return (
    <div id="section-2-3" className="space-y-5 pt-6 border-t border-slate-200">
      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2 font-serif">
        <span className="text-indigo-600 font-mono">2.3</span>
        <span>จิตวิทยาการขาย การโน้มน้าวใจ และการขจัดข้อโต้แย้ง (Sales Psychology & Cognitive Objection Handling)</span>
      </h3>

      <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed text-justify">
        <p>
          ในทางพฤติกรรมศาสตร์ (Behavioral Science) การตัดสินใจซื้อของผู้บริโภคมิได้ตั้งอยู่บนตรรกะทางคณิตศาสตร์เพียงอย่างเดียว 
          แต่ขับเคลื่อนด้วยอารมณ์ความรู้สึก (Emotional Drivers) การรับรู้ความเสี่ยง (Risk Aversion) 
          และอคติทางความคิด (Cognitive Biases) ระบบ Smart Closer AI จึงได้บูรณาการทฤษฎีจิตวิทยาการโน้มน้าวใจ 
          เข้าเป็นส่วนหนึ่งของระบบกำกับคำสั่ง (System Prompting Logic) เพื่อให้คำแนะนำในการขจัดข้อโต้แย้งมีความเป็นมนุษย์ 
          สร้างความไว้วางใจ และบรรลุเป้าหมายการปิดการขายโดยไม่ก่อให้เกิดความรู้สึกถูกกดดัน
        </p>

        <h4 className="font-bold text-slate-900 text-base sm:text-lg mt-4">
          2.3.1 หลักอิทธิพล 6 ประการของ Cialdini (The 6 Principles of Persuasion)
        </h4>
        <p>
          งานวิจัยระดับคลาสสิกของ Robert Cialdini (2021) ได้จำแนกหลักการโน้มน้าวใจที่ทรงพลังที่สุด 6 ประการ 
          ซึ่งระบบ Smart Closer AI นำมาแปลงเป็นกลยุทธ์ในการสื่อสาร:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 my-3">
          <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
            <div className="font-bold text-indigo-900 text-xs flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
              <span>1. Reciprocity (การตอบแทนบุญคุณ)</span>
            </div>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              การให้คุณค่าแก่ลูกค้าก่อน เช่น มอบบทวิเคราะห์ระบบฟรี วิดีโอแนะนำ หรือสิทธิ์ทดลองใช้ 
              ส่งผลให้ลูกค้ารู้สึกมีพันธะทางจิตวิทยาในการพิจารณาข้อเสนอ
            </p>
          </div>

          <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
            <div className="font-bold text-indigo-900 text-xs flex items-center gap-1.5">
              <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
              <span>2. Scarcity (ความขาดแคลน & ขีดจำกัด)</span>
            </div>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              การสร้างความเร่งด่วนเชิงเหตุผล เช่น "โควตาส่วนลดพิเศษจำกัด 3 ท่านแรกของสัปดาห์นี้" 
              เพื่อกระตุ้นจิตวิทยา Fear of Missing Out (FOMO)
            </p>
          </div>

          <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
            <div className="font-bold text-indigo-900 text-xs flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-indigo-600" />
              <span>3. Authority (ความเชี่ยวชาญน่าเชื่อถือ)</span>
            </div>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              การอ้างอิงมาตรฐานทางวิศวกรรม รางวัลความปลอดภัย หรือใบรับรองระดับสากล 
              เพื่อขจัดความกังวลใจเรื่องความเสถียรของระบบ
            </p>
          </div>

          <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
            <div className="font-bold text-indigo-900 text-xs flex items-center gap-1.5">
              <HeartHandshake className="w-3.5 h-3.5 text-indigo-600" />
              <span>4. Consistency (ความสอดคล้องของคำพูด)</span>
            </div>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              การให้ลูกค้ายอมรับปัญหาเล็กๆ ก่อน (Micro-commitments) เช่น "คุณต้องการเพิ่มยอดขาย 20% ใช่ไหมครับ" 
              เพื่อให้การตัดสินใจขั้นสุดท้ายสอดคล้องกับเจตนาเดิม
            </p>
          </div>

          <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
            <div className="font-bold text-indigo-900 text-xs flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
              <span>5. Social Proof (หลักฐานทางสังคม)</span>
            </div>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              การระบุว่าธุรกิจชั้นนำในอุตสาหกรรมเดียวกันมากกว่า 500 แห่งเลือกใช้ 
              ช่วยลดความกลัวในการเป็น "หนูลองยา" ของผู้ซื้อ
            </p>
          </div>

          <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
            <div className="font-bold text-indigo-900 text-xs flex items-center gap-1.5">
              <HeartHandshake className="w-3.5 h-3.5 text-indigo-600" />
              <span>6. Liking (ความเห็นอกเห็นใจและไมตรี)</span>
            </div>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              การใช้น้ำเสียงเป็นมิตร รับฟังปัญหา และใช้ภาษาที่เข้าใจง่ายตรงกับกลุ่มเป้าหมาย (Rapport Building)
            </p>
          </div>
        </div>

        <h4 className="font-bold text-slate-900 text-base sm:text-lg mt-5">
          2.3.2 ทฤษฎีความคาดหวัง (Prospect Theory) และผลของการปักหมุดราคา (Price Anchoring)
        </h4>
        <p>
          อ้างอิงงานวิจัยรางวัลโนเบลของ Kahneman & Tversky (1979) มนุษย์มีความรู้สึกเจ็บปวดต่อการสูญเสีย (Loss Aversion) 
          มากกว่าความสุขจากการได้มาถึง 2 ถึง 2.5 เท่า ระบบ Smart Closer AI จึงนำเสนอข้อเสนอโดยเน้นย้ำถึง 
          <strong>"ต้นทุนของการไม่ลงมือทำ" (Cost of Inaction)</strong> มากกว่าแค่การอวดอ้างคุณสมบัติของระบบ 
          ตัวอย่างเช่น แทนที่จะบอกว่า "ระบบนี้ช่วยเพิ่มยอดขาย 50,000 บาท" AI จะเสนอว่า 
          "การที่แอดมินตอบช้าทำให้คุณสูญเสียยอดขายที่ควรจะได้ไปเดือนละกว่า 80,000 บาท ซึ่งระบบของเราจะช่วยอุดรอยรั่วนี้ทันที"
        </p>

        <h4 className="font-bold text-slate-900 text-base sm:text-lg mt-5">
          2.3.3 อนุกรมวิธานของข้อโต้แย้ง (Taxonomy of Customer Objections)
        </h4>
        <p>
          ข้อโต้แย้งของลูกค้า (Customer Objections) สามารถจัดหมวดหมู่ออกเป็น 4 กลุ่มหลัก ได้แก่:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
          <li><strong>Price Objection (ข้อโต้แย้งเรื่องราคา):</strong> "แพงเกินไป", "ไม่มีงบ", "เทียบกับเจ้าอื่นแล้วราคาสูงกว่า"</li>
          <li><strong>Delay / Timing Objection (ข้อโต้แย้งเรื่องเวลา):</strong> "ขอคิดดูก่อน", "ยังไม่รีบ", "ไว้เดือนหน้าค่อยคุย"</li>
          <li><strong>Authority Objection (ข้อโต้แย้งเรื่องอำนาจ):</strong> "ต้องปรึกษาหุ้นส่วนก่อน", "ต้องเสนอผู้ใหญ่ในที่ประชุม"</li>
          <li><strong>Trust / Capability Objection (ข้อโต้แย้งเรื่องความมั่นใจ):</strong> "กลัวใช้ยาก", "พนักงานจะไม่ยอมใช้", "จะเห็นผลจริงไหม"</li>
        </ul>

        <h4 className="font-bold text-slate-900 text-base sm:text-lg mt-5">
          2.3.4 กรอบเทคนิค Feel-Felt-Found และ Value Pivot
        </h4>
        <p>
          เพื่อจัดการข้อโต้แย้งอย่างละมุนละม่อม ระบบใช้เทคนิค <strong>Feel-Felt-Found</strong> ประกอบด้วย 3 ขั้นตอน:
          (1) <em>Feel:</em> แสดงความเข้าใจและเห็นอกเห็นใจต่อมุมมองของลูกค้า, 
          (2) <em>Felt:</em> ยกตัวอย่างลูกค้ารายอื่นที่เคยมีความกังวลใจในลักษณะเดียวกันมาก่อน, 
          และ (3) <em>Found:</em> อธิบายสิ่งที่ลูกค้ารายนั้นค้นพบหลังจากตัดสินใจใช้ระบบจริง ว่าความคุ้มค่าและผลตอบแทน ROI 
          ชดเชยต้นทุนราคาเริ่มต้นได้อย่างรวดเร็ว
        </p>
      </div>

      {/* แทรกรูปที่ 2.3 */}
      <Figure2_3_ObjectionTree />
    </div>
  );
};
