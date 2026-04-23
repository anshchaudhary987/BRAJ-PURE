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

/* ─── Leaf SVG Icon ─── */
const LeafIcon = ({ size = 20, color = "#FFF8E7" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75" />
  </svg>
);

/* ─── Arrow Icon for CTA ─── */
const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
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
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: "all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          background: scrolled ? "rgba(255,248,231,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(30px) saturate(180%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(30px) saturate(180%)" : "none",
          boxShadow: scrolled ? "0 4px 40px rgba(27,67,50,0.08)" : "none",
        }}
      >
        {/* Thin gold accent line at top */}
        <div
          style={{
            width: "100%",
            height: "2px",
            background: scrolled
              ? "linear-gradient(90deg, var(--forest), var(--saffron), var(--forest))"
              : "linear-gradient(90deg, transparent, rgba(232,160,32,0.5), transparent)",
            transition: "background 0.5s ease",
          }}
        />

        {/* Main navbar row */}
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: scrolled ? "10px 28px" : "18px 28px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            transition: "padding 0.4s ease",
          }}
        >
          {/* Logo */}
          <a href="#" style={{ textDecoration: "none" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "14px",
                  background: "linear-gradient(135deg, #1B4332 0%, #2D6A4F 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 16px rgba(27,67,50,0.35), inset 0 1px 0 rgba(255,255,255,0.15)",
                }}
              >
                <LeafIcon size={22} color="#F5BC4A" />
              </div>

              <div>
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
                <div
                  style={{
                    fontSize: "10px",
                    fontWeight: 700,
                    letterSpacing: "2.5px",
                    textTransform: "uppercase",
                    color: scrolled ? "#6B7280" : "rgba(253,252,250,0.55)",
                    transition: "color 0.4s ease",
                    marginTop: "3px",
                  }}
                >
                  A2 Desi Cow Milk
                </div>
              </div>
            </div>
          </a>

          {/* Desktop Nav links */}
          <div
            className="hidden-mobile"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "32px",
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
                  padding: "6px 0",
                  transition: "color 0.3s ease",
                }}
              >
                {link.label}
              </a>
            ))}

            <a
              href="#order"
              className="nav-cta"
              style={{
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "10px 24px",
                background: "linear-gradient(135deg, #1B4332, #2D6A4F)",
                color: "white",
                borderRadius: "50px",
                fontWeight: 700,
                fontSize: "14px",
                letterSpacing: "0.5px",
                boxShadow: "0 4px 20px rgba(27,67,50,0.4)",
                transition: "all 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <span>Order Now</span>
              <ArrowRight />
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
      </motion.nav>

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              bottom: 0,
              width: "min(85vw, 400px)",
              background: "rgba(255,248,231,0.98)",
              backdropFilter: "blur(30px)",
              zIndex: 51,
              display: "flex",
              flexDirection: "column",
              padding: "100px 40px 40px",
              gap: "8px",
              boxShadow: "-20px 0 60px rgba(0,0,0,0.1)",
            }}
          >
            {/* Close button */}
            <button
              onClick={() => setMenuOpen(false)}
              style={{
                position: "absolute",
                top: "24px",
                right: "24px",
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: "28px",
                color: "#1B4332",
                fontWeight: 300,
              }}
            >
              ✕
            </button>

            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "13px",
                color: "#C4831A",
                letterSpacing: "3px",
                marginBottom: "16px",
                fontWeight: 600,
              }}
            >
              MENU
            </div>

            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 + 0.1 }}
                style={{
                  textDecoration: "none",
                  color: "#1B4332",
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700,
                  fontSize: "28px",
                  padding: "12px 0",
                  borderBottom: "1px solid rgba(27,67,50,0.08)",
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
              style={{ textDecoration: "none", marginTop: "24px", justifyContent: "center" }}
            >
              <span>Order Now</span>
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay when mobile menu is open */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.3)",
              zIndex: 50,
            }}
          />
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
        .nav-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(27,67,50,0.5);
        }
      `}</style>
    </>
  );
}
