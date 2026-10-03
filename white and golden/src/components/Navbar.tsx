import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  ArrowRight,
  Volume2,
  VolumeX,
  Activity,
  Trophy,
} from 'lucide-react';
import { oceanAudio } from '../services/oceanAudioEngine';

interface NavbarProps {
  onOpenRegister: (arenaIndex?: number) => void;
  depthMeters: number;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRegister, depthMeters }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [audioActive, setAudioActive] = useState(() => oceanAudio.getIsRunning());

  const toggleAudio = async () => {
    if (!audioActive) {
      const started = await oceanAudio.start();
      if (started) {
        oceanAudio.updateDepth(depthMeters);
        setAudioActive(true);
        oceanAudio.playSonarPing();
      }
    } else {
      oceanAudio.stop();
      setAudioActive(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'nav-blur py-2 sm:py-2.5 shadow-2xs'
          : 'bg-[#fbfbfa]/90 backdrop-blur-md py-2.5 sm:py-3.5 border-b border-black/5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand & Stage Marker */}
        <a href="#hero" className="flex items-center gap-2 group shrink-0">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white border border-black/10 text-[#b38222] flex items-center justify-center font-bold text-xs tracking-wider shadow-2xs group-hover:border-[#b38222] transition-colors">
            <Trophy className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#b38222]" />
          </div>
          <div>
            <div className="font-bold text-xs sm:text-sm tracking-tight text-zinc-950 flex items-center gap-1.5">
              <span>ECFL 2026</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            </div>
            <div className="text-[9px] sm:text-[10px] text-zinc-500 font-mono tracking-wider uppercase">
              Championship
            </div>
          </div>
        </a>

        {/* Editorial Nav Links (Desktop) */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs font-semibold text-zinc-600">
          <a href="#arenas" className="hover:text-zinc-950 transition-colors">
            Arenas
          </a>
          <a href="#gauntlet" className="hover:text-zinc-950 transition-colors">
            21-Day Schedule
          </a>
          <a
            href="#lungs"
            className="hover:text-zinc-950 transition-colors flex items-center gap-1.5 text-[#b38222] font-bold"
          >
            <Activity className="w-3.5 h-3.5" />
            <span>Spirometry Lab</span>
          </a>
          <a href="#technology" className="hover:text-zinc-950 transition-colors">
            CV Verification
          </a>
          <a href="#leaderboard" className="hover:text-zinc-950 transition-colors">
            Leaderboard
          </a>
          <a href="#faq" className="hover:text-zinc-950 transition-colors">
            FAQ
          </a>
        </div>

        {/* Actions Zone */}
        <div className="flex items-center gap-1.5 sm:gap-2.5">
          {/* Ambient Sound Audio Toggle */}
          <button
            onClick={toggleAudio}
            title={audioActive ? 'Mute meditation soundscape' : 'Play ambient meditation soundscape'}
            className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center transition-all cursor-pointer border text-xs ${
              audioActive
                ? 'bg-[#b38222]/15 border-[#b38222]/40 text-[#b38222]'
                : 'bg-white border-black/10 text-zinc-600 hover:text-zinc-900 hover:border-black/20'
            }`}
            aria-label="Toggle ambient meditation soundscape"
          >
            {audioActive ? (
              <Volume2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 animate-pulse text-[#b38222]" />
            ) : (
              <VolumeX className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            )}
          </button>

          {/* Primary Championship CTA */}
          <button
            onClick={() => onOpenRegister()}
            className="btn-brass px-2.5 py-1.5 sm:px-4 sm:py-2 rounded-lg font-semibold text-[11px] sm:text-xs tracking-wide flex items-center gap-1 cursor-pointer shadow-2xs active:scale-95"
          >
            <span className="hidden sm:inline">Championship Pass</span>
            <span className="sm:hidden">Pass</span>
            <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center bg-white border border-black/10 text-zinc-700 cursor-pointer hover:border-black/20"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-3.5 h-3.5" /> : <Menu className="w-3.5 h-3.5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-black/10 px-3.5 py-3.5 space-y-2 animate-in slide-in-from-top duration-200 shadow-sm">
          <div className="flex flex-col space-y-1 text-xs font-medium text-zinc-700">
            <a
              href="#arenas"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 px-2.5 rounded-lg hover:bg-zinc-100 hover:text-zinc-950 transition-colors"
            >
              Arenas
            </a>
            <a
              href="#gauntlet"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 px-2.5 rounded-lg hover:bg-zinc-100 hover:text-zinc-950 transition-colors"
            >
              21-Day Schedule
            </a>
            <a
              href="#lungs"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 px-2.5 rounded-lg hover:bg-zinc-100 text-[#b38222] font-semibold flex items-center gap-1.5"
            >
              <Activity className="w-3.5 h-3.5" />
              <span>Spirometry Lab</span>
            </a>
            <a
              href="#technology"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 px-2.5 rounded-lg hover:bg-zinc-100 hover:text-zinc-950 transition-colors"
            >
              CV Verification
            </a>
            <a
              href="#leaderboard"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 px-2.5 rounded-lg hover:bg-zinc-100 hover:text-zinc-950 transition-colors"
            >
              Leaderboard
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 px-2.5 rounded-lg hover:bg-zinc-100 hover:text-zinc-950 transition-colors"
            >
              FAQ
            </a>
          </div>

          <div className="pt-2 border-t border-zinc-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRegister();
              }}
              className="btn-brass w-full py-2 rounded-lg font-semibold text-xs tracking-wide flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Enter Tournament</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
