"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageRevealWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [progress, setProgress] = useState(0);
  const [showCurtains, setShowCurtains] = useState(true);
  const [isMounted, setIsMounted] = useState(true);

  // Animate progress counter from 0 to 100
  useEffect(() => {
    const startTime = Date.now();
    const duration = 1500; // 1.5 seconds loading

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const value = Math.min(Math.round((elapsed / duration) * 100), 100);
      setProgress(value);

      if (value >= 100) {
        clearInterval(interval);
        // Delay curtains opening slightly after hitting 100%
        const curtainTimeout = setTimeout(() => {
          setShowCurtains(false);
        }, 300);

        // Completely unmount wrapper after slide completes
        const unmountTimeout = setTimeout(() => {
          setIsMounted(false);
        }, 1600);

        return () => {
          clearTimeout(curtainTimeout);
          clearTimeout(unmountTimeout);
        };
      }
    }, 16);

    return () => clearInterval(interval);
  }, []);

  const titleText = "NARANSH";
  const subtitleText = "DAIRY FARM";

  return (
    <>
      <AnimatePresence>
        {isMounted && (
          <div style={{ position: "fixed", inset: 0, zIndex: 9999, pointerEvents: "none", overflow: "hidden" }}>
            
            {/* Left Curtain */}
            <motion.div
              initial={{ x: 0 }}
              animate={!showCurtains ? { x: "-100%" } : { x: 0 }}
              transition={{ duration: 1.2, ease: [0.85, 0, 0.15, 1] }}
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                width: "50%",
                background: "linear-gradient(135deg, #040804 0%, #080f08 100%)",
                borderRight: "1px solid rgba(212, 160, 23, 0.1)",
                pointerEvents: "auto",
              }}
            />

            {/* Right Curtain */}
            <motion.div
              initial={{ x: 0 }}
              animate={!showCurtains ? { x: "100%" } : { x: 0 }}
              transition={{ duration: 1.2, ease: [0.85, 0, 0.15, 1] }}
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                right: 0,
                width: "50%",
                background: "linear-gradient(135deg, #080f08 0%, #040804 100%)",
                borderLeft: "1px solid rgba(212, 160, 23, 0.1)",
                pointerEvents: "auto",
              }}
            />

            {/* Center Vertical Divider Line */}
            <motion.div
              initial={{ scaleY: 0, opacity: 0 }}
              animate={showCurtains 
                ? { scaleY: 1, opacity: [0, 0.5, 0.3] } 
                : { scaleY: 0, opacity: 0, width: "4px", backgroundColor: "#F5CC55", boxShadow: "0 0 30px #D4A017" }
              }
              transition={showCurtains 
                ? { duration: 1, ease: "easeInOut" } 
                : { duration: 0.5, ease: "easeOut" }
              }
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                left: "50%",
                width: "1px",
                x: "-50%",
                background: "linear-gradient(180deg, transparent, rgba(212, 160, 23, 0.4) 50%, transparent)",
                transformOrigin: "center",
                zIndex: 10001,
              }}
            />

            {/* Brand Logo & Info Reveal */}
            <AnimatePresence>
              {showCurtains && (
                <motion.div
                  exit={{ opacity: 0, scale: 0.9, y: -20 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
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
                    maxWidth: "400px",
                  }}
                >
                  {/* SVG Drawing Logo */}
                  <div
                    style={{
                      width: "84px",
                      height: "84px",
                      borderRadius: "24px",
                      background: "linear-gradient(135deg, #0D2B1D 0%, #1B4332 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "1.5px solid rgba(212, 160, 23, 0.25)",
                      boxShadow: "0 10px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)",
                      marginBottom: "28px",
                      position: "relative",
                    }}
                  >
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                      <motion.path
                        d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75"
                        stroke="#D4A017"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.4, ease: "easeInOut" }}
                      />
                    </svg>
                  </div>

                  {/* Character-by-Character Stagger Title */}
                  <h2
                    style={{
                      fontFamily: "'Cinzel', serif",
                      fontSize: "28px",
                      color: "#F0ECD8",
                      fontWeight: 800,
                      letterSpacing: "3px",
                      lineHeight: 1.1,
                      display: "flex",
                      gap: "1px",
                      overflow: "hidden",
                    }}
                  >
                    {titleText.split("").map((char, index) => (
                      <motion.span
                        key={index}
                        initial={{ y: 35, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                          duration: 0.6,
                          ease: [0.25, 0.46, 0.45, 0.94],
                          delay: index * 0.05 + 0.1,
                        }}
                      >
                        {char}
                      </motion.span>
                    ))}
                    <span style={{ width: "8px" }} />
                    <span style={{
                      background: "linear-gradient(135deg, #D4A017, #F5CC55)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      display: "flex",
                      gap: "1px",
                    }}>
                      {subtitleText.split(" ").join("").split("").map((char, index) => (
                        <motion.span
                          key={index}
                          initial={{ y: 35, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{
                            duration: 0.6,
                            ease: [0.25, 0.46, 0.45, 0.94],
                            delay: (titleText.length + index) * 0.05 + 0.15,
                          }}
                        >
                          {char}
                        </motion.span>
                      ))}
                    </span>
                  </h2>

                  {/* Sub-tag tagline */}
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 0.65, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.1 }}
                    style={{
                      fontSize: "9px",
                      color: "#F0ECD8",
                      fontWeight: 600,
                      letterSpacing: "4px",
                      textTransform: "uppercase",
                      marginTop: "10px",
                    }}
                  >
                    Pure A2 Desi Cow Milk
                  </motion.p>

                  {/* High-End Numeric Loader */}
                  <div style={{ marginTop: "40px", position: "relative" }}>
                    <div style={{
                      fontFamily: "'Cinzel', serif",
                      fontSize: "2.5rem",
                      fontWeight: 300,
                      color: "rgba(212, 160, 23, 0.85)",
                      letterSpacing: "2px",
                      lineHeight: 1
                    }}>
                      {progress.toString().padStart(3, "0")}
                      <span style={{ fontSize: "14px", verticalAlign: "super", marginLeft: "2px", color: "rgba(240, 236, 216, 0.4)" }}>%</span>
                    </div>

                    {/* Progress tracking arc */}
                    <div style={{
                      width: "60px",
                      height: "2px",
                      background: "rgba(255,255,255,0.05)",
                      borderRadius: "999px",
                      marginTop: "12px",
                      overflow: "hidden",
                      margin: "12px auto 0"
                    }}>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ ease: "easeOut" }}
                        style={{
                          height: "100%",
                          background: "linear-gradient(90deg, #7A5C10, #D4A017)"
                        }}
                      />
                    </div>
                  </div>

                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </AnimatePresence>

      {/* Main Page Reveal Transition */}
      <motion.div
        initial={{ scale: 0.94, opacity: 0 }}
        animate={!showCurtains ? { scale: 1, opacity: 1 } : { scale: 0.94, opacity: 0 }}
        transition={{ duration: 1.4, ease: [0.25, 0.46, 0.45, 1], delay: 0.2 }}
        style={{ minHeight: "100vh" }}
      >
        {children}
      </motion.div>
    </>
  );
}
