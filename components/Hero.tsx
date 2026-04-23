"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const floatingParticles = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  size: Math.random() * 8 + 4,
  x: Math.random() * 100,
  y: Math.random() * 100,
  delay: Math.random() * 4,
  duration: Math.random() * 6 + 5,
  emoji: ["🌿", "⭐", "✨", "🌾", "💧", "🐄"][Math.floor(Math.random() * 6)],
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

    // Floating orbs
    const orbs = Array.from({ length: 8 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      r: Math.random() * 120 + 60,
      color: ["rgba(232,160,32,0.08)", "rgba(27,67,50,0.06)", "rgba(255,248,231,0.12)"][Math.floor(Math.random() * 3)],
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
        background: "linear-gradient(135deg, #1B4332 0%, #2D6A4F 40%, #1a3a28 100%)",
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

      {/* Radial glow */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          right: "10%",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(232,160,32,0.15) 0%, transparent 70%)",
          zIndex: 0,
          animation: "float-slow 8s ease-in-out infinite",
        }}
      />

      {/* ── Traditional Mandala watermark (background art) ── */}
      <div
        style={{
          position: "absolute",
          right: "-80px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "700px",
          height: "700px",
          opacity: 0.04,
          zIndex: 0,
          pointerEvents: "none",
          animation: "spin-slow 60s linear infinite",
        }}
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="#F5BC4A">
          {/* Mandala rings */}
          {[95,85,75,65,55,45,35,25].map((r, i) => (
            <circle key={r} cx="100" cy="100" r={r} fill="none" stroke="#F5BC4A" strokeWidth={i % 2 === 0 ? "0.8" : "0.4"} />
          ))}
          {/* Petal rings */}
          {Array.from({length: 12}, (_, i) => {
            const angle = (i * 30 * Math.PI) / 180;
            const x = 100 + 72 * Math.cos(angle);
            const y = 100 + 72 * Math.sin(angle);
            return <ellipse key={i} cx={x} cy={y} rx="6" ry="14" fill="#F5BC4A" transform={`rotate(${i*30} ${x} ${y})`} />;
          })}
          {Array.from({length: 8}, (_, i) => {
            const angle = (i * 45 * Math.PI) / 180;
            const x = 100 + 50 * Math.cos(angle);
            const y = 100 + 50 * Math.sin(angle);
            return <ellipse key={i} cx={x} cy={y} rx="5" ry="12" fill="#F5BC4A" transform={`rotate(${i*45} ${x} ${y})`} />;
          })}
          {/* Center lotus */}
          {Array.from({length: 6}, (_, i) => {
            const angle = (i * 60 * Math.PI) / 180;
            const x = 100 + 25 * Math.cos(angle);
            const y = 100 + 25 * Math.sin(angle);
            return <ellipse key={i} cx={x} cy={y} rx="4" ry="10" fill="#E8A020" transform={`rotate(${i*60} ${x} ${y})`} />;
          })}
          <circle cx="100" cy="100" r="8" fill="#F5BC4A" />
          <circle cx="100" cy="100" r="4" fill="#1B4332" />
          {/* Diagonal lines */}
          {Array.from({length: 12}, (_, i) => {
            const angle = i * 30;
            return <line key={i} x1="100" y1="100" x2={100 + 90 * Math.cos(angle * Math.PI / 180)} y2={100 + 90 * Math.sin(angle * Math.PI / 180)} stroke="#F5BC4A" strokeWidth="0.3" />;
          })}
        </svg>
      </div>

      {/* ── Traditional border strip across top of hero ── */}
      <div
        style={{
          position: "absolute",
          top: "70px",
          left: 0,
          right: 0,
          zIndex: 2,
          pointerEvents: "none",
        }}
      >
        <svg width="100%" height="12" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <defs>
            <pattern id="hero-border" x="0" y="0" width="32" height="12" patternUnits="userSpaceOnUse">
              <polygon points="16,1 20,6 16,11 12,6" fill="rgba(232,160,32,0.5)" />
              <circle cx="0" cy="6" r="1.5" fill="rgba(232,160,32,0.3)" />
              <circle cx="32" cy="6" r="1.5" fill="rgba(232,160,32,0.3)" />
              <line x1="0" y1="6" x2="10" y2="6" stroke="rgba(232,160,32,0.2)" strokeWidth="0.5" />
              <line x1="22" y1="6" x2="32" y2="6" stroke="rgba(232,160,32,0.2)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="12" fill="url(#hero-border)" />
        </svg>
      </div>

      {/* Floating emoji particles */}
      {floatingParticles.map((p) => (
        <motion.div
          key={p.id}
          style={{
            position: "absolute",
            left: `${p.x}%`,
            top: `${p.y}%`,
            fontSize: `${p.size + 10}px`,
            opacity: 0.25,
            zIndex: 0,
            pointerEvents: "none",
          }}
          animate={{ y: [0, -30, 0], rotate: [0, 10, -10, 0] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
        >
          {p.emoji}
        </motion.div>
      ))}

      {/* Spinning badge */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{
          position: "absolute",
          top: "15%",
          left: "5%",
          width: "100px",
          height: "100px",
          zIndex: 2,
        }}
        className="hidden-sm"
      >
        <svg viewBox="0 0 100 100" width="100" height="100">
          <path id="circle-text" d="M 50 50 m -37 0 a 37 37 0 1 1 74 0 a 37 37 0 1 1 -74 0" fill="none" />
          <text fontSize="11" fill="rgba(255,248,231,0.7)" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="700" letterSpacing="4">
            <textPath href="#circle-text">🐄 A2 DESI COW MILK • PURE & NATURAL •</textPath>
          </text>
        </svg>
      </motion.div>

      {/* Content */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "120px 24px 80px",
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
            style={{ marginBottom: "16px" }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 16px",
                background: "rgba(232,160,32,0.2)",
                border: "1px solid rgba(232,160,32,0.4)",
                borderRadius: "999px",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "2.5px",
                textTransform: "uppercase",
                color: "#F5BC4A",
              }}
            >
              🌿 From Mathura &amp; Vrindavan
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

          {/* ── Sanskrit Sloka ── */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "20px",
            }}
          >
            <span style={{ color: "rgba(245,188,74,0.4)", fontSize: "12px" }}>◆◆◆</span>
            <span
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "13px",
                fontStyle: "italic",
                color: "rgba(245,188,74,0.75)",
                letterSpacing: "1px",
              }}
            >
              गावो विश्वस्य मातरः
            </span>
            <span style={{ color: "rgba(245,188,74,0.4)", fontSize: "12px" }}>◆◆◆</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            style={{
              fontSize: "16px",
              lineHeight: 1.75,
              color: "rgba(253,252,250,0.65)",
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
              gap: "32px",
              marginBottom: "40px",
              flexWrap: "wrap",
            }}
          >
            {[
              { label: "Additives", value: "0%" },
              { label: "Pure A2", value: "100%" },
              { label: "Daily Delivery", value: "✓" },
            ].map((s) => (
              <div key={s.label}>
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
                <div style={{ fontSize: "12px", color: "rgba(253,252,250,0.55)", fontWeight: 600, letterSpacing: "1px", marginTop: "4px" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* ── Traditional divider ── */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "28px",
            }}
          >
            <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, transparent, rgba(232,160,32,0.5))" }} />
            <span style={{ color: "#F5BC4A", fontSize: "14px" }}>✦ ॐ ✦</span>
            <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, rgba(232,160,32,0.5), transparent)" }} />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.6 }}
            style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}
          >
            <a href="#order" className="btn-gold" style={{ textDecoration: "none" }}>
              <span>🥛 Start Free Trial</span>
            </a>
            <a href="#why-a2" className="btn-outline" style={{ textDecoration: "none", color: "white", borderColor: "rgba(255,255,255,0.4)" }}>
              <span>Learn More ↓</span>
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
              inset: "-20px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(232,160,32,0.2) 0%, transparent 70%)",
              animation: "pulse-glow 3s ease-in-out infinite",
            }}
          />

          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "500px",
              aspectRatio: "1",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                overflow: "hidden",
                border: "3px solid rgba(232,160,32,0.3)",
                boxShadow: "0 40px 120px rgba(0,0,0,0.4), 0 0 60px rgba(232,160,32,0.2)",
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

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0], rotate: [-2, 2, -2] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              style={{
                position: "absolute",
                bottom: "10%",
                left: "-15%",
                background: "rgba(255,248,231,0.95)",
                borderRadius: "16px",
                padding: "12px 18px",
                boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
                border: "1px solid rgba(232,160,32,0.3)",
              }}
            >
              <div style={{ fontSize: "20px", marginBottom: "2px" }}>🌿</div>
              <div style={{ fontSize: "12px", fontWeight: 800, color: "#1B4332" }}>100% Natural</div>
              <div style={{ fontSize: "10px", color: "#6B7280" }}>No Preservatives</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0], rotate: [2, -2, 2] }}
              transition={{ duration: 4, delay: 1, repeat: Infinity, ease: "easeInOut" }}
              style={{
                position: "absolute",
                top: "10%",
                right: "-10%",
                background: "rgba(27,67,50,0.95)",
                borderRadius: "16px",
                padding: "12px 18px",
                boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
                border: "1px solid rgba(232,160,32,0.3)",
              }}
            >
              <div style={{ fontSize: "20px", marginBottom: "2px" }}>🐄</div>
              <div style={{ fontSize: "12px", fontWeight: 800, color: "#F5BC4A" }}>Gir Cow</div>
              <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.6)" }}>Purebred A2</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 2,
        }}
      >
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: "block" }}>
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#FFF8E7" />
        </svg>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .hidden-sm {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
