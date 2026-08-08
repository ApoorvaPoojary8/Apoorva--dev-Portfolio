const projects = [
  {
    number: "01",
    name: "AdGen AI",
    category: "AI-POWERED PRODUCT",
    description:
      "An AI-powered web application that generates UGC-style advertisement images and videos from user-uploaded inputs.",
    tech: ["React.js", "Node.js", "Express.js", "PostgreSQL", "Gemini API", "Cloudinary"],
    highlights: ["Image & video generation", "Clerk authentication", "Subscription plans", "Credit-based usage"],
    accent: "project-teal",
  },
  {
    number: "02",
    name: "CertifyHub",
    category: "FULL-STACK PLATFORM",
    description:
      "A certificate management platform that enables organizers to create events, upload templates and generate certificates in bulk.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT", "PDF-Lib"],
    highlights: ["50+ certificates per batch", "Role-based access", "CSV participant upload", "30+ min → under 2 min"],
    accent: "project-sand",
  },
  {
    number: "03",
    name: "PRISM",
    category: "WEB APPLICATION",
    description:
      "A hostel complaint and maintenance tracking system designed for Students, Wardens and Chief Wardens.",
    tech: ["React.js", "Node.js", "Express.js", "MySQL"],
    highlights: ["3 user roles", "OTP authentication", "Automatic escalation after 3 days", "CSV reports"],
    accent: "project-dark",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-label">03 — SELECTED WORK</div>
        <div className="section-heading-row projects-heading">
          <h2>Things I've <em>built.</em></h2>
          <p>Projects where engineering meets a real user problem.</p>
        </div>

        <div className="projects-list">
          {projects.map((project, index) => (
            <article className={`project-card ${project.accent}`} key={project.name}>
              <div className="project-visual">
                <div className="project-window">
                  <div className="window-bar"><i/><i/><i/></div>
                  <div className="mock-ui">
                    <span className="mock-label">{project.category}</span>
                    <div className="mock-title">{project.name}</div>
                    <div className="mock-lines"><i/><i/><i/></div>
                    <div className="mock-boxes"><b/><b/><b/></div>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <span className="project-number">{project.number}</span>
                <span className="project-category">{project.category}</span>
                <h3>{project.name}</h3>
                <p>{project.description}</p>

                <div className="project-tags">
                  {project.tech.map((t) => <span key={t}>{t}</span>)}
                </div>

                <ul>
                  {project.highlights.map((h) => <li key={h}>{h}</li>)}
                </ul>

                <div className="project-links">
                  <a href="#" onClick={(e) => e.preventDefault()}>VIEW PROJECT ↗</a>
                  <a href="#" onClick={(e) => e.preventDefault()}>GITHUB ↗</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
