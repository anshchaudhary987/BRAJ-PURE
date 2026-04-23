"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const reasons = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1B4332" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a5 5 0 0 1 5 5c0 6-5 8-5 13" /><path d="M12 20h.01" /><circle cx="12" cy="7" r="1" fill="#1B4332" />
      </svg>
    ),
    title: "A2 Beta-Casein Protein",
    desc: "Braj Pure milk contains only the A2 type of beta-casein protein — gentler on your gut, closer to human breast milk.",
    accent: "#1B4332",
    accentBg: "rgba(27,67,50,0.07)",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C4831A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    title: "Easier Digestion",
    desc: "No BCM-7 (the opioid peptide found in A1 milk). Reduces bloating, inflammation & digestive discomfort significantly.",
    accent: "#C4831A",
    accentBg: "rgba(232,160,32,0.07)",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1B4332" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6.5 6.5 17.5 17.5" /><path d="M17.5 6.5 6.5 17.5" /><circle cx="12" cy="12" r="10" />
        <path d="M12 2v4" /><path d="M12 18v4" /><path d="M2 12h4" /><path d="M18 12h4" />
      </svg>
    ),
    title: "Superior Nutrition",
    desc: "Rich in Omega-3, CLA, Vitamins A, D, B12 & calcium. Our Gir cows produce milk with a natural golden hue from carotene.",
    accent: "#1B4332",
    accentBg: "rgba(27,67,50,0.07)",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C4831A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75" />
      </svg>
    ),
    title: "Zero Additives",
    desc: "No preservatives, no antibiotics, no synthetic hormones. What you get is milk exactly as it comes from our cows — nothing more.",
    accent: "#C4831A",
    accentBg: "rgba(232,160,32,0.07)",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1B4332" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    title: "Purebred Gir Cows",
    desc: "Our cows are free-range, grass-fed Gir breed — the original Desi cow of India. Treated with love, not chemicals.",
    accent: "#1B4332",
    accentBg: "rgba(27,67,50,0.07)",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C4831A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="2" /><path d="m16 8 5 3v5l-5 3V8Z" />
        <path d="M5 16v2" /><path d="M12 16v2" />
      </svg>
    ),
    title: "Farm to Doorstep",
    desc: "Milked at dawn. Chilled within the hour. At your door by morning. The freshness you can taste in every sip.",
    accent: "#C4831A",
    accentBg: "rgba(232,160,32,0.07)",
  },
];

const counterItems = [
  { value: "100%", label: "Pure A2 Protein" },
  { value: "0", label: "Artificial Additives" },
  { value: "500+", label: "Happy Families" },
  { value: "3yr+", label: "Of Trusted Delivery" },
];

export default function WhyA2() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-a2" ref={ref} style={{ padding: "100px 0", background: "#FFF8E7" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "70px" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="section-tag">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75" />
              </svg>
              Why Choose A2?
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              fontWeight: 800,
              color: "#1A1A2E",
              lineHeight: 1.2,
              marginBottom: "16px",
            }}
          >
            Not all milk is{" "}
            <span className="gradient-text-green">created equal</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{
              fontSize: "17px",
              color: "#6B7280",
              maxWidth: "560px",
              margin: "0 auto",
              lineHeight: 1.75,
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
            gap: "1px",
            background: "rgba(27,67,50,0.08)",
            borderRadius: "20px",
            overflow: "hidden",
            marginBottom: "60px",
            boxShadow: "0 4px 24px rgba(27,67,50,0.06)",
          }}
          className="counter-grid"
        >
          {counterItems.map((c, i) => (
            <div
              key={c.label}
              style={{
                padding: "36px 24px",
                background: i % 2 === 0 ? "#FDFCFA" : "#F9F3E3",
                textAlign: "center",
                position: "relative",
              }}
            >
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "2.5rem",
                  fontWeight: 900,
                  background: "linear-gradient(135deg, #1B4332, #40916C)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  lineHeight: 1,
                  marginBottom: "10px",
                }}
              >
                {c.value}
              </div>
              <div style={{ fontSize: "13px", color: "#6B7280", fontWeight: 600, letterSpacing: "0.5px" }}>
                {c.label}
              </div>
              {/* Bottom accent bar */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: "20%",
                  right: "20%",
                  height: "3px",
                  background: i % 2 === 0
                    ? "linear-gradient(90deg, transparent, #1B4332, transparent)"
                    : "linear-gradient(90deg, transparent, #E8A020, transparent)",
                  borderRadius: "999px",
                  opacity: 0.4,
                }}
              />
            </div>
          ))}
        </motion.div>

        {/* Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
          }}
          className="reasons-grid"
        >
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 * i + 0.3, duration: 0.6 }}
              className="card-premium"
              style={{
                background: "white",
                borderRadius: "24px",
                padding: "32px",
                border: "1px solid rgba(27,67,50,0.06)",
                boxShadow: "0 4px 24px rgba(27,67,50,0.05)",
                position: "relative",
                cursor: "default",
              }}
            >
              {/* Bottom accent line */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: "16px",
                  right: "16px",
                  height: "3px",
                  background: `linear-gradient(90deg, transparent, ${r.accent}, transparent)`,
                  borderRadius: "0 0 24px 24px",
                  opacity: 0.3,
                  transition: "opacity 0.3s ease",
                }}
              />
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  background: r.accentBg,
                  borderRadius: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px",
                }}
              >
                {r.icon}
              </div>
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.15rem",
                  fontWeight: 700,
                  color: "#1A1A2E",
                  marginBottom: "12px",
                }}
              >
                {r.title}
              </h3>
              <p style={{ fontSize: "14px", lineHeight: 1.7, color: "#6B7280" }}>{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .reasons-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .counter-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .reasons-grid {
            grid-template-columns: 1fr !important;
          }
          .counter-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
