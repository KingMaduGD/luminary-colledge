import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Luminary College | Illuminating Futures, Shaping Greatness",
    template: "%s | Luminary College",
  },
  description:
    "Luminary College, Abuja — a multi-award winning secondary school dedicated to academic excellence, character development, and shaping the leaders of tomorrow.",
  keywords: [
    "Luminary College",
    "secondary school Abuja",
    "best school FCT",
    "WAEC results",
    "admissions 2025",
  ],
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://luminarycollege.edu.ng",
    siteName: "Luminary College",
    images: [
      {
        url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

