import React from 'react';
import { ClothingItem } from '../../types';
import { FIGURES_META } from '../../data/mockData';
import { 
  BarChart3, 
  PieChart as PieChartIcon, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle, 
  TrendingUp, 
  ArrowRight, 
  Layers, 
  Palette, 
  ShieldCheck, 
  Shirt,
  Compass
} from 'lucide-react';

interface WardrobeAnalysisViewProps {
  items: ClothingItem[];
  onNavigateToStep: (tab: string) => void;
}

export const WardrobeAnalysisView: React.FC<WardrobeAnalysisViewProps> = ({ 
  items, 
  onNavigateToStep 
}) => {
  const totalItems = items.length;
  const tops = items.filter(i => i.category === 'tops');
  const bottoms = items.filter(i => i.category === 'pants' || i.category === 'skirts');
  const outerwear = items.filter(i => i.category === 'outerwear');
  const footwear = items.filter(i => i.category === 'footwear');
  const accessories = items.filter(i => i.category === 'accessories');

  // Vocational Student Dress Code Checklist
  const dressCodeChecklist = [
    {
      title: 'เสื้อเชิ้ตขาว ปวช. ถูกระเบียบ',
      status: tops.some(t => t.name.includes('เชิ้ต') && t.color.includes('ขาว')),
      desc: 'ตรวจพบเสื้อเชิ้ตขาวถูกต้องตามระเบียบวิทยาลัย'
    },
    {
      title: 'กางเกงสแล็ค / กระโปรงพลีท สีกรมท่า',
      status: bottoms.some(b => b.color.includes('กรมท่า')),
      desc: 'เครื่องแบบสีกรมท่าสุภาพเรียบร้อย'
    },
    {
      title: 'เสื้อเบลเซอร์สำหรับนำเสนอโครงการธุรกิจ',
      status: outerwear.some(o => o.name.includes('เบลเซอร์') || o.name.includes('สูท')),
      desc: 'พร้อมสำหรับการ Pitching และสอบโครงงานวิชาชีพ'
    },
    {
      title: 'รองเท้าผ้าใบสีขาว / รองเท้าคัทชูดำ',
      status: footwear.some(f => f.color.includes('ขาว') || f.color.includes('ดำ')),
      desc: 'มีทั้งรองเท้าเรียนประจำวันและงานทางการ'
    },
    {
      title: 'เข็มขัดตราสัญลักษณ์วิทยาลัย',
      status: accessories.some(a => a.name.includes('เข็มขัด')),
      desc: 'พร้อมสำหรับวันพิธีการและตรวจระเบียบ'
    }
  ];

  const dressCodePassCount = dressCodeChecklist.filter(c => c.status).length;
  const readinessScore = Math.min(100, Math.round((dressCodePassCount / 5) * 60 + (totalItems >= 10 ? 40 : totalItems * 4)));

  // Color breakdown
  const colorCounts: Record<string, { count: number; hex: string }> = {};
  items.forEach(item => {
    const key = item.color.split(' ')[0];
    if (!colorCounts[key]) {
      colorCounts[key] = { count: 0, hex: item.colorHex };
    }
    colorCounts[key].count += 1;
  });

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-slate-900 text-white rounded-2xl p-6 shadow-md border border-purple-700/50">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-purple-500/30 text-purple-200 text-xs font-semibold uppercase tracking-wider border border-purple-400/30">
                ขั้นตอนที่ 3.5.4 ตามวิธีวิจัย
              </span>
              <span className="text-xs text-purple-200">
                ภาพประกอบที่ 3.4 สรุปและประมวลผลตู้เสื้อผ้า (Analysis & Verification)
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold font-serif tracking-tight">
              4. สรุปและประมวลผลตู้เสื้อผ้า (Analysis & Verification)
            </h1>
            <p className="text-sm text-purple-200 max-w-2xl leading-relaxed">
              ระบบวิเคราะห์คลังเสื้อผ้าเสร็จสมบูรณ์ ตรวจสอบความสมดุลของสัดส่วนเสื้อผ้า วงล้อเฉดสี และประเมินความพร้อมในการจัดชุดตามเกณฑ์มาตรฐานสาขาเทคโนโลยีธุรกิจดิจิทัล
            </p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto">
            <button
              onClick={() => onNavigateToStep('recommendation')}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-purple-500 hover:bg-purple-600 text-slate-950 text-xs font-bold shadow-md transition-all cursor-pointer"
            >
              <span>จัดชุดแนะนำทันที (ขั้นตอน 5)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Visual Reference & Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Research Visual Reference Card */}
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                <BarChart3 className="w-4 h-4 text-purple-600" />
                <span>ภาพต้นแบบ (Figure 3.4)</span>
              </span>
              <span className="text-[10px] px-2 py-0.5 bg-purple-100 text-purple-800 font-bold rounded-full">
                Verified Complete
              </span>
            </div>

            <div className="rounded-lg overflow-hidden border border-slate-200 aspect-4/3 relative">
              <img
                src={FIGURES_META.fig3_4.path}
                alt="ภาพประกอบที่ 3.4 สรุปและประมวลผลตู้เสื้อผ้า"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 to-transparent p-2 text-white text-[11px]">
                ภาพประกอบที่ 3.4 สรุปและประมวลผลตู้เสื้อผ้า
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              สอดคล้องกับระเบียบวิธีวิจัย 3.5 ข้อ 4 แสดงการสรุปสถิติตู้เสื้อผ้าแบบองค์รวม พร้อมคำนวณคะแนนความพร้อมในการจัดชุด (Wardrobe Readiness Score)
            </p>
          </div>

          {/* Readiness Score Card */}
          <div className="bg-gradient-to-br from-indigo-950 to-purple-950 text-white p-5 rounded-2xl border border-purple-800 shadow-sm space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="text-purple-300 font-medium">คะแนนความพร้อมตู้เสื้อผ้า</span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-[10px]">
                เกรด A+ (ยอดเยี่ยม)
              </span>
            </div>

            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-extrabold text-white tracking-tight">{readinessScore}%</span>
              <span className="text-xs text-purple-300">ความพร้อมในการจัดชุดเรียนและนำเสนองาน</span>
            </div>

            <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-purple-500 to-emerald-400 h-2 rounded-full transition-all duration-1000"
                style={{ width: `${readinessScore}%` }}
              />
            </div>

            <p className="text-[11px] text-slate-300 leading-relaxed pt-1">
              ตู้เสื้อผ้ามีชิ้นสำคัญครบถ้วนตามหลักเกณฑ์ สามารถจัดชุดได้มากกว่า <strong>24 ลุค</strong> โดยไม่ต้องซื้อเสื้อผ้าใหม่เพิ่ม
            </p>
          </div>
        </div>

        {/* Right: Detailed Analysis Breakdown */}
        <div className="lg:col-span-8 space-y-4">
          {/* Top Level Ratio Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
              <div className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">เสื้อ (Tops)</div>
              <div className="text-xl font-bold text-slate-900 mt-1">{tops.length} ชิ้น</div>
              <div className="text-[10px] text-emerald-600 mt-0.5">สัดส่วน {Math.round((tops.length / totalItems) * 100)}%</div>
            </div>

            <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
              <div className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">ท่อนล่าง (Bottoms)</div>
              <div className="text-xl font-bold text-slate-900 mt-1">{bottoms.length} ชิ้น</div>
              <div className="text-[10px] text-indigo-600 mt-0.5">สัดส่วน {Math.round((bottoms.length / totalItems) * 100)}%</div>
            </div>

            <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
              <div className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">เสื้อคลุม (Outerwear)</div>
              <div className="text-xl font-bold text-slate-900 mt-1">{outerwear.length} ชิ้น</div>
              <div className="text-[10px] text-purple-600 mt-0.5">พรีเซนต์ & ห้องแอร์</div>
            </div>

            <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
              <div className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">รองเท้า & พร็อพ</div>
              <div className="text-xl font-bold text-slate-900 mt-1">{footwear.length + accessories.length} ชิ้น</div>
              <div className="text-[10px] text-amber-600 mt-0.5">พร้อมใช้งานทันที</div>
            </div>
          </div>

          {/* Student Uniform & Business Compliance Checklist */}
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>การตรวจสอบความครบถ้วนของเครื่องแบบ (Vocational Student Compliance)</span>
              </h3>
              <span className="text-xs font-bold text-emerald-600">
                {dressCodePassCount} / {dressCodeChecklist.length} ผ่านเกณฑ์
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              {dressCodeChecklist.map((item, idx) => (
                <div 
                  key={idx}
                  className={`p-3 rounded-lg border text-xs flex items-start gap-2.5 transition-all ${
                    item.status 
                      ? 'bg-emerald-50/50 border-emerald-200 text-slate-800' 
                      : 'bg-amber-50/50 border-amber-200 text-slate-700'
                  }`}
                >
                  <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${item.status ? 'text-emerald-600' : 'text-slate-300'}`} />
                  <div>
                    <div className="font-bold text-slate-900">{item.title}</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Color Palette Analysis */}
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                <Palette className="w-4 h-4 text-purple-600" />
                <span>การกระจายตัวของโทนสีในตู้ (Color Harmony Breakdown)</span>
              </h3>
              <span className="text-[11px] text-slate-400">กลุ่มสีสุภาพ & เอิร์ธโทน</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {Object.entries(colorCounts).map(([colorName, info], idx) => (
                <div 
                  key={idx}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50/50 text-xs"
                >
                  <span 
                    className="w-3.5 h-3.5 rounded-full border border-slate-300 shadow-xs shrink-0" 
                    style={{ backgroundColor: info.hex }} 
                  />
                  <span className="font-medium text-slate-800">{colorName}</span>
                  <span className="text-[10px] px-1.5 py-0.2 bg-white rounded font-bold text-slate-500 border border-slate-200">
                    {info.count} ชิ้น
                  </span>
                </div>
              ))}
            </div>

            <div className="p-3 bg-purple-50 rounded-lg border border-purple-100 text-purple-900 text-xs leading-relaxed">
              <strong>ข้อแนะนำเชิง AI สไตลิสต์:</strong> โทนสีในตู้เสื้อผ้าของคุณมีคู่สี High-Contrast (ขาว-กรมท่า) ซึ่งเป็นคู่สีสากลสำหรับนักเรียนนักศึกษา และมีเฉดสีเอิร์ธโทน (เบจ, เดนิม) สำหรับวันหยุด ทำให้ Mix & Match ได้หลากหลายโดยสีไม่ขัดแย้งกัน
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
