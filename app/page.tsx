import Link from "next/link";
import FloatingAssistant from "@/app/components/FloatingAssistant";
import AuroraHero from "@/app/components/AuroraHero";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#081C2B] text-[#F5F5F2]">
      <AuroraHero>
        <section className="relative z-10 min-h-screen flex items-center px-8 lg:px-20">
          <div className="max-w-3xl ml-10 lg:ml-28">
            <p className="text-[#D4C08A] uppercase tracking-[6px] font-semibold">
              WELCOME TO
            </p>
            <h1 className="mt-4 text-6xl lg:text-7xl font-bold text-[#F5F5F2]">
              SkillBridge
            </h1>
            <h2 className="mt-5 text-3xl lg:text-4xl font-semibold text-[#D4C08A]">
              Internship & Career Portal
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-300">
              Connecting students with internships, graduate opportunities,
              and leading companies through one modern platform.
            </p>
            <div className="mt-10 flex gap-5">
              <Link
                href="/internship"
                className="rounded-xl bg-[#D4C08A] px-6 py-3 font-semibold text-base text-[#081C2B] hover:opacity-90 transition"
              >
                Explore Internships
              </Link>
              <Link
                href="/about"
                className="rounded-xl border border-[#D4C08A] px-6 py-3 font-semibold text-base text-[#D4C08A] hover:bg-[#D4C08A] hover:text-[#081C2B] transition"
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