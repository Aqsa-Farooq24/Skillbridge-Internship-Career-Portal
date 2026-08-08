import Link from "next/link";
import FloatingAssistant from "@/app/components/FloatingAssistant";
import AuroraHero from "@/app/components/AuroraHero";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#081C2B] text-[#F5F5F2]">
      <AuroraHero>
        <section className="relative z-10 min-h-screen flex items-center px-6 sm:px-8 lg:px-20">
          <div className="max-w-3xl ml-0 sm:ml-4 lg:ml-28">

            <p className="text-[#D4C08A] uppercase tracking-[4px] sm:tracking-[6px] text-xs sm:text-sm font-semibold">
              WELCOME TO
            </p>

            <h1 className="mt-3 sm:mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#F5F5F2] leading-tight">
              SkillBridge
            </h1>

            <h2 className="mt-3 sm:mt-5 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#D4C08A] leading-snug">
              Internship & Career Portal
            </h2>

            <p className="mt-5 sm:mt-8 max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed sm:leading-8 text-gray-300">
              Connecting students with internships, graduate opportunities,
              and leading companies through one modern platform.
            </p>

            {/* Buttons stack vertically on mobile, sit side by side from sm: up */}
            <div className="mt-7 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-5">

              <Link
                href="/internship"
                className="rounded-xl bg-[#D4C08A] px-5 sm:px-6 py-3 text-center font-semibold text-sm sm:text-base text-[#081C2B] hover:opacity-90 transition"
              >
                Explore Internships
              </Link>

              <Link
                href="/about"
                className="rounded-xl border border-[#D4C08A] px-5 sm:px-6 py-3 text-center font-semibold text-sm sm:text-base text-[#D4C08A] hover:bg-[#D4C08A] hover:text-[#081C2B] transition"
              >
                Learn More
              </Link>

            </div>

          </div>
        </section>
      </AuroraHero>

      <FloatingAssistant />

    </main>
  );
}