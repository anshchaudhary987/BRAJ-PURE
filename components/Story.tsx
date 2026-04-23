"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const timeline = [
  { step: "01", icon: "🐄", title: "Pasture Raised", desc: "Our Gir cows roam freely on 20+ acres of organic farmland in the Brij region." },
  { step: "02", icon: "🌅", title: "Dawn Milking", desc: "Hand-milked every morning at 4am following ancient Vedic traditions of care." },
  { step: "03", icon: "❄️", title: "Flash Chilled", desc: "Milk is chilled to 4°C within 2 hours to preserve freshness and nutrients." },
  { step: "04", icon: "🧪", title: "Quality Tested", desc: "Every batch is tested for purity, fat content & SNF before being approved." },
  { step: "05", icon: "📦", title: "Freshly Packed", desc: "Sealed in food-grade, eco-friendly glass bottles to retain natural goodness." },
  { step: "06", icon: "🏠", title: "Your Doorstep", desc: "Delivered by 7am — before you wake up. Fresh milk, every single morning." },
];

export default function Story() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="story"
      ref={ref}
      style={{
        padding: "100px 0",
        background: "linear-gradient(180deg, #FFF8E7 0%, #F0F7F0 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decorative circle */}
      <div
        style={{
          position: "absolute",
          top: "-100px",
          right: "-200px",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(27,67,50,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        {/* Top: Split Section */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "center",
            marginBottom: "100px",
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
            <div
              style={{
                borderRadius: "32px",
                overflow: "hidden",
                aspectRatio: "4/5",
                position: "relative",
                boxShadow: "0 40px 100px rgba(27,67,50,0.2)",
              }}
            >
              <Image
                src="/farm-cow.png"
                alt="Braj Pure farm — Gir cows grazing in Brij region"
                fill
                style={{ objectFit: "cover" }}
              />
              {/* Image overlay gradient */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(27,67,50,0.6) 0%, transparent 60%)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "28px",
                  left: "28px",
                  right: "28px",
                  color: "white",
                }}
              >
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.3rem", fontWeight: 700 }}>
                  Our Farm in Brij
                </div>
                <div style={{ fontSize: "13px", opacity: 0.75, marginTop: "4px" }}>
                  Mathura–Vrindavan belt, Uttar Pradesh
                </div>
              </div>
            </div>

            {/* Floating cert badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              style={{
                position: "absolute",
                top: "-20px",
                right: "-20px",
                background: "white",
                borderRadius: "20px",
                padding: "16px 20px",
                boxShadow: "0 8px 40px rgba(27,67,50,0.15)",
                border: "1px solid rgba(232,160,32,0.3)",
                textAlign: "center",
                minWidth: "110px",
              }}
            >
              <div style={{ fontSize: "28px" }}>🏆</div>
              <div style={{ fontSize: "11px", fontWeight: 800, color: "#1B4332", marginTop: "4px" }}>
                FSSAI Certified
              </div>
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="section-tag">🐄 Our Story</span>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                fontWeight: 800,
                color: "#1A1A2E",
                lineHeight: 1.2,
                marginBottom: "20px",
              }}
            >
              Born from the sacred
              <span className="gradient-text-gold"> land of Brij</span>
            </h2>
            <div className="divider-gold" />
            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.85,
                color: "#6B7280",
                marginBottom: "20px",
                marginTop: "20px",
              }}
            >
              Braj Pure was born from a simple belief — that the families of Mathura,
              Vrindavan and Agra deserve milk that is as pure as the holy land itself.
              We are farmers first, and businessmen second.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.85, color: "#6B7280", marginBottom: "32px" }}>
              Our Gir cows have been with our family for generations, raised with love,
              fed only organic grass and fodder, and never given synthetic hormones. This
              is not just milk — it is a legacy of purity.
            </p>

            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              {[
                { icon: "🌿", label: "Organic Feed" },
                { icon: "💉", label: "No Hormones" },
                { icon: "🏡", label: "Free Range" },
                { icon: "🧪", label: "Lab Tested" },
              ].map((badge) => (
                <div
                  key={badge.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "8px 16px",
                    background: "rgba(27,67,50,0.07)",
                    borderRadius: "999px",
                    fontSize: "13px",
                    fontWeight: 700,
                    color: "#1B4332",
                    border: "1px solid rgba(27,67,50,0.12)",
                  }}
                >
                  {badge.icon} {badge.label}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Timeline: Cow to Doorstep */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
              fontWeight: 800,
              color: "#1A1A2E",
              marginBottom: "12px",
            }}
          >
            From 🐄 Cow to 🏠 Your Door
          </motion.h2>
          <p style={{ color: "#6B7280", fontSize: "15px" }}>
            Every step is handled with care, tradition & science
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gap: "16px",
            position: "relative",
          }}
          className="timeline-grid"
        >
          {/* Connecting line */}
          <div
            style={{
              position: "absolute",
              top: "40px",
              left: "8%",
              right: "8%",
              height: "2px",
              background: "linear-gradient(90deg, #1B4332, #E8A020, #1B4332)",
              zIndex: 0,
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
              <div
                style={{
                  width: "72px",
                  height: "72px",
                  borderRadius: "50%",
                  background: i % 2 === 0 ? "#1B4332" : "white",
                  border: "3px solid",
                  borderColor: i % 2 === 0 ? "#1B4332" : "#E8A020",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "28px",
                  marginBottom: "16px",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                  flexShrink: 0,
                }}
              >
                {item.icon}
              </div>
              <div
                style={{
                  fontSize: "10px",
                  fontWeight: 800,
                  letterSpacing: "2px",
                  color: "#E8A020",
                  marginBottom: "6px",
                }}
              >
                STEP {item.step}
              </div>
              <div
                style={{
                  fontWeight: 700,
                  fontSize: "13px",
                  color: "#1A1A2E",
                  marginBottom: "8px",
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                {item.title}
              </div>
              <div style={{ fontSize: "12px", color: "#6B7280", lineHeight: 1.6 }}>
                {item.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .story-grid {
            grid-template-columns: 1fr !important;
          }
          .timeline-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
          .timeline-line {
            display: none !important;
          }
        }
        @media (max-width: 600px) {
          .timeline-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
