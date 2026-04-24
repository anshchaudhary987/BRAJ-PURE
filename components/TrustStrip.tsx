"use client";

/* ─── Scrolling trust strip between Hero and WhyA2 ─── */

const trustItems = [
  { icon: "🌿", text: "100% A2 Protein" },
  { icon: "🐄", text: "Purebred Gir Cows" },
  { icon: "🚫", text: "Zero Additives" },
  { icon: "🏆", text: "FSSAI Certified" },
  { icon: "🌅", text: "Milked at 4am Daily" },
  { icon: "📦", text: "Delivered by 7am" },
  { icon: "💚", text: "No Antibiotics" },
  { icon: "🔬", text: "Lab Tested Every Batch" },
  { icon: "🌾", text: "Organic Grass-Fed" },
  { icon: "✨", text: "3-Day Free Trial" },
  { icon: "🏡", text: "500+ Happy Families" },
  { icon: "📍", text: "Mathura · Vrindavan · Agra" },
];

const doubled = [...trustItems, ...trustItems];

export default function TrustStrip() {
  return (
    <div
      style={{
        background: "linear-gradient(90deg, #0A1A0D, #0D2000, #0A1A0D)",
        borderTop: "1px solid rgba(212,160,23,0.12)",
        borderBottom: "1px solid rgba(212,160,23,0.12)",
        padding: "16px 0",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Fade edges */}
      <div style={{
        position: "absolute", left: 0, top: 0, bottom: 0, width: "120px", zIndex: 2, pointerEvents: "none",
        background: "linear-gradient(90deg, #060A06, transparent)",
      }} />
      <div style={{
        position: "absolute", right: 0, top: 0, bottom: 0, width: "120px", zIndex: 2, pointerEvents: "none",
        background: "linear-gradient(-90deg, #060A06, transparent)",
      }} />

      <div
        style={{
          display: "flex",
          animation: "trust-marquee 40s linear infinite",
          width: "max-content",
          alignItems: "center",
          gap: "0",
        }}
      >
        {doubled.map((item, i) => (
          <div
            key={i}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 28px",
              borderRight: "1px solid rgba(212,160,23,0.1)",
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            <span style={{ fontSize: "14px" }}>{item.icon}</span>
            <span style={{
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "1px",
              color: "rgba(240,236,216,0.55)",
              textTransform: "uppercase",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}>
              {item.text}
            </span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes trust-marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
