import type { Metadata } from "next";
import Products from "@/components/Products";
import Benefits from "@/components/Benefits";

export const metadata: Metadata = {
  title: "Products | Braj Pure — Fresh A2 Desi Cow Milk Daily",
  description:
    "Choose your daily delivery of pure A2 Desi Cow Milk — 500ml or 1 Litre. From purebred Gir cows, delivered fresh every morning. Start your 3-day free trial today.",
};

export default function ProductsPage() {
  return (
    <>
      <Products />
      <Benefits />
    </>
  );
}
