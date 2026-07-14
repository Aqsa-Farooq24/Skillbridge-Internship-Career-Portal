import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white">
        <nav className="bg-gray-900 border-b border-gray-700 shadow-md">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-6 px-6 py-4">
            <Link href="/" className="font-bold text-xl text-blue-400">
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