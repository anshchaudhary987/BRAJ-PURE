"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function LiquidVortex() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hasWebGL, setHasWebGL] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Check if device is mobile/tablet or matches touch pointer to disable WebGL for speed
    const checkDevice = () => {
      const isTouch = window.matchMedia("(pointer: coarse)").matches;
      const isSmallScreen = window.innerWidth < 768;
      setIsMobile(isTouch || isSmallScreen);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    // WebGL support check
    const checkWebGLSupport = () => {
      try {
        const canvas = document.createElement("canvas");
        return !!(
          window.WebGLRenderingContext &&
          (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
        );
      } catch (e) {
        return false;
      }
    };

    if (!checkWebGLSupport()) {
      setHasWebGL(false);
      return;
    }

    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    // ─── THREE.JS SCENE SETUP ───
    const scene = new THREE.Scene();

    // Perspective Camera
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 7.5);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;

    // ─── ENVIRONMENT MAP GENERATION (STUDIO REFLECTIONS) ───
    const genEnvMap = () => {
      const canvasEnv = document.createElement("canvas");
      canvasEnv.width = 512;
      canvasEnv.height = 256;
      const ctx = canvasEnv.getContext("2d")!;

      ctx.fillStyle = "#010301";
      ctx.fillRect(0, 0, 512, 256);

      // Left vertical softbox light strip (crisp white)
      const gradLeft = ctx.createLinearGradient(110, 0, 190, 0);
      gradLeft.addColorStop(0, "rgba(255, 255, 255, 0)");
      gradLeft.addColorStop(0.5, "rgba(255, 255, 255, 1.0)");
      gradLeft.addColorStop(1, "rgba(255, 255, 255, 0)");
      ctx.fillStyle = gradLeft;
      ctx.fillRect(110, 0, 80, 256);

      // Right vertical softbox light strip (warm golden)
      const gradRight = ctx.createLinearGradient(310, 0, 400, 0);
      gradRight.addColorStop(0, "rgba(255, 245, 220, 0)");
      gradRight.addColorStop(0.5, "rgba(255, 230, 170, 1.0)");
      gradRight.addColorStop(1, "rgba(255, 245, 220, 0)");
      ctx.fillStyle = gradRight;
      ctx.fillRect(310, 0, 90, 256);

      // Top softbox ambient glow
      const gradTop = ctx.createLinearGradient(0, 20, 0, 100);
      gradTop.addColorStop(0, "rgba(255, 255, 255, 0.75)");
      gradTop.addColorStop(1, "rgba(255, 255, 255, 0)");
      ctx.fillStyle = gradTop;
      ctx.fillRect(0, 0, 512, 100);

      const texture = new THREE.CanvasTexture(canvasEnv);
      texture.mapping = THREE.EquirectangularReflectionMapping;
      return texture;
    };

    scene.environment = genEnvMap();

    // ─── SCENE LIGHTING ───
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 2.5);
    dirLight1.position.set(5, 5, 5);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xd4a017, 4.0);
    dirLight2.position.set(-6, 4, -5);
    scene.add(dirLight2);

    const dirLight3 = new THREE.DirectionalLight(0x40916c, 1.5);
    dirLight3.position.set(-3, -3, 3);
    scene.add(dirLight3);

    // ─── DOUBLE INTERTWINING HELIX GEOMETRY ───
    const heightRange = 6.0;
    const steps = 60;
    const radius = 0.7;
    const turns = 1.4;

    // Generate points along helix formulas
    const milkPoints = [];
    const gheePoints = [];

    for (let i = 0; i <= steps; i++) {
      const t = i / steps - 0.5; // -0.5 to 0.5
      const angle = t * Math.PI * 2 * turns;

      // Milk Helix
      const mx = Math.cos(angle) * radius;
      const my = t * heightRange;
      const mz = Math.sin(angle) * radius;
      milkPoints.push(new THREE.Vector3(mx, my, mz));

      // Ghee Helix (180 degrees offset)
      const gx = Math.cos(angle + Math.PI) * radius;
      const gy = t * heightRange;
      const gz = Math.sin(angle + Math.PI) * radius;
      gheePoints.push(new THREE.Vector3(gx, gy, gz));
    }

    const milkCurve = new THREE.CatmullRomCurve3(milkPoints);
    const gheeCurve = new THREE.CatmullRomCurve3(gheePoints);

    // Create Tubes
    const milkGeometry = new THREE.TubeGeometry(milkCurve, 120, 0.28, 24, false);
    const gheeGeometry = new THREE.TubeGeometry(gheeCurve, 120, 0.22, 24, false);

    // Save original position attributes for displacement math
    const originalMilkPositions = milkGeometry.attributes.position.clone();
    const originalGheePositions = gheeGeometry.attributes.position.clone();

    // Silken A2 Milk material (Warm White Glossy Physical)
    const milkMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xfbfaf6,
      roughness: 0.1,
      metalness: 0.04,
      clearcoat: 1.0,
      clearcoatRoughness: 0.08,
      side: THREE.DoubleSide,
    });

    // Liquid Gold Ghee material (High Metal Clearcoat Gold)
    const gheeMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xd4a017,
      roughness: 0.05,
      metalness: 0.95,
      clearcoat: 1.0,
      clearcoatRoughness: 0.05,
      side: THREE.DoubleSide,
    });

    const milkMesh = new THREE.Mesh(milkGeometry, milkMaterial);
    scene.add(milkMesh);

    const gheeMesh = new THREE.Mesh(gheeGeometry, gheeMaterial);
    scene.add(gheeMesh);

    // ─── FLOATING ORBITING ORBS ───
    const orbCount = 14;
    const orbs: {
      mesh: THREE.Mesh;
      baseX: number;
      baseY: number;
      baseZ: number;
      speed: number;
      orbitRadius: number;
      phase: number;
    }[] = [];

    const sphereGeo = new THREE.SphereGeometry(1, 16, 16);

    for (let i = 0; i < orbCount; i++) {
      const isGold = Math.random() > 0.45;
      const material = isGold ? gheeMaterial : milkMaterial;
      const size = Math.random() * 0.12 + 0.04;
      const mesh = new THREE.Mesh(sphereGeo, material);
      mesh.scale.set(size, size, size);

      const angle = Math.random() * Math.PI * 2;
      const height = (Math.random() - 0.5) * 5.0;
      const dist = Math.random() * 0.6 + 0.9;

      scene.add(mesh);

      orbs.push({
        mesh,
        baseX: Math.cos(angle) * dist,
        baseY: height,
        baseZ: Math.sin(angle) * dist,
        speed: (Math.random() * 0.8 + 0.4) * (Math.random() > 0.5 ? 1 : -1),
        orbitRadius: dist,
        phase: Math.random() * 100,
      });
    }

    setIsLoaded(true);

    // ─── MOUSE INTERACTIVE SETUP ───
    const mouse3D = new THREE.Vector2(-10, -10);
    const targetMouse3D = new THREE.Vector2(-10, -10);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      // Project into 3D scene coordinate space
      targetMouse3D.set(x * 3.2, y * 3.5);
    };

    const handleMouseLeave = () => {
      targetMouse3D.set(-10, -10);
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    // ─── ANIMATION LOOP ───
    let animationFrameId: number;
    const milkPositions = milkGeometry.attributes.position;
    const gheePositions = gheeGeometry.attributes.position;
    const count = milkPositions.count;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const time = Date.now() * 0.0012;

      // Mouse damping inertia
      mouse3D.x += (targetMouse3D.x - mouse3D.x) * 0.07;
      mouse3D.y += (targetMouse3D.y - mouse3D.y) * 0.07;

      // 1. Slow automatic rotation of the whole sculpture
      milkMesh.rotation.y = time * 0.2;
      gheeMesh.rotation.y = time * 0.2;

      // 2. Liquid normal-displacement math for Milk Stream
      for (let i = 0; i < count; i++) {
        const ox = originalMilkPositions.getX(i);
        const oy = originalMilkPositions.getY(i);
        const oz = originalMilkPositions.getZ(i);

        const nx = milkGeometry.attributes.normal.getX(i);
        const ny = milkGeometry.attributes.normal.getY(i);
        const nz = milkGeometry.attributes.normal.getZ(i);

        // Fluid noise: bulges and ripples
        let displacement = Math.sin(oy * 2.5 - time * 3.0) * 0.035 + Math.cos(ox * 2.0 + time * 1.5) * 0.015;

        // Mouse proximity warp
        // Transform original point with mesh rotation to match world space
        const worldX = ox * Math.cos(milkMesh.rotation.y) - oz * Math.sin(milkMesh.rotation.y);
        const worldY = oy;
        const dx = worldX - mouse3D.x;
        const dy = worldY - mouse3D.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 1.6 && mouse3D.x > -8) {
          const force = (1.6 - dist) * 0.16 * Math.sin(time * 7 - dist * 4);
          displacement += force;
        }

        milkPositions.setXYZ(i, ox + nx * displacement, oy + ny * displacement, oz + nz * displacement);
      }
      milkGeometry.computeVertexNormals();
      milkPositions.needsUpdate = true;

      // 3. Liquid normal-displacement math for Ghee Stream
      for (let i = 0; i < count; i++) {
        const ox = originalGheePositions.getX(i);
        const oy = originalGheePositions.getY(i);
        const oz = originalGheePositions.getZ(i);

        const nx = gheeGeometry.attributes.normal.getX(i);
        const ny = gheeGeometry.attributes.normal.getY(i);
        const nz = gheeGeometry.attributes.normal.getZ(i);

        let displacement = Math.sin(oy * 2.2 - time * 2.6) * 0.03 + Math.cos(ox * 2.5 + time * 1.8) * 0.015;

        const worldX = ox * Math.cos(gheeMesh.rotation.y) - oz * Math.sin(gheeMesh.rotation.y);
        const worldY = oy;
        const dx = worldX - mouse3D.x;
        const dy = worldY - mouse3D.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 1.6 && mouse3D.x > -8) {
          const force = (1.6 - dist) * 0.16 * Math.sin(time * 7 - dist * 4);
          displacement -= force; // Opposing deformation direction
        }

        gheePositions.setXYZ(i, ox + nx * displacement, oy + ny * displacement, oz + nz * displacement);
      }
      gheeGeometry.computeVertexNormals();
      gheePositions.needsUpdate = true;

      // 4. Animate and pull orbiting orbs
      orbs.forEach((orb) => {
        orb.phase += 0.007 * orb.speed;

        let tx = Math.cos(orb.phase) * orb.orbitRadius;
        let ty = orb.baseY + Math.sin(orb.phase * 2.2) * 0.2;
        let tz = Math.sin(orb.phase) * orb.orbitRadius;

        // Attract to mouse
        const dx = tx - mouse3D.x;
        const dy = ty - mouse3D.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 2.0 && mouse3D.x > -8) {
          const pull = (2.0 - dist) * 0.35;
          tx += (mouse3D.x - tx) * pull;
          ty += (mouse3D.y - ty) * pull;
        }

        orb.mesh.position.x += (tx - orb.mesh.position.x) * 0.1;
        orb.mesh.position.y += (ty - orb.mesh.position.y) * 0.1;
        orb.mesh.position.z += (tz - orb.mesh.position.z) * 0.1;
      });

      renderer.render(scene, camera);
    };

    animate();

    // ─── RESIZE HANDLER ───
    const handleResize = () => {
      if (!container || !canvas) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    // ─── CLEANUP ───
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);

      milkGeometry.dispose();
      milkMaterial.dispose();
      gheeGeometry.dispose();
      gheeMaterial.dispose();
      sphereGeo.dispose();
      renderer.dispose();
    };
  }, [isMobile]);

  // Mobile clean CSS animated fallback
  if (isMobile || !hasWebGL) {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          style={{
            width: "100%",
            height: "80%",
            opacity: 0.85,
          }}
        >
          <path
            d="M -10,50 Q 25,35 50,50 T 110,50 L 110,110 L -10,110 Z"
            fill="url(#goldGradient)"
            style={{
              animation: "wave-flow-vortex 7s ease-in-out infinite alternate",
            }}
          />
          <path
            d="M -10,60 Q 25,48 50,60 T 110,60 L 110,110 L -10,110 Z"
            fill="url(#creamGradient)"
            style={{
              animation: "wave-flow-vortex-alt 10s ease-in-out infinite alternate",
              mixBlendMode: "screen",
            }}
          />
          <defs>
            <linearGradient id="goldGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#7A5C10" />
              <stop offset="50%" stopColor="#D4A017" />
              <stop offset="100%" stopColor="#F5CC55" />
            </linearGradient>
            <linearGradient id="creamGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(240,236,216,0.35)" />
              <stop offset="100%" stopColor="rgba(240,236,216,0.03)" />
            </linearGradient>
          </defs>
        </svg>

        <style>{`
          @keyframes wave-flow-vortex {
            0% { d: path("M -10,50 Q 25,35 50,50 T 110,50 L 110,110 L -10,110 Z"); }
            100% { d: path("M -10,42 Q 30,55 60,42 T 110,42 L 110,110 L -10,110 Z"); }
          }
          @keyframes wave-flow-vortex-alt {
            0% { d: path("M -10,60 Q 25,48 50,60 T 110,60 L 110,110 L -10,110 Z"); }
            100% { d: path("M -10,48 Q 20,65 55,52 T 110,48 L 110,110 L -10,110 Z"); }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      {!isLoaded && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="text-gold" style={{ fontSize: "12px", fontFamily: "'Cinzel', serif", letterSpacing: "2px" }}>
            Laying Canvas...
          </div>
        </div>
      )}
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          outline: "none",
        }}
      />
    </div>
  );
}
