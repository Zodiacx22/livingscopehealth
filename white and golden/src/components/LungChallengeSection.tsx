import React, { useState, useEffect, useRef } from 'react';
import {
  Wind,
  RotateCcw,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Play,
  Square,
  Activity,
  Heart,
  Award,
} from 'lucide-react';
import { oceanAudio } from '../services/oceanAudioEngine';

interface LungChallengeSectionProps {
  onOpenRegister: () => void;
}

interface TierInfo {
  id: number;
  name: string;
  range: string;
  minSeconds: number;
  maxSeconds: number;
  percentile: string;
  clinicalNote: string;
}

const TIERS: TierInfo[] = [
  {
    id: 1,
    name: 'Baseline Pulmonary',
    range: '0 – 15 Seconds',
    minSeconds: 0,
    maxSeconds: 15,
    percentile: 'Bottom 40% India',
    clinicalNote: 'High CO2 sensitivity. Vital capacity can expand by 35% across the 21-day gauntlet.',
  },
  {
    id: 2,
    name: 'Functional Conditioning',
    range: '16 – 30 Seconds',
    minSeconds: 16,
    maxSeconds: 30,
    percentile: 'Top 50% India',
    clinicalNote: 'Healthy everyday diaphragm tone. Fully qualified for Arena qualifying rounds.',
  },
  {
    id: 3,
    name: 'Athletic Aerobic',
    range: '31 – 45 Seconds',
    minSeconds: 31,
    maxSeconds: 45,
    percentile: 'Top 20% India',
    clinicalNote: 'High parasympathetic tolerance and pulmonary gas-exchange efficiency.',
  },
  {
    id: 4,
    name: 'Elite Olympic Apex',
    range: '46+ Seconds',
    minSeconds: 46,
    maxSeconds: 9999,
    percentile: 'Top 4% India',
    clinicalNote: 'Exceptional cellular endurance. Primed for national leaderboard podium placement.',
  },
];

export const LungChallengeSection: React.FC<LungChallengeSectionProps> = ({ onOpenRegister }) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const [completedTime, setCompletedTime] = useState<number | null>(null);
  const [highestUnlockedTier, setHighestUnlockedTier] = useState<number>(0);
  const [milestoneNotice, setMilestoneNotice] = useState<string | null>(null);

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number>(0);
  const noticeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const currentSeconds = isActive
    ? Math.floor(elapsedTime / 10)
    : completedTime !== null
    ? Math.floor(completedTime / 10)
    : 0;

  const activeTier = TIERS.find((t) => currentSeconds >= t.minSeconds && currentSeconds <= t.maxSeconds) || TIERS[0];

  useEffect(() => {
    if (isActive) {
      startTimeRef.current = Date.now() - elapsedTime * 100;
      timerRef.current = setInterval(() => {
        const delta = Math.floor((Date.now() - startTimeRef.current) / 100);
        setElapsedTime(delta);
      }, 100);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isActive]);

  useEffect(() => {
    if (!isActive) return;

    const sec = Math.floor(elapsedTime / 10);
    let newTier = 1;
    if (sec >= 46) newTier = 4;
    else if (sec >= 31) newTier = 3;
    else if (sec >= 16) newTier = 2;

    if (newTier > highestUnlockedTier) {
      setHighestUnlockedTier(newTier);
      const tierObj = TIERS.find((t) => t.id === newTier);
      if (tierObj) {
        setMilestoneNotice(`UNLOCKED: ${tierObj.name.toUpperCase()} (${tierObj.percentile})`);
        try {
          if (oceanAudio.getIsRunning()) {
            oceanAudio.playSonarPing();
          }
        } catch {
          // Audio fallback
        }
        if (noticeTimeoutRef.current) clearTimeout(noticeTimeoutRef.current);
        noticeTimeoutRef.current = setTimeout(() => {
          setMilestoneNotice(null);
        }, 3200);
      }
    }

    return () => {
      if (noticeTimeoutRef.current) clearTimeout(noticeTimeoutRef.current);
    };
  }, [isActive, elapsedTime, highestUnlockedTier]);

  const handleStart = () => {
    setCompletedTime(null);
    setElapsedTime(0);
    setHighestUnlockedTier(1);
    setIsActive(true);

    try {
      if (oceanAudio.getIsRunning()) {
        oceanAudio.playBubble();
      }
    } catch {
      // Audio fallback
    }
  };

  const handleStop = () => {
    setIsActive(false);
    setCompletedTime(elapsedTime);

    try {
      if (oceanAudio.getIsRunning()) {
        oceanAudio.playSonarPing();
      }
    } catch {
      // Audio fallback
    }
  };

  const handleReset = () => {
    setIsActive(false);
    setElapsedTime(0);
    setCompletedTime(null);
    setHighestUnlockedTier(0);
    setMilestoneNotice(null);
  };

  const formatTime = (tenths: number) => {
    const totalSeconds = Math.floor(tenths / 10);
    const m = Math.floor(totalSeconds / 60);
    const s = totalSeconds % 60;
    const d = tenths % 10;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}.${d}`;
  };

  const dialProgress = Math.min(100, (currentSeconds / 60) * 100);
  const strokeDashoffset = 440 - (440 * dialProgress) / 100;

  return (
    <section id="lungs" className="relative py-10 sm:py-20 px-3 sm:px-6 lg:px-8 border-t border-b border-zinc-200/80">
      <div className="max-w-7xl mx-auto space-y-6 sm:space-y-10">
        {/* Header */}
        <div className="max-w-2xl space-y-1.5 sm:space-y-2">
          <div className="text-[10px] sm:text-xs font-mono font-bold tracking-wider text-[#b38222] uppercase flex items-center gap-1.5 sm:gap-2">
            <span>03 / PULMONARY VITAL LAB</span>
            <span className="text-zinc-300">·</span>
            <span className="text-zinc-500">Diaphragmatic Spirometry Protocol</span>
          </div>
          <h2 className="text-xl sm:text-3xl font-black text-zinc-950 tracking-tight uppercase">
            Test Your Vital Capacity.
          </h2>
          <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed">
            Pulmonary breath-hold capacity is an established clinical biomarker for autonomic regulation, cardiorespiratory reserve, and cellular longevity.
          </p>
        </div>

        {/* Clinical Spirometry Dial & Readout Grid */}
        <div className="grid lg:grid-cols-12 gap-4 sm:gap-6 items-stretch">
          {/* Main Dial Console */}
          <div className="lg:col-span-6 surface-card rounded-xl p-4 sm:p-6 flex flex-col justify-between items-center text-center relative overflow-hidden border border-zinc-200 bg-white/95 shadow-2xs">
            {/* Live Milestone Banner */}
            {milestoneNotice && (
              <div className="absolute top-3 inset-x-3 bg-[#b38222] text-white py-1.5 px-3 rounded-lg font-mono text-[11px] font-bold animate-fade-up shadow-sm z-20">
                {milestoneNotice}
              </div>
            )}

            {/* Instruction Kicker */}
            <div className="space-y-0.5">
              <div className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-[#b38222]">
                {isActive ? 'HOLDING IN BREATH' : completedTime !== null ? 'TEST COMPLETE' : 'READY FOR INTAKE'}
              </div>
              <p className="text-[11px] sm:text-xs text-zinc-500 max-w-xs">
                {isActive
                  ? 'Keep diaphragm relaxed. Avoid swallowing or tensing shoulders.'
                  : completedTime !== null
                  ? 'Great effort! Review your national clinical percentile below.'
                  : 'Take 2 deep breaths, fill lungs completely, and press Start.'}
              </p>
            </div>

            {/* Central Precision Gauge — Compact on Phone */}
            <div className="relative my-4 sm:my-6 w-40 h-40 sm:w-56 sm:h-56 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 160 160">
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  fill="none"
                  stroke="rgba(0, 0, 0, 0.06)"
                  strokeWidth="6"
                />
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  fill="none"
                  stroke="#b38222"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeDasharray="440"
                  strokeDashoffset={strokeDashoffset}
                  className="transition-all duration-100 ease-linear"
                  style={{
                    filter: 'drop-shadow(0 0 6px rgba(179, 130, 34, 0.3))',
                  }}
                />
              </svg>

              {/* Digital Center Dial Metrics */}
              <div className="absolute inset-0 flex flex-col items-center justify-center space-y-0.5">
                <div className="text-2xl sm:text-3xl font-mono font-black tracking-tight text-zinc-950 tabular-nums">
                  {formatTime(elapsedTime)}
                </div>
                <div className="text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider text-[#b38222]">
                  {activeTier.name}
                </div>
                <div className="text-[9px] sm:text-[10px] text-zinc-500 font-medium">
                  {activeTier.percentile}
                </div>
              </div>
            </div>

            {/* Tactile Timer Action Controls */}
            <div className="flex items-center gap-2 w-full max-w-xs">
              {!isActive ? (
                <button
                  onClick={handleStart}
                  className="btn-brass flex-1 py-2 sm:py-2.5 px-3 rounded-lg font-semibold text-xs flex items-center justify-center gap-1.5 cursor-pointer shadow-xs active:scale-95"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>{completedTime !== null ? 'Retest Protocol' : 'Begin Intake'}</span>
                </button>
              ) : (
                <button
                  onClick={handleStop}
                  className="flex-1 py-2 sm:py-2.5 px-3 rounded-lg font-semibold text-xs bg-zinc-900 hover:bg-zinc-800 text-white flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-xs active:scale-95"
                >
                  <Square className="w-3.5 h-3.5 fill-current" />
                  <span>Exhale &amp; Stop</span>
                </button>
              )}

              {(elapsedTime > 0 || completedTime !== null) && !isActive && (
                <button
                  onClick={handleReset}
                  className="p-2 sm:p-2.5 rounded-lg border border-zinc-200 bg-zinc-100 hover:bg-zinc-200 text-zinc-600 transition-all cursor-pointer"
                  title="Reset test"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Post-Test Outcome Trigger */}
            {completedTime !== null && !isActive && (
              <div className="mt-3.5 w-full pt-2.5 border-t border-zinc-100 flex items-center justify-between">
                <div className="text-left">
                  <div className="text-[9px] font-mono text-zinc-500 uppercase">Score</div>
                  <div className="text-xs font-bold text-[#b38222]">{activeTier.percentile}</div>
                </div>
                <button
                  onClick={onOpenRegister}
                  className="btn-brass text-[11px] font-semibold py-1.5 px-3 rounded-lg flex items-center gap-1 cursor-pointer shadow-xs"
                >
                  <span>Submit</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            )}
          </div>

          {/* Clinical Benchmarks & National Percentile Breakdown */}
          <div className="lg:col-span-6 space-y-2.5 sm:space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="text-[10px] sm:text-xs font-mono font-bold tracking-wider text-[#b38222] uppercase">
                National Benchmarks
              </div>

              {TIERS.map((tier) => {
                const isCurrentTier = activeTier.id === tier.id;

                return (
                  <div
                    key={tier.id}
                    className={`surface-card p-2.5 sm:p-3.5 rounded-xl transition-all border ${
                      isCurrentTier
                        ? 'border-[#b38222] bg-white shadow-xs ring-1 ring-[#b38222]'
                        : 'border-zinc-200/90 bg-white/80 shadow-2xs'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-1.5">
                        <span className={`w-1.5 h-1.5 rounded-full ${isCurrentTier ? 'bg-[#b38222] animate-pulse' : 'bg-zinc-400'}`} />
                        <h4 className="font-bold text-xs sm:text-sm text-zinc-950">{tier.name}</h4>
                      </div>
                      <span className="text-[10px] sm:text-xs font-mono font-bold text-[#b38222]">
                        {tier.range}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-[10px] sm:text-xs text-zinc-500 mb-1 font-mono">
                      <span>{tier.percentile}</span>
                      {isCurrentTier && (
                        <span className="text-[#b38222] font-bold text-[9px] uppercase">
                          Benchmark
                        </span>
                      )}
                    </div>

                    <p className="text-[11px] sm:text-xs text-zinc-600 leading-relaxed font-normal">
                      {tier.clinicalNote}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Bottom Trust Badge */}
            <div className="p-2.5 sm:p-3 rounded-xl bg-zinc-50 border border-zinc-200 flex items-center gap-2.5 text-[10px] sm:text-xs text-zinc-600 font-mono">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                Standardized diaphragmatic spirometry protocol. Acoustic verification prevents false triggers.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
