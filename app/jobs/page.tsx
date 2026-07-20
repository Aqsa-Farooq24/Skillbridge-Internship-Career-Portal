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
];

  return (
    <main className="min-h-screen bg-background text-foreground px-6 py-12">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#D4C08A]">
            Latest Job Opportunities
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-gray-300 text-lg">
            Discover exciting job opportunities from trusted companies and
            take the next step in your professional career.
          </p>
        </div>

        {/* Job Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">

          {jobs.map((job, index) => (
            <div
              key={index}
              className="bg-[#10293D] border border-[#D4C08A]/20 rounded-2xl p-6 hover:border-[#D4C08A] transition duration-300"
            >
              <h2 className="text-2xl font-semibold text-[#D4C08A]">
                {job.title}
              </h2>

              <p className="mt-3 text-gray-300">
                <strong>Company:</strong> {job.company}
              </p>

              <p className="text-gray-300">
                <strong>Location:</strong> {job.location}
              </p>

              <p className="text-gray-300">
                <strong>Job Type:</strong> {job.type}
              </p>

              <button className="mt-6 w-full rounded-xl bg-[#D4C08A] text-[#081C2B] py-3 font-semibold hover:opacity-90 transition">
                Apply Now
              </button>
            </div>
          ))}

        </div>

      </div>
    </main>
  );
}