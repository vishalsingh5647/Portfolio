import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoAnimating, setLogoAnimating] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleLogoClick = () => {
    setMobileMenuOpen(false);
    setLogoAnimating(true);
    const homeEl = document.getElementById('home');
    if (homeEl && homeEl.scrollIntoView) {
      homeEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setTimeout(() => setLogoAnimating(false), 400);
  };

  const handleNavLinkClick = (e) => {
    const link = e.currentTarget;
    // add temporary clicked class for animation
    link.classList.add('clicked');
    setTimeout(() => link.classList.remove('clicked'), 400);
    closeMobileMenu();
    // let the default anchor behavior handle smooth scroll (CSS smooth behavior enabled)
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className={`logo ${logoAnimating ? 'clicked' : ''}`} onClick={handleLogoClick} role="button" tabIndex={0}
             onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleLogoClick(); } }}>
          <span className="logo-bracket"></span>
          Vishal-
          <span className="logo-dev">Portfolio</span>
        </div>
        
        <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={handleNavLinkClick}>Home</a></li>
          <li><a href="#about" onClick={handleNavLinkClick}>About</a></li>
          <li><a href="#projects" onClick={handleNavLinkClick}>Projects</a></li>
          <li><a href="#contact" onClick={handleNavLinkClick}>Contact</a></li>
        </ul>
        
        <div className="nav-right">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? (
              <i className="fas fa-sun"></i>
            ) : (
              <i className="fas fa-moon"></i>
            )}
          </button>
          <div className="social-icons-nav">
            <a href="https://github.com/vishalsingh5647" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://wa.me/919335404282" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
          
          <div className={`hamburger ${mobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;