import React from 'react';
import { 
  Figure3_1_ScanLead, 
  Figure3_2_AutoClassification, 
  Figure3_3_KnowledgeVault, 
  Figure3_5_PitchRecommendation 
} from '../ReportFigures';
import { Database, MessageSquareCode, Sparkles, Filter, SlidersHorizontal, CheckCircle2, Bot, Layers } from 'lucide-react';

export const Section3_4_DataPipeline: React.FC = () => {
  return (
    <div id="section-3-4" className="space-y-5 pt-6 border-t border-slate-200">
      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2 font-serif">
        <span className="text-indigo-600 font-mono">3.4</span>
        <span>ขั้นตอนกระบวนการทำงานและการประมวลผลข้อมูลปัญญาประดิษฐ์ (System Workflow & AI Pipeline Processing)</span>
      </h3>

      <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed text-justify">
        <p>
          ประสิทธิภาพการปิดการขายของระบบ <strong>Smart Closer AI</strong> ขับเคลื่อนด้วยกระบวนการจัดการข้อมูลการขายแบบรอบด้าน (End-to-End Sales AI Pipeline) 
          ที่เปลี่ยนข้อความสนทนาดิบ (Raw Conversation) จากช่องทางแชทและเสียง ให้กลายเป็นข้อมูลเชิงกลยุทธ์ที่นำไปสู่การปิดการขายได้จริง 
          โดยแบ่งขั้นตอนการประมวลผลออกเป็น 4 ลำดับขั้นสำคัญ ดังต่อไปนี้:
        </p>

        {/* 4 ขั้นตอนของ Pipeline */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2.5 my-3">
          <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-2xs space-y-1.5">
            <div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-xs">
              1
            </div>
            <strong className="text-xs text-slate-900 block font-semibold">การสแกนและรับเข้าข้อมูล (Lead Ingestion & Scan)</strong>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              รับข้อมูลแชทลูกค้าจาก LINE OA, Facebook Messenger และเสียงสด สกัดเอนทิตี (ชื่อ, งบ, ปัญหา, ความต้องการ) ด้วยความเร็วต่ำกว่า 20ms
            </p>
          </div>

          <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-2xs space-y-1.5">
            <div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-xs">
              2
            </div>
            <strong className="text-xs text-slate-900 block font-semibold">การจัดหมวดหมู่อัตโนมัติ (Auto Classification)</strong>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              จำแนกข้อโต้แย้ง 3 มิติหลัก (ราคา, คู่แข่ง, เวลา) พร้อมประเมินระดับอารมณ์ความพร้อมของลูกค้าด้วยความแม่นยำสูงกว่า 96%
            </p>
          </div>

          <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-2xs space-y-1.5">
            <div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-xs">
              3
            </div>
            <strong className="text-xs text-slate-900 block font-semibold">การดึงคลังความรู้การขาย (Knowledge Retrieval)</strong>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              สืบค้นแคตตาล็อกสินค้า, กฎเพดานส่วนลดที่อนุมัติ, และข้อโต้แย้งแก้เกมที่เคยปิดดีลสำเร็จจาก Sales Vault เพื่อสร้างบริบทคำตอบ
            </p>
          </div>

          <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-2xs space-y-1.5">
            <div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-xs">
              4
            </div>
            <strong className="text-xs text-slate-900 block font-semibold">การสังเคราะห์สคริปต์ปิดการขาย (Pitch Synthesis)</strong>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              โมเดล Gemini สร้างสคริปต์ตอบกลับ 3 ตัวเลือกตามหลักจิตวิทยา (Value De-framing, Empathy, Urgency) ให้เซลส์คัดลอกส่งได้ทันที
            </p>
          </div>
        </div>

        {/* 3.4.1 สแกนและรับเข้าข้อมูล */}
        <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-6">
          3.4.1 การสแกนและรับเข้าข้อมูลลูกค้า/บทสนทนา (Lead & Conversation Ingestion / Scan)
        </h4>
        <p>
          เมื่อมีข้อความทักทายหรือคำถามจากลูกค้าขาเข้าผ่านระบบ Webhook ระบบจะประมวลผลข้อความด้วย Semantic Parser เพื่อระบุตำแหน่งตัวตน 
          ขนาดขององค์กรลูกค้า ความกังวลเบื้องต้น และผลิตภัณฑ์ที่ลูกค้ากำลังให้ความสนใจ ดังแสดงในภาพประกอบที่ 3.1:
        </p>

        {/* รูปที่ 3.1 สแกนลูกค้า */}
        <Figure3_1_ScanLead />

        {/* 3.4.2 การจัดหมวดหมู่อัตโนมัติ */}
        <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-6">
          3.4.2 การจำแนกข้อโต้แย้งและเจตนาของลูกค้าโดยอัตโนมัติ (Auto Classification & Intent Diagnosis)
        </h4>
        <p>
          ข้อโต้แย้งของลูกค้ามักแฝงอยู่ภายใต้คำพูดที่ไม่ตรงไปตรงมา ระบบจึงใช้ Multi-Head Attention Classifier วิเคราะห์ 3 มิติ ได้แก่ 
          ข้อโต้แย้งด้านราคา (Price Objection), ข้อโต้แย้งเปรียบเทียบคู่แข่ง (Competitor Comparison), และสภาวะอารมณ์ความพร้อมในการตัดสินใจ (Hesitation & Buying Readiness) 
          พร้อมกำหนดแนวทางปฏิบัติตามทฤษฎีจิตวิทยาการขาย ดังแสดงในภาพประกอบที่ 3.2:
        </p>

        {/* รูปที่ 3.2 จัดหมวดหมู่อัตโนมัติ */}
        <Figure3_2_AutoClassification />

        {/* 3.4.3 คลังความรู้และฐานข้อมูลลูกค้าแบบไดนามิก */}
        <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-6">
          3.4.3 คลังความรู้และฐานข้อมูลลูกค้าแบบไดนามิก (Dynamic Sales Knowledge & Lead Vault)
        </h4>
        <p>
          เพื่อป้องกันไม่ให้ปัญญาประดิษฐ์สร้างข้อมูลที่ผิดพลาด (Hallucination) หรือเสนอส่วนลดเกินเพดานที่บริษัทอนุญาต 
          ระบบได้เชื่อมโยงเข้ากับคลังจัดเก็บข้อมูลสินค้าและกฎระเบียบการขาย (Sales Knowledge & Product Catalog Vault) 
          ซึ่งประกอบด้วยรายละเอียดแพ็กเกจสินค้า, เมทริกซ์ส่วนลดที่พนักงานขายมีอำนาจอนุมัติได้เอง (สูงสุด 15%), 
          บทสนทนาอ้างอิงความสำเร็จ (Case Studies), และเงื่อนไขข้อเสนอเร่งการตัดสินใจ ดังแสดงในภาพประกอบที่ 3.3:
        </p>

        {/* รูปที่ 3.3 คลังความรู้ */}
        <Figure3_3_KnowledgeVault />

        {/* 3.4.4 ค้นหากลยุทธ์จิตวิทยาและเสนอแนะสคริปต์ปิดการขาย */}
        <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-6">
          3.4.4 การค้นหากลยุทธ์จิตวิทยาและเสนอแนะสคริปต์ปิดการขาย (Cognitive Strategy & Pitch Recommendation)
        </h4>
        <p>
          จากการวินิจฉัยข้อโต้แย้งและคลังความรู้ ระบบ AI Copilot จะนำข้อมูลมาผ่านกระบวนการ Prompt Augmentation เพื่อสังเคราะห์ 
          <strong>สคริปต์ปิดการขายแบบพร้อมใช้งาน 3 ทางเลือก</strong> โดยมีตัวเลือกที่แนะนำสูงสุด (Best Match) ที่ใช้เทคนิค 
          <em>Value & ROI De-framing</em> แตกราคาสินค้าเป็นรายวันต่อคน พร้อมปุ่มคัดลอกสคริปต์ (One-Click Copy) 
          เพื่อส่งต่อเข้าห้องแชทของลูกค้าได้ทันที ดังแสดงในภาพประกอบที่ 3.5:
        </p>

        {/* รูปที่ 3.5 เสนอแนะสคริปต์ */}
        <Figure3_5_PitchRecommendation />

        {/* ตารางเปรียบเทียบการประมวลผลข้อมูล */}
        <div className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-2xs my-4">
          <div className="bg-slate-100 px-4 py-2.5 border-b border-slate-200 font-bold text-xs text-slate-800">
            ตารางที่ 3.2: เมทริกซ์การจำแนกข้อโต้แย้งและกลยุทธ์จิตวิทยาที่ระบบ Smart Closer AI เลือกใช้
          </div>
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-700">
                <th className="p-2.5">ประเภทข้อโต้แย้ง (Objection)</th>
                <th className="p-2.5">คำสำคัญตรวจจับ (Keywords)</th>
                <th className="p-2.5">กลยุทธ์จิตวิทยาการขาย (Psychology Strategy)</th>
                <th className="p-2.5 text-center">อัตราความสำเร็จเฉลี่ย</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr>
                <td className="p-2.5 font-medium text-rose-700">1. งบประมาณ / ราคาสูง (Price & Budget)</td>
                <td className="p-2.5 text-slate-600">แพงกว่าเจ้าอื่น, เกินงบ, ลดได้ไหม</td>
                <td className="p-2.5 font-medium">Value De-framing (แตกเป็นรายวัน) + Guarantee ROI</td>
                <td className="p-2.5 text-center font-mono font-bold text-emerald-600">78.5%</td>
              </tr>
              <tr>
                <td className="p-2.5 font-medium text-amber-700">2. เปรียบเทียบคู่แข่ง (Competitor Compare)</td>
                <td className="p-2.5 text-slate-600">เทียบกับแบรนด์อื่น, เจ้านั้นถูกกว่า</td>
                <td className="p-2.5 font-medium">Feature Matrix Focus + Social Proof Case Studies</td>
                <td className="p-2.5 text-center font-mono font-bold text-emerald-600">82.1%</td>
              </tr>
              <tr>
                <td className="p-2.5 font-medium text-indigo-700">3. ขอปรึกษาทีมก่อน (Authority & Delay)</td>
                <td className="p-2.5 text-slate-600">ถามเจ้านายก่อน, ประชุมสัปดาห์หน้า</td>
                <td className="p-2.5 font-medium">One-Page Executive Summary + Free Trial Pilot</td>
                <td className="p-2.5 text-center font-mono font-bold text-emerald-600">74.6%</td>
              </tr>
              <tr>
                <td className="p-2.5 font-medium text-purple-700">4. เวลา / ความลังเล (Hesitation & Time)</td>
                <td className="p-2.5 text-slate-600">ยังไม่รีบ, ดูไว้ก่อน, ไว้ค่อยติดต่อใหม่</td>
                <td className="p-2.5 font-medium">Urgency Incentive (โควตาส่วนลดจำกัดเวลา)</td>
                <td className="p-2.5 text-center font-mono font-bold text-emerald-600">81.0%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
