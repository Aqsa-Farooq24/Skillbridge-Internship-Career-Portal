import type { Metadata } from "next";
import Link from "next/link";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

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
      className={`${poppins.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <nav className="bg-[#081C2B] border-b border-[#D4C08A] shadow-md">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-6 px-6 py-4">
            <Link
              href="/"
              className="font-bold text-2xl tracking-wide text-[#D4C08A]"
            >
              SkillBridge
            </Link>

            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/internship">Internships</Link>
            <Link href="/jobs">Jobs</Link>
            <Link href="/companies">Companies</Link>
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/profile">Profile</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/login">Login</Link>
            <Link href="/register">Register</Link>
            <Link href="/health">Health</Link>
          </div>
        </nav>

        <main className="flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}