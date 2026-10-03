import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Do I need a smartwatch or chest strap to participate?',
      a: 'No. ECFL is 100% smartphone-first. All workouts, repetition counts, and cardiovascular recovery tests are verified using your phone’s built-in camera, sensors, and microphone via the Living Scope Health app.',
    },
    {
      q: 'How does the 3-phase elimination work?',
      a: 'During Phase 1 (Days 1–7), the objective is establishing daily consistency. In Phase 2 (Days 8–14), daily volume increases and athletes falling below the minimum adherence threshold are eliminated from podium contention. Phase 3 is the live championship sprint for finalists.',
    },
    {
      q: 'Can I switch arena categories mid-tournament?',
      a: 'No. Arena selection is permanently locked at initial registration to prevent unfair tier manipulation. Choose your arena carefully — Solo, Squad, Gym, or Residential Society.',
    },
    {
      q: 'How does the anti-cheat verification system work?',
      a: 'Living Scope uses multi-sensor fusion: camera computer-vision analyzes true body joint angles (ensuring proper squat depth and lockout), while internal device accelerometers prevent fake shaking, emulator scripts, or motorized vehicle pacing.',
    },
    {
      q: 'When and how are prize grants distributed?',
      a: 'Following the Day 21 leaderboard freeze and biometric integrity audits, official cash prizes and facility grants (official amounts To Be Announced Soon) are disbursed directly to verified athletes, gyms, and resident welfare associations.',
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative py-10 sm:py-20 px-3 sm:px-6 lg:px-8 border-t border-b border-zinc-200/80">
      <div className="max-w-3xl mx-auto space-y-6 sm:space-y-10">
        <div className="text-center max-w-xl mx-auto space-y-1.5 sm:space-y-2">
          <div className="text-[10px] sm:text-xs font-mono font-bold tracking-wider text-[#b38222] uppercase flex items-center justify-center gap-1.5 sm:gap-2">
            <span>07 / TOURNAMENT REGULATION</span>
            <span className="text-zinc-300">·</span>
            <span className="text-zinc-500">Official FAQ</span>
          </div>
          <h2 className="text-xl sm:text-3xl font-black text-zinc-950 tracking-tight uppercase">
            Frequently Asked Questions.
          </h2>
          <p className="text-zinc-500 font-normal text-xs sm:text-sm leading-relaxed">
            Key details regarding qualification rules, device requirements, and competition standards.
          </p>
        </div>

        <div className="space-y-2 sm:space-y-2.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="surface-card rounded-xl overflow-hidden border border-zinc-200/90 bg-white/95 transition-all shadow-2xs"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-3 sm:p-4 flex items-center justify-between text-left hover:bg-zinc-50 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-xs sm:text-sm text-zinc-950 pr-3">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 text-[#b38222] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-3 pb-3 sm:px-4 sm:pb-4 pt-1 text-xs text-zinc-600 leading-relaxed border-t border-zinc-100">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
