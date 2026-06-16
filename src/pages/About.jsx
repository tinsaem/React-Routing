export default function About() {
  return (
    <div className="page-box max-w-3xl mx-auto p-8 rounded-xl shadow-lg bg-white">
      <span className="page-label inline-block mb-4 rounded-full bg-blue-100 px-4 py-2 text-blue-800">
        About Page
      </span>

      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        About Me
      </h1>

      <p className="text-lg text-gray-700 mb-4">
        I am a Full-Stack Developer passionate about building modern,
        scalable, and secure web applications using current technologies.
      </p>

      <p className="text-lg text-gray-700 mb-6">
        My work includes AI agent-based systems, cybersecurity,
        penetration testing, industry-focused teaching, and behavioral
        cybersecurity research. I enjoy combining software engineering
        with security and artificial intelligence to solve real-world problems.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-3">
        My Skills
      </h2>

      <div className="flex flex-wrap gap-3 mb-6">
        <span className="rounded bg-blue-100 px-3 py-1 text-blue-800">
          React
        </span>

        <span className="rounded bg-green-100 px-3 py-1 text-green-800">
          JavaScript
        </span>

        <span className="rounded bg-purple-100 px-3 py-1 text-purple-800">
          AI Development
        </span>

        <span className="rounded bg-red-100 px-3 py-1 text-red-800">
          Cybersecurity
        </span>

        <span className="rounded bg-yellow-100 px-3 py-1 text-yellow-800">
          Penetration Testing
        </span>
      </div>

      <div className="rounded-lg bg-gray-100 p-5">
        <h2 className="text-xl font-bold mb-2">
          My Goal
        </h2>

        <p className="text-gray-700">
          My goal is to create secure, intelligent, and user-friendly
          applications while sharing knowledge with the next generation
          of developers.
        </p>
      </div>

      <button className="mt-6 rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-800">
        Contact Me
      </button>
    </div>
  );
}