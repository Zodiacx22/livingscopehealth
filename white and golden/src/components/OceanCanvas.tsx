import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface OceanCanvasProps {
  onDepthUpdate?: (data: {
    depthMeters: number;
    pressureAtm: number;
    zoneName: string;
    scrollPercent: number;
  }) => void;
  flashlightEnabled?: boolean;
  onToggleFlashlight?: () => void;
  onBreathBubble?: () => void;
  windVisible?: boolean;
  windDensity?: number;
}

interface LeafParticle {
  mesh: THREE.Mesh;
  baseY: number;
  speedY: number;
  swaySpeed: number;
  swayAmp: number;
  rotSpeedX: number;
  rotSpeedY: number;
  rotSpeedZ: number;
  phase: number;
  scale: number;
}

/**
 * Creates curved 3D leaf geometry with natural organic curvature
 */
function createCurvedLeafGeometry(width = 1.0, height = 1.6): THREE.BufferGeometry {
  const shape = new THREE.Shape();
  // Organic slender leaf contour
  shape.moveTo(0, -height * 0.5);
  shape.bezierCurveTo(width * 0.7, -height * 0.25, width * 0.9, height * 0.2, 0, height * 0.5);
  shape.bezierCurveTo(-width * 0.9, height * 0.2, -width * 0.7, -height * 0.25, 0, -height * 0.5);

  const geom = new THREE.ShapeGeometry(shape, 12);

  // Apply subtle 3D parabolic curvature to leaf vertices
  const pos = geom.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i);
    const y = pos.getY(i);
    // Curl along center vein and bend tip
    const z = -Math.pow(x / (width * 0.7), 2) * 0.22 + (y / height) * 0.12;
    pos.setZ(i, z);
  }
  geom.computeVertexNormals();
  return geom;
}

export const OceanCanvas: React.FC<OceanCanvasProps> = ({
  onDepthUpdate,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const onDepthUpdateRef = useRef(onDepthUpdate);

  useEffect(() => {
    onDepthUpdateRef.current = onDepthUpdate;
  }, [onDepthUpdate]);

  useEffect(() => {
    if (!containerRef.current) return;

    // --- 1. Scene, Camera & Luminous Bright Renderer ---
    const scene = new THREE.Scene();
    // Transparent background allows CSS blur to apply softly to leaves only
    scene.background = null;
    scene.fog = new THREE.FogExp2(0xf7f7f5, 0.02);

    let width = window.innerWidth;
    let height = window.innerHeight;
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0, 16);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;

    containerRef.current.appendChild(renderer.domElement);

    // --- 2. Luminous Ambient & Warm Sunlight Lighting ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 2.4);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xfff8ed, 1.8);
    sunLight.position.set(8, 14, 10);
    scene.add(sunLight);

    const softFill = new THREE.DirectionalLight(0xedf2f7, 1.2);
    softFill.position.set(-8, -6, 6);
    scene.add(softFill);

    // --- 3. Falling Leaves System ---
    const leafGeom1 = createCurvedLeafGeometry(0.85, 1.4);
    const leafGeom2 = createCurvedLeafGeometry(1.05, 1.7);
    const leafGeom3 = createCurvedLeafGeometry(0.7, 1.2);

    // Organic Zen/Autumn Foliage Palette
    const leafPalettes = [
      { color: 0xb88628, roughness: 0.65, metalness: 0.08 }, // Warm Golden Brass
      { color: 0xc98d2c, roughness: 0.60, metalness: 0.05 }, // Warm Amber
      { color: 0x8a843d, roughness: 0.70, metalness: 0.06 }, // Soft Olive Bronze
      { color: 0xb5732b, roughness: 0.68, metalness: 0.05 }, // Copper Ochre
      { color: 0xdbb765, roughness: 0.58, metalness: 0.10 }, // Soft Champagne Gold
      { color: 0x7c8c62, roughness: 0.72, metalness: 0.04 }, // Tender Sage Green
    ];

    const materials = leafPalettes.map(
      (p) =>
        new THREE.MeshStandardMaterial({
          color: p.color,
          roughness: p.roughness,
          metalness: p.metalness,
          side: THREE.DoubleSide,
          shadowSide: THREE.DoubleSide,
          transparent: true,
          opacity: 0.88,
        })
    );

    const leavesGroup = new THREE.Group();
    scene.add(leavesGroup);

    const leafCount = 95;
    const leafParticles: LeafParticle[] = [];

    for (let i = 0; i < leafCount; i++) {
      const geomChoice = i % 3 === 0 ? leafGeom1 : i % 3 === 1 ? leafGeom2 : leafGeom3;
      const matChoice = materials[i % materials.length];

      const mesh = new THREE.Mesh(geomChoice, matChoice);

      // Random starting spatial distribution
      const x = (Math.random() - 0.5) * 26;
      const y = (Math.random() - 0.5) * 26;
      const z = (Math.random() - 0.5) * 12 - 2;
      mesh.position.set(x, y, z);

      // Initial random rotation
      mesh.rotation.set(
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2
      );

      const scale = 0.45 + Math.random() * 0.55;
      mesh.scale.set(scale, scale, scale);

      leavesGroup.add(mesh);

      leafParticles.push({
        mesh,
        baseY: y,
        speedY: 0.014 + Math.random() * 0.022, // Gentle tranquil descent
        swaySpeed: 0.8 + Math.random() * 1.2,
        swayAmp: 0.015 + Math.random() * 0.025,
        rotSpeedX: (Math.random() - 0.5) * 0.025,
        rotSpeedY: (Math.random() - 0.5) * 0.035,
        rotSpeedZ: (Math.random() - 0.5) * 0.02,
        phase: Math.random() * Math.PI * 2,
        scale,
      });
    }

    // --- 4. Smooth Scroll Tracking & Wind Drift Interaction ---
    let scrollY = window.scrollY;
    let targetScrollDraft = 0;
    let currentScrollDraft = 0;

    const handleScroll = () => {
      const currentY = window.scrollY;
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const percent = Math.min(1, Math.max(0, currentY / maxScroll));

      // Scroll draft reaction
      const delta = currentY - scrollY;
      targetScrollDraft = THREE.MathUtils.clamp(delta * 0.003, -0.08, 0.08);
      scrollY = currentY;

      // Update depth/altitude state (500m to 4,500m)
      const altitude = Math.round(500 + percent * 4000);
      onDepthUpdateRef.current?.({
        depthMeters: altitude,
        pressureAtm: Number((1.0 - percent * 0.65).toFixed(2)),
        zoneName:
          percent < 0.25
            ? 'Valley & Meadow (500m)'
            : percent < 0.6
            ? 'Alpine Foothills (1,800m)'
            : 'Zen Summit (4,500m)',
        scrollPercent: percent,
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Handle Window Resize
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // --- 5. Animation Render Loop ---
    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smoothly interpolate scroll draft
      currentScrollDraft = THREE.MathUtils.lerp(currentScrollDraft, targetScrollDraft, 0.05);
      targetScrollDraft *= 0.94; // Decay draft quickly

      // Update each falling leaf particle
      const limitBottom = -14;
      const limitTop = 15;
      const limitX = 14;

      for (let i = 0; i < leafParticles.length; i++) {
        const p = leafParticles[i];
        const m = p.mesh;

        // Descent with gentle gravity and scroll influence
        m.position.y -= p.speedY + currentScrollDraft * 0.5;

        // Gentle horizontal & depth swaying (fluttering leaf physics)
        m.position.x += Math.sin(elapsedTime * p.swaySpeed + p.phase) * p.swayAmp;
        m.position.z += Math.cos(elapsedTime * p.swaySpeed * 0.8 + p.phase) * (p.swayAmp * 0.6);

        // Aerodynamic tumbling rotation
        m.rotation.x += p.rotSpeedX + Math.sin(elapsedTime * 1.5 + p.phase) * 0.008;
        m.rotation.y += p.rotSpeedY;
        m.rotation.z += p.rotSpeedZ + Math.cos(elapsedTime * 1.2 + p.phase) * 0.006;

        // Respawn when falling out of viewport
        if (m.position.y < limitBottom) {
          m.position.y = limitTop + Math.random() * 2;
          m.position.x = (Math.random() - 0.5) * (limitX * 2);
          m.position.z = (Math.random() - 0.5) * 12 - 2;
          p.phase = Math.random() * Math.PI * 2;
        } else if (m.position.y > limitTop + 3) {
          // If scrolled upwards fast
          m.position.y = limitBottom - 1;
        }

        // Horizontal boundary wrap
        if (m.position.x > limitX + 2) m.position.x = -limitX - 1;
        if (m.position.x < -limitX - 2) m.position.x = limitX + 1;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);

      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }

      // Dispose geometries & materials
      leafGeom1.dispose();
      leafGeom2.dispose();
      leafGeom3.dispose();
      materials.forEach((m) => m.dispose());
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden filter blur-[4.5px] sm:blur-[6px] scale-[1.03] transform-gpu will-change-transform opacity-85"
      aria-hidden="true"
    />
  );
};
