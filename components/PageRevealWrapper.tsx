"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageRevealWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showCurtains, setShowCurtains] = useState(true);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    // Stage 1: Tell the page to start zooming in slightly before the curtain completely parts
    const curtainTimer = setTimeout(() => {
      setShowCurtains(false);
    }, 1300);

    // Stage 2: Completely remove preloader from the DOM after animations complete
    const mountTimer = setTimeout(() => {
      setIsMounted(false);
    }, 2600);

    return () => {
      clearTimeout(curtainTimer);
      clearTimeout(mountTimer);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {isMounted && (
          <div style={{ position: "fixed", inset: 0, zIndex: 9999, pointerEvents: "none" }}>
            {/* Left Curtain */}
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{ duration: 1.25, ease: [0.85, 0, 0.15, 1], delay: 1.3 }}
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                width: "50%",
                background: "linear-gradient(135deg, #050905 0%, #0a110a 100%)",
                borderRight: "1px solid rgba(212, 160, 23, 0.2)",
                boxShadow: "10px 0 50px rgba(0,0,0,0.8)",
                pointerEvents: "auto",
              }}
            />

            {/* Right Curtain */}
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "100%" }}
              transition={{ duration: 1.25, ease: [0.85, 0, 0.15, 1], delay: 1.3 }}
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                right: 0,
                width: "50%",
                background: "linear-gradient(135deg, #0a110a 0%, #050905 100%)",
                borderLeft: "1px solid rgba(212, 160, 23, 0.2)",
                boxShadow: "-10px 0 50px rgba(0,0,0,0.8)",
                pointerEvents: "auto",
              }}
            />

            {/* Center Brand Splash (Logo + Text) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: [0, 1, 1, 0],
                scale: [0.8, 1, 1.05, 0.95],
              }}
              transition={{
                times: [0, 0.15, 0.8, 1],
                duration: 1.8,
                ease: "easeInOut",
              }}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                x: "-50%",
                y: "-50%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                zIndex: 10000,
                width: "100%",
                maxWidth: "320px",
              }}
            >
              {/* Leaf Icon Frame */}
              <div
                style={{
                  width: "76px",
                  height: "76px",
                  borderRadius: "22px",
                  background: "linear-gradient(135deg, #1B4332 0%, #2D6A4F 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 8px 40px rgba(212,160,23,0.35), inset 0 1px 0 rgba(255,255,255,0.08)",
                  border: "1.5px solid rgba(212,160,23,0.3)",
                  marginBottom: "20px",
                }}
              >
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#D4A017" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75" />
                </svg>
              </div>

              {/* Title */}
              <h2
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "26px",
                  color: "#F0ECD8",
                  fontWeight: 800,
                  letterSpacing: "2.5px",
                  lineHeight: 1.1,
                }}
              >
                Naransh <span style={{
                  background: "linear-gradient(135deg, #D4A017, #F5CC55)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>Dairy Farm</span>
              </h2>

              {/* Sub-tag */}
              <p
                style={{
                  fontSize: "9px",
                  color: "rgba(212,160,23,0.7)",
                  fontWeight: 700,
                  letterSpacing: "4px",
                  textTransform: "uppercase",
                  marginTop: "8px",
                }}
              >
                Pure A2 Desi Cow Milk
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Main Page Reveal Transition */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={!showCurtains ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }}
        transition={{ duration: 1.3, ease: [0.25, 0.46, 0.45, 1], delay: 0.25 }}
        style={{ minHeight: "100vh" }}
      >
        {children}
      </motion.div>
    </>
  );
}
