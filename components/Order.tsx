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
        padding: "120px 0 100px",
        background: "linear-gradient(135deg, #030705 0%, #060E08 30%, #0A1A0D 60%, #05090A 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `radial-gradient(rgba(232,160,32,0.06) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "-100px",
          right: "-100px",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(232,160,32,0.1) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-80px",
          left: "-80px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(45,106,79,0.15) 0%, transparent 70%)",
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
                padding: "8px 20px",
                background: "rgba(232,160,32,0.15)",
                border: "1px solid rgba(232,160,32,0.3)",
                borderRadius: "999px",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "2.5px",
                textTransform: "uppercase",
                color: "#F5BC4A",
                marginBottom: "20px",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F5BC4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4" /><path d="M4 6v12c0 1.1.9 2 2 2h14v-4" /><path d="M18 12a2 2 0 0 0-2 2c0 1.1.9 2 2 2h4v-4h-4z" />
              </svg>
              3 Days Free Trial
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "clamp(1.8rem, 3.5vw, 3.2rem)",
              fontWeight: 800,
              color: "#F0ECD8",
              lineHeight: 1.15,
              marginBottom: "16px",
              letterSpacing: "-0.3px",
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
            style={{ fontSize: "16px", color: "rgba(255,255,255,0.6)", maxWidth: "520px", margin: "0 auto" }}
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
              background: "rgba(255,255,255,0.06)",
              borderRadius: "32px",
              padding: "40px",
              border: "1px solid rgba(255,255,255,0.1)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
            }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ textAlign: "center", padding: "40px 0" }}
              >
                <div style={{ marginBottom: "20px" }}>
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#F5BC4A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ margin: "0 auto" }}>
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <path d="m9 11 3 3L22 4" />
                  </svg>
                </div>
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
                <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "15px", lineHeight: 1.7 }}>
                  We&apos;ll confirm your 3-day free trial shortly. <br />
                  Check your WhatsApp for a message from us.
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

                <button
                  type="submit"
                  className="btn-gold"
                  style={{ width: "100%", justifyContent: "center", fontSize: "16px", padding: "18px 32px" }}
                >
                  <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 2 11 13" /><path d="m22 2-7 20-4-9-9-4z" />
                    </svg>
                    Send Order via WhatsApp — Start Free Trial
                  </span>
                </button>

                <p style={{ textAlign: "center", fontSize: "12px", color: "rgba(255,255,255,0.35)", marginTop: "16px" }}>
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
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            {/* Price breakdown */}
            <div
              style={{
                background: "rgba(232,160,32,0.1)",
                border: "1px solid rgba(232,160,32,0.25)",
                borderRadius: "24px",
                padding: "28px",
              }}
            >
              <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "2.5px", color: "#D4A017", marginBottom: "16px", fontFamily: "'Cinzel', serif" }}>
                YOUR PLAN
              </div>
              {[
                { label: "Size", value: formData.size },
                { label: "Quantity", value: `${formData.quantity}/day` },
                { label: "Daily cost", value: `₹${dailyPrice * parseInt(formData.quantity)}` },
              ].map((row) => (
                <div key={row.label} style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
                  <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "14px" }}>{row.label}</span>
                  <span style={{ color: "white", fontWeight: 700, fontSize: "14px" }}>{row.value}</span>
                </div>
              ))}
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", margin: "16px 0" }} />
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ color: "#D4A017", fontWeight: 700 }}>Monthly total</span>
                <span
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: "1.5rem",
                    fontWeight: 900,
                    color: "#D4A017",
                  }}
                >
                  ₹{monthlyTotal}
                </span>
              </div>
            </div>

            {/* Guarantees */}
            {[
              { title: "3 Days Free", desc: "No payment for first 3 deliveries", iconPath: "M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4M4 6v12c0 1.1.9 2 2 2h14v-4M18 12a2 2 0 0 0-2 2c0 1.1.9 2 2 2h4v-4h-4z" },
              { title: "Cancel Anytime", desc: "No lock-in. Stop whenever you want", iconPath: "M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636" },
              { title: "By 7am Daily", desc: "Fresh milk before you wake up", iconPath: "M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83" },
              { title: "WhatsApp Support", desc: "Instant help, always available", iconPath: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" },
            ].map((g) => (
              <div
                key={g.title}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  background: "rgba(255,255,255,0.04)",
                  borderRadius: "16px",
                  padding: "16px 20px",
                  border: "1px solid rgba(255,255,255,0.06)",
                  transition: "all 0.3s ease",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "12px",
                    background: "rgba(232,160,32,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F5BC4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={g.iconPath} />
                  </svg>
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "14px", color: "white" }}>{g.title}</div>
                  <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.45)", marginTop: "2px" }}>{g.desc}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
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
  color: "rgba(255,255,255,0.55)",
  letterSpacing: "1px",
  marginBottom: "8px",
  textTransform: "uppercase",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "14px 18px",
  background: "rgba(255,255,255,0.07)",
  border: "1px solid rgba(255,255,255,0.12)",
  borderRadius: "14px",
  color: "white",
  fontSize: "15px",
  fontFamily: "Plus Jakarta Sans, sans-serif",
  outline: "none",
  transition: "border-color 0.3s ease, box-shadow 0.3s ease, background 0.3s ease",
  colorScheme: "dark",
};
