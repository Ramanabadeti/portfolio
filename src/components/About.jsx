export default function About() {
  const stats = [
    { num: '2+', label: 'Years Experience' },
    { num: '3', label: 'Cloud Certifications' },
    { num: '8+', label: 'Projects Shipped' },
    { num: 'MS', label: 'UW Milwaukee' },
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
                I'm a <span className="about-highlight">Cloud Engineer</span> with 2+ years of professional
                experience provisioning, automating, and supporting infrastructure on AWS and Azure. I specialize
                in Infrastructure as Code with Terraform, container orchestration with Kubernetes, and CI/CD
                pipelines with GitHub Actions.
              </p>
              <p style={{ color: 'var(--text-2)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: 18 }}>
                I hold an <span className="about-highlight">MS in Information Technology from the University of
                Wisconsin Milwaukee</span> and am certified as an AWS Solutions Architect, HashiCorp Terraform
                Associate, and Certified Kubernetes Administrator (CKA). I also build end-to-end with React and
                Node.js, and integrate AI into real tools using Anthropic's Claude API.
              </p>
              <p style={{ color: 'var(--text-2)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: 24 }}>
                Based in <span className="about-highlight">Milwaukee, WI</span> — available for full-time, hybrid,
                or remote opportunities across the US.
              </p>
              <div className="about-available">
                Open to Cloud & DevOps Opportunities
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
