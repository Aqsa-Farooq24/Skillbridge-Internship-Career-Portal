
export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[#081C2B] text-[#F5F5F2] flex items-center justify-center px-6">
      <div className="max-w-lg text-center bg-[#0D2538] p-10 rounded-2xl border border-[#D4C08A]/20 shadow-lg">
        <h1 className="text-4xl font-bold text-[#D4C08A] mb-4">
          Welcome Back
        </h1>

        <p className="text-gray-300 leading-7">
          Sign in to your SkillBridge account to manage your profile,
          explore internships, apply for jobs, and track your career
          opportunities.
        </p>

        <button className="mt-8 bg-[#D4C08A] text-[#081C2B] font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition">
          Login Coming Soon
        </button>
      </div>
    </main>
  );
}