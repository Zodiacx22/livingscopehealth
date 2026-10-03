import React, { useState } from 'react';
import {
  ArrowRight,
  Activity,
  ShieldCheck,
  Trophy,
  Users,
  Dumbbell,
  Building2,
  User,
  ChevronRight,
} from 'lucide-react';

interface HeroSectionProps {
  onOpenRegister: (arenaIndex?: number) => void;
  depthMeters?: number;
  pressureAtm?: number;
  zoneName?: string;
  onIgniteBurner?: () => void;
}

const ARENA_DECK = [
  {
    id: 0,
    number: '01',
    code: 'ARENA-SOLO',
    title: 'The Solo Field',
    division: 'Individual Open Championship',
    badge: 'Open Division',
    gate: 'Direct Entry · Zero Gate',
    target: 'Solo athletes, endurance runners, and individual lifters seeking national ranking.',
    mechanics: 'Daily joint-angle adherence, push/squat lockout verification, and breath endurance.',
    icon: User,
  },
  {
    id: 1,
    number: '02',
    code: 'ARENA-SQUAD',
    title: 'Private Squads',
    division: 'Friends & Family Circles',
    badge: 'Closed Pod',
    gate: 'Private Room · Max 25',
    target: 'Cross-generational families, workout buddy circles, and friend groups.',
    mechanics: 'Age-normalized handicap algorithm ensuring equitable scoring across generations.',
    icon: Users,
  },
  {
    id: 2,
    number: '03',
    code: 'ARENA-GYM',
    title: 'Affiliate Gym League',
    division: 'Commercial Centers & Boxes',
    badge: 'Affiliate League',
    gate: 'Mandatory 200 Gate',
    target: 'Commercial fitness gyms, strength training centers, and combat sports academies.',
    mechanics: 'Aggregated verified rep volume across all certified center members.',
    icon: Dumbbell,
  },
  {
    id: 3,
    number: '04',
    code: 'ARENA-ESTATE',
    title: 'Society Shield',
    division: 'Residential Complexes',
    badge: 'Community Div',
    gate: 'Mandatory 150 Gate',
    target: 'Gated communities, apartment associations, and township societies.',
    mechanics: 'Community density ratio: highest active household participation earns the shield.',
    icon: Building2,
  },
];

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenRegister,
}) => {
  const [selectedArenaId, setSelectedArenaId] = useState<number>(0);
  const currentArena = ARENA_DECK[selectedArenaId];
  const CurrentIcon = currentArena.icon;

  return (
    <section id="hero" className="relative pt-20 sm:pt-32 pb-12 sm:pb-24 px-3 sm:px-6 lg:px-8 overflow-hidden">
      {/* Subtle Warm Luminous Glow */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[380px] bg-gradient-to-b from-amber-100/35 via-stone-50/15 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-14">
        {/* Centered High-Impact Editorial Hero (Clean, Compact on Phone) */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5 sm:space-y-6">
          {/* Subtle Brass Kicker (Zero-Pill Discipline) */}
          <div className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-[#b38222] uppercase flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
            <span>SEASON 01 · 2026</span>
            <span className="text-zinc-300">/</span>
            <span>NATIONAL CHAMPIONSHIP</span>
            <span className="text-zinc-300">/</span>
            <span className="text-zinc-500">SMARTPHONE VERIFIED</span>
          </div>

          {/* Sculptural Display Title — Small & Cool on Phone, Grand on Desktop */}
          <h1 className="text-2xl sm:text-5xl lg:text-7xl font-black text-zinc-950 tracking-tight uppercase leading-[1.1]">
            Every Citizen <br />
            <span className="text-zinc-500 font-light italic">Fitness League</span>
          </h1>

          {/* Editorial Lede — Snug & Crisp on Mobile */}
          <p className="text-xs sm:text-base text-zinc-600 leading-relaxed font-normal max-w-xl mx-auto px-2">
            India's smartphone-first inter-community athletic tournament. Real biometric discipline, zero wearable barriers, and computer-vision integrity across four national divisions.
          </p>

          {/* Action Suite (Centered & Compact on Mobile) */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pt-1 sm:pt-2">
            <button
              onClick={() => onOpenRegister(selectedArenaId)}
              className="btn-brass px-4 py-2 sm:px-6 sm:py-3 rounded-lg text-xs sm:text-sm font-semibold flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer shadow-xs active:scale-95"
            >
              <span>Claim Championship Pass</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <a
              href="#arenas"
              className="btn-editorial px-3.5 py-2 sm:px-5 sm:py-3 rounded-lg text-xs sm:text-sm font-medium flex items-center justify-center gap-1.5 active:scale-95"
            >
              <span>Explore 4 Arenas</span>
            </a>

            <a
              href="#lungs"
              className="px-3 py-1.5 sm:px-4 sm:py-2.5 rounded-lg text-[11px] sm:text-sm font-semibold text-[#b38222] hover:bg-[#b38222]/10 transition-colors flex items-center justify-center gap-1"
            >
              <Activity className="w-3.5 h-3.5" />
              <span>Spirometry Lab</span>
            </a>
          </div>

          {/* Minimalist Unboxed Metric Strip (Compact on Mobile) */}
          <div className="pt-3 sm:pt-5 border-t border-zinc-200/80 flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-6 gap-y-1 text-[10px] sm:text-xs font-mono text-zinc-500">
            <div className="flex items-center gap-1.5">
              <span className="text-zinc-900 font-bold">21 Days</span>
              <span className="text-zinc-500">Gauntlet</span>
            </div>
            <span className="text-zinc-300">·</span>
            <div className="flex items-center gap-1.5">
              <span className="text-zinc-900 font-bold">4 Arenas</span>
              <span className="text-zinc-500">Divisions</span>
            </div>
            <span className="text-zinc-300">·</span>
            <div className="flex items-center gap-1.5">
              <span className="text-zinc-900 font-bold">100% Mobile</span>
              <span className="text-zinc-500">Anti-Cheat</span>
            </div>
            <span className="text-zinc-300">·</span>
            <div className="flex items-center gap-1.5">
              <span className="text-[#b38222] font-bold">Prize Grants</span>
              <span className="text-zinc-500">To Be Announced</span>
            </div>
          </div>
        </div>

        {/* Interactive 4-Arena Card Deck — 2x2 Grid on Mobile for Clean Viewport Flow */}
        <div className="space-y-3 sm:space-y-5">
          <div className="flex items-center justify-between border-b border-zinc-200/80 pb-2 text-[10px] sm:text-xs font-mono">
            <div className="uppercase tracking-wider text-zinc-500">
              01 / BATTLEGROUND DECK
            </div>
            <div className="font-bold text-[#b38222]">
              SELECT TO INSPECT
            </div>
          </div>

          {/* 4 Cards Grid — 2 columns on phone screen for compact, cool look */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
            {ARENA_DECK.map((arena) => {
              const Icon = arena.icon;
              const isSelected = selectedArenaId === arena.id;

              return (
                <button
                  key={arena.id}
                  onClick={() => setSelectedArenaId(arena.id)}
                  className={`text-left p-3 sm:p-4 rounded-xl border transition-all cursor-pointer relative flex flex-col justify-between min-h-[110px] sm:min-h-[160px] ${
                    isSelected
                      ? 'bg-white border-[#b38222] shadow-sm shadow-[#b38222]/10 ring-1 ring-[#b38222]'
                      : 'bg-white/85 border-zinc-200 hover:border-zinc-300 shadow-2xs text-zinc-600'
                  }`}
                >
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between w-full">
                    <span className={`font-mono text-[10px] sm:text-xs font-bold ${isSelected ? 'text-[#b38222]' : 'text-zinc-400'}`}>
                      {arena.number}
                    </span>
                    <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center ${isSelected ? 'bg-[#b38222] text-white' : 'bg-zinc-100 text-zinc-600'}`}>
                      <Icon className="w-3 h-3 sm:w-4 sm:h-4" />
                    </div>
                  </div>

                  {/* Title & Division */}
                  <div className="space-y-0.5 my-1.5 sm:my-2">
                    <h3 className="font-bold text-xs sm:text-base text-zinc-950 leading-snug">
                      {arena.title}
                    </h3>
                    <div className="text-[10px] sm:text-xs text-zinc-500 font-normal line-clamp-1">
                      {arena.division}
                    </div>
                  </div>

                  {/* Bottom Gate Indicator */}
                  <div className="pt-1.5 sm:pt-2 border-t border-zinc-100 flex items-center justify-between text-[9px] sm:text-[11px] font-mono">
                    <span className={isSelected ? 'text-[#b38222] font-semibold' : 'text-zinc-500'}>
                      {arena.badge}
                    </span>
                    <span className={isSelected ? 'text-zinc-950 font-bold' : 'text-zinc-400'}>
                      {isSelected ? 'ACTIVE' : 'VIEW'}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Arena Expanded Dossier — Compact & Sleek on Phone */}
          <div className="surface-card rounded-xl p-3.5 sm:p-6 border border-zinc-200/90 bg-white/95 shadow-2xs space-y-3 sm:space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-4 pb-3 sm:pb-4 border-b border-zinc-100">
              <div className="flex items-center gap-2.5 sm:gap-4">
                <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-lg bg-[#b38222]/10 border border-[#b38222]/20 text-[#b38222] flex items-center justify-center shrink-0">
                  <CurrentIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <div className="text-[10px] sm:text-xs font-mono font-bold text-[#b38222]">
                    {currentArena.code} · SPECIFICATION
                  </div>
                  <h2 className="text-sm sm:text-xl font-black text-zinc-950">
                    {currentArena.title}
                  </h2>
                  <div className="text-[10px] sm:text-xs text-zinc-500">
                    {currentArena.division}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 self-start sm:self-auto">
                <div className="text-[10px] sm:text-xs font-mono px-2 py-1 rounded bg-zinc-100 border border-zinc-200 text-zinc-700">
                  {currentArena.gate}
                </div>
                <button
                  onClick={() => onOpenRegister(selectedArenaId)}
                  className="btn-brass px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-[11px] sm:text-xs font-semibold flex items-center gap-1 cursor-pointer shadow-xs active:scale-95"
                >
                  <span>Enter</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Spec Details Grid */}
            <div className="grid sm:grid-cols-2 gap-2.5 sm:gap-5 text-[11px] sm:text-xs leading-relaxed">
              <div className="space-y-1">
                <div className="font-mono text-[10px] sm:text-[11px] font-bold text-[#b38222] uppercase">
                  Target Profile
                </div>
                <p className="text-zinc-600 font-normal">
                  {currentArena.target}
                </p>
              </div>

              <div className="space-y-1">
                <div className="font-mono text-[10px] sm:text-[11px] font-bold text-[#b38222] uppercase">
                  Scoring &amp; Integrity
                </div>
                <p className="text-zinc-600 font-normal">
                  {currentArena.mechanics}
                </p>
              </div>
            </div>

            {/* Invariants & Anti-cheat Strip */}
            <div className="pt-2 sm:pt-3 border-t border-zinc-100 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-3 text-[10px] sm:text-xs font-mono text-zinc-500">
              <div className="flex items-center gap-1.5 text-zinc-700">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>On-Device Computer Vision · Zero Wearables Required</span>
              </div>
              <div>
                <span>National Prize Grants: <strong className="text-[#b38222]">To Be Announced</strong></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
