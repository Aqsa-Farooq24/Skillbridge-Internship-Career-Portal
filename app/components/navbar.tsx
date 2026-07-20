"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Search, Bell, User, X } from "lucide-react";

export default function Navbar() {
    const router = useRouter();

    const [showSearch, setShowSearch] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const [search, setSearch] = useState("");

const searchItems = [
  // Internships
  { title: "Frontend Internship", path: "/internship" },
  { title: "Backend Internship", path: "/internship" },
  { title: "Software Engineering Internship", path: "/internship" },
  { title: "UI/UX Design Internship", path: "/internship" },

  // Jobs
  { title: "Frontend Developer", path: "/jobs" },
  { title: "Backend Developer", path: "/jobs" },
  { title: "Full Stack Developer", path: "/jobs" },
  { title: "MERN Stack Developer", path: "/jobs" },
  { title: "Software Engineer", path: "/jobs" },

  // Companies
  { title: "Google", path: "/companies" },
  { title: "Microsoft", path: "/companies" },
  { title: "Adobe", path: "/companies" },
  { title: "Systems Limited", path: "/companies" },
  { title: "10Pearls", path: "/companies" },
  { title: "Arbisoft", path: "/companies" },
  { title: "Companies", path: "/companies" },
];

    const filteredItems =
        search.trim() === ""
            ? []
            : searchItems.filter((item) =>
                item.title.toLowerCase().includes(search.toLowerCase())
            );

    return (
        <>
            <nav className="sticky top-0 z-50 bg-[#081C2B] border-b border-[#D4C08A]/20 backdrop-blur">
                <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

                    {/* Logo */}
                    <Link
                        href="/"
                        className="text-2xl font-bold text-[#D4C08A]"
                    >
                        SkillBridge
                    </Link>

                    {/* Navigation */}
                    <div className="hidden md:flex items-center gap-8">

                        <Link href="/" className="text-white hover:text-[#D4C08A]">
                            Home
                        </Link>

                        <Link href="/about" className="text-white hover:text-[#D4C08A]">
                            About
                        </Link>

                        <Link href="/internship" className="text-white hover:text-[#D4C08A]">
                            Internships
                        </Link>

                        <Link href="/jobs" className="text-white hover:text-[#D4C08A]">
                            Jobs
                        </Link>

                        <Link href="/companies" className="text-white hover:text-[#D4C08A]">
                            Companies
                        </Link>

                        <Link href="/contact" className="text-white hover:text-[#D4C08A]">
                            Contact
                        </Link>

                    </div>

                    {/* Right Side */}
                    <div className="flex items-center gap-4">

                        {/* Search */}
                        <button
                            onClick={() => setShowSearch(!showSearch)}
                            className="p-2 rounded-full hover:bg-[#10293D] transition"
                        >
                            <Search
                                size={22}
                                className="text-white hover:text-[#D4C08A]"
                            />
                        </button>

                        {/* Bell */}
                        <button className="relative p-2 rounded-full hover:bg-[#10293D] transition">

                            <Bell
                                size={22}
                                className="text-white hover:text-[#D4C08A]"
                            />

                            <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 text-white text-[10px] flex items-center justify-center">
                                3
                            </span>

                        </button>

                        {/* Profile */}
                        <button
                            onClick={() => setShowLogin(true)}
                            className="w-10 h-10 rounded-full bg-[#D4C08A] flex items-center justify-center hover:scale-105 transition"
                        >
                            <User
                                size={20}
                                className="text-[#081C2B]"
                            />
                        </button>

                    </div>

                </div>

                {/* Search Bar */}

                {showSearch && (
                    <div className="border-t border-[#D4C08A]/20">

                        <div className="max-w-7xl mx-auto px-6 py-4">

                            <div className="relative">

                                <Search
                                    size={20}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                                />

                                <input
                                    type="text"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    placeholder="Search internships, jobs or companies..."
                                    className="w-full rounded-xl bg-[#10293D] border border-[#D4C08A]/20 py-3 pl-12 pr-12 text-white outline-none focus:border-[#D4C08A]"
                                />
                                {search.trim() !== "" && (
                                    <div className="absolute left-0 right-0 mt-2 bg-[#10293D] border border-[#D4C08A]/20 rounded-xl shadow-xl overflow-hidden z-50">

                                        {filteredItems.length > 0 ? (

                                            filteredItems.map((item, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => {
                                                        router.push(item.path);
                                                        setSearch("");
                                                        setShowSearch(false);
                                                    }}
                                                    className="w-full px-5 py-3 text-left text-white hover:bg-[#1B3B55] transition"
                                                >
                                                    {item.title}
                                                </button>
                                            ))

                                        ) : (

                                            <div className="px-5 py-4 text-center">

                                                <p className="text-gray-300 font-medium">
                                                    No results found
                                                </p>

                                                <p className="text-gray-500 text-sm mt-1">
                                                    Try searching for internships, jobs, or companies.
                                                </p>

                                            </div>

                                        )}

                                    </div>
                                )}

                                <button
                                    onClick={() => setShowSearch(false)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2"
                                >
                                    <X
                                        size={20}
                                        className="text-gray-400 hover:text-white"
                                    />
                                </button>

                            </div>

                        </div>

                    </div>
                )}

            </nav>

            {/* Login Modal */}

            {showLogin && (
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[100]">

                    <div className="bg-[#10293D] rounded-3xl p-8 w-[420px] relative border border-[#D4C08A]/20">

                        <button
                            onClick={() => setShowLogin(false)}
                            className="absolute right-5 top-5"
                        >
                            <X className="text-white" />
                        </button>

                        <h2 className="text-3xl font-bold text-[#D4C08A]">
                            Login
                        </h2>

                        <p className="text-gray-400 mt-3">
                            Login to continue to SkillBridge.
                        </p>

                        <div className="space-y-5 mt-8">

                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full rounded-xl bg-[#081C2B] border border-gray-600 px-5 py-3 text-white outline-none focus:border-[#D4C08A]"
                            />

                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full rounded-xl bg-[#081C2B] border border-gray-600 px-5 py-3 text-white outline-none focus:border-[#D4C08A]"
                            />

                            <button className="w-full bg-[#D4C08A] text-[#081C2B] rounded-xl py-3 font-semibold">
                                Login
                            </button>

                            <p className="text-center text-gray-300">
                                Don't have an account?{" "}

                                <button
                                    onClick={() => {
                                        setShowLogin(false);
                                        setShowRegister(true);
                                    }}
                                    className="text-[#D4C08A] hover:underline"
                                >
                                    Register
                                </button>

                            </p>

                        </div>

                    </div>

                </div>
            )}
            {/* Register Modal */}

            {showRegister && (
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[100]">

                    <div className="bg-[#10293D] rounded-3xl p-8 w-[420px] relative border border-[#D4C08A]/20">

                        <button
                            onClick={() => setShowRegister(false)}
                            className="absolute right-5 top-5"
                        >
                            <X className="text-white" />
                        </button>

                        <h2 className="text-3xl font-bold text-[#D4C08A]">
                            Create Account
                        </h2>

                        <p className="text-gray-400 mt-3">
                            Join SkillBridge and start your career journey.
                        </p>

                        <div className="space-y-5 mt-8">

                            <input
                                type="text"
                                placeholder="Full Name"
                                className="w-full rounded-xl bg-[#081C2B] border border-gray-600 px-5 py-3 text-white outline-none focus:border-[#D4C08A]"
                            />

                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full rounded-xl bg-[#081C2B] border border-gray-600 px-5 py-3 text-white outline-none focus:border-[#D4C08A]"
                            />

                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full rounded-xl bg-[#081C2B] border border-gray-600 px-5 py-3 text-white outline-none focus:border-[#D4C08A]"
                            />

                            <input
                                type="password"
                                placeholder="Confirm Password"
                                className="w-full rounded-xl bg-[#081C2B] border border-gray-600 px-5 py-3 text-white outline-none focus:border-[#D4C08A]"
                            />

                            <select
                                className="w-full rounded-xl bg-[#081C2B] border border-gray-600 px-5 py-3 text-white outline-none focus:border-[#D4C08A]"
                                defaultValue=""
                            >
                                <option value="" disabled>
                                    Select Account Type
                                </option>
                                <option>Student</option>
                                <option>Company</option>
                            </select>

                            <button className="w-full bg-[#D4C08A] text-[#081C2B] rounded-xl py-3 font-semibold hover:opacity-90 transition">
                                Create Account
                            </button>

                            <p className="text-center text-gray-300">
                                Already have an account?{" "}

                                <button
                                    onClick={() => {
                                        setShowRegister(false);
                                        setShowLogin(true);
                                    }}
                                    className="text-[#D4C08A] hover:underline"
                                >
                                    Login
                                </button>

                            </p>

                        </div>

                    </div>

                </div>
            )}
        </>
    );
}