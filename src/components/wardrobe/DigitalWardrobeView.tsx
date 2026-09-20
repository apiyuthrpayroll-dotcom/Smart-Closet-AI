import React, { useState } from 'react';
import { ClothingItem, ClothingCategory, OccasionType } from '../../types';
import { FIGURES_META } from '../../data/mockData';
import { ReportImage } from '../report/ReportImage';
import { 
  FolderPlus, 
  Search, 
  Filter, 
  Heart, 
  Plus, 
  ArrowRight, 
  Sparkles, 
  Grid, 
  List, 
  Trash2, 
  Tag, 
  Database,
  Shirt
} from 'lucide-react';

interface DigitalWardrobeViewProps {
  items: ClothingItem[];
  onAddItem: (item: ClothingItem) => void;
  onDeleteItem: (id: string) => void;
  onToggleFavorite: (id: string) => void;
  onNavigateToStep: (tab: string) => void;
}

export const DigitalWardrobeView: React.FC<DigitalWardrobeViewProps> = ({
  items,
  onAddItem,
  onDeleteItem,
  onToggleFavorite,
  onNavigateToStep
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeOccasion, setActiveOccasion] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // New item form state
  const [newItemName, setNewItemName] = useState('');
  const [newItemCategory, setNewItemCategory] = useState<ClothingCategory>('tops');
  const [newItemColor, setNewItemColor] = useState('ขาว');
  const [newItemColorHex, setNewItemColorHex] = useState('#FFFFFF');
  const [newItemOccasion, setNewItemOccasion] = useState<OccasionType>('ชุดนักเรียน ปวช.');
  const [newItemImage, setNewItemImage] = useState('https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=400&q=80');

  const filteredItems = items.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesOccasion = activeOccasion === 'all' || item.occasion.includes(activeOccasion as any);
    const matchesSearch = searchQuery === '' || 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.color.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.subCategory.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesOccasion && matchesSearch;
  });

  const handleCreateItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItemName) return;

    const newItem: ClothingItem = {
      id: `c-${Date.now()}`,
      name: newItemName,
      category: newItemCategory,
      subCategory: newItemName,
      color: newItemColor,
      colorHex: newItemColorHex,
      pattern: 'สีพื้น',
      season: 'ทุกฤดู',
      occasion: [newItemOccasion],
      image: newItemImage,
      material: 'ผ้าฝ้ายผสม (Cotton-Poly)',
      wearCount: 0,
      lastWornDate: 'ยังไม่เคยสวมใส่',
      addedAt: new Date().toISOString().split('T')[0],
      aiConfidence: 97.0,
      favorite: false
    };

    onAddItem(newItem);
    setIsAddModalOpen(false);
    setNewItemName('');
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white rounded-2xl p-6 shadow-md border border-blue-700/50">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-blue-500/30 text-blue-200 text-xs font-semibold uppercase tracking-wider border border-blue-400/30">
                ขั้นตอนที่ 3.5.3 ตามวิธีวิจัย
              </span>
              <span className="text-xs text-blue-200">
                ภาพประกอบที่ 3.3 สร้างคลังเก็บข้อมูลส่วนตัว (Digital Wardrobe Database)
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold font-serif tracking-tight">
              3. คลังเก็บข้อมูลตู้เสื้อผ้าส่วนตัว (Digital Wardrobe Database)
            </h1>
            <p className="text-sm text-blue-200 max-w-2xl leading-relaxed">
              ฐานข้อมูลคลังตู้เสื้อผ้าดิจิทัลส่วนตัวของนักเรียน จัดเก็บข้อมูลเสื้อผ้าทุกชิ้นอย่างเป็นระเบียบ ค้นหาง่าย ดูประวัติการสวมใส่ และพร้อมเชื่อมต่อไปยังระบบวิเคราะห์และจัดชุด
            </p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto">
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-medium backdrop-blur-xs border border-white/20 transition-all cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>เพิ่มเสื้อผ้าใหม่</span>
            </button>

            <button
              onClick={() => onNavigateToStep('analysis')}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-500 hover:bg-blue-600 text-slate-950 text-xs font-bold shadow-md transition-all cursor-pointer"
            >
              <span>วิเคราะห์ตู้เสื้อผ้า (ขั้นตอน 4)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Visual Reference & Inventory Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Research Visual Reference Card */}
        <div className="lg:col-span-3 space-y-4">
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                <Database className="w-4 h-4 text-blue-600" />
                <span>ภาพต้นแบบ (Figure 3.3)</span>
              </span>
              <span className="text-[10px] px-2 py-0.5 bg-blue-100 text-blue-800 font-bold rounded-full">
                Digital Database
              </span>
            </div>

            <div className="rounded-lg overflow-hidden border border-slate-200 aspect-4/3 relative">
              <ReportImage
                src={FIGURES_META.fig3_3.path}
                alt="ภาพประกอบที่ 3.3 สร้างคลังเก็บข้อมูลส่วนตัว"
                figureNumber="ภาพประกอบ 3.3"
                title="สร้างคลังเก็บข้อมูลส่วนตัว (Digital Wardrobe Database)"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 to-transparent p-2 text-white text-[11px] pointer-events-none z-10">
                ภาพประกอบที่ 3.3 คลังเก็บข้อมูลส่วนตัว
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              ผู้ใช้สามารถตรวจสอบคลังเสื้อผ้าผ่านแท็บเล็ตหรือสมาร์ทโฟนได้แบบเรียลไทม์ ปัจจุบันมีเสื้อผ้าในคลังทั้งหมด <strong>{items.length}</strong> ชิ้น
            </p>
          </div>

          {/* Occasion Quick Filter */}
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs space-y-2">
            <div className="font-bold text-xs text-slate-800 flex items-center gap-1.5">
              <Filter className="w-3.5 h-3.5 text-blue-600" />
              <span>กรองตามโอกาสใช้งาน</span>
            </div>

            <div className="space-y-1">
              {[
                { id: 'all', label: 'ทั้งหมด' },
                { id: 'ชุดนักเรียน ปวช.', label: '🎓 ชุดนักเรียน ปวช.' },
                { id: 'นำเสนอโครงการธุรกิจดิจิทัล', label: '💼 นำเสนอโครงการธุรกิจ' },
                { id: 'ลำลอง/ไปเที่ยว', label: '☕ ลำลอง/ไปเที่ยว' },
                { id: 'กิจกรรม/กีฬา', label: '⚽ กิจกรรม/กีฬา' }
              ].map((occ) => (
                <button
                  key={occ.id}
                  onClick={() => setActiveOccasion(occ.id)}
                  className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs transition-all flex items-center justify-between ${
                    activeOccasion === occ.id
                      ? 'bg-blue-50 text-blue-700 font-bold border border-blue-200'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <span>{occ.label}</span>
                  <span className="text-[10px] text-slate-400">
                    {occ.id === 'all' ? items.length : items.filter(i => i.occasion.includes(occ.id as any)).length}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Items Catalog */}
        <div className="lg:col-span-9 space-y-4">
          {/* Controls Bar */}
          <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            {/* Search Input */}
            <div className="relative flex-1 max-w-sm">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="ค้นหาเสื้อผ้า เช่น เชิ้ตขาว, สแล็ค, ยีนส์..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 bg-slate-50 rounded-lg text-xs border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Category Tabs */}
            <div className="flex items-center gap-1 overflow-x-auto text-xs shrink-0">
              {[
                { id: 'all', label: 'ทั้งหมด' },
                { id: 'tops', label: 'เสื้อ' },
                { id: 'pants', label: 'กางเกง' },
                { id: 'skirts', label: 'กระโปรง' },
                { id: 'outerwear', label: 'เสื้อคลุม' },
                { id: 'footwear', label: 'รองเท้า' },
                { id: 'accessories', label: 'พร็อพ' }
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-lg font-medium text-xs transition-all whitespace-nowrap ${
                    activeCategory === cat.id
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Items Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredItems.map((item) => (
              <div 
                key={item.id}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all group flex flex-col"
              >
                <div className="aspect-square relative overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/assets/aistudio/ui_scan.jpg';
                    }}
                  />
                  <button
                    onClick={() => onToggleFavorite(item.id)}
                    className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white/80 backdrop-blur-xs flex items-center justify-center text-slate-600 hover:text-rose-500 shadow-xs transition-all"
                  >
                    <Heart className={`w-4 h-4 ${item.favorite ? 'fill-rose-500 text-rose-500' : ''}`} />
                  </button>

                  <div className="absolute bottom-2 left-2 flex items-center gap-1">
                    <span 
                      className="w-3.5 h-3.5 rounded-full border-2 border-white shadow-xs"
                      style={{ backgroundColor: item.colorHex }}
                      title={item.color}
                    />
                    <span className="px-1.5 py-0.5 bg-black/60 backdrop-blur-xs text-white text-[9px] font-bold rounded">
                      ใส่แล้ว {item.wearCount} ครั้ง
                    </span>
                  </div>
                </div>

                <div className="p-3 flex-1 flex flex-col justify-between space-y-2">
                  <div>
                    <div className="text-[10px] text-blue-600 font-semibold uppercase tracking-wider">
                      {item.subCategory}
                    </div>
                    <h4 className="font-bold text-slate-900 text-xs line-clamp-1 mt-0.5">
                      {item.name}
                    </h4>
                    <p className="text-[10px] text-slate-500 mt-0.5">
                      {item.color} • {item.material}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
                    <span className="text-[10px] text-slate-400">
                      เพิ่มเมื่อ {item.addedAt}
                    </span>
                    <button
                      onClick={() => onDeleteItem(item.id)}
                      className="text-slate-400 hover:text-rose-600 p-1 transition-colors"
                      title="ลบเสื้อผ้าชิ้นนี้"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="bg-white rounded-xl border border-slate-200 p-12 text-center text-slate-400 space-y-2">
              <Shirt className="w-10 h-10 mx-auto stroke-1 text-slate-300" />
              <p className="text-sm font-medium text-slate-600">ไม่พบเสื้อผ้าที่ตรงกับเงื่อนไขการค้นหา</p>
              <p className="text-xs">ลองเปลี่ยนหมวดหมู่ หรือสแกนเพิ่มเสื้อผ้าใหม่เข้าสู่ระบบ</p>
            </div>
          )}
        </div>
      </div>

      {/* Add Item Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4 border border-slate-200">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <FolderPlus className="w-5 h-5 text-blue-600" />
                <span>เพิ่มเสื้อผ้าชิ้นใหม่ในตู้</span>
              </h3>
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 text-xl font-bold"
              >
                &times;
              </button>
            </div>

            <form onSubmit={handleCreateItem} className="space-y-3 text-xs">
              <div>
                <label className="font-semibold text-slate-700 block mb-1">ชื่อเสื้อผ้า *</label>
                <input
                  type="text"
                  required
                  placeholder="เช่น เสื้อสูทลำลองสีกรมท่า"
                  value={newItemName}
                  onChange={(e) => setNewItemName(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="font-semibold text-slate-700 block mb-1">หมวดหมู่หลัก</label>
                  <select
                    value={newItemCategory}
                    onChange={(e) => setNewItemCategory(e.target.value as any)}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
                  >
                    <option value="tops">เสื้อ (Tops)</option>
                    <option value="pants">กางเกง (Pants)</option>
                    <option value="skirts">กระโปรง (Skirts)</option>
                    <option value="outerwear">เสื้อคลุม/สูท</option>
                    <option value="footwear">รองเท้า (Footwear)</option>
                    <option value="accessories">เครื่องประดับ</option>
                  </select>
                </div>

                <div>
                  <label className="font-semibold text-slate-700 block mb-1">โอกาสการใช้งาน</label>
                  <select
                    value={newItemOccasion}
                    onChange={(e) => setNewItemOccasion(e.target.value as any)}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
                  >
                    <option value="ชุดนักเรียน ปวช.">ชุดนักเรียน ปวช.</option>
                    <option value="นำเสนอโครงการธุรกิจดิจิทัล">นำเสนอโครงการธุรกิจดิจิทัล</option>
                    <option value="ลำลอง/ไปเที่ยว">ลำลอง/ไปเที่ยว</option>
                    <option value="กิจกรรม/กีฬา">กิจกรรม/กีฬา</option>
                    <option value="งานพิธีการ/ทางการ">งานพิธีการ/ทางการ</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="font-semibold text-slate-700 block mb-1">ชื่อสี</label>
                  <input
                    type="text"
                    value={newItemColor}
                    onChange={(e) => setNewItemColor(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
                  />
                </div>
                <div>
                  <label className="font-semibold text-slate-700 block mb-1">รหัสโค้ดสี</label>
                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      value={newItemColorHex}
                      onChange={(e) => setNewItemColorHex(e.target.value)}
                      className="w-8 h-8 rounded border border-slate-200 cursor-pointer p-0"
                    />
                    <input
                      type="text"
                      value={newItemColorHex}
                      onChange={(e) => setNewItemColorHex(e.target.value)}
                      className="w-full px-2 py-1.5 border border-slate-200 rounded-lg font-mono text-[11px]"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="font-semibold text-slate-700 block mb-1">URL รูปภาพเสื้อผ้า</label>
                <input
                  type="text"
                  value={newItemImage}
                  onChange={(e) => setNewItemImage(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-hidden text-xs"
                />
              </div>

              <div className="pt-3 flex justify-end gap-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-100 font-medium"
                >
                  ยกเลิก
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-sm"
                >
                  บันทึกลงคลังเสื้อผ้า
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
