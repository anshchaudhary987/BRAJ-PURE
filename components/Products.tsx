"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const CheckIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
  </svg>
);

const products = [
  {
    id: "a2-500",
    name: "A2 Desi Cow Milk",
    size: "500ml",
    price: 50,
    priceLabel: "₹50 / day",
    badge: "Most Popular",
    badgeColor: "linear-gradient(135deg, #E8A020, #F5BC4A)",
    desc: "Perfect for 1–2 people. Our signature A2 milk from purebred Gir cows. Rich, creamy and naturally sweet.",
    features: ["500ml daily delivery", "Pure A2 protein", "Zero additives", "Fresh by 7am"],
    image: "/hero-milk.png",
    bg: "linear-gradient(135deg, rgba(27,67,50,0.06), rgba(27,67,50,0.02))",
  },
  {
    id: "a2-1l",
    name: "A2 Desi Cow Milk",
    size: "1 Litre",
    price: 100,
    priceLabel: "₹100 / day",
    badge: "Family Pack",
    badgeColor: "linear-gradient(135deg, #1B4332, #2D6A4F)",
    desc: "Ideal for families of 3–5. Double the goodness, double the nutrition. Same purity, bigger bottle.",
    features: ["1 Litre daily delivery", "Pure A2 protein", "Zero additives", "Fresh by 7am"],
    image: "/milk-pour.png",
    bg: "linear-gradient(135deg, rgba(232,160,32,0.08), rgba(232,160,32,0.02))",
  },
];

export default function Products() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section
      id="products"
      ref={ref}
      style={{
        padding: "100px 0",
        background: "#FDFCFA",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* BG pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `radial-gradient(rgba(27,67,50,0.03) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", position: "relative" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "70px" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
          >
            <span className="section-tag">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
              </svg>
              Our Products
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
            Fresh milk,{" "}
            <span className="gradient-text-gold">every morning</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            style={{ fontSize: "16px", color: "#6B7280", maxWidth: "500px", margin: "0 auto" }}
          >
            Choose your size. We&apos;ll handle the rest — milked fresh, delivered pure.
          </motion.p>
        </div>

        {/* Product Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "32px",
            maxWidth: "900px",
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
                background: "white",
                borderRadius: "28px",
                overflow: "hidden",
                border: hovered === p.id ? "2px solid rgba(232,160,32,0.35)" : "2px solid rgba(27,67,50,0.06)",
                boxShadow:
                  hovered === p.id
                    ? "0 32px 80px rgba(27,67,50,0.15)"
                    : "0 8px 32px rgba(27,67,50,0.06)",
                transform: `translateY(${hovered === p.id ? "-8px" : "0"})`,
                transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                cursor: "pointer",
              }}
            >
              {/* Image area */}
              <div
                style={{
                  height: "240px",
                  position: "relative",
                  background: p.bg,
                  overflow: "hidden",
                }}
              >
                {/* Badge */}
                <div
                  style={{
                    position: "absolute",
                    top: "20px",
                    left: "20px",
                    background: p.badgeColor,
                    color: "white",
                    padding: "6px 16px",
                    borderRadius: "999px",
                    fontSize: "11px",
                    fontWeight: 800,
                    letterSpacing: "0.5px",
                    zIndex: 2,
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  }}
                >
                  {p.badge}
                </div>

                <motion.div
                  animate={{ y: hovered === p.id ? [0, -8, 0] : 0 }}
                  transition={{ duration: 2, repeat: hovered === p.id ? Infinity : 0, ease: "easeInOut" }}
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <Image
                    src={p.image}
                    alt={`Braj Pure ${p.name} ${p.size}`}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </motion.div>
              </div>

              {/* Content */}
              <div style={{ padding: "28px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
                  <div>
                    <div
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "1.3rem",
                        fontWeight: 800,
                        color: "#1A1A2E",
                      }}
                    >
                      {p.name}
                    </div>
                    <div
                      style={{
                        fontSize: "13px",
                        color: "#6B7280",
                        fontWeight: 600,
                        marginTop: "2px",
                      }}
                    >
                      {p.size} Pack
                    </div>
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "1.8rem",
                        fontWeight: 900,
                        background: "linear-gradient(135deg, #1B4332, #2D6A4F)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        lineHeight: 1,
                      }}
                    >
                      ₹{p.price}
                    </div>
                    <div style={{ fontSize: "11px", color: "#6B7280", textAlign: "right" }}>per day</div>
                  </div>
                </div>

                <p style={{ fontSize: "14px", color: "#6B7280", lineHeight: 1.7, marginBottom: "20px" }}>
                  {p.desc}
                </p>

                {/* Features */}
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "24px" }}>
                  {p.features.map((f) => (
                    <div key={f} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "13px", color: "#374151" }}>
                      <div
                        style={{
                          width: "20px",
                          height: "20px",
                          borderRadius: "50%",
                          background: "linear-gradient(135deg, #1B4332, #40916C)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <CheckIcon />
                      </div>
                      <span style={{ fontWeight: 500 }}>{f}</span>
                    </div>
                  ))}
                </div>

                <a href="#order" className="btn-primary" style={{ textDecoration: "none", width: "100%", justifyContent: "center" }}>
                  <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    Subscribe — {p.priceLabel}
                    <ArrowRight />
                  </span>
                </a>
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
            marginTop: "48px",
            maxWidth: "900px",
            margin: "48px auto 0",
            background: "linear-gradient(135deg, #1B4332, #2D6A4F)",
            borderRadius: "24px",
            padding: "36px 40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "24px",
            flexWrap: "wrap",
            position: "relative",
            overflow: "hidden",
            border: "1px solid rgba(232,160,32,0.2)",
          }}
        >
          {/* Background glow */}
          <div style={{
            position: "absolute",
            top: "-40px",
            right: "-40px",
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(232,160,32,0.2), transparent)",
            pointerEvents: "none",
          }} />

          <div style={{ position: "relative", zIndex: 1 }}>
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.5rem",
                fontWeight: 800,
                color: "#FFF8E7",
                marginBottom: "6px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F5BC4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4" /><path d="M4 6v12c0 1.1.9 2 2 2h14v-4" /><path d="M18 12a2 2 0 0 0-2 2c0 1.1.9 2 2 2h4v-4h-4z" />
              </svg>
              Try 3 Days Free — No Payment Needed
            </div>
            <div style={{ fontSize: "14px", color: "rgba(255,255,255,0.65)" }}>
              Start your free trial today. Cancel anytime, no questions asked.
            </div>
          </div>
          <a href="#order" className="btn-gold" style={{ textDecoration: "none", whiteSpace: "nowrap", position: "relative", zIndex: 1 }}>
            <span>Start Free Trial</span>
          </a>
        </motion.div>
      </div>

      <style jsx>{`
        @media (max-width: 700px) {
          .products-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
