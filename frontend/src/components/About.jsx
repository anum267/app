import React from 'react';
import { Sparkles, TrendingUp, Award } from 'lucide-react';
import './About.css';

const About = () => {
  const stats = [
    { number: '4+', label: 'Years Experience', icon: <Award size={24} /> },
    { number: '$7M+', label: 'Impact Delivered', icon: <TrendingUp size={24} /> },
    { number: '100%', label: 'SLA Adherence', icon: <Sparkles size={24} /> },
  ];

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="section-header">
          <div className="section-label">
            <span className="label-line"></span>
            <span className="label-text">About Me</span>
          </div>
          <h2 className="section-title">My Journey in Supply Chain Excellence</h2>
        </div>

        <div className="about-content">
          <div className="about-story">
            <div className="story-card">
              <div className="story-header">
                <h3>The Beginning</h3>
              </div>
              <p>
                My journey began with a <strong>Bachelor's in Mechanical Engineering</strong> from 
                Savitribai Phule Pune University in India, where I developed a strong foundation in 
                engineering principles and systems thinking. This technical background became the 
                cornerstone of my analytical approach to supply chain challenges.
              </p>
            </div>

            <div className="story-card">
              <div className="story-header">
                <h3>Professional Evolution</h3>
              </div>
              <p>
                Over the past 4+ years, I've worked across diverse roles—from manufacturing floors to 
                strategic sourcing desks—gaining hands-on experience in <strong>production engineering, 
                procurement, and logistics optimization</strong>. Each role taught me the interconnected 
                nature of supply chain operations and the importance of data-driven decision-making.
              </p>
            </div>

            <div className="story-card">
              <div className="story-header">
                <h3>Advanced Education</h3>
              </div>
              <p>
                To deepen my expertise, I pursued a <strong>Master's in Industrial Engineering at Clemson 
                University</strong>, achieving a 3.73 GPA. This advanced education equipped me with sophisticated 
                tools in operations research, supply chain analytics, and process optimization that I now apply 
                to solve complex business challenges.
              </p>
            </div>

            <div className="story-card story-highlight">
              <div className="story-header">
                <h3>What Drives Me</h3>
              </div>
              <p>
                I'm passionate about transforming supply chain operations through innovation and continuous 
                improvement. Whether it's negotiating <strong>$2.1M in cost savings</strong>, implementing 
                risk mitigation strategies that reduce RPN by <strong>55%</strong>, or achieving 
                <strong>100% SLA adherence</strong>—I thrive on delivering measurable business impact.
              </p>
            </div>
          </div>

          <div className="about-stats">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-content">
                  <h4 className="stat-number">{stat.number}</h4>
                  <p className="stat-label">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;