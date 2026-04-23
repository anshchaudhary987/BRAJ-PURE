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
    text: "My kids refused to drink packaged milk. The moment we switched to Braj Pure, they started loving it. The taste is incomparable — creamy, naturally sweet, and so fresh. It's been 6 months and we won't go back.",
    color: "#1B4332",
  },
  {
    name: "Arjun Mehta",
    location: "Mathura",
    rating: 5,
    initials: "AM",
    role: "Fitness Enthusiast",
    text: "I've tried every protein supplement out there. Nothing comes close to Braj Pure A2 milk for post-workout recovery. Pure protein, no bloating, delivered to my door. This is nature's perfect protein shake.",
    color: "#C4831A",
  },
  {
    name: "Sunita Agarwal",
    location: "Agra",
    rating: 5,
    initials: "SA",
    role: "Senior Citizen",
    text: "My doctor recommended A2 milk for my digestive issues. Braj Pure has been a blessing — my stomach is calmer, my energy is better, and I feel lighter after every glass. The quality is absolutely authentic.",
    color: "#2D6A4F",
  },
  {
    name: "Rahul Gupta",
    location: "Mathura",
    rating: 5,
    initials: "RG",
    role: "Entrepreneur",
    text: "Started as a free trial, stayed forever. The morning delivery is incredibly reliable — never missed a single day in 8 months. And the milk itself? It makes the best chai I've ever had in my life.",
    color: "#D4A017",
  },
  {
    name: "Kavita Singh",
    location: "Vrindavan",
    rating: 5,
    initials: "KS",
    role: "Nutritionist",
    text: "As a nutritionist, I recommend Braj Pure to all my clients. The fat profile, the A2 protein, the natural vitamins — it's clinically superior. This is what real, traditional Indian milk should taste like.",
    color: "#1B4332",
  },
  {
    name: "Deepak Yadav",
    location: "Agra",
    rating: 5,
    initials: "DY",
    role: "Yoga Instructor",
    text: "Pure milk is a cornerstone of Ayurvedic wellness. Braj Pure understands this deeply. I've been recommending it to all my students. The sourcing is ethical, the product is pristine, the delivery is perfect.",
    color: "#C4831A",
  },
];

const row1 = testimonials.slice(0, 3);
const row2 = testimonials.slice(3, 6);

function TestimonialCard({ t }: { t: (typeof testimonials)[0] }) {
  return (
    <div
      style={{
        minWidth: "360px",
        maxWidth: "360px",
        background: "white",
        borderRadius: "24px",
        padding: "32px",
        border: "1px solid rgba(27,67,50,0.06)",
        boxShadow: "0 4px 24px rgba(27,67,50,0.05)",
        flexShrink: 0,
        marginRight: "20px",
        position: "relative",
        overflow: "hidden",
        transition: "box-shadow 0.3s ease, border-color 0.3s ease",
      }}
    >
      {/* Quotation mark */}
      <div
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "4rem",
          lineHeight: 1,
          fontWeight: 900,
          background: "linear-gradient(135deg, rgba(232,160,32,0.2), rgba(232,160,32,0.05))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          position: "absolute",
          top: "16px",
          right: "24px",
          pointerEvents: "none",
        }}
      >
        &rdquo;
      </div>

      {/* Stars */}
      <div style={{ display: "flex", gap: "3px", marginBottom: "16px" }}>
        {Array.from({ length: t.rating }).map((_, i) => (
          <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#E8A020" stroke="none">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        ))}
      </div>

      <p
        style={{
          fontSize: "14px",
          lineHeight: 1.75,
          color: "#374151",
          marginBottom: "24px",
          fontStyle: "italic",
          position: "relative",
          zIndex: 1,
        }}
      >
        &ldquo;{t.text}&rdquo;
      </p>

      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <div
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            background: `linear-gradient(135deg, ${t.color}, ${t.color}90)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontWeight: 800,
            fontSize: "14px",
            letterSpacing: "0.5px",
            border: "2px solid rgba(232,160,32,0.25)",
            fontFamily: "Plus Jakarta Sans, sans-serif",
          }}
        >
          {t.initials}
        </div>
        <div>
          <div style={{ fontWeight: 700, fontSize: "14px", color: "#1A1A2E" }}>{t.name}</div>
          <div style={{ fontSize: "12px", color: "#6B7280" }}>{t.role} · {t.location}</div>
        </div>
        <div
          style={{
            marginLeft: "auto",
            fontSize: "11px",
            fontWeight: 700,
            color: "#1B4332",
            background: "rgba(27,67,50,0.06)",
            padding: "4px 12px",
            borderRadius: "999px",
            display: "flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#1B4332" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
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
        className="marquee-track"
        style={{
          display: "flex",
          animation: `marquee ${reverse ? "25s" : "30s"} linear infinite ${reverse ? "reverse" : "normal"}`,
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
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="testimonials"
      ref={ref}
      style={{
        padding: "100px 0",
        background: "#FFF8E7",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px", textAlign: "center", marginBottom: "60px" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}>
          <span className="section-tag">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
            Loved by Families
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
          Real stories from
          <span className="gradient-text-green"> real families</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          style={{ fontSize: "16px", color: "#6B7280", maxWidth: "500px", margin: "0 auto" }}
        >
          500+ families across Mathura, Vrindavan &amp; Agra trust Braj Pure every morning.
        </motion.p>
      </div>

      {/* Marquee rows */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <MarqueeRow items={row1} />
        <MarqueeRow items={row2} reverse />
      </motion.div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
