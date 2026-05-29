"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PWAInstall() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [showIOSInstructions, setShowIOSInstructions] = useState(false);

  useEffect(() => {
    // Check if already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      return;
    }

    // Detect iOS
    const isIosDevice = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
    setIsIOS(isIosDevice);

    const handleBeforeInstallPrompt = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsVisible(true);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    const handleManualShow = () => {
      setIsVisible(true);
      if (isIOS) setShowIOSInstructions(true);
    };

    window.addEventListener("show-pwa-install", handleManualShow);

    // Show manual install for iOS after a delay
    if (isIosDevice) {
      const timer = setTimeout(() => setIsVisible(true), 3000);
      return () => clearTimeout(timer);
    }

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
      window.removeEventListener("show-pwa-install", handleManualShow);
    };
  }, []);

  const handleInstallClick = async () => {
    if (isIOS) {
      setShowIOSInstructions(true);
      return;
    }

    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") {
      setDeferredPrompt(null);
      setIsVisible(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            style={{
              position: "fixed",
              bottom: "100px",
              left: "20px",
              right: "20px",
              zIndex: 1000,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <button
              onClick={handleInstallClick}
              style={{
                background: "linear-gradient(135deg, #1B4332 0%, #030705 100%)",
                border: "1px solid #D4A017",
                borderRadius: "16px",
                padding: "12px 24px",
                color: "#F0ECD8",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.5), 0 0 15px rgba(212,160,23,0.3)",
                cursor: "pointer",
              }}
            >
              <div style={{
                width: "32px",
                height: "32px",
                background: "#D4A017",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#030705" strokeWidth="2.5">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
                </svg>
              </div>
              <div style={{ textAlign: "left" }}>
                <div style={{ fontSize: "14px", fontWeight: 700, lineHeight: 1.2 }}>Install Naransh Dairy Farm App</div>
                <div style={{ fontSize: "11px", opacity: 0.7 }}>Order faster & track history</div>
              </div>
              <button 
                onClick={(e) => { e.stopPropagation(); setIsVisible(false); }}
                style={{ background: "none", border: "none", color: "rgba(240,236,216,0.4)", marginLeft: "8px", fontSize: "16px" }}
              >✕</button>
            </button>
          </motion.div>
        )}

        {showIOSInstructions && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.85)",
              backdropFilter: "blur(8px)",
              zIndex: 2000,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "30px",
            }}
          >
            <div style={{
              background: "#030705",
              border: "1px solid #D4A017",
              borderRadius: "24px",
              padding: "32px",
              maxWidth: "400px",
              textAlign: "center",
            }}>
              <div style={{ fontSize: "24px", color: "#D4A017", marginBottom: "16px" }}>Install on iPhone</div>
              <p style={{ color: "#F0ECD8", opacity: 0.8, marginBottom: "24px", lineHeight: 1.6 }}>
                1. Tap the <strong>Share</strong> button <span style={{fontSize: "20px"}}>⎋</span> at the bottom of the screen.<br/>
                2. Scroll down and tap <strong>'Add to Home Screen'</strong> <span style={{fontSize: "20px"}}>⊞</span>.<br/>
                3. Tap <strong>'Add'</strong> in the top right corner.
              </p>
              <button
                onClick={() => setShowIOSInstructions(false)}
                className="btn-gold"
                style={{ width: "100%", justifyContent: "center" }}
              >
                Got it!
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
