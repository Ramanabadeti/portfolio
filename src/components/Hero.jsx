import { useState, useEffect } from 'react';
import { personal } from '../data';

const ROLES = personal.roles;

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const target = ROLES[roleIdx];
    let timeout;

    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 2400);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length - 1)), 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIdx(i => (i + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIdx]);

  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
        <div className="orb orb-4" />
      </div>

      <div className="hero-inner">
        <div className="hero-content">
          <p className="hero-greeting">// Hello, World 👋</p>

          <h1 className="hero-name">
            I'm <span>Venkata<br />Ramana Badeti</span>
          </h1>

          <div className="hero-role-wrap">
            <span className="hero-role">
              {displayed}<span className="hero-cursor" />
            </span>
          </div>

          <p className="hero-desc">
            Full-Stack Developer with <strong>3+ years</strong> of professional experience.
            MS in Information Technology from <strong>UW Milwaukee</strong>.
            I build production-grade web apps with React, Node.js, and AI integrations
            that solve real problems.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View My Work →
            </a>
            <a href="#contact" className="btn btn-outline">
              Let's Talk
            </a>
          </div>

          <div className="hero-socials">
            <span className="hero-socials-label">Find me on</span>
            <a href={personal.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
            </a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href={`mailto:${personal.email}`} aria-label="Email">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="M22 7l-10 7L2 7"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-photo-wrap">
            <div className="hero-photo-ring" />
            <div className="hero-photo">
              <img src="/image.png" alt="Venkata Ramana Badeti" />
            </div>

            <div className="hero-stats hero-stats-left">
              <div className="hero-stat-card">
                <div className="num">3+</div>
                <div className="lbl">Years Exp</div>
              </div>
              <div className="hero-stat-card">
                <div className="num">7+</div>
                <div className="lbl">Projects</div>
              </div>
            </div>

            <div className="hero-stats hero-stats-right">
              <div className="hero-stat-card">
                <div className="num">MS</div>
                <div className="lbl">Degree</div>
              </div>
              <div className="hero-stat-card">
                <div className="num">3.55</div>
                <div className="lbl">GPA</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <div className="scroll-mouse" />
        <span>scroll</span>
      </div>
    </section>
  );
}
