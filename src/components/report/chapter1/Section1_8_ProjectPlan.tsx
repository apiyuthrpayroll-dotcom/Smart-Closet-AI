import React from 'react';
import { Figure1_2_GanttChart } from '../ReportFigures';
import { Calendar, CheckCircle2 } from 'lucide-react';

export const Section1_8_ProjectPlan: React.FC = () => {
  return (
    <div id="section-1-8" className="space-y-5 pt-6 border-t border-slate-200">
      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2 font-serif">
        <span className="text-indigo-600 font-mono">1.8</span>
        <span>แผนการดำเนินงานและกรอบระยะเวลาของโครงงาน (Project Work Plan & Timeline)</span>
      </h3>

      <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed text-justify">
        <p>
          โครงงานวิจัยและพัฒนานี้มีกรอบระยะเวลาดำเนินงานรวม 10 เดือน (ครอบคลุม 2 ภาคการศึกษา) 
          โดยแบ่งขั้นตอนการดำเนินงานออกเป็น 4 ระยะหลัก (4 Phases) รวม 8 กิจกรรมสำคัญ:
        </p>

        {/* ตารางแผนการดำเนินงานเชิงวิชาการ */}
        <div className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-2xs my-3">
          <div className="bg-slate-100 px-4 py-2.5 border-b border-slate-200 font-bold text-xs text-slate-800 flex items-center justify-between">
            <span>ตารางที่ 1.1: แผนการดำเนินงานวิจัยและพัฒนาระบบตลอดระยะเวลา 10 เดือน</span>
            <span className="font-mono text-[10px] text-slate-500">Academic Year 2025-2026</span>
          </div>
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-700">
                <th className="p-3 w-16 text-center">ระยะที่</th>
                <th className="p-3">กิจกรรมการดำเนินงาน</th>
                <th className="p-3 text-center">ช่วงระยะเวลา</th>
                <th className="p-3">ผลผลิตที่ได้ (Deliverables)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr>
                <td className="p-3 text-center font-bold text-indigo-700 font-mono">Phase 1</td>
                <td className="p-3">
                  <strong>1. การศึกษาและรวบรวมข้อมูล:</strong> ทบทวนวรรณกรรม งานวิจัยที่เกี่ยวข้อง และสำรวจความต้องการของผู้ใช้
                </td>
                <td className="p-3 text-center font-mono text-[11px]">เดือนที่ 1 - 2</td>
                <td className="p-3 text-slate-600">เอกสารข้อกำหนดความต้องการ (SRS) และรายงานบทที่ 1-2</td>
              </tr>
              <tr>
                <td className="p-3 text-center font-bold text-indigo-700 font-mono">Phase 2</td>
                <td className="p-3">
                  <strong>2. การออกแบบและจัดเตรียมข้อมูล:</strong> ออกแบบ UI/UX, สถาปัตยกรรมระบบ, และรวบรวมภาพชุดข้อมูลเสื้อผ้า
                </td>
                <td className="p-3 text-center font-mono text-[11px]">เดือนที่ 3 - 4</td>
                <td className="p-3 text-slate-600">Wireframe Mockup, ER Diagram, และ Annotated Dataset</td>
              </tr>
              <tr>
                <td className="p-3 text-center font-bold text-indigo-700 font-mono">Phase 3</td>
                <td className="p-3">
                  <strong>3. การพัฒนาระบบและโมเดล AI:</strong> พัฒนาโปรแกรมส่วนหน้า ส่วนบริการ API และฝึกฝนโมเดล Computer Vision
                </td>
                <td className="p-3 text-center font-mono text-[11px]">เดือนที่ 5 - 7</td>
                <td className="p-3 text-slate-600">ซอฟต์แวร์ต้นแบบ (System Prototype) และระบบ Recommendation</td>
              </tr>
              <tr>
                <td className="p-3 text-center font-bold text-indigo-700 font-mono">Phase 4</td>
                <td className="p-3">
                  <strong>4. การทดสอบ ประเมินผล และจัดทำรายงาน:</strong> ทดสอบประสิทธิภาพ ทดสอบ UAT กับกลุ่มตัวอย่าง และส่งมอบรูปเล่ม
                </td>
                <td className="p-3 text-center font-mono text-[11px]">เดือนที่ 8 - 10</td>
                <td className="p-3 text-slate-600">ผลการประเมินความพึงพอใจ และรายงานวิจัยฉบับสมบูรณ์ 5 บท</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* รูปที่ 1.2 Gantt Chart */}
        <Figure1_2_GanttChart />
      </div>
    </div>
  );
};
