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

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16">

        <p className="uppercase tracking-[0.3em] text-[#D4C08A] font-semibold">
          Partner Companies
        </p>

        <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold max-w-4xl">
          Connect with
          <span className="text-[#D4C08A]"> Top Employers</span>
        </h1>

        <p className="mt-6 max-w-3xl text-lg text-gray-300 leading-8">
          Discover trusted companies offering internships, graduate
          opportunities, and full-time careers for students and fresh
          graduates.
        </p>

      </section>

      {/* Company Cards */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pb-20">

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {companies.map((company) => (

            <div
              key={company.name}
              className="bg-[#10293D] border border-[#D4C08A]/20 rounded-2xl p-7 hover:border-[#D4C08A] hover:-translate-y-2 transition duration-300"
            >

              <div className="w-16 h-16 rounded-full bg-[#D4C08A] flex items-center justify-center text-2xl font-bold text-[#081C2B]">
                {company.name.charAt(0)}
              </div>

              <h2 className="mt-6 text-2xl font-semibold">
                {company.name}
              </h2>

              <p className="mt-3 text-gray-400">
                {company.industry}
              </p>

              <div className="mt-6 space-y-2 text-gray-300">

                <p>📍 {company.location}</p>

                <p>💼 {company.openings}</p>

              </div>

              <button className="mt-8 w-full rounded-xl border border-[#D4C08A] py-3 text-[#D4C08A] hover:bg-[#D4C08A] hover:text-[#081C2B] transition">
                View Company
              </button>

            </div>

          ))}

        </div>

      </section>

    </main>
  );
}