import React, { useState, useEffect } from 'react';
import { 
  Lock, 
  Unlock, 
  KeyRound, 
  ShieldCheck, 
  AlertCircle, 
  CheckCircle2, 
  Eye, 
  EyeOff, 
  GraduationCap, 
  BookOpen, 
  Sparkles,
  ArrowRight,
  Fingerprint,
  FileText
} from 'lucide-react';
import { REPORT_METADATA } from '../../data/reportData';

interface ReportLoginLockProps {
  onUnlock: () => void;
}

export const REPORT_PASSCODE = '43210344';

export const ReportLoginLock: React.FC<ReportLoginLockProps> = ({ onUnlock }) => {
  const [passcode, setPasscode] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isShaking, setIsShaking] = useState(false);

  // Focus input automatically on mount
  useEffect(() => {
    const input = document.getElementById('report-passcode-input');
    if (input) {
      input.focus();
    }
  }, []);

  const handleVerify = (codeToVerify?: string) => {
    const targetCode = (codeToVerify ?? passcode).trim();
    if (!targetCode) {
      setError('กรุณากรอกรหัสผ่านเพื่อเข้าถึงรายงานวิจัย');
      triggerShake();
      return;
    }

    if (targetCode === REPORT_PASSCODE) {
      setError(null);
      setIsSuccess(true);
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('academic_report_auth', 'unlocked');
      }
      setTimeout(() => {
        onUnlock();
      }, 700);
    } else {
      setError('รหัสผ่านไม่ถูกต้อง! กรุณากรอกรหัสผ่าน 8 หลักให้ถูกต้อง (43210344)');
      triggerShake();
    }
  };

  const triggerShake = () => {
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 500);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleVerify();
    }
  };

  const handleKeypadPress = (num: string) => {
    if (passcode.length < 12) {
      const next = passcode + num;
      setPasscode(next);
      setError(null);
      if (next.length === 8 && next === REPORT_PASSCODE) {
        handleVerify(next);
      }
    }
  };

  const handleBackspace = () => {
    setPasscode(prev => prev.slice(0, -1));
    setError(null);
  };

  const handleClear = () => {
    setPasscode('');
    setError(null);
  };

  const handleQuickFill = () => {
    setPasscode(REPORT_PASSCODE);
    setError(null);
    handleVerify(REPORT_PASSCODE);
  };

  return (
    <div className="w-full max-w-xl mx-auto my-6 animate-in fade-in zoom-in-95 duration-300">
      <div className={`bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden transition-all duration-300 ${
        isShaking ? 'animate-bounce border-red-300 ring-4 ring-red-100' : ''
      } ${isSuccess ? 'border-emerald-400 ring-4 ring-emerald-100' : ''}`}>
        
        {/* Top Header Banner */}
        <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-6 text-white text-center relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute -top-12 -right-12 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />

          {/* Security Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-200 text-xs font-medium mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-indigo-300" />
            <span>ระบบความปลอดภัยเอกสารวิชาการ • Academic Security</span>
          </div>

          {/* Icon with lock status */}
          <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-tr from-indigo-600 to-indigo-500 text-white flex items-center justify-center shadow-lg shadow-indigo-500/40 mb-3 transition-transform duration-300 hover:scale-105">
            {isSuccess ? (
              <Unlock className="w-8 h-8 text-emerald-300 animate-pulse" />
            ) : (
              <Lock className="w-8 h-8 text-white" />
            )}
          </div>

          <h2 className="text-lg sm:text-xl font-bold tracking-tight text-white font-sans">
            รายงานโครงการวิจัยฉบับสมบูรณ์ (5 บท)
          </h2>
          <p className="text-xs text-indigo-200 mt-1 max-w-md mx-auto line-clamp-2">
            {REPORT_METADATA.projectTitleTh}
          </p>
          <div className="text-[11px] text-slate-400 mt-1">
            {REPORT_METADATA.institution} • ปีการศึกษา {REPORT_METADATA.academicYear}
          </div>
        </div>

        {/* Form Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="text-center space-y-1">
            <div className="text-sm font-semibold text-slate-800 flex items-center justify-center gap-1.5">
              <KeyRound className="w-4 h-4 text-indigo-600" />
              <span>กรุณากรอกรหัสผ่านเพื่อปลดล็อกเอกสาร</span>
            </div>
            <p className="text-xs text-slate-500">
              เอกสารวิจัย 5 บท พร้อมปก สารบัญ และภาคผนวก ได้รับการปกป้องด้วยรหัสผ่านความปลอดภัย
            </p>
          </div>

          {/* Password Input Box */}
          <div className="space-y-3">
            <div className="relative">
              <input
                id="report-passcode-input"
                type={showPassword ? 'text' : 'password'}
                value={passcode}
                onChange={(e) => {
                  setPasscode(e.target.value);
                  setError(null);
                }}
                onKeyDown={handleKeyPress}
                placeholder="ระบุรหัสผ่านเข้าใช้งาน (8 หลัก)"
                maxLength={12}
                disabled={isSuccess}
                className={`w-full px-4 py-3.5 pl-11 pr-24 text-center font-mono text-lg tracking-widest bg-slate-50 border rounded-2xl focus:outline-hidden transition-all ${
                  error 
                    ? 'border-red-400 ring-2 ring-red-200 bg-red-50/50 text-red-900' 
                    : isSuccess
                    ? 'border-emerald-400 ring-2 ring-emerald-200 bg-emerald-50/50 text-emerald-900 font-bold'
                    : 'border-slate-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100'
                }`}
              />
              <KeyRound className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              
              <div className="absolute right-2.5 top-1/2 -translate-y-1/2 flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-200/60 transition-colors"
                  title={showPassword ? 'ซ่อนรหัสผ่าน' : 'แสดงรหัสผ่าน'}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Error or Success feedback message */}
            {error && (
              <div className="flex items-center gap-2 text-xs font-medium text-red-600 bg-red-50 border border-red-200 px-3 py-2 rounded-xl animate-in fade-in">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {isSuccess && (
              <div className="flex items-center justify-center gap-2 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-2.5 rounded-xl animate-in fade-in">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 animate-spin" />
                <span>ยืนยันรหัสผ่านสำเร็จ! กำลังเปิดรายงานวิจัยฉบับสมบูรณ์...</span>
              </div>
            )}
          </div>

          {/* Quick Digit Keypad (Convenient for mobile/touch users) */}
          <div className="bg-slate-50/80 p-3.5 rounded-2xl border border-slate-200/80 space-y-2">
            <div className="text-[11px] font-bold text-slate-500 text-center uppercase tracking-wider">
              แป้นพิมพ์รหัสตัวเลข (Keypad)
            </div>
            <div className="grid grid-cols-3 gap-2">
              {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map((digit) => (
                <button
                  key={digit}
                  type="button"
                  onClick={() => handleKeypadPress(digit)}
                  disabled={isSuccess}
                  className="py-2.5 bg-white hover:bg-indigo-50 active:bg-indigo-100 text-slate-800 font-mono font-bold text-base rounded-xl border border-slate-200 shadow-2xs transition-all hover:border-indigo-300 active:scale-95 cursor-pointer disabled:opacity-50"
                >
                  {digit}
                </button>
              ))}
              <button
                type="button"
                onClick={handleClear}
                disabled={isSuccess}
                className="py-2.5 bg-slate-100 hover:bg-slate-200 active:bg-slate-300 text-slate-600 font-medium text-xs rounded-xl border border-slate-200 shadow-2xs transition-all active:scale-95 cursor-pointer disabled:opacity-50"
              >
                ล้างทั้งหมด
              </button>
              <button
                type="button"
                onClick={() => handleKeypadPress('0')}
                disabled={isSuccess}
                className="py-2.5 bg-white hover:bg-indigo-50 active:bg-indigo-100 text-slate-800 font-mono font-bold text-base rounded-xl border border-slate-200 shadow-2xs transition-all hover:border-indigo-300 active:scale-95 cursor-pointer disabled:opacity-50"
              >
                0
              </button>
              <button
                type="button"
                onClick={handleBackspace}
                disabled={isSuccess}
                className="py-2.5 bg-slate-100 hover:bg-slate-200 active:bg-slate-300 text-slate-600 font-medium text-xs rounded-xl border border-slate-200 shadow-2xs transition-all active:scale-95 cursor-pointer disabled:opacity-50"
              >
                ลบ (⌫)
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2.5 pt-1">
            <button
              type="button"
              onClick={() => handleVerify()}
              disabled={isSuccess}
              className="w-full py-3.5 px-4 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 active:from-indigo-800 active:to-indigo-900 text-white font-bold text-sm rounded-2xl shadow-md shadow-indigo-500/25 flex items-center justify-center gap-2 transition-all active:scale-[0.99] cursor-pointer disabled:opacity-60"
            >
              <span>ยืนยันรหัสผ่านเพื่อเข้าสู่เอกสาร</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Quick Fill Key Hint */}
            <div className="p-3 bg-amber-50/70 border border-amber-200/80 rounded-xl flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-amber-900">
                <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
                <span>รหัสผ่านเข้าถึงเอกสาร: <strong className="font-mono font-bold text-amber-950 bg-amber-100 px-1.5 py-0.5 rounded border border-amber-300">43210344</strong></span>
              </div>
              <button
                type="button"
                onClick={handleQuickFill}
                className="px-2.5 py-1 bg-amber-600 hover:bg-amber-700 active:bg-amber-800 text-white text-[11px] font-bold rounded-lg transition-colors cursor-pointer shrink-0"
              >
                ใส่รหัสอัตโนมัติ
              </button>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="bg-slate-50 px-6 py-3 border-t border-slate-200 text-center text-[11px] text-slate-500">
          สาขาวิชาเทคโนโลยีธุรกิจดิจิทัล • วิทยาลัยเทคโนโลยีหมู่บ้านครู
        </div>
      </div>
    </div>
  );
};
