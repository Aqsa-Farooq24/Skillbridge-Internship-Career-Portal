import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#081C2B] border-t border-[#D4C08A]/20 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-3 gap-10">

          <div>
            <h2 className="text-2xl font-bold text-[#D4C08A]">
              SkillBridge
            </h2>

            <p className="mt-4 text-gray-400 leading-7">
              Helping students discover internships,
              graduate opportunities, and careers through
              one modern platform.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 mt-5">

              <Link href="/">Home</Link>

              <Link href="/about">About</Link>

              <Link href="/internship">Internships</Link>

              <Link href="/jobs">Jobs</Link>

              <Link href="/companies">Companies</Link>

              <Link href="/contact">Contact</Link>

            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">
              Contact
            </h3>

            <div className="mt-5 space-y-3 text-gray-400">

              <p>Karachi, Pakistan</p>

              <p>info@skillbridge.com</p>

              <p>+92 300 1234567</p>

            </div>
          </div>

        </div>

        <div className="border-t border-[#D4C08A]/20 mt-10 pt-6 text-center text-gray-500">

         © 2026 SkillBridge. Designed & Developed by Aqsa Farooq. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}