import React from 'react';
import { Figure2_4_TransformerFlow, Figure2_5_RAGArchitecture } from '../ReportFigures';
import { Cpu, Brain, Layers, ShieldCheck, Database, Terminal } from 'lucide-react';

export const Section2_4_LLM_RAG: React.FC = () => {
  return (
    <div id="section-2-4" className="space-y-5 pt-6 border-t border-slate-200">
      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2 font-serif">
        <span className="text-indigo-600 font-mono">2.4</span>
        <span>ปัญญาประดิษฐ์เชิงสร้างสรรค์ สถาปัตยกรรม RAG และวิศวกรรมคำสั่ง (Generative AI & RAG)</span>
      </h3>

      <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed text-justify">
        <p>
          หัวใจสำคัญที่ขับเคลื่อนระบบ Smart Closer AI คือแบบจำลองภาษาขนาดใหญ่ (Large Language Models - LLMs) 
          ซึ่งพัฒนาขึ้นบนรากฐานของสถาปัตยกรรม <strong>Transformer (Vaswani et al., 2017)</strong> 
          ความสามารถอันโดดเด่นของโมเดลภาษายุคใหม่ เช่น Google Gemini ไม่ได้จำกัดอยู่เพียงการจำคำศัพท์ 
          แต่ครอบคลุมถึงการเข้าใจบริบทสนทนาที่ซับซ้อน (Semantic & Pragmatic Comprehension) 
          การอนุมานเจตนาของผู้พูด (Intent Deduction) และการให้เหตุผลเชิงตรรกะแบบต่อเนื่อง (Multi-step Reasoning)
        </p>

        <h4 className="font-bold text-slate-900 text-base sm:text-lg mt-4">
          2.4.1 กลไก Multi-Head Self-Attention และการประมวลผลภาษาไทย
        </h4>
        <p>
          กลไก Self-Attention อนุญาตให้โมเดลสามารถคำนวณความสัมพันธ์ระหว่างคำทุกคำในประโยคพร้อมกัน 
          โดยกำหนดค่าน้ำหนัก Attention Weights ทำให้โมเดลสามารถจับความหมายของคำกำกวมในภาษาไทยได้เป็นอย่างดี 
          ตัวอย่างเช่น คำว่า "ติด" ในประโยค "ติดธุระ", "ติดใจบริการ", และ "ติดปัญหาเรื่องงบประมาณ" 
          โมเดลสามารถแยกแยะได้ว่าข้อความใดเป็นข้อโต้แย้งทางธุรกิจ และข้อความใดเป็นเพียงคำบอกเล่าทั่วไป
        </p>
      </div>

      {/* แทรกรูปที่ 2.4 */}
      <Figure2_4_TransformerFlow />

      <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed text-justify mt-5">
        <h4 className="font-bold text-slate-900 text-base sm:text-lg mt-4">
          2.4.2 วิศวกรรมคำสั่งแบบกำหนดบทบาท (Persona-based Prompt Engineering)
        </h4>
        <p>
          เพื่อให้ AI ปฏิบัติหน้าที่เสมือน "โค้ชและผู้ช่วยปิดการขายมืออาชีพ" ระบบได้ออกแบบคำสั่งระบบ (System Instructions) 
          ที่เข้มงวด โดยแบ่งโครงสร้างของ Prompt ออกเป็น 4 องค์ประกอบสำคัญ:
        </p>

        {/* Prompt Structure Code Box */}
        <div className="p-4 bg-slate-900 text-slate-200 rounded-xl font-mono text-xs shadow-inner space-y-2 border border-slate-800">
          <div className="text-emerald-400 font-bold text-[11px] flex items-center gap-1.5 border-b border-slate-800 pb-1.5">
            <Terminal className="w-3.5 h-3.5" />
            <span>ตัวอย่างโครงสร้างคำสั่งระดับระบบ (System Prompt Architecture Template)</span>
          </div>
          <div className="text-indigo-300"># ROLE & PERSONA</div>
          <div className="text-slate-300">
            คุณคือ "Smart Closer AI" ผู้เชี่ยวชาญการขายระดับแนวหน้า บุคลิก: สุภาพ มั่นใจ เป็นที่ปรึกษา (Consultative Closer)
          </div>
          <div className="text-indigo-300 mt-2"># BANT EXTRACTION RULE</div>
          <div className="text-slate-300">
            วิเคราะห์คำพูดลูกค้าเพื่อสกัด Budget, Authority, Need, Timeline และให้คะแนน 0-100 ในแต่ละมิติ
          </div>
          <div className="text-indigo-300 mt-2"># GUARDRAILS & BUSINESS BOUNDARIES</div>
          <div className="text-amber-300">
            - ห้ามลดราคาเกินโควตาสูงสุดที่ระบุไว้ในแคตตาล็อกสินค้าเด็ดขาด (Max Discount 15%)<br />
            - ห้ามให้สัญญาในสิ่งที่ระบบทำไม่ได้จริง (No False Promises)<br />
            - ทุกครั้งที่ตอบข้อโต้แย้ง ต้องจบด้วย Call-to-Action ที่ชัดเจน เช่น ขอเวลานัดโทร หรือเสนอร่างใบเสนอราคา
          </div>
        </div>

        <h4 className="font-bold text-slate-900 text-base sm:text-lg mt-5">
          2.4.3 สถาปัตยกรรม Context Injection และ Retrieval-Augmented Generation (RAG)
        </h4>
        <p>
          ปัญหาหลักของการใช้ LLM ในภาคธุรกิจคือ <strong>ภาพหลอน (Hallucination)</strong> 
          ซึ่งโมเดลอาจคิดค้นราคา เงื่อนไข หรือส่วนลดที่ไม่มีอยู่จริงขึ้นมาเอง 
          เพื่อแก้ไขปัญหานี้อย่างเด็ดขาด ระบบจึงใช้สถาปัตยกรรม <strong>Retrieval-Augmented Generation (RAG)</strong> 
          ผ่านการฉีดบริบทข้อมูล (Context Injection) แบบเรียลไทม์ 
          โดยดึงข้อมูลราคาปัจจุบันจากฐานข้อมูลแคตตาล็อกสินค้า สิทธิประโยชน์ของแถม และเพดานส่วนลดที่ได้รับอนุญาต 
          ส่งเป็นข้อเท็จจริงอ้างอิงควบคู่ไปกับคำถามของลูกค้า ทำให้ข้อความปิดการขายถูกต้องตามนโยบายบริษัท 100%
        </p>
      </div>

      {/* แทรกรูปที่ 2.5 */}
      <Figure2_5_RAGArchitecture />
    </div>
  );
};
