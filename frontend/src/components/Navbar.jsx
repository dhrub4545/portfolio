import React, { useState, useEffect } from 'react';
import { FileText, Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Navbar({ onOpenResume, theme, toggleTheme }) {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'skills', label: 'Skills & Edu' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120;
      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(link.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="navbar">
      <a href="#home" className="logo-wrap" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>
        <img src="/assets/dhrub-profile.png" alt="Dhrub Pandit" className="logo-avatar" />
        <div className="logo-title-wrap">
          <span className="logo-name">
            Dhrub Pandit <span className="font-handwriting" style={{ fontSize: '1.4rem', color: 'var(--accent-primary)', marginLeft: '4px' }}>dev</span>
          </span>
          <span className="logo-tag">Full Stack & AI Engineer</span>
        </div>
      </a>

      {/* Desktop Menu */}
      <nav className="desktop-nav">
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick(link.id);
            }}
            className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* Actions */}
      <div className="nav-actions">
        <button className="btn-resume" onClick={onOpenResume}>
          <FileText size={16} />
          <span>Resume</span>
        </button>

        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: 'var(--nav-h)',
            left: 0,
            right: 0,
            background: 'var(--card-bg)',
            borderBottom: '1px solid var(--glass-border)',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
          }}
        >
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              style={{
                background: activeSection === link.id ? 'var(--accent-primary)' : 'transparent',
                color: activeSection === link.id ? '#0d0d12' : 'var(--text-primary)',
                border: 'none',
                padding: '12px 16px',
                borderRadius: '12px',
                textAlign: 'left',
                fontSize: '1rem',
                fontWeight: 700,
                cursor: 'pointer'
              }}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
