"use client";

const LeafIcon = ({ size = 18, color = "#F5BC4A" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75" />
  </svg>
);

const socialLinks = [
  {
    name: "WhatsApp",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="5" /><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
];

const certBadges = [
  { label: "FSSAI Certified", iconPath: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" },
  { label: "A2 Certified", iconPath: "M22 11.08V12a10 10 0 1 1-5.93-9.14M9 11l3 3L22 4" },
  { label: "Lab Tested", iconPath: "M9 3v2m6-2v2M9 19v2m6-2v2M3 9h2m14 0h2M3 15h2m14 0h2M9 9h6v6H9z" },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(180deg, #0F2B1F 0%, #0A1F15 100%)",
        color: "rgba(255,255,255,0.65)",
        padding: "80px 0 32px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background accent */}
      <div style={{
        position: "absolute",
        top: "-200px",
        right: "-200px",
        width: "500px",
        height: "500px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(232,160,32,0.04) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* CTA Banner */}
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        <div
          style={{
            background: "linear-gradient(135deg, rgba(232,160,32,0.12), rgba(232,160,32,0.04))",
            border: "1px solid rgba(232,160,32,0.2)",
            borderRadius: "24px",
            padding: "40px 48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "24px",
            flexWrap: "wrap",
            marginBottom: "64px",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)",
                fontWeight: 800,
                color: "#FFF8E7",
                marginBottom: "6px",
              }}
            >
              Ready to taste the difference?
            </div>
            <div style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)" }}>
              Join 500+ families who start their mornings with Braj Pure.
            </div>
          </div>
          <a href="#order" className="btn-gold" style={{ textDecoration: "none", whiteSpace: "nowrap" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              Start Free Trial
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
              </svg>
            </span>
          </a>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: "48px",
            marginBottom: "48px",
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "12px",
                  background: "linear-gradient(135deg, #1B4332, #40916C)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <LeafIcon size={20} color="#F5BC4A" />
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 800,
                    fontSize: "20px",
                    color: "#FFF8E7",
                    lineHeight: 1,
                  }}
                >
                  Braj Pure
                </div>
                <div style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", color: "#E8A020" }}>
                  A2 Desi Cow Milk
                </div>
              </div>
            </div>
            <p style={{ fontSize: "14px", lineHeight: 1.8, maxWidth: "280px", color: "rgba(255,255,255,0.4)" }}>
              Pure A2 milk from purebred Gir cows, sourced from the sacred lands of Mathura &amp; Vrindavan, delivered fresh every morning.
            </p>
            <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href="#"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "12px",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(255,255,255,0.5)",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "rgba(232,160,32,0.15)";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(232,160,32,0.3)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "#F5BC4A";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.05)";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.08)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.5)";
                  }}
                  aria-label={s.name}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {[
            {
              title: "Explore",
              links: ["Why A2 Milk?", "Our Farm", "Products", "Health Benefits", "Testimonials"],
            },
            {
              title: "Order",
              links: ["Start Free Trial", "Subscribe Daily", "Bulk Orders", "Corporate Plans"],
            },
            {
              title: "Support",
              links: ["Contact Us", "WhatsApp: 9999999999", "FAQ", "Delivery Areas", "Privacy Policy"],
            },
          ].map((col) => (
            <div key={col.title}>
              <div
                style={{
                  fontWeight: 800,
                  fontSize: "13px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "#E8A020",
                  marginBottom: "20px",
                }}
              >
                {col.title}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {col.links.map((link) => (
                  <a
                    key={link}
                    href="#"
                    style={{
                      fontSize: "14px",
                      color: "rgba(255,255,255,0.45)",
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = "#F5BC4A")}
                    onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = "rgba(255,255,255,0.45)")}
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            paddingTop: "24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.3)" }}>
            © 2025 Braj Pure. All rights reserved. Made with care in Mathura, UP.
          </div>
          <div style={{ display: "flex", gap: "8px" }}>
            {certBadges.map((badge) => (
              <span
                key={badge.label}
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  color: "rgba(255,255,255,0.4)",
                  padding: "6px 12px",
                  background: "rgba(255,255,255,0.04)",
                  borderRadius: "999px",
                  border: "1px solid rgba(255,255,255,0.06)",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(232,160,32,0.6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d={badge.iconPath} />
                </svg>
                {badge.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
