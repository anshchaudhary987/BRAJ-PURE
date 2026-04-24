"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Why A2?",     href: "/#why-a2" },
  { label: "Our Story",   href: "/story" },
  { label: "Products",    href: "/products" },
  { label: "Benefits",    href: "/products#benefits" },
  { label: "Testimonials",href: "/#testimonials" },
];

const LeafIcon = ({ size = 20, color = "#D4A017" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75" />
  </svg>
);

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href.split("#")[0]) && href.split("#")[0] !== "/";
  };

  return (
    <>
      <motion.nav
        initial={{ y: -90, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 50,
          transition: "all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          background: scrolled
            ? "rgba(6,10,6,0.9)"
            : "transparent",
          backdropFilter: scrolled ? "blur(32px) saturate(180%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(32px) saturate(180%)" : "none",
          boxShadow: scrolled ? "0 4px 40px rgba(0,0,0,0.5), 0 1px 0 rgba(212,160,23,0.12)" : "none",
        }}
      >
        {/* Gold accent line */}
        <div style={{
          width: "100%",
          height: "1px",
          background: scrolled
            ? "linear-gradient(90deg, transparent, rgba(212,160,23,0.5), transparent)"
            : "linear-gradient(90deg, transparent, rgba(212,160,23,0.2), transparent)",
          transition: "background 0.5s ease",
        }} />

        <div style={{
          maxWidth: "1300px",
          margin: "0 auto",
          padding: scrolled ? "12px 32px" : "20px 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          transition: "padding 0.4s ease",
        }}>
          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none" }}>
            <motion.div
              whileHover={{ scale: 1.03 }}
              style={{ display: "flex", alignItems: "center", gap: "13px" }}
            >
              <div style={{
                width: "42px",
                height: "42px",
                borderRadius: "13px",
                background: "linear-gradient(135deg, #1B4332 0%, #2D6A4F 100%)",
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 4px 20px rgba(212,160,23,0.25), inset 0 1px 0 rgba(255,255,255,0.08)",
                border: "1px solid rgba(212,160,23,0.2)",
                flexShrink: 0,
              }}>
                <LeafIcon size={20} color="#D4A017" />
              </div>

              <div>
                <div style={{
                  fontFamily: "'Cinzel', serif",
                  fontWeight: 700,
                  fontSize: "20px",
                  lineHeight: 1,
                  letterSpacing: "1.5px",
                  color: "#F0ECD8",
                  transition: "color 0.4s ease",
                }}>
                  Braj{" "}
                  <span style={{
                    background: "linear-gradient(135deg, #D4A017, #F5CC55)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}>
                    Pure
                  </span>
                </div>
                <div style={{
                  fontSize: "9px",
                  fontWeight: 600,
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  color: "rgba(212,160,23,0.6)",
                  marginTop: "3px",
                }}>
                  A2 Desi Cow Milk
                </div>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Nav */}
          <div className="hide-mobile" style={{ display: "flex", alignItems: "center", gap: "36px" }}>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                style={{
                  textDecoration: "none",
                  color: isActive(link.href) ? "#D4A017" : "rgba(240,236,216,0.7)",
                  fontWeight: isActive(link.href) ? 700 : 500,
                  fontSize: "14px",
                  letterSpacing: "0.4px",
                  position: "relative",
                  padding: "6px 0",
                  transition: "color 0.3s ease",
                }}
                className="nav-link-dark"
              >
                {link.label}
                {isActive(link.href) && (
                  <motion.span
                    layoutId="activeIndicator"
                    style={{
                      position: "absolute",
                      bottom: "-2px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "4px",
                      height: "4px",
                      borderRadius: "50%",
                      background: "#D4A017",
                      boxShadow: "0 0 8px rgba(212,160,23,0.8)",
                    }}
                  />
                )}
              </Link>
            ))}

            <Link
              href="/order"
              className="btn-gold"
              style={{ padding: "10px 22px", fontSize: "13px" }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
              </svg>
              <span>Order Now</span>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="hide-desktop"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "8px",
              display: "flex",
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
                  background: "#D4A017",
                  borderRadius: "2px",
                  transition: "all 0.3s ease",
                  transform:
                    menuOpen && i === 0 ? "rotate(45deg) translateY(7px)" :
                    menuOpen && i === 2 ? "rotate(-45deg) translateY(-7px)" : "none",
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              style={{
                position: "fixed", inset: 0,
                background: "rgba(0,0,0,0.6)",
                backdropFilter: "blur(4px)",
                zIndex: 49,
              }}
            />
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{
                position: "fixed",
                top: 0, right: 0, bottom: 0,
                width: "min(80vw, 380px)",
                background: "linear-gradient(160deg, #0E1A0E, #0A110A)",
                backdropFilter: "blur(40px)",
                zIndex: 51,
                display: "flex",
                flexDirection: "column",
                padding: "100px 36px 40px",
                gap: "4px",
                boxShadow: "-20px 0 80px rgba(0,0,0,0.6)",
                borderLeft: "1px solid rgba(212,160,23,0.15)",
              }}
            >
              {/* Close */}
              <button
                onClick={() => setMenuOpen(false)}
                style={{
                  position: "absolute", top: "24px", right: "24px",
                  background: "rgba(212,160,23,0.1)",
                  border: "1px solid rgba(212,160,23,0.2)",
                  borderRadius: "10px",
                  width: "38px", height: "38px",
                  cursor: "pointer",
                  fontSize: "18px",
                  color: "#D4A017",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}
              >
                ✕
              </button>

              <div style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "10px",
                color: "rgba(212,160,23,0.5)",
                letterSpacing: "4px",
                marginBottom: "20px",
              }}>
                NAVIGATION
              </div>

              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 + 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    style={{
                      textDecoration: "none",
                      color: isActive(link.href) ? "#D4A017" : "rgba(240,236,216,0.75)",
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: 700,
                      fontSize: "26px",
                      padding: "14px 0",
                      borderBottom: "1px solid rgba(255,255,255,0.05)",
                      display: "block",
                      transition: "color 0.2s ease",
                    }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                style={{ marginTop: "28px" }}
              >
                <Link
                  href="/order"
                  onClick={() => setMenuOpen(false)}
                  className="btn-gold"
                  style={{ justifyContent: "center", display: "flex" }}
                >
                  <span>Start Free Trial</span>
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style>{`
        .nav-link-dark::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          width: 0; height: 1px;
          background: linear-gradient(90deg, #D4A017, #F5CC55);
          border-radius: 2px;
          transition: width 0.3s ease;
        }
        .nav-link-dark:hover::after { width: 100%; }
        .nav-link-dark:hover { color: #E8B835 !important; }
      `}</style>
    </>
  );
}
