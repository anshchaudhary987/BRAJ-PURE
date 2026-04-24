"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

/* ─── Floating particles ─── */
const particles = Array.from({ length: 22 }, (_, i) => ({
  id: i,
  size: Math.random() * 3 + 1,
  x: Math.random() * 100,
  y: Math.random() * 100,
  delay: Math.random() * 5,
  duration: Math.random() * 10 + 8,
  opacity: Math.random() * 0.25 + 0.05,
}));

/* ─── Stars ─── */
const stars = Array.from({ length: 60 }, (_, i) => ({
  id: i,
  size: Math.random() * 1.5 + 0.5,
  x: Math.random() * 100,
  y: Math.random() * 100,
  opacity: Math.random() * 0.5 + 0.1,
  delay: Math.random() * 4,
  duration: Math.random() * 3 + 2,
}));

const stats = [
  { value: "0%", label: "Additives", icon: "🌿" },
  { value: "100%", label: "A2 Protein", icon: "✦" },
  { value: "500+", label: "Families", icon: "🏡" },
  { value: "4am", label: "Milked Daily", icon: "🌅" },
];

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

    // Glowing orbs
    const orbs = Array.from({ length: 8 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      r: Math.random() * 180 + 80,
      color: [
        "rgba(212,160,23,0.06)",
        "rgba(27,67,50,0.08)",
        "rgba(212,160,23,0.03)",
        "rgba(64,145,108,0.04)",
      ][Math.floor(Math.random() * 4)],
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
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #030705 0%, #060E08 30%, #0A1A0D 60%, #05090A 100%)",
        position: "relative",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* Animated canvas */}
      <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 0 }} />

      {/* Star field */}
      {stars.map((s) => (
        <motion.div
          key={`star-${s.id}`}
          style={{
            position: "absolute",
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            borderRadius: "50%",
            background: "#F0ECD8",
            opacity: s.opacity,
            zIndex: 0,
            pointerEvents: "none",
          }}
          animate={{ opacity: [s.opacity, s.opacity * 3, s.opacity] }}
          transition={{ duration: s.duration, delay: s.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* Floating gold dots */}
      {particles.map((p) => (
        <motion.div
          key={`p-${p.id}`}
          style={{
            position: "absolute",
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            borderRadius: "50%",
            background: "radial-gradient(circle, #D4A017, rgba(212,160,23,0))",
            opacity: p.opacity,
            zIndex: 0,
            pointerEvents: "none",
          }}
          animate={{ y: [0, -30, 0], opacity: [p.opacity, p.opacity * 2.5, p.opacity] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* Background radial glows */}
      <div style={{ position: "absolute", top: "10%", right: "5%", width: "700px", height: "700px", borderRadius: "50%", background: "radial-gradient(circle, rgba(212,160,23,0.07) 0%, transparent 70%)", zIndex: 0, pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-15%", left: "-10%", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(27,67,50,0.15) 0%, transparent 70%)", zIndex: 0, pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "40%", left: "35%", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(212,160,23,0.04) 0%, transparent 70%)", zIndex: 0, pointerEvents: "none" }} />

      {/* Rotating mandala watermark */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
        style={{
          position: "absolute",
          right: "-80px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "700px",
          height: "700px",
          opacity: 0.025,
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none">
          {[90, 78, 66, 54, 42, 30, 18].map((r, i) => (
            <circle key={r} cx="100" cy="100" r={r} stroke="#D4A017" strokeWidth={i % 2 === 0 ? "0.8" : "0.4"} />
          ))}
          {Array.from({ length: 16 }, (_, i) => {
            const angle = (i * 22.5 * Math.PI) / 180;
            const x = 100 + 70 * Math.cos(angle);
            const y = 100 + 70 * Math.sin(angle);
            return <ellipse key={i} cx={x} cy={y} rx="4" ry="11" fill="#D4A017" transform={`rotate(${i * 22.5} ${x} ${y})`} />;
          })}
          {Array.from({ length: 8 }, (_, i) => {
            const angle = (i * 45 * Math.PI) / 180;
            const x1 = 100 + 30 * Math.cos(angle);
            const y1 = 100 + 30 * Math.sin(angle);
            const x2 = 100 + 55 * Math.cos(angle);
            const y2 = 100 + 55 * Math.sin(angle);
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#D4A017" strokeWidth="0.5" />;
          })}
          <circle cx="100" cy="100" r="10" fill="#D4A017" />
          <circle cx="100" cy="100" r="5" fill="#0A1A0D" />
        </svg>
      </motion.div>

      {/* Content */}
      <div
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
          padding: "150px 32px 110px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
          width: "100%",
        }}
        className="hero-grid"
      >
        {/* Left: Text */}
        <div>
          {/* Origin tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{ marginBottom: "24px" }}
          >
            <span style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "7px 18px",
              background: "rgba(212,160,23,0.08)",
              border: "1px solid rgba(212,160,23,0.22)",
              borderRadius: "999px",
              fontSize: "10px",
              fontWeight: 700,
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "#D4A017",
              fontFamily: "'Cinzel', serif",
            }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#D4A017" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L12 22" /><path d="M17 8C8 10 5.9 16.17 3.82 21.34" />
              </svg>
              From the Sacred Land of Brij
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "clamp(3rem, 5.5vw, 6rem)",
              fontWeight: 900,
              lineHeight: 1.02,
              color: "#F0ECD8",
              marginBottom: "12px",
              letterSpacing: "-0.5px",
            }}
          >
            Braj
            <span style={{
              display: "block",
              background: "linear-gradient(135deg, #7A5C10, #D4A017, #F5CC55, #D4A017)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              backgroundSize: "200% auto",
              animation: "shimmer 4s linear infinite",
            }}>
              Pure
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1rem, 1.8vw, 1.35rem)",
              fontStyle: "italic",
              color: "rgba(240,236,216,0.55)",
              marginBottom: "14px",
            }}
          >
            A2 Desi Cow Milk — Pure. Natural. Powerful.
          </motion.p>

          {/* Sanskrit */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.8 }}
            style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "28px" }}
          >
            <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, transparent, rgba(212,160,23,0.3))" }} />
            <span style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "14px",
              fontStyle: "italic",
              color: "rgba(212,160,23,0.6)",
              letterSpacing: "1px",
              whiteSpace: "nowrap",
            }}>
              गावो विश्वस्य मातरः
            </span>
            <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, rgba(212,160,23,0.3), transparent)" }} />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            style={{
              fontSize: "16px",
              lineHeight: 1.85,
              color: "rgba(240,236,216,0.5)",
              maxWidth: "490px",
              marginBottom: "44px",
            }}
          >
            Sourced from purebred Gir cows grazing in the sacred lands of Brij.
            No additives, no hormones, no compromise. Just milk the way nature
            intended — delivered fresh to your doorstep every morning.
          </motion.p>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.6 }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "1px",
              background: "rgba(212,160,23,0.08)",
              borderRadius: "16px",
              overflow: "hidden",
              marginBottom: "40px",
              border: "1px solid rgba(212,160,23,0.12)",
            }}
            className="hero-stats"
          >
            {stats.map((s, i) => (
              <div
                key={s.label}
                style={{
                  padding: "18px 12px",
                  textAlign: "center",
                  background: i % 2 === 0 ? "rgba(6,10,6,0.8)" : "rgba(10,17,10,0.6)",
                  borderRight: i < 3 ? "1px solid rgba(212,160,23,0.08)" : "none",
                }}
              >
                <div style={{ fontSize: "11px", marginBottom: "4px" }}>{s.icon}</div>
                <div style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "1.35rem",
                  fontWeight: 700,
                  color: "#D4A017",
                  lineHeight: 1,
                  marginBottom: "4px",
                }}>
                  {s.value}
                </div>
                <div style={{ fontSize: "10px", color: "rgba(240,236,216,0.4)", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.88, duration: 0.6 }}
            style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}
          >
            <Link href="/order" className="btn-gold" style={{ textDecoration: "none" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
              </svg>
              <span>Start Free Trial</span>
            </Link>
            <Link
              href="/#why-a2"
              className="btn-outline"
              style={{ textDecoration: "none" }}
            >
              <span>Learn More</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14" /><path d="m19 12-7 7-7-7" />
              </svg>
            </Link>
          </motion.div>
        </div>

        {/* Right: Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, x: 60 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ display: "flex", justifyContent: "center", position: "relative" }}
        >
          {/* Outer glow ring */}
          <div style={{
            position: "absolute",
            inset: "-40px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(212,160,23,0.12) 0%, transparent 70%)",
            animation: "pulse-glow 4s ease-in-out infinite",
          }} />

          {/* Rotating decorative ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            style={{
              position: "absolute",
              inset: "-28px",
              borderRadius: "50%",
              border: "1px dashed rgba(212,160,23,0.2)",
              pointerEvents: "none",
            }}
          />

          <motion.div
            animate={{ y: [0, -18, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            style={{ position: "relative", width: "100%", maxWidth: "460px", aspectRatio: "1" }}
          >
            <div style={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              overflow: "hidden",
              border: "1.5px solid rgba(212,160,23,0.2)",
              boxShadow: "0 40px 120px rgba(0,0,0,0.6), 0 0 80px rgba(212,160,23,0.12), inset 0 0 60px rgba(0,0,0,0.2)",
            }}>
              <Image
                src="/hero-milk.png"
                alt="Braj Pure A2 Desi Cow Milk — fresh and natural"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
              {/* Dark overlay for cohesion */}
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(135deg, rgba(0,0,0,0.1) 0%, transparent 50%, rgba(212,160,23,0.05) 100%)",
              }} />
            </div>

            <div style={{ position: "absolute", inset: "-14px", borderRadius: "50%", border: "1px solid rgba(212,160,23,0.1)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", inset: "-28px", borderRadius: "50%", border: "1px solid rgba(212,160,23,0.05)", pointerEvents: "none" }} />

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              style={{
                position: "absolute",
                bottom: "14%",
                right: "-18%",
                background: "linear-gradient(145deg, #0E1A0E, #131F13)",
                borderRadius: "18px",
                padding: "14px 18px",
                boxShadow: "0 12px 48px rgba(0,0,0,0.5), 0 0 0 1px rgba(212,160,23,0.2)",
                textAlign: "center",
                minWidth: "110px",
              }}
            >
              <div style={{ fontSize: "22px", marginBottom: "4px" }}>🐄</div>
              <div style={{ fontSize: "10px", fontWeight: 800, color: "#D4A017", letterSpacing: "1px", textTransform: "uppercase" }}>Gir Cows</div>
              <div style={{ fontSize: "9px", color: "rgba(240,236,216,0.4)", marginTop: "2px" }}>Purebred</div>
            </motion.div>

            {/* FSSAI badge */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              style={{
                position: "absolute",
                top: "10%",
                left: "-16%",
                background: "linear-gradient(145deg, #1B4332, #0D2B1D)",
                borderRadius: "18px",
                padding: "14px 18px",
                boxShadow: "0 12px 48px rgba(0,0,0,0.5), 0 0 0 1px rgba(64,145,108,0.3)",
                textAlign: "center",
                minWidth: "100px",
              }}
            >
              <div style={{ fontSize: "22px", marginBottom: "4px" }}>✅</div>
              <div style={{ fontSize: "10px", fontWeight: 800, color: "#40916C", letterSpacing: "1px", textTransform: "uppercase" }}>FSSAI</div>
              <div style={{ fontSize: "9px", color: "rgba(240,236,216,0.4)", marginTop: "2px" }}>Certified</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        style={{
          position: "absolute",
          bottom: "32px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          zIndex: 2,
        }}
      >
        <span style={{ fontSize: "9px", letterSpacing: "3px", textTransform: "uppercase", color: "rgba(212,160,23,0.5)", fontWeight: 700 }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          style={{
            width: "24px",
            height: "38px",
            borderRadius: "12px",
            border: "1.5px solid rgba(212,160,23,0.25)",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            padding: "5px",
          }}
        >
          <div style={{
            width: "4px",
            height: "8px",
            borderRadius: "2px",
            background: "rgba(212,160,23,0.6)",
          }} />
        </motion.div>
      </motion.div>

      {/* Wave transition */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 2 }}>
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: "block" }}>
          <path d="M0,50 C360,80 1080,20 1440,50 L1440,80 L0,80 Z" fill="rgba(10,17,10,0.4)" />
          <path d="M0,60 C480,80 960,40 1440,60 L1440,80 L0,80 Z" fill="rgba(6,10,6,0.7)" />
          <path d="M0,68 C360,78 1080,58 1440,68 L1440,80 L0,80 Z" fill="#060A06" />
        </svg>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .hero-stats {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(212,160,23,0.15), 0 0 60px rgba(212,160,23,0.04); }
          50%       { box-shadow: 0 0 50px rgba(212,160,23,0.3), 0 0 120px rgba(212,160,23,0.08); }
        }
        @keyframes shimmer {
          0%   { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
      `}</style>
    </section>
  );
}
