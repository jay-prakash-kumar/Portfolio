import { Menu, X, Code2, Sun, Moon } from 'lucide-react';
import { useState } from 'react';

export default function Navbar({ theme, toggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#" className="logo" onClick={() => setIsMenuOpen(false)}>
          <Code2 size={28} className="text-highlight" />
          <span>Jay Prakash</span>
        </a>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <div className="nav-links desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <a href="#about">About</a>
            <a href="#education">Education</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#training">Training</a>
            <a href="#certificates">Certificates</a>
            <a href="#achievements">Achievements</a>
            <a href="#contact" className="btn btn-primary">Contact Me</a>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button onClick={toggleTheme} aria-label="Toggle Theme" style={{ background: 'transparent', border: 'none', color: 'var(--text-primary)', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
              {theme === 'light' ? <Moon size={24} /> : <Sun size={24} />}
            </button>
            <div className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
               {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </div>
          </div>
        </div>
      </div>

      <div className={`mobile-nav-dropdown ${isMenuOpen ? 'open' : ''}`}>
        <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
        <a href="#education" onClick={() => setIsMenuOpen(false)}>Education</a>
        <a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a>
        <a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
        <a href="#training" onClick={() => setIsMenuOpen(false)}>Training</a>
        <a href="#certificates" onClick={() => setIsMenuOpen(false)}>Certificates</a>
        <a href="#achievements" onClick={() => setIsMenuOpen(false)}>Achievements</a>
        <a href="#contact" onClick={() => setIsMenuOpen(false)} className="mobile-btn">Contact Me</a>
      </div>
    </nav>
  );
}
