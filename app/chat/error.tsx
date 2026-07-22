"use client";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({
  error,
  reset,
}: ErrorPageProps) {
  console.error(error);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#081C2B] px-6">
      <div className="max-w-md w-full rounded-xl border border-red-500 bg-red-500/10 p-8 text-center">
        <h1 className="text-2xl font-bold text-red-400">
          Something went wrong
        </h1>

        <p className="mt-3 text-gray-300">
          We couldn't load this page. Please try again.
        </p>

        <button
          onClick={reset}
          className="mt-6 rounded-lg bg-[#D4C08A] px-5 py-2 font-semibold text-[#081C2B] hover:opacity-90"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}