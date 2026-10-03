import React from 'react';
import { Smartphone, ShieldCheck, Cpu, Trophy } from 'lucide-react';

export const DifferentiatorsSection: React.FC = () => {
  const differentiators = [
    {
      num: '01',
      title: 'Smartphone-First',
      desc: 'Zero hardware barrier. Participate using the iPhone or Android device already in your pocket.',
      icon: Smartphone,
    },
    {
      num: '02',
      title: 'Zero Wearable Gating',
      desc: 'No expensive smartwatches, chest straps, or continuous monitors required.',
      icon: ShieldCheck,
    },
    {
      num: '03',
      title: 'Biometric Computer Vision',
      desc: 'On-device neural models validate repetition lockouts and cadence objectively.',
      icon: Cpu,
    },
    {
      num: '04',
      title: '3-Phase Knockout',
      desc: 'Progressive elimination stages structured to reward consistency and peak grit.',
      icon: Trophy,
    },
  ];

  return (
    <section id="how" className="relative py-10 sm:py-20 px-3 sm:px-6 lg:px-8 border-t border-b border-zinc-200/80">
      <div className="max-w-7xl mx-auto space-y-6 sm:space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2.5 sm:gap-4">
          <div className="max-w-xl space-y-1 sm:space-y-2">
            <div className="text-[10px] sm:text-xs font-mono font-bold tracking-wider text-[#b38222] uppercase flex items-center gap-1.5 sm:gap-2">
              <span>TOURNAMENT PRINCIPLES</span>
              <span className="text-zinc-300">·</span>
              <span className="text-zinc-500">Universal Access</span>
            </div>
            <h2 className="text-xl sm:text-3xl font-black text-zinc-950 tracking-tight uppercase">
              Engineered for National Scale.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-500 font-normal max-w-sm">
            Designed from day one to deliver Olympic-grade integrity without financial exclusion.
          </p>
        </div>

        {/* 2-column on mobile for compact density */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-5">
          {differentiators.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.num}
                className="surface-card rounded-xl p-3 sm:p-5 space-y-2 sm:space-y-3.5 border border-zinc-200/90 bg-white/90 hover:border-[#b38222]/40 transition-all group"
              >
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="font-bold text-[#b38222] text-xs sm:text-sm">{item.num}</span>
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-zinc-50 border border-zinc-200 text-[#b38222] flex items-center justify-center group-hover:border-[#b38222]/50 transition-colors">
                    <Icon className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="font-bold text-xs sm:text-base text-zinc-950 group-hover:text-[#b38222] transition-colors leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-zinc-500 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
