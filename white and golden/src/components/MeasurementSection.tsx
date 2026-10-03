import React, { useState } from 'react';
import {
  Eye,
  Heart,
  Wind,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';

export const MeasurementSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'cv' | 'ppg' | 'audio' | 'anticheat'>('cv');

  const categories = {
    cv: {
      tag: '01 / COMPUTER VISION',
      title: 'Real-Time Skeletal Motion Tracking',
      description:
        'Standard smartphone RGB camera maps 33 skeletal landmarks at 30fps. Automatically validates squat depth below parallel, full elbow lockouts on push-ups, and jumping plyometric height with zero user bias.',
      specs: [
        '33-point real-time pose estimation',
        'Automatic joint angle verification (> 90° depth)',
        'Zero manual counter tapping or self-reporting',
      ],
      icon: Eye,
    },
    ppg: {
      tag: '02 / OPTICAL PHOTOPLETHYSMOGRAPHY',
      title: 'Sub-Surface Optical Heart Rate Sensing',
      description:
        'By gently placing a fingertip against the smartphone rear camera lens, the flash illuminates capillary blood volume changes with every cardiac contraction. Validates resting rate and 60-second recovery kinetics.',
      specs: [
        'Cardiovascular pulse waveform detection',
        'Heart Rate Recovery (HRR) drop calculation',
        'No chest straps or smartwatches required',
      ],
      icon: Heart,
    },
    audio: {
      tag: '03 / ACOUSTIC SPIROMETRY',
      title: 'Acoustic Pulmonary Flow Analysis',
      description:
        'High-frequency microphone sampling analyzes diaphragmatic exhalation velocity and steady-state expiration curves to estimate vital lung capacity and air exchange volume.',
      specs: [
        'Exhalation noise frequency analysis',
        'Forced expiratory duration benchmark',
        'Standardized 30cm proximity calibration',
      ],
      icon: Wind,
    },
    anticheat: {
      tag: '04 / VERIFICATION MATRIX',
      title: 'Multi-Sensor Anti-Cheat Sensor Fusion',
      description:
        'Combines internal 3-axis accelerometer gravity vectors, gyroscope rotational physics, and continuous GPS step-frequency cadence to prevent artificial shaker rigs, vehicle pacing, or bot emulation.',
      specs: [
        'Inertial micro-vibration tamper detection',
        'Speed-ceiling gating against vehicle emulation',
        'Biometric device fingerprint authentication',
      ],
      icon: ShieldCheck,
    },
  };

  const current = categories[activeCategory];
  const CurrentIcon = current.icon;

  return (
    <section id="technology" className="relative py-10 sm:py-20 px-3 sm:px-6 lg:px-8 border-t border-b border-zinc-200/80">
      <div className="max-w-7xl mx-auto space-y-6 sm:space-y-10">
        {/* Header */}
        <div className="max-w-2xl space-y-1.5 sm:space-y-2">
          <div className="text-[10px] sm:text-xs font-mono font-bold tracking-wider text-[#b38222] uppercase flex items-center gap-1.5 sm:gap-2">
            <span>VERIFICATION ARCHITECTURE</span>
            <span className="text-zinc-300">·</span>
            <span className="text-zinc-500">Olympic Precision on Mobile</span>
          </div>
          <h2 className="text-xl sm:text-3xl font-black text-zinc-950 tracking-tight uppercase">
            How Your Smartphone Becomes an Olympic Lab.
          </h2>
          <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed">
            Eliminating the wearable hardware barrier. Computer vision and multi-sensor fusion verify real athletic performance directly on your phone.
          </p>
        </div>

        {/* 4 Interactive Technology Pillars */}
        <div className="grid lg:grid-cols-12 gap-4 sm:gap-6 items-start">
          {/* Left Column: Selectors */}
          <div className="lg:col-span-5 grid grid-cols-2 lg:grid-cols-1 gap-2 sm:gap-3">
            <button
              onClick={() => setActiveCategory('cv')}
              className={`text-left p-2.5 sm:p-3.5 rounded-xl border transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-2 ${
                activeCategory === 'cv'
                  ? 'bg-white border-[#b38222] shadow-sm shadow-[#b38222]/10 ring-1 ring-[#b38222]'
                  : 'bg-white/80 hover:bg-white border-zinc-200 text-zinc-600'
              }`}
            >
              <div className="flex items-center gap-2 sm:gap-2.5">
                <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center shrink-0 ${activeCategory === 'cv' ? 'bg-[#b38222] text-white' : 'bg-zinc-100 text-zinc-600'}`}>
                  <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div>
                  <div className="text-[9px] sm:text-[10px] font-mono font-bold text-[#b38222]">01. SKELETAL VISION</div>
                  <div className="font-bold text-xs sm:text-sm text-zinc-950 line-clamp-1">Pose Landmarks</div>
                </div>
              </div>
              <span className="text-[10px] font-mono font-bold text-[#b38222] self-end sm:self-auto">30 FPS</span>
            </button>

            <button
              onClick={() => setActiveCategory('ppg')}
              className={`text-left p-2.5 sm:p-3.5 rounded-xl border transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-2 ${
                activeCategory === 'ppg'
                  ? 'bg-white border-[#b38222] shadow-sm shadow-[#b38222]/10 ring-1 ring-[#b38222]'
                  : 'bg-white/80 hover:bg-white border-zinc-200 text-zinc-600'
              }`}
            >
              <div className="flex items-center gap-2 sm:gap-2.5">
                <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center shrink-0 ${activeCategory === 'ppg' ? 'bg-[#b38222] text-white' : 'bg-zinc-100 text-zinc-600'}`}>
                  <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div>
                  <div className="text-[9px] sm:text-[10px] font-mono font-bold text-[#b38222]">02. OPTICAL PPG</div>
                  <div className="font-bold text-xs sm:text-sm text-zinc-950 line-clamp-1">Pulse Sensing</div>
                </div>
              </div>
              <span className="text-[10px] font-mono font-bold text-[#b38222] self-end sm:self-auto">±1.8 BPM</span>
            </button>

            <button
              onClick={() => setActiveCategory('audio')}
              className={`text-left p-2.5 sm:p-3.5 rounded-xl border transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-2 ${
                activeCategory === 'audio'
                  ? 'bg-white border-[#b38222] shadow-sm shadow-[#b38222]/10 ring-1 ring-[#b38222]'
                  : 'bg-white/80 hover:bg-white border-zinc-200 text-zinc-600'
              }`}
            >
              <div className="flex items-center gap-2 sm:gap-2.5">
                <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center shrink-0 ${activeCategory === 'audio' ? 'bg-[#b38222] text-white' : 'bg-zinc-100 text-zinc-600'}`}>
                  <Wind className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div>
                  <div className="text-[9px] sm:text-[10px] font-mono font-bold text-[#b38222]">03. SPIROMETRY</div>
                  <div className="font-bold text-xs sm:text-sm text-zinc-950 line-clamp-1">Pulmonary Flow</div>
                </div>
              </div>
              <span className="text-[10px] font-mono font-bold text-[#b38222] self-end sm:self-auto">48 kHz</span>
            </button>

            <button
              onClick={() => setActiveCategory('anticheat')}
              className={`text-left p-2.5 sm:p-3.5 rounded-xl border transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-2 ${
                activeCategory === 'anticheat'
                  ? 'bg-white border-[#b38222] shadow-sm shadow-[#b38222]/10 ring-1 ring-[#b38222]'
                  : 'bg-white/80 hover:bg-white border-zinc-200 text-zinc-600'
              }`}
            >
              <div className="flex items-center gap-2 sm:gap-2.5">
                <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center shrink-0 ${activeCategory === 'anticheat' ? 'bg-[#b38222] text-white' : 'bg-zinc-100 text-zinc-600'}`}>
                  <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div>
                  <div className="text-[9px] sm:text-[10px] font-mono font-bold text-[#b38222]">04. SENSOR FUSION</div>
                  <div className="font-bold text-xs sm:text-sm text-zinc-950 line-clamp-1">Anti-Cheat Matrix</div>
                </div>
              </div>
              <span className="text-[10px] font-mono font-bold text-emerald-600 self-end sm:self-auto">99.8% Conf</span>
            </button>
          </div>

          {/* Right Column: Detailed Card with Specifications */}
          <div className="lg:col-span-7">
            <div className="surface-card rounded-xl p-4 sm:p-6 border border-zinc-200 bg-white/95 space-y-4 shadow-2xs">
              <div className="flex items-center justify-between border-b border-zinc-100 pb-3">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#b38222]/10 border border-[#b38222]/20 flex items-center justify-center">
                    <CurrentIcon className="w-4 h-4 text-[#b38222]" />
                  </div>
                  <div>
                    <span className="text-[9px] sm:text-[10px] font-mono font-bold text-[#b38222] uppercase tracking-wider">
                      {current.tag}
                    </span>
                    <h3 className="text-sm sm:text-lg font-bold text-zinc-950 tracking-tight">
                      {current.title}
                    </h3>
                  </div>
                </div>
                <span className="text-[10px] font-mono font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                  Live
                </span>
              </div>

              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                {current.description}
              </p>

              <div className="space-y-1.5 pt-1">
                <div className="text-[10px] sm:text-xs font-mono font-bold text-[#b38222] uppercase tracking-wider">
                  Technical Invariants
                </div>
                {current.specs.map((spec, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-zinc-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#b38222] shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-zinc-100 flex items-center justify-between text-[10px] sm:text-xs text-zinc-400 font-mono">
                <span>ON-DEVICE INFERENCE</span>
                <span className="text-[#b38222] font-semibold">ZERO LATENCY CLOUD</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
