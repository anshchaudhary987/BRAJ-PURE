"use client";

import { use, useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { productsData, ProductDetail } from "@/lib/products-data";
import Magnetic from "@/components/Magnetic";

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const unwrappedParams = use(params);
  const slug = unwrappedParams.slug;
  const searchParams = useSearchParams();
  const router = useRouter();

  // Retrieve the product
  const product: ProductDetail | undefined = productsData[slug];

  // Set default state values
  const [selectedSizeKey, setSelectedSizeKey] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

  // Initialize selected size based on query parameters or defaults
  useEffect(() => {
    if (!product) return;
    const sizeParam = searchParams.get("size");
    
    // Normalize sizeParam to match keys like "500ml", "1l", "500g", "250g"
    const validSizeParam = sizeParam && product.sizes[sizeParam] ? sizeParam : null;
    
    // If no valid param but we have a matching old name format (e.g. from Products card ID mapping)
    // we already mapped ID a2-500 -> size 500ml, a2-1l -> size 1l in Products.tsx,
    // so sizeParam will usually be "500ml" or "1l".
    if (validSizeParam) {
      setSelectedSizeKey(validSizeParam);
    } else {
      setSelectedSizeKey(product.defaultSize);
    }
  }, [searchParams, product]);

  if (!product) {
    return (
      <div style={{
        minHeight: "100vh",
        background: "#060A06",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 24px",
        textAlign: "center"
      }}>
        <div className="glass-premium" style={{ padding: "48px 40px", borderRadius: "28px", maxWidth: "480px" }}>
          <span style={{ fontSize: "3rem", display: "block", marginBottom: "16px" }}>🥛</span>
          <h1 style={{ fontFamily: "'Cinzel', serif", fontSize: "1.8rem", color: "#F0ECD8", marginBottom: "12px" }}>Product Not Found</h1>
          <p style={{ color: "rgba(240,236,216,0.5)", fontSize: "14px", lineHeight: 1.6, marginBottom: "28px" }}>
            The product you are looking for does not exist or has been moved. Check our home catalog.
          </p>
          <Link href="/" className="btn-gold" style={{ width: "100%", justifyContent: "center" }}>
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    );
  }

  const selectedSize = product.sizes[selectedSizeKey] || product.sizes[product.defaultSize];
  if (!selectedSize) return null; // Wait for state to sync

  // Update size parameter in URL when switched
  const handleSizeChange = (sizeKey: string) => {
    setSelectedSizeKey(sizeKey);
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set("size", sizeKey);
    router.replace(`/products/${product.slug}?${newParams.toString()}`);
  };

  const increaseQty = () => setQuantity((q) => Math.min(q + 1, 10));
  const decreaseQty = () => setQuantity((q) => Math.max(q - 1, 1));

  // WhatsApp click handler for quick queries
  const handleProductWhatsApp = () => {
    const msg = encodeURIComponent(
      `Hello Naransh Dairy Farm! I want to know more about ${product.name} (${selectedSize.sizeLabel}).`
    );
    window.open(`https://wa.me/919258831914?text=${msg}`, "_blank");
  };

  // Cross-sell products filter (exclude current)
  const crossSells = Object.values(productsData).filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <div style={{ background: "#060A06", minHeight: "100vh", position: "relative" }}>
      {/* Background elements */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `radial-gradient(rgba(212,160,23,0.04) 1px, transparent 1px)`,
        backgroundSize: "45px 45px",
        pointerEvents: "none",
        zIndex: 0
      }} />

      {/* Decorative Glow Orbs */}
      <div style={{ position: "absolute", top: "10%", left: "-10%", width: "500px", height: "500px", borderRadius: "50%", background: `radial-gradient(circle, ${product.accentColor}10 0%, transparent 70%)`, pointerEvents: "none", filter: "blur(50px)" }} />
      <div style={{ position: "absolute", top: "50%", right: "-10%", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(27,67,50,0.12) 0%, transparent 70%)", pointerEvents: "none", filter: "blur(60px)" }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "120px 24px 80px", position: "relative", zIndex: 1 }}>
        
        {/* Breadcrumbs */}
        <div style={{ marginBottom: "36px", fontSize: "13px", color: "rgba(240,236,216,0.4)", fontWeight: 500 }}>
          <Link href="/" style={{ color: "inherit", textDecoration: "none", transition: "color 0.2s" }} className="hover:text-[#D4A017]">Home</Link>
          <span style={{ margin: "0 10px" }}>/</span>
          <span style={{ color: "rgba(240,236,216,0.7)" }}>{product.name}</span>
        </div>

        {/* Hero Section Split Layout */}
        <div 
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.1fr",
            gap: "52px",
            alignItems: "start",
            marginBottom: "96px"
          }}
          className="pdp-hero-grid"
        >
          {/* Left Column: Image Card */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="traditional-border"
              style={{
                position: "relative",
                height: "480px",
                borderRadius: "28px",
                background: product.bgGradient,
                overflow: "hidden",
                boxShadow: "0 24px 80px rgba(0,0,0,0.5)"
              }}
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                style={{ objectFit: "cover" }}
              />
              {/* Bottom shade gradient */}
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0, height: "100px",
                background: "linear-gradient(to top, rgba(6,10,6,0.8), transparent)"
              }} />
              {/* Overlay Badge */}
              <div style={{
                position: "absolute", top: "24px", left: "24px",
                background: product.badgeGradient,
                color: product.badgeTextColor,
                padding: "6px 16px",
                borderRadius: "999px",
                fontSize: "12px",
                fontWeight: 800,
                letterSpacing: "0.5px"
              }}>
                {product.badge}
              </div>
            </motion.div>

            {/* Quick trust stamps below image */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "12px"
            }}>
              {[
                { title: "Glass Bottle", icon: "🥛", desc: "No Plastic" },
                { title: "Raw & Fresh", icon: "🌱", desc: "Unpasteurized" },
                { title: "A2 Protein", icon: "🧬", desc: "Easy Gut" }
              ].map((item, idx) => (
                <div 
                  key={idx}
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.05)",
                    borderRadius: "16px",
                    padding: "12px 8px",
                    textAlign: "center"
                  }}
                >
                  <div style={{ fontSize: "1.4rem", marginBottom: "4px" }}>{item.icon}</div>
                  <div style={{ fontSize: "11px", fontWeight: 700, color: "#F0ECD8" }}>{item.title}</div>
                  <div style={{ fontSize: "9px", color: "rgba(240,236,216,0.35)", marginTop: "2px" }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Content and Selectors */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "2.5px", color: product.accentColor, textTransform: "uppercase", marginBottom: "10px", fontFamily: "'Cinzel', serif" }}>
              Naransh Dairy Farm — Premium Selection
            </span>
            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              fontWeight: 900,
              color: "#F0ECD8",
              lineHeight: 1.1,
              marginBottom: "16px"
            }}>
              {product.name}
            </h1>

            {/* Ratings strip */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "22px" }}>
              <div style={{ display: "flex", color: "#D4A017", gap: "2px", fontSize: "15px" }}>
                {"★".repeat(5)}
              </div>
              <span style={{ fontSize: "13px", color: "rgba(240,236,216,0.5)", fontWeight: 500 }}>
                5.0 (140+ families verified)
              </span>
            </div>

            {/* Price display */}
            <div style={{
              display: "flex",
              alignItems: "baseline",
              gap: "12px",
              background: "rgba(212,160,23,0.04)",
              border: "1px solid rgba(212,160,23,0.1)",
              borderRadius: "18px",
              padding: "16px 24px",
              alignSelf: "flex-start",
              marginBottom: "28px"
            }}>
              <span style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "2.2rem",
                fontWeight: 900,
                color: product.accentColor
              }}>
                ₹{selectedSize.price}
              </span>
              <span style={{ fontSize: "14px", color: "rgba(240,236,216,0.45)", fontWeight: 500 }}>
                {product.isSubscription ? "per day (billed monthly)" : "per unit"}
              </span>
            </div>

            {/* Description */}
            <p style={{
              fontSize: "15px",
              color: "rgba(240,236,216,0.65)",
              lineHeight: 1.8,
              marginBottom: "32px"
            }}>
              {product.shortDesc}
            </p>

            {/* Size Selector */}
            <div style={{ marginBottom: "24px" }}>
              <label style={{
                display: "block", fontSize: "11px", fontWeight: 700, letterSpacing: "1px",
                color: "rgba(255,255,255,0.45)", textTransform: "uppercase", marginBottom: "10px"
              }}>
                Select Bottle / Pack Size:
              </label>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                {Object.entries(product.sizes).map(([key, sizeDetails]) => {
                  const isActive = selectedSizeKey === key;
                  return (
                    <button
                      key={key}
                      onClick={() => handleSizeChange(key)}
                      style={{
                        padding: "12px 24px",
                        borderRadius: "14px",
                        background: isActive ? product.accentColor : "rgba(255,255,255,0.03)",
                        color: isActive ? "#0A0A0A" : "#F0ECD8",
                        border: isActive ? `1px solid ${product.accentColor}` : "1px solid rgba(255,255,255,0.1)",
                        fontSize: "13.5px",
                        fontWeight: 700,
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        boxShadow: isActive ? `0 4px 16px ${product.accentColor}30` : "none"
                      }}
                    >
                      {sizeDetails.sizeLabel} — ₹{sizeDetails.price}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quantity Selector */}
            <div style={{ marginBottom: "36px" }}>
              <label style={{
                display: "block", fontSize: "11px", fontWeight: 700, letterSpacing: "1px",
                color: "rgba(255,255,255,0.45)", textTransform: "uppercase", marginBottom: "10px"
              }}>
                Daily Quantity Needed:
              </label>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "14px",
                  overflow: "hidden"
                }}>
                  <button 
                    onClick={decreaseQty}
                    style={{ padding: "12px 20px", background: "transparent", border: "none", color: "#F0ECD8", fontSize: "18px", fontWeight: 700, cursor: "pointer", transition: "background 0.2s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.05)")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                  >
                    −
                  </button>
                  <span style={{ width: "40px", textAlign: "center", fontWeight: 700, fontSize: "16px", color: "#F0ECD8" }}>
                    {quantity}
                  </span>
                  <button 
                    onClick={increaseQty}
                    style={{ padding: "12px 20px", background: "transparent", border: "none", color: "#F0ECD8", fontSize: "18px", fontWeight: 700, cursor: "pointer", transition: "background 0.2s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.05)")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                  >
                    +
                  </button>
                </div>
                <span style={{ fontSize: "13px", color: "rgba(240,236,216,0.4)" }}>
                  {product.isSubscription ? "bottles delivered every morning" : "packs in your order"}
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginBottom: "20px" }}>
              <Magnetic style={{ flex: 1.3, display: "flex" }}>
                <Link 
                  href={`/order?size=${selectedSize.id}&quantity=${quantity}`}
                  className="btn-gold" 
                  style={{ width: "100%", justifyContent: "center", padding: "16px 36px" }}
                >
                  <span>
                    {product.isSubscription ? "Start 3 Days Free Trial" : "Order Now"}
                  </span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
              </Magnetic>
              <Magnetic style={{ display: "flex" }}>
                <button 
                  onClick={handleProductWhatsApp}
                  className="btn-outline" 
                  style={{ width: "100%", padding: "16px 28px", display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005 0-3.974-.5-5.729-1.448L0 24zm6.59-4.017c1.52.9 3.088 1.375 4.946 1.378 5.58.003 10.118-4.519 10.121-10.111.002-2.71-1.05-5.257-2.96-7.17-1.91-1.912-4.45-2.965-7.161-2.967-5.59 0-10.129 4.52-10.133 10.115-.001 1.892.493 3.738 1.433 5.345l-.968 3.535 3.622-.925z" />
                  </svg>
                  <span>Ask on WhatsApp</span>
                </button>
              </Magnetic>
            </div>

            {/* Delivery Info Strip */}
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontSize: "13px",
              color: "rgba(240,236,216,0.5)"
            }}>
              <span>🚚</span>
              <span><strong>Mathura, Vrindavan & Agra:</strong> Delivery by 7:00 AM daily. Pause anytime.</span>
            </div>

          </motion.div>
        </div>

        {/* Section 2: Product Story & Purity Standards */}
        <section style={{ marginBottom: "96px" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <span className="section-tag">Purity Guarantee</span>
            <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: "2rem", fontWeight: 800, color: "#F0ECD8", marginTop: "8px" }}>
              How we keep it pure
            </h2>
          </div>
          
          <div 
            style={{
              display: "grid",
              gridTemplateColumns: "1.2fr 1fr",
              gap: "60px",
              alignItems: "center"
            }}
            className="pdp-story-grid"
          >
            <div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", color: product.accentColor, marginBottom: "16px" }}>
                Standard of Excellence in Dairy Farming
              </h3>
              <p style={{ color: "rgba(240,236,216,0.6)", fontSize: "14.5px", lineHeight: 1.8, marginBottom: "20px" }}>
                {product.longDesc}
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginTop: "32px" }}>
                {product.highlights.map((h, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div style={{ color: product.accentColor, fontSize: "16px" }}>✓</div>
                    <span style={{ fontSize: "13.5px", fontWeight: 600, color: "#F0ECD8" }}>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Glassmorphic Features Card */}
            <div className="glass-premium" style={{ padding: "40px", borderRadius: "24px", border: `1px solid rgba(212,160,23,0.15)` }}>
              <h4 style={{ fontFamily: "'Cinzel', serif", fontSize: "1.1rem", color: "#F0ECD8", letterSpacing: "1px", marginBottom: "24px", textTransform: "uppercase" }}>
                Product Highlights
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {product.features.map((f, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
                    <div style={{
                      width: "8px", height: "8px", borderRadius: "50%", background: product.accentColor, marginTop: "8px", flexShrink: 0
                    }} />
                    <p style={{ fontSize: "13.5px", color: "rgba(240,236,216,0.65)", lineHeight: 1.5 }}>{f}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Nutritional Profile */}
        <section style={{ marginBottom: "96px" }}>
          <div className="glass-premium" style={{ padding: "48px 40px", borderRadius: "28px", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: "-50px", right: "-50px", width: "180px", height: "180px", borderRadius: "50%", background: `radial-gradient(circle, ${product.accentColor}10, transparent)`, pointerEvents: "none" }} />
            
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "40px", alignItems: "center" }} className="pdp-nutrition-grid">
              <div>
                <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "2.5px", color: product.accentColor, textTransform: "uppercase", fontFamily: "'Cinzel', serif" }}>
                  LAB VERIFIED
                </span>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8rem", color: "#F0ECD8", marginTop: "8px", marginBottom: "16px" }}>
                  Nutritional Value
                </h3>
                <p style={{ color: "rgba(240,236,216,0.45)", fontSize: "13.5px", lineHeight: 1.7 }}>
                  Our cows consume grass and natural herbs on our farm, translating into highly bio-available nutrients that nourish you deeply.
                </p>
                <div style={{ fontSize: "11px", color: "rgba(240,236,216,0.3)", marginTop: "24px" }}>
                  *Values measured per 250ml serving. Individual batches may vary slightly.
                </div>
              </div>

              <div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  {product.nutritionFacts.map((n, i) => (
                    <div 
                      key={i}
                      style={{
                        background: "rgba(255,255,255,0.02)",
                        border: "1px solid rgba(255,255,255,0.05)",
                        borderRadius: "16px",
                        padding: "20px",
                        textAlign: "center",
                        transition: "all 0.3s ease"
                      }}
                      className="hover:border-rgba(212,160,23,0.3)"
                    >
                      <div style={{ fontFamily: "'Cinzel', serif", fontSize: "1.8rem", fontWeight: 900, color: product.accentColor }}>
                        {n.val}
                      </div>
                      <div style={{ fontSize: "11px", color: "rgba(240,236,216,0.4)", fontWeight: 600, letterSpacing: "0.5px", textTransform: "uppercase", marginTop: "4px" }}>
                        {n.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: timeline journey */}
        <section style={{ marginBottom: "96px" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <span className="section-tag">Freshness timeline</span>
            <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: "2rem", fontWeight: 800, color: "#F0ECD8", marginTop: "8px" }}>
              Milked at 4 AM. At your door by 7 AM.
            </h2>
            <p style={{ color: "rgba(240,236,216,0.45)", fontSize: "14.5px", marginTop: "12px" }}>
              We keep the cold chain unbroken so you taste maximum natural sweetness.
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "24px"
          }} className="pdp-timeline-grid">
            {product.purityTimeline.map((step, idx) => (
              <div key={idx} style={{ position: "relative" }}>
                {/* Horizontal line connector */}
                {idx < 3 && (
                  <div style={{
                    position: "absolute",
                    top: "32px", left: "60%", right: "-40%",
                    height: "1px",
                    background: "linear-gradient(90deg, rgba(212,160,23,0.3), transparent)",
                    zIndex: 0
                  }} className="hide-mobile" />
                )}
                
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", position: "relative", zIndex: 1 }}>
                  <div style={{
                    width: "64px", height: "64px",
                    borderRadius: "50%",
                    background: idx === 3 ? product.accentColor : "rgba(255,255,255,0.03)",
                    border: idx === 3 ? `1px solid ${product.accentColor}` : "1px solid rgba(255,255,255,0.1)",
                    color: idx === 3 ? "#0A0A0A" : product.accentColor,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontWeight: 900,
                    fontSize: "12.5px",
                    fontFamily: "'Cinzel', serif",
                    marginBottom: "16px",
                    boxShadow: idx === 3 ? `0 0 30px ${product.accentColor}30` : "none"
                  }}>
                    {step.time.split(" ")[0]}
                  </div>
                  <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1rem", color: "#F0ECD8", fontWeight: 700, marginBottom: "8px" }}>
                    {step.label}
                  </h4>
                  <p style={{ fontSize: "12px", color: "rgba(240,236,216,0.4)", lineHeight: 1.6, padding: "0 8px" }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: FAQs */}
        <section style={{ marginBottom: "96px", maxWidth: "800px", margin: "0 auto 96px" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <span className="section-tag">Frequently asked questions</span>
            <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: "2rem", fontWeight: 800, color: "#F0ECD8", marginTop: "8px" }}>
              Got Questions?
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {product.faqs.map((faq, idx) => {
              const isOpen = activeFAQ === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveFAQ(isOpen ? null : idx)}
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: isOpen ? `1px solid ${product.accentColor}35` : "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "18px",
                    cursor: "pointer",
                    overflow: "hidden",
                    transition: "all 0.3s ease"
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 24px" }}>
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.05rem", fontWeight: 700, color: isOpen ? product.accentColor : "#F0ECD8" }}>
                      {faq.q}
                    </h3>
                    <span style={{
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.3s ease",
                      color: isOpen ? product.accentColor : "rgba(255,255,255,0.4)"
                    }}>
                      ▼
                    </span>
                  </div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <p style={{ padding: "0 24px 20px", fontSize: "13.5px", color: "rgba(240,236,216,0.5)", lineHeight: 1.7 }}>
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 6: Cross-sell carousel */}
        <section style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "80px" }}>
          <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: "1.5rem", color: "#F0ECD8", fontWeight: 800, marginBottom: "36px", textAlign: "center" }}>
            Explore other dairy creations
          </h3>
          
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px"
          }} className="pdp-cross-grid">
            {crossSells.map((p, idx) => (
              <Link 
                key={idx}
                href={`/products/${p.slug}`}
                style={{ textDecoration: "none", color: "inherit", display: "block" }}
              >
                <div 
                  className="card-dark"
                  style={{
                    borderRadius: "20px",
                    overflow: "hidden",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column"
                  }}
                >
                  <div style={{ height: "180px", position: "relative", background: p.bgGradient }}>
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div style={{ padding: "20px", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <div>
                      <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", fontWeight: 800, color: "#F0ECD8", marginBottom: "8px" }}>
                        {p.name}
                      </h4>
                      <p style={{ fontSize: "12px", color: "rgba(240,236,216,0.45)", lineHeight: 1.5, marginBottom: "16px" }}>
                        {p.shortDesc.slice(0, 80)}...
                      </p>
                    </div>
                    
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontSize: "13px", fontWeight: 700, color: p.accentColor }}>
                        ₹{Object.values(p.sizes)[0].price}+
                      </span>
                      <span style={{ fontSize: "11px", fontWeight: 700, color: "rgba(240,236,216,0.6)" }}>
                        Explore →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

      </div>

      {/* Embedded CSS for responsive overrides */}
      <style>{`
        @media (max-width: 900px) {
          .pdp-hero-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
          .pdp-story-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .pdp-nutrition-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .pdp-timeline-grid { grid-template-columns: 1fr 1fr !important; gap: 32px 16px !important; }
          .pdp-cross-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 500px) {
          .pdp-timeline-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
