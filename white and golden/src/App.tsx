import React, { useState, useCallback } from 'react';
import { OceanCanvas } from './components/OceanCanvas';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { DifferentiatorsSection } from './components/DifferentiatorsSection';
import { ArcSection } from './components/ArcSection';
import { MeasurementSection } from './components/MeasurementSection';
import { ArenasSection } from './components/ArenasSection';
import { LungChallengeSection } from './components/LungChallengeSection';
import { LeaderboardSection } from './components/LeaderboardSection';
import { GauntletSection } from './components/GauntletSection';
import { PodiumSection } from './components/PodiumSection';
import { CtaSection } from './components/CtaSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { RegistrationModal } from './components/RegistrationModal';
import { oceanAudio } from './services/oceanAudioEngine';

export default function App() {
  const [depthData, setDepthData] = useState({
    depthMeters: 500,
    pressureAtm: 1.0,
    zoneName: 'Meadow & Valley (500m)',
    scrollPercent: 0,
  });

  const [flashlightEnabled, setFlashlightEnabled] = useState(true);
  const [registerModalOpen, setRegisterModalOpen] = useState(false);
  const [selectedArenaIndex, setSelectedArenaIndex] = useState(0);

  const handleDepthUpdate = useCallback(
    (data: { depthMeters: number; pressureAtm: number; zoneName: string; scrollPercent: number }) => {
      setDepthData(data);
      oceanAudio.updateDepth(data.depthMeters);
    },
    []
  );

  const handleOpenRegister = (arenaIndex?: number) => {
    if (typeof arenaIndex === 'number') {
      setSelectedArenaIndex(arenaIndex);
    }
    setRegisterModalOpen(true);
  };

  const handleBreathBubble = useCallback(() => {
    if (oceanAudio.getIsRunning()) {
      oceanAudio.playBubble();
    }
  }, []);

  return (
    <div className="relative min-h-screen text-zinc-900 bg-[#fbfbfa] overflow-x-hidden selection:bg-[#b38222]/20 selection:text-[#b38222]">
      {/* Three.js WebGL Fullscreen Falling Zen Leaves Background */}
      <OceanCanvas
        onDepthUpdate={handleDepthUpdate}
        flashlightEnabled={flashlightEnabled}
        onToggleFlashlight={() => setFlashlightEnabled((prev) => !prev)}
        onBreathBubble={handleBreathBubble}
        windVisible={true}
        windDensity={1.0}
      />

      {/* Top Header Navigation */}
      <Navbar onOpenRegister={() => handleOpenRegister()} depthMeters={depthData.depthMeters} />

      {/* Foreground Content Stack */}
      <main className="relative z-10">
        <HeroSection
          onOpenRegister={() => handleOpenRegister()}
          depthMeters={depthData.depthMeters}
          pressureAtm={depthData.pressureAtm}
          zoneName={depthData.zoneName}
          onIgniteBurner={handleBreathBubble}
        />
        <DifferentiatorsSection />
        <ArcSection />
        <MeasurementSection />
        <ArenasSection onSelectArena={(idx) => handleOpenRegister(idx)} />
        <LungChallengeSection onOpenRegister={() => handleOpenRegister()} />
        <LeaderboardSection />
        <GauntletSection />
        <PodiumSection />
        <CtaSection onOpenRegister={() => handleOpenRegister()} />
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Registration Modal */}
      <RegistrationModal
        isOpen={registerModalOpen}
        onClose={() => setRegisterModalOpen(false)}
        initialArenaIndex={selectedArenaIndex}
      />
    </div>
  );
}
