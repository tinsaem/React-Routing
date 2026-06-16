export default function Contact() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="max-w-4xl">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
          Contact
        </p>

        <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">
          Let's Build Something Together
        </h1>

        <p className="mb-12 max-w-2xl text-lg leading-relaxed text-slate-300">
          Whether you have a project idea, internship opportunity, collaboration
          proposal, or simply want to connect, I'd love to hear from you.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          <a
            href="mailto:yourname@example.com"
            className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 transition hover:-translate-y-1 hover:border-blue-500"
          >
            <h3 className="mb-2 text-lg font-semibold text-white">Email</h3>
            <p className="text-slate-400">yourname@example.com</p>
          </a>

          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 transition hover:-translate-y-1 hover:border-blue-500"
          >
            <h3 className="mb-2 text-lg font-semibold text-white">GitHub</h3>
            <p className="text-slate-400">github.com/yourusername</p>
          </a>

          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 transition hover:-translate-y-1 hover:border-blue-500"
          >
            <h3 className="mb-2 text-lg font-semibold text-white">LinkedIn</h3>
            <p className="text-slate-400">linkedin.com/in/yourusername</p>
          </a>
        </div>

        <div className="mt-16 rounded-2xl border border-slate-800 bg-slate-900/30 p-8">
          <h2 className="mb-3 text-2xl font-semibold text-white">
            Open to Opportunities
          </h2>

          <p className="text-slate-300">
            I'm currently interested in software development internships,
            freelance projects, cybersecurity opportunities, and collaborative
            technology initiatives.
          </p>
        </div>
      </div>
    </section>
  );
}
