export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-[#081C2B] text-white">

      <section className="max-w-6xl mx-auto px-6 py-16">

        <div className="bg-[#10293D] rounded-3xl border border-[#D4C08A]/20 p-8">

          <div className="flex flex-col md:flex-row md:items-center gap-8">

            <div className="w-32 h-32 rounded-full bg-[#D4C08A] flex items-center justify-center text-4xl font-bold text-[#081C2B]">
              AF
            </div>

            <div>

              <h1 className="text-4xl font-bold">
                Aqsa Farooq
              </h1>

              <p className="text-gray-400 mt-2">
                Software Engineering Student
              </p>

              <button className="mt-6 bg-[#D4C08A] text-[#081C2B] px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
                Edit Profile
              </button>

            </div>

          </div>

        </div>

        <div className="grid lg:grid-cols-2 gap-8 mt-10">

          <div className="bg-[#10293D] rounded-3xl p-8 border border-[#D4C08A]/20">

            <h2 className="text-2xl font-bold text-[#D4C08A]">
              Personal Information
            </h2>

            <div className="space-y-5 mt-8">

              <div>
                <p className="text-gray-400">Email</p>
                <p>aqsa@example.com</p>
              </div>

              <div>
                <p className="text-gray-400">University</p>
                <p>Bahria University</p>
              </div>

              <div>
                <p className="text-gray-400">Degree</p>
                <p>Software Engineering</p>
              </div>

              <div>
                <p className="text-gray-400">Location</p>
                <p>Karachi, Pakistan</p>
              </div>

            </div>

          </div>

          <div className="bg-[#10293D] rounded-3xl p-8 border border-[#D4C08A]/20">

            <h2 className="text-2xl font-bold text-[#D4C08A]">
              Skills
            </h2>

            <div className="flex flex-wrap gap-3 mt-8">

              {[
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Next.js",
                "Tailwind",
                "C#",
                ".NET",
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-[#081C2B] border border-[#D4C08A]/20 rounded-full px-5 py-2"
                >
                  {skill}
                </span>
              ))}

            </div>

            <h2 className="text-2xl font-bold text-[#D4C08A] mt-10">
              Career Goal
            </h2>

            <p className="text-gray-300 mt-5 leading-8">
              Passionate frontend developer focused on building responsive,
              accessible, and user-friendly web applications while seeking
              internship opportunities to grow professionally.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}