"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: "a2-500",
    name: "A2 Desi Cow Milk",
    size: "500 ml",
    price: 50,
    priceLabel: "₹50 / day",
    badge: "Most Popular",
    badgeGradient: "linear-gradient(135deg, #D4A017, #F5CC55)",
    badgeTextColor: "#0A0A0A",
    desc: "Perfect for 1–2 people. Our signature A2 milk from purebred Gir cows. Rich, creamy and naturally sweet.",
    features: ["500ml daily delivery", "Pure A2 protein", "Zero additives", "Fresh by 7am"],
    image: "/hero-milk.png",
    accentColor: "#D4A017",
    bg: "linear-gradient(135deg, rgba(212,160,23,0.08), rgba(212,160,23,0.02))",
  },
  {
    id: "a2-1l",
    name: "A2 Desi Cow Milk",
    size: "1 Litre",
    price: 100,
    priceLabel: "₹100 / day",
    badge: "Family Pack",
    badgeGradient: "linear-gradient(135deg, #1B4332, #40916C)",
    badgeTextColor: "#F0ECD8",
    desc: "Ideal for families of 3–5. Double the goodness, double the nutrition. Same purity, bigger bottle.",
    features: ["1 Litre daily delivery", "Pure A2 protein", "Zero additives", "Fresh by 7am"],
    image: "/milk-pour.png",
    accentColor: "#40916C",
    bg: "linear-gradient(135deg, rgba(64,145,108,0.08), rgba(64,145,108,0.02))",
  },
];

export default function Products() {
  const ref     = useRef(null);
  const inView  = useInView(ref, { once: true, margin: "-100px" });
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section
      id="products"
      ref={ref}
      style={{
        padding: "120px 0 100px",
        background: "linear-gradient(180deg, #060A06 0%, #08100A 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Dot grid pattern */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `radial-gradient(rgba(212,160,23,0.06) 1px, transparent 1px)`,
        backgroundSize: "40px 40px",
        pointerEvents: "none",
      }} />

      {/* Glow orbs */}
      <div style={{ position: "absolute", top: "20%", left: "10%", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(212,160,23,0.04) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "10%", right: "10%", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, rgba(27,67,50,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 32px", position: "relative" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}>
            <span className="section-tag">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#D4A017" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
              </svg>
              Our Products
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
            Fresh milk,{" "}
            <span className="gradient-text-gold">every morning</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            style={{ fontSize: "16px", color: "rgba(240,236,216,0.4)", maxWidth: "500px", margin: "0 auto" }}
          >
            Choose your size. We&apos;ll handle the rest — milked fresh, delivered pure.
          </motion.p>
        </div>

        {/* Product cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "32px",
            maxWidth: "920px",
            margin: "0 auto",
          }}
          className="products-grid"
        >
          {products.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 + 0.2, duration: 0.7 }}
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: "linear-gradient(145deg, #182018, #131F13)",
                borderRadius: "26px",
                overflow: "hidden",
                border: hovered === p.id
                  ? `1px solid ${p.accentColor}50`
                  : "1px solid rgba(255,255,255,0.06)",
                boxShadow: hovered === p.id
                  ? `0 32px 80px rgba(0,0,0,0.5), 0 0 40px ${p.accentColor}20`
                  : "0 8px 40px rgba(0,0,0,0.4)",
                transform: `translateY(${hovered === p.id ? "-8px" : "0"})`,
                transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                cursor: "pointer",
              }}
            >
              {/* Image area */}
              <div style={{
                height: "240px",
                position: "relative",
                background: p.bg,
                overflow: "hidden",
              }}>
                {/* Badge */}
                <div style={{
                  position: "absolute",
                  top: "18px", left: "18px",
                  background: p.badgeGradient,
                  color: p.badgeTextColor,
                  padding: "6px 16px",
                  borderRadius: "999px",
                  fontSize: "11px",
                  fontWeight: 800,
                  letterSpacing: "0.5px",
                  zIndex: 2,
                  boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
                }}>
                  {p.badge}
                </div>

                <motion.div
                  animate={{ y: hovered === p.id ? [0, -8, 0] : 0 }}
                  transition={{ duration: 2.5, repeat: hovered === p.id ? Infinity : 0, ease: "easeInOut" }}
                  style={{ position: "relative", width: "100%", height: "100%" }}
                >
                  <Image
                    src={p.image}
                    alt={`Braj Pure ${p.name} ${p.size}`}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </motion.div>

                {/* Bottom fade */}
                <div style={{
                  position: "absolute", bottom: 0, left: 0, right: 0, height: "60px",
                  background: "linear-gradient(to top, #182018, transparent)",
                }} />
              </div>

              {/* Content */}
              <div style={{ padding: "28px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "14px" }}>
                  <div>
                    <div style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1.25rem",
                      fontWeight: 800,
                      color: "#F0ECD8",
                    }}>
                      {p.name}
                    </div>
                    <div style={{ fontSize: "12px", color: "rgba(240,236,216,0.4)", fontWeight: 600, marginTop: "2px" }}>
                      {p.size} Pack
                    </div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{
                      fontFamily: "'Cinzel', serif",
                      fontSize: "1.8rem",
                      fontWeight: 900,
                      color: p.accentColor,
                      lineHeight: 1,
                    }}>
                      ₹{p.price}
                    </div>
                    <div style={{ fontSize: "10px", color: "rgba(240,236,216,0.35)", marginTop: "2px" }}>per day</div>
                  </div>
                </div>

                <p style={{ fontSize: "13.5px", color: "rgba(240,236,216,0.45)", lineHeight: 1.75, marginBottom: "20px" }}>
                  {p.desc}
                </p>

                {/* Features */}
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "24px" }}>
                  {p.features.map((f) => (
                    <div key={f} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "13px", color: "rgba(240,236,216,0.6)" }}>
                      <div style={{
                        width: "18px", height: "18px",
                        borderRadius: "50%",
                        background: `linear-gradient(135deg, ${p.accentColor}20, ${p.accentColor}10)`,
                        border: `1px solid ${p.accentColor}40`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        flexShrink: 0,
                      }}>
                        <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke={p.accentColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                      </div>
                      <span style={{ fontWeight: 500 }}>{f}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/order"
                  style={{
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    padding: "13px 24px",
                    background: hovered === p.id
                      ? p.accentColor === "#D4A017"
                        ? "linear-gradient(135deg, #7A5C10, #D4A017, #F5CC55)"
                        : "linear-gradient(135deg, #1B4332, #40916C)"
                      : "rgba(255,255,255,0.04)",
                    color: hovered === p.id ? (p.accentColor === "#D4A017" ? "#0A0A0A" : "#F0ECD8") : "rgba(240,236,216,0.6)",
                    borderRadius: "999px",
                    fontWeight: 700,
                    fontSize: "14px",
                    border: `1px solid ${p.accentColor}30`,
                    transition: "all 0.4s ease",
                    width: "100%",
                  }}
                >
                  Subscribe — {p.priceLabel}
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Free trial banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          style={{
            marginTop: "52px",
            maxWidth: "920px",
            margin: "52px auto 0",
            background: "linear-gradient(135deg, #0D2B1D 0%, #182018 50%, #1A1000 100%)",
            borderRadius: "24px",
            padding: "38px 44px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "28px",
            flexWrap: "wrap",
            position: "relative",
            overflow: "hidden",
            border: "1px solid rgba(212,160,23,0.2)",
            boxShadow: "0 20px 80px rgba(0,0,0,0.4)",
          }}
        >
          <div style={{ position: "absolute", top: "-40px", right: "-40px", width: "200px", height: "200px", borderRadius: "50%", background: "radial-gradient(circle, rgba(212,160,23,0.12), transparent)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", bottom: "-30px", left: "-30px", width: "180px", height: "180px", borderRadius: "50%", background: "radial-gradient(circle, rgba(64,145,108,0.08), transparent)", pointerEvents: "none" }} />

          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)",
              fontWeight: 800,
              color: "#F0ECD8",
              marginBottom: "8px",
              display: "flex", alignItems: "center", gap: "12px",
            }}>
              <span style={{ fontSize: "1.5rem" }}>🎁</span>
              Try 3 Days Free — No Payment Needed
            </div>
            <div style={{ fontSize: "14px", color: "rgba(240,236,216,0.45)" }}>
              Start your free trial today. Cancel anytime, no questions asked.
            </div>
          </div>
          <Link href="/order" className="btn-gold" style={{ textDecoration: "none", whiteSpace: "nowrap", position: "relative", zIndex: 1 }}>
            <span>Start Free Trial</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .products-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
