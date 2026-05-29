import type { Metadata } from "next";
import Order from "@/components/Order";

export const metadata: Metadata = {
  title: "Order Now | Naransh Dairy Farm — 3 Days Free Trial",
  description:
    "Start your Naransh Dairy Farm journey today with a 3-day free trial. No payment needed. Fill the form and get fresh A2 Desi Cow Milk delivered daily to your doorstep in Mathura, Vrindavan & Agra.",
};

export default function OrderPage() {
  return (
    <>
      <Order />
    </>
  );
}
