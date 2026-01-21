import React from 'react';
import { ArrowDown, Linkedin, Mail } from 'lucide-react';
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
          <div className="hero-greeting">
            <span className="greeting-text">Hello, I'm</span>
          </div>
          <h1 className="hero-name">
            <span className="name-first">Anish</span>
            <span className="name-last">Girish Meher</span>
          </h1>
          <p className="hero-title">Supply Chain & Operations Professional</p>
          <p className="hero-description">
            Driving operational excellence through strategic sourcing, data-driven optimization, 
            and continuous improvement. Over 4 years of experience in enhancing efficiency and 
            delivering measurable business impact.
          </p>
          
          <div className="hero-cta">
            <a href="#contact" className="cta-button primary">
              Get In Touch
            </a>
            <a 
              href="https://customer-assets.emergentagent.com/job_resume-showcase-267/artifacts/xqk1zx8v_ANISH%20GIRISH%20MEHER%20-%20Resume.pdf" 
              className="cta-button secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
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
            </a>
            <a 
              href="mailto:anishm5505@gmail.com" 
              className="social-link"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <button 
          className="scroll-indicator" 
          onClick={scrollToAbout}
          aria-label="Scroll to content"
        >
          <ArrowDown size={24} className="scroll-icon" />
        </button>
      </div>

      <div className="hero-background">
        <div className="bg-gradient"></div>
        <div className="bg-grid"></div>
      </div>
    </section>
  );
};

export default Hero;