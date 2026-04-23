"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function Order() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    size: "500ml",
    quantity: "1",
    startDate: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const dailyPrice = formData.size === "500ml" ? 50 : 100;
  const monthlyTotal = dailyPrice * parseInt(formData.quantity || "1") * 30;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // WhatsApp redirect
    const msg = encodeURIComponent(
      `🥛 *New Braj Pure Order*\n\n` +
        `👤 Name: ${formData.name}\n` +
        `📱 Phone: ${formData.phone}\n` +
        `📍 Address: ${formData.address}\n` +
        `📦 Size: ${formData.size}\n` +
        `🔢 Quantity: ${formData.quantity} bottle/day\n` +
        `📅 Start Date: ${formData.startDate}\n` +
        `💰 Daily Cost: ₹${dailyPrice * parseInt(formData.quantity)}\n\n` +
        `Please confirm my 3-day FREE TRIAL! 🙏`
    );
    window.open(`https://wa.me/919999999999?text=${msg}`, "_blank");
    setSubmitted(true);
  };

  return (
    <section
      id="order"
      ref={ref}
      style={{
        padding: "100px 0",
        background: "linear-gradient(135deg, #1B4332 0%, #2D6A4F 60%, #1a3a28 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `radial-gradient(rgba(232,160,32,0.08) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "-100px",
          right: "-100px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(232,160,32,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px", position: "relative" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 16px",
                background: "rgba(232,160,32,0.2)",
                border: "1px solid rgba(232,160,32,0.4)",
                borderRadius: "999px",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "2.5px",
                textTransform: "uppercase",
                color: "#F5BC4A",
                marginBottom: "20px",
              }}
            >
              🎁 3 Days Free Trial
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
              color: "#FFF8E7",
              lineHeight: 1.2,
              marginBottom: "16px",
            }}
          >
            Start your Braj Pure journey
            <span
              style={{
                display: "block",
                background: "linear-gradient(135deg, #E8A020, #F5BC4A)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              today — no payment now
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            style={{ fontSize: "16px", color: "rgba(255,255,255,0.65)", maxWidth: "520px", margin: "0 auto" }}
          >
            Fill the form below and we&apos;ll send you a WhatsApp confirmation. Your first 3 days are completely free.
          </motion.p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 400px",
            gap: "40px",
            alignItems: "start",
          }}
          className="order-layout"
        >
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
            style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "32px",
              padding: "40px",
              border: "1px solid rgba(255,255,255,0.1)",
              backdropFilter: "blur(20px)",
            }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ textAlign: "center", padding: "40px 0" }}
              >
                <div style={{ fontSize: "64px", marginBottom: "20px" }}>🥛✅</div>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.8rem",
                    fontWeight: 800,
                    color: "#F5BC4A",
                    marginBottom: "12px",
                  }}
                >
                  Order Sent via WhatsApp!
                </h3>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "15px", lineHeight: 1.7 }}>
                  We&apos;ll confirm your 3-day free trial shortly. <br />
                  Check your WhatsApp for a message from us. 🙏
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "20px" }} className="form-grid">
                  {[
                    { id: "name", label: "Full Name", placeholder: "Rahul Sharma", type: "text", key: "name" },
                    { id: "phone", label: "WhatsApp Number", placeholder: "+91 98765 43210", type: "tel", key: "phone" },
                  ].map((field) => (
                    <div key={field.id}>
                      <label style={labelStyle}>{field.label}</label>
                      <input
                        id={field.id}
                        type={field.type}
                        placeholder={field.placeholder}
                        required
                        value={formData[field.key as keyof typeof formData]}
                        onChange={(e) => setFormData((p) => ({ ...p, [field.key]: e.target.value }))}
                        style={inputStyle}
                      />
                    </div>
                  ))}
                </div>

                <div style={{ marginBottom: "20px" }}>
                  <label style={labelStyle} htmlFor="address">Delivery Address</label>
                  <textarea
                    id="address"
                    placeholder="House/Flat No, Street, Locality, City — Mathura / Vrindavan / Agra"
                    required
                    rows={3}
                    value={formData.address}
                    onChange={(e) => setFormData((p) => ({ ...p, address: e.target.value }))}
                    style={{ ...inputStyle, resize: "none" }}
                  />
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "20px", marginBottom: "28px" }} className="form-grid-3">
                  <div>
                    <label style={labelStyle} htmlFor="size">Bottle Size</label>
                    <select
                      id="size"
                      value={formData.size}
                      onChange={(e) => setFormData((p) => ({ ...p, size: e.target.value }))}
                      style={inputStyle}
                    >
                      <option value="500ml">500ml — ₹50/day</option>
                      <option value="1L">1 Litre — ₹100/day</option>
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle} htmlFor="quantity">Qty / Day</label>
                    <select
                      id="quantity"
                      value={formData.quantity}
                      onChange={(e) => setFormData((p) => ({ ...p, quantity: e.target.value }))}
                      style={inputStyle}
                    >
                      {[1, 2, 3, 4].map((n) => (
                        <option key={n} value={n}>{n} bottle{n > 1 ? "s" : ""}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle} htmlFor="startDate">Start Date</label>
                    <input
                      id="startDate"
                      type="date"
                      required
                      value={formData.startDate}
                      onChange={(e) => setFormData((p) => ({ ...p, startDate: e.target.value }))}
                      style={inputStyle}
                    />
                  </div>
                </div>

                <button type="submit" className="btn-gold" style={{ width: "100%", justifyContent: "center", fontSize: "16px", padding: "18px 32px" }}>
                  <span>📱 Send Order via WhatsApp — Start Free Trial</span>
                </button>

                <p style={{ textAlign: "center", fontSize: "12px", color: "rgba(255,255,255,0.4)", marginTop: "16px" }}>
                  No payment required. We&apos;ll call you to confirm.
                </p>
              </form>
            )}
          </motion.div>

          {/* Summary panel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.45, duration: 0.7 }}
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            {/* Price breakdown */}
            <div
              style={{
                background: "rgba(232,160,32,0.12)",
                border: "1px solid rgba(232,160,32,0.3)",
                borderRadius: "24px",
                padding: "28px",
              }}
            >
              <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "2px", color: "#F5BC4A", marginBottom: "16px" }}>
                YOUR PLAN
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
                <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px" }}>Size</span>
                <span style={{ color: "white", fontWeight: 700, fontSize: "14px" }}>{formData.size}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
                <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px" }}>Quantity</span>
                <span style={{ color: "white", fontWeight: 700, fontSize: "14px" }}>{formData.quantity}/day</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
                <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px" }}>Daily cost</span>
                <span style={{ color: "white", fontWeight: 700, fontSize: "14px" }}>₹{dailyPrice * parseInt(formData.quantity)}</span>
              </div>
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", margin: "16px 0" }} />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: "#F5BC4A", fontWeight: 700 }}>Monthly total</span>
                <span
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.5rem",
                    fontWeight: 900,
                    color: "#F5BC4A",
                  }}
                >
                  ₹{monthlyTotal}
                </span>
              </div>
            </div>

            {/* Guarantees */}
            {[
              { icon: "🎁", title: "3 Days Free", desc: "No payment for first 3 deliveries" },
              { icon: "🚫", title: "Cancel Anytime", desc: "No lock-in. Stop whenever you want" },
              { icon: "⏰", title: "By 7am Daily", desc: "Fresh milk before you wake up" },
              { icon: "📱", title: "WhatsApp Support", desc: "Instant help, always available" },
            ].map((g) => (
              <div
                key={g.title}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  background: "rgba(255,255,255,0.05)",
                  borderRadius: "16px",
                  padding: "16px 20px",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div style={{ fontSize: "24px", flexShrink: 0 }}>{g.icon}</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "14px", color: "white" }}>{g.title}</div>
                  <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", marginTop: "2px" }}>{g.desc}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .order-layout {
            grid-template-columns: 1fr !important;
          }
          .form-grid {
            grid-template-columns: 1fr !important;
          }
          .form-grid-3 {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 500px) {
          .form-grid-3 {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "12px",
  fontWeight: 700,
  color: "rgba(255,255,255,0.6)",
  letterSpacing: "1px",
  marginBottom: "8px",
  textTransform: "uppercase",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "14px 18px",
  background: "rgba(255,255,255,0.08)",
  border: "1px solid rgba(255,255,255,0.15)",
  borderRadius: "14px",
  color: "white",
  fontSize: "15px",
  fontFamily: "Plus Jakarta Sans, sans-serif",
  outline: "none",
  transition: "border-color 0.2s ease, box-shadow 0.2s ease",
  colorScheme: "dark",
};
