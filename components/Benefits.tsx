"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const benefits = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 6L6 18M6 6l12 12" /><circle cx="12" cy="12" r="10" />
      </svg>
    ),
    title: "Stronger Bones & Teeth",
    short: "Superior calcium bioavailability",
    detail:
      "A2 milk's calcium is paired with Vitamin D and phosphorus in a natural ratio that maximizes absorption. Regular consumption significantly improves bone density — especially critical for growing children and the elderly.",
    accentColor: "#D4A017",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a5 5 0 0 1 5 5c0 6-5 8-5 13" /><circle cx="12" cy="20" r="1" />
      </svg>
    ),
    title: "Sharper Brain & Focus",
    short: "Omega-3, B12 & Choline rich",
    detail:
      "Our milk is naturally rich in Omega-3 fatty acids, Vitamin B12, and Choline — all essential for brain health, neural connectivity, and cognitive performance. Better focus, better memory, better you.",
    accentColor: "#40916C",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      </svg>
    ),
    title: "Stronger Immunity",
    short: "Natural immunoglobulins & antibodies",
    detail:
      "Braj Pure A2 milk contains natural immunoglobulins and colostrum-like proteins that train and boost your immune system. Health-conscious adults report fewer seasonal illnesses within weeks of daily consumption.",
    accentColor: "#D4A017",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75" />
      </svg>
    ),
    title: "Happy Gut Microbiome",
    short: "No BCM-7 peptide",
    detail:
      "A1 milk releases BCM-7 — an opioid peptide that disrupts gut microbiome and causes inflammation. A2 milk doesn't. Switch to Braj Pure and notice reduced bloating, better digestion, and improved gut health within days.",
    accentColor: "#40916C",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    title: "Muscle Growth & Recovery",
    short: "Complete amino acid profile",
    detail:
      "With 8g of protein per 250ml and a complete essential amino acid profile, Braj Pure A2 milk is the ideal post-workout drink. It's the natural, clean protein that bodybuilders and athletes swear by.",
    accentColor: "#D4A017",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    title: "Glowing Skin & Hair",
    short: "Beta-carotene, Vitamin A & E",
    detail:
      "The golden hue of our Gir cow milk isn't just beautiful — it's beta-carotene. Combined with natural Vitamin A and E, regular consumption promotes cell regeneration, clearer skin, stronger hair, and a natural glow from within.",
    accentColor: "#40916C",
  },
];

const nutritionFacts = [
  { label: "Protein",   val: "8g" },
  { label: "Calcium",   val: "290mg" },
  { label: "Fat",       val: "8g" },
  { label: "Vitamin D", val: "2.5µg" },
];

export default function Benefits() {
  const ref         = useRef(null);
  const inView      = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState<number | null>(0);

  return (
    <section
      id="benefits"
      ref={ref}
      style={{
        padding: "110px 0",
        background: "linear-gradient(180deg, #060A06 0%, #080E08 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glows */}
      <div style={{ position: "absolute", top: "-100px", left: "-100px", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, rgba(212,160,23,0.04) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-100px", right: "-100px", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(27,67,50,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: "1300px", margin: "0 auto", padding: "0 32px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}>
            <span className="section-tag">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#D4A017" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
              Health Benefits
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7 }}
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 800,
              color: "#F0ECD8",
              lineHeight: 1.15,
              marginBottom: "18px",
              letterSpacing: "-0.3px",
            }}
          >
            What Braj Pure does{" "}
            <span className="gradient-text-gold">for your body</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            style={{ fontSize: "16px", color: "rgba(240,236,216,0.4)", maxWidth: "520px", margin: "0 auto" }}
          >
            Science-backed benefits of A2 milk for health-conscious individuals and families.
          </motion.p>
        </div>

        {/* Layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "52px",
            alignItems: "start",
          }}
          className="benefits-layout"
        >
          {/* Accordion */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.07 + 0.2, duration: 0.5 }}
                onClick={() => setActive(active === i ? null : i)}
                style={{
                  background: active === i
                    ? "linear-gradient(145deg, #182018, #131F13)"
                    : "rgba(24,32,24,0.4)",
                  borderRadius: "18px",
                  border: active === i
                    ? `1px solid ${b.accentColor}35`
                    : "1px solid rgba(255,255,255,0.05)",
                  overflow: "hidden",
                  cursor: "pointer",
                  boxShadow: active === i
                    ? `0 8px 40px rgba(0,0,0,0.3), 0 0 20px ${b.accentColor}10`
                    : "none",
                  transition: "all 0.3s ease",
                  position: "relative",
                }}
              >
                {/* Active left accent bar */}
                {active === i && (
                  <div style={{
                    position: "absolute",
                    left: 0, top: "12px", bottom: "12px",
                    width: "3px",
                    background: `linear-gradient(180deg, ${b.accentColor}, ${b.accentColor}50)`,
                    borderRadius: "0 3px 3px 0",
                  }} />
                )}

                <div style={{
                  display: "flex", alignItems: "center", gap: "16px",
                  padding: "18px 22px",
                }}>
                  <div style={{
                    width: "46px", height: "46px",
                    borderRadius: "12px",
                    background: active === i ? `${b.accentColor}15` : "rgba(255,255,255,0.04)",
                    border: active === i ? `1px solid ${b.accentColor}30` : "1px solid rgba(255,255,255,0.05)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                    transition: "all 0.3s ease",
                    color: active === i ? b.accentColor : "rgba(240,236,216,0.4)",
                  }}>
                    {b.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: 700,
                      fontSize: "1rem",
                      color: active === i ? "#F0ECD8" : "rgba(240,236,216,0.7)",
                      marginBottom: "2px",
                      transition: "color 0.3s ease",
                    }}>
                      {b.title}
                    </div>
                    <div style={{ fontSize: "12px", color: "rgba(240,236,216,0.35)", fontWeight: 500 }}>{b.short}</div>
                  </div>
                  <svg
                    width="16" height="16" viewBox="0 0 24 24" fill="none"
                    stroke={active === i ? b.accentColor : "rgba(240,236,216,0.3)"}
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    style={{ transition: "transform 0.3s ease, stroke 0.3s ease", transform: active === i ? "rotate(180deg)" : "rotate(0deg)", flexShrink: 0 }}
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </div>

                <AnimatePresence>
                  {active === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ overflow: "hidden" }}
                    >
                      <div style={{
                        padding: "0 22px 18px 84px",
                        fontSize: "13.5px",
                        lineHeight: 1.8,
                        color: "rgba(240,236,216,0.45)",
                      }}>
                        {b.detail}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Right visual panel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
            style={{ position: "sticky", top: "100px" }}
          >
            <div style={{
              background: "linear-gradient(135deg, #0D2B1D 0%, #182018 50%, #1A1000 100%)",
              borderRadius: "28px",
              padding: "48px 40px",
              color: "#F0ECD8",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
              border: "1px solid rgba(212,160,23,0.15)",
              boxShadow: "0 24px 80px rgba(0,0,0,0.4)",
            }}>
              <div style={{ position: "absolute", top: "-60px", right: "-60px", width: "200px", height: "200px", borderRadius: "50%", background: "radial-gradient(circle, rgba(212,160,23,0.1), transparent)", pointerEvents: "none" }} />
              <div style={{ position: "absolute", bottom: "-40px", left: "-40px", width: "160px", height: "160px", borderRadius: "50%", background: "radial-gradient(circle, rgba(64,145,108,0.06), transparent)", pointerEvents: "none" }} />

              <AnimatePresence mode="wait">
                {active !== null && (
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    style={{ position: "relative", zIndex: 1 }}
                  >
                    <div style={{
                      width: "72px", height: "72px",
                      borderRadius: "20px",
                      background: `${benefits[active].accentColor}15`,
                      border: `1px solid ${benefits[active].accentColor}30`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      margin: "0 auto 22px",
                      color: benefits[active].accentColor,
                    }}>
                      <div style={{ transform: "scale(1.6)" }}>{benefits[active].icon}</div>
                    </div>
                    <h3 style={{
                      fontFamily: "'Cinzel', serif",
                      fontSize: "1.4rem",
                      fontWeight: 800,
                      marginBottom: "18px",
                      color: "#F0ECD8",
                      letterSpacing: "-0.2px",
                    }}>
                      {benefits[active].title}
                    </h3>
                    <p style={{ fontSize: "14px", lineHeight: 1.8, color: "rgba(240,236,216,0.5)" }}>
                      {benefits[active].detail}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", margin: "32px 0", position: "relative", zIndex: 1 }} />

              <div style={{ position: "relative", zIndex: 1 }}>
                <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "2.5px", color: "#D4A017", marginBottom: "18px", textTransform: "uppercase", fontFamily: "'Cinzel', serif" }}>
                  Per 250ml Serving
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                  {nutritionFacts.map((n) => (
                    <div
                      key={n.label}
                      style={{
                        background: "rgba(212,160,23,0.06)",
                        borderRadius: "14px",
                        padding: "14px",
                        border: "1px solid rgba(212,160,23,0.1)",
                      }}
                    >
                      <div style={{
                        fontFamily: "'Cinzel', serif",
                        fontSize: "1.4rem",
                        fontWeight: 800,
                        color: "#D4A017",
                      }}>
                        {n.val}
                      </div>
                      <div style={{ fontSize: "11px", color: "rgba(240,236,216,0.4)", marginTop: "4px" }}>
                        {n.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .benefits-layout { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
