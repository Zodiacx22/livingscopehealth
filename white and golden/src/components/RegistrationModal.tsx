import React, { useState, useEffect } from 'react';
import {
  X,
  CheckCircle2,
  Users,
  Dumbbell,
  Building2,
  User,
  Apple,
  Play,
  ShieldCheck,
} from 'lucide-react';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialArenaIndex?: number;
}

const ARENA_CONFIGS = [
  {
    id: 0,
    title: 'The Global Field',
    shortTitle: 'Solo Open',
    badge: 'Individual Open',
    gateRequirement: 'No Gate · Solo Entry',
    icon: User,
    gateStatusNote: 'Direct entry unlocked. Ranking updates in national leaderboard post-calibration.',
  },
  {
    id: 1,
    title: 'Friends & Family Circles',
    shortTitle: 'Squads',
    badge: 'Private Squad',
    gateRequirement: 'Invite Code · Max 25',
    icon: Users,
    gateStatusNote: 'Private room created. Age and gender-blind scoring algorithm active.',
  },
  {
    id: 2,
    title: 'Commercial Gyms & Studios',
    shortTitle: 'Gyms',
    badge: '200-Member Gate',
    gateRequirement: '200 Member Gate',
    icon: Dumbbell,
    gateStatusNote: 'Facility ID required. Registration aggregates into your gym’s national score.',
  },
  {
    id: 3,
    title: 'Residential Complexes',
    shortTitle: 'Estates',
    badge: '150-Resident Gate',
    gateRequirement: '150 Resident Gate',
    icon: Building2,
    gateStatusNote: 'Society ID required. 150 residents unlock inter-estate competition.',
  },
];

export const RegistrationModal: React.FC<RegistrationModalProps> = ({
  isOpen,
  onClose,
  initialArenaIndex = 0,
}) => {
  const [arenaIndex, setArenaIndex] = useState(initialArenaIndex);
  const [downloadToast, setDownloadToast] = useState<string | null>(null);

  useEffect(() => {
    if (typeof initialArenaIndex === 'number' && initialArenaIndex >= 0 && initialArenaIndex <= 3) {
      setArenaIndex(initialArenaIndex);
    }
    if (isOpen) {
      setDownloadToast(null);
    }
  }, [initialArenaIndex, isOpen]);

  if (!isOpen) return null;

  const currentArena = ARENA_CONFIGS[arenaIndex] || ARENA_CONFIGS[0];
  const ArenaIcon = currentArena.icon;

  const handleDownloadApp = (platform: 'iOS' | 'Android') => {
    setDownloadToast(`Initiating Living Scope Health ${platform} Client for ${currentArena.shortTitle}...`);
    setTimeout(() => {
      setDownloadToast(null);
    }, 4500);
  };

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm overflow-y-auto"
    >
      <div className="surface-card p-4 sm:p-6 rounded-2xl max-w-md w-full relative shadow-xl bg-white border border-zinc-200 animate-fade-up my-auto text-zinc-950 max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-zinc-400 hover:text-zinc-950 p-1.5 rounded-lg hover:bg-zinc-100 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="space-y-4">
          {/* Header */}
          <div className="space-y-1 pr-6">
            <div className="text-[10px] sm:text-xs font-mono font-bold text-[#b38222] uppercase">
              Official Enrollment
            </div>
            <h2 className="text-lg sm:text-xl font-black text-zinc-950 tracking-tight uppercase">
              Register for Season 01
            </h2>
            <p className="text-[11px] sm:text-xs text-zinc-500">
              Download the Living Scope Health app to begin your initial 21-day calibration test.
            </p>
          </div>

          {/* Arena Switcher Tabs */}
          <div className="space-y-1.5">
            <div className="text-[10px] sm:text-[11px] font-mono font-bold text-zinc-400 uppercase">
              Select Arena Category
            </div>
            <div className="grid grid-cols-4 gap-1 p-1 bg-zinc-100 border border-zinc-200 rounded-lg">
              {ARENA_CONFIGS.map((arena) => (
                <button
                  key={arena.id}
                  onClick={() => setArenaIndex(arena.id)}
                  className={`py-1 px-1 rounded-md text-[11px] sm:text-xs font-bold transition-all cursor-pointer truncate ${
                    arenaIndex === arena.id
                      ? 'bg-[#b38222] text-white shadow-2xs'
                      : 'text-zinc-600 hover:text-zinc-950'
                  }`}
                >
                  {arena.shortTitle}
                </button>
              ))}
            </div>
          </div>

          {/* Selected Arena Card */}
          <div className="p-3 rounded-xl bg-zinc-50 border border-zinc-200 space-y-1.5">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#b38222]/10 border border-[#b38222]/20 text-[#b38222] flex items-center justify-center shrink-0">
                <ArenaIcon className="w-4 h-4" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="font-bold text-xs sm:text-sm text-zinc-950 truncate">
                  {currentArena.title}
                </div>
                <div className="text-[10px] font-mono text-zinc-500 truncate">
                  {currentArena.badge} · {currentArena.gateRequirement}
                </div>
              </div>
            </div>

            <p className="text-[11px] sm:text-xs text-zinc-600">
              {currentArena.gateStatusNote}
            </p>
          </div>

          {/* Download Buttons */}
          <div className="space-y-2">
            <button
              onClick={() => handleDownloadApp('iOS')}
              className="btn-brass w-full py-2.5 px-3 rounded-lg font-semibold text-xs flex items-center justify-center gap-1.5 cursor-pointer shadow-xs active:scale-95"
            >
              <Apple className="w-4 h-4 fill-current shrink-0" />
              <span>Download on Apple App Store</span>
            </button>

            <button
              onClick={() => handleDownloadApp('Android')}
              className="btn-editorial w-full py-2.5 px-3 rounded-lg font-medium text-xs flex items-center justify-center gap-1.5 cursor-pointer active:scale-95"
            >
              <Play className="w-3.5 h-3.5 shrink-0" />
              <span>Get on Google Play Store</span>
            </button>
          </div>

          {downloadToast && (
            <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-mono font-medium flex items-center gap-1.5 animate-fade-up">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>{downloadToast}</span>
            </div>
          )}

          <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 pt-2 border-t border-zinc-100">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>100% Smartphone Verified</span>
            </span>
            <span className="text-[#b38222] font-semibold">Free Registration</span>
          </div>
        </div>
      </div>
    </div>
  );
};
