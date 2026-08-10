"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { Search, Bell, User, X, Menu } from "lucide-react";

export default function Navbar() {
    const router = useRouter();
    const pathname = usePathname();

    const [showSearch, setShowSearch] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const [search, setSearch] = useState("");
    const [showMenu, setShowMenu] = useState(false);

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

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Internships", href: "/internship" },
        { name: "Jobs", href: "/jobs" },
        { name: "Companies", href: "/companies" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <>
            <nav className="sticky top-0 z-50 border-b border-[#D4C08A]/20 bg-[#081C2B] backdrop-blur">

                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

                    {/* Logo */}
                    <Link
                        href="/"
                        className="text-2xl font-bold text-[#D4C08A] transition-all duration-300 hover:scale-105 hover:text-[#f1df9d]"
                    >
                        SkillBridge
                    </Link>


                    {/* Navigation */}
                    <div className="hidden items-center gap-8 md:flex">

                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;

                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`group relative py-2 font-medium transition-all duration-300
                                        ${isActive
                                            ? "text-[#D4C08A]"
                                            : "text-white hover:-translate-y-0.5 hover:text-[#D4C08A]"
                                        }
                                    `}
                                >
                                    {link.name}

                                    {/* Animated underline */}
                                    <span
                                        className={`absolute bottom-0 left-0 h-[2px] rounded-full bg-[#D4C08A] transition-all duration-300
                                            ${isActive
                                                ? "w-full"
                                                : "w-0 group-hover:w-full"
                                            }
                                        `}
                                    />
                                </Link>
                            );
                        })}

                    </div>


                    {/* Right Side */}
                    <div className="flex items-center gap-4">

                        {/* Mobile Menu */}
                        <button
                            aria-label={
                                showMenu
                                    ? "Close navigation menu"
                                    : "Open navigation menu"
                            }
                            onClick={() => setShowMenu(!showMenu)}
                            className="rounded-full p-2 transition-all duration-300 hover:bg-[#10293D] md:hidden"
                        >
                            {showMenu ? (
                                <X
                                    size={24}
                                    className="text-white transition-colors duration-300 hover:text-[#D4C08A]"
                                />
                            ) : (
                                <Menu
                                    size={24}
                                    className="text-white transition-colors duration-300 hover:text-[#D4C08A]"
                                />
                            )}
                        </button>


                        {/* Search */}
                        <button
                            aria-label="Open search"
                            onClick={() => setShowSearch(!showSearch)}
                            className="group rounded-full p-2 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#10293D]"
                        >
                            <Search
                                size={22}
                                className="text-white transition-colors duration-300 group-hover:text-[#D4C08A]"
                            />
                        </button>


                        {/* Bell */}
                        <button
                            aria-label="Notifications"
                            className="group relative rounded-full p-2 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#10293D]"
                        >
                            <Bell
                                size={22}
                                className="text-white transition-colors duration-300 group-hover:text-[#D4C08A]"
                            />

                            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
                                3
                            </span>
                        </button>


                        {/* Profile */}
                        <button
                            aria-label="Open login"
                            onClick={() => setShowLogin(true)}
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D4C08A] transition-all duration-300 hover:scale-110 hover:bg-[#e5d39a] hover:shadow-lg hover:shadow-[#D4C08A]/20"
                        >
                            <User
                                size={20}
                                className="text-[#081C2B]"
                            />
                        </button>

                    </div>

                </div>


                {/* Mobile Navigation */}
                {showMenu && (
                    <div className="border-t border-[#D4C08A]/20 bg-[#081C2B] md:hidden">

                        <div className="flex flex-col space-y-4 px-6 py-4">

                            {navLinks.map((link) => {
                                const isActive = pathname === link.href;

                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setShowMenu(false)}
                                        className={`group relative w-fit py-1 font-medium transition-all duration-300
                                            ${isActive
                                                ? "translate-x-1 text-[#D4C08A]"
                                                : "text-white hover:translate-x-1 hover:text-[#D4C08A]"
                                            }
                                        `}
                                    >
                                        {link.name}

                                        <span
                                            className={`absolute bottom-0 left-0 h-[2px] rounded-full bg-[#D4C08A] transition-all duration-300
                                                ${isActive
                                                    ? "w-full"
                                                    : "w-0 group-hover:w-full"
                                                }
                                            `}
                                        />
                                    </Link>
                                );
                            })}

                        </div>

                    </div>
                )}


                {/* Search Bar */}
                {showSearch && (
                    <div className="border-t border-[#D4C08A]/20">

                        <div className="mx-auto max-w-7xl px-6 py-4">

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
                                    className="w-full rounded-xl border border-[#D4C08A]/20 bg-[#10293D] py-3 pl-12 pr-12 text-white outline-none focus:border-[#D4C08A]"
                                />

                                {search.trim() !== "" && (
                                    <div className="absolute left-0 right-0 z-50 mt-2 overflow-hidden rounded-xl border border-[#D4C08A]/20 bg-[#10293D] shadow-xl">

                                        {filteredItems.length > 0 ? (

                                            filteredItems.map((item, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => {
                                                        router.push(item.path);
                                                        setSearch("");
                                                        setShowSearch(false);
                                                    }}
                                                    className="w-full px-5 py-3 text-left text-white transition hover:bg-[#1B3B55] hover:text-[#D4C08A]"
                                                >
                                                    {item.title}
                                                </button>
                                            ))

                                        ) : (

                                            <div className="px-5 py-4 text-center">

                                                <p className="font-medium text-gray-300">
                                                    No results found
                                                </p>

                                                <p className="mt-1 text-sm text-gray-500">
                                                    Try searching for internships, jobs, or companies.
                                                </p>

                                            </div>

                                        )}

                                    </div>
                                )}

                                <button
                                    aria-label="Close search"
                                    onClick={() => setShowSearch(false)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2"
                                >
                                    <X
                                        size={20}
                                        className="text-gray-400 transition-colors hover:text-[#D4C08A]"
                                    />
                                </button>

                            </div>

                        </div>

                    </div>
                )}

            </nav>


            {/* Login Modal */}
            {showLogin && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60">

                    <div className="relative w-[420px] rounded-3xl border border-[#D4C08A]/20 bg-[#10293D] p-8">

                        <button
                            aria-label="Close login dialog"
                            onClick={() => setShowLogin(false)}
                            className="absolute right-5 top-5"
                        >
                            <X className="text-white transition-colors hover:text-[#D4C08A]" />
                        </button>

                        <h2 className="text-3xl font-bold text-[#D4C08A]">
                            Login
                        </h2>

                        <p className="mt-3 text-gray-400">
                            Login to continue to SkillBridge.
                        </p>

                        <div className="mt-8 space-y-5">

                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full rounded-xl border border-gray-600 bg-[#081C2B] px-5 py-3 text-white outline-none focus:border-[#D4C08A]"
                            />

                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full rounded-xl border border-gray-600 bg-[#081C2B] px-5 py-3 text-white outline-none focus:border-[#D4C08A]"
                            />

                            <button className="w-full rounded-xl bg-[#D4C08A] py-3 font-semibold text-[#081C2B] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e5d39a] hover:shadow-lg hover:shadow-[#D4C08A]/20">
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
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60">

                    <div className="relative w-[420px] rounded-3xl border border-[#D4C08A]/20 bg-[#10293D] p-8">

                        <button
                            aria-label="Close registration dialog"
                            onClick={() => setShowRegister(false)}
                            className="absolute right-5 top-5"
                        >
                            <X className="text-white transition-colors hover:text-[#D4C08A]" />
                        </button>

                        <h2 className="text-3xl font-bold text-[#D4C08A]">
                            Create Account
                        </h2>

                        <p className="mt-3 text-gray-400">
                            Join SkillBridge and start your career journey.
                        </p>

                        <div className="mt-8 space-y-5">

                            <input
                                type="text"
                                placeholder="Full Name"
                                className="w-full rounded-xl border border-gray-600 bg-[#081C2B] px-5 py-3 text-white outline-none focus:border-[#D4C08A]"
                            />

                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full rounded-xl border border-gray-600 bg-[#081C2B] px-5 py-3 text-white outline-none focus:border-[#D4C08A]"
                            />

                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full rounded-xl border border-gray-600 bg-[#081C2B] px-5 py-3 text-white outline-none focus:border-[#D4C08A]"
                            />

                            <input
                                type="password"
                                placeholder="Confirm Password"
                                className="w-full rounded-xl border border-gray-600 bg-[#081C2B] px-5 py-3 text-white outline-none focus:border-[#D4C08A]"
                            />

                            <select
                                className="w-full rounded-xl border border-gray-600 bg-[#081C2B] px-5 py-3 text-white outline-none focus:border-[#D4C08A]"
                                defaultValue=""
                            >
                                <option value="" disabled>
                                    Select Account Type
                                </option>
                                <option>Student</option>
                                <option>Company</option>
                            </select>

                            <button className="w-full rounded-xl bg-[#D4C08A] py-3 font-semibold text-[#081C2B] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e5d39a] hover:shadow-lg hover:shadow-[#D4C08A]/20">
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

