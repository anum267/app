import React from 'react';
import { ArrowDown, Linkedin, Mail, Download } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-label">
            <span className="label-line"></span>
            <span className="label-text">Supply Chain Professional</span>
          </div>
          
          <h1 className="hero-title">
            <span className="title-line">Driving Excellence</span>
            <span className="title-line title-accent">Through Strategic</span>
            <span className="title-line">Operations</span>
          </h1>
          
          <div className="hero-name-card">
            <div className="name-card-content">
              <h2 className="hero-name">Anish Girish Meher</h2>
              <p className="hero-subtitle">
                4+ years transforming supply chain operations • $7M+ in measurable impact
              </p>
            </div>
          </div>

          <p className="hero-description">
            I specialize in strategic sourcing, cost optimization, and continuous improvement. 
            My approach combines data-driven decision-making with cross-functional leadership 
            to deliver exceptional business outcomes.
          </p>
          
          <div className="hero-cta">
            <a href="#contact" className="cta-button cta-primary">
              <span>Let's Connect</span>
              <Mail size={18} />
            </a>
            <a 
              href="https://customer-assets.emergentagent.com/job_resume-showcase-267/artifacts/xqk1zx8v_ANISH%20GIRISH%20MEHER%20-%20Resume.pdf" 
              className="cta-button cta-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download size={18} />
              <span>Resume</span>
            </a>
          </div>

          <div className="hero-social">
            <a 
              href="https://www.linkedin.com/in/anishmeher" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a 
              href="mailto:anishm5505@gmail.com" 
              className="social-link"
              aria-label="Email"
            >
              <Mail size={20} />
              <span>anishm5505@gmail.com</span>
            </a>
          </div>
        </div>

        <button 
          className="scroll-indicator" 
          onClick={scrollToAbout}
          aria-label="Scroll to content"
        >
          <span>Explore</span>
          <ArrowDown size={20} className="scroll-icon" />
        </button>
      </div>

      <div className="hero-decoration">
        <div className="decoration-circle circle-1"></div>
        <div className="decoration-circle circle-2"></div>
        <div className="decoration-shape shape-1"></div>
      </div>
    </section>
  );
};

export default Hero;