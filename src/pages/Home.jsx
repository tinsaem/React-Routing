import "./style.css"

function Home() {
  return (
    <div className="home-container">
      <header className="hero">
        <h1>Welcome to My Website</h1>
        <p>
          Build modern, fast, and responsive web applications with ease.
        </p>

        <button className="hero-btn">Get Started</button>
      </header>

      <section className="features">
        <h2>Features</h2>

        <div className="feature-list">
          <div className="card">
            <h3>Fast</h3>
            <p>Optimized performance for smooth user experience.</p>
          </div>

          <div className="card">
            <h3>Responsive</h3>
            <p>Works perfectly on mobile, tablet, and desktop.</p>
          </div>

          <div className="card">
            <h3>Modern</h3>
            <p>Built with latest web technologies and best practices.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;