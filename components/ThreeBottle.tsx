"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import Image from "next/image";

export default function ThreeBottle() {
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
      42,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 7.5);

    // Renderer with anti-aliasing, transparency, and high performance
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    // Set 100% native device pixel ratio for crystal-clear retina render resolution
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.shadowMap.enabled = true;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;

    // ─── PROCEDURAL ENVIRONMENT MAP GENERATION (CRISP STUDIO REFLECTIONS) ───
    const genEnvMap = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 512;
      canvas.height = 256;
      const ctx = canvas.getContext("2d")!;

      // Deep dark rich backdrop space (increases contrast)
      ctx.fillStyle = "#010301";
      ctx.fillRect(0, 0, 512, 256);

      // Left vertical softbox light strip (neutral crisp white, full opacity)
      const gradLeft = ctx.createLinearGradient(110, 0, 190, 0);
      gradLeft.addColorStop(0, "rgba(255, 255, 255, 0)");
      gradLeft.addColorStop(0.5, "rgba(255, 255, 255, 1.0)");
      gradLeft.addColorStop(1, "rgba(255, 255, 255, 0)");
      ctx.fillStyle = gradLeft;
      ctx.fillRect(110, 0, 80, 256);

      // Right vertical softbox light strip (warm golden glow, full opacity)
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

      const texture = new THREE.CanvasTexture(canvas);
      texture.mapping = THREE.EquirectangularReflectionMapping;
      return texture;
    };

    const envMapTexture = genEnvMap();
    scene.environment = envMapTexture;

    // ─── LIGHTING ───
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.65);
    scene.add(ambientLight);

    // Key Light (warm gold highlight from top right)
    const keyLight = new THREE.DirectionalLight(0xfff8e7, 2.2);
    keyLight.position.set(4, 5, 4);
    scene.add(keyLight);

    // Rim Light (backlit gold accent to trace the glass curves)
    const rimLight = new THREE.DirectionalLight(0xd4a017, 4.2);
    rimLight.position.set(-6, 3, -6);
    scene.add(rimLight);

    // Soft Fill Light (forest green tint from left bottom)
    const fillLight = new THREE.DirectionalLight(0x40916c, 0.95);
    fillLight.position.set(-4, -2, 2);
    scene.add(fillLight);

    // Core Point Light (illuminates the internal milk body)
    const pointLight = new THREE.PointLight(0xffffff, 1.6, 12);
    pointLight.position.set(0, 0, 3);
    scene.add(pointLight);

    // ─── PROCEDURAL BOTTLE GROUP SETUP ───
    const bottleGroup = new THREE.Group();
    scene.add(bottleGroup);

    // Center alignment
    bottleGroup.position.y = -0.3;

    // 1. Glass Outer Shell (Lathe Geometry)
    const glassPoints = [];
    const segments = 64;

    glassPoints.push(new THREE.Vector2(0, -1.8));       // bottom center
    glassPoints.push(new THREE.Vector2(0.92, -1.8));    // bottom corner
    glassPoints.push(new THREE.Vector2(0.96, -1.72));   // bottom roll
    glassPoints.push(new THREE.Vector2(0.96, 0.8));     // cylindrical body cylinder
    glassPoints.push(new THREE.Vector2(0.92, 1.2));     // shoulder curve starts
    glassPoints.push(new THREE.Vector2(0.48, 1.8));     // neck starts
    glassPoints.push(new THREE.Vector2(0.46, 2.3));     // neck top
    glassPoints.push(new THREE.Vector2(0.53, 2.36));    // mouth rim flare
    glassPoints.push(new THREE.Vector2(0.53, 2.45));    // mouth top lip
    glassPoints.push(new THREE.Vector2(0.43, 2.45));    // inner rim corner
    glassPoints.push(new THREE.Vector2(0.41, 2.3));     // inner neck top
    glassPoints.push(new THREE.Vector2(0.43, 1.8));     // inner neck bottom
    glassPoints.push(new THREE.Vector2(0.87, 1.18));    // inner shoulder curve
    glassPoints.push(new THREE.Vector2(0.91, 0.78));    // inner body cylinder
    glassPoints.push(new THREE.Vector2(0.91, -1.68));   // inner body bottom
    glassPoints.push(new THREE.Vector2(0.85, -1.74));   // inner bottom roll
    glassPoints.push(new THREE.Vector2(0, -1.74));      // inner bottom center

    const glassGeometry = new THREE.LatheGeometry(glassPoints, segments);
    
    // Physical clear glass (Transmission removed to eliminate downsampled blur buffer)
    const glassMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.28,             // Elegant glass transparency
      roughness: 0.015,
      metalness: 0.08,
      clearcoat: 1.0,
      clearcoatRoughness: 0.015,
      ior: 1.52,                 // Glass index of refraction
      side: THREE.DoubleSide,
      shadowSide: THREE.DoubleSide,
    });

    const glassMesh = new THREE.Mesh(glassGeometry, glassMaterial);
    bottleGroup.add(glassMesh);

    // 2. Milk Core (Inside glass)
    const milkPoints = [];
    milkPoints.push(new THREE.Vector2(0, -1.72));
    milkPoints.push(new THREE.Vector2(0.9, -1.72));
    milkPoints.push(new THREE.Vector2(0.905, 0.76));     // fill body level
    milkPoints.push(new THREE.Vector2(0.85, 1.15));      // fill shoulder level
    milkPoints.push(new THREE.Vector2(0.42, 1.76));      // fill neck level
    milkPoints.push(new THREE.Vector2(0, 1.76));         // flat surface of milk

    const milkGeometry = new THREE.LatheGeometry(milkPoints, segments);
    const milkMaterial = new THREE.MeshStandardMaterial({
      color: 0xfdfdfa,           // Warm organic milk color
      roughness: 0.5,
      metalness: 0.0,
    });

    const milkMesh = new THREE.Mesh(milkGeometry, milkMaterial);
    milkMesh.scale.set(0.99, 0.99, 0.99); // Prevent Z-fighting with glass interior
    bottleGroup.add(milkMesh);

    // 3. Dynamic Branded Cylinder Label
    // Label wraps around the main cylindrical body: Y height from -0.8 to 0.4
    const labelGeo = new THREE.CylinderGeometry(0.92, 0.92, 1.15, segments, 1, true);

    // Dynamic High-Resolution Label Texture (2048 x 1024)
    const genLabelTexture = () => {
      const labelCanvas = document.createElement("canvas");
      labelCanvas.width = 2048;   // High-res retina scale
      labelCanvas.height = 1024;  // High-res retina scale
      const ctx = labelCanvas.getContext("2d")!;

      // 1. Forest Green Background
      ctx.fillStyle = "#0c1b12";
      ctx.fillRect(0, 0, 2048, 1024);

      // 2. Gold Borders
      ctx.strokeStyle = "#d4a017";
      ctx.lineWidth = 16;
      ctx.strokeRect(40, 40, 1968, 944);
      ctx.lineWidth = 4;
      ctx.strokeRect(64, 64, 1920, 896);

      // 3. Subtle Mandala Watermark background (Retina scale)
      ctx.globalAlpha = 0.09;
      ctx.strokeStyle = "#d4a017";
      ctx.lineWidth = 3.0;
      for (let r = 160; r <= 440; r += 70) {
        ctx.beginPath();
        ctx.arc(1024, 512, r, 0, Math.PI * 2);
        ctx.stroke();
      }
      // Inner star rays
      for (let j = 0; j < 12; j++) {
        const angle = (j * Math.PI) / 6;
        ctx.beginPath();
        ctx.moveTo(1024 + 80 * Math.cos(angle), 512 + 80 * Math.sin(angle));
        ctx.lineTo(1024 + 460 * Math.cos(angle), 512 + 460 * Math.sin(angle));
        ctx.stroke();
      }
      ctx.globalAlpha = 1.0;

      // 4. Branding Typography (Serif Gold)
      ctx.fillStyle = "#d4a017";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      // Main Brand Name
      ctx.font = "bold 120px 'Cinzel', 'Playfair Display', 'Georgia', serif";
      ctx.fillText("N A R A N S H", 1024, 380);

      // Border Divider Line
      ctx.fillStyle = "rgba(212, 160, 23, 0.4)";
      ctx.fillRect(724, 492, 600, 4);

      // Sub-brand Title
      ctx.fillStyle = "#f0ecd8";
      ctx.font = "bold 38px 'Plus Jakarta Sans', sans-serif";
      if ("letterSpacing" in ctx) {
        (ctx as any).letterSpacing = "12px";
      }
      ctx.fillText("DAIRY FARM", 1024, 550);
      if ("letterSpacing" in ctx) {
        (ctx as any).letterSpacing = "0px";
      }

      // Tagline
      ctx.fillStyle = "#d4a017";
      ctx.font = "italic 52px 'Playfair Display', serif";
      ctx.fillText("A2 Desi Cow Milk", 1024, 670);

      // Decorative stars
      ctx.font = "46px 'Georgia'";
      ctx.fillText("✦  ✦  ✦", 1024, 790);

      const texture = new THREE.CanvasTexture(labelCanvas);
      texture.wrapS = THREE.RepeatWrapping;
      texture.repeat.x = -1;
      return texture;
    };

    const labelMaterial = new THREE.MeshStandardMaterial({
      map: genLabelTexture(),
      roughness: 0.35,
      metalness: 0.15,
      side: THREE.DoubleSide,
    });

    const labelMesh = new THREE.Mesh(labelGeo, labelMaterial);
    labelMesh.position.y = -0.5;
    bottleGroup.add(labelMesh);

    // 4. Foil Cap (Sitting on the rim)
    const capPoints = [];
    capPoints.push(new THREE.Vector2(0.44, 2.44));
    capPoints.push(new THREE.Vector2(0.55, 2.44));
    capPoints.push(new THREE.Vector2(0.55, 2.52));
    capPoints.push(new THREE.Vector2(0, 2.52));

    const capGeometry = new THREE.LatheGeometry(capPoints, segments);
    const capMaterial = new THREE.MeshStandardMaterial({
      color: 0xd4a017,
      roughness: 0.12,
      metalness: 0.85,
    });

    const capMesh = new THREE.Mesh(capGeometry, capMaterial);
    bottleGroup.add(capMesh);

    // ─── RADIAL DROP SHADOW PLANE (ANCHORS THE BOTTLE) ───
    const shadowGeo = new THREE.PlaneGeometry(3.2, 3.2);

    const genShadowTexture = () => {
      const shadowCanvas = document.createElement("canvas");
      shadowCanvas.width = 128;
      shadowCanvas.height = 128;
      const ctx = shadowCanvas.getContext("2d")!;

      const grad = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
      grad.addColorStop(0, "rgba(2, 6, 2, 0.72)");
      grad.addColorStop(0.4, "rgba(2, 6, 2, 0.3)");
      grad.addColorStop(1, "rgba(2, 6, 2, 0)");

      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 128, 128);

      return new THREE.CanvasTexture(shadowCanvas);
    };

    const shadowMaterial = new THREE.MeshBasicMaterial({
      map: genShadowTexture(),
      transparent: true,
      depthWrite: false,
    });

    const shadowMesh = new THREE.Mesh(shadowGeo, shadowMaterial);
    shadowMesh.rotation.x = -Math.PI / 2;
    shadowMesh.position.y = -2.4;
    scene.add(shadowMesh);

    setIsLoaded(true);

    // ─── INTERACTION & DRAG ROTATION ───
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let targetRotationX = 0.08;
    let targetRotationY = 0;

    const handlePointerDown = (e: PointerEvent) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
      if (canvasRef.current) canvasRef.current.style.cursor = "grabbing";
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (!isDragging) return;

      const deltaX = e.clientX - previousMousePosition.x;
      const deltaY = e.clientY - previousMousePosition.y;

      targetRotationY += deltaX * 0.007;
      targetRotationX += deltaY * 0.007;

      // Clamp X rotation to prevent completely looking from top or bottom
      targetRotationX = Math.max(-0.35, Math.min(0.35, targetRotationX));

      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const handlePointerUp = () => {
      isDragging = false;
      if (canvasRef.current) canvasRef.current.style.cursor = "grab";
    };

    canvas.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);

    // ─── ANIMATION LOOP ───
    let animationFrameId: number;
    
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Slow Y spin when not dragging
      if (!isDragging) {
        targetRotationY += 0.0038;
      }

      // Smooth inertia damping
      bottleGroup.rotation.y += (targetRotationY - bottleGroup.rotation.y) * 0.055;
      bottleGroup.rotation.x += (targetRotationX - bottleGroup.rotation.x) * 0.055;

      // Floating sin wave motion
      const time = Date.now() * 0.0012;
      const floatVal = Math.sin(time) * 0.09;
      bottleGroup.position.y = -0.3 + floatVal;

      // Dynamically scale & fade shadow based on height float offset
      const shadowScale = 1 - floatVal * 0.75;
      shadowMesh.scale.set(shadowScale, shadowScale, 1);
      shadowMaterial.opacity = 0.85 - floatVal * 1.6;

      renderer.render(scene, camera);
    };

    animate();

    // ─── CONTAINER RESIZING ───
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
      
      if (canvas) {
        canvas.removeEventListener("pointerdown", handlePointerDown);
      }
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);

      // Dispose items to avoid memory leaks
      glassGeometry.dispose();
      glassMaterial.dispose();
      milkGeometry.dispose();
      milkMaterial.dispose();
      labelGeo.dispose();
      labelMaterial.dispose();
      capGeometry.dispose();
      capMaterial.dispose();
      shadowGeo.dispose();
      shadowMaterial.dispose();
      envMapTexture.dispose();
      renderer.dispose();
    };
  }, [isMobile]);

  // Mobile fallback or WebGL unsupported layout
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
        }}
      >
        <div 
          style={{
            width: "80%",
            height: "80%",
            position: "relative",
            borderRadius: "50%",
            overflow: "hidden",
            boxShadow: "0 24px 80px rgba(0,0,0,0.5), inset 0 0 60px rgba(0,0,0,0.2)",
            border: "1.5px solid rgba(212,160,23,0.15)",
          }}
        >
          <Image
            src="/cow-bottle.png"
            alt="Naransh Dairy Farm premium milk bottle"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="drag-interactive"
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        cursor: "grab",
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
            Laying Glass Canvas...
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
