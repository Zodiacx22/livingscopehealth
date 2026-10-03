/**
 * Procedural Zen Meditation & Tibetan Singing Bowl Audio Engine
 * Uses Web Audio API to synthesize:
 * 1. Warm "Om" harmonic drone pad (tuned to 136.1 Hz Earth frequency & 432 Hz calming scale)
 * 2. Slow diaphragmatic respiration breathing swells (12-second mindful breathing cadence)
 * 3. Authentic Tibetan singing bowl strikes with acoustic beating and long harmonic decays
 * 4. Zero wind, noise, or harsh frequencies — purely peaceful, grounding acoustic meditation
 */

export interface MeditationAudioOptions {
  onChime?: (chimeData: { frequency: number; altitude: number }) => void;
}

export class OceanAudioEngine {
  private ctx: AudioContext | null = null;
  private isRunning = false;
  private altitudeMeters = 500;
  private onChime?: (chimeData: { frequency: number; altitude: number }) => void;
  private chimeListeners = new Set<(chimeData: { frequency: number; altitude: number }) => void>();

  // Master & Drone Nodes
  private masterGain: GainNode | null = null;
  private droneGain: GainNode | null = null;
  private droneFilter: BiquadFilterNode | null = null;
  private droneOscillators: OscillatorNode[] = [];
  private droneIndividualGains: GainNode[] = [];
  private breathingLfo: OscillatorNode | null = null;
  private breathingLfoGain: GainNode | null = null;

  // Periodic Singing Bowl Timer
  private bowlTimer: number | null = null;

  constructor(options?: MeditationAudioOptions) {
    this.onChime = options?.onChime;
  }

  /**
   * Subscribe to meditation chime/bowl events
   */
  public onPing(callback: (pingData: { frequency: number; depth: number }) => void): () => void {
    const wrapped = (d: { frequency: number; altitude: number }) => {
      callback({ frequency: d.frequency, depth: d.altitude });
    };
    this.chimeListeners.add(wrapped);
    return () => {
      this.chimeListeners.delete(wrapped);
    };
  }

  public async start(): Promise<boolean> {
    if (this.isRunning && this.ctx && this.ctx.state === 'running') {
      return true;
    }

    try {
      const AudioCtxClass =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtxClass();

      if (this.ctx.state === 'suspended') {
        await this.ctx.resume();
      }

      // Master output with soft warmth limiter
      const compressor = this.ctx.createDynamicsCompressor();
      compressor.threshold.setValueAtTime(-18, this.ctx.currentTime);
      compressor.knee.setValueAtTime(14, this.ctx.currentTime);
      compressor.ratio.setValueAtTime(3.0, this.ctx.currentTime);
      compressor.attack.setValueAtTime(0.03, this.ctx.currentTime);
      compressor.release.setValueAtTime(0.5, this.ctx.currentTime);
      compressor.connect(this.ctx.destination);

      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.55, this.ctx.currentTime);
      this.masterGain.connect(compressor);

      // --- 1. Start Warm Meditation Om Drone ---
      this.setupMeditationDrone();

      // --- 2. Initial Welcoming Singing Bowl Strike ---
      this.playTibetanBowl(432, 0.22);

      // --- 3. Periodic Zen Singing Bowl Scheduler ---
      this.isRunning = true;
      this.scheduleNextBowl();

      return true;
    } catch (err) {
      console.warn('Failed to start Meditation Audio Engine:', err);
      return false;
    }
  }

  /**
   * Synthesize a soothing, continuous "Om" meditation drone chord.
   * Root: 136.1 Hz (Cosmic Om / Year Frequency)
   * Harmonics: 68.05 Hz (Deep grounding base), 204.15 Hz (Fifth), 272.2 Hz (Octave), 432 Hz (Verdi peaceful tuning)
   * Respiration LFO: 0.083 Hz (~12 seconds per breath cycle)
   */
  private setupMeditationDrone() {
    if (!this.ctx || !this.masterGain) return;

    const now = this.ctx.currentTime;

    // Warm Low-pass Filter removing any harsh high-frequencies
    this.droneFilter = this.ctx.createBiquadFilter();
    this.droneFilter.type = 'lowpass';
    this.droneFilter.frequency.setValueAtTime(320, now);
    this.droneFilter.Q.setValueAtTime(1.1, now);

    // Drone Gain
    this.droneGain = this.ctx.createGain();
    this.droneGain.gain.setValueAtTime(0.001, now);
    this.droneGain.gain.linearRampToValueAtTime(0.28, now + 2.5);

    // Diaphragmatic Breath LFO (~12 second full cycle: 5s inhale, 2s hold, 5s exhale)
    this.breathingLfo = this.ctx.createOscillator();
    this.breathingLfo.type = 'sine';
    this.breathingLfo.frequency.setValueAtTime(0.083, now); // ~12s period

    this.breathingLfoGain = this.ctx.createGain();
    this.breathingLfoGain.gain.setValueAtTime(0.08, now); // Gentle undulating depth

    this.breathingLfo.connect(this.breathingLfoGain);
    this.breathingLfoGain.connect(this.droneGain.gain);
    this.breathingLfo.start(now);

    // Chord voices (Root 136.1 Hz, Sub 68.05 Hz, Harmonic 204.15 Hz, Shimmer 432 Hz)
    const voices = [
      { freq: 68.05, type: 'sine' as OscillatorType, gain: 0.35, detune: -2 },
      { freq: 136.1, type: 'sine' as OscillatorType, gain: 0.40, detune: 0 },
      { freq: 136.1, type: 'triangle' as OscillatorType, gain: 0.15, detune: 2.5 },
      { freq: 204.15, type: 'sine' as OscillatorType, gain: 0.18, detune: -1.5 },
      { freq: 272.2, type: 'sine' as OscillatorType, gain: 0.12, detune: 1.2 },
      { freq: 432.0, type: 'sine' as OscillatorType, gain: 0.08, detune: 0 },
    ];

    this.droneOscillators = [];
    this.droneIndividualGains = [];

    voices.forEach((voice) => {
      if (!this.ctx || !this.droneFilter) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = voice.type;
      osc.frequency.setValueAtTime(voice.freq, now);
      osc.detune.setValueAtTime(voice.detune, now);

      gain.gain.setValueAtTime(voice.gain, now);

      osc.connect(gain);
      gain.connect(this.droneFilter);

      osc.start(now);

      this.droneOscillators.push(osc);
      this.droneIndividualGains.push(gain);
    });

    this.droneFilter.connect(this.droneGain);
    this.droneGain.connect(this.masterGain);
  }

  /**
   * Synthesize an authentic Tibetan Singing Bowl strike.
   * Generates warm fundamental with characteristic acoustic non-integer overtones:
   * Fundamental (1.0x), Harmonic (2.76x), High partial (5.40x) with natural acoustic beating.
   */
  public playTibetanBowl(fundamentalFreq = 432, volume = 0.24) {
    if (!this.ctx || !this.isRunning || !this.masterGain || this.ctx.state !== 'running') return;

    const now = this.ctx.currentTime;
    const duration = 6.5; // Long, tranquil resonance decay

    // Bowl Harmonics and acoustic beating ratios
    const partials = [
      { ratio: 1.0, vol: 0.45, decay: duration, detune: 0.4 },
      { ratio: 1.0, vol: 0.35, decay: duration * 0.9, detune: -0.4 }, // Dual fundamental creates authentic singing bowl beating warble
      { ratio: 2.76, vol: 0.22, decay: duration * 0.65, detune: 1.2 },
      { ratio: 5.40, vol: 0.12, decay: duration * 0.45, detune: -1.8 },
      { ratio: 8.93, vol: 0.04, decay: duration * 0.30, detune: 0 },
    ];

    partials.forEach((p) => {
      if (!this.ctx || !this.masterGain) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(fundamentalFreq * p.ratio, now);
      osc.detune.setValueAtTime(p.detune, now);

      // Strike attack: gentle wooden striker curve
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.linearRampToValueAtTime(volume * p.vol, now + 0.045);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + p.decay);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + p.decay + 0.1);
    });

    // Notify listeners
    const chimeInfo = { frequency: Math.round(fundamentalFreq), altitude: this.altitudeMeters };
    if (this.onChime) {
      this.onChime(chimeInfo);
    }
    this.chimeListeners.forEach((listener) => {
      try {
        listener(chimeInfo);
      } catch (err) {
        console.error(err);
      }
    });
  }

  /**
   * Periodic Zen Singing Bowl scheduler
   */
  private scheduleNextBowl() {
    if (!this.isRunning) return;

    // Peaceful intervals between 12 and 18 seconds
    const interval = 12000 + Math.random() * 6000;
    this.bowlTimer = window.setTimeout(() => {
      if (this.isRunning && this.ctx) {
        // Calming pentatonic scale notes: 432 Hz (A), 486 Hz (B), 576 Hz (D), 648 Hz (E), 720 Hz (F#)
        const meditationScales = [432, 528, 576, 648, 432];
        const pitch = meditationScales[Math.floor(Math.random() * meditationScales.length)];
        this.playTibetanBowl(pitch, 0.18);
      }
      this.scheduleNextBowl();
    }, interval);
  }

  /**
   * Smoothly adjusts the meditation drone resonance based on progression / altitude
   */
  public updateDepth(altitudeOrDepth: number) {
    this.altitudeMeters = altitudeOrDepth;
    if (!this.ctx || !this.isRunning || this.ctx.state !== 'running' || !this.droneFilter) return;

    try {
      const normalized = Math.min(1, Math.max(0, (altitudeOrDepth - 500) / 4000));
      const now = this.ctx.currentTime;
      // Gentle filter opening for a brighter, more celestial meditation tone
      const targetFreq = 280 + normalized * 180;
      this.droneFilter.frequency.setTargetAtTime(targetFreq, now, 0.4);
    } catch {
      // Safe fallback
    }
  }

  public updateAltitude(altitude: number) {
    this.updateDepth(altitude);
  }

  /**
   * Gentle meditation breath bowl chime (backward compatibility with playBubble)
   */
  public playBubble() {
    this.playBreathTone();
  }

  /**
   * Gentle soft meditation breath bell
   */
  public playBreathTone() {
    this.playTibetanBowl(528, 0.16); // 528 Hz transformation / heart tone
  }

  /**
   * Meditation bell strike (backward compatibility with playSonarPing and playChime)
   */
  public playSonarPing() {
    this.playTibetanBowl(432, 0.22);
  }

  public playChime() {
    this.playTibetanBowl(432, 0.20);
  }

  public setVolume(volume: number) {
    if (this.ctx && this.masterGain) {
      const clamped = Math.min(1, Math.max(0, volume));
      this.masterGain.gain.setTargetAtTime(clamped, this.ctx.currentTime, 0.1);
    }
  }

  public stop() {
    this.isRunning = false;

    if (this.bowlTimer) {
      clearTimeout(this.bowlTimer);
      this.bowlTimer = null;
    }

    if (this.breathingLfo) {
      try {
        this.breathingLfo.stop();
      } catch {
        // Ignore
      }
      this.breathingLfo = null;
    }

    this.droneOscillators.forEach((osc) => {
      try {
        osc.stop();
      } catch {
        // Ignore
      }
    });
    this.droneOscillators = [];
    this.droneIndividualGains = [];

    if (this.ctx) {
      try {
        this.ctx.close();
      } catch {
        // Ignore
      }
      this.ctx = null;
    }
  }

  public getIsRunning(): boolean {
    return this.isRunning;
  }
}

// Global persistent singleton audio engine instance
export const oceanAudio = new OceanAudioEngine();
export const skyAudio = oceanAudio;
export const meditationAudio = oceanAudio;
