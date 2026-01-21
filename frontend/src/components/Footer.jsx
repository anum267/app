import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="brand-name">Anish Girish Meher</h3>
            <p className="brand-tagline">Supply Chain & Operations Professional</p>
          </div>

          <div className="footer-links">
            <a href="#about" className="footer-link">About</a>
            <a href="#experience" className="footer-link">Experience</a>
            <a href="#education" className="footer-link">Education</a>
            <a href="#skills" className="footer-link">Skills</a>
            <a href="#contact" className="footer-link">Contact</a>
          </div>

          <button onClick={scrollToTop} className="scroll-top" aria-label="Scroll to top">
            <ArrowUp size={20} />
          </button>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} Anish Girish Meher. All rights reserved.
          </p>
          <p className="made-with">
            Crafted with <Heart size={16} className="heart-icon" /> and attention to detail
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;