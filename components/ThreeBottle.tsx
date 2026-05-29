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
    // Check if device is mobile/tablet or matches touch pointer to disable expensive WebGL
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
    camera.position.set(0, 0, 8);

    // Renderer with anti-aliasing and transparent background
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.shadowMap.enabled = true;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;

    // ─── LIGHTING ───
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.45);
    scene.add(ambientLight);

    // Front directional light (white/gold highlight)
    const dirLight1 = new THREE.DirectionalLight(0xfffdf0, 1.5);
    dirLight1.position.set(5, 5, 5);
    scene.add(dirLight1);

    // Back rim light (strong gold glow for transparent glass outlines)
    const dirLight2 = new THREE.DirectionalLight(0xd4a017, 3.2);
    dirLight2.position.set(-6, 3, -6);
    scene.add(dirLight2);

    // Subtle side fill light
    const dirLight3 = new THREE.DirectionalLight(0x40916c, 0.6);
    dirLight3.position.set(6, -2, -2);
    scene.add(dirLight3);

    // Point light to highlight the internal milk body
    const pointLight = new THREE.PointLight(0xffffff, 1.8, 15);
    pointLight.position.set(0, 0.5, 4);
    scene.add(pointLight);

    // ─── PROCEDURAL BOTTLE MODELING ───
    const bottleGroup = new THREE.Group();
    scene.add(bottleGroup);

    // Adjust bottle vertical alignment
    bottleGroup.position.y = -0.5;

    // 1. Glass Outer Body (Lathe Geometry)
    const glassPoints = [];
    const segments = 48;

    // Outer profile coordinates: [radius, height]
    glassPoints.push(new THREE.Vector2(0, -2.0));       // center bottom
    glassPoints.push(new THREE.Vector2(0.95, -2.0));    // bottom corner
    glassPoints.push(new THREE.Vector2(1.0, -1.9));     // bottom edge roundness
    glassPoints.push(new THREE.Vector2(1.0, 1.0));      // main cylindrical body
    glassPoints.push(new THREE.Vector2(0.9, 1.4));      // curving shoulder
    glassPoints.push(new THREE.Vector2(0.5, 2.0));      // neck bottom
    glassPoints.push(new THREE.Vector2(0.48, 2.4));     // neck top
    glassPoints.push(new THREE.Vector2(0.56, 2.45));    // mouth flare
    glassPoints.push(new THREE.Vector2(0.56, 2.56));    // mouth top rim
    glassPoints.push(new THREE.Vector2(0.46, 2.56));    // lip inner edge
    glassPoints.push(new THREE.Vector2(0.44, 2.4));     // inner neck
    glassPoints.push(new THREE.Vector2(0.46, 2.0));     // inner neck bottom
    glassPoints.push(new THREE.Vector2(0.85, 1.38));    // inner shoulder
    glassPoints.push(new THREE.Vector2(0.94, 0.98));    // inner wall top
    glassPoints.push(new THREE.Vector2(0.94, -1.86));   // inner wall bottom
    glassPoints.push(new THREE.Vector2(0.86, -1.94));   // inner bottom corner
    glassPoints.push(new THREE.Vector2(0, -1.94));      // inner bottom center

    const glassGeometry = new THREE.LatheGeometry(glassPoints, segments);
    
    // Luxury transmission glass material
    const glassMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transparent: true,
      roughness: 0.03,
      metalness: 0.05,
      transmission: 0.96,        // High light transmission
      ior: 1.52,                 // Index of refraction for common glass
      thickness: 0.15,           // Realistic refraction thickness
      specularIntensity: 1.0,
      clearcoat: 1.0,
      clearcoatRoughness: 0.03,
      side: THREE.DoubleSide,
      shadowSide: THREE.DoubleSide,
    });

    const glassMesh = new THREE.Mesh(glassGeometry, glassMaterial);
    bottleGroup.add(glassMesh);

    // 2. Milk Core (Nested inside glass)
    const milkPoints = [];
    milkPoints.push(new THREE.Vector2(0, -1.93));
    milkPoints.push(new THREE.Vector2(0.92, -1.93));
    milkPoints.push(new THREE.Vector2(0.93, 0.95));     // fill body height
    milkPoints.push(new THREE.Vector2(0.83, 1.35));     // fill shoulder curve
    milkPoints.push(new THREE.Vector2(0.44, 1.95));     // fill neck height limit
    milkPoints.push(new THREE.Vector2(0, 1.95));        // milk surface cap

    const milkGeometry = new THREE.LatheGeometry(milkPoints, segments);
    const milkMaterial = new THREE.MeshStandardMaterial({
      color: 0xfbf9f5, // Organic creamy white milk hue
      roughness: 0.5,
      metalness: 0.0,
    });

    const milkMesh = new THREE.Mesh(milkGeometry, milkMaterial);
    milkMesh.scale.set(0.99, 0.99, 0.99); // Prevent Z-fighting with glass interior
    bottleGroup.add(milkMesh);

    // 3. Golden Cap (Sealed on the top rim)
    const capPoints = [];
    capPoints.push(new THREE.Vector2(0.45, 2.5));
    capPoints.push(new THREE.Vector2(0.58, 2.5));
    capPoints.push(new THREE.Vector2(0.58, 2.62));
    capPoints.push(new THREE.Vector2(0, 2.62));

    const capGeometry = new THREE.LatheGeometry(capPoints, segments);
    const capMaterial = new THREE.MeshStandardMaterial({
      color: 0xd4a017, // Pure Brij Gold
      roughness: 0.15,
      metalness: 0.9,
    });

    const capMesh = new THREE.Mesh(capGeometry, capMaterial);
    bottleGroup.add(capMesh);

    setIsLoaded(true);

    // ─── INTERACTION & DRAG ROTATION ───
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let targetRotationX = 0.1;
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

      // Clamp X rotation to prevent completely turning the bottle upside down
      targetRotationX = Math.max(-0.4, Math.min(0.4, targetRotationX));

      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const handlePointerUp = () => {
      isDragging = false;
      if (canvasRef.current) canvasRef.current.style.cursor = "grab";
    };

    // Attach event listeners
    canvas.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);

    // ─── ANIMATION LOOP ───
    let animationFrameId: number;
    
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Continuous slow rotation when not dragging
      if (!isDragging) {
        targetRotationY += 0.0035;
      }

      // Smooth interpolation (spring physics simulation)
      bottleGroup.rotation.y += (targetRotationY - bottleGroup.rotation.y) * 0.06;
      bottleGroup.rotation.x += (targetRotationX - bottleGroup.rotation.x) * 0.06;

      // Gentle vertical floating motion
      const time = Date.now() * 0.001;
      bottleGroup.position.y = -0.5 + Math.sin(time) * 0.08;

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

      // Dispose resources
      glassGeometry.dispose();
      glassMaterial.dispose();
      milkGeometry.dispose();
      milkMaterial.dispose();
      capGeometry.dispose();
      capMaterial.dispose();
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
