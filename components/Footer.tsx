"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const LeafIcon = ({ size = 18, color = "#D4A017" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75" />
  </svg>
);

const socialLinks = [
  {
    name: "WhatsApp",
    href: "https://wa.me/919999999999",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="white">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="5" /><circle cx="17.5" cy="6.5" r="1.5" fill="white" stroke="none" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "#",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
];

const certBadges = [
  { label: "FSSAI Certified", iconPath: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" },
  { label: "A2 Certified",    iconPath: "M22 11.08V12a10 10 0 1 1-5.93-9.14M9 11l3 3L22 4" },
  { label: "Lab Tested",      iconPath: "M9 3v2m6-2v2M9 19v2m6-2v2M3 9h2m14 0h2M3 15h2m14 0h2M9 9h6v6H9z" },
];

const navCols = [
  {
    title: "Explore",
    links: [
      { label: "Why A2 Milk?",   href: "/#why-a2" },
      { label: "Our Farm",       href: "/story" },
      { label: "Products",       href: "/products" },
      { label: "Health Benefits",href: "/products#benefits" },
      { label: "Testimonials",   href: "/#testimonials" },
    ],
  },
  {
    title: "Order",
    links: [
      { label: "Start Free Trial",  href: "/order" },
      { label: "Subscribe Daily",   href: "/order" },
      { label: "Bulk Orders",       href: "/order" },
      { label: "Corporate Plans",   href: "/order" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact Us",        href: "#" },
      { label: "WhatsApp: 99999 99999", href: "https://wa.me/919999999999" },
      { label: "FAQ",               href: "#" },
      { label: "Delivery Areas",    href: "#" },
      { label: "Privacy Policy",    href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(180deg, #060A06 0%, #030505 100%)",
        color: "rgba(240,236,216,0.5)",
        padding: "90px 0 36px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background accents */}
      <div style={{ position: "absolute", top: "-200px", right: "-200px", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(212,160,23,0.03) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-100px", left: "-100px", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(27,67,50,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />

      {/* Top divider line */}
      <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(212,160,23,0.2), transparent)", marginBottom: "0" }} />

      <div style={{ maxWidth: "1300px", margin: "0 auto", padding: "0 32px" }}>
        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            background: "linear-gradient(135deg, rgba(212,160,23,0.08) 0%, rgba(212,160,23,0.03) 50%, rgba(64,145,108,0.05) 100%)",
            border: "1px solid rgba(212,160,23,0.18)",
            borderRadius: "22px",
            padding: "44px 52px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "28px",
            flexWrap: "wrap",
            marginBottom: "72px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div style={{ position: "absolute", top: "-60px", right: "-60px", width: "250px", height: "250px", borderRadius: "50%", background: "radial-gradient(circle, rgba(212,160,23,0.06), transparent)", pointerEvents: "none" }} />

          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "clamp(1.3rem, 2.5vw, 1.9rem)",
              fontWeight: 800,
              color: "#F0ECD8",
              marginBottom: "8px",
              letterSpacing: "-0.2px",
            }}>
              Ready to taste the difference?
            </div>
            <div style={{ fontSize: "14px", color: "rgba(240,236,216,0.4)" }}>
              Join 500+ families who start their mornings with Braj Pure.
            </div>
          </div>
          <Link href="/order" className="btn-gold" style={{ textDecoration: "none", whiteSpace: "nowrap", position: "relative", zIndex: 1 }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
            </svg>
            <span>Start Free Trial</span>
          </Link>
        </motion.div>

        {/* Main grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: "52px",
            marginBottom: "56px",
          }}
          className="footer-grid"
        >
          {/* Brand column */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "13px", marginBottom: "18px" }}>
              <div style={{
                width: "40px", height: "40px",
                borderRadius: "12px",
                background: "linear-gradient(135deg, #1B4332, #40916C)",
                display: "flex", alignItems: "center", justifyContent: "center",
                border: "1px solid rgba(212,160,23,0.15)",
              }}>
                <LeafIcon size={20} color="#D4A017" />
              </div>
              <div>
                <div style={{ fontFamily: "'Cinzel', serif", fontWeight: 800, fontSize: "18px", color: "#F0ECD8", lineHeight: 1, letterSpacing: "1px" }}>
                  Braj Pure
                </div>
                <div style={{ fontSize: "9px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", color: "rgba(212,160,23,0.5)", marginTop: "3px" }}>
                  A2 Desi Cow Milk
                </div>
              </div>
            </div>
            <p style={{ fontSize: "13.5px", lineHeight: 1.85, maxWidth: "280px", color: "rgba(240,236,216,0.35)", marginBottom: "24px" }}>
              Pure A2 milk from purebred Gir cows, sourced from the sacred lands of Mathura &amp; Vrindavan, delivered fresh every morning.
            </p>
            <div style={{ display: "flex", gap: "10px" }}>
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: "38px", height: "38px",
                    borderRadius: "10px",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "rgba(240,236,216,0.4)",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "rgba(212,160,23,0.12)";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(212,160,23,0.25)";
                    (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.04)";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.07)";
                    (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                  }}
                  aria-label={s.name}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {navCols.map((col) => (
            <div key={col.title}>
              <div style={{
                fontFamily: "'Cinzel', serif",
                fontWeight: 700,
                fontSize: "11px",
                letterSpacing: "2.5px",
                textTransform: "uppercase",
                color: "#D4A017",
                marginBottom: "22px",
              }}>
                {col.title}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "13px" }}>
                {col.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    style={{
                      fontSize: "13.5px",
                      color: "rgba(240,236,216,0.38)",
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = "#D4A017")}
                    onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = "rgba(240,236,216,0.38)")}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: "1px solid rgba(255,255,255,0.05)",
          paddingTop: "28px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "14px",
        }}>
          <div style={{ fontSize: "12px", color: "rgba(240,236,216,0.25)" }}>
            © 2025 Braj Pure. All rights reserved. Crafted with care in Mathura, UP.
          </div>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {certBadges.map((badge) => (
              <span
                key={badge.label}
                style={{
                  fontSize: "10px",
                  fontWeight: 700,
                  color: "rgba(240,236,216,0.35)",
                  padding: "5px 12px",
                  background: "rgba(255,255,255,0.03)",
                  borderRadius: "999px",
                  border: "1px solid rgba(212,160,23,0.1)",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="rgba(212,160,23,0.5)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d={badge.iconPath} />
                </svg>
                {badge.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
