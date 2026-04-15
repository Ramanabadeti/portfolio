import { experience, education } from '../data';

function TimelineItem({ item, type }) {
  const dotColor = item.color || 'var(--purple)';
  return (
    <div className="timeline-item reveal">
      <div className="timeline-dot" style={{ background: dotColor, color: dotColor }} />
      <div className="timeline-card">
        <div className="timeline-period">{item.period}</div>
        {type === 'exp' ? (
          <>
            <div className="timeline-role">{item.role}</div>
            <div className="timeline-company">{item.company} · {item.type}</div>
            <ul className="timeline-bullets">
              {item.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </>
        ) : (
          <>
            <div className="timeline-role">{item.degree}</div>
            <div className="timeline-company">{item.school}</div>
            <div style={{ fontSize: '0.82rem', color: 'var(--text-3)', marginTop: 2 }}>{item.location}</div>
            <div className="timeline-gpa">GPA: {item.gpa}</div>
          </>
        )}
      </div>
    </div>
  );
}

export default function Timeline() {
  return (
    <section id="experience">
      <div className="container">
        <div className="reveal" style={{ marginBottom: 56 }}>
          <span className="section-label">Background</span>
          <h2 className="section-title">Experience &amp; Education</h2>
        </div>

        <div className="timeline-cols">
          <div className="reveal">
            <h3 className="timeline-col-title">
              <span style={{ fontSize: '1.3rem' }}>💼</span> Work Experience
            </h3>
            <div className="timeline">
              {experience.map((e, i) => <TimelineItem key={i} item={e} type="exp" />)}
            </div>
          </div>

          <div className="reveal reveal-delay-2">
            <h3 className="timeline-col-title">
              <span style={{ fontSize: '1.3rem' }}>🎓</span> Education
            </h3>
            <div className="timeline">
              {education.map((e, i) => <TimelineItem key={i} item={e} type="edu" />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
