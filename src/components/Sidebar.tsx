import React from 'react';
import { 
  LayoutDashboard, 
  Scan, 
  Layers, 
  Database, 
  BarChart3, 
  Compass, 
  Eye, 
  GraduationCap, 
  FileText, 
  Sparkles,
  Shirt,
  X,
  ChevronRight,
  Lock,
  Unlock
} from 'lucide-react';
import { NavTab } from '../types';
import { RESEARCH_METADATA } from '../data/mockData';

interface SidebarProps {
  currentTab?: NavTab;
  activeTab?: NavTab;
  onSelectTab?: (tab: NavTab) => void;
  setActiveTab?: (tab: NavTab) => void;
  mobileOpen?: boolean;
  onCloseMobile?: () => void;
  isReportUnlocked?: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({
  currentTab,
  activeTab,
  onSelectTab,
  setActiveTab,
  mobileOpen = false,
  onCloseMobile,
  isReportUnlocked = false,
}) => {
  const selectedTab = currentTab || activeTab || 'dashboard';

  const handleSelectTab = (tabId: NavTab) => {
    if (typeof onSelectTab === 'function') {
      onSelectTab(tabId);
    } else if (typeof setActiveTab === 'function') {
      setActiveTab(tabId);
    }
    if (typeof onCloseMobile === 'function') {
      onCloseMobile();
    }
  };

  const navItems = [
    { 
      id: 'dashboard' as NavTab, 
      label: 'แดชบอร์ดภาพรวม', 
      icon: LayoutDashboard, 
      badge: null,
      sub: 'ภาพรวมระบบ & สถิติ'
    },
    { 
      id: 'scan' as NavTab, 
      label: '1. สแกนเสื้อผ้า', 
      icon: Scan, 
      badge: 'รูป 3.1',
      sub: 'Scan Clothes'
    },
    { 
      id: 'classify' as NavTab, 
      label: '2. จัดหมวดหมู่อัตโนมัติ', 
      icon: Layers, 
      badge: 'รูป 3.2',
      sub: 'Auto Classification'
    },
    { 
      id: 'wardrobe' as NavTab, 
      label: '3. คลังตู้เสื้อผ้าส่วนตัว', 
      icon: Database, 
      badge: 'รูป 3.3',
      sub: 'Digital Wardrobe'
    },
    { 
      id: 'analysis' as NavTab, 
      label: '4. สรุปผลตู้เสื้อผ้า', 
      icon: BarChart3, 
      badge: 'รูป 3.4',
      sub: 'Analysis & Verification'
    },
    { 
      id: 'recommendation' as NavTab, 
      label: '5. ค้นหาสไตล์ & จัดชุด', 
      icon: Compass, 
      badge: 'รูป 3.5',
      sub: 'Style Matching'
    },
    { 
      id: 'tryon' as NavTab, 
      label: '6. ลองชุดเสมือนจริง', 
      icon: Eye, 
      badge: 'รูป 3.6',
      sub: 'Virtual Try-On'
    },
    { 
      id: 'research' as NavTab, 
      label: 'ระเบียบวิธีวิจัย (3.1-3.5)', 
      icon: GraduationCap, 
      badge: 'N=30',
      sub: 'ประชากร & ผลการประเมิน'
    },
    { 
      id: 'report' as NavTab, 
      label: 'รายงานวิจัยฉบับเต็ม', 
      icon: isReportUnlocked ? FileText : Lock, 
      badge: isReportUnlocked ? '🔓 5 บท' : '🔒 43210344',
      sub: isReportUnlocked ? 'Academic Project Report' : 'Academic Project Rep • ล็อกรหัส'
    },
  ];

  const sidebarContent = (
    <div className="flex flex-col h-full bg-slate-900 text-slate-200 border-r border-slate-800">
      {/* Brand Header */}
      <div className="p-4 border-b border-slate-800">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/30">
              <Shirt className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-sm text-white tracking-tight leading-tight">
                Smart Wardrobe AI
              </div>
              <div className="text-[10px] text-slate-400 leading-tight truncate max-w-[150px]">
                {RESEARCH_METADATA.department}
              </div>
            </div>
          </div>
          {onCloseMobile && (
            <button 
              onClick={onCloseMobile}
              className="md:hidden p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Institution Mini Badge */}
        <div className="mt-3 px-2.5 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/60 text-[10px] text-indigo-300 flex items-center justify-between">
          <span>{RESEARCH_METADATA.institution}</span>
          <span className="font-bold text-emerald-400">ปวช. 3</span>
        </div>
      </div>

      {/* Nav List */}
      <div className="flex-1 overflow-y-auto py-3 px-3 space-y-1">
        <div className="px-3 pb-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">
          ขั้นตอนการทำงาน 6 ระบบ (3.5)
        </div>

        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = selectedTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleSelectTab(item.id)}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-all group cursor-pointer ${
                isActive
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20 font-bold'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <Icon className={`w-4 h-4 shrink-0 transition-colors ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-indigo-400'}`} />
                <div className="text-left min-w-0">
                  <div className="truncate text-xs leading-tight">{item.label}</div>
                  <div className={`text-[10px] truncate leading-tight mt-0.5 ${isActive ? 'text-indigo-200' : 'text-slate-400'}`}>
                    {item.sub}
                  </div>
                </div>
              </div>

              {item.badge && (
                <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full shrink-0 ml-1.5 ${
                  isActive
                    ? 'bg-white/20 text-white'
                    : 'bg-slate-800 text-slate-300 border border-slate-700'
                }`}>
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Footer Info */}
      <div className="p-3 border-t border-slate-800 text-[11px] text-slate-400 space-y-1">
        <div className="flex items-center justify-between">
          <span className="text-slate-400">ความพึงพอใจ:</span>
          <span className="text-emerald-400 font-bold">x̄ = 4.67 (มากที่สุด)</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-slate-400">กลุ่มตัวอย่าง:</span>
          <span className="text-slate-300">30 คน (Purposive)</span>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Persistent Sidebar */}
      <aside className="hidden md:flex flex-col w-64 shrink-0 h-screen sticky top-0">
        {sidebarContent}
      </aside>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-slate-950/70 backdrop-blur-xs flex">
          <div className="w-72 h-full">
            {sidebarContent}
          </div>
          <div className="flex-1" onClick={onCloseMobile} />
        </div>
      )}
    </>
  );
};
