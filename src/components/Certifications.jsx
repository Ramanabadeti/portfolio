import { certifications } from '../data';

export default function Certifications() {
  return (
    <section id="certifications">
      <div className="container">
        <div className="reveal" style={{ marginBottom: 56 }}>
          <span className="section-label">Credentials</span>
          <h2 className="section-title">Certifications</h2>
        </div>

        <div className="certs-grid">
          {certifications.map((cert, i) => (
            <div
              key={i}
              className={`cert-card reveal reveal-delay-${i + 1}`}
              style={{ borderColor: cert.color + '25' }}
            >
              <span className="cert-icon">{cert.icon}</span>
              <div className="cert-name">{cert.name}</div>
              <div className="cert-issuer">{cert.issuer}</div>
              <span className={`cert-status ${cert.status === 'Completed' ? 'cert-status-done' : 'cert-status-progress'}`}>
                {cert.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
