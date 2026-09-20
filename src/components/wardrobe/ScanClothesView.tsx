import React, { useState, useRef } from 'react';
import { ClothingItem } from '../../types';
import { FIGURES_META } from '../../data/mockData';
import { 
  Camera, 
  Upload, 
  Sparkles, 
  CheckCircle2, 
  RefreshCw, 
  Scan, 
  Maximize2, 
  Zap, 
  Shirt, 
  ArrowRight,
  HelpCircle,
  Tag,
  Eye
} from 'lucide-react';

interface ScanClothesViewProps {
  onScanComplete: (items: ClothingItem[]) => void;
  onNavigateToStep: (tab: string) => void;
}

export const ScanClothesView: React.FC<ScanClothesViewProps> = ({ 
  onScanComplete, 
  onNavigateToStep 
}) => {
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [scanSource, setScanSource] = useState<'preset' | 'upload' | 'camera'>('preset');
  const [selectedPreset, setSelectedPreset] = useState<number>(0);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [detectedBoxes, setDetectedBoxes] = useState<Array<{
    label: string;
    category: string;
    confidence: number;
    color: string;
    box: { top: string; left: string; width: string; height: string };
  }>>([]);
  const [isComplete, setIsComplete] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const presets = [
    {
      id: 0,
      title: 'ตู้เสื้อผ้านักเรียน ปวช. 3 (เครื่องแบบ & สูทพรีเซนต์)',
      desc: 'เสื้อเชิ้ตขาว ปวช., สแล็คกรมท่า, กระโปรงพลีท, เบลเซอร์เทา และรองเท้าผ้าใบ',
      image: FIGURES_META.fig3_1.path,
      itemsFound: 4
    },
    {
      id: 1,
      title: 'ตู้เสื้อผ้าลำลอง & กิจกรรมสาขาธุรกิจดิจิทัล',
      desc: 'เสื้อโปโลวิทยาลัย, เสื้อยืดเอิร์ธโทน, กางเกงยีนส์ฟอก และคาร์ดิแกน',
      image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1000&q=80',
      itemsFound: 4
    }
  ];

  const handleStartScan = () => {
    setIsScanning(true);
    setScanProgress(10);
    setIsComplete(false);
    setDetectedBoxes([]);

    // Simulate real-time Computer Vision detection sequence
    setTimeout(() => {
      setScanProgress(35);
      setDetectedBoxes([
        {
          label: 'เสื้อเชิ้ตนักเรียน ปวช. สีขาว',
          category: 'เสื้อ (Tops)',
          confidence: 98.6,
          color: '#3B82F6',
          box: { top: '25%', left: '20%', width: '28%', height: '35%' }
        }
      ]);
    }, 800);

    setTimeout(() => {
      setScanProgress(65);
      setDetectedBoxes(prev => [
        ...prev,
        {
          label: 'กางเกงสแล็คกรมท่าเข้ม',
          category: 'กางเกง (Pants)',
          confidence: 97.4,
          color: '#10B981',
          box: { top: '45%', left: '52%', width: '25%', height: '40%' }
        },
        {
          label: 'เสื้อเบลเซอร์สูท สีเทาชาโคล',
          category: 'เสื้อคลุม (Outerwear)',
          confidence: 96.1,
          color: '#8B5CF6',
          box: { top: '20%', left: '60%', width: '30%', height: '36%' }
        }
      ]);
    }, 1600);

    setTimeout(() => {
      setScanProgress(100);
      setDetectedBoxes(prev => [
        ...prev,
        {
          label: 'รองเท้าผ้าใบสีขาวมินิมอล',
          category: 'รองเท้า (Footwear)',
          confidence: 99.0,
          color: '#F59E0B',
          box: { top: '75%', left: '30%', width: '20%', height: '18%' }
        }
      ]);
      setIsScanning(false);
      setIsComplete(true);
    }, 2400);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setUploadedImage(event.target?.result as string);
        setScanSource('upload');
        setIsComplete(false);
        setDetectedBoxes([]);
      };
      reader.readAsDataURL(file);
    }
  };

  const currentDisplayImage = scanSource === 'upload' && uploadedImage 
    ? uploadedImage 
    : presets[selectedPreset].image;

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-indigo-900 via-indigo-800 to-slate-900 text-white rounded-2xl p-6 shadow-md border border-indigo-700/50">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/30 text-indigo-200 text-xs font-semibold uppercase tracking-wider border border-indigo-400/30">
                ขั้นตอนที่ 3.5.1 ตามวิธีวิจัย
              </span>
              <span className="text-xs text-indigo-200">
                ภาพประกอบที่ 3.1 สแกนเสื้อผ้า (Scan Clothes)
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold font-serif tracking-tight">
              1. สแกนตู้เสื้อผ้า (Scan Clothes)
            </h1>
            <p className="text-sm text-indigo-200 max-w-2xl leading-relaxed">
              ผู้ใช้งานเปิดระบบและใช้กล้องสมาร์ทโฟนหรืออัปโหลดภาพตู้เสื้อผ้า ระบบ AI Computer Vision จะตรวจจับเสื้อผ้าที่แขวนอยู่ แยกวัตถุอัตโนมัติด้วย Bounding Box แบบเรียลไทม์
            </p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto">
            <button
              onClick={() => onNavigateToStep('classify')}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-medium backdrop-blur-xs border border-white/20 transition-all"
            >
              <span>ไปขั้นตอนถัดไป (จัดหมวดหมู่)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Scanner Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left / Center: Interactive Viewfinder */}
        <div className="lg:col-span-8 space-y-4">
          <div className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-700 shadow-xl relative aspect-4/3 flex items-center justify-center">
            {/* Base Image */}
            <img
              src={currentDisplayImage}
              alt="Scan Clothes Wardrobe"
              className={`w-full h-full object-cover transition-opacity duration-500 ${isScanning ? 'brightness-90 contrast-110' : 'brightness-95'}`}
              referrerPolicy="no-referrer"
            />

            {/* Dark overlay with grid lines during scan */}
            <div className="absolute inset-0 bg-indigo-950/20 pointer-events-none" />

            {/* Scanning Laser Beam */}
            {isScanning && (
              <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_#22d3ee] animate-pulse transition-all duration-300 pointer-events-none"
                   style={{ top: `${scanProgress}%` }}
              >
                <div className="absolute right-4 -top-6 px-2 py-0.5 bg-cyan-500 text-slate-950 font-mono text-[10px] font-bold rounded shadow">
                  AI VISION SCANNING... {scanProgress}%
                </div>
              </div>
            )}

            {/* AI Bounding Boxes */}
            {detectedBoxes.map((item, idx) => (
              <div
                key={idx}
                className="absolute border-2 rounded transition-all duration-500 animate-in fade-in zoom-in-95 pointer-events-none"
                style={{
                  top: item.box.top,
                  left: item.box.left,
                  width: item.box.width,
                  height: item.box.height,
                  borderColor: item.color,
                  backgroundColor: `${item.color}15`
                }}
              >
                {/* Tag label badge */}
                <div 
                  className="absolute -top-6 left-0 text-[10px] font-bold px-2 py-0.5 rounded text-white shadow-sm flex items-center gap-1 whitespace-nowrap"
                  style={{ backgroundColor: item.color }}
                >
                  <Tag className="w-2.5 h-2.5" />
                  <span>{item.label}</span>
                  <span className="opacity-90 font-mono font-normal">({item.confidence}%)</span>
                </div>
              </div>
            ))}

            {/* Scanner Status Badge Over Image */}
            <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-xs font-medium border border-slate-700 flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${isScanning ? 'bg-cyan-400 animate-ping' : isComplete ? 'bg-emerald-400' : 'bg-amber-400'}`} />
                <span>{isScanning ? 'กำลังสแกนและประมวลผล AI...' : isComplete ? 'ตรวจพบเสื้อผ้า 4 ชิ้น พร้อมแยกแยะ' : 'พร้อมสำหรับการสแกน'}</span>
              </span>
            </div>

            {/* Corner Viewfinder Crosshairs */}
            <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-cyan-400/80 pointer-events-none" />
            <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-cyan-400/80 pointer-events-none" />
            <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-cyan-400/80 pointer-events-none" />
            <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-cyan-400/80 pointer-events-none" />

            {/* Completion Floating Banner */}
            {isComplete && (
              <div className="absolute bottom-4 inset-x-4 bg-slate-900/90 backdrop-blur-md border border-emerald-500/50 p-3 rounded-xl flex items-center justify-between animate-in slide-in-from-bottom-2">
                <div className="flex items-center gap-2.5 text-xs text-white">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <div>
                    <div className="font-bold text-emerald-300">สแกนสำเร็จ! สกัดเสื้อผ้า 4 ชิ้นเสร็จสิ้น</div>
                    <div className="text-slate-300 text-[11px]">พร้อมส่งต่อเข้าสู่กระบวนการจัดหมวดหมู่อัตโนมัติ (Auto Classification)</div>
                  </div>
                </div>
                <button
                  onClick={() => onNavigateToStep('classify')}
                  className="px-3 py-1.5 bg-emerald-500 hover:bg-emerald-600 text-slate-950 text-xs font-bold rounded-lg shadow transition-all flex items-center gap-1.5"
                >
                  <span>จัดหมวดหมู่ทันที</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>

          {/* Scanner Controls Bar */}
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <button
                onClick={handleStartScan}
                disabled={isScanning}
                className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-300 text-white font-medium text-xs sm:text-sm shadow-sm hover:shadow transition-all flex items-center gap-2 cursor-pointer"
              >
                {isScanning ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin text-white" />
                    <span>กำลังตรวจจับ... {scanProgress}%</span>
                  </>
                ) : (
                  <>
                    <Scan className="w-4 h-4" />
                    <span>เริ่มสแกนตู้เสื้อผ้า (Scan Closet)</span>
                  </>
                )}
              </button>

              <button
                onClick={() => fileInputRef.current?.click()}
                className="px-3.5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium text-xs sm:text-sm border border-slate-200 transition-all flex items-center gap-2 cursor-pointer"
              >
                <Upload className="w-4 h-4 text-slate-600" />
                <span>อัปโหลดภาพตู้เสื้อผ้า</span>
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileUpload}
              />
            </div>

            <div className="text-xs text-slate-500 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>ความแม่นยำ AI Vision: <strong className="text-slate-800">98.2%</strong></span>
            </div>
          </div>
        </div>

        {/* Right Sidebar: Preset Selection & Extracted Items */}
        <div className="lg:col-span-4 space-y-4">
          {/* Preset Choices */}
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                <Shirt className="w-4 h-4 text-indigo-600" />
                <span>เลือกภาพจำลองตู้เสื้อผ้า</span>
              </h3>
              <span className="text-[11px] text-slate-400">ปวช. 3 เทคโนโลยีธุรกิจดิจิทัล</span>
            </div>

            <div className="space-y-2">
              {presets.map((preset) => (
                <button
                  key={preset.id}
                  onClick={() => {
                    setSelectedPreset(preset.id);
                    setScanSource('preset');
                    setIsComplete(false);
                    setDetectedBoxes([]);
                  }}
                  className={`w-full text-left p-2.5 rounded-xl border transition-all flex items-start gap-3 ${
                    selectedPreset === preset.id && scanSource === 'preset'
                      ? 'border-indigo-600 bg-indigo-50/50 shadow-xs'
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  <img
                    src={preset.image}
                    alt={preset.title}
                    className="w-14 h-14 rounded-lg object-cover border border-slate-200 shrink-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-xs text-slate-900 line-clamp-1">{preset.title}</div>
                    <div className="text-[11px] text-slate-500 mt-0.5 line-clamp-2 leading-relaxed">{preset.desc}</div>
                    <div className="text-[10px] text-indigo-600 font-semibold mt-1">พบเสื้อผ้าหลัก {preset.itemsFound} ชิ้น</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Extracted Items Preview Card */}
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>ชิ้นที่สแกนพบ ({detectedBoxes.length}/4)</span>
              </h3>
              <span className="text-[11px] text-indigo-600 font-medium">Real-time Bounding Box</span>
            </div>

            {detectedBoxes.length === 0 ? (
              <div className="py-8 text-center text-slate-400 space-y-2">
                <Scan className="w-8 h-8 mx-auto stroke-1 text-slate-300" />
                <p className="text-xs">ยังไม่ได้เริ่มสแกน คลิกปุ่ม "เริ่มสแกนตู้เสื้อผ้า" เพื่อให้ AI สกัดเสื้อผ้าอัตโนมัติ</p>
              </div>
            ) : (
              <div className="space-y-2">
                {detectedBoxes.map((item, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg border border-slate-100 bg-slate-50/70 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                      <div>
                        <div className="font-semibold text-slate-800">{item.label}</div>
                        <div className="text-[10px] text-slate-500">{item.category}</div>
                      </div>
                    </div>
                    <span className="font-mono text-[11px] font-bold text-emerald-600">{item.confidence}%</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Research Context Note */}
          <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs space-y-1">
            <div className="font-bold flex items-center gap-1">
              <HelpCircle className="w-3.5 h-3.5 text-amber-700" />
              <span>ความเชื่อมโยงกับระเบียบวิธีวิจัย 3.5</span>
            </div>
            <p className="text-[11px] text-amber-800 leading-relaxed">
              สอดคล้องกับภาพประกอบที่ 3.1 สแกนเสื้อผ้า (Scan Clothes) ในเล่มรายงานวิจัย โดยทดสอบความแม่นยำกับกลุ่มตัวอย่างนักเรียน ปวช. 3 วิทยาลัยเทคโนโลยีหมู่บ้านครู จำนวน 30 คน
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
