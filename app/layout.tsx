import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Braj Pure | A2 Desi Cow Milk — Pure. Natural. Powerful.",
  description:
    "Braj Pure delivers farm-fresh A2 Desi Cow Milk straight to your door in Mathura, Vrindavan & Agra. No additives, no preservatives — just 100% pure goodness from our Gir cows.",
  keywords: "A2 milk, desi cow milk, Braj Pure, pure milk, Mathura milk, Vrindavan, organic milk, health milk",
  openGraph: {
    title: "Braj Pure | A2 Desi Cow Milk",
    description: "Farm-fresh A2 Desi Cow Milk delivered daily. Pure, natural, unadulterated.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
