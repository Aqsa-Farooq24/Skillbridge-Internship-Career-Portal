export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#081C2B] text-[#F5F5F2] flex items-center">
      <section className="max-w-7xl mx-auto px-8 py-20">

        <p className="text-[#D4C08A] uppercase tracking-[4px] font-semibold">
          Welcome to
        </p>

        <h1 className="mt-4 text-6xl font-bold text-[#F5F5F2]">
          SkillBridge
        </h1>

        <h2 className="mt-4 text-3xl font-semibold text-[#D4C08A]">
          Internship & Career Portal
        </h2>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-300">
          Connecting students with internships, graduate opportunities,
          and leading companies through one modern platform.
        </p>

        <div className="mt-10 flex gap-5">
          <button className="rounded-lg bg-[#D4C08A] px-6 py-3 font-semibold text-[#081C2B] hover:opacity-90">
            Explore Internships
          </button>

          <button className="rounded-lg border border-[#D4C08A] px-6 py-3 font-semibold text-[#D4C08A] hover:bg-[#D4C08A] hover:text-[#081C2B]">
            Learn More
          </button>
        </div>

      </section>
    </main>
  );
}