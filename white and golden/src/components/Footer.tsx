import React, { useState } from 'react';
import { Mail, Phone, Globe, Trophy, X, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const [modalContent, setModalContent] = useState<{ title: string; body: string } | null>(null);

  const openInfo = (type: 'privacy' | 'terms' | 'support') => {
    if (type === 'privacy') {
      setModalContent({
        title: 'Privacy Policy & Biometric Protection',
        body: 'Living Scope Health processes computer-vision motion landmarks on-device. Camera frames are never stored or transmitted to external servers. Raw sensor inputs are encrypted using AES-256 and used exclusively for tournament score verification.',
      });
    } else if (type === 'terms') {
      setModalContent({
        title: 'Tournament Terms of Participation',
        body: 'Participation in the 21-Day ECFL Tournament requires authentic physical execution. Any motorized vehicle pacing, emulator tampering, or synthetic sensor spoofing results in permanent expulsion from all current and future seasons.',
      });
    } else {
      setModalContent({
        title: 'Athlete Support & Inquiries',
        body: 'For arena roster updates, facility verification, or technical inquiries, reach the national tournament committee at info@livingscopehealth.com or call +91 -7977147047.',
      });
    }
  };

  return (
    <footer className="relative bg-white/95 text-zinc-600 border-t border-zinc-200/90 pt-8 sm:pt-12 pb-6 sm:pb-8 px-3 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">
        {/* Main 3-Column Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10 items-start">
          {/* Column 1: Organization Branding (5 cols) */}
          <div className="md:col-span-5 space-y-2.5 sm:space-y-3">
            <div className="flex items-start gap-2.5 sm:gap-3">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-zinc-50 border border-zinc-200 text-[#b38222] flex items-center justify-center p-1.5 shadow-2xs shrink-0">
                <Trophy className="w-4 h-4 text-[#b38222]" />
              </div>

              <div className="space-y-0.5">
                <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider leading-snug">
                  <span className="text-[#b38222]">ECFL 2026 </span>
                  <span className="text-zinc-950">NATIONAL CHAMPIONSHIP</span>
                </h3>
                <div className="text-[10px] sm:text-[11px] font-mono text-zinc-400">
                  Every Citizen Fitness League · Season 01
                </div>
              </div>
            </div>

            <p className="text-[11px] sm:text-xs text-zinc-500 leading-relaxed max-w-md font-normal">
              India's premier inter-community health and athletic tournament presented by Living Scope Health. Elevating physical resilience, team unity, and lifelong health span.
            </p>
          </div>

          {/* Column 2: Tournament Support (3.5 cols) */}
          <div className="md:col-span-3 space-y-2">
            <div className="text-[10px] sm:text-xs font-mono font-bold text-[#b38222] uppercase tracking-wider">
              TOURNAMENT SUPPORT
            </div>

            <ul className="space-y-1.5 text-[11px] sm:text-xs">
              <li>
                <a
                  href="mailto:info@livingscopehealth.com"
                  className="flex items-center gap-2 text-zinc-600 hover:text-zinc-950 transition-colors group"
                >
                  <Mail className="w-3.5 h-3.5 text-[#b38222] shrink-0" />
                  <span className="truncate">info@livingscopehealth.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+917977147047"
                  className="flex items-center gap-2 text-zinc-600 hover:text-zinc-950 transition-colors group"
                >
                  <Phone className="w-3.5 h-3.5 text-[#b38222] shrink-0" />
                  <span>+91 -7977147047</span>
                </a>
              </li>
              <li>
                <a
                  href="https://livingscopehealth.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-zinc-600 hover:text-zinc-950 transition-colors group"
                >
                  <Globe className="w-3.5 h-3.5 text-[#b38222] shrink-0" />
                  <span className="truncate">https://livingscopehealth.com</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Organizing Secretariat (3.5 cols) */}
          <div className="md:col-span-4 space-y-2">
            <div className="text-[10px] sm:text-xs font-mono font-bold text-zinc-800 uppercase tracking-wider">
              ORGANIZING SECRETARIAT
            </div>

            <p className="text-[11px] sm:text-xs text-zinc-500 leading-relaxed font-normal">
              LivingScope Health Longevity Directorate, India. All physical activity data &amp; logs are encrypted and verified under strict on-device computer vision integrity protocols.
            </p>

            <div className="pt-1 flex items-center gap-1.5 text-[10px] font-mono text-emerald-700">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Zero-Knowledge Pose Estimation Active</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance Links */}
        <div className="pt-4 border-t border-zinc-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] sm:text-xs text-zinc-400">
          <div>
            &copy; 2026 Living Scope Health. All Rights Reserved.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => openInfo('privacy')}
              className="hover:text-zinc-800 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>·</span>
            <button
              onClick={() => openInfo('terms')}
              className="hover:text-zinc-800 transition-colors cursor-pointer"
            >
              Terms of Competition
            </button>
            <span>·</span>
            <button
              onClick={() => openInfo('support')}
              className="hover:text-zinc-800 transition-colors cursor-pointer"
            >
              Rules &amp; Governance
            </button>
          </div>
        </div>
      </div>

      {/* Information Modal */}
      {modalContent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/50 backdrop-blur-sm">
          <div className="surface-card rounded-xl p-4 sm:p-6 max-w-md w-full border border-zinc-200 bg-white text-zinc-950 space-y-3 shadow-lg">
            <div className="flex items-center justify-between border-b border-zinc-100 pb-2">
              <h4 className="font-bold text-sm text-zinc-950">
                {modalContent.title}
              </h4>
              <button
                onClick={() => setModalContent(null)}
                className="w-7 h-7 rounded-lg flex items-center justify-center hover:bg-zinc-100 text-zinc-500 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-zinc-600 leading-relaxed font-normal">
              {modalContent.body}
            </p>
            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setModalContent(null)}
                className="btn-brass px-3.5 py-1.5 rounded-lg text-xs font-semibold cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
