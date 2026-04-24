"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const timeline = [
  { step: "01", title: "Pasture Raised", desc: "Our Gir cows roam freely on 20+ acres of organic farmland in the Brij region.", iconPath: "M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75" },
  { step: "02", title: "Dawn Milking",   desc: "Hand-milked every morning at 4am following ancient Vedic traditions of care.", iconPath: "M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" },
  { step: "03", title: "Flash Chilled",  desc: "Milk is chilled to 4°C within 2 hours to preserve freshness and nutrients.", iconPath: "M12 2a5 5 0 0 1 5 5c0 6-5 8-5 13M12 20h.01" },
  { step: "04", title: "Quality Tested", desc: "Every batch is tested for purity, fat content & SNF before being approved.", iconPath: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0 1 12 2.944a11.955 11.955 0 0 1-8.618 3.04A12.02 12.02 0 0 0 3 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
  { step: "05", title: "Freshly Packed", desc: "Sealed in eco-friendly food-grade packaging to retain natural goodness.", iconPath: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" },
  { step: "06", title: "Your Doorstep",  desc: "Delivered by 7am — before you wake up. Fresh milk, every single morning.", iconPath: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z M9 22V12h6v10" },
];

const badges = [
  { label: "Organic Feed",  iconPath: "M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66" },
  { label: "No Hormones",   iconPath: "M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636" },
  { label: "Free Range",    iconPath: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" },
  { label: "Lab Tested",    iconPath: "M9 3v2m6-2v2M9 19v2m6-2v2M3 9h2m14 0h2M3 15h2m14 0h2M9 9h6v6H9z" },
];

export default function Story() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="story"
      ref={ref}
      style={{
        padding: "120px 0 100px",
        background: "linear-gradient(180deg, #080E08 0%, #060A06 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decoration */}
      <div style={{ position: "absolute", top: "-150px", right: "-150px", width: "700px", height: "700px", borderRadius: "50%", background: "radial-gradient(circle, rgba(212,160,23,0.04) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-100px", left: "-100px", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, rgba(27,67,50,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: "1300px", margin: "0 auto", padding: "0 32px" }}>
        {/* Split section */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "center",
            marginBottom: "110px",
          }}
          className="story-grid"
        >
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ position: "relative" }}
          >
            <div style={{
              borderRadius: "28px",
              overflow: "hidden",
              aspectRatio: "4/5",
              position: "relative",
              boxShadow: "0 40px 100px rgba(0,0,0,0.6), 0 0 0 1px rgba(212,160,23,0.12)",
            }}>
              <Image
                src="/farm-cow.png"
                alt="Braj Pure farm — Gir cows grazing in Brij region"
                fill
                style={{ objectFit: "cover" }}
              />
              {/* Overlay gradient */}
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to top, rgba(6,10,6,0.7) 0%, rgba(6,10,6,0.1) 50%, transparent 100%)",
              }} />
              <div style={{ position: "absolute", bottom: "28px", left: "28px", right: "28px", color: "#F0ECD8" }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem", fontWeight: 700 }}>Our Farm in Brij</div>
                <div style={{ fontSize: "12px", opacity: 0.55, marginTop: "4px" }}>Mathura–Vrindavan belt, Uttar Pradesh</div>
              </div>
            </div>

            {/* Floating cert badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              style={{
                position: "absolute",
                top: "-18px",
                right: "-18px",
                background: "linear-gradient(145deg, #0E1A0E, #131F13)",
                borderRadius: "18px",
                padding: "16px 20px",
                boxShadow: "0 12px 48px rgba(0,0,0,0.5), 0 0 0 1px rgba(212,160,23,0.2)",
                textAlign: "center",
                minWidth: "110px",
              }}
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#D4A017" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ margin: "0 auto 6px" }}>
                <circle cx="12" cy="8" r="6" /><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
              </svg>
              <div style={{ fontSize: "10px", fontWeight: 800, color: "#D4A017", letterSpacing: "1px", textTransform: "uppercase" }}>FSSAI Certified</div>
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="section-tag">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#D4A017" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
              </svg>
              Our Story
            </span>

            <h2 style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              fontWeight: 800,
              color: "#F0ECD8",
              lineHeight: 1.15,
              marginBottom: "22px",
              letterSpacing: "-0.3px",
            }}>
              Born from the sacred{" "}
              <span className="gradient-text-gold">land of Brij</span>
            </h2>

            <div className="divider-gold" />

            <p style={{ fontSize: "16px", lineHeight: 1.85, color: "rgba(240,236,216,0.5)", marginBottom: "18px", marginTop: "22px" }}>
              Braj Pure was born from a simple belief — that the families of Mathura,
              Vrindavan and Agra deserve milk that is as pure as the holy land itself.
              We are farmers first, and businessmen second.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.85, color: "rgba(240,236,216,0.5)", marginBottom: "36px" }}>
              Our Gir cows have been with our family for generations, raised with love,
              fed only organic grass and fodder, and never given synthetic hormones. This
              is not just milk — it is a legacy of purity.
            </p>

            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {badges.map((badge) => (
                <div
                  key={badge.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "8px 16px",
                    background: "rgba(212,160,23,0.07)",
                    borderRadius: "999px",
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "rgba(240,236,216,0.7)",
                    border: "1px solid rgba(212,160,23,0.15)",
                  }}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#D4A017" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={badge.iconPath} />
                  </svg>
                  {badge.label}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <div style={{ textAlign: "center", marginBottom: "52px" }}>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
              fontWeight: 800,
              color: "#F0ECD8",
              marginBottom: "12px",
              letterSpacing: "-0.3px",
            }}
          >
            From Farm to{" "}
            <span className="gradient-text-gold">Your Door</span>
          </motion.h2>
          <p style={{ color: "rgba(240,236,216,0.4)", fontSize: "15px" }}>
            Every step is handled with care, tradition &amp; science
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gap: "14px",
            position: "relative",
          }}
          className="timeline-grid"
        >
          {/* Connecting line */}
          <div
            style={{
              position: "absolute",
              top: "36px",
              left: "8%", right: "8%",
              height: "1px",
              background: "linear-gradient(90deg, transparent, #D4A017, #40916C, #D4A017, transparent)",
              zIndex: 0,
              opacity: 0.3,
            }}
            className="timeline-line"
          />

          {timeline.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i + 0.4, duration: 0.5 }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                position: "relative",
                zIndex: 1,
              }}
            >
              <div style={{
                width: "68px",
                height: "68px",
                borderRadius: "50%",
                background: i % 2 === 0
                  ? "linear-gradient(135deg, #1B4332, #0D2B1D)"
                  : "linear-gradient(135deg, #1A1000, #2A1A00)",
                border: `2px solid ${i % 2 === 0 ? "rgba(64,145,108,0.4)" : "rgba(212,160,23,0.4)"}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: "16px",
                boxShadow: `0 8px 30px ${i % 2 === 0 ? "rgba(27,67,50,0.4)" : "rgba(212,160,23,0.2)"}`,
                flexShrink: 0,
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={i % 2 === 0 ? "#40916C" : "#D4A017"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d={item.iconPath} />
                </svg>
              </div>
              <div style={{ fontSize: "9px", fontWeight: 800, letterSpacing: "2px", color: "rgba(212,160,23,0.5)", marginBottom: "6px", textTransform: "uppercase" }}>
                Step {item.step}
              </div>
              <div style={{ fontWeight: 700, fontSize: "12px", color: "#F0ECD8", marginBottom: "8px", fontFamily: "'Playfair Display', serif" }}>
                {item.title}
              </div>
              <div style={{ fontSize: "11px", color: "rgba(240,236,216,0.35)", lineHeight: 1.6 }}>
                {item.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .story-grid    { grid-template-columns: 1fr !important; }
          .timeline-grid { grid-template-columns: repeat(3, 1fr) !important; }
          .timeline-line { display: none !important; }
        }
        @media (max-width: 600px) {
          .timeline-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
