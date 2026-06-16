const projects = [
  {
    title: "Portfolio Website",
    description:
      "A modern personal portfolio built with React and Tailwind CSS to showcase my skills, projects, and professional experience.",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
  },
  {
    title: "AI Agent-Based System",
    description:
      "An intelligent system that leverages AI agents to automate tasks, process information, and assist users in solving real-world problems.",
    technologies: ["Python", "AI Agents", "APIs"],
  },
  {
    title: "Cybersecurity Audit Project",
    description:
      "A security assessment project focused on identifying vulnerabilities, evaluating risks, and recommending mitigation strategies.",
    technologies: ["Networking", "Security", "Penetration Testing"],
  },
  {
    title: "Full-Stack Web Application",
    description:
      "A complete web solution featuring frontend and backend development, authentication, database integration, and responsive design.",
    technologies: ["React", "Node.js", "MongoDB"],
  },
];

export default function Projects() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-14">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
          Portfolio
        </p>

        <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">
          Featured Projects
        </h1>

        <p className="max-w-2xl text-lg text-slate-300">
          A collection of projects that demonstrate my experience in software
          development, AI systems, cybersecurity, and problem-solving.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group rounded-2xl border border-slate-800 bg-slate-900/40 p-7 transition duration-300 hover:-translate-y-2 hover:border-blue-500"
          >
            <h2 className="mb-4 text-2xl font-semibold text-white">
              {project.title}
            </h2>

            <p className="mb-6 leading-relaxed text-slate-400">
              {project.description}
            </p>

            <div className="mb-6 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-slate-700 px-3 py-1 text-sm text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <button className="font-medium text-blue-400 transition group-hover:text-blue-300">
              View Project →
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
