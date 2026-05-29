"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [hoveredType, setHoveredType] = useState<"link" | "drag" | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Motion values for smooth cursor tracking
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth spring physics for fluid movement
  const springConfig = { damping: 30, stiffness: 250, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check if device is touch-based (disable custom cursor on touch/mobile)
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) {
      setIsVisible(false);
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    // Event listener for hover state checking
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      // Find closest anchor tag or buttons
      const isInteractive = target.closest("a, button, [role='button'], .clickable");
      const isDragArea = target.closest(".drag-interactive");

      if (isDragArea) {
        setHoveredType("drag");
      } else if (isInteractive) {
        setHoveredType("link");
      } else {
        setHoveredType(null);
      }
    };

    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer ring cursor */}
      <motion.div
        ref={cursorRef}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
          width: hoveredType === "link" ? 56 : hoveredType === "drag" ? 80 : 36,
          height: hoveredType === "link" ? 56 : hoveredType === "drag" ? 80 : 36,
          borderRadius: "50%",
          border: hoveredType === "drag" 
            ? "1px dashed rgba(212, 160, 23, 0.6)" 
            : "1.5px solid rgba(212, 160, 23, 0.4)",
          backgroundColor: hoveredType === "link" 
            ? "rgba(212, 160, 23, 0.08)" 
            : hoveredType === "drag" 
              ? "rgba(27, 67, 50, 0.15)" 
              : "rgba(212, 160, 23, 0.02)",
          zIndex: 99999,
          pointerEvents: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: hoveredType === "link" 
            ? "0 0 20px rgba(212, 160, 23, 0.15)" 
            : "none",
        }}
        animate={{
          scale: hoveredType === "link" ? 1.05 : hoveredType === "drag" ? 1.1 : 1,
        }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
      >
        {hoveredType === "drag" && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{
              fontSize: "10px",
              fontWeight: 800,
              color: "#D4A017",
              letterSpacing: "1.5px",
              fontFamily: "'Cinzel', serif",
            }}
          >
            DRAG
          </motion.span>
        )}
      </motion.div>

      {/* Tiny inner dot cursor */}
      <motion.div
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          width: hoveredType === "link" ? 0 : 6,
          height: hoveredType === "link" ? 0 : 6,
          borderRadius: "50%",
          backgroundColor: "#D4A017",
          zIndex: 100000,
          pointerEvents: "none",
          boxShadow: "0 0 8px #F5CC55",
        }}
        animate={{
          scale: hoveredType === "link" ? 0 : 1,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
      />
    </>
  );
}
