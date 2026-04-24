"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Vrindavan",
    rating: 5,
    initials: "PS",
    role: "Mother of 2",
    text: "My kids refused to drink packaged milk. The moment we switched to Braj Pure, they started loving it. The taste is incomparable — creamy, naturally sweet, so fresh. It's been 6 months and we won't go back.",
    accentColor: "#D4A017",
  },
  {
    name: "Arjun Mehta",
    location: "Mathura",
    rating: 5,
    initials: "AM",
    role: "Fitness Enthusiast",
    text: "I've tried every protein supplement out there. Nothing comes close to Braj Pure A2 milk for post-workout recovery. Pure protein, no bloating, delivered to my door. Nature's perfect protein shake.",
    accentColor: "#40916C",
  },
  {
    name: "Sunita Agarwal",
    location: "Agra",
    rating: 5,
    initials: "SA",
    role: "Senior Citizen",
    text: "My doctor recommended A2 milk for my digestive issues. Braj Pure has been a blessing — my stomach is calmer, my energy is better, and I feel lighter after every glass. The quality is absolutely authentic.",
    accentColor: "#D4A017",
  },
  {
    name: "Rahul Gupta",
    location: "Mathura",
    rating: 5,
    initials: "RG",
    role: "Entrepreneur",
    text: "Started as a free trial, stayed forever. The morning delivery is incredibly reliable — never missed a single day in 8 months. And the milk? It makes the best chai I've ever had in my life.",
    accentColor: "#40916C",
  },
  {
    name: "Kavita Singh",
    location: "Vrindavan",
    rating: 5,
    initials: "KS",
    role: "Nutritionist",
    text: "As a nutritionist, I recommend Braj Pure to all my clients. The fat profile, the A2 protein, the natural vitamins — it's clinically superior. This is what real, traditional Indian milk should taste like.",
    accentColor: "#D4A017",
  },
  {
    name: "Deepak Yadav",
    location: "Agra",
    rating: 5,
    initials: "DY",
    role: "Yoga Instructor",
    text: "Pure milk is a cornerstone of Ayurvedic wellness. Braj Pure understands this deeply. I've been recommending it to all my students. Ethical sourcing, pristine product, perfect delivery.",
    accentColor: "#40916C",
  },
];

const row1 = testimonials.slice(0, 3);
const row2 = testimonials.slice(3, 6);

function StarIcon({ filled = true }: { filled?: boolean }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill={filled ? "#D4A017" : "none"} stroke="#D4A017" strokeWidth="1.5">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function TestimonialCard({ t }: { t: (typeof testimonials)[0] }) {
  return (
    <div
      style={{
        minWidth: "360px",
        maxWidth: "360px",
        background: "linear-gradient(145deg, #182018, #131F13)",
        borderRadius: "22px",
        padding: "28px",
        border: "1px solid rgba(255,255,255,0.06)",
        boxShadow: "0 8px 40px rgba(0,0,0,0.4)",
        flexShrink: 0,
        marginRight: "20px",
        position: "relative",
        overflow: "hidden",
        transition: "border-color 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      {/* Large quote */}
      <div style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: "5rem",
        lineHeight: 0.8,
        fontWeight: 900,
        color: t.accentColor,
        opacity: 0.12,
        position: "absolute",
        top: "14px",
        right: "22px",
        pointerEvents: "none",
        userSelect: "none",
      }}>
        &rdquo;
      </div>

      {/* Accent bottom line */}
      <div style={{
        position: "absolute", bottom: 0, left: "16px", right: "16px",
        height: "2px",
        background: `linear-gradient(90deg, transparent, ${t.accentColor}, transparent)`,
        borderRadius: "0 0 22px 22px",
        opacity: 0.3,
      }} />

      {/* Stars */}
      <div style={{ display: "flex", gap: "3px", marginBottom: "14px" }}>
        {Array.from({ length: t.rating }).map((_, i) => (
          <StarIcon key={i} filled />
        ))}
      </div>

      <p style={{
        fontSize: "13.5px",
        lineHeight: 1.8,
        color: "rgba(240,236,216,0.6)",
        marginBottom: "22px",
        fontStyle: "italic",
        position: "relative",
        zIndex: 1,
      }}>
        &ldquo;{t.text}&rdquo;
      </p>

      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <div style={{
          width: "42px",
          height: "42px",
          borderRadius: "50%",
          background: `linear-gradient(135deg, ${t.accentColor}30, ${t.accentColor}10)`,
          border: `1px solid ${t.accentColor}40`,
          display: "flex", alignItems: "center", justifyContent: "center",
          color: t.accentColor,
          fontWeight: 800,
          fontSize: "13px",
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          flexShrink: 0,
        }}>
          {t.initials}
        </div>
        <div>
          <div style={{ fontWeight: 700, fontSize: "14px", color: "#F0ECD8" }}>{t.name}</div>
          <div style={{ fontSize: "12px", color: "rgba(240,236,216,0.35)" }}>{t.role} · {t.location}</div>
        </div>
        <div style={{
          marginLeft: "auto",
          fontSize: "10px",
          fontWeight: 700,
          color: "#40916C",
          background: "rgba(64,145,108,0.1)",
          border: "1px solid rgba(64,145,108,0.2)",
          padding: "4px 10px",
          borderRadius: "999px",
          display: "flex",
          alignItems: "center",
          gap: "4px",
          whiteSpace: "nowrap",
        }}>
          <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#40916C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6 9 17l-5-5" />
          </svg>
          Verified
        </div>
      </div>
    </div>
  );
}

function MarqueeRow({ items, reverse = false }: { items: typeof testimonials; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee-container" style={{ marginBottom: "20px" }}>
      <div
        style={{
          display: "flex",
          animation: `${reverse ? "marquee-reverse" : "marquee"} ${reverse ? "28s" : "35s"} linear infinite`,
          width: "max-content",
        }}
      >
        {doubled.map((t, i) => (
          <TestimonialCard key={`${t.name}-${i}`} t={t} />
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="testimonials"
      ref={ref}
      style={{
        padding: "110px 0",
        background: "linear-gradient(180deg, #060A06 0%, #080E08 100%)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Subtle gold glow */}
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "800px", height: "400px", borderRadius: "50%", background: "radial-gradient(ellipse, rgba(212,160,23,0.03) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: "1300px", margin: "0 auto", padding: "0 32px", textAlign: "center", marginBottom: "64px" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}>
          <span className="section-tag">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#D4A017" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
            Loved by Families
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
            lineHeight: 1.2,
            marginBottom: "18px",
            letterSpacing: "-0.3px",
          }}
        >
          Real stories from{" "}
          <span className="gradient-text-gold">real families</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          style={{ fontSize: "16px", color: "rgba(240,236,216,0.4)", maxWidth: "500px", margin: "0 auto" }}
        >
          500+ families across Mathura, Vrindavan &amp; Agra trust Braj Pure every morning.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <MarqueeRow items={row1} />
        <MarqueeRow items={row2} reverse />
      </motion.div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .marquee-container > div:hover { animation-play-state: paused; }
      `}</style>
    </section>
  );
}
