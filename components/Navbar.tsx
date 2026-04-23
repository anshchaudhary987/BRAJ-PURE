"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Why A2?", href: "#why-a2" },
  { label: "Our Story", href: "#story" },
  { label: "Products", href: "#products" },
  { label: "Benefits", href: "#benefits" },
  { label: "Testimonials", href: "#testimonials" },
];

// Traditional Indian SVG border pattern (rangoli/mandala-inspired dots & diamonds)
const TopBorder = () => (
  <div
    style={{
      width: "100%",
      height: "6px",
      background: "linear-gradient(90deg, #1B4332 0%, #E8A020 25%, #1B4332 50%, #E8A020 75%, #1B4332 100%)",
      position: "relative",
      flexShrink: 0,
    }}
  >
    {/* Diamond row overlay */}
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0px",
        overflow: "hidden",
      }}
    >
      <svg width="100%" height="6" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <defs>
          <pattern id="border-diamonds" x="0" y="0" width="24" height="6" patternUnits="userSpaceOnUse">
            <rect width="24" height="6" fill="none" />
            {/* Diamond */}
            <polygon points="12,0 16,3 12,6 8,3" fill="#E8A020" opacity="0.9" />
            {/* Side dots */}
            <circle cx="0" cy="3" r="1.5" fill="#FFF8E7" opacity="0.8" />
            <circle cx="24" cy="3" r="1.5" fill="#FFF8E7" opacity="0.8" />
          </pattern>
        </defs>
        <rect width="100%" height="6" fill="url(#border-diamonds)" />
      </svg>
    </div>
  </div>
);

// Second thin accent line
const AccentLine = ({ scrolled }: { scrolled: boolean }) => (
  <div
    style={{
      width: "100%",
      height: "1px",
      background: scrolled
        ? "linear-gradient(90deg, transparent 0%, rgba(232,160,32,0.4) 30%, rgba(232,160,32,0.8) 50%, rgba(232,160,32,0.4) 70%, transparent 100%)"
        : "linear-gradient(90deg, transparent 0%, rgba(232,160,32,0.25) 50%, transparent 100%)",
      transition: "background 0.5s ease",
    }}
  />
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          transition: "background 0.5s ease, box-shadow 0.5s ease",
          background: scrolled ? "rgba(255,248,231,0.96)" : "transparent",
          backdropFilter: scrolled ? "blur(24px)" : "none",
          boxShadow: scrolled ? "0 2px 40px rgba(27,67,50,0.12)" : "none",
        }}
      >
        {/* ── Traditional top border strip ── */}
        <TopBorder />

        {/* ── Rangoli-inspired second border ── */}
        <div
          style={{
            width: "100%",
            padding: "0 0 2px 0",
            background: scrolled ? "rgba(255,248,231,0.96)" : "transparent",
          }}
        >
          <AccentLine scrolled={scrolled} />
        </div>

        {/* ── Main navbar row ── */}
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: scrolled ? "10px 28px" : "16px 28px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            transition: "padding 0.4s ease",
          }}
        >
          {/* ─── Logo ─── */}
          <a href="#" style={{ textDecoration: "none" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              {/* Icon with traditional border */}
              <div style={{ position: "relative" }}>
                <div
                  style={{
                    width: "46px",
                    height: "46px",
                    borderRadius: "14px",
                    background: "linear-gradient(135deg, #1B4332 0%, #2D6A4F 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "22px",
                    boxShadow: "0 4px 16px rgba(27,67,50,0.35), inset 0 1px 0 rgba(255,255,255,0.1)",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  🐄
                </div>
                {/* Saffron corner accent */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "-3px",
                    right: "-3px",
                    width: "14px",
                    height: "14px",
                    borderRadius: "4px",
                    background: "linear-gradient(135deg, #E8A020, #F5BC4A)",
                    zIndex: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "8px",
                  }}
                >
                  ✦
                </div>
              </div>

              {/* Brand name */}
              <div>
                {/* Sanskrit/decorative tagline above brand name */}
                <div
                  style={{
                    fontSize: "9px",
                    fontWeight: 700,
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                    color: scrolled ? "#C4831A" : "rgba(245,188,74,0.8)",
                    lineHeight: 1,
                    marginBottom: "3px",
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                    transition: "color 0.4s ease",
                  }}
                >
                  ॐ  •  शुद्ध  •  प्राकृतिक  •  ॐ
                </div>

                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 900,
                    fontSize: "22px",
                    lineHeight: 1,
                    letterSpacing: "0.5px",
                    color: scrolled ? "#1B4332" : "#FFF8E7",
                    transition: "color 0.4s ease",
                  }}
                >
                  Braj{" "}
                  <span
                    style={{
                      background: "linear-gradient(135deg, #E8A020, #F5BC4A)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Pure
                  </span>
                </div>

                {/* Below: A2 tag */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    marginTop: "2px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "9px",
                      fontWeight: 800,
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      color: scrolled ? "#6B7280" : "rgba(253,252,250,0.55)",
                      transition: "color 0.4s ease",
                    }}
                  >
                    A2 Desi Cow Milk
                  </span>
                  {/* Tiny dot decorators */}
                  <span style={{ color: "#E8A020", fontSize: "8px" }}>◆</span>
                  <span
                    style={{
                      fontSize: "9px",
                      fontWeight: 700,
                      color: scrolled ? "#C4831A" : "rgba(245,188,74,0.7)",
                      transition: "color 0.4s ease",
                    }}
                  >
                    Mathura
                  </span>
                </div>
              </div>
            </div>
          </a>

          {/* ─── Desktop Nav links ─── */}
          <div
            className="hidden-mobile"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "28px",
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="nav-link"
                style={{
                  textDecoration: "none",
                  color: scrolled ? "#1B4332" : "rgba(253,252,250,0.85)",
                  fontWeight: 600,
                  fontSize: "14px",
                  letterSpacing: "0.3px",
                  position: "relative",
                  padding: "4px 0",
                  transition: "color 0.3s ease",
                }}
              >
                {link.label}
              </a>
            ))}

            {/* Traditional-styled CTA button */}
            <a
              href="#order"
              style={{
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "10px 24px",
                background: "linear-gradient(135deg, #1B4332, #2D6A4F)",
                color: "white",
                borderRadius: "12px",
                fontWeight: 700,
                fontSize: "14px",
                letterSpacing: "0.5px",
                boxShadow: "0 4px 20px rgba(27,67,50,0.4)",
                border: "1px solid rgba(232,160,32,0.4)",
                transition: "all 0.3s ease",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 32px rgba(27,67,50,0.5)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 20px rgba(27,67,50,0.4)";
              }}
            >
              {/* Decorative corner */}
              <span style={{ fontSize: "13px" }}>🥛</span>
              <span>Order Now</span>
              {/* Small diamond accent */}
              <span style={{ color: "#F5BC4A", fontSize: "10px" }}>◆</span>
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="mobile-menu-btn"
            style={{
              display: "none",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "8px",
              flexDirection: "column",
              gap: "5px",
            }}
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  width: "24px",
                  height: "2px",
                  background: scrolled ? "#1B4332" : "white",
                  borderRadius: "2px",
                  transition: "all 0.3s ease",
                  transform:
                    menuOpen && i === 0
                      ? "rotate(45deg) translateY(7px)"
                      : menuOpen && i === 2
                      ? "rotate(-45deg) translateY(-7px)"
                      : "none",
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>

        {/* ── Bottom accent line ── */}
        <AccentLine scrolled={scrolled} />
      </motion.nav>

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(255,248,231,0.98)",
              backdropFilter: "blur(20px)",
              zIndex: 49,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "32px",
            }}
          >
            {/* Traditional decorative top in mobile menu */}
            <div style={{ position: "absolute", top: 0, left: 0, right: 0 }}>
              <TopBorder />
            </div>
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "14px",
                color: "#C4831A",
                letterSpacing: "3px",
                marginBottom: "8px",
              }}
            >
              ॐ  शुद्ध दूध  ॐ
            </div>
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                style={{
                  textDecoration: "none",
                  color: "#1B4332",
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700,
                  fontSize: "32px",
                }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#order"
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="btn-gold"
              style={{ textDecoration: "none" }}
            >
              <span>🥛 Order Now</span>
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        @media (max-width: 900px) {
          .hidden-mobile {
            display: none !important;
          }
          .mobile-menu-btn {
            display: flex !important;
          }
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #C4831A, #F5BC4A);
          border-radius: 2px;
          transition: width 0.3s ease;
        }
        .nav-link:hover::after {
          width: 100%;
        }
        .nav-link:hover {
          color: #E8A020 !important;
        }
      `}</style>
    </>
  );
}
