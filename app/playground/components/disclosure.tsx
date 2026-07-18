"use client";

import { useState } from "react";

export default function Disclosure() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-10">
      <h2 className="mb-5 text-3xl font-bold text-white">
        Disclosure Component
      </h2>

      <button
        id="disclosure-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="disclosure-content"
        className="flex items-center gap-2 rounded-md bg-[#D4AF37] px-5 py-2.5 font-semibold text-black transition duration-300 hover:bg-[#C89B2B] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 focus:ring-offset-[#0B1F2E]"
      >
        <span className="text-lg">
          {isOpen ? "▼" : "▶"}
        </span>

        <span>What is SkillBridge?</span>
      </button>

      {isOpen && (
        <div
          id="disclosure-content"
          role="region"
          aria-labelledby="disclosure-button"
          className="mt-5 rounded-xl border border-[#D4AF37]/30 bg-[#11263A] p-6 shadow-lg"
        >
          <h3 className="mb-3 text-xl font-semibold text-[#D4AF37]">
            About SkillBridge
          </h3>

          <p className="leading-7 text-gray-300">
            SkillBridge is an internship and career portal designed to help
            students discover internship opportunities, develop professional
            skills, and connect with employers through a modern, responsive,
            and accessible web platform.
          </p>
        </div>
      )}
    </div>
  );
}