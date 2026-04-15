export default function About() {
  const stats = [
    { num: '3+', label: 'Years Experience' },
    { num: '7+', label: 'Projects Shipped' },
    { num: 'MS', label: 'UW Milwaukee' },
    { num: '3.55', label: 'GPA / 4.0' },
  ];

  return (
    <section id="about">
      <div className="container">
        <div className="about-grid">
          <div className="reveal">
            <span className="section-label">About Me</span>
            <h2 className="section-title">Building things<br />that matter</h2>
            <div style={{ marginTop: 32 }}>
              <p className="about-text" style={{ color: 'var(--text-2)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: 18 }}>
                I'm a <span className="about-highlight">Full-Stack Developer</span> with 3+ years of professional
                experience building responsive, production-grade web applications. I specialize in the
                React.js ecosystem for frontends and Node.js + Express for APIs.
              </p>
              <p style={{ color: 'var(--text-2)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: 18 }}>
                I hold an <span className="about-highlight">MS in Information Technology from the University of
                Wisconsin Milwaukee</span> (GPA 3.55) and have shipped everything from real-time collaborative
                boards to AI-powered tools using Anthropic's Claude API.
              </p>
              <p style={{ color: 'var(--text-2)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: 24 }}>
                Based in <span className="about-highlight">Milwaukee, WI</span> — available for full-time, hybrid,
                or remote opportunities across the US.
              </p>
              <div className="about-available">
                Open to Full-Time Opportunities
              </div>
            </div>
          </div>

          <div className="about-stats reveal reveal-delay-2">
            {stats.map((s, i) => (
              <div key={i} className="stat-box reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="stat-num">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
