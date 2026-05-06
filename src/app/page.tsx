import { AuditForm } from "@/components/audit-form";


export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto flex max-w-6xl flex-col items-center px-6 py-20 text-center">
        <div className="mb-6 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300">
          AI Spend Audit for Startups
        </div>

        <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
          Stop Overspending on AI Tools
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-400">
          Audit your Cursor, ChatGPT, Claude, Copilot, and API spending in seconds.
          Discover savings opportunities instantly.
        </p>

        <div className="mt-10 w-full max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-8">
          <AuditForm />
        </div>
      </section>
    </main>
  );
}