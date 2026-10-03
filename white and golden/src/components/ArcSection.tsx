import React, { useState } from 'react';
import {
  Layers,
  HeartPulse,
  Mountain,
  CheckCircle2,
  Activity,
  Zap,
  ArrowRight,
  ShieldCheck,
  ChevronDown,
} from 'lucide-react';

interface PillarData {
  num: string;
  code: string;
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  desc: string;
  protocol: string;
  biomarker: string;
  dailyGoal: string;
  metrics: string[];
  icon: typeof Layers;
}

export const ArcSection: React.FC = () => {
  const [imageErrorMap, setImageErrorMap] = useState<Record<string, boolean>>({});
  const [expandedPillar, setExpandedPillar] = useState<string | null>(null);

  const pillars: PillarData[] = [
    {
      num: 'PILLAR 01',
      code: 'ARC-01',
      title: 'Build the Base',
      subtitle: 'Aerobic Foundation & Cellular Base',
      image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=900&auto=format&fit=crop&q=80',
      imageAlt: 'Athlete running along scenic outdoor track in morning light',
      desc: 'Daily movement consistency, foundational aerobic threshold conditioning, and mitochondrial density. The non-negotiable bedrock of athletic longevity.',
      protocol: '45-Min Zone 2 Continuous Aerobic Pace (Walking, Jogging, Cycling) at 60-70% Max HR with steady nasal/diaphragmatic rhythm.',
      biomarker: 'Resting Heart Rate baseline & Sub-maximal Fat Oxidation rate',
      dailyGoal: '45 min daily · 7 consecutive days',
      metrics: ['Zone 2 Cadence', 'Postural Alignment', 'Daily Adherence', 'Fat-Max Ratio'],
      icon: Layers,
    },
    {
      num: 'PILLAR 02',
      code: 'ARC-02',
      title: 'Accelerate Recovery',
      subtitle: 'Autonomic Kinetics & Parasympathetic Drop',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=900&auto=format&fit=crop&q=80',
      imageAlt: 'Athlete in peaceful restorative meditation and recovery breathing',
      desc: 'Heart rate deceleration, nocturnal sleep architecture, and parasympathetic rebound. The contender who rebuilds fastest endures longest under pressure.',
      protocol: '60-second post-exhaustion heart rate drop test via optical PPG phone lens, plus 12-second mindful diaphragmatic breath cycles.',
      biomarker: 'Heart Rate Recovery (HRR) > 25 BPM drop in 60s & nocturnal HRV',
      dailyGoal: '> 25 BPM 60s drop · 85%+ Sleep Efficiency',
      metrics: ['HRV Balance', 'Sleep Architecture', '60s Recovery Drop', 'Vagal Tone'],
      icon: HeartPulse,
    },
    {
      num: 'PILLAR 03',
      code: 'ARC-03',
      title: 'Conquer the Peak',
      subtitle: 'Apex Capacity & Maximal Oxygen Ceilings',
      image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=900&auto=format&fit=crop&q=80',
      imageAlt: 'Focused runner standing triumphantly on an alpine mountain ridge at sunrise',
      desc: 'Maximal-output Cooper distance tests, synchronous diaphragmatic breath holds, and head-to-head elimination showdowns for national standings.',
      protocol: '12-minute Cooper maximal aerobic test camera verified, high-velocity interval repeats (4x 400m), and live spirometry face-offs.',
      biomarker: 'VO2 Max ceiling estimate & Lactate clearance clearance kinetics',
      dailyGoal: 'Top 10% national Cooper distance & Apex stamina multiplier',
      metrics: ['VO2 Max Ceiling', 'Lactate Clearing', 'Apex Point Yield', 'Cooper Distance'],
      icon: Mountain,
    },
  ];

  const toggleExpand = (pillarNum: string) => {
    setExpandedPillar(expandedPillar === pillarNum ? null : pillarNum);
  };

  return (
    <section id="pillars" className="relative py-10 sm:py-20 px-3 sm:px-6 lg:px-8 border-t border-b border-zinc-200/80">
      <div className="max-w-7xl mx-auto space-y-6 sm:space-y-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-2 sm:pb-4 border-b border-zinc-200/80">
          <div className="max-w-2xl space-y-1 sm:space-y-1.5">
            <div className="text-[10px] sm:text-xs font-mono font-bold tracking-wider text-[#b38222] uppercase flex items-center gap-1.5 sm:gap-2">
              <span>PHYSIOLOGICAL CURRICULUM</span>
              <span className="text-zinc-300">·</span>
              <span className="text-zinc-500">The 3 Vital Pillars</span>
            </div>
            <h2 className="text-xl sm:text-3xl font-black text-zinc-950 tracking-tight uppercase">
              Survive. Recover. Conquer.
            </h2>
            <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed">
              Three scientific pillars engineered to forge an unbreakable human organism — from aerobic base to autonomic recovery and apex capacity.
            </p>
          </div>

          <div className="flex items-center gap-1.5 self-start sm:self-auto text-[10px] font-mono text-zinc-600 bg-white border border-zinc-200 px-2.5 py-1 rounded-md shadow-2xs">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>CLINICAL PROTOCOL VERIFIED</span>
          </div>
        </div>

        {/* 3 Pillar Cards with High-Res Athletic Photos & Rich Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-6 items-stretch">
          {pillars.map((item) => {
            const Icon = item.icon;
            const isBroken = imageErrorMap[item.num];
            const isExpanded = expandedPillar === item.num;

            return (
              <div
                key={item.num}
                className="surface-card rounded-xl overflow-hidden flex flex-col justify-between border border-zinc-200/90 bg-white/95 hover:border-[#b38222]/50 transition-all group shadow-2xs"
              >
                {/* Visual Image Header with Information Overlay */}
                <div className="relative h-36 sm:h-48 overflow-hidden bg-zinc-900 border-b border-zinc-100">
                  {!isBroken ? (
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      referrerPolicy="no-referrer"
                      onError={() => {
                        setImageErrorMap((prev) => ({ ...prev, [item.num]: true }));
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.92]"
                    />
                  ) : (
                    /* Elegant Geometric Vector Fallback */
                    <div className="w-full h-full bg-gradient-to-br from-zinc-800 to-zinc-950 p-4 flex flex-col justify-between text-white">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-bold text-[#b38222]">{item.num}</span>
                        <Icon className="w-5 h-5 text-[#b38222]" />
                      </div>
                      <div className="font-bold text-sm text-zinc-200">{item.title}</div>
                    </div>
                  )}

                  {/* Dramatic Ambient Gradient Shadow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20 pointer-events-none" />

                  {/* Top Badges Overlay */}
                  <div className="absolute top-2.5 inset-x-2.5 sm:top-3.5 sm:inset-x-3.5 flex items-center justify-between pointer-events-none z-10">
                    <span className="bg-black/60 backdrop-blur-md text-[#c5a059] border border-white/20 px-2 py-0.5 rounded text-[9px] sm:text-[10px] font-mono font-bold tracking-wider">
                      {item.num}
                    </span>
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-black/60 backdrop-blur-md border border-white/20 text-[#c5a059] flex items-center justify-center shadow-xs">
                      <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#c5a059]" />
                    </div>
                  </div>

                  {/* Bottom Image Title & Subtitle Overlay */}
                  <div className="absolute bottom-2.5 inset-x-2.5 sm:bottom-3 sm:inset-x-3.5 text-white pointer-events-none z-10">
                    <div className="text-[9px] sm:text-[10px] font-mono font-bold text-amber-300 uppercase tracking-wider">
                      {item.subtitle}
                    </div>
                    <div className="text-base sm:text-lg font-black text-white tracking-tight">
                      {item.title}
                    </div>
                  </div>
                </div>

                {/* Card Content & Detailed Information */}
                <div className="p-3.5 sm:p-5 space-y-3 sm:space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2.5">
                    {/* Summary Description */}
                    <p className="text-[11px] sm:text-xs text-zinc-600 leading-relaxed font-normal">
                      {item.desc}
                    </p>

                    {/* Scientific Protocol Box */}
                    <div className="p-2.5 rounded-lg bg-zinc-50 border border-zinc-200/80 space-y-1">
                      <div className="flex items-center gap-1.5 text-[9px] sm:text-[10px] font-mono font-bold text-[#b38222] uppercase">
                        <Activity className="w-3 h-3 text-[#b38222]" />
                        <span>Core Training Protocol</span>
                      </div>
                      <p className="text-[10px] sm:text-[11px] text-zinc-700 leading-normal font-normal">
                        {item.protocol}
                      </p>
                    </div>

                    {/* Expandable Deep Physiological Blueprint */}
                    {isExpanded && (
                      <div className="space-y-2 pt-1 border-t border-zinc-100 text-[10px] sm:text-[11px] animate-in fade-in duration-200">
                        <div className="space-y-0.5">
                          <span className="font-mono font-bold text-zinc-950 uppercase text-[9px]">
                            Primary Physiological Biomarker:
                          </span>
                          <p className="text-zinc-600">{item.biomarker}</p>
                        </div>
                        <div className="space-y-0.5">
                          <span className="font-mono font-bold text-zinc-950 uppercase text-[9px]">
                            Daily Gauntlet Target:
                          </span>
                          <p className="text-[#b38222] font-semibold">{item.dailyGoal}</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Metrics Badges & Expand Trigger */}
                  <div className="pt-2 border-t border-zinc-100 space-y-2">
                    <div className="flex flex-wrap items-center gap-1">
                      {item.metrics.map((m, idx) => (
                        <span
                          key={idx}
                          className="text-[9px] sm:text-[10px] font-mono px-1.5 py-0.5 rounded bg-zinc-100 border border-zinc-200/70 text-zinc-700 font-medium"
                        >
                          {m}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-1 text-[10px] sm:text-xs">
                      <button
                        onClick={() => toggleExpand(item.num)}
                        className="text-[#b38222] font-semibold hover:text-[#9c6f19] flex items-center gap-1 cursor-pointer transition-colors"
                      >
                        <span>{isExpanded ? 'Less Details' : 'Full Blueprint'}</span>
                        <ChevronDown className={`w-3 h-3 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                      </button>

                      <div className="text-[9px] font-mono text-zinc-400">
                        {item.code}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
