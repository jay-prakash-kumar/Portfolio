import { Github, Linkedin, Twitter, Globe, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="footer" style={{ 
      background: 'var(--bg-primary)', 
      padding: '5rem 0 2rem', 
      position: 'relative',
      borderTop: '1px solid var(--glass-border)',
      marginTop: 'auto'
    }}>
      <div className="container">
        
        {/* Top Section */}
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          {/* Logo and Tagline */}
          <div style={{ maxWidth: '400px' }}>
            <h2 className="gradient-text" style={{ 
              fontSize: '2.2rem', 
              fontWeight: '800', 
              marginBottom: '0.8rem',
              letterSpacing: '-0.5px'
            }}>
              Jay Prakash Kumar
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '1rem' }}>
              Designing and building the future of the web, one pixel at a time.
            </p>
          </div>

          {/* Social Icons */}
          <div style={{ display: 'flex', gap: '1rem' }}>
            {[
              { icon: <Github size={20} />, href: 'https://github.com/jay-prakash-kumar' },
              { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/jay-prakashkumar/' },
              { icon: <Twitter size={20} />, href: 'https://www.twitter.com' },
              { icon: <Globe size={20} />, href: 'jayprakashportfolio.vercel.app/' }
            ].map((social, idx) => (
              <a 
                key={idx} 
                href={social.href} 
                target="_blank" 
                rel="noreferrer"
                className="social-icon-btn"
                style={{
                  width: '45px', 
                  height: '45px', 
                  borderRadius: '50%', 
                  background: 'var(--nav-bg)', 
                  border: '1px solid var(--glass-border)',
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: 'var(--text-secondary)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                   e.currentTarget.style.color = '#000';
                   e.currentTarget.style.background = 'var(--accent-color)';
                   e.currentTarget.style.borderColor = 'var(--accent-color)';
                   e.currentTarget.style.transform = 'translateY(-3px)';
                   e.currentTarget.style.boxShadow = '0 5px 15px var(--accent-glow)';
                }}
                onMouseLeave={(e) => {
                   e.currentTarget.style.color = 'var(--text-secondary)';
                   e.currentTarget.style.background = 'var(--nav-bg)';
                   e.currentTarget.style.borderColor = 'var(--glass-border)';
                   e.currentTarget.style.transform = 'translateY(0)';
                   e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div style={{ 
          height: '1px', 
          width: '100%', 
          background: 'var(--glass-border)', 
          opacity: 0.3,
          marginBottom: '1.5rem' 
        }}></div>

        {/* Bottom Section */}
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          gap: '1rem',
          color: 'var(--text-secondary)',
          fontSize: '0.9rem',
          fontWeight: '500'
        }}>
          <div>
            &copy; {new Date().getFullYear()} Jay Prakash. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <a href="#" style={{ transition: 'color 0.3s ease', textDecoration: 'none', color: 'inherit' }} onMouseEnter={e => e.currentTarget.style.color='var(--text-primary)'} onMouseLeave={e => e.currentTarget.style.color='var(--text-secondary)'}>Privacy Policy</a>
            <a href="#" style={{ transition: 'color 0.3s ease', textDecoration: 'none', color: 'inherit' }} onMouseEnter={e => e.currentTarget.style.color='var(--text-primary)'} onMouseLeave={e => e.currentTarget.style.color='var(--text-secondary)'}>Terms of Service</a>
          </div>
        </div>

      </div>

      {/* Floating Scroll to Top Button */}
      <button 
        onClick={scrollToTop}
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          width: '55px',
          height: '55px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #ef4444, #eab308)', /* Matches site theme red to yellow */
          border: 'none',
          color: '#000',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 4px 15px rgba(239, 68, 68, 0.4)',
          opacity: showTopBtn ? 1 : 0,
          transform: showTopBtn ? 'translateY(0)' : 'translateY(20px)',
          visibility: showTopBtn ? 'visible' : 'hidden',
          transition: 'all 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
          zIndex: 999
        }}
        onMouseEnter={(e) => {
           e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)';
           e.currentTarget.style.boxShadow = '0 8px 25px rgba(234, 179, 8, 0.6)';
        }}
        onMouseLeave={(e) => {
           e.currentTarget.style.transform = 'translateY(0) scale(1)';
           e.currentTarget.style.boxShadow = '0 4px 15px rgba(239, 68, 68, 0.4)';
        }}
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </button>

    </footer>
  );
}
