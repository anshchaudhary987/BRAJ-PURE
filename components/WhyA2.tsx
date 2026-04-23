"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const reasons = [
  {
    icon: "🧬",
    title: "A2 Beta-Casein Protein",
    desc: "Braj Pure milk contains only the A2 type of beta-casein protein — gentler on your gut, closer to human breast milk.",
    color: "#1B4332",
    bg: "rgba(27,67,50,0.06)",
  },
  {
    icon: "🏥",
    title: "Easier Digestion",
    desc: "No BCM-7 (the opioid peptide found in A1 milk). Reduces bloating, inflammation & digestive discomfort significantly.",
    color: "#C4831A",
    bg: "rgba(232,160,32,0.08)",
  },
  {
    icon: "💪",
    title: "Superior Nutrition",
    desc: "Rich in Omega-3, CLA, Vitamins A, D, B12 & calcium. Our Gir cows produce milk with a natural golden hue from carotene.",
    color: "#1B4332",
    bg: "rgba(27,67,50,0.06)",
  },
  {
    icon: "🌱",
    title: "Zero Additives",
    desc: "No preservatives, no antibiotics, no synthetic hormones. What you get is milk exactly as it comes from our cows — nothing more.",
    color: "#C4831A",
    bg: "rgba(232,160,32,0.08)",
  },
  {
    icon: "🐄",
    title: "Purebred Gir Cows",
    desc: "Our cows are free-range, grass-fed Gir breed — the original Desi cow of India. Treated with love, not chemicals.",
    color: "#1B4332",
    bg: "rgba(27,67,50,0.06)",
  },
  {
    icon: "📦",
    title: "Farm to Doorstep",
    desc: "Milked at dawn. Chilled within the hour. At your door by morning. The freshness you can taste in every sip.",
    color: "#C4831A",
    bg: "rgba(232,160,32,0.08)",
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
            <span className="section-tag">🌿 Why Choose A2?</span>
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
            background: "rgba(27,67,50,0.1)",
            borderRadius: "20px",
            overflow: "hidden",
            marginBottom: "60px",
          }}
          className="counter-grid"
        >
          {counterItems.map((c, i) => (
            <div
              key={c.label}
              style={{
                padding: "32px 24px",
                background: i % 2 === 0 ? "#FDFCFA" : "#F5EDD4",
                textAlign: "center",
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
                  marginBottom: "8px",
                }}
              >
                {c.value}
              </div>
              <div style={{ fontSize: "13px", color: "#6B7280", fontWeight: 600, letterSpacing: "0.5px" }}>
                {c.label}
              </div>
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
              className="card-tilt"
              style={{
                background: "white",
                borderRadius: "24px",
                padding: "32px",
                border: "1px solid rgba(27,67,50,0.08)",
                boxShadow: "0 4px 24px rgba(27,67,50,0.06)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Corner accent */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: "80px",
                  height: "80px",
                  background: r.bg,
                  borderRadius: "0 24px 0 80px",
                }}
              />
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  background: r.bg,
                  borderRadius: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "28px",
                  marginBottom: "20px",
                }}
              >
                {r.icon}
              </div>
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.2rem",
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
