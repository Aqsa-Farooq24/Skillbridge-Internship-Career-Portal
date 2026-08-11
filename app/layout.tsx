import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import { Analytics } from "@vercel/analytics/react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "SkillBridge - Internship & Career Portal",
  description:
    "A modern internship and career portal for students and companies.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        poppins.variable,
        inter.variable
      )}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-[var(--font-poppins)]">
        <Navbar />
        <main className="flex-1 relative w-full min-w-0">
          {children}
          <Analytics />
        </main>
        <Footer />
      </body>
    </html>
  );
}