import { useEffect, useRef } from 'react';
import { skills } from '../data';

const categories = [
  {
    key: 'frontend',
    title: 'Frontend',
    icon: '🎨',
    iconBg: 'rgba(139,92,246,0.15)',
    barGrad: 'linear-gradient(90deg, #8b5cf6, #a78bfa)',
  },
  {
    key: 'backend',
    title: 'Backend & APIs',
    icon: '⚙️',
    iconBg: 'rgba(6,182,212,0.15)',
    barGrad: 'linear-gradient(90deg, #06b6d4, #22d3ee)',
  },
  {
    key: 'database',
    title: 'Database & Storage',
    icon: '🗄️',
    iconBg: 'rgba(245,158,11,0.15)',
    barGrad: 'linear-gradient(90deg, #f59e0b, #fbbf24)',
  },
  {
    key: 'tools',
    title: 'Tools & Practices',
    icon: '🛠️',
    iconBg: 'rgba(16,185,129,0.15)',
    barGrad: 'linear-gradient(90deg, #10b981, #34d399)',
  },
];

export default function Skills() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.currentTarget
              .querySelectorAll('.skill-bar')
              .forEach(bar => {
                const pct = bar.dataset.pct;
                bar.style.width = pct + '%';
              });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef}>
      <div className="container">
        <div className="reveal" style={{ marginBottom: 56 }}>
          <span className="section-label">Technical Skills</span>
          <h2 className="section-title">What I work with</h2>
        </div>

        <div className="skills-grid">
          {categories.map((cat, ci) => (
            <div
              key={cat.key}
              className={`skill-category reveal reveal-delay-${ci + 1}`}
            >
              <div className="skill-cat-header">
                <div className="skill-cat-icon" style={{ background: cat.iconBg }}>
                  {cat.icon}
                </div>
                <span className="skill-cat-title">{cat.title}</span>
              </div>

              {skills[cat.key].map(skill => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-meta">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-pct">{skill.level}%</span>
                  </div>
                  <div className="skill-track">
                    <div
                      className="skill-bar"
                      data-pct={skill.level}
                      style={{ background: cat.barGrad }}
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
