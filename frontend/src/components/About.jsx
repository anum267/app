import React from 'react';
import { User, Target, TrendingUp } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="section-header">
          <span className="section-label">Get To Know Me</span>
          <h2 className="section-title">My Story</h2>
        </div>

        <div className="about-content">
          <div className="about-main">
            <div className="about-text">
              <p className="text-large">
                I'm a <strong>results-driven Supply Chain and Operations Professional</strong> with over 
                4 years of experience in strategic sourcing, cost optimization, and continuous improvement.
              </p>
              <p>
                My journey began with a Bachelor's in Mechanical Engineering from Savitribai Phule Pune University 
                in India, where I graduated with a 3.30 GPA. After gaining valuable industry experience across 
                manufacturing and supply chain roles, I pursued my Master's in Industrial Engineering at Clemson 
                University, achieving a 3.73 GPA.
              </p>
              <p>
                Throughout my career, I've specialized in enhancing operational efficiency through data-driven 
                decision-making and cross-functional collaboration. From managing $100M commodity portfolios 
                to implementing MRP systems and optimizing logistics spend, I've consistently delivered measurable 
                business impact.
              </p>
              <p>
                What drives me is the challenge of solving complex supply chain problems and the satisfaction of 
                seeing tangible results—whether it's <strong>$2.1M in cost savings</strong>, <strong>55% reduction 
                in Risk Priority Numbers</strong>, or achieving <strong>100% SLA adherence</strong>.
              </p>
            </div>
          </div>

          <div className="about-highlights">
            <div className="highlight-card">
              <div className="highlight-icon">
                <User size={24} />
              </div>
              <h3 className="highlight-title">Professional Focus</h3>
              <p className="highlight-text">
                Strategic sourcing, logistics management, process improvement, and data-driven optimization
              </p>
            </div>

            <div className="highlight-card">
              <div className="highlight-icon">
                <Target size={24} />
              </div>
              <h3 className="highlight-title">Core Strengths</h3>
              <p className="highlight-text">
                Cross-functional leadership, vendor negotiation, Six Sigma methodologies, and supply chain analytics
              </p>
            </div>

            <div className="highlight-card">
              <div className="highlight-icon">
                <TrendingUp size={24} />
              </div>
              <h3 className="highlight-title">Impact Driven</h3>
              <p className="highlight-text">
                Delivered $7M+ in cost savings and operational improvements across multiple organizations
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;