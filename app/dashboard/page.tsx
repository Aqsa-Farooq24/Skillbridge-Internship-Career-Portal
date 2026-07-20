export default function DashboardPage() {
  const stats = [
    { title: "Applications", value: "12" },
    { title: "Saved Jobs", value: "8" },
    { title: "Interviews", value: "3" },
    { title: "Profile", value: "90%" },
  ];

  const jobs = [
    "Frontend Developer Intern",
    "UI/UX Design Intern",
    "React Developer",
  ];

  return (
    <main className="min-h-screen bg-[#081C2B] text-white">
      <section className="max-w-7xl mx-auto px-6 py-16">

        <h1 className="text-4xl md:text-5xl font-bold">
          Welcome Back,
          <span className="text-[#D4C08A]"> Aqsa 👋</span>
        </h1>

        <p className="text-gray-300 mt-4">
          Here's an overview of your internship journey.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {stats.map((item) => (
            <div
              key={item.title}
              className="bg-[#10293D] rounded-2xl p-6 border border-[#D4C08A]/20"
            >
              <p className="text-gray-400">{item.title}</p>

              <h2 className="text-4xl font-bold mt-4 text-[#D4C08A]">
                {item.value}
              </h2>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mt-12">

          <div className="bg-[#10293D] rounded-3xl p-8 border border-[#D4C08A]/20">
            <h2 className="text-2xl font-bold text-[#D4C08A]">
              Recent Applications
            </h2>

            <div className="space-y-5 mt-8">
              <div>
                <h3 className="font-semibold">
                  Frontend Developer Intern
                </h3>
                <p className="text-gray-400">
                  Google • Submitted
                </p>
              </div>

              <div>
                <h3 className="font-semibold">
                  Software Engineer Intern
                </h3>
                <p className="text-gray-400">
                  Microsoft • Under Review
                </p>
              </div>

              <div>
                <h3 className="font-semibold">
                  React Developer
                </h3>
                <p className="text-gray-400">
                  Systems Ltd • Interview Scheduled
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#10293D] rounded-3xl p-8 border border-[#D4C08A]/20">
            <h2 className="text-2xl font-bold text-[#D4C08A]">
              Recommended Jobs
            </h2>

            <div className="space-y-4 mt-8">
              {jobs.map((job) => (
                <div
                  key={job}
                  className="flex justify-between items-center border-b border-gray-700 pb-4"
                >
                  <span>{job}</span>

                  <button className="text-[#D4C08A] hover:underline">
                    View
                  </button>
                </div>
              ))}
            </div>
          </div>

        </div>

      </section>
    </main>
  );
}