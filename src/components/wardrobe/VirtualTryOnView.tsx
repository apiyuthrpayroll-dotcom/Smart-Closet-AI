import React, { useState } from 'react';
import { Outfit, ClothingItem } from '../../types';
import { FIGURES_META } from '../../data/mockData';
import { ReportImage } from '../report/ReportImage';
import { 
  Sparkles, 
  Heart, 
  CheckCircle2, 
  ThumbsUp, 
  UserCheck, 
  Shirt, 
  RotateCcw, 
  Share2, 
  Camera, 
  ArrowRight,
  Layers,
  Sparkle
} from 'lucide-react';

interface VirtualTryOnViewProps {
  currentOutfit: Outfit;
  allOutfits: Outfit[];
  onSelectOutfit: (outfit: Outfit) => void;
  onToggleFavoriteOutfit: (id: string) => void;
  onNavigateToStep: (tab: string) => void;
}

export const VirtualTryOnView: React.FC<VirtualTryOnViewProps> = ({
  currentOutfit,
  allOutfits,
  onSelectOutfit,
  onToggleFavoriteOutfit,
  onNavigateToStep
}) => {
  const [avatarGender, setAvatarGender] = useState<'male' | 'female'>('female');
  const [isWornRecorded, setIsWornRecorded] = useState(false);
  const [activeLayer, setActiveLayer] = useState<'all' | 'outerwear' | 'top' | 'bottom'>('all');

  const handleConfirmReadyToWear = () => {
    setIsWornRecorded(true);
    setTimeout(() => {
      setIsWornRecorded(false);
    }, 3500);
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-rose-950 via-pink-900 to-slate-900 text-white rounded-2xl p-6 shadow-md border border-rose-800/50">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-rose-500/30 text-rose-200 text-xs font-semibold uppercase tracking-wider border border-rose-400/30">
                ขั้นตอนที่ 3.5.6 ตามวิธีวิจัย
              </span>
              <span className="text-xs text-rose-200">
                ภาพประกอบที่ 3.6 ลองชุดเสมือนจริงและพร้อมใช้งาน (Virtual Try-On & Ready to Wear)
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold font-serif tracking-tight">
              6. ลองชุดเสมือนจริงและพร้อมใช้งาน (Virtual Try-On)
            </h1>
            <p className="text-sm text-rose-200 max-w-2xl leading-relaxed">
              จำลองการสวมใส่ชุดบนหุ่นโมเดลเสมือนจริงแบบเรียลไทม์ ผู้ใช้งานสามารถเห็นภาพตนเองในชุดที่เลือกได้ทันที ช่วยตัดสินใจได้อย่างมั่นใจก่อนแต่งตัวจริง
            </p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto">
            <button
              onClick={() => onNavigateToStep('research')}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-medium backdrop-blur-xs border border-white/20 transition-all cursor-pointer"
            >
              <span>ดูข้อมูลงานวิจัย & สถิติ (3.1-3.4)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Virtual Fitting Room Studio */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Research Visual Reference Card */}
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-rose-600" />
                <span>ภาพต้นแบบ (Figure 3.6)</span>
              </span>
              <span className="text-[10px] px-2 py-0.5 bg-rose-100 text-rose-800 font-bold rounded-full">
                Virtual Try-On
              </span>
            </div>

            <div className="rounded-lg overflow-hidden border border-slate-200 aspect-4/3 relative">
              <ReportImage
                src={FIGURES_META.fig3_6.path}
                alt="ภาพประกอบที่ 3.6 ลองชุดเสมือนจริงและพร้อมใช้งาน"
                figureNumber="ภาพประกอบ 3.6"
                title="ลองชุดเสมือนจริงและพร้อมใช้งาน (Virtual Try-On)"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 to-transparent p-2 text-white text-[11px] pointer-events-none z-10">
                ภาพประกอบที่ 3.6 ลองชุดเสมือนจริงและพร้อมใช้งาน
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              ผู้ใช้งานกดเลือกชุดแล้วระบบจะเรนเดอร์ภาพโมเดลสวมใส่เสื้อผ้าชุดนั้นทันที พร้อมปุ่ม <strong>"พร้อมใช้งานทันที"</strong> เพื่อบันทึกประวัติการสวมใส่
            </p>
          </div>

          {/* Switch Outfit Selector */}
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs space-y-2.5">
            <h3 className="font-bold text-slate-900 text-xs flex items-center justify-between">
              <span>เลือกชุดอื่นมาลองสวม</span>
              <span className="text-[10px] text-slate-400 font-normal">ทั้งหมด {allOutfits.length} ชุด</span>
            </h3>

            <div className="space-y-1.5">
              {allOutfits.map((outfit) => (
                <button
                  key={outfit.id}
                  onClick={() => onSelectOutfit(outfit)}
                  className={`w-full text-left p-2.5 rounded-xl border transition-all flex items-center justify-between gap-2 cursor-pointer ${
                    currentOutfit.id === outfit.id
                      ? 'border-rose-500 bg-rose-50/60 shadow-xs'
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  <div className="min-w-0">
                    <div className="font-bold text-xs text-slate-900 line-clamp-1">{outfit.title}</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">{outfit.occasion}</div>
                  </div>
                  <span className="font-mono text-xs font-bold text-rose-600 shrink-0">
                    {outfit.matchScore}%
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Center / Right: Interactive Avatar & Try-on Output */}
        <div className="lg:col-span-8 space-y-4">
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-5">
            {/* Top Bar: Gender Toggle & Match Indicator */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-700">หุ่นโมเดลจำลอง:</span>
                <div className="inline-flex rounded-lg border border-slate-200 p-0.5 bg-slate-50 text-xs">
                  <button
                    onClick={() => setAvatarGender('female')}
                    className={`px-3 py-1 rounded-md font-medium transition-all ${
                      avatarGender === 'female' 
                        ? 'bg-rose-500 text-white shadow-xs' 
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    👩 นักเรียนหญิง (ปวช.)
                  </button>
                  <button
                    onClick={() => setAvatarGender('male')}
                    className={`px-3 py-1 rounded-md font-medium transition-all ${
                      avatarGender === 'male' 
                        ? 'bg-indigo-600 text-white shadow-xs' 
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    👨 นักเรียนชาย (ปวช.)
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Match Score {currentOutfit.matchScore}%</span>
                </span>
                <button
                  onClick={() => onToggleFavoriteOutfit(currentOutfit.id)}
                  className="p-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-400 hover:text-rose-500 transition-all"
                  title="บันทึกชุดโปรด"
                >
                  <Heart className={`w-4 h-4 ${currentOutfit.isFavorite ? 'fill-rose-500 text-rose-500' : ''}`} />
                </button>
              </div>
            </div>

            {/* Stage: Interactive Virtual Mannequin Model & Garment Layers */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              {/* Mannequin / Avatar Visual Showcase */}
              <div className="md:col-span-6 flex flex-col items-center">
                <div className="w-full max-w-xs rounded-2xl bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-900 p-4 border border-slate-700 shadow-xl relative overflow-hidden flex flex-col items-center justify-between min-h-[420px]">
                  {/* Avatar Ambient Glow */}
                  <div className="absolute top-1/4 inset-x-0 h-48 bg-rose-500/10 blur-2xl rounded-full pointer-events-none" />

                  {/* Top Status */}
                  <div className="w-full flex items-center justify-between text-[11px] text-slate-300 z-10">
                    <span className="flex items-center gap-1 font-mono text-[10px] text-rose-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-ping" />
                      VIRTUAL TRY-ON ACTIVE
                    </span>
                    <span>{avatarGender === 'female' ? 'สรีระมาตรฐานหญิง' : 'สรีระมาตรฐานชาย'}</span>
                  </div>

                  {/* Layered Avatar Silhouette Representation */}
                  <div className="relative my-4 flex flex-col items-center justify-center w-full z-10 space-y-3">
                    {/* Head / Hairstyle */}
                    <div className="w-14 h-14 rounded-full bg-slate-300 border-2 border-slate-100 shadow-md flex items-center justify-center text-2xl relative">
                      {avatarGender === 'female' ? '👩‍🎓' : '👨‍🎓'}
                    </div>

                    {/* Outerwear if any */}
                    {currentOutfit.outerwearItem && (
                      <div className="w-48 px-3 py-1.5 bg-slate-800/90 rounded-lg border border-purple-400/50 shadow-md text-center text-xs text-purple-200 flex items-center justify-center gap-1.5">
                        <span>🧥</span>
                        <span className="font-semibold truncate text-[11px]">
                          {currentOutfit.outerwearItem.name}
                        </span>
                      </div>
                    )}

                    {/* Top Layer */}
                    <div 
                      className="w-44 px-3 py-2.5 rounded-xl border border-white/30 shadow-lg text-center text-xs text-slate-900 font-bold flex items-center justify-center gap-2"
                      style={{ 
                        backgroundColor: currentOutfit.topItem.colorHex === '#FFFFFF' ? '#F8FAFC' : currentOutfit.topItem.colorHex,
                        color: currentOutfit.topItem.colorHex === '#FFFFFF' || currentOutfit.topItem.colorHex === '#D4B996' ? '#0F172A' : '#FFFFFF'
                      }}
                    >
                      <span>👔</span>
                      <span className="truncate text-xs">{currentOutfit.topItem.name}</span>
                    </div>

                    {/* Bottom Layer */}
                    <div 
                      className="w-36 px-3 py-3 rounded-xl border border-white/20 shadow-md text-center text-xs text-white font-bold flex items-center justify-center gap-2"
                      style={{ backgroundColor: currentOutfit.bottomItem.colorHex }}
                    >
                      <span>👖</span>
                      <span className="truncate text-xs">{currentOutfit.bottomItem.name}</span>
                    </div>

                    {/* Shoes Layer */}
                    {currentOutfit.shoesItem && (
                      <div className="w-28 px-2 py-1 bg-white/90 rounded-lg border border-slate-300 shadow-xs text-center text-slate-900 text-[10px] font-bold flex items-center justify-center gap-1">
                        <span>👟</span>
                        <span className="truncate">{currentOutfit.shoesItem.name}</span>
                      </div>
                    )}
                  </div>

                  {/* Ready to Wear floating status */}
                  <div className="w-full text-center text-[10px] text-slate-400 z-10">
                    เรนเดอร์สัดส่วนชุดแบบเรียลไทม์ 60 FPS
                  </div>
                </div>
              </div>

              {/* Garment Details & Confirmation */}
              <div className="md:col-span-6 space-y-4">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-rose-600">
                    ชุดที่เลือกสวมใส่:
                  </span>
                  <h3 className="text-lg font-bold text-slate-900">{currentOutfit.title}</h3>
                  <p className="text-xs text-slate-500">{currentOutfit.styleVibe}</p>
                </div>

                {/* Garments breakdown chips */}
                <div className="space-y-2">
                  <div className="flex items-center gap-3 p-2.5 rounded-xl border border-slate-200 bg-slate-50/70">
                    <div className="w-12 h-12 rounded-lg overflow-hidden border border-slate-200 bg-slate-100 shrink-0">
                      <img 
                        src={currentOutfit.topItem.image} 
                        alt={currentOutfit.topItem.name}
                        className="w-full h-full object-cover" 
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = '/assets/aistudio/ui_scan.jpg';
                        }}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[10px] font-semibold text-slate-400">เสื้อท่อนบน</div>
                      <div className="font-bold text-xs text-slate-900 truncate">{currentOutfit.topItem.name}</div>
                      <div className="text-[10px] text-slate-500">{currentOutfit.topItem.material}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-2.5 rounded-xl border border-slate-200 bg-slate-50/70">
                    <div className="w-12 h-12 rounded-lg overflow-hidden border border-slate-200 bg-slate-100 shrink-0">
                      <img 
                        src={currentOutfit.bottomItem.image} 
                        alt={currentOutfit.bottomItem.name}
                        className="w-full h-full object-cover" 
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = '/assets/aistudio/ui_classify.jpg';
                        }}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[10px] font-semibold text-slate-400">ท่อนล่าง</div>
                      <div className="font-bold text-xs text-slate-900 truncate">{currentOutfit.bottomItem.name}</div>
                      <div className="text-[10px] text-slate-500">{currentOutfit.bottomItem.material}</div>
                    </div>
                  </div>

                  {currentOutfit.outerwearItem && (
                    <div className="flex items-center gap-3 p-2.5 rounded-xl border border-slate-200 bg-slate-50/70">
                      <div className="w-12 h-12 rounded-lg overflow-hidden border border-slate-200 bg-slate-100 shrink-0">
                        <img 
                          src={currentOutfit.outerwearItem.image} 
                          alt={currentOutfit.outerwearItem.name}
                          className="w-full h-full object-cover" 
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = '/assets/aistudio/ui_analysis.jpg';
                          }}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[10px] font-semibold text-slate-400">เสื้อคลุมทับ</div>
                        <div className="font-bold text-xs text-slate-900 truncate">{currentOutfit.outerwearItem.name}</div>
                        <div className="text-[10px] text-slate-500">{currentOutfit.outerwearItem.material}</div>
                      </div>
                    </div>
                  )}

                  {currentOutfit.shoesItem && (
                    <div className="flex items-center gap-3 p-2.5 rounded-xl border border-slate-200 bg-slate-50/70">
                      <div className="w-12 h-12 rounded-lg overflow-hidden border border-slate-200 bg-slate-100 shrink-0">
                        <img 
                          src={currentOutfit.shoesItem.image} 
                          alt={currentOutfit.shoesItem.name}
                          className="w-full h-full object-cover" 
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = '/assets/aistudio/ui_database.jpg';
                          }}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[10px] font-semibold text-slate-400">รองเท้า</div>
                        <div className="font-bold text-xs text-slate-900 truncate">{currentOutfit.shoesItem.name}</div>
                        <div className="text-[10px] text-slate-500">{currentOutfit.shoesItem.material}</div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Confirmation Action Button */}
                <div className="pt-2 space-y-2">
                  <button
                    onClick={handleConfirmReadyToWear}
                    className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <ThumbsUp className="w-4 h-4" />
                    <span>พร้อมสวมใส่ทันที (Ready to Wear)</span>
                  </button>

                  {isWornRecorded && (
                    <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-medium flex items-center gap-2 animate-in fade-in">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>บันทึกประวัติการสวมใส่ชุดนี้สำหรับวันนี้เรียบร้อยแล้ว! ขอให้เป็นวันที่ยอดเยี่ยมครับ</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
