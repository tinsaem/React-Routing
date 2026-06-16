export default function About() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="max-w-4xl">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
          About Me
        </p>

        <h1 className="mb-8 text-4xl font-bold text-white md:text-5xl">
          Building technology that solves real-world problems.
        </h1>

        <div className="space-y-6 text-lg leading-relaxed text-slate-300">
          <p>
            I'm Tinsae, a Full-Stack Developer and Computer Science student
            passionate about creating impactful digital solutions. I enjoy
            transforming ideas into reliable, scalable, and user-friendly
            applications that deliver real value.
          </p>

          <p>
            My experience spans web development, AI-powered systems,
            cybersecurity, and software engineering. I enjoy working across the
            entire development lifecycle, from planning and designing systems to
            building, securing, and deploying them.
          </p>

          <p>
            Beyond development, I have a strong interest in cybersecurity,
            penetration testing, and behavioral cybersecurity research. These
            fields help me understand not only how systems work, but also how
            they can be protected against evolving threats.
          </p>

          <p>
            I am continuously learning and expanding my skills through personal
            projects, academic work, and hands-on experimentation with modern
            technologies.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
            <h3 className="mb-2 font-semibold text-white">
              Full-Stack Development
            </h3>
            <p className="text-sm text-slate-400">
              Building responsive and scalable web applications.
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
            <h3 className="mb-2 font-semibold text-white">AI Systems</h3>
            <p className="text-sm text-slate-400">
              Developing intelligent and automated solutions.
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
            <h3 className="mb-2 font-semibold text-white">Cybersecurity</h3>
            <p className="text-sm text-slate-400">
              Understanding security risks and system protection.
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
            <h3 className="mb-2 font-semibold text-white">
              Research & Learning
            </h3>
            <p className="text-sm text-slate-400">
              Exploring emerging technologies and best practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
