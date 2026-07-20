export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#081C2B] text-white">

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-20">
        <div className="max-w-3xl">

          <p className="uppercase tracking-[0.4em] text-[#D4C08A] font-semibold">
            About SkillBridge
          </p>

         <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl">
            Empowering Students
            <br />
            <span className="text-[#D4C08A]">
              to Build Successful Careers
            </span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-gray-300 leading-9">
            SkillBridge is an Internship & Career Portal designed to help
            students discover internships, graduate opportunities, and connect
            with leading companies. Our mission is to make career growth
            accessible through one modern, easy-to-use platform.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <button className="bg-[#D4C08A] text-[#081C2B] font-semibold px-8 py-4 rounded-xl hover:scale-105 transition">
              Explore Internships
            </button>

            <button className="border border-[#D4C08A] text-[#D4C08A] px-8 py-4 rounded-xl hover:bg-[#D4C08A] hover:text-[#081C2B] transition">
              Contact Us
            </button>
          </div>

        </div>
      </section>

      {/* Our Story */}
      <section className="border-t border-[#1f3344]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            <div>
              <h2 className="text-4xl font-bold text-[#D4C08A]">
                Our Story
              </h2>

              <p className="mt-6 text-gray-300 leading-8 text-lg">
                Finding internships and graduate opportunities can be
                overwhelming for students. SkillBridge was created to simplify
                that journey by bringing students and companies together on a
                single platform.
              </p>

              <p className="mt-6 text-gray-300 leading-8 text-lg">
                Whether you're searching for your first internship or preparing
                for your professional career, SkillBridge helps you discover
                opportunities, manage applications, and stay connected with
                trusted employers.
              </p>
            </div>

            <div className="bg-[#0d2739] rounded-3xl border border-[#D4C08A]/20 p-10">

              <h3 className="text-2xl font-semibold text-[#D4C08A]">
                What We Provide
              </h3>

              <div className="mt-8 space-y-6">

                <div>
                  <h4 className="font-semibold text-xl">
                    Internship Discovery
                  </h4>

                  <p className="text-gray-400 mt-2">
                    Browse internship opportunities from trusted companies.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-xl">
                    Career Development
                  </h4>

                  <p className="text-gray-400 mt-2">
                    Prepare for graduate roles with a professional profile.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-xl">
                    Industry Connections
                  </h4>

                  <p className="text-gray-400 mt-2">
                    Connect students with companies actively hiring talent.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}