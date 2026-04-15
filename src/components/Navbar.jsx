import { useState, useEffect } from 'react';

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        <a href="#" className="navbar-logo">VRB</a>

        <div className="navbar-links">
          {links.map(l => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
          <a href="mailto:vbadeti4@gmail.com" className="navbar-links navbar-cta">
            Hire Me
          </a>
        </div>

        <button
          className="navbar-menu-btn"
          aria-label="Toggle menu"
          onClick={() => setOpen(o => !o)}
        >
          <span style={{ transform: open ? 'rotate(45deg) translate(5px, 5px)' : '' }} />
          <span style={{ opacity: open ? 0 : 1 }} />
          <span style={{ transform: open ? 'rotate(-45deg) translate(5px, -5px)' : '' }} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{
          position: 'absolute', top: '100%', left: 0, right: 0,
          background: 'rgba(3,0,20,0.97)', backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
          padding: '16px 24px 24px', display: 'flex', flexDirection: 'column', gap: '16px'
        }}>
          {links.map(l => (
            <a
              key={l.href} href={l.href}
              style={{ fontSize: '1rem', color: 'var(--text-1)', fontFamily: 'var(--font-display)', fontWeight: 500 }}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
