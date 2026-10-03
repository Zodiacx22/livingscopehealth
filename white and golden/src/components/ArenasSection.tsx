import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  User,
  Users,
  Dumbbell,
  Building2,
  ArrowRight,
  ShieldCheck,
  Award,
  Sparkles,
  CheckCircle2,
  Trophy,
} from 'lucide-react';

interface ArenasSectionProps {
  onSelectArena: (arenaIndex: number) => void;
}

export const ArenasSection: React.FC<ArenasSectionProps> = ({ onSelectArena }) => {
  const [selectedArena, setSelectedArena] = useState<number>(0);
  const [imageErrorMap, setImageErrorMap] = useState<Record<number, boolean>>({});

  const arenas = [
    {
      id: 0,
      code: 'ARENA_01',
      title: 'The Global Field',
      subtitle: 'The Solo Contender',
      badge: 'Individual Open',
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1000&auto=format&fit=crop&q=80',
      imageAlt: 'Track and field solo athlete sprinting on athletic running lanes',
      gate: 'Open Access · No Gate Requirement',
      allocation: 'Individual National Leaderboard',
      themeColor: '#2563eb',
      target:
        'Independent fitness enthusiasts, runners, cross-trainers, and biohackers ready to test their uncompromised daily discipline against thousands nationwide.',
      mechanics:
        'Single-athlete ranking powered by direct biometric scoring. Points awarded for daily workout consistency, VO2 max test progression, and pulmonary benchmark scores. No teammates to carry you — your rank reflects your discipline.',
      prize: 'To Be Announced Soon',
      highlights: [
        'Direct Individual National Standing',
        'Daily Computer-Vision Repetition Validation',
        'Open to Any Smartphone Contender in India',
      ],
      icon: User,
      vectorIllustration: (
        <svg className="w-full h-full" viewBox="0 0 600 340" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="soloGrad" x1="0" y1="0" x2="600" y2="340" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0f172a" />
              <stop offset="0.5" stopColor="#1e3a8a" />
              <stop offset="1" stopColor="#2563eb" />
            </linearGradient>
            <linearGradient id="trackGrad" x1="0" y1="0" x2="600" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#3b82f6" stopOpacity="0.4" />
              <stop offset="1" stopColor="#60a5fa" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          <rect width="600" height="340" fill="url(#soloGrad)" />
          {/* Running track perspective lanes */}
          <path d="M0 340 L180 180 L230 180 L80 340 Z" fill="url(#trackGrad)" opacity="0.6" />
          <path d="M90 340 L235 180 L275 180 L180 340 Z" fill="url(#trackGrad)" opacity="0.7" />
          <path d="M190 340 L280 180 L320 180 L280 340 Z" fill="url(#trackGrad)" opacity="0.8" />
          <path d="M290 340 L325 180 L365 180 L380 340 Z" fill="url(#trackGrad)" opacity="0.7" />
          <path d="M390 340 L370 180 L420 180 L490 340 Z" fill="url(#trackGrad)" opacity="0.6" />
          {/* Finish Line & Distance Geometry */}
          <line x1="160" y1="180" x2="440" y2="180" stroke="#ffffff" strokeWidth="3" strokeDasharray="8 6" opacity="0.8" />
          <circle cx="300" cy="130" r="45" fill="#ffffff" fillOpacity="0.1" stroke="#60a5fa" strokeWidth="2" />
          <path d="M300 100 L300 130 L320 145" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
          {/* Typographic watermarks */}
          <text x="30" y="60" fill="#93c5fd" fontFamily="monospace" fontSize="14" fontWeight="bold" letterSpacing="3">
            01 / SOLO FIELD · SPRINT PERSPECTIVE
          </text>
          <text x="30" y="90" fill="#ffffff" fontSize="22" fontWeight="900" letterSpacing="-0.5">
            Individual National Championship
          </text>
        </svg>
      ),
    },
    {
      id: 1,
      code: 'ARENA_02',
      title: 'Friends & Family Circles',
      subtitle: 'The Private Squad',
      badge: 'Private Pod (Cap: 25 Members)',
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1000&auto=format&fit=crop&q=80',
      imageAlt: 'Group of teammates training outdoors in harmony and unity',
      gate: 'Invitation Code Required · Capped at 25',
      allocation: 'Private Pod Leaderboard & Team Cup',
      themeColor: '#4f46e5',
      target:
        'Households, corporate departments, college friend pods, and distributed family circles wanting a closed, supportive, yet intensely competitive private arena.',
      mechanics:
        'Proprietary age-adjusted and gender-blind handicap algorithms ensure fair competition across generations. A 55-year-old walking consistently competes equally with a 24-year-old marathoner.',
      prize: 'To Be Announced Soon',
      highlights: [
        'Strict 25-Member Pod Ceiling for High Intimacy',
        'Age & Gender Handicap Fair-Play Algorithm',
        'Private Internal Leaderboard & Chat Feed',
      ],
      icon: Users,
      vectorIllustration: (
        <svg className="w-full h-full" viewBox="0 0 600 340" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="squadGrad" x1="0" y1="0" x2="600" y2="340" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0f172a" />
              <stop offset="0.5" stopColor="#312e81" />
              <stop offset="1" stopColor="#4f46e5" />
            </linearGradient>
          </defs>
          <rect width="600" height="340" fill="url(#squadGrad)" />
          {/* Squad network constellation circles */}
          <line x1="180" y1="170" x2="300" y2="120" stroke="#a5b4fc" strokeWidth="2" strokeDasharray="4 4" opacity="0.6" />
          <line x1="300" y1="120" x2="420" y2="170" stroke="#a5b4fc" strokeWidth="2" strokeDasharray="4 4" opacity="0.6" />
          <line x1="180" y1="170" x2="240" y2="250" stroke="#a5b4fc" strokeWidth="2" strokeDasharray="4 4" opacity="0.6" />
          <line x1="420" y1="170" x2="360" y2="250" stroke="#a5b4fc" strokeWidth="2" strokeDasharray="4 4" opacity="0.6" />
          <line x1="240" y1="250" x2="360" y2="250" stroke="#a5b4fc" strokeWidth="2" strokeDasharray="4 4" opacity="0.6" />
          <line x1="300" y1="120" x2="300" y2="210" stroke="#ffffff" strokeWidth="2" opacity="0.7" />
          {/* Pod member nodes */}
          <circle cx="300" cy="120" r="32" fill="#4338ca" stroke="#c7d2fe" strokeWidth="3" />
          <circle cx="180" cy="170" r="26" fill="#3730a3" stroke="#818cf8" strokeWidth="2.5" />
          <circle cx="420" cy="170" r="26" fill="#3730a3" stroke="#818cf8" strokeWidth="2.5" />
          <circle cx="240" cy="250" r="24" fill="#312e81" stroke="#6366f1" strokeWidth="2" />
          <circle cx="360" cy="250" r="24" fill="#312e81" stroke="#6366f1" strokeWidth="2" />
          <circle cx="300" cy="210" r="20" fill="#4f46e5" stroke="#ffffff" strokeWidth="2" />
          <text x="30" y="60" fill="#c7d2fe" fontFamily="monospace" fontSize="14" fontWeight="bold" letterSpacing="3">
            02 / PRIVATE SQUAD · SYNERGY NETWORK
          </text>
          <text x="30" y="90" fill="#ffffff" fontSize="22" fontWeight="900" letterSpacing="-0.5">
            Friends &amp; Family Squad Ring
          </text>
        </svg>
      ),
    },
    {
      id: 2,
      code: 'ARENA_03',
      title: 'Commercial Gyms & Studios',
      subtitle: 'The Tribal Facility League',
      badge: 'Mandatory 200-Member Gate',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1000&auto=format&fit=crop&q=80',
      imageAlt: 'High-intensity gym facility with dumbbells and athletic equipment',
      gate: 'Facility ID Validation · Min 200 Members',
      allocation: 'National Fitness Center Division',
      themeColor: '#ea580c',
      target:
        'CrossFit boxes, boutique strength studios, MMA facilities, and commercial fitness chains looking to prove their facility trains the fittest athletes in India.',
      mechanics:
        'Facility-aggregate ranking calculated by average member completion rate and top 10% peak athletic output. Tests gym culture, coach retention, and athlete collective resilience.',
      prize: 'To Be Announced Soon',
      highlights: [
        '200-Member Minimum Gate to Qualify Facility',
        'Aggregate Retention & High-Output Scoring',
        'Inter-Club Regional & National Rivalries',
      ],
      icon: Dumbbell,
      vectorIllustration: (
        <svg className="w-full h-full" viewBox="0 0 600 340" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="gymGrad" x1="0" y1="0" x2="600" y2="340" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0f172a" />
              <stop offset="0.5" stopColor="#7c2d12" />
              <stop offset="1" stopColor="#ea580c" />
            </linearGradient>
          </defs>
          <rect width="600" height="340" fill="url(#gymGrad)" />
          {/* Heavy Olympic barbell illustration */}
          <rect x="80" y="195" width="440" height="14" rx="7" fill="#cbd5e1" />
          <rect x="140" y="145" width="30" height="114" rx="6" fill="#1e293b" stroke="#f97316" strokeWidth="3" />
          <rect x="175" y="155" width="22" height="94" rx="5" fill="#334155" stroke="#fdba74" strokeWidth="2" />
          <rect x="430" y="145" width="30" height="114" rx="6" fill="#1e293b" stroke="#f97316" strokeWidth="3" />
          <rect x="403" y="155" width="22" height="94" rx="5" fill="#334155" stroke="#fdba74" strokeWidth="2" />
          {/* Center Trophy / Crest */}
          <circle cx="300" cy="130" r="45" fill="#ffffff" fillOpacity="0.1" stroke="#ea580c" strokeWidth="2.5" />
          <path d="M285 115 H315 V135 C315 143 308 150 300 150 C292 150 285 143 285 135 Z" fill="#f97316" />
          <path d="M295 150 H305 V165 H290 H310" stroke="#f97316" strokeWidth="3" />
          <text x="30" y="60" fill="#fdba74" fontFamily="monospace" fontSize="14" fontWeight="bold" letterSpacing="3">
            03 / COMMERCIAL GYMS · TRIBAL LEAGUE
          </text>
          <text x="30" y="90" fill="#ffffff" fontSize="22" fontWeight="900" letterSpacing="-0.5">
            Inter-Facility National Cup
          </text>
        </svg>
      ),
    },
    {
      id: 3,
      code: 'ARENA_04',
      title: 'Residential Towers & Complexes',
      subtitle: 'The Neighborhood Estate Shield',
      badge: 'Mandatory 150-Resident Gate',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1000&auto=format&fit=crop&q=80',
      imageAlt: 'Modern high-rise residential apartment towers and community estate grounds',
      gate: 'Society Registration · Min 150 Residents',
      allocation: 'Inter-Society Championship Shield',
      themeColor: '#059669',
      target:
        'Residents of gated communities, condominium towers, and metropolitan townships turning neighborly camaraderie into city-wide athletic glory.',
      mechanics:
        'Aggregate wellness score combining daily step thresholds, family participation ratios, and senior fitness longevity markers. Mobilize 150+ residents to unlock city prestige.',
      prize: 'To Be Announced Soon',
      highlights: [
        '150+ Verified Society Resident Roster Gate',
        'Inter-Generational Compound Wellness Scoring',
        'City-Wide Inter-Complex Championship Trophy',
      ],
      icon: Building2,
      vectorIllustration: (
        <svg className="w-full h-full" viewBox="0 0 600 340" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="towerGrad" x1="0" y1="0" x2="600" y2="340" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0f172a" />
              <stop offset="0.5" stopColor="#064e3b" />
              <stop offset="1" stopColor="#059669" />
            </linearGradient>
          </defs>
          <rect width="600" height="340" fill="url(#towerGrad)" />
          {/* Modern high-rise architectural tower silhouettes */}
          <rect x="160" y="110" width="70" height="230" fill="#1e293b" stroke="#34d399" strokeWidth="2" opacity="0.9" />
          <rect x="250" y="80" width="95" height="260" fill="#0f172a" stroke="#10b981" strokeWidth="2.5" />
          <rect x="365" y="130" width="80" height="210" fill="#1e293b" stroke="#34d399" strokeWidth="2" opacity="0.9" />
          {/* Lit apartment window matrix */}
          <circle cx="275" cy="110" r="3" fill="#6ee7b7" />
          <circle cx="295" cy="110" r="3" fill="#6ee7b7" />
          <circle cx="315" cy="110" r="3" fill="#6ee7b7" />
          <circle cx="275" cy="130" r="3" fill="#6ee7b7" />
          <circle cx="295" cy="130" r="3" fill="#6ee7b7" />
          <circle cx="315" cy="130" r="3" fill="#6ee7b7" />
          <circle cx="275" cy="150" r="3" fill="#6ee7b7" />
          <circle cx="295" cy="150" r="3" fill="#6ee7b7" />
          <circle cx="315" cy="150" r="3" fill="#6ee7b7" />
          {/* Estate Shield */}
          <circle cx="300" cy="50" r="28" fill="#065f46" stroke="#34d399" strokeWidth="2" />
          <path d="M300 36 L314 43 V56 C314 65 300 70 300 70 C300 70 286 65 286 56 V43 Z" fill="#10b981" />
          <text x="30" y="60" fill="#a7f3d0" fontFamily="monospace" fontSize="14" fontWeight="bold" letterSpacing="3">
            04 / RESIDENTIAL ESTATES · NEIGHBORHOOD
          </text>
          <text x="30" y="90" fill="#ffffff" fontSize="22" fontWeight="900" letterSpacing="-0.5">
            Inter-Society Shield Division
          </text>
        </svg>
      ),
    },
  ];

  const current = arenas[selectedArena];
  const CurrentIcon = current.icon;
  const isImageBroken = imageErrorMap[current.id];

  return (
    <section id="arenas" className="relative py-10 sm:py-20 px-3 sm:px-6 lg:px-8 border-t border-b border-zinc-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-6 sm:space-y-10">
        {/* Section Header */}
        <div className="max-w-2xl space-y-1.5 sm:space-y-2">
          <div className="text-[10px] sm:text-xs font-mono font-bold tracking-wider text-[#b38222] uppercase flex items-center gap-1.5 sm:gap-2">
            <span>02 / TOURNAMENT ARCHITECTURE</span>
            <span className="text-zinc-300">·</span>
            <span className="text-zinc-500">Four Competitive Arenas</span>
          </div>
          <h2 className="text-xl sm:text-3xl font-black text-zinc-950 tracking-tight uppercase">
            Choose Your Battleground.
          </h2>
          <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed">
            Every arena is biometrically calibrated for fair play. Select an arena below to inspect qualification criteria.
          </p>
        </div>

        {/* Interactive Split Console */}
        <div className="grid lg:grid-cols-12 gap-4 sm:gap-6 items-start">
          {/* Left Column: 4 Arena Selectors — 2-col on mobile for compact view */}
          <div className="lg:col-span-5 grid grid-cols-2 lg:grid-cols-1 gap-2 sm:gap-2.5">
            {arenas.map((arena) => {
              const Icon = arena.icon;
              const isSelected = selectedArena === arena.id;

              return (
                <button
                  key={arena.id}
                  onClick={() => setSelectedArena(arena.id)}
                  className={`w-full text-left p-2.5 sm:p-3.5 rounded-xl transition-all cursor-pointer border flex flex-col sm:flex-row sm:items-center justify-between gap-2 ${
                    isSelected
                      ? 'bg-white border-[#b38222] shadow-sm shadow-[#b38222]/10 ring-1 ring-[#b38222] text-zinc-950'
                      : 'bg-white/80 hover:bg-white border-zinc-200 shadow-2xs text-zinc-600'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div
                      className={`w-7 h-7 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center shrink-0 transition-transform ${
                        isSelected
                          ? 'bg-[#b38222] text-white font-bold shadow-2xs'
                          : 'bg-zinc-100 text-zinc-600'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[9px] sm:text-[10px] font-mono font-bold text-[#b38222]">
                        {arena.code}
                      </div>
                      <div className="font-bold text-xs sm:text-sm text-zinc-950 truncate">
                        {arena.title}
                      </div>
                      <div className="text-[10px] sm:text-xs text-zinc-500 font-normal truncate">
                        {arena.subtitle}
                      </div>
                    </div>
                  </div>

                  <span
                    className={`text-[9px] sm:text-[11px] font-mono font-bold shrink-0 self-end sm:self-auto ${
                      isSelected ? 'text-[#b38222]' : 'text-zinc-400'
                    }`}
                  >
                    {isSelected ? 'ACTIVE' : 'SELECT'}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Arena Blueprint Dossier */}
          <div className="lg:col-span-7">
            <div className="surface-card rounded-xl p-3.5 sm:p-6 space-y-3.5 sm:space-y-5 border border-zinc-200/90 bg-white/95 shadow-2xs">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-3.5 sm:space-y-5"
                >
                  {/* Category Showcase */}
                  <div className="relative aspect-16/9 rounded-lg overflow-hidden bg-zinc-100 border border-zinc-200 shadow-2xs max-h-48 sm:max-h-none">
                    {!isImageBroken ? (
                      <img
                        key={current.image}
                        src={current.image}
                        alt={current.imageAlt}
                        referrerPolicy="no-referrer"
                        onError={() => {
                          setImageErrorMap((prev) => ({ ...prev, [current.id]: true }));
                        }}
                        className="w-full h-full object-cover transition-all duration-300"
                      />
                    ) : (
                      <div className="w-full h-full">
                        {current.vectorIllustration}
                      </div>
                    )}
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/20 to-transparent pointer-events-none" />
                    
                    {/* Photo Bottom Metadata Overlay */}
                    <div className="absolute bottom-2 left-2.5 right-2.5 flex items-end justify-between gap-2 text-white pointer-events-none">
                      <div>
                        <div className="text-[9px] font-mono font-bold text-amber-300 uppercase tracking-wider">
                          {current.code} · PROFILE
                        </div>
                        <div className="text-xs sm:text-base font-bold">
                          {current.title}
                        </div>
                      </div>
                      <div className="text-[10px] font-mono font-medium bg-black/60 backdrop-blur-md px-2 py-0.5 rounded border border-white/20 text-white shrink-0">
                        {current.badge}
                      </div>
                    </div>
                  </div>

                  {/* Dossier Header Info */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2.5 border-b border-zinc-100">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-[#b38222]/10 border border-[#b38222]/20 text-[#b38222] flex items-center justify-center shrink-0">
                        <CurrentIcon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[9px] sm:text-[10px] font-mono font-bold text-[#b38222]">
                          {current.code} SPECIFICATION
                        </div>
                        <h3 className="text-sm sm:text-lg font-bold text-zinc-950">
                          {current.title}
                        </h3>
                      </div>
                    </div>

                    <div className="text-[10px] sm:text-xs font-mono text-zinc-700 bg-zinc-100 border border-zinc-200 px-2 py-1 rounded self-start sm:self-auto font-medium">
                      {current.gate}
                    </div>
                  </div>

                  {/* Qualification & Prize Allocation Meta */}
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-zinc-50 border border-zinc-200/80 p-2.5 rounded-lg space-y-0.5">
                      <div className="text-[9px] uppercase font-mono font-bold text-[#b38222]">
                        Qualification Gate
                      </div>
                      <div className="font-bold text-zinc-800 text-[11px] sm:text-xs truncate">
                        {current.gate}
                      </div>
                    </div>

                    <div className="bg-zinc-50 border border-zinc-200/80 p-2.5 rounded-lg space-y-0.5">
                      <div className="text-[9px] uppercase font-mono font-bold text-[#b38222]">
                        Prize Allocation
                      </div>
                      <div className="font-bold text-zinc-800 flex items-center gap-1 text-[11px] sm:text-xs">
                        <Award className="w-3 h-3 text-[#b38222] shrink-0" />
                        <span>To Be Announced Soon</span>
                      </div>
                    </div>
                  </div>

                  {/* Key Highlights */}
                  <div className="space-y-1">
                    <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#b38222]">
                      Key Specifications
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5">
                      {current.highlights.map((h, idx) => (
                        <div
                          key={idx}
                          className="bg-zinc-50 border border-zinc-200/80 p-2 rounded-lg flex items-start gap-1.5"
                        >
                          <CheckCircle2 className="w-3 h-3 text-[#b38222] shrink-0 mt-0.5" />
                          <span className="text-[10px] sm:text-[11px] text-zinc-700 font-medium leading-tight">
                            {h}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Target Demographic & Mechanics */}
                  <div className="grid sm:grid-cols-2 gap-2.5 text-[11px] sm:text-xs leading-relaxed">
                    <div className="space-y-0.5">
                      <div className="font-mono text-[10px] font-bold uppercase text-[#b38222]">
                        Target Contenders
                      </div>
                      <p className="text-zinc-600 font-normal">
                        {current.target}
                      </p>
                    </div>

                    <div className="space-y-0.5">
                      <div className="font-mono text-[10px] font-bold uppercase text-[#b38222]">
                        Scoring Algorithm
                      </div>
                      <p className="text-zinc-600 font-normal">
                        {current.mechanics}
                      </p>
                    </div>
                  </div>

                  {/* CTA for this arena */}
                  <div className="pt-2.5 border-t border-zinc-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5 text-[10px] sm:text-xs text-zinc-500 font-medium">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Camera anti-cheat verified</span>
                    </div>

                    <button
                      onClick={() => onSelectArena(selectedArena)}
                      className="btn-brass px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center justify-center gap-1 cursor-pointer shadow-xs active:scale-95"
                    >
                      <span>Register for {current.title}</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
