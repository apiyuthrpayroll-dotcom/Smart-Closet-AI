import React, { useState } from 'react';
import { Outfit, ClothingItem, OccasionType } from '../../types';
import { FIGURES_META } from '../../data/mockData';
import { ReportImage } from '../report/ReportImage';
import { 
  Sparkles, 
  Heart, 
  ArrowRight, 
  CheckCircle2, 
  Compass, 
  Shirt, 
  Layers, 
  Zap, 
  Sun, 
  Eye, 
  ThumbsUp, 
  Tag,
  RefreshCw
} from 'lucide-react';

interface StyleMatchingViewProps {
  outfits: Outfit[];
  items: ClothingItem[];
  onSelectOutfitForTryOn: (outfit: Outfit) => void;
  onToggleFavoriteOutfit: (id: string) => void;
  onNavigateToStep: (tab: string) => void;
}

export const StyleMatchingView: React.FC<StyleMatchingViewProps> = ({
  outfits,
  items,
  onSelectOutfitForTryOn,
  onToggleFavoriteOutfit,
  onNavigateToStep
}) => {
  const [selectedOccasion, setSelectedOccasion] = useState<OccasionType>('ชุดนักเรียน ปวช.');
  const [isGenerating, setIsGenerating] = useState(false);
  const [weatherCondition, setWeatherCondition] = useState('แดดจัด 33°C (ห้องเรียนแอร์ 24°C)');

  const occasions: Array<{ type: OccasionType; label: string; icon: string; desc: string }> = [
    { 
      type: 'ชุดนักเรียน ปวช.', 
      label: 'ชุดนักเรียน ปวช.', 
      icon: '🎓', 
      desc: 'เครื่องแบบถูกระเบียบวิทยาลัย สุภาพ มั่นใจ' 
    },
    { 
      type: 'นำเสนอโครงการธุรกิจดิจิทัล', 
      label: 'นำเสนอโครงการธุรกิจ', 
      icon: '💼', 
      desc: 'ลุคมืออาชีพ เสริมเบลเซอร์ เพิ่มความน่าเชื่อถือ' 
    },
    { 
      type: 'ลำลอง/ไปเที่ยว', 
      label: 'ลำลอง/วันหยุด', 
      icon: '☕', 
      desc: 'สบายๆ สไตล์มินิมอล เอิร์ธโทน คล่องตัว' 
    },
    { 
      type: 'กิจกรรม/กีฬา', 
      label: 'กิจกรรมสาขาวิชา', 
      icon: '⚽', 
      desc: 'เสื้อโปโลวิทยาลัย พร้อมลุยกิจกรรมนอกสถานที่' 
    },
    { 
      type: 'งานพิธีการ/ทางการ', 
      label: 'งานพิธีการ', 
      icon: '🏛️', 
      desc: 'พิธีไหว้ครู ตรวจระเบียบ ประชุมวิชาการ' 
    }
  ];

  const filteredOutfits = outfits.filter(o => o.occasion === selectedOccasion);

  const handleGenerateCustomOutfit = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
    }, 1200);
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-amber-900 via-orange-900 to-slate-900 text-white rounded-2xl p-6 shadow-md border border-amber-700/50">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-amber-500/30 text-amber-200 text-xs font-semibold uppercase tracking-wider border border-amber-400/30">
                ขั้นตอนที่ 3.5.5 ตามวิธีวิจัย
              </span>
              <span className="text-xs text-amber-200">
                ภาพประกอบที่ 3.5 ค้นหาสไตล์และเสนอแนะชุด (Style Matching & Outfit Recommendation)
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold font-serif tracking-tight">
              5. ค้นหาสไตล์และเสนอแนะชุด (Style Matching & Outfit Recommendation)
            </h1>
            <p className="text-sm text-amber-200 max-w-2xl leading-relaxed">
              ระบบ AI Fashion Stylist ผสมผสานเสื้อผ้าในตู้ของคุณตามโอกาส คำนวณคะแนนความเข้ากันได้ (Match Score) พร้อมบอกเหตุผลเชิงแฟชั่นและกาลเทศะ
            </p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto">
            <button
              onClick={() => onNavigateToStep('tryon')}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-bold shadow-md transition-all cursor-pointer"
            >
              <span>ลองชุดเสมือนจริง (ขั้นตอน 6)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Visual Reference & Style Studio */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Research Visual Reference Card & Occasion Selector */}
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                <Compass className="w-4 h-4 text-amber-600" />
                <span>ภาพต้นแบบ (Figure 3.5)</span>
              </span>
              <span className="text-[10px] px-2 py-0.5 bg-amber-100 text-amber-800 font-bold rounded-full">
                AI Matching
              </span>
            </div>

            <div className="rounded-lg overflow-hidden border border-slate-200 aspect-4/3 relative">
              <ReportImage
                src={FIGURES_META.fig3_5.path}
                alt="ภาพประกอบที่ 3.5 ค้นหาสไตล์และเสนอแนะชุด"
                figureNumber="ภาพประกอบ 3.5"
                title="ค้นหาสไตล์และเสนอแนะชุด (Style Matching)"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 to-transparent p-2 text-white text-[11px] pointer-events-none z-10">
                ภาพประกอบที่ 3.5 ค้นหาสไตล์และเสนอแนะชุด
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              จำลองผลการแนะนำชุดพร้อมปุ่ม <strong>"ลองชุดเสมือนจริง"</strong> และ <strong>"บันทึกชุดโปรด"</strong> ตามการประเมินของผู้เชี่ยวชาญและกลุ่มตัวอย่าง 30 คน
            </p>
          </div>

          {/* Occasion Selection Card */}
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs space-y-2.5">
            <h3 className="font-bold text-slate-900 text-xs flex items-center gap-1.5">
              <Tag className="w-4 h-4 text-amber-600" />
              <span>เลือกโอกาสในการแต่งกาย (Occasion)</span>
            </h3>

            <div className="space-y-1.5">
              {occasions.map((occ) => (
                <button
                  key={occ.type}
                  onClick={() => setSelectedOccasion(occ.type)}
                  className={`w-full text-left p-2.5 rounded-xl border transition-all flex items-start gap-3 cursor-pointer ${
                    selectedOccasion === occ.type
                      ? 'border-amber-500 bg-amber-50/60 shadow-xs'
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  <span className="text-xl shrink-0 mt-0.5">{occ.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-xs text-slate-900">{occ.label}</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">{occ.desc}</div>
                  </div>
                </button>
              ))}
            </div>

            <div className="pt-2 border-t border-slate-100">
              <button
                onClick={handleGenerateCustomOutfit}
                disabled={isGenerating}
                className="w-full py-2.5 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white rounded-xl text-xs font-bold shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isGenerating ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>AI กำลังประมวลผลคู่สี...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>จัดชุดใหม่สำหรับโอกาสนี้</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Right: Recommended Outfits Cards */}
        <div className="lg:col-span-8 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>ชุดแนะนำที่ผ่านการคำนวณความเข้ากันได้</span>
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                เหมาะสำหรับ: <strong>{selectedOccasion}</strong> • สภาพอากาศ: {weatherCondition}
              </p>
            </div>
            <span className="text-xs font-bold text-amber-700 bg-amber-100 px-2.5 py-1 rounded-full">
              พบ {filteredOutfits.length > 0 ? filteredOutfits.length : 1} ชุดแนะนำ
            </span>
          </div>

          <div className="space-y-4">
            {(filteredOutfits.length > 0 ? filteredOutfits : [outfits[0]]).map((outfit) => (
              <div 
                key={outfit.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all p-5 space-y-4"
              >
                {/* Outfit Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 bg-amber-100 text-amber-800 text-[10px] font-bold rounded">
                        {outfit.occasion}
                      </span>
                      <span className="text-xs text-slate-400">•</span>
                      <span className="text-xs font-medium text-slate-600">{outfit.styleVibe}</span>
                    </div>
                    <h4 className="text-base font-bold text-slate-900">{outfit.title}</h4>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Match Score</div>
                      <div className="text-2xl font-black text-amber-600 font-mono">{outfit.matchScore}%</div>
                    </div>
                    <button
                      onClick={() => onToggleFavoriteOutfit(outfit.id)}
                      className="w-9 h-9 rounded-full bg-slate-50 hover:bg-slate-100 flex items-center justify-center text-slate-400 hover:text-rose-500 transition-all border border-slate-200"
                    >
                      <Heart className={`w-5 h-5 ${outfit.isFavorite ? 'fill-rose-500 text-rose-500' : ''}`} />
                    </button>
                  </div>
                </div>

                {/* Clothing Elements Row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {/* Top */}
                  <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 flex flex-col items-center text-center space-y-1.5">
                    <div className="w-16 h-16 rounded-lg overflow-hidden border border-slate-200 bg-slate-100">
                      <img
                        src={outfit.topItem.image}
                        alt={outfit.topItem.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = '/assets/aistudio/ui_scan.jpg';
                        }}
                      />
                    </div>
                    <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">เสื้อ</div>
                    <div className="font-bold text-xs text-slate-800 line-clamp-1">{outfit.topItem.name}</div>
                  </div>

                  {/* Bottom */}
                  <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 flex flex-col items-center text-center space-y-1.5">
                    <div className="w-16 h-16 rounded-lg overflow-hidden border border-slate-200 bg-slate-100">
                      <img
                        src={outfit.bottomItem.image}
                        alt={outfit.bottomItem.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = '/assets/aistudio/ui_classify.jpg';
                        }}
                      />
                    </div>
                    <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">กางเกง/กระโปรง</div>
                    <div className="font-bold text-xs text-slate-800 line-clamp-1">{outfit.bottomItem.name}</div>
                  </div>

                  {/* Outerwear */}
                  {outfit.outerwearItem ? (
                    <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 flex flex-col items-center text-center space-y-1.5">
                      <div className="w-16 h-16 rounded-lg overflow-hidden border border-slate-200 bg-slate-100">
                        <img
                          src={outfit.outerwearItem.image}
                          alt={outfit.outerwearItem.name}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = '/assets/aistudio/ui_analysis.jpg';
                          }}
                        />
                      </div>
                      <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">เสื้อคลุม/สูท</div>
                      <div className="font-bold text-xs text-slate-800 line-clamp-1">{outfit.outerwearItem.name}</div>
                    </div>
                  ) : (
                    <div className="bg-slate-50/50 p-2.5 rounded-xl border border-dashed border-slate-200 flex flex-col items-center justify-center text-center space-y-1 text-slate-400">
                      <Shirt className="w-6 h-6 stroke-1 text-slate-300" />
                      <div className="text-[10px]">ไม่ต้องสวมเสื้อคลุม</div>
                    </div>
                  )}

                  {/* Shoes */}
                  {outfit.shoesItem && (
                    <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 flex flex-col items-center text-center space-y-1.5">
                      <div className="w-16 h-16 rounded-lg overflow-hidden border border-slate-200 bg-slate-100">
                        <img
                          src={outfit.shoesItem.image}
                          alt={outfit.shoesItem.name}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = '/assets/aistudio/ui_database.jpg';
                          }}
                        />
                      </div>
                      <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">รองเท้า</div>
                      <div className="font-bold text-xs text-slate-800 line-clamp-1">{outfit.shoesItem.name}</div>
                    </div>
                  )}
                </div>

                {/* AI Styling Insight Box */}
                <div className="bg-amber-50/60 p-3 rounded-xl border border-amber-200 text-xs space-y-1.5 text-amber-950">
                  <div className="font-bold flex items-center gap-1.5 text-amber-900">
                    <Sparkles className="w-4 h-4 text-amber-600" />
                    <span>AI Stylist Advice & ทฤษฎีสี: {outfit.colorHarmony}</span>
                  </div>
                  <p className="text-[11px] text-amber-900 leading-relaxed">
                    {outfit.aiStylingTip}
                  </p>
                </div>

                {/* Bottom Action Buttons (Matching Figure 3.5 Buttons!) */}
                <div className="pt-2 flex flex-wrap items-center justify-between gap-2">
                  <button
                    onClick={() => {
                      onSelectOutfitForTryOn(outfit);
                      onNavigateToStep('tryon');
                    }}
                    className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-sm transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <Eye className="w-4 h-4" />
                    <span>ลองชุดเสมือนจริง (Virtual Try-On)</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onToggleFavoriteOutfit(outfit.id)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-medium border transition-all flex items-center gap-1.5 cursor-pointer ${
                        outfit.isFavorite 
                          ? 'bg-rose-50 text-rose-700 border-rose-200' 
                          : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      <Heart className={`w-3.5 h-3.5 ${outfit.isFavorite ? 'fill-rose-500 text-rose-500' : ''}`} />
                      <span>{outfit.isFavorite ? 'บันทึกในชุดโปรดแล้ว' : 'บันทึกชุดโปรด'}</span>
                    </button>

                    <button
                      onClick={() => {
                        onSelectOutfitForTryOn(outfit);
                        onNavigateToStep('tryon');
                      }}
                      className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-sm transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      <ThumbsUp className="w-3.5 h-3.5" />
                      <span>พร้อมสวมใส่ทันที (Ready to Wear)</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
