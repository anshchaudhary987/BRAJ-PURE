"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const reasons = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#D4A017" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a5 5 0 0 1 5 5c0 6-5 8-5 13" /><path d="M12 20h.01" /><circle cx="12" cy="7" r="1" fill="#D4A017" />
      </svg>
    ),
    title: "A2 Beta-Casein Protein",
    desc: "Contains only the A2 type of beta-casein protein — gentler on your gut, closer to human breast milk.",
    accentColor: "#D4A017",
    accentBg: "rgba(212,160,23,0.08)",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#40916C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    title: "Easier Digestion",
    desc: "No BCM-7 opioid peptide found in A1 milk. Reduces bloating, inflammation & digestive discomfort significantly.",
    accentColor: "#40916C",
    accentBg: "rgba(64,145,108,0.08)",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#D4A017" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4" />
      </svg>
    ),
    title: "Superior Nutrition",
    desc: "Rich in Omega-3, CLA, Vitamins A, D, B12 & calcium. Our Gir cows produce milk with a natural golden hue from carotene.",
    accentColor: "#D4A017",
    accentBg: "rgba(212,160,23,0.08)",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#40916C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75" />
      </svg>
    ),
    title: "Zero Additives",
    desc: "No preservatives, no antibiotics, no synthetic hormones. Exactly as it comes from our cows — nothing more.",
    accentColor: "#40916C",
    accentBg: "rgba(64,145,108,0.08)",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#D4A017" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /><path d="m9 12 2 2 4-4" />
      </svg>
    ),
    title: "Purebred Gir Cows",
    desc: "Free-range, grass-fed Gir breed — the original Desi cow of India. Raised with love, never with chemicals.",
    accentColor: "#D4A017",
    accentBg: "rgba(212,160,23,0.08)",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#40916C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="2" /><path d="m16 8 5 3v5l-5 3V8Z" />
        <path d="M5 16v2M12 16v2" />
      </svg>
    ),
    title: "Farm to Doorstep",
    desc: "Milked at dawn. Chilled within the hour. At your door by morning. The freshness you can taste in every sip.",
    accentColor: "#40916C",
    accentBg: "rgba(64,145,108,0.08)",
  },
];

const counterItems = [
  { value: "100%", label: "Pure A2 Protein" },
  { value: "0",    label: "Artificial Additives" },
  { value: "500+", label: "Happy Families" },
  { value: "3yr+", label: "Of Trusted Delivery" },
];

export default function WhyA2() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="why-a2"
      ref={ref}
      style={{
        padding: "110px 0",
        background: "linear-gradient(180deg, #060A06 0%, #080E08 50%, #060A06 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow orbs */}
      <div style={{ position: "absolute", top: "-100px", left: "-100px", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, rgba(212,160,23,0.04) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-100px", right: "-100px", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(27,67,50,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />

      {/* Subtle grid pattern */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `linear-gradient(rgba(212,160,23,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(212,160,23,0.02) 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1300px", margin: "0 auto", padding: "0 32px", position: "relative" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "70px" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="section-tag">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#D4A017" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75" />
              </svg>
              Why Choose A2?
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7 }}
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              fontWeight: 800,
              color: "#F0ECD8",
              lineHeight: 1.15,
              marginBottom: "18px",
              letterSpacing: "-0.5px",
            }}
          >
            Not all milk is{" "}
            <span className="gradient-text-gold">created equal</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{
              fontSize: "17px",
              color: "rgba(240,236,216,0.45)",
              maxWidth: "560px",
              margin: "0 auto",
              lineHeight: 1.8,
            }}
          >
            Modern crossbred cows produce A1 milk with proteins that can harm your
            health. Our purebred Gir cows give you A2 milk — the original, natural kind.
          </motion.p>
        </div>

        {/* Counter strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            background: "rgba(212,160,23,0.06)",
            borderRadius: "20px",
            overflow: "hidden",
            marginBottom: "64px",
            border: "1px solid rgba(212,160,23,0.12)",
          }}
          className="counter-grid"
        >
          {counterItems.map((c, i) => (
            <div
              key={c.label}
              style={{
                padding: "36px 20px",
                textAlign: "center",
                position: "relative",
                borderRight: i < 3 ? "1px solid rgba(212,160,23,0.08)" : "none",
              }}
            >
              <div style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "2.6rem",
                fontWeight: 900,
                background: "linear-gradient(135deg, #D4A017, #F5CC55)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                lineHeight: 1,
                marginBottom: "10px",
              }}>
                {c.value}
              </div>
              <div style={{ fontSize: "12px", color: "rgba(240,236,216,0.45)", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase" }}>
                {c.label}
              </div>
              {/* Bottom accent */}
              <div style={{
                position: "absolute", bottom: 0, left: "20%", right: "20%",
                height: "2px",
                background: i % 2 === 0
                  ? "linear-gradient(90deg, transparent, rgba(212,160,23,0.4), transparent)"
                  : "linear-gradient(90deg, transparent, rgba(64,145,108,0.4), transparent)",
                borderRadius: "999px",
              }} />
            </div>
          ))}
        </motion.div>

        {/* Cards */}
        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "22px" }}
          className="reasons-grid"
        >
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.12 * i + 0.3, duration: 0.6 }}
              className="card-dark"
              style={{
                padding: "30px",
                cursor: "default",
              }}
            >
              {/* Accent bottom line */}
              <div style={{
                position: "absolute",
                bottom: 0, left: "16px", right: "16px",
                height: "2px",
                background: `linear-gradient(90deg, transparent, ${r.accentColor}, transparent)`,
                borderRadius: "0 0 26px 26px",
                opacity: 0.3,
              }} />

              <div style={{
                width: "52px", height: "52px",
                background: r.accentBg,
                borderRadius: "14px",
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: "18px",
                border: `1px solid ${r.accentColor}18`,
              }}>
                {r.icon}
              </div>

              <h3 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.1rem",
                fontWeight: 700,
                color: "#F0ECD8",
                marginBottom: "12px",
              }}>
                {r.title}
              </h3>
              <p style={{ fontSize: "14px", lineHeight: 1.75, color: "rgba(240,236,216,0.45)" }}>
                {r.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .reasons-grid  { grid-template-columns: repeat(2, 1fr) !important; }
          .counter-grid  { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .reasons-grid  { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
