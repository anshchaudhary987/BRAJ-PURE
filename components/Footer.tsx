"use client";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#0D1F17",
        color: "rgba(255,255,255,0.65)",
        padding: "60px 0 32px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative top wave */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0 }}>
        <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: "block" }}>
          <path d="M0,20 C360,40 1080,0 1440,20 L1440,0 L0,0 Z" fill="#1B4332" />
        </svg>
      </div>

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
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
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "12px",
                  background: "linear-gradient(135deg, #1B4332, #40916C)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "20px",
                }}
              >
                🐄
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
            <p style={{ fontSize: "14px", lineHeight: 1.8, maxWidth: "280px", color: "rgba(255,255,255,0.5)" }}>
              Pure A2 milk from purebred Gir cows, sourced from the sacred lands of Mathura &amp; Vrindavan, delivered fresh every morning.
            </p>
            <div style={{ display: "flex", gap: "12px", marginTop: "20px" }}>
              {["📱 WhatsApp", "📸 Instagram", "📘 Facebook"].map((s) => (
                <a
                  key={s}
                  href="#"
                  style={{
                    fontSize: "12px",
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.5)",
                    textDecoration: "none",
                    padding: "6px 12px",
                    background: "rgba(255,255,255,0.05)",
                    borderRadius: "999px",
                    border: "1px solid rgba(255,255,255,0.08)",
                    transition: "all 0.2s ease",
                  }}
                >
                  {s}
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
                  marginBottom: "16px",
                }}
              >
                {col.title}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {col.links.map((link) => (
                  <a
                    key={link}
                    href="#"
                    style={{
                      fontSize: "14px",
                      color: "rgba(255,255,255,0.5)",
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = "#E8A020")}
                    onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = "rgba(255,255,255,0.5)")}
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
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: "24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.35)" }}>
            © 2025 Braj Pure. All rights reserved. Made with ❤️ in Mathura, UP.
          </div>
          <div style={{ display: "flex", gap: "8px" }}>
            {["🌿 FSSAI Certified", "🐄 A2 Certified", "✅ Lab Tested"].map((badge) => (
              <span
                key={badge}
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  color: "rgba(255,255,255,0.4)",
                  padding: "4px 10px",
                  background: "rgba(255,255,255,0.04)",
                  borderRadius: "999px",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                {badge}
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
