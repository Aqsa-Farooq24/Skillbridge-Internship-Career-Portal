import { MapPin, ArrowRight } from "lucide-react";

export default function JobsPage() {
  const jobs = [
    {
      title: "Frontend Developer",
      company: "Systems Limited",
      location: "Karachi, Pakistan",
      type: "Full-Time",
    },
    {
      title: "Full Stack Developer",
      company: "10Pearls",
      location: "Islamabad, Pakistan",
      type: "Hybrid",
    },
    {
      title: "MERN Stack Developer",
      company: "Arbisoft",
      location: "Lahore, Pakistan",
      type: "Remote",
    },
    {
      title: "Software Engineer",
      company: "Contour Software",
      location: "Karachi, Pakistan",
      type: "Full-Time",
    },
    {
      title: "React Developer",
      company: "Tkxel",
      location: "Lahore, Pakistan",
      type: "Hybrid",
    },
    {
      title: "Backend Developer",
      company: "Netsol Technologies",
      location: "Lahore, Pakistan",
      type: "Full-Time",
    },
    {
      title: "UI/UX Designer",
      company: "Creative Chaos",
      location: "Karachi, Pakistan",
      type: "Remote",
    },
    {
      title: "Junior Software Engineer",
      company: "Avanza Solutions",
      location: "Karachi, Pakistan",
      type: "Full-Time",
    },
  ];

  return (
    <main className="min-h-screen bg-[#081C2B] text-white">

      {/* Hero Section */}
      <section className="relative overflow-hidden">

        {/* Background Glows */}
        <div className="absolute -top-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#D4C08A]/10 blur-3xl" />

        <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-cyan-500/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">

          <div className="mx-auto max-w-3xl text-center">

            {/* Badge */}
            <div className="group mx-auto mb-6 inline-flex cursor-default items-center gap-3 rounded-full border border-[#D4C08A]/20 bg-[#D4C08A]/5 px-4 py-2 transition-all duration-300 hover:border-[#D4C08A]/50 hover:bg-[#D4C08A]/10 hover:shadow-lg hover:shadow-[#D4C08A]/10">

              <span className="h-2 w-2 rounded-full bg-[#D4C08A] transition-all duration-300 group-hover:scale-125 group-hover:shadow-[0_0_12px_#D4C08A]" />

              <span className="text-xs font-semibold tracking-[0.2em] text-[#D4C08A] sm:text-sm">
                CAREER OPPORTUNITIES
              </span>

            </div>


            {/* Heading */}
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Latest{" "}
              <span className="bg-gradient-to-r from-[#D4C08A] to-[#f1df9d] bg-clip-text text-transparent">
                Job Opportunities
              </span>
            </h1>


            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
              Discover exciting job opportunities from trusted companies and
              take the next step in your professional career.
            </p>

          </div>


          {/* Job Count */}
          <div className="mx-auto mt-10 flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm text-gray-400">

            <span className="font-semibold text-[#D4C08A]">
              {jobs.length}
            </span>

            job opportunities available

          </div>

        </div>
      </section>


      {/* Job Cards */}
      <section className="relative pb-24">

        <div className="mx-auto max-w-7xl px-6 md:px-10">

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {jobs.map((job, index) => (

              <div
                key={index}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-[#D4C08A]/15 bg-[#0d2739] p-6 transition-all duration-500 hover:-translate-y-2 hover:border-[#D4C08A]/50 hover:bg-[#102c40] hover:shadow-[0_20px_50px_rgba(212,192,138,0.10)] sm:p-7"
              >

                {/* Card Glow */}
                <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-[#D4C08A]/5 blur-3xl transition-all duration-500 group-hover:bg-[#D4C08A]/15" />


                {/* Top Row */}
                <div className="relative flex items-start justify-between gap-4">

                  {/* Job Number */}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#D4C08A]/20 bg-[#D4C08A]/5 text-sm font-bold text-[#D4C08A] transition-all duration-300 group-hover:scale-110 group-hover:border-[#D4C08A]/50 group-hover:bg-[#D4C08A]/10">
                    {String(index + 1).padStart(2, "0")}
                  </div>


                  {/* Job Type */}
                  <span className="rounded-full border border-[#D4C08A]/20 bg-[#D4C08A]/5 px-3 py-1 text-xs font-medium text-[#D4C08A] transition-all duration-300 group-hover:border-[#D4C08A]/40 group-hover:bg-[#D4C08A]/10">
                    {job.type}
                  </span>

                </div>


                {/* Job Title */}
                <h2 className="relative mt-7 text-xl font-bold leading-snug text-white transition-colors duration-300 group-hover:text-[#D4C08A] sm:text-2xl">
                  {job.title}
                </h2>


                {/* Company */}
                <div className="relative mt-3">

                  <p className="text-sm uppercase tracking-wide text-gray-500">
                    Company
                  </p>

                  <p className="mt-1 font-semibold text-gray-200 transition-colors duration-300 group-hover:text-gray-100">
                    {job.company}
                  </p>

                </div>


                {/* Location */}
                <div className="relative mt-5 flex items-center gap-2 text-sm text-gray-400">

                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.04] transition-all duration-300 group-hover:bg-[#D4C08A]/10">

                    <MapPin
                      size={17}
                      className="text-[#D4C08A] transition-transform duration-300 group-hover:scale-110"
                    />

                  </span>

                  <span className="transition-colors duration-300 group-hover:text-gray-300">
                    {job.location}
                  </span>

                </div>


                {/* Divider */}
                <div className="relative my-6 h-px bg-white/5 transition-all duration-500 group-hover:bg-[#D4C08A]/20" />


                {/* Apply Button */}
                <button
                  className="group/button relative mt-auto flex w-full items-center justify-center gap-2 rounded-xl bg-[#D4C08A] py-3.5 font-semibold text-[#081C2B] transition-all duration-300 hover:-translate-y-1 hover:bg-[#e5d39a] hover:shadow-lg hover:shadow-[#D4C08A]/20 active:scale-95"
                >

                  Apply Now

                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover/button:translate-x-1"
                  />

                </button>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* Bottom CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10">

        <div className="group relative overflow-hidden rounded-3xl border border-[#D4C08A]/15 bg-gradient-to-br from-[#0d2739] to-[#081C2B] p-8 text-center transition-all duration-500 hover:border-[#D4C08A]/35 hover:shadow-[0_20px_60px_rgba(212,192,138,0.08)] md:p-12">

          {/* CTA Glow */}
          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#D4C08A]/5 blur-3xl transition-all duration-500 group-hover:bg-[#D4C08A]/10" />

          <div className="relative">

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4C08A]">
              Your Next Career Move
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Ready to grow your career?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-400">
              Explore available positions, find the right opportunity, and
              take the next step toward your professional goals.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}

