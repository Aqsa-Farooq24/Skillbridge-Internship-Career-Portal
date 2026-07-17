import Image from "next/image";
export default function IdentityPage() {
    return (
        <main className="min-h-screen bg-[#081C2B] text-[#F5F5F2] px-6 py-16">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-5xl font-bold text-[#D4C08A] mb-4">
                    SkillBridge Identity Kit
                </h1>

                <p className="text-lg text-gray-300 mb-12">
                    Brand guidelines for the SkillBridge Internship & Career Portal.
                </p>

                {/* Logo */}
                <section className="mb-12">
                    <h2 className="text-3xl font-semibold text-[#D4C08A] mb-6">
                        Official Logo
                    </h2>

                    <div className="bg-[#0D2538] border border-[#D4C08A]/20 rounded-2xl p-8 flex flex-col items-center">

                        <Image
                            src="/logo of my website.png"
                            alt="SkillBridge Logo"
                            width={220}
                            height={220}
                            priority
                        />

                        <h3 className="text-2xl font-semibold mt-6 text-[#D4C08A]">
                            SkillBridge
                        </h3>

                        <p className="text-center text-gray-300 mt-3 max-w-2xl">
                            SkillBridge is a modern Internship & Career Portal that connects
                            students with internships, jobs, and career opportunities through a
                            clean, professional, and user-friendly platform.
                        </p>

                    </div>
                </section>

                {/* Colors */}
                <section className="mb-12">
                    <h2 className="text-3xl font-semibold text-[#D4C08A] mb-6">
                        Color Palette
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 bg-[#081C2B] border border-gray-700">
                            <div className="w-full h-20 rounded bg-[#081C2B] border border-white mb-4"></div>
                            <h3 className="font-semibold">Background</h3>
                            <p>#081C2B</p>
                        </div>

                        <div className="rounded-xl p-6 bg-[#0D2538] border border-gray-700">
                            <div className="w-full h-20 rounded bg-[#0D2538] mb-4"></div>
                            <h3 className="font-semibold">Primary</h3>
                            <p>#0D2538</p>
                        </div>

                        <div className="rounded-xl p-6 bg-[#081C2B] border border-gray-700">
                            <div className="w-full h-20 rounded bg-[#D4C08A] mb-4"></div>
                            <h3 className="font-semibold">Accent</h3>
                            <p>#D4C08A</p>
                        </div>

                        <div className="rounded-xl p-6 bg-[#081C2B] border border-gray-700">
                            <div className="w-full h-20 rounded bg-[#F5F5F2] mb-4"></div>
                            <h3 className="font-semibold">Text</h3>
                            <p>#F5F5F2</p>
                        </div>
                    </div>
                </section>
                {/* Mission & Vision */}
                <section className="mb-12">
                    <h2 className="text-3xl font-semibold text-[#D4C08A] mb-6">
                        Brand Mission & Vision
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-[#0D2538] rounded-2xl p-6 border border-[#D4C08A]/20">
                            <h3 className="text-2xl font-semibold text-[#D4C08A] mb-3">
                                Our Mission
                            </h3>

                            <p className="text-gray-300 leading-7">
                                To bridge the gap between students and employers by providing
                                a modern platform where internships, jobs, and career
                                opportunities are easily accessible.
                            </p>
                        </div>

                        <div className="bg-[#0D2538] rounded-2xl p-6 border border-[#D4C08A]/20">
                            <h3 className="text-2xl font-semibold text-[#D4C08A] mb-3">
                                Our Vision
                            </h3>

                            <p className="text-gray-300 leading-7">
                                To become the trusted career platform that empowers students
                                with opportunities, skills, and professional growth across
                                industries.
                            </p>
                        </div>
                    </div>
                </section>
                {/* Typography */}
                <section>
                    <h2 className="text-3xl font-semibold text-[#D4C08A] mb-6">
                        Typography
                    </h2>

                    <div className="bg-[#0D2538] rounded-xl p-8 border border-[#D4C08A]/20">
                        <h1 className="text-4xl font-bold mb-4">
                            Poppins — Headings
                        </h1>

                        <p className="text-lg text-gray-300">
                            Inter — Body text used throughout the application for readability.
                        </p>
                    </div>
                </section>
                {/* Style Note */}
                <section className="mb-12">
                    <h2 className="text-3xl font-semibold text-[#D4C08A] mb-6">
                        Style Note
                    </h2>

                    <div className="bg-[#0D2538] rounded-2xl p-8 border border-[#D4C08A]/20">
                        <p className="text-gray-300 mb-4">
                            <span className="font-semibold text-[#D4C08A]">Fonts:</span> Poppins for
                            headings and Inter for body text.
                        </p>

                        <p className="text-gray-300">
                            <span className="font-semibold text-[#D4C08A]">Mood:</span> Professional,
                            modern, and trustworthy with a clean and elegant interface that keeps the
                            focus on internships and career opportunities.
                        </p>
                    </div>
                </section>
                {/* Brand Values */}
                <section className="mb-12">
                    <h2 className="text-3xl font-semibold text-[#D4C08A] mb-6">
                        Brand Values
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

                        <div className="bg-[#0D2538] rounded-2xl p-6 border border-[#D4C08A]/20">
                            <h3 className="text-xl font-semibold text-[#D4C08A] mb-3">
                                Professionalism
                            </h3>
                            <p className="text-gray-300">
                                Delivering a clean, modern, and reliable experience.
                            </p>
                        </div>

                        <div className="bg-[#0D2538] rounded-2xl p-6 border border-[#D4C08A]/20">
                            <h3 className="text-xl font-semibold text-[#D4C08A] mb-3">
                                Accessibility
                            </h3>
                            <p className="text-gray-300">
                                Making career opportunities easy to access for everyone.
                            </p>
                        </div>

                        <div className="bg-[#0D2538] rounded-2xl p-6 border border-[#D4C08A]/20">
                            <h3 className="text-xl font-semibold text-[#D4C08A] mb-3">
                                Growth
                            </h3>
                            <p className="text-gray-300">
                                Helping students build skills and successful careers.
                            </p>
                        </div>

                        <div className="bg-[#0D2538] rounded-2xl p-6 border border-[#D4C08A]/20">
                            <h3 className="text-xl font-semibold text-[#D4C08A] mb-3">
                                Innovation
                            </h3>
                            <p className="text-gray-300">
                                Using modern technology to simplify recruitment.
                            </p>
                        </div>

                    </div>
                </section>
                {/* UI Components */}
                <section className="mb-12">
                    <h2 className="text-3xl font-semibold text-[#D4C08A] mb-6">
                        UI Components
                    </h2>

                    <div className="bg-[#0D2538] rounded-2xl p-8 border border-[#D4C08A]/20 space-y-8">

                        {/* Buttons */}
                        <div>
                            <h3 className="text-xl font-semibold text-[#D4C08A] mb-4">
                                Buttons
                            </h3>

                            <div className="flex flex-wrap gap-4">
                                <button className="bg-[#D4C08A] text-[#081C2B] px-6 py-3 rounded-lg font-semibold">
                                    Primary Button
                                </button>

                                <button className="border border-[#D4C08A] text-[#D4C08A] px-6 py-3 rounded-lg font-semibold">
                                    Secondary Button
                                </button>
                            </div>
                        </div>

                        {/* Input */}
                        <div>
                            <h3 className="text-xl font-semibold text-[#D4C08A] mb-4">
                                Input Field
                            </h3>

                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="w-full md:w-96 bg-[#081C2B] border border-[#D4C08A]/40 rounded-lg px-4 py-3 text-white outline-none"
                            />
                        </div>

                        {/* Card */}
                        <div>
                            <h3 className="text-xl font-semibold text-[#D4C08A] mb-4">
                                Card
                            </h3>

                            <div className="max-w-sm bg-[#081C2B] rounded-xl p-6 border border-[#D4C08A]/20">
                                <h4 className="text-xl font-semibold text-[#D4C08A]">
                                    Internship Card
                                </h4>

                                <p className="text-gray-300 mt-3">
                                    Example card style used throughout the SkillBridge platform.
                                </p>
                            </div>
                        </div>

                    </div>
                </section>
                {/* Logo Usage */}
                <section className="mb-12">
                    <h2 className="text-3xl font-semibold text-[#D4C08A] mb-6">
                        Logo Usage Guidelines
                    </h2>

                    <div className="bg-[#0D2538] rounded-2xl p-8 border border-[#D4C08A]/20">
                        <ul className="list-disc list-inside space-y-3 text-gray-300">
                            <li>Always maintain the original logo proportions.</li>
                            <li>Use the official gold and navy color palette.</li>
                            <li>Leave sufficient clear space around the logo.</li>
                            <li>Do not stretch, rotate, or distort the logo.</li>
                            <li>Do not apply shadows, gradients, or unapproved colors.</li>
                        </ul>
                    </div>
                </section>
                {/* Design Tokens */}
                <section className="mb-12">
                    <h2 className="text-3xl font-semibold text-[#D4C08A] mb-6">
                        Design Tokens
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6">

                        <div className="bg-[#0D2538] rounded-xl p-6 border border-[#D4C08A]/20">
                            <h3 className="text-xl font-semibold text-[#D4C08A] mb-2">
                                Border Radius
                            </h3>

                            <p className="text-gray-300">
                                8px • 12px • 16px
                            </p>
                        </div>

                        <div className="bg-[#0D2538] rounded-xl p-6 border border-[#D4C08A]/20">
                            <h3 className="text-xl font-semibold text-[#D4C08A] mb-2">
                                Spacing
                            </h3>

                            <p className="text-gray-300">
                                8 • 16 • 24 • 32 • 48 px
                            </p>
                        </div>

                        <div className="bg-[#0D2538] rounded-xl p-6 border border-[#D4C08A]/20">
                            <h3 className="text-xl font-semibold text-[#D4C08A] mb-2">
                                Shadows
                            </h3>

                            <p className="text-gray-300">
                                Soft shadows with subtle elevation for cards and modals.
                            </p>
                        </div>

                    </div>
                </section>
            </div>
        </main>
    );
}