import React from 'react';
import { Award, Users, TrendingUp, Sparkles, CheckCircle2 } from 'lucide-react';

export const Section1_7_Benefits: React.FC = () => {
  return (
    <div id="section-1-7" className="space-y-5 pt-6 border-t border-slate-200">
      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2 font-serif">
        <span className="text-indigo-600 font-mono">1.7</span>
        <span>ประโยชน์ที่คาดว่าจะได้รับ (Expected Benefits)</span>
      </h3>

      <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed text-justify">
        <p>
          ผลลัพธ์จากการวิจัยและพัฒนาระบบ Smart Closet AI ก่อให้เกิดประโยชน์ทั้งในระดับบุคคล สังคม เศรษฐกิจ และทางวิชาการ ดังต่อไปนี้:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 my-3">
          {/* ประโยชน์ต่อผู้ใช้งาน */}
          <div className="p-4 bg-indigo-50/60 rounded-xl border border-indigo-200 space-y-2">
            <div className="flex items-center gap-2 text-indigo-950 font-bold text-sm border-b border-indigo-200 pb-1.5">
              <Users className="w-4 h-4 text-indigo-600" />
              <span>1. ประโยชน์ต่อผู้ใช้งานโดยตรง</span>
            </div>
            <ul className="space-y-1.5 text-xs text-indigo-900/90 leading-relaxed">
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>ประหยัดเวลาในการเตรียมตัวและเลือกชุดแต่งกายในแต่ละวันลงได้มากกว่าร้อยละ 70</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>เพิ่มความมั่นใจในการพัฒนาบุคลิกภาพและการแต่งกายที่เหมาะสมกับกาลเทศะ</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>มีระบบบัญชีตู้เสื้อผ้าส่วนตัวที่สามารถตรวจสอบได้ทุกที่ ทุกเวลา ผ่านอุปกรณ์เคลื่อนที่</span>
              </li>
            </ul>
          </div>

          {/* ประโยชน์ด้านเศรษฐกิจและสิ่งแวดล้อม */}
          <div className="p-4 bg-emerald-50/60 rounded-xl border border-emerald-200 space-y-2">
            <div className="flex items-center gap-2 text-emerald-950 font-bold text-sm border-b border-emerald-200 pb-1.5">
              <TrendingUp className="w-4 h-4 text-emerald-700" />
              <span>2. ด้านเศรษฐกิจ & สิ่งแวดล้อม</span>
            </div>
            <ul className="space-y-1.5 text-xs text-emerald-900/90 leading-relaxed">
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>ลดปัญหาการซื้อเสื้อผ้าซ้ำซ้อน ช่วยประหยัดค่าใช้จ่ายส่วนบุคคล</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>ส่งเสริมแนวคิด Sustainable Fashion และ Capsule Wardrobe โดยการหมุนเวียนใส่เสื้อผ้าเดิมอย่างคุ้มค่า</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>ช่วยลดขยะสิ่งทอ (Textile Waste) ที่ส่งผลกระทบต่อสิ่งแวดล้อม</span>
              </li>
            </ul>
          </div>

          {/* ประโยชน์ทางวิชาการ */}
          <div className="p-4 bg-purple-50/60 rounded-xl border border-purple-200 space-y-2">
            <div className="flex items-center gap-2 text-purple-950 font-bold text-sm border-b border-purple-200 pb-1.5">
              <Award className="w-4 h-4 text-purple-700" />
              <span>3. ด้านวิชาการ & เทคโนโลยี</span>
            </div>
            <ul className="space-y-1.5 text-xs text-purple-900/90 leading-relaxed">
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>เป็นต้นแบบองค์ความรู้การบูรณาการ Computer Vision และ LLM ในการประยุกต์ใช้งานเชิงพาณิชย์</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>ได้แนวทางการออกแบบส่วนต่อประสานผู้ใช้ (UI/UX) ที่เหมาะสมกับการจัดการข้อมูลภาพขนาดใหญ่</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>เป็นแนวทางสำหรับการพัฒนาต่อยอดสู่ระบบ Smart Retail และ Virtual Fitting Room ในอนาคต</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
