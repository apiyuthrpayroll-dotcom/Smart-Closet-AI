import React from 'react';
import { Figure1_1_ProblemContext } from '../ReportFigures';
import { Sparkles, AlertTriangle, Lightbulb, Clock, CheckCircle2 } from 'lucide-react';

export const Section1_1_Background: React.FC = () => {
  return (
    <div id="section-1-1" className="space-y-5 pt-6 border-t border-slate-200">
      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2 font-serif">
        <span className="text-indigo-600 font-mono">1.1</span>
        <span>ความเป็นมาและความสำคัญของปัญหา (Background & Significance of the Problem)</span>
      </h3>

      <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed text-justify">
        <p>
          ปัจจุบันเทคโนโลยีดิจิทัลและปัญญาประดิษฐ์ (Artificial Intelligence: AI) ได้เข้ามามีบทบาทสำคัญในการอำนวยความสะดวกในชีวิตประจำวันของมนุษย์มากขึ้นอย่างก้าวกระโดด 
          โดยเฉพาะอย่างยิ่งการพัฒนาด้านการมองเห็นของคอมพิวเตอร์ (Computer Vision), การประมวลผลภาษาธรรมชาติ (Natural Language Processing: NLP), 
          และการเรียนรู้เชิงลึก (Deep Learning) ส่งผลให้การจัดการข้อมูลขนาดใหญ่และการจดจำคุณลักษณะทางภาพ (Image Recognition & Feature Extraction) 
          สามารถทำได้อย่างรวดเร็ว แม่นยำ และช่วยลดขั้นตอนการทำงานที่ซ้ำซ้อนได้อย่างมีนัยสำคัญ
        </p>

        <p>
          ในบริบทการดำเนินชีวิตยุคปัจจุบัน พฤติกรรมการบริโภคและการจัดการสิ่งของเครื่องใช้ส่วนตัว โดยเฉพาะ <strong>"เสื้อผ้า เครื่องแต่งกาย และสินค้าแฟชั่น"</strong> 
          กำลังเผชิญกับปัญหาและความท้าทายหลายมิติ การเติบโตของอุตสาหกรรม Fast Fashion และการซื้อสินค้าผ่านช่องทางออนไลน์ (E-Commerce) ส่งผลให้ผู้บริโภคมีจำนวนเสื้อผ้าสะสมอยู่ในตู้เสื้อผ้าเป็นจำนวนมาก 
          จากการสำรวจและงานวิจัยพฤติกรรมผู้บริโภคระดับสากลพบว่า:
        </p>

        {/* สถิติและบริบทปัญหา 3 ด้าน */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-3">
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1.5">
            <div className="flex items-center gap-1.5 text-rose-700 font-bold text-xs">
              <Clock className="w-4 h-4" />
              <span>ความสูญเสียด้านเวลา (Time Wasted)</span>
            </div>
            <div className="text-xl font-bold text-slate-900 font-mono">17-20 นาที/วัน</div>
            <p className="text-xs text-slate-600 leading-relaxed">
              เวลาเฉลี่ยที่คนทั่วไปใช้ในการยืนเลือกและตัดสินใจจับคู่ชุดเสื้อผ้าในแต่ละเช้า เกิดภาวะ Decision Fatigue ก่อนเริ่มต้นการทำงาน
            </p>
          </div>

          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1.5">
            <div className="flex items-center gap-1.5 text-amber-700 font-bold text-xs">
              <AlertTriangle className="w-4 h-4" />
              <span>เสื้อผ้าที่ไม่ถูกนำมาสวมใส่ (Dormant Wardrobe)</span>
            </div>
            <div className="text-xl font-bold text-slate-900 font-mono">50% - 65%</div>
            <p className="text-xs text-slate-600 leading-relaxed">
              สัดส่วนของเสื้อผ้าในตู้ที่ถูกแขวนทิ้งไว้โดยไม่เคยหยิบมาใช้งานซ้ำเกิน 6 เดือน เนื่องจากจำไม่ได้ว่ามีอยู่ หรือไม่รู้วิธีแมตช์เข้าชุด
            </p>
          </div>

          <div className="p-4 bg-indigo-50/70 rounded-xl border border-indigo-200 space-y-1.5">
            <div className="flex items-center gap-1.5 text-indigo-700 font-bold text-xs">
              <Lightbulb className="w-4 h-4" />
              <span>การซื้อซ้ำซ้อน (Redundant Purchases)</span>
            </div>
            <div className="text-xl font-bold text-indigo-950 font-mono">30% - 40%</div>
            <p className="text-xs text-indigo-900/80 leading-relaxed">
              ผู้บริโภคมีแนวโน้มที่จะซื้อเสื้อผ้าที่มีแบบ สี หรือลักษณะใกล้เคียงกับของเดิมที่มีอยู่แล้วในตู้ เนื่องจากขาดระบบบันทึกและตรวจสอบข้อมูล
            </p>
          </div>
        </div>

        <p>
          ปัญหาหลักที่เกิดขึ้นจากการจัดการตู้เสื้อผ้าแบบดั้งเดิม (Manual Wardrobe Management) สามารถจำแนกได้เป็น 3 ประเด็นสำคัญ:
        </p>

        <ol className="list-decimal pl-5 space-y-2 text-sm">
          <li>
            <strong>ปัญหาการขาดระบบบัญชีรายการสิ่งของ (Lack of Cataloging & Visibility):</strong> 
            ผู้ใช้งานไม่มีรายการภาพหรือฐานข้อมูลของเสื้อผ้าที่ตนเองครอบครอง ทำให้ไม่สามารถมองเห็นภาพรวมของตู้เสื้อผ้าได้อย่างครบถ้วน 
            ส่งผลให้เกิดการหยิบใส่เฉพาะเสื้อผ้าตัวเดิมที่วางอยู่ด้านหน้า
          </li>
          <li>
            <strong>ปัญหาความยากลำบากในการจับคู่และค้นหา (Difficulty in Matching & Searching):</strong> 
            การจับคู่เสื้อผ้าให้เหมาะสมกับโอกาสการใช้งาน (Occasion), กาลเทศะ, สภาพอากาศ, และความกลมกลืนของสี (Color Harmony) 
            ต้องอาศัยทักษะความรู้ด้านแฟชั่น ซึ่งผู้ใช้งานส่วนใหญ่ไม่มั่นใจในการจับคู่สไตล์ด้วยตนเอง
          </li>
          <li>
            <strong>ภาระในการกรอกข้อมูลด้วยตนเอง (Manual Data Entry Burden):</strong> 
            แม้จะมีความพยายามในการใช้แอปพลิเคชันบันทึกข้อมูลทั่วไป แต่ผู้ใช้มักล้มเลิกเนื่องจากต้องพิมพ์กรอกข้อมูล สี ชนิดผ้า แบรนด์ และประเภททีละรายการด้วยตนเอง ซึ่งใช้เวลานานและไม่สะดวก
          </li>
        </ol>

        <p>
          จากสภาพปัญหาและความก้าวหน้าของเทคโนโลยีดังกล่าว คณะผู้วิจัยจึงได้เล็งเห็นถึงโอกาสในการนำเทคโนโลยีปัญญาประดิษฐ์ 
          โดยเฉพาะการผสานความสามารถของ <strong>Computer Vision (การตรวจจับและรู้จำภาพเสื้อผ้า)</strong> ร่วมกับ 
          <strong>Large Language Models และ Recommender Systems (ระบบให้เหตุผลและแนะนำสไตล์การแต่งกายอัจฉริยะ)</strong> 
          มาพัฒนาเป็น <strong>"ระบบตู้เสื้อผ้าอัจฉริยะด้วยปัญญาประดิษฐ์ (Smart Closet AI)"</strong> 
          เพื่อให้ผู้ใช้งานสามารถถ่ายภาพเสื้อผ้า ระบบจะทำการสแกน ตัดแยก ตรวจจับคุณลักษณะ บันทึกข้อมูลเข้าสู่ฐานข้อมูลอัตโนมัติ 
          พร้อมทั้งวิเคราะห์และแนะนำชุดแต่งกายที่เข้ากันได้อย่างมีหลักการ เป็นการประหยัดเวลา เพิ่มความมั่นใจ และส่งเสริมการใช้ทรัพยากรเสื้อผ้าให้เกิดความคุ้มค่าสูงสุด
        </p>

        {/* แผนภาพประกอบ 1.1 */}
        <Figure1_1_ProblemContext />
      </div>
    </div>
  );
};
