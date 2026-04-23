"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const products = [
  {
    id: "a2-500",
    name: "A2 Desi Cow Milk",
    size: "500ml",
    price: 50,
    priceLabel: "₹50 / day",
    badge: "Most Popular",
    badgeColor: "#E8A020",
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
    badgeColor: "#1B4332",
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
  const [tilt, setTilt] = useState<{ [key: string]: { x: number; y: number } }>({});

  const handleMouseMove = (e: React.MouseEvent, id: string) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 12;
    setTilt((prev) => ({ ...prev, [id]: { x, y } }));
  };

  const handleMouseLeave = (id: string) => {
    setHovered(null);
    setTilt((prev) => ({ ...prev, [id]: { x: 0, y: 0 } }));
  };

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
          backgroundImage: `radial-gradient(rgba(27,67,50,0.04) 1px, transparent 1px)`,
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
            <span className="section-tag">🥛 Our Products</span>
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
              onMouseMove={(e) => handleMouseMove(e, p.id)}
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => handleMouseLeave(p.id)}
              style={{
                background: "white",
                borderRadius: "32px",
                overflow: "hidden",
                border: hovered === p.id ? "2px solid rgba(232,160,32,0.4)" : "2px solid rgba(27,67,50,0.08)",
                boxShadow:
                  hovered === p.id
                    ? "0 32px 80px rgba(27,67,50,0.15)"
                    : "0 8px 32px rgba(27,67,50,0.07)",
                transform: `perspective(1000px) rotateX(${-(tilt[p.id]?.y || 0)}deg) rotateY(${tilt[p.id]?.x || 0}deg) translateY(${hovered === p.id ? "-8px" : "0"})`,
                transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
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
                    padding: "6px 14px",
                    borderRadius: "999px",
                    fontSize: "11px",
                    fontWeight: 800,
                    letterSpacing: "0.5px",
                    zIndex: 2,
                  }}
                >
                  {p.badge}
                </div>

                <motion.div
                  animate={{ y: hovered === p.id ? [0, -12, 0] : 0 }}
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
                        color: "#1B4332",
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
                    <div key={f} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "#374151" }}>
                      <div
                        style={{
                          width: "18px",
                          height: "18px",
                          borderRadius: "50%",
                          background: "linear-gradient(135deg, #1B4332, #40916C)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          fontSize: "9px",
                          color: "white",
                          fontWeight: 800,
                        }}
                      >
                        ✓
                      </div>
                      <span style={{ fontWeight: 500 }}>{f}</span>
                    </div>
                  ))}
                </div>

                <a href="#order" className="btn-primary" style={{ textDecoration: "none", width: "100%", justifyContent: "center" }}>
                  <span>Subscribe — {p.priceLabel}</span>
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
            padding: "32px 40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "24px",
            flexWrap: "wrap",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.5rem",
                fontWeight: 800,
                color: "#FFF8E7",
                marginBottom: "6px",
              }}
            >
              🎁 Try 3 Days Free — No Payment Needed
            </div>
            <div style={{ fontSize: "14px", color: "rgba(255,255,255,0.7)" }}>
              Start your free trial today. Cancel anytime, no questions asked.
            </div>
          </div>
          <a href="#order" className="btn-gold" style={{ textDecoration: "none", whiteSpace: "nowrap" }}>
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
