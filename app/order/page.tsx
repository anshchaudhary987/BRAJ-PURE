import { Suspense } from "react";
import type { Metadata } from "next";
import Order from "@/components/Order";

export const metadata: Metadata = {
  title: "Order Now | Naransh Dairy Farm — 3 Days Free Trial",
  description:
    "Start your Naransh Dairy Farm journey today with a 3-day free trial. No payment needed. Fill the form and get fresh A2 Desi Cow Milk delivered daily to your doorstep in Mathura, Vrindavan & Agra.",
};

export default function OrderPage() {
  return (
    <Suspense
      fallback={
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", background: "#030705" }}>
          <div className="glass-premium" style={{ padding: "40px 60px", borderRadius: "24px", textAlign: "center" }}>
            <div style={{ width: "50px", height: "50px", border: "3px solid rgba(212,160,23,0.1)", borderTopColor: "#D4A017", borderRadius: "50%", animation: "spin-center 1s linear infinite", margin: "0 auto 20px" }} />
            <div style={{ color: "#F0ECD8", fontWeight: 600, fontSize: "16px", fontFamily: "'Cinzel', serif" }}>Loading Order Form...</div>
          </div>
        </div>
      }
    >
      <Order />
    </Suspense>
  );
}
