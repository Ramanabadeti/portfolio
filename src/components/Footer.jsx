import { personal } from '../data';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-inner">
        <span className="footer-logo">VRB</span>
        <span className="footer-copy">
          © {year} Venkata Ramana Badeti · Built with React + Vite
        </span>
        <div className="footer-links">
          <a href={personal.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={`mailto:${personal.email}`}>Email</a>
        </div>
      </div>
    </footer>
  );
}
