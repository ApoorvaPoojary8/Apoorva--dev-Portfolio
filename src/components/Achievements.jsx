const achievements = [
  ["01", "Bengaluru AI Hackathon 2026", "Top 5 Finalists", "UI Experience for AI-First Applications · Sahaay AI", "APR 2026"],
  ["02", "Inceptio Ideathon", "Top 7 among 52 teams", "ResueSync — Offline Emergency Triage System", "FEB 2026"],
  ["03", "Technical Workshops", "30+ students", "Conducted SQL Data Cleaning and Git/GitHub sessions", "NOV 2025"],
  ["04", "Leadership", "2024 — PRESENT", "Class Representative · Library Student Coordinator · Training Student Coordinator", ""],
];

export default function Achievements() {
  return (
    <section id="achievements" className="section achievements-section">
      <div className="container">
        <div className="section-label">05 — MILESTONES</div>
        <div className="section-heading-row">
          <h2>Things I'm <em>proud</em> of.</h2>
          <p>Moments that shaped how I build, learn and contribute.</p>
        </div>

        <div className="achievement-list">
          {achievements.map(([num, title, main, detail, date]) => (
            <article className="achievement" key={num}>
              <span className="achievement-num">{num}</span>
              <div>
                <p className="muted-label">{date}</p>
                <h3>{title}</h3>
                <strong>{main}</strong>
                <p>{detail}</p>
              </div>
              <span className="arrow">↗</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
