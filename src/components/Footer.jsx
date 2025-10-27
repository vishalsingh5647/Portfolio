import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">
              Vishal<span className="footer-logo-bracket"></span>Portfolio<span className="footer-logo-bracket"></span>
            </h3>
            <p className="footer-description">
              Building amazing web experiences with passion and creativity.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Connect</h4>
            <div className="footer-social">
              <a href="https://github.com/vishalsingh5647" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/vishal-singh9/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://wa.me/919335404282" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Contact Info</h4>
            <div className="footer-contact">
              <p>
                <i className="fas fa-envelope"></i>
                <a href="mailto:vishal123singh5647@gmail.com">vishal123singh5647@gmail.com</a>
              </p>
              <p>
                <i className="fas fa-phone"></i>
                <a href="tel:+919335404282">+91 9335404282</a>
              </p>
              <p>
                <i className="fas fa-map-marker-alt"></i>
                <span>Sector 63 Noida, India</span>
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Vishal Singh. All rights reserved.</p>
          <p className="footer-made">
            Made with <i className="fas fa-heart"></i> using React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

