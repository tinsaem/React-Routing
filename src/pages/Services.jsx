const services = [
  {
    title: "Full-Stack Web Development",
    description:
      "Designing and building modern, responsive, and scalable web applications using contemporary frontend and backend technologies.",
  },
  {
    title: "AI-Powered Solutions",
    description:
      "Developing intelligent systems, automation workflows, and AI agent-based applications that improve efficiency and decision-making.",
  },
  {
    title: "Cybersecurity Assessment",
    description:
      "Identifying security vulnerabilities, evaluating risks, and providing recommendations to strengthen system security.",
  },
  {
    title: "Technical Training & Mentorship",
    description:
      "Delivering practical training sessions in programming, cybersecurity, and digital literacy for students and professionals.",
  },
  {
    title: "Research & Technical Consulting",
    description:
      "Supporting technology projects through system analysis, research, documentation, and solution design.",
  },
];

export default function Services() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-14">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
          Services
        </p>

        <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">
          How I Can Help
        </h1>

        <p className="max-w-3xl text-lg leading-relaxed text-slate-300">
          I provide software development, AI, cybersecurity, and technical
          consulting services focused on delivering practical and impactful
          solutions.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <article
            key={service.title}
            className="rounded-2xl border border-slate-800 bg-slate-900/40 p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-500"
          >
            <h2 className="mb-4 text-2xl font-semibold text-white">
              {service.title}
            </h2>

            <p className="leading-relaxed text-slate-400">
              {service.description}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-16 rounded-2xl border border-slate-800 bg-slate-900/30 p-8">
        <h2 className="mb-3 text-2xl font-semibold text-white">
          Looking for a collaboration?
        </h2>

        <p className="text-slate-300">
          I'm always interested in discussing innovative projects, freelance
          opportunities, internships, and technology-focused collaborations.
        </p>
      </div>
    </section>
  );
}
