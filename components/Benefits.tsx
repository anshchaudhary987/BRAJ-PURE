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
      "A2 milk's calcium is paired with Vitamin D and phosphorus in a natural ratio that maximizes absorption. Regular consumption significantly improves bone density and reduces risk of osteoporosis — especially critical for growing children and elderly.",
    accent: "#1B4332",
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
    accent: "#C4831A",
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
    accent: "#1B4332",
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
    accent: "#C4831A",
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
    accent: "#1B4332",
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
    accent: "#C4831A",
  },
];

export default function Benefits() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section
      id="benefits"
      ref={ref}
      style={{
        padding: "100px 0",
        background: "linear-gradient(180deg, #F0F7F0 0%, #FFF8E7 100%)",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "70px" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}>
            <span className="section-tag">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
              Health Benefits
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
            What Braj Pure does
            <span className="gradient-text-gold"> for your body</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            style={{ fontSize: "16px", color: "#6B7280", maxWidth: "520px", margin: "0 auto" }}
          >
            Science-backed benefits of A2 milk for health-conscious individuals and families.
          </motion.p>
        </div>

        {/* Interactive Benefits */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "48px",
            alignItems: "start",
          }}
          className="benefits-layout"
        >
          {/* Left: Accordion list */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.08 + 0.2, duration: 0.5 }}
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                style={{
                  background: activeIndex === i ? "white" : "rgba(255,255,255,0.5)",
                  borderRadius: "20px",
                  border: activeIndex === i ? "1px solid rgba(232,160,32,0.3)" : "1px solid transparent",
                  overflow: "hidden",
                  cursor: "pointer",
                  boxShadow: activeIndex === i ? "0 8px 40px rgba(27,67,50,0.1)" : "none",
                  transition: "all 0.3s ease",
                  position: "relative",
                }}
              >
                {/* Left accent bar */}
                {activeIndex === i && (
                  <div
                    style={{
                      position: "absolute",
                      left: 0,
                      top: "12px",
                      bottom: "12px",
                      width: "3px",
                      background: b.accent === "#1B4332"
                        ? "linear-gradient(180deg, #1B4332, #40916C)"
                        : "linear-gradient(180deg, #C4831A, #F5BC4A)",
                      borderRadius: "0 3px 3px 0",
                    }}
                  />
                )}

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    padding: "20px 24px",
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "14px",
                      background: activeIndex === i
                        ? (b.accent === "#1B4332" ? "rgba(27,67,50,0.1)" : "rgba(232,160,32,0.1)")
                        : "rgba(27,67,50,0.04)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      transition: "background 0.3s ease",
                      color: b.accent,
                    }}
                  >
                    {b.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontWeight: 700,
                        fontSize: "1rem",
                        color: "#1A1A2E",
                        marginBottom: "2px",
                      }}
                    >
                      {b.title}
                    </div>
                    <div style={{ fontSize: "12px", color: "#6B7280", fontWeight: 500 }}>{b.short}</div>
                  </div>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={b.accent}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                      transition: "transform 0.3s ease",
                      transform: activeIndex === i ? "rotate(180deg)" : "rotate(0deg)",
                      flexShrink: 0,
                    }}
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </div>

                <AnimatePresence>
                  {activeIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      style={{ overflow: "hidden" }}
                    >
                      <div
                        style={{
                          padding: "0 24px 20px 88px",
                          fontSize: "14px",
                          lineHeight: 1.75,
                          color: "#4B5563",
                        }}
                      >
                        {b.detail}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Right: Visual panel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
            style={{ position: "sticky", top: "100px" }}
          >
            <div
              style={{
                background: "linear-gradient(135deg, #1B4332 0%, #2D6A4F 100%)",
                borderRadius: "32px",
                padding: "48px 40px",
                color: "white",
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Decorative circles */}
              <div
                style={{
                  position: "absolute",
                  top: "-60px",
                  right: "-60px",
                  width: "200px",
                  height: "200px",
                  borderRadius: "50%",
                  background: "rgba(232,160,32,0.12)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "-40px",
                  left: "-40px",
                  width: "150px",
                  height: "150px",
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.04)",
                }}
              />

              <AnimatePresence mode="wait">
                {activeIndex !== null && (
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.35 }}
                    style={{ position: "relative", zIndex: 1 }}
                  >
                    <div
                      style={{
                        width: "72px",
                        height: "72px",
                        borderRadius: "20px",
                        background: "rgba(255,255,255,0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto 20px",
                        color: "#F5BC4A",
                      }}
                    >
                      <div style={{ transform: "scale(1.8)" }}>
                        {benefits[activeIndex].icon}
                      </div>
                    </div>
                    <h3
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "1.6rem",
                        fontWeight: 800,
                        marginBottom: "16px",
                        color: "#FFF8E7",
                      }}
                    >
                      {benefits[activeIndex].title}
                    </h3>
                    <p style={{ fontSize: "15px", lineHeight: 1.75, color: "rgba(255,255,255,0.7)" }}>
                      {benefits[activeIndex].detail}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Divider */}
              <div
                style={{
                  borderTop: "1px solid rgba(255,255,255,0.1)",
                  margin: "32px 0",
                  position: "relative",
                  zIndex: 1,
                }}
              />

              {/* Nutrition facts */}
              <div style={{ position: "relative", zIndex: 1 }}>
                <div
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "2px",
                    color: "#F5BC4A",
                    marginBottom: "16px",
                  }}
                >
                  PER 250ML SERVING
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "12px",
                  }}
                >
                  {[
                    { label: "Protein", val: "8g" },
                    { label: "Calcium", val: "290mg" },
                    { label: "Fat", val: "8g" },
                    { label: "Vitamin D", val: "2.5µg" },
                  ].map((n) => (
                    <div
                      key={n.label}
                      style={{
                        background: "rgba(255,255,255,0.08)",
                        borderRadius: "14px",
                        padding: "14px",
                        backdropFilter: "blur(8px)",
                        border: "1px solid rgba(255,255,255,0.06)",
                      }}
                    >
                      <div
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          fontSize: "1.4rem",
                          fontWeight: 800,
                          color: "#F5BC4A",
                        }}
                      >
                        {n.val}
                      </div>
                      <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.55)", marginTop: "4px" }}>
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

      <style jsx>{`
        @media (max-width: 900px) {
          .benefits-layout {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
