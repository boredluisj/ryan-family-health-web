import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ryan Family Health | Premium Weight Loss & Medical Clinic",
  description: "Advanced medical weight loss, comprehensive family care, and wellness therapies in a state-of-the-art facility. Featuring board-certified providers Michelle Ryan FNP-C & Brooke McBride FNP-C.",
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased bg-surface text-dark font-sans selection:bg-primary-500/30`}
      >
        <SmoothScroll>
          <Navbar />
          <main className="min-h-screen pt-24">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
