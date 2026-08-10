import Link from "next/link";
export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#081C2B] text-white">

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[#D4C08A]/10 blur-3xl transition-all duration-700 hover:bg-[#D4C08A]/20" />
        <div className="absolute top-40 -left-40 h-80 w-80 rounded-full bg-cyan-500/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 md:px-10 lg:py-32">
          <div className="max-w-4xl">

            {/* Badge */}
            <div className="group mb-6 inline-flex cursor-default items-center gap-3 rounded-full border border-[#D4C08A]/20 bg-[#D4C08A]/5 px-4 py-2 transition-all duration-300 hover:border-[#D4C08A]/50 hover:bg-[#D4C08A]/10 hover:shadow-lg hover:shadow-[#D4C08A]/10">
              <span className="h-2 w-2 rounded-full bg-[#D4C08A] transition-all duration-300 group-hover:scale-125 group-hover:shadow-[0_0_12px_#D4C08A]" />

              <span className="text-sm font-medium tracking-wide text-[#D4C08A]">
                ABOUT SKILLBRIDGE
              </span>
            </div>

            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-7xl">
              Empowering Students
              <br />
              <span className="bg-gradient-to-r from-[#D4C08A] to-[#f1df9d] bg-clip-text text-transparent">
                to Build Successful Careers
              </span>
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-300 md:text-xl">
              SkillBridge is an Internship & Career Portal designed to help
              students discover internships, graduate opportunities, and
              connect with leading companies — all through one modern,
              easy-to-use platform.
            </p>

            {/* Hero Buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">

              <Link
                href="/internship"
                className="group rounded-xl bg-[#D4C08A] px-7 py-3.5 text-center font-semibold text-[#081C2B] shadow-lg shadow-[#D4C08A]/10 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:bg-[#e5d39a] hover:shadow-xl hover:shadow-[#D4C08A]/20 active:scale-95"
              >
                Explore Internships
                <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                href="/contact"
                className="group rounded-xl border border-[#D4C08A]/50 px-7 py-3.5 text-center font-semibold text-[#D4C08A] transition-all duration-300 hover:-translate-y-1 hover:border-[#D4C08A] hover:bg-[#D4C08A] hover:text-[#081C2B] hover:shadow-lg hover:shadow-[#D4C08A]/10 active:scale-95"
              >
                Contact Us
                <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

            </div>

          </div>
        </div>
      </section>


      {/* Stats */}
      <section className="border-y border-white/5 bg-[#0a2234]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 px-6 py-10 md:grid-cols-4 md:px-10">

          {/* Stat 1 */}
          <div className="group cursor-default border-white/10 px-4 py-5 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.02] md:border-r">
            <p className="text-3xl font-bold text-[#D4C08A] transition-transform duration-300 group-hover:scale-110">
              01
            </p>
            <p className="mt-2 text-sm text-gray-400 transition-colors duration-300 group-hover:text-gray-200">
              Unified Platform
            </p>
          </div>

          {/* Stat 2 */}
          <div className="group cursor-default border-white/10 px-4 py-5 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.02] md:border-r">
            <p className="text-3xl font-bold text-[#D4C08A] transition-transform duration-300 group-hover:scale-110">
              AI
            </p>
            <p className="mt-2 text-sm text-gray-400 transition-colors duration-300 group-hover:text-gray-200">
              Career Assistance
            </p>
          </div>

          {/* Stat 3 */}
          <div className="group cursor-default border-white/10 px-4 py-5 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.02] md:border-r">
            <p className="text-3xl font-bold text-[#D4C08A] transition-transform duration-300 group-hover:scale-110">
              24/7
            </p>
            <p className="mt-2 text-sm text-gray-400 transition-colors duration-300 group-hover:text-gray-200">
              Career Support
            </p>
          </div>

          {/* Stat 4 */}
          <div className="group cursor-default px-4 py-5 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.02]">
            <p className="text-3xl font-bold text-[#D4C08A] transition-transform duration-300 group-hover:scale-110">
              ∞
            </p>
            <p className="mt-2 text-sm text-gray-400 transition-colors duration-300 group-hover:text-gray-200">
              Career Possibilities
            </p>
          </div>

        </div>
      </section>


      {/* Our Story */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10">

          <div className="grid items-center gap-16 lg:grid-cols-2">

            {/* Story */}
            <div className="group">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#D4C08A] transition-all duration-300 group-hover:tracking-[0.4em]">
                Our Story
              </p>

              <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                Turning Career Challenges
                <br />
                <span className="text-[#D4C08A] transition-colors duration-300 group-hover:text-[#f1df9d]">
                  Into Opportunities
                </span>
              </h2>

              <p className="mt-7 text-lg leading-8 text-gray-300">
                Finding internships and graduate opportunities can be
                overwhelming. Students often have to search across multiple
                platforms, prepare their profiles, and figure out their next
                career step on their own.
              </p>

              <p className="mt-5 text-lg leading-8 text-gray-400">
                SkillBridge was created to simplify that journey by bringing
                opportunities, career tools, and industry connections together
                in one place.
              </p>

              <div className="mt-8 h-px w-24 bg-[#D4C08A] transition-all duration-500 group-hover:w-40 group-hover:shadow-[0_0_10px_#D4C08A]" />
            </div>


            {/* Mission Card */}
            <div className="group relative">

              <div className="absolute -inset-2 rounded-3xl bg-[#D4C08A]/5 blur-xl transition-all duration-500 group-hover:bg-[#D4C08A]/10" />

              <div className="relative rounded-3xl border border-[#D4C08A]/20 bg-[#0d2739] p-8 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-[#D4C08A]/50 hover:shadow-[0_20px_60px_rgba(212,192,138,0.12)] md:p-10">

                <h3 className="text-2xl font-bold text-[#D4C08A] transition-colors duration-300 group-hover:text-[#f1df9d]">
                  Our Mission
                </h3>

                <p className="mt-5 text-lg leading-8 text-gray-300">
                  To make career growth more accessible by helping students
                  discover meaningful opportunities, build professional
                  profiles, and confidently take their next career step.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-4">

                  {/* Students */}
                  <div className="group/student cursor-default rounded-2xl border border-white/5 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#D4C08A]/30 hover:bg-[#D4C08A]/5">
                    <p className="text-xl font-bold text-white transition-colors duration-300 group-hover/student:text-[#D4C08A]">
                      Students
                    </p>

                    <p className="mt-1 text-sm text-gray-500 transition-colors duration-300 group-hover/student:text-gray-300">
                      Discover & Grow
                    </p>
                  </div>

                  {/* Companies */}
                  <div className="group/company cursor-default rounded-2xl border border-white/5 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#D4C08A]/30 hover:bg-[#D4C08A]/5">
                    <p className="text-xl font-bold text-white transition-colors duration-300 group-hover/company:text-[#D4C08A]">
                      Companies
                    </p>

                    <p className="mt-1 text-sm text-gray-500 transition-colors duration-300 group-hover/company:text-gray-300">
                      Discover Talent
                    </p>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    
      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10">

        <div className="group relative overflow-hidden rounded-3xl border border-[#D4C08A]/15 bg-gradient-to-br from-[#0d2739] to-[#081C2B] p-8 transition-all duration-500 hover:border-[#D4C08A]/35 hover:shadow-[0_20px_70px_rgba(212,192,138,0.08)] md:p-12">

          {/* CTA Glow */}
          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#D4C08A]/5 blur-3xl transition-all duration-500 group-hover:bg-[#D4C08A]/10" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4C08A]">
                Your Career Starts Here
              </p>

              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                Ready to take the next step?
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-gray-400">
                Explore opportunities, build your professional profile, and
                start connecting with the right career opportunities through
                SkillBridge.
              </p>

            </div>


            <Link
              href="/internship"
              className="group/button rounded-xl bg-[#D4C08A] px-7 py-4 text-center font-bold text-[#081C2B] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:bg-[#e5d39a] hover:shadow-xl hover:shadow-[#D4C08A]/20 active:scale-95"
            >
              Start Exploring
              <span className="ml-2 inline-block transition-transform duration-300 group-hover/button:translate-x-1">
                →
              </span>
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}
