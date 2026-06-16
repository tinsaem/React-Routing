import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center justify-center px-6">
      <div className="max-w-2xl text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-slate-500">
          Error 404
        </p>

        <h1 className="mb-6 text-7xl font-bold text-white md:text-8xl">404</h1>

        <h2 className="mb-4 text-3xl font-semibold text-white">
          Page Not Found
        </h2>

        <p className="mb-10 text-lg leading-relaxed text-slate-400">
          The page you're looking for doesn't exist, may have been moved, or the
          URL might be incorrect.
        </p>

        <Link
          to="/"
          className="inline-flex items-center rounded-lg bg-blue-500 px-6 py-3 font-medium text-white transition hover:bg-blue-600"
        >
          Return Home
        </Link>
      </div>
    </section>
  );
}
