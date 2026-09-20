import React, { useState } from 'react';
import { ClothingItem, ClothingCategory } from '../../types';
import { FIGURES_META } from '../../data/mockData';
import { ReportImage } from '../report/ReportImage';
import { 
  Sparkles, 
  CheckCircle2, 
  Tag, 
  Layers, 
  Palette, 
  FolderCheck, 
  ArrowRight, 
  Filter, 
  Edit3, 
  Info,
  Check,
  Cpu
} from 'lucide-react';

interface AutoClassifyViewProps {
  items: ClothingItem[];
  onSaveToWardrobe: () => void;
  onNavigateToStep: (tab: string) => void;
}

export const AutoClassifyView: React.FC<AutoClassifyViewProps> = ({ 
  items, 
  onSaveToWardrobe, 
  onNavigateToStep 
}) => {
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>('all');
  const [confirmedItemIds, setConfirmedItemIds] = useState<string[]>(items.map(i => i.id));
  const [editingItemId, setEditingItemId] = useState<string | null>(null);

  const categoryIcons: Record<ClothingCategory, string> = {
    tops: '👔',
    pants: '👖',
    skirts: '👗',
    dresses: '👗',
    outerwear: '🧥',
    footwear: '👟',
    accessories: '⌚'
  };

  const categoryNamesThai: Record<ClothingCategory, string> = {
    tops: 'เสื้อ (Tops)',
    pants: 'กางเกง (Pants)',
    skirts: 'กระโปรง (Skirts)',
    dresses: 'เดรส (Dresses)',
    outerwear: 'เสื้อคลุม/สูท (Outerwear)',
    footwear: 'รองเท้า (Footwear)',
    accessories: 'เครื่องประดับ (Accessories)'
  };

  const filteredItems = selectedCategoryFilter === 'all' 
    ? items 
    : items.filter(item => item.category === selectedCategoryFilter);

  const toggleConfirm = (id: string) => {
    setConfirmedItemIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-900 text-white rounded-2xl p-6 shadow-md border border-emerald-700/50">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/30 text-emerald-200 text-xs font-semibold uppercase tracking-wider border border-emerald-400/30">
                ขั้นตอนที่ 3.5.2 ตามวิธีวิจัย
              </span>
              <span className="text-xs text-emerald-200">
                ภาพประกอบที่ 3.2 จัดหมวดหมู่อัตโนมัติ (Auto Classification)
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold font-serif tracking-tight">
              2. จัดหมวดหมู่อัตโนมัติ (Auto Classification)
            </h1>
            <p className="text-sm text-emerald-200 max-w-2xl leading-relaxed">
              ระบบ AI แยกแยะและจัดหมวดหมู่เสื้อผ้าของคุณอัตโนมัติ สกัดคุณลักษณะ (Features) เช่น ประเภทเสื้อผ้า โทนสี เนื้อผ้า และโอกาสการใช้งานอย่างแม่นยำ
            </p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto">
            <button
              onClick={() => {
                onSaveToWardrobe();
                onNavigateToStep('wardrobe');
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 text-xs font-bold shadow-md transition-all cursor-pointer"
            >
              <FolderCheck className="w-4 h-4" />
              <span>บันทึกลงคลังดิจิทัล (ขั้นตอน 3)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Visual Reference & Classification Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Research Visual Reference Card */}
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-emerald-600" />
                <span>ภาพต้นแบบจากงานวิจัย (Figure 3.2)</span>
              </span>
              <span className="text-[10px] px-2 py-0.5 bg-emerald-100 text-emerald-800 font-bold rounded-full">
                AI Classification
              </span>
            </div>

            <div className="rounded-lg overflow-hidden border border-slate-200 aspect-4/3 relative">
              <ReportImage
                src={FIGURES_META.fig3_2.path}
                alt="ภาพประกอบที่ 3.2 จัดหมวดหมู่อัตโนมัติ"
                figureNumber="ภาพประกอบ 3.2"
                title="จัดหมวดหมู่อัตโนมัติ (Auto Classification)"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 to-transparent p-2 text-white text-[11px] pointer-events-none z-10">
                ภาพประกอบที่ 3.2 จัดหมวดหมู่อัตโนมัติ (Auto Classification)
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              ระบบ AI Classification จำแนกเสื้อผ้าออกเป็น 7 หมวดหมู่หลัก ได้แก่ เสื้อ, กางเกง, กระโปรง, เดรส, เสื้อคลุม, รองเท้า และเครื่องประดับ พร้อมประเมินค่าความเชื่อมั่น (Confidence Score) เฉลี่ย 97.4%
            </p>
          </div>

          {/* Classification Stats Box */}
          <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800 shadow-xs space-y-3">
            <div className="font-bold text-xs flex items-center gap-1.5 text-emerald-400">
              <Sparkles className="w-4 h-4" />
              <span>สรุปผลการจัดหมวดหมู่ ({items.length} รายการ)</span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700">
                <div className="text-slate-400 text-[10px]">เสื้อ (Tops)</div>
                <div className="text-lg font-bold text-white mt-0.5">
                  {items.filter(i => i.category === 'tops').length} ชิ้น
                </div>
              </div>
              <div className="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700">
                <div className="text-slate-400 text-[10px]">ท่อนล่าง (Bottoms)</div>
                <div className="text-lg font-bold text-white mt-0.5">
                  {items.filter(i => i.category === 'pants' || i.category === 'skirts').length} ชิ้น
                </div>
              </div>
              <div className="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700">
                <div className="text-slate-400 text-[10px]">เสื้อคลุม/สูท</div>
                <div className="text-lg font-bold text-white mt-0.5">
                  {items.filter(i => i.category === 'outerwear').length} ชิ้น
                </div>
              </div>
              <div className="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700">
                <div className="text-slate-400 text-[10px]">รองเท้า & พร็อพ</div>
                <div className="text-lg font-bold text-white mt-0.5">
                  {items.filter(i => i.category === 'footwear' || i.category === 'accessories').length} ชิ้น
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Interactive Classification Cards */}
        <div className="lg:col-span-8 space-y-4">
          {/* Category Filter Chips */}
          <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs flex items-center justify-between gap-2 overflow-x-auto">
            <div className="flex items-center gap-1.5 shrink-0 text-xs">
              <Filter className="w-3.5 h-3.5 text-slate-500 mr-1" />
              <button
                onClick={() => setSelectedCategoryFilter('all')}
                className={`px-3 py-1.5 rounded-lg font-medium text-xs transition-all ${
                  selectedCategoryFilter === 'all'
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                ทั้งหมด ({items.length})
              </button>
              {(['tops', 'pants', 'skirts', 'outerwear', 'footwear', 'accessories'] as ClothingCategory[]).map((cat) => {
                const count = items.filter(i => i.category === cat).length;
                if (count === 0) return null;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategoryFilter(cat)}
                    className={`px-3 py-1.5 rounded-lg font-medium text-xs transition-all whitespace-nowrap flex items-center gap-1 ${
                      selectedCategoryFilter === cat
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }`}
                  >
                    <span>{categoryIcons[cat]}</span>
                    <span>{categoryNamesThai[cat].split(' ')[0]}</span>
                    <span className="opacity-75 text-[10px]">({count})</span>
                  </button>
                );
              })}
            </div>

            <span className="text-[11px] text-slate-400 shrink-0">
              คลิกเพื่อยืนยันหรือตรวจสอบข้อมูล
            </span>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredItems.map((item) => {
              const isConfirmed = confirmedItemIds.includes(item.id);
              return (
                <div 
                  key={item.id}
                  className={`bg-white rounded-xl border transition-all p-4 space-y-3 shadow-xs ${
                    isConfirmed 
                      ? 'border-slate-200 hover:border-emerald-300' 
                      : 'border-amber-300 bg-amber-50/30'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-20 h-20 rounded-lg overflow-hidden border border-slate-200 shrink-0 bg-slate-100">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = '/assets/aistudio/ui_scan.jpg';
                        }}
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1">
                        <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 flex items-center gap-1">
                          <span>{categoryIcons[item.category]}</span>
                          <span>{categoryNamesThai[item.category]}</span>
                        </span>
                        <span className="text-[10px] font-mono font-bold text-emerald-600">
                          AI: {item.aiConfidence}%
                        </span>
                      </div>

                      <h4 className="font-bold text-slate-900 text-xs sm:text-sm mt-1 line-clamp-1">
                        {item.name}
                      </h4>
                      <p className="text-[11px] text-slate-500 line-clamp-1">
                        {item.subCategory} • {item.material}
                      </p>

                      <div className="flex items-center gap-2 mt-1.5">
                        <span className="flex items-center gap-1 text-[10px] font-medium text-slate-700">
                          <span 
                            className="w-3 h-3 rounded-full border border-slate-300 inline-block shadow-xs" 
                            style={{ backgroundColor: item.colorHex }} 
                          />
                          <span>{item.color}</span>
                        </span>
                        <span className="text-slate-300">•</span>
                        <span className="text-[10px] text-slate-500">{item.pattern}</span>
                      </div>
                    </div>
                  </div>

                  {/* Occasion Tags */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-100">
                    <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
                      โอกาสการใช้งานที่ AI แนะนำ:
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {item.occasion.map((occ, idx) => (
                        <span 
                          key={idx}
                          className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-medium border border-slate-200"
                        >
                          {occ}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Confirmation Action */}
                  <div className="pt-2 flex items-center justify-between">
                    <button
                      onClick={() => toggleConfirm(item.id)}
                      className={`text-xs px-2.5 py-1 rounded-lg font-medium transition-all flex items-center gap-1 cursor-pointer ${
                        isConfirmed
                          ? 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
                          : 'bg-amber-100 text-amber-800 hover:bg-amber-200'
                      }`}
                    >
                      <Check className="w-3.5 h-3.5" />
                      <span>{isConfirmed ? 'ยืนยันความถูกต้องแล้ว' : 'รอตรวจสอบ'}</span>
                    </button>

                    <button
                      onClick={() => onNavigateToStep('wardrobe')}
                      className="text-xs text-indigo-600 hover:text-indigo-800 font-medium"
                    >
                      ดูในตู้เสื้อผ้า
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
