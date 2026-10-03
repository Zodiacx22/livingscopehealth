import React, { useState } from 'react';
import { Apple, Play, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';

interface CtaSectionProps {
  onOpenRegister: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onOpenRegister }) => {
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  const handleDownload = (platform: 'iOS' | 'Android') => {
    setDownloadSuccess(`Living Scope Health ${platform} Client — Download link generated.`);
    setTimeout(() => {
      setDownloadSuccess(null);
    }, 4500);
  };

  return (
    <section className="relative py-10 sm:py-20 px-3 sm:px-6 lg:px-8 border-t border-b border-zinc-200/80">
      <div className="max-w-5xl mx-auto">
        <div className="surface-card rounded-2xl p-4 sm:p-10 lg:p-12 border border-zinc-200/90 bg-white/95 text-zinc-950 space-y-4 sm:space-y-6 relative overflow-hidden shadow-sm">
          <div className="max-w-2xl space-y-2 sm:space-y-3 relative z-10">
            <div className="text-[10px] sm:text-xs font-mono font-bold tracking-wider text-[#b38222] uppercase flex items-center gap-1.5 sm:gap-2">
              <span>08 / FINAL CALL</span>
              <span className="text-zinc-300">·</span>
              <span className="text-zinc-500">Season 01 Gauntlet</span>
            </div>

            <h2 className="text-xl sm:text-4xl font-black tracking-tight text-zinc-950 leading-tight uppercase">
              Your 21-Day Gauntlet <br />
              <span className="text-zinc-500 font-light italic">Begins on Your Phone.</span>
            </h2>

            <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed font-normal">
              Download the Living Scope Health app, select your arena division, and take your initial diaphragmatic calibration baseline today.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-1 relative z-10">
            <button
              onClick={() => onOpenRegister()}
              className="btn-brass px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-semibold text-xs sm:text-sm tracking-wide flex items-center justify-center gap-1.5 cursor-pointer shadow-xs active:scale-95"
            >
              <span>Register Now for Season 01</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => handleDownload('iOS')}
              className="btn-editorial px-3.5 py-2 sm:px-5 sm:py-3 rounded-lg font-medium text-xs sm:text-sm flex items-center justify-center gap-1.5 cursor-pointer active:scale-95"
            >
              <Apple className="w-3.5 h-3.5" />
              <span>Apple App Store</span>
            </button>

            <button
              onClick={() => handleDownload('Android')}
              className="btn-editorial px-3.5 py-2 sm:px-5 sm:py-3 rounded-lg font-medium text-xs sm:text-sm flex items-center justify-center gap-1.5 cursor-pointer active:scale-95"
            >
              <Play className="w-3.5 h-3.5" />
              <span>Google Play</span>
            </button>
          </div>

          {downloadSuccess && (
            <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] sm:text-xs font-mono font-medium flex items-center gap-2 animate-fade-up">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>{downloadSuccess}</span>
            </div>
          )}

          <div className="pt-3 sm:pt-4 border-t border-zinc-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[10px] sm:text-xs font-mono text-zinc-500 relative z-10">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Zero Wearables Required · Free Baseline Assessment</span>
            </div>
            <div>
              <span>iOS 15+ &amp; Android 10+ Compatible</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
