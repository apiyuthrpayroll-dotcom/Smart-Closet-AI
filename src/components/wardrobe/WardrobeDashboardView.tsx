import React from 'react';
import { ClothingItem, Outfit, NavTab } from '../../types';
import { RESEARCH_METADATA, FIGURES_META } from '../../data/mockData';
import { 
  Sparkles, 
  Scan, 
  Layers, 
  Database, 
  BarChart3, 
  Compass, 
  Eye, 
  ArrowRight, 
  CheckCircle2, 
  Shirt, 
  Heart, 
  ThumbsUp, 
  GraduationCap, 
  ExternalLink,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';

interface WardrobeDashboardViewProps {
  items: ClothingItem[];
  outfits: Outfit[];
  onNavigateToTab: (tab: NavTab) => void;
  onSelectOutfitForTryOn: (outfit: Outfit) => void;
}

export const WardrobeDashboardView: React.FC<WardrobeDashboardViewProps> = ({
  items,
  outfits,
  onNavigateToTab,
  onSelectOutfitForTryOn
}) => {
  const featuredOutfit = outfits[0];

  const workflowSteps: Array<{
    step: string;
    figureNum: string;
    title: string;
    desc: string;
    tab: NavTab;
    image: string;
    color: string;
  }> = [
    {
      step: 'ขั้นตอน 1',
      figureNum: '3.1',
      title: 'สแกนเสื้อผ้า (Scan Clothes)',
      desc: 'ใช้กล้องหรืออัปโหลดรูปตู้เสื้อผ้า AI ตรวจจับเสื้อผ้าอัตโนมัติด้วย Bounding Box',
      tab: 'scan',
      image: FIGURES_META.fig3_1.path,
      color: 'from-indigo-600 to-blue-600'
    },
    {
      step: 'ขั้นตอน 2',
      figureNum: '3.2',
      title: 'จัดหมวดหมู่อัตโนมัติ (Auto Classification)',
      desc: 'แยกประเภท เสื้อ กางเกง กระโปรง สูท พร้อมสกัดสี เนื้อผ้า และโอกาสใช้งาน',
      tab: 'classify',
      image: FIGURES_META.fig3_2.path,
      color: 'from-emerald-600 to-teal-600'
    },
    {
      step: 'ขั้นตอน 3',
      figureNum: '3.3',
      title: 'คลังตู้เสื้อผ้าส่วนตัว (Digital Wardrobe)',
      desc: 'จัดเก็บข้อมูลเสื้อผ้าทั้งหมด ค้นหา กรองตามโอกาส และบันทึกประวัติ',
      tab: 'wardrobe',
      image: FIGURES_META.fig3_3.path,
      color: 'from-blue-600 to-cyan-600'
    },
    {
      step: 'ขั้นตอน 4',
      figureNum: '3.4',
      title: 'สรุปและประมวลผล (Analysis & Verification)',
      desc: 'วิเคราะห์ความสมดุล สัดส่วนเสื้อผ้า วงล้อสี และประเมินความพร้อมในการจัดชุด',
      tab: 'analysis',
      image: FIGURES_META.fig3_4.path,
      color: 'from-purple-600 to-pink-600'
    },
    {
      step: 'ขั้นตอน 5',
      figureNum: '3.5',
      title: 'ค้นหาสไตล์ & จัดชุด (Style Matching)',
      desc: 'จับคู่ชุดตามโอกาส (ไปเรียน ปวช., พรีเซนต์งาน, ลำลอง) คำนวณ Match Score',
      tab: 'recommendation',
      image: FIGURES_META.fig3_5.path,
      color: 'from-amber-600 to-orange-600'
    },
    {
      step: 'ขั้นตอน 6',
      figureNum: '3.6',
      title: 'ลองชุดเสมือนจริง (Virtual Try-On)',
      desc: 'จำลองการสวมใส่ชุดบนหุ่นโมเดลเสมือนจริง เห็นลุคตนเองก่อนแต่งตัวจริง',
      tab: 'tryon',
      image: FIGURES_META.fig3_6.path,
      color: 'from-rose-600 to-red-600'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Hero Welcome Banner */}
      <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-700/60">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider border border-indigo-400/30 flex items-center gap-1.5">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>{RESEARCH_METADATA.institution}</span>
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-medium border border-emerald-400/30">
              {RESEARCH_METADATA.department} • {RESEARCH_METADATA.targetLevel}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-bold font-serif tracking-tight text-white">
            {RESEARCH_METADATA.projectTitle}
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            ระบบอัจฉริยะที่ช่วยนักเรียน ปวช. 3 สแกนเสื้อผ้าในตู้ จัดเก็บเป็นคลังดิจิทัล และประมวลผลจัดชุดที่เหมาะสม ถูกระเบียบวิทยาลัย พร้อมลองชุดเสมือนจริงได้ทันทีก่อนสวมใส่
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-3">
            <button
              onClick={() => onNavigateToTab('scan')}
              className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
            >
              <Scan className="w-4 h-4" />
              <span>เริ่มสแกนตู้เสื้อผ้าด่วน</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigateToTab('recommendation')}
              className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-medium backdrop-blur-xs border border-white/20 transition-all flex items-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>จัดชุดอัจฉริยะทันที</span>
            </button>

            <button
              onClick={() => onNavigateToTab('research')}
              className="px-3.5 py-2.5 rounded-xl text-slate-300 hover:text-white text-xs transition-colors flex items-center gap-1.5"
            >
              <span>ดูข้อมูลงานวิจัย & สถิติ (3.1 - 3.4)</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Quick Metrics Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
            <Shirt className="w-6 h-6" />
          </div>
          <div>
            <div className="text-[11px] text-slate-500 font-semibold">เสื้อผ้าในตู้</div>
            <div className="text-xl font-bold text-slate-900">{items.length} ชิ้น</div>
            <div className="text-[10px] text-emerald-600">พร้อมใช้งาน</div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <div className="text-[11px] text-slate-500 font-semibold">ความพร้อมตู้เสื้อผ้า</div>
            <div className="text-xl font-bold text-slate-900">94%</div>
            <div className="text-[10px] text-purple-600">เกรด A+ ถูกระเบียบ</div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <div className="text-[11px] text-slate-500 font-semibold">ชุดแนะนำในระบบ</div>
            <div className="text-xl font-bold text-slate-900">{outfits.length} ลุค</div>
            <div className="text-[10px] text-amber-600">สอดคล้องทุกโอกาส</div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
            <ThumbsUp className="w-6 h-6" />
          </div>
          <div>
            <div className="text-[11px] text-slate-500 font-semibold">ความพึงพอใจเฉลี่ย</div>
            <div className="text-xl font-bold text-slate-900">4.67 / 5.0</div>
            <div className="text-[10px] text-emerald-600 font-medium">ระดับ "มากที่สุด" (N=30)</div>
          </div>
        </div>
      </div>

      {/* 6 Design Steps Workflow Grid (Matching Figures 3.1 - 3.6 Directly) */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-slate-900 font-serif flex items-center gap-2">
              <span>กระบวนการทำงาน 6 ขั้นตอนตามงานวิจัย</span>
              <span className="text-xs font-normal text-slate-500">(System Design Section 3.5)</span>
            </h2>
            <p className="text-xs text-slate-500">คลิกที่การ์ดเพื่อทดสอบระบบในแต่ละขั้นตอน</p>
          </div>
          <button
            onClick={() => onNavigateToTab('report')}
            className="text-xs text-indigo-600 hover:text-indigo-800 font-semibold flex items-center gap-1"
          >
            <span>ดูรายงานบทที่ 3</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {workflowSteps.map((step) => (
            <div
              key={step.figureNum}
              onClick={() => onNavigateToTab(step.tab)}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all cursor-pointer group flex flex-col"
            >
              <div className="aspect-16/10 relative overflow-hidden bg-slate-100">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/70 backdrop-blur-xs text-white text-[10px] font-bold">
                  ภาพประกอบ {step.figureNum}
                </div>
                <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-indigo-600 text-white text-[10px] font-bold shadow-xs">
                  {step.step}
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
                <div>
                  <h3 className="font-bold text-sm text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed line-clamp-2">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-indigo-600 group-hover:translate-x-1 transition-transform">
                  <span>เปิดใช้งานขั้นตอนนี้</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Outfit of the Day */}
      {featuredOutfit && (
        <div className="bg-gradient-to-br from-indigo-50 to-blue-50/50 rounded-2xl border border-indigo-100 p-5 shadow-xs space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="space-y-0.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600">
                ชุดแนะนำวันนี้ (Outfit of the Day)
              </span>
              <h3 className="text-base font-bold text-slate-900">{featuredOutfit.title}</h3>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                ความเข้ากันได้ {featuredOutfit.matchScore}%
              </span>
              <button
                onClick={() => {
                  onSelectOutfitForTryOn(featuredOutfit);
                  onNavigateToTab('tryon');
                }}
                className="px-3.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-xs transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>ลองชุดเสมือนจริง</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-white p-3 rounded-xl border border-slate-200 text-center space-y-1">
              <img src={featuredOutfit.topItem.image} alt="เสื้อ" className="w-14 h-14 object-cover rounded-lg mx-auto" />
              <div className="text-[10px] text-slate-400">เสื้อ</div>
              <div className="text-xs font-bold text-slate-800 truncate">{featuredOutfit.topItem.name}</div>
            </div>
            <div className="bg-white p-3 rounded-xl border border-slate-200 text-center space-y-1">
              <img src={featuredOutfit.bottomItem.image} alt="ท่อนล่าง" className="w-14 h-14 object-cover rounded-lg mx-auto" />
              <div className="text-[10px] text-slate-400">ท่อนล่าง</div>
              <div className="text-xs font-bold text-slate-800 truncate">{featuredOutfit.bottomItem.name}</div>
            </div>
            {featuredOutfit.shoesItem && (
              <div className="bg-white p-3 rounded-xl border border-slate-200 text-center space-y-1">
                <img src={featuredOutfit.shoesItem.image} alt="รองเท้า" className="w-14 h-14 object-cover rounded-lg mx-auto" />
                <div className="text-[10px] text-slate-400">รองเท้า</div>
                <div className="text-xs font-bold text-slate-800 truncate">{featuredOutfit.shoesItem.name}</div>
              </div>
            )}
            <div className="bg-white p-3 rounded-xl border border-slate-200 flex flex-col justify-center text-xs space-y-1 text-slate-600">
              <div className="text-[10px] font-bold text-indigo-600 uppercase">สไตล์:</div>
              <div className="font-semibold text-slate-900">{featuredOutfit.styleVibe}</div>
              <div className="text-[10px] text-slate-500">{featuredOutfit.colorHarmony}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
