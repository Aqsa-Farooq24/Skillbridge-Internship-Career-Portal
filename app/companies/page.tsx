import { MapPin, BriefcaseBusiness, ArrowRight } from "lucide-react";

export default function CompaniesPage() {
  const companies = [
    {
      name: "Google",
      industry: "Technology",
      location: "Remote",
      openings: "25 Open Positions",
    },
    {
      name: "Microsoft",
      industry: "Software",
      location: "Hybrid",
      openings: "18 Open Positions",
    },
    {
      name: "10Pearls",
      industry: "Software House",
      location: "Karachi",
      openings: "12 Open Positions",
    },
    {
      name: "Systems Limited",
      industry: "IT Services",
      location: "Lahore",
      openings: "20 Open Positions",
    },
    {
      name: "Arbisoft",
      industry: "Software Development",
      location: "Lahore",
      openings: "15 Open Positions",
    },
    {
      name: "Contour Software",
      industry: "Technology",
      location: "Islamabad",
      openings: "10 Open Positions",
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

          <div className="max-w-4xl">

            {/* Badge */}
            <div className="group mb-6 inline-flex cursor-default items-center gap-3 rounded-full border border-[#D4C08A]/20 bg-[#D4C08A]/5 px-4 py-2 transition-all duration-300 hover:border-[#D4C08A]/50 hover:bg-[#D4C08A]/10 hover:shadow-lg hover:shadow-[#D4C08A]/10">

              <span className="h-2 w-2 rounded-full bg-[#D4C08A] transition-all duration-300 group-hover:scale-125 group-hover:shadow-[0_0_12px_#D4C08A]" />

              <span className="text-xs font-semibold tracking-[0.2em] text-[#D4C08A] sm:text-sm">
                PARTNER COMPANIES
              </span>

            </div>


            {/* Heading */}
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-7xl">
              Connect with{" "}
              <span className="bg-gradient-to-r from-[#D4C08A] to-[#f1df9d] bg-clip-text text-transparent">
                Top Employers
              </span>
            </h1>


            {/* Description */}
            <p className="mt-7 max-w-3xl text-base leading-8 text-gray-300 sm:text-lg">
              Discover trusted companies offering internships, graduate
              opportunities, and full-time careers for students and fresh
              graduates.
            </p>


            {/* Company Count */}
            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm text-gray-400">
              <span className="font-semibold text-[#D4C08A]">
                {companies.length}
              </span>
              trusted companies
            </div>

          </div>

        </div>
      </section>


      {/* Company Cards */}
      <section className="relative pb-24">

        <div className="mx-auto max-w-7xl px-6 md:px-10">

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {companies.map((company, index) => (

              <div
                key={company.name}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-[#D4C08A]/15 bg-[#0d2739] p-6 transition-all duration-500 hover:-translate-y-2 hover:border-[#D4C08A]/50 hover:bg-[#102c40] hover:shadow-[0_20px_50px_rgba(212,192,138,0.10)] sm:p-7"
              >

                {/* Card Glow */}
                <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-[#D4C08A]/5 blur-3xl transition-all duration-500 group-hover:bg-[#D4C08A]/15" />


                {/* Top Row */}
                <div className="relative flex items-start justify-between">

                  {/* Company Logo / Initial */}
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#D4C08A]/20 bg-[#D4C08A]/5 text-2xl font-bold text-[#D4C08A] transition-all duration-500 group-hover:scale-110 group-hover:rotate-2 group-hover:border-[#D4C08A]/50 group-hover:bg-[#D4C08A]/10 group-hover:shadow-lg group-hover:shadow-[#D4C08A]/10">
                    {company.name.charAt(0)}
                  </div>


                  {/* Company Number */}
                  <span className="text-sm font-semibold text-gray-600 transition-colors duration-300 group-hover:text-[#D4C08A]/60">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                </div>


                {/* Company Name */}
                <h2 className="relative mt-7 text-2xl font-bold text-white transition-colors duration-300 group-hover:text-[#D4C08A]">
                  {company.name}
                </h2>


                {/* Industry */}
                <p className="relative mt-2 text-sm text-gray-400">
                  {company.industry}
                </p>


                {/* Company Details */}
                <div className="relative mt-6 space-y-3">

                  {/* Location */}
                  <div className="flex items-center gap-3 text-sm text-gray-300">

                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.04] transition-all duration-300 group-hover:bg-[#D4C08A]/10">
                      <MapPin
                        size={17}
                        className="text-[#D4C08A]"
                      />
                    </span>

                    <span className="transition-colors duration-300 group-hover:text-white">
                      {company.location}
                    </span>

                  </div>


                  {/* Openings */}
                  <div className="flex items-center gap-3 text-sm text-gray-300">

                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.04] transition-all duration-300 group-hover:bg-[#D4C08A]/10">
                      <BriefcaseBusiness
                        size={17}
                        className="text-[#D4C08A]"
                      />
                    </span>

                    <span className="transition-colors duration-300 group-hover:text-white">
                      {company.openings}
                    </span>

                  </div>

                </div>


                {/* Divider */}
                <div className="relative my-6 h-px bg-white/5 transition-all duration-500 group-hover:bg-[#D4C08A]/20" />


                {/* View Company Button */}
                <button
                  className="group/button relative mt-auto flex w-full items-center justify-center gap-2 rounded-xl border border-[#D4C08A]/50 py-3.5 font-semibold text-[#D4C08A] transition-all duration-300 hover:-translate-y-1 hover:border-[#D4C08A] hover:bg-[#D4C08A] hover:text-[#081C2B] hover:shadow-lg hover:shadow-[#D4C08A]/20 active:scale-95"
                >
                  View Company

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

          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#D4C08A]/5 blur-3xl transition-all duration-500 group-hover:bg-[#D4C08A]/10" />

          <div className="relative">

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4C08A]">
              Build Your Future
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Find the right company for you.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-400">
              Explore companies, discover career opportunities, and connect
              with employers looking for the next generation of talent.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}

