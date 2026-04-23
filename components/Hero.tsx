"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

/* Subtle floating circles instead of emoji particles */
const floatingDots = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  size: Math.random() * 6 + 2,
  x: Math.random() * 100,
  y: Math.random() * 100,
  delay: Math.random() * 4,
  duration: Math.random() * 8 + 6,
  opacity: Math.random() * 0.15 + 0.05,
}));

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const orbs = Array.from({ length: 6 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 150 + 80,
      color: [
        "rgba(232,160,32,0.06)",
        "rgba(27,67,50,0.05)",
        "rgba(255,248,231,0.08)",
      ][Math.floor(Math.random() * 3)],
    }));

    let raf: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      orbs.forEach((orb) => {
        orb.x += orb.vx;
        orb.y += orb.vy;
        if (orb.x < -orb.r) orb.x = canvas.width + orb.r;
        if (orb.x > canvas.width + orb.r) orb.x = -orb.r;
        if (orb.y < -orb.r) orb.y = canvas.height + orb.r;
        if (orb.y > canvas.height + orb.r) orb.y = -orb.r;
        const grad = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.r);
        grad.addColorStop(0, orb.color);
        grad.addColorStop(1, "transparent");
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.r, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      });
      raf = requestAnimationFrame(animate);
    };
    animate();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0F2B1F 0%, #1B4332 35%, #2D6A4F 65%, #1a3a28 100%)",
        position: "relative",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* Animated canvas background */}
      <canvas
        ref={canvasRef}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 0 }}
      />

      {/* Radial glow accents */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          right: "5%",
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(232,160,32,0.12) 0%, transparent 70%)",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-10%",
          left: "-10%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(45,106,79,0.2) 0%, transparent 70%)",
          zIndex: 0,
        }}
      />

      {/* Subtle mandala watermark */}
      <div
        style={{
          position: "absolute",
          right: "-100px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "650px",
          height: "650px",
          opacity: 0.03,
          zIndex: 0,
          pointerEvents: "none",
          animation: "spin-slow 80s linear infinite",
        }}
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="#F5BC4A">
          {[95, 85, 75, 65, 55, 45, 35, 25].map((r, i) => (
            <circle key={r} cx="100" cy="100" r={r} fill="none" stroke="#F5BC4A" strokeWidth={i % 2 === 0 ? "0.6" : "0.3"} />
          ))}
          {Array.from({ length: 12 }, (_, i) => {
            const angle = (i * 30 * Math.PI) / 180;
            const x = 100 + 72 * Math.cos(angle);
            const y = 100 + 72 * Math.sin(angle);
            return <ellipse key={i} cx={x} cy={y} rx="5" ry="13" fill="#F5BC4A" transform={`rotate(${i * 30} ${x} ${y})`} />;
          })}
          <circle cx="100" cy="100" r="8" fill="#F5BC4A" />
          <circle cx="100" cy="100" r="4" fill="#1B4332" />
        </svg>
      </div>

      {/* Subtle floating dots */}
      {floatingDots.map((p) => (
        <motion.div
          key={p.id}
          style={{
            position: "absolute",
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            borderRadius: "50%",
            background: "rgba(245,188,74,0.5)",
            opacity: p.opacity,
            zIndex: 0,
            pointerEvents: "none",
          }}
          animate={{
            y: [0, -25, 0],
            opacity: [p.opacity, p.opacity * 2, p.opacity],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Content */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "140px 24px 100px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "64px",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
          width: "100%",
        }}
        className="hero-grid"
      >
        {/* Left: Text */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{ marginBottom: "20px" }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 18px",
                background: "rgba(232,160,32,0.15)",
                border: "1px solid rgba(232,160,32,0.3)",
                borderRadius: "999px",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "2.5px",
                textTransform: "uppercase",
                color: "#F5BC4A",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F5BC4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L12 22" /><path d="M17 8C8 10 5.9 16.17 3.82 21.34" /><path d="M20 5c-1.5 1.5-5 3-9 4s-7 2.5-8.5 4" />
              </svg>
              From Mathura &amp; Vrindavan
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(3rem, 6vw, 5.5rem)",
              fontWeight: 900,
              lineHeight: 1.05,
              color: "#FDFCFA",
              marginBottom: "8px",
            }}
          >
            Braj
            <span
              style={{
                display: "block",
                background: "linear-gradient(135deg, #E8A020, #F5BC4A, #D4A017)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Pure
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.1rem, 2vw, 1.5rem)",
              fontStyle: "italic",
              color: "rgba(253,252,250,0.75)",
              marginBottom: "12px",
            }}
          >
            A2 Desi Cow Milk — Pure. Natural. Powerful.
          </motion.p>

          {/* Sanskrit Sloka */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "24px",
            }}
          >
            <div style={{ width: "24px", height: "1px", background: "rgba(245,188,74,0.4)" }} />
            <span
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "13px",
                fontStyle: "italic",
                color: "rgba(245,188,74,0.7)",
                letterSpacing: "1px",
              }}
            >
              गावो विश्वस्य मातरः
            </span>
            <div style={{ width: "24px", height: "1px", background: "rgba(245,188,74,0.4)" }} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "rgba(253,252,250,0.6)",
              maxWidth: "480px",
              marginBottom: "40px",
            }}
          >
            Sourced from purebred Gir cows grazing in the sacred lands of Brij. No
            additives, no hormones, no compromise. Just milk the way nature intended —
            delivered fresh to your doorstep every morning.
          </motion.p>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.6 }}
            style={{
              display: "flex",
              gap: "40px",
              marginBottom: "40px",
              flexWrap: "wrap",
            }}
          >
            {[
              { label: "Additives", value: "0%" },
              { label: "Pure A2", value: "100%" },
              { label: "Daily Delivery", value: "✓" },
            ].map((s, i) => (
              <div key={s.label} style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                {i > 0 && (
                  <div style={{ width: "1px", height: "36px", background: "rgba(255,255,255,0.1)", marginRight: "-8px", marginLeft: "-24px" }} />
                )}
                <div>
                  <div
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "2rem",
                      fontWeight: 800,
                      color: "#F5BC4A",
                      lineHeight: 1,
                    }}
                  >
                    {s.value}
                  </div>
                  <div style={{ fontSize: "11px", color: "rgba(253,252,250,0.5)", fontWeight: 600, letterSpacing: "1.5px", marginTop: "4px", textTransform: "uppercase" }}>
                    {s.label}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "32px",
              maxWidth: "300px",
            }}
          >
            <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, transparent, rgba(232,160,32,0.4))" }} />
            <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#F5BC4A", opacity: 0.6 }} />
            <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, rgba(232,160,32,0.4), transparent)" }} />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.6 }}
            style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}
          >
            <a href="#order" className="btn-gold" style={{ textDecoration: "none" }}>
              <span>Start Free Trial</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
              </svg>
            </a>
            <a
              href="#why-a2"
              className="btn-outline"
              style={{ textDecoration: "none", color: "rgba(255,255,255,0.85)", borderColor: "rgba(255,255,255,0.3)" }}
            >
              <span>Learn More</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14" /><path d="m19 12-7 7-7-7" />
              </svg>
            </a>
          </motion.div>
        </div>

        {/* Right: Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, x: 60 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ display: "flex", justifyContent: "center", position: "relative" }}
        >
          {/* Glow ring */}
          <div
            style={{
              position: "absolute",
              inset: "-30px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(232,160,32,0.15) 0%, transparent 70%)",
              animation: "pulse-glow 4s ease-in-out infinite",
            }}
          />

          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "480px",
              aspectRatio: "1",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                overflow: "hidden",
                border: "2px solid rgba(232,160,32,0.25)",
                boxShadow:
                  "0 40px 120px rgba(0,0,0,0.4), 0 0 80px rgba(232,160,32,0.15), inset 0 0 60px rgba(0,0,0,0.1)",
              }}
            >
              <Image
                src="/hero-milk.png"
                alt="Braj Pure A2 Desi Cow Milk — fresh and natural"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>

            {/* Decorative ring around image */}
            <div
              style={{
                position: "absolute",
                inset: "-12px",
                borderRadius: "50%",
                border: "1px solid rgba(232,160,32,0.12)",
                pointerEvents: "none",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: "-24px",
                borderRadius: "50%",
                border: "1px solid rgba(232,160,32,0.06)",
                pointerEvents: "none",
              }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom wave — multi-layered */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 2,
        }}
      >
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: "block" }}>
          <path d="M0,60 C240,90 480,30 720,60 C960,90 1200,30 1440,60 L1440,100 L0,100 Z" fill="rgba(255,248,231,0.3)" />
          <path d="M0,70 C360,100 1080,40 1440,70 L1440,100 L0,100 Z" fill="rgba(255,248,231,0.5)" />
          <path d="M0,80 C360,95 1080,65 1440,80 L1440,100 L0,100 Z" fill="#FFF8E7" />
        </svg>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
}
