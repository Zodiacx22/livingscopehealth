import React from 'react';
import { Trophy, Building2, Dumbbell } from 'lucide-react';

export const PodiumSection: React.FC = () => {
  return (
    <section className="relative py-10 sm:py-20 px-3 sm:px-6 lg:px-8 border-t border-b border-zinc-200/80">
      <div className="max-w-6xl mx-auto space-y-6 sm:space-y-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-1.5 sm:space-y-2">
          <div className="text-[10px] sm:text-xs font-mono font-bold tracking-wider text-[#b38222] uppercase flex items-center justify-center gap-1.5 sm:gap-2">
            <span>06 / AWARDS &amp; HONOURS</span>
            <span className="text-zinc-300">·</span>
            <span className="text-zinc-500">National Championship Honours</span>
          </div>
          <h2 className="text-xl sm:text-3xl font-black text-zinc-950 tracking-tight uppercase">
            Podium Honours &amp; Institutional Trophies.
          </h2>
          <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed">
            Official national trophies, championship grants, and perennial shields awarded across individual, gym, and residential society divisions.
          </p>
        </div>

        {/* 3 Main Individual Podiums (Snug & Compact on Phone) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 items-end">
          {/* 2nd Place Runner-Up */}
          <div className="surface-card rounded-xl p-3.5 sm:p-6 text-center space-y-2.5 sm:space-y-3.5 order-2 sm:order-1 border-zinc-200 bg-white/90 shadow-2xs">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-zinc-100 text-zinc-700 border border-zinc-200 flex items-center justify-center mx-auto font-black text-sm sm:text-base font-mono">
              02
            </div>
            <div className="space-y-0.5">
              <div className="text-[9px] sm:text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-wider">
                1st Runner-Up
              </div>
              <h3 className="text-sm sm:text-base font-bold text-zinc-950">
                Silver Medalist
              </h3>
            </div>
            <div className="font-mono text-xs sm:text-sm font-bold text-zinc-800 bg-zinc-50 border border-zinc-200 py-1.5 px-2.5 rounded-lg">
              To Be Announced Soon
            </div>
            <div className="text-[10px] sm:text-xs text-zinc-500 font-medium pt-1.5 border-t border-zinc-100">
              National Silver Medal &amp; Citation
            </div>
          </div>

          {/* 1st Place Champion (Elevated) */}
          <div className="surface-card rounded-xl p-4 sm:p-7 text-center space-y-3 sm:space-y-4 border-[#b38222] bg-white shadow-sm order-1 sm:order-2 sm:-translate-y-2 ring-1 ring-[#b38222]/30">
            <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl bg-[#b38222] text-white flex items-center justify-center mx-auto shadow-xs">
              <Trophy className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
            </div>
            <div className="space-y-0.5">
              <div className="text-[10px] sm:text-xs font-mono font-bold text-[#b38222] uppercase tracking-wider">
                National Champion
              </div>
              <h3 className="text-base sm:text-2xl font-black text-zinc-950">
                Gold Cup Winner
              </h3>
            </div>
            <div className="font-mono text-sm sm:text-base font-black text-[#b38222] bg-amber-50/60 border border-[#b38222]/30 py-2 px-3 rounded-lg shadow-2xs">
              To Be Announced Soon
            </div>
            <div className="text-[10px] sm:text-xs text-zinc-500 font-medium pt-2 border-t border-zinc-100">
              National Gold Trophy + Champion Grant
            </div>
          </div>

          {/* 3rd Place Runner-Up */}
          <div className="surface-card rounded-xl p-3.5 sm:p-6 text-center space-y-2.5 sm:space-y-3.5 order-3 border-zinc-200 bg-white/90 shadow-2xs">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-zinc-100 text-zinc-700 border border-zinc-200 flex items-center justify-center mx-auto font-black text-sm sm:text-base font-mono">
              03
            </div>
            <div className="space-y-0.5">
              <div className="text-[9px] sm:text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-wider">
                2nd Runner-Up
              </div>
              <h3 className="text-sm sm:text-base font-bold text-zinc-950">
                Bronze Medalist
              </h3>
            </div>
            <div className="font-mono text-xs sm:text-sm font-bold text-zinc-800 bg-zinc-50 border border-zinc-200 py-1.5 px-2.5 rounded-lg">
              To Be Announced Soon
            </div>
            <div className="text-[10px] sm:text-xs text-zinc-500 font-medium pt-1.5 border-t border-zinc-100">
              National Bronze Medal &amp; Citation
            </div>
          </div>
        </div>

        {/* Institutional Grants (Gyms & Societies) — Compact Cards */}
        <div className="grid sm:grid-cols-2 gap-2.5 sm:gap-4">
          <div className="surface-card p-3.5 sm:p-4 rounded-xl flex items-center gap-3 border border-zinc-200 bg-white/95 shadow-2xs">
            <div className="w-9 h-9 rounded-lg bg-[#b38222]/10 border border-[#b38222]/20 text-[#b38222] flex items-center justify-center shrink-0">
              <Dumbbell className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <div className="text-[9px] sm:text-[10px] font-mono font-bold text-[#b38222] uppercase">
                Institutional Division
              </div>
              <div className="font-bold text-xs sm:text-sm text-zinc-950 truncate">
                Fitness Center Shield · TBA Soon
              </div>
              <div className="text-[10px] sm:text-xs text-zinc-500 truncate">
                Awarded to gym facility accumulating top verified rep volume.
              </div>
            </div>
          </div>

          <div className="surface-card p-3.5 sm:p-4 rounded-xl flex items-center gap-3 border border-zinc-200 bg-white/95 shadow-2xs">
            <div className="w-9 h-9 rounded-lg bg-[#b38222]/10 border border-[#b38222]/20 text-[#b38222] flex items-center justify-center shrink-0">
              <Building2 className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <div className="text-[9px] sm:text-[10px] font-mono font-bold text-[#b38222] uppercase">
                Residential Division
              </div>
              <div className="font-bold text-xs sm:text-sm text-zinc-950 truncate">
                Inter-Society Trophy · TBA Soon
              </div>
              <div className="text-[10px] sm:text-xs text-zinc-500 truncate">
                Awarded to estate achieving highest active household participation.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
