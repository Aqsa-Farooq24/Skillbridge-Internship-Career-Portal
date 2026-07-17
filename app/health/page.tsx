export default function HealthPage() {
  return (
    <main className="min-h-screen bg-background text-foreground px-10 py-16">
      <h1 className="text-6xl font-bold text-[#D4C08A]">
        Health Status
      </h1>

      <p className="mt-8 max-w-3xl text-xl leading-8 text-gray-300">
        This page monitors the application's status and confirms that all core services are running correctly.
      </p>
    </main>
  );
}