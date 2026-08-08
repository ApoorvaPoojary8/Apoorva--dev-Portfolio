export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="section-label">01 — ABOUT</div>

        <div className="about-grid">
          <h2>
            I build software
            <br />
            that solves <em>real</em>
            <br />
            problems.
          </h2>

          <div className="about-copy">
            <p>
              I'm Apoorva, a Computer Science Engineering student at Canara
              Engineering College with a 9.22 SGPA.
            </p>
            <p>
              My work spans full-stack development, backend engineering,
              databases and AI-powered applications. I like taking an idea
              from a rough concept to a working product.
            </p>
            <p>
              I work primarily with Java, JavaScript, Python, SQL, React,
              Node.js, Express, MongoDB and MySQL.
            </p>
          </div>
        </div>

        <div className="stats-grid">
          <div><strong>9.22</strong><span>SGPA</span></div>
          <div><strong>03</strong><span>FEATURED PROJECTS</span></div>
          <div><strong>TOP 5</strong><span>AI HACKATHON</span></div>
          <div><strong>TOP 7</strong><span>IDEATHON</span></div>
        </div>
      </div>
    </section>
  );
}
