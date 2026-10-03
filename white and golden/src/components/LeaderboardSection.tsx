import React, { useState } from 'react';
import { Search, ShieldCheck } from 'lucide-react';

interface LeaderboardEntry {
  rank: number;
  name: string;
  avatar: string;
  partner: string;
  city: string;
  arenaCategory: 'solo' | 'squad' | 'gym' | 'community';
  chasScore: number;
  sdexPenalty: number;
  totalScore: number;
  stage: 'STAGE 3 APEX' | 'STAGE 2 QUALIFIED' | 'STAGE 1 BASELINE';
}

export const LeaderboardSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'solo' | 'squad' | 'gym' | 'community'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const entries: LeaderboardEntry[] = [
    {
      rank: 1,
      name: 'Aarav Sharma',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80',
      partner: 'Solo Field Contender',
      city: 'Bengaluru, KA',
      arenaCategory: 'solo',
      chasScore: 295.0,
      sdexPenalty: -2.6,
      totalScore: 292.4,
      stage: 'STAGE 3 APEX',
    },
    {
      rank: 2,
      name: 'Dr. Ananya Iyer',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&auto=format&fit=crop&q=80',
      partner: 'Cult.fit · Indiranagar',
      city: 'Bengaluru, KA',
      arenaCategory: 'gym',
      chasScore: 294.5,
      sdexPenalty: -3.2,
      totalScore: 291.3,
      stage: 'STAGE 3 APEX',
    },
    {
      rank: 3,
      name: 'Vikram Singh',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80',
      partner: 'Singh Clan Fitness Pod',
      city: 'Delhi NCR',
      arenaCategory: 'squad',
      chasScore: 292.0,
      sdexPenalty: -2.2,
      totalScore: 289.8,
      stage: 'STAGE 3 APEX',
    },
    {
      rank: 4,
      name: 'Priya Nair',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80',
      partner: 'Brigade Gateway Society',
      city: 'Bengaluru, KA',
      arenaCategory: 'community',
      chasScore: 288.0,
      sdexPenalty: -2.9,
      totalScore: 285.1,
      stage: 'STAGE 2 QUALIFIED',
    },
    {
      rank: 5,
      name: 'Rohan Kapoor',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&auto=format&fit=crop&q=80',
      partner: 'Anytime Fitness · Cyber Hub',
      city: 'Gurugram, HR',
      arenaCategory: 'gym',
      chasScore: 284.5,
      sdexPenalty: -2.8,
      totalScore: 281.7,
      stage: 'STAGE 2 QUALIFIED',
    },
    {
      rank: 6,
      name: 'Ananya Reddy',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80',
      partner: 'Solo Field Contender',
      city: 'Hyderabad, TS',
      arenaCategory: 'solo',
      chasScore: 281.0,
      sdexPenalty: -2.6,
      totalScore: 278.4,
      stage: 'STAGE 2 QUALIFIED',
    },
    {
      rank: 7,
      name: 'Karan Malhotra',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=120&auto=format&fit=crop&q=80',
      partner: 'Lodha Belmondo Estate',
      city: 'Pune, MH',
      arenaCategory: 'community',
      chasScore: 276.5,
      sdexPenalty: -2.4,
      totalScore: 274.1,
      stage: 'STAGE 1 BASELINE',
    },
  ];

  const filteredEntries = entries.filter((item) => {
    const matchesFilter = activeFilter === 'all' || item.arenaCategory === activeFilter;
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.partner.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.city.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section id="leaderboard" className="relative py-10 sm:py-20 px-3 sm:px-6 lg:px-8 border-t border-b border-zinc-200/80">
      <div className="max-w-7xl mx-auto space-y-4 sm:space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 pb-3 sm:pb-5 border-b border-zinc-200/80">
          <div className="max-w-2xl space-y-1 sm:space-y-1.5">
            <div className="text-[10px] sm:text-xs font-mono font-bold tracking-wider text-[#b38222] uppercase flex items-center gap-1.5 sm:gap-2">
              <span>05 / COMPETITIVE STANDINGS</span>
              <span className="text-zinc-300">·</span>
              <span className="text-zinc-500">Live National Scoreboard</span>
            </div>
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-black text-zinc-950 tracking-tight uppercase">
              India National Standings.
            </h2>
            <p className="text-[11px] sm:text-xs text-zinc-500 leading-relaxed font-normal">
              Biometrically verified standings updated daily after midnight synchronization.
            </p>
          </div>

          <div className="flex items-center gap-1.5 self-start md:self-auto text-[10px] font-mono text-zinc-600 font-medium bg-white px-2 py-0.5 rounded border border-zinc-200">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>SYNC: 02:40 IST</span>
          </div>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
          {/* Segmented Filter Buttons — Compact on Phone */}
          <div className="flex items-center gap-1 p-1 bg-white border border-zinc-200 rounded-lg overflow-x-auto text-xs font-semibold no-scrollbar">
            <button
              onClick={() => setActiveFilter('all')}
              className={`py-1 px-2.5 sm:px-3 rounded-md transition-all whitespace-nowrap cursor-pointer text-[11px] sm:text-xs ${
                activeFilter === 'all'
                  ? 'bg-[#b38222] text-white font-bold shadow-2xs'
                  : 'text-zinc-600 hover:text-zinc-950'
              }`}
            >
              All Arenas
            </button>
            <button
              onClick={() => setActiveFilter('solo')}
              className={`py-1 px-2.5 sm:px-3 rounded-md transition-all whitespace-nowrap cursor-pointer text-[11px] sm:text-xs ${
                activeFilter === 'solo'
                  ? 'bg-[#b38222] text-white font-bold shadow-2xs'
                  : 'text-zinc-600 hover:text-zinc-950'
              }`}
            >
              Solo Field
            </button>
            <button
              onClick={() => setActiveFilter('squad')}
              className={`py-1 px-2.5 sm:px-3 rounded-md transition-all whitespace-nowrap cursor-pointer text-[11px] sm:text-xs ${
                activeFilter === 'squad'
                  ? 'bg-[#b38222] text-white font-bold shadow-2xs'
                  : 'text-zinc-600 hover:text-zinc-950'
              }`}
            >
              Private Squads
            </button>
            <button
              onClick={() => setActiveFilter('gym')}
              className={`py-1 px-2.5 sm:px-3 rounded-md transition-all whitespace-nowrap cursor-pointer text-[11px] sm:text-xs ${
                activeFilter === 'gym'
                  ? 'bg-[#b38222] text-white font-bold shadow-2xs'
                  : 'text-zinc-600 hover:text-zinc-950'
              }`}
            >
              Affiliate Gyms
            </button>
            <button
              onClick={() => setActiveFilter('community')}
              className={`py-1 px-2.5 sm:px-3 rounded-md transition-all whitespace-nowrap cursor-pointer text-[11px] sm:text-xs ${
                activeFilter === 'community'
                  ? 'bg-[#b38222] text-white font-bold shadow-2xs'
                  : 'text-zinc-600 hover:text-zinc-950'
              }`}
            >
              Estates
            </button>
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-60 shrink-0">
            <Search className="w-3.5 h-3.5 text-zinc-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search contender or city..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 bg-white border border-zinc-200 rounded-lg text-xs font-normal text-zinc-950 placeholder:text-zinc-400 focus:outline-none focus:border-[#b38222] transition-colors"
            />
          </div>
        </div>

        {/* 1. MOBILE COMPACT STANDINGS CARD LIST (Small, Cool & Clean on Phone) */}
        <div className="sm:hidden divide-y divide-zinc-100 bg-white rounded-xl border border-zinc-200/90 shadow-2xs overflow-hidden">
          {filteredEntries.map((row) => (
            <div
              key={row.rank}
              className="p-2.5 flex items-center justify-between gap-2 hover:bg-zinc-50 transition-colors"
            >
              {/* Left: Rank + Avatar + Name + Subtitle */}
              <div className="flex items-center gap-2 min-w-0">
                <span
                  className={`inline-flex items-center justify-center w-5 h-5 rounded font-mono text-[10px] font-bold shrink-0 ${
                    row.rank === 1
                      ? 'bg-[#b38222] text-white'
                      : row.rank === 2
                      ? 'bg-zinc-300 text-zinc-800'
                      : row.rank === 3
                      ? 'bg-amber-100 text-amber-900 border border-amber-300'
                      : 'bg-zinc-100 text-zinc-600'
                  }`}
                >
                  {row.rank.toString().padStart(2, '0')}
                </span>

                <img
                  src={row.avatar}
                  alt={row.name}
                  referrerPolicy="no-referrer"
                  className="w-7 h-7 rounded-full object-cover shrink-0 border border-zinc-200"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />

                <div className="min-w-0">
                  <div className="font-bold text-xs text-zinc-950 flex items-center gap-1">
                    <span className="truncate">{row.name}</span>
                    <ShieldCheck className="w-3 h-3 text-[#b38222] shrink-0" />
                  </div>
                  <div className="text-[10px] text-zinc-500 truncate">
                    {row.partner} · {row.city.split(',')[0]}
                  </div>
                </div>
              </div>

              {/* Right: Score + Stage Badge */}
              <div className="text-right shrink-0">
                <div className="font-mono font-bold text-xs text-[#b38222]">
                  {row.totalScore.toFixed(1)}{' '}
                  <span className="text-[9px] font-sans font-normal text-zinc-400">pts</span>
                </div>
                <span className="inline-block text-[8px] font-mono font-semibold px-1 py-0.2 rounded bg-zinc-100 text-zinc-600">
                  {row.stage.replace('STAGE ', '')}
                </span>
              </div>
            </div>
          ))}

          {filteredEntries.length === 0 && (
            <div className="p-6 text-center text-xs text-zinc-400">
              No contenders match your search filter.
            </div>
          )}
        </div>

        {/* 2. TABLET & DESKTOP FULL TABLE (Visible on screens >= 640px) */}
        <div className="hidden sm:block surface-card rounded-xl overflow-hidden border border-zinc-200/90 bg-white/95">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-zinc-50 border-b border-zinc-200 text-[#b38222] font-mono font-bold uppercase tracking-wider text-[10px]">
                <tr>
                  <th className="py-2.5 px-4 w-16">Rank</th>
                  <th className="py-2.5 px-4">Contender</th>
                  <th className="py-2.5 px-4">Affiliation / City</th>
                  <th className="py-2.5 px-4 text-right">Composite Score</th>
                  <th className="py-2.5 px-4 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 text-zinc-700">
                {filteredEntries.map((row) => {
                  return (
                    <tr
                      key={row.rank}
                      className="hover:bg-zinc-50/80 transition-colors font-medium"
                    >
                      {/* Rank Monospace Column */}
                      <td className="py-2.5 px-4 font-mono font-bold">
                        <span
                          className={`inline-flex items-center justify-center w-6 h-6 rounded-md ${
                            row.rank === 1
                              ? 'bg-[#b38222] text-white font-bold'
                              : row.rank === 2
                              ? 'bg-zinc-200 text-zinc-800'
                              : row.rank === 3
                              ? 'bg-amber-100 text-amber-800 border border-amber-300'
                              : 'text-zinc-500'
                          }`}
                        >
                          {row.rank.toString().padStart(2, '0')}
                        </span>
                      </td>

                      {/* Athlete Avatar + Name */}
                      <td className="py-2.5 px-4">
                        <div className="flex items-center gap-2.5">
                          <img
                            src={row.avatar}
                            alt={row.name}
                            referrerPolicy="no-referrer"
                            className="w-7 h-7 rounded-full object-cover shrink-0 border border-zinc-200"
                            onError={(e) => {
                              (e.target as HTMLElement).style.display = 'none';
                            }}
                          />
                          <div>
                            <div className="font-bold text-zinc-950 flex items-center gap-1.5">
                              <span>{row.name}</span>
                              <span title="Biometrically Verified">
                                <ShieldCheck className="w-3.5 h-3.5 text-[#b38222] shrink-0" />
                              </span>
                            </div>
                            <div className="text-[11px] text-zinc-500">
                              {row.partner}
                            </div>
                          </div>
                        </div>
                      </td>

                      {/* City */}
                      <td className="py-2.5 px-4 text-zinc-600 font-normal">
                        {row.city}
                      </td>

                      {/* Points / Composite Score */}
                      <td className="py-2.5 px-4 text-right font-mono font-bold text-[#b38222] text-sm tabular-nums">
                        {row.totalScore.toFixed(1)}
                        <span className="text-[10px] text-zinc-400 ml-1 font-normal font-sans">pts</span>
                      </td>

                      {/* Status */}
                      <td className="py-2.5 px-4 text-right font-mono text-[11px] font-medium">
                        <span
                          className={
                            row.stage === 'STAGE 3 APEX'
                              ? 'text-[#b38222] bg-[#b38222]/10 border border-[#b38222]/30 px-2 py-0.5 rounded'
                              : 'text-zinc-500 bg-zinc-100 border border-zinc-200 px-2 py-0.5 rounded'
                          }
                        >
                          {row.stage}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
