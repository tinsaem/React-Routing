export default function Home() {
  return (
    <section className="flex min-h-[85vh] items-center">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-4xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
            Full-Stack Developer
          </p>

          <h1 className="mb-6 text-5xl font-bold leading-tight text-white md:text-7xl">
            Hi, I'm <span className="text-blue-400">Tinsae</span>
          </h1>

          <p className="mb-8 max-w-3xl text-lg leading-relaxed text-slate-300 md:text-xl">
            I build modern web applications, AI-powered systems, and secure
            digital solutions. My work combines software engineering,
            cybersecurity, and intelligent automation to solve real-world
            problems.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="rounded-lg bg-blue-500 px-6 py-3 font-medium text-white transition hover:bg-blue-600">
              View Projects
            </button>

            <button className="rounded-lg border border-slate-700 px-6 py-3 font-medium text-slate-300 transition hover:border-slate-500 hover:bg-slate-800">
              Contact Me
            </button>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            <span className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300">
              React
            </span>

            <span className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300">
              Node.js
            </span>

            <span className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300">
              AI Agents
            </span>

            <span className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300">
              Cybersecurity
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
