import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-[#061722]">

      {/* Footer Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D4C08A]/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-14 md:px-10">

        {/* Footer Content */}
        <div className="grid gap-10 md:grid-cols-3">

          {/* Brand */}
          <div className="group">
            <h2 className="text-2xl font-bold text-[#D4C08A] transition-all duration-300 group-hover:text-[#f1df9d]">
              SkillBridge
            </h2>

            <p className="mt-4 max-w-sm leading-7 text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
              Helping students discover internships,
              graduate opportunities, and careers through
              one modern platform.
            </p>
          </div>


          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white">
              Quick Links
            </h3>

            <div className="mt-5 flex flex-col gap-3">

              <Link
                href="/"
                className="group w-fit text-gray-400 transition-all duration-300 hover:translate-x-1 hover:text-[#D4C08A]"
              >
                <span className="relative">
                  Home
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#D4C08A] transition-all duration-300 group-hover:w-full" />
                </span>
              </Link>

              <Link
                href="/about"
                className="group w-fit text-gray-400 transition-all duration-300 hover:translate-x-1 hover:text-[#D4C08A]"
              >
                <span className="relative">
                  About
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#D4C08A] transition-all duration-300 group-hover:w-full" />
                </span>
              </Link>

              <Link
                href="/internship"
                className="group w-fit text-gray-400 transition-all duration-300 hover:translate-x-1 hover:text-[#D4C08A]"
              >
                <span className="relative">
                  Internships
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#D4C08A] transition-all duration-300 group-hover:w-full" />
                </span>
              </Link>

              <Link
                href="/jobs"
                className="group w-fit text-gray-400 transition-all duration-300 hover:translate-x-1 hover:text-[#D4C08A]"
              >
                <span className="relative">
                  Jobs
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#D4C08A] transition-all duration-300 group-hover:w-full" />
                </span>
              </Link>

              <Link
                href="/companies"
                className="group w-fit text-gray-400 transition-all duration-300 hover:translate-x-1 hover:text-[#D4C08A]"
              >
                <span className="relative">
                  Companies
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#D4C08A] transition-all duration-300 group-hover:w-full" />
                </span>
              </Link>

              <Link
                href="/contact"
                className="group w-fit text-gray-400 transition-all duration-300 hover:translate-x-1 hover:text-[#D4C08A]"
              >
                <span className="relative">
                  Contact
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#D4C08A] transition-all duration-300 group-hover:w-full" />
                </span>
              </Link>

            </div>
          </div>


          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white">
              Contact
            </h3>

            <div className="mt-5 space-y-3 text-gray-400">

              <p className="transition-colors duration-300 hover:text-[#D4C08A]">
                Karachi, Pakistan
              </p>

              <p className="cursor-pointer transition-colors duration-300 hover:text-[#D4C08A]">
                info@skillbridge.com
              </p>

              <p className="cursor-pointer transition-colors duration-300 hover:text-[#D4C08A]">
                +92 300 1234567
              </p>

            </div>
          </div>

        </div>


        {/* Copyright Divider */}
        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-gray-500">
          © 2026 SkillBridge. Designed & Developed by Aqsa Farooq. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}

