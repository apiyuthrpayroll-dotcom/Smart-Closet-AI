import React from 'react';
import { BookOpen, Tag } from 'lucide-react';

export const Section1_6_Definitions: React.FC = () => {
  const definitions = [
    {
      term: 'Smart Closet AI (ระบบตู้เสื้อผ้าอัจฉริยะ)',
      desc: 'ระบบสารสนเทศประยุกต์ที่ใช้ปัญญาประดิษฐ์ในการจัดการตู้เสื้อผ้าเสมือนจริง โดยมีความสามารถในการสแกนภาพถ่ายเสื้อผ้า ตรวจจับคุณลักษณะ บันทึกข้อมูลเข้าสู่ระบบอัตโนมัติ และประมวลผลแนะนำการแต่งกายที่เหมาะสมกับผู้ใช้งาน'
    },
    {
      term: 'Computer Vision (การมองเห็นของคอมพิวเตอร์)',
      desc: 'สาขาวิชาทางด้านวิทยาการคอมพิวเตอร์และปัญญาประดิษฐ์ที่มุ่งเน้นการทำให้คอมพิวเตอร์สามารถเข้าใจ รับรู้ และประมวลผลข้อมูลจากภาพนิ่งหรือภาพเคลื่อนไหวได้เทียบเท่าหรือเหนือกว่าการมองเห็นของมนุษย์'
    },
    {
      term: 'Clothing Segmentation (การตัดแยกส่วนของภาพเสื้อผ้า)',
      desc: 'กระบวนการแยกวัตถุชิ้นเสื้อผ้าออกจากภาพพื้นหลังหรือร่างกายมนุษย์ในระดับพิกเซล เพื่อให้ได้เฉพาะภาพของเสื้อผ้าชิ้นเดี่ยวที่สะอาดและพร้อมสำหรับการจัดเก็บและวิเคราะห์คุณลักษณะ'
    },
    {
      term: 'Feature Extraction (การสกัดคุณลักษณะ)',
      desc: 'กระบวนการแปลงข้อมูลภาพให้อยู่ในรูปแบบเวกเตอร์ตัวเลข (Numerical Vector Representation) ที่สามารถอธิบายลักษณะเด่นของเสื้อผ้า เช่น รูปทรง ชนิดปก ลายผ้า ความยาว และกลุ่มเฉดสี'
    },
    {
      term: 'Outfit Compatibility Score (คะแนนความเข้ากันได้ของชุด)',
      desc: 'ค่าดัชนีทางสถิติที่คำนวณจากความสอดคล้องของเสื้อผ้าหลายชิ้นเมื่อนำมารวมกันเป็นชุด โดยพิจารณาจากทฤษฎีคู่สี ความสมดุลของสไตล์ และความเหมาะสมต่อโอกาสการสวมใส่'
    },
    {
      term: 'Capsule Wardrobe (ตู้เสื้อผ้ามินิมอลทรงคุณค่า)',
      desc: 'แนวคิดการจัดระเบียบตู้เสื้อผ้าที่มุ่งเน้นการครอบครองเสื้อผ้าชิ้นคุณภาพจำนวนไม่มาก แต่สามารถนำมาจับคู่ผสมผสาน (Mix & Match) ได้หลากหลายสไตล์ ช่วยลดความสิ้นเปลืองและประหยัดเวลาในการแต่งกาย'
    },
    {
      term: 'Multimodal LLM (โมเดลภาษาขนาดใหญ่แบบหลายมิติ)',
      desc: 'โมเดลปัญญาประดิษฐ์ยุคใหม่ที่สามารถรับข้อมูลนำเข้าได้พร้อมกันทั้งข้อความและภาพ สามารถวิเคราะห์รูปภาพเสื้อผ้าและอธิบายหลักการจับคู่ชุดเป็นภาษาธรรมชาติได้อย่างสละสลวย'
    }
  ];

  return (
    <div id="section-1-6" className="space-y-5 pt-6 border-t border-slate-200">
      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2 font-serif">
        <span className="text-indigo-600 font-mono">1.6</span>
        <span>นิยามศัพท์เฉพาะ (Definition of Operational Terms)</span>
      </h3>

      <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed text-justify">
        <p>
          เพื่อสร้างความเข้าใจที่ตรงกันในเนื้อหาของเอกสารรายงานโครงงานวิจัยฉบับนี้ คณะผู้วิจัยได้กำหนดนิยามเชิงปฏิบัติการของคำศัพท์สำคัญไว้ดังนี้:
        </p>

        <div className="space-y-2.5 my-3">
          {definitions.map((item, idx) => (
            <div key={idx} className="p-3.5 bg-white rounded-xl border border-slate-200 shadow-2xs space-y-1">
              <div className="font-bold text-indigo-900 text-xs sm:text-sm flex items-center gap-2">
                <Tag className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                <span>{item.term}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-5">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
