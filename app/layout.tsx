import type { Metadata } from "next";
import Link from "next/link";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

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

        <nav className="bg-[#081C2B] border-b border-[#D4C08A] shadow-md">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-5 px-6 py-4">

            <Link
              href="/"
              className="font-bold text-2xl tracking-wide text-[#D4C08A] mr-4"
            >
              SkillBridge
            </Link>


            <Link 
              href="/"
              className="text-white hover:text-[#D4C08A] transition"
            >
              Home
            </Link>

            <Link 
              href="/about"
              className="text-white hover:text-[#D4C08A] transition"
            >
              About
            </Link>

            <Link 
              href="/internship"
              className="text-white hover:text-[#D4C08A] transition"
            >
              Internships
            </Link>

            <Link 
              href="/jobs"
              className="text-white hover:text-[#D4C08A] transition"
            >
              Jobs
            </Link>

            <Link 
              href="/companies"
              className="text-white hover:text-[#D4C08A] transition"
            >
              Companies
            </Link>

            <Link 
              href="/dashboard"
              className="text-white hover:text-[#D4C08A] transition"
            >
              Dashboard
            </Link>

            <Link 
              href="/profile"
              className="text-white hover:text-[#D4C08A] transition"
            >
              Profile
            </Link>

            <Link 
              href="/contact"
              className="text-white hover:text-[#D4C08A] transition"
            >
              Contact
            </Link>

            <Link 
              href="/login"
              className="text-white hover:text-[#D4C08A] transition"
            >
              Login
            </Link>

            <Link 
              href="/register"
              className="text-white hover:text-[#D4C08A] transition"
            >
              Register
            </Link>

            <Link 
              href="/health"
              className="text-white hover:text-[#D4C08A] transition"
            >
              Health
            </Link>

          </div>
        </nav>


        <main className="flex-1">
          {children}
        </main>

      </body>
    </html>
  );
}