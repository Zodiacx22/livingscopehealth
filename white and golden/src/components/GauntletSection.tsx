import React, { useState } from 'react';
import {
  Calendar,
  CheckCircle2,
  Clock,
  Flame,
  Award,
  ShieldCheck,
  Zap,
} from 'lucide-react';

export const GauntletSection: React.FC = () => {
  const [selectedPhase, setSelectedPhase] = useState<number>(0);

  const phases = [
    {
      id: 0,
      phaseCode: 'PHASE 01',
      days: 'Days 1 – 7',
      title: 'The Aerobic Foundation & Baseline Calibration',
      subtitle: '100% Field Participation · Establishing Daily Habit Adherence',
      objective:
        'Calibrate individual biometric baselines across steady-state cardio, resting heart rate deceleration, and nocturnal recovery.',
      keyWorkouts: [
        'Day 1–3: 45-Min Zone 2 Continuous Aerobic Pace (Walking/Jogging/Cycling)',
        'Day 4: Diagnostic Spirometry & Diaphragmatic Breath-Hold Benchmark',
        'Day 5–6: Calisthenic Cadence Validation (Squats & Push-ups Camera CV)',
        'Day 7: First Knockout Gate — Minimum 5 of 7 Daily Submissions',
      ],
      survivalThreshold: '94% Qualification Rate',
      metricFocus: 'Cardiac Efficiency & Resting Recovery Drop',
      multiplier: '1.0x Base Point Multiplier',
    },
    {
      id: 1,
      phaseCode: 'PHASE 02',
      days: 'Days 8 – 14',
      title: 'The Threshold Stress & Lactic Crucible',
      subtitle: 'Elimination Rounds · Anaerobic Capacity Testing',
      objective:
        'Test heart rate recovery under rapid oxygen debt. Daily volume increases by 25% with strict camera verification timers.',
      keyWorkouts: [
        'Day 8–10: High-Intensity Interval Sprint Protocols (4x 400m / 8x 30s All-Out)',
        'Day 11: 1-Minute Post-Exhaustion Heart Rate Recovery Drop Assessment',
        'Day 12–13: Neuromuscular Power & Core Isometric Endurance Under Fatigue',
        'Day 14: Second Knockout Gate — Bottom 25% Cut from Podium Eligibility',
      ],
      survivalThreshold: '55% Field Survival Rate',
      metricFocus: 'HRR (Heart Rate Recovery) & Lactate Cleansing',
      multiplier: '1.5x Point Multiplier Active',
    },
    {
      id: 2,
      phaseCode: 'PHASE 03',
      days: 'Days 15 – 21',
      title: 'The Peak Capacity & Apex Showdown',
      subtitle: 'Championship Round · National Podium Battle',
      objective:
        'The ultimate endurance test. Top qualifiers compete on synchronous daily challenges to settle the city, gym, and solo championships.',
      keyWorkouts: [
        'Day 15–17: Peak Aerobic Volume & Multimodal Longevity Gauntlet',
        'Day 18–19: Live Synchronous Pulmonary & Spirometry Face-Off',
        'Day 20: 12-Minute Cooper Maximal Distance Camera CV Test',
        'Day 21: Championship Apex Showdown & Final National Leaderboard Freeze',
      ],
      survivalThreshold: 'Top 10% Apex Finalists',
      metricFocus: 'Maximal VO2 Max & Composite Longevity Score',
      multiplier: '2.5x Apex Point Multiplier',
    },
  ];

  const current = phases[selectedPhase];

  return (
    <section id="gauntlet" className="relative py-10 sm:py-20 px-3 sm:px-6 lg:px-8 border-t border-b border-zinc-200/80">
      <div className="max-w-7xl mx-auto space-y-6 sm:space-y-10">
        {/* Header */}
        <div className="max-w-2xl space-y-1.5 sm:space-y-2">
          <div className="text-[10px] sm:text-xs font-mono font-bold tracking-wider text-[#b38222] uppercase flex items-center gap-1.5 sm:gap-2">
            <span>04 / PERIODIZATION MATRIX</span>
            <span className="text-zinc-300">·</span>
            <span className="text-zinc-500">Three Progressive Survival Phases</span>
          </div>
          <h2 className="text-xl sm:text-3xl font-black text-zinc-950 tracking-tight uppercase">
            The 21-Day Periodization Architecture.
          </h2>
          <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed">
            A scientifically structured 3-phase athletic progression designed to elevate cardiorespiratory stamina, test recovery kinetics, and reward daily consistency.
          </p>
        </div>

        {/* 3-Phase Tabs Selector — Compact on Phone */}
        <div className="grid grid-cols-3 gap-1.5 sm:gap-4">
          {phases.map((phase) => {
            const isSelected = selectedPhase === phase.id;

            return (
              <button
                key={phase.id}
                onClick={() => setSelectedPhase(phase.id)}
                className={`p-2 sm:p-4 rounded-xl border text-left transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-white border-[#b38222] shadow-sm shadow-[#b38222]/10 ring-1 ring-[#b38222] text-zinc-950'
                    : 'bg-white/80 hover:bg-white border-zinc-200 shadow-2xs text-zinc-600'
                }`}
              >
                <div className="flex items-center justify-between text-[10px] sm:text-xs font-mono mb-1">
                  <span className={`font-bold ${isSelected ? 'text-[#b38222]' : 'text-zinc-500'}`}>{phase.phaseCode}</span>
                  <span className="text-zinc-400 font-medium hidden sm:inline">{phase.days}</span>
                </div>
                <div className="font-bold text-xs sm:text-base text-zinc-950 mb-0.5 line-clamp-1">
                  {phase.title.split('&')[0]}
                </div>
                <div className="text-[10px] sm:text-xs text-zinc-500 line-clamp-1">
                  {phase.days}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Phase Detail Dossier — Sleek & Compact */}
        <div className="surface-card rounded-xl p-3.5 sm:p-6 space-y-3.5 sm:space-y-5 border border-zinc-200/90 bg-white/95 shadow-2xs text-zinc-900">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-zinc-100">
            <div>
              <div className="text-[10px] sm:text-xs font-mono font-bold text-[#b38222]">
                {current.phaseCode} · {current.days}
              </div>
              <h3 className="text-sm sm:text-xl font-bold text-zinc-950">
                {current.title}
              </h3>
              <p className="text-[11px] sm:text-xs text-zinc-500 mt-0.5">
                {current.subtitle}
              </p>
            </div>

            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-zinc-100 border border-zinc-200 text-[#b38222] font-mono text-[10px] sm:text-xs font-bold self-start sm:self-auto">
              <Zap className="w-3 h-3 text-[#b38222]" />
              <span>{current.multiplier}</span>
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-[#b38222]">
              Strategic Objective
            </div>
            <p className="text-[11px] sm:text-xs text-zinc-600 leading-relaxed font-normal">
              {current.objective}
            </p>
          </div>

          <div className="space-y-2 pt-1">
            <div className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-[#b38222]">
              Curated Daily Workouts
            </div>
            <div className="grid sm:grid-cols-2 gap-2 text-[11px] sm:text-xs">
              {current.keyWorkouts.map((workout, idx) => (
                <div
                  key={idx}
                  className="bg-zinc-50 border border-zinc-200/80 p-2 sm:p-2.5 rounded-lg flex items-start gap-2 text-zinc-700"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#b38222] shrink-0 mt-0.5" />
                  <span>{workout}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:gap-4 pt-3 border-t border-zinc-100 text-xs">
            <div className="bg-zinc-50 border border-zinc-200/80 p-2.5 sm:p-3 rounded-lg space-y-0.5">
              <div className="text-[9px] sm:text-[10px] uppercase font-mono font-bold text-[#b38222]">
                Survival Gate
              </div>
              <div className="font-bold text-zinc-950 font-mono text-[11px] sm:text-xs">
                {current.survivalThreshold}
              </div>
            </div>

            <div className="bg-zinc-50 border border-zinc-200/80 p-2.5 sm:p-3 rounded-lg space-y-0.5">
              <div className="text-[9px] sm:text-[10px] uppercase font-mono font-bold text-[#b38222]">
                Primary Metric
              </div>
              <div className="font-bold text-[#b38222] font-mono text-[11px] sm:text-xs">
                {current.metricFocus}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
