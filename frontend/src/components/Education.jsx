import React from 'react';
import { GraduationCap, MapPin, Award as AwardIcon } from 'lucide-react';
import './Education.css';

const Education = () => {
  const education = [
    {
      id: 1,
      institution: 'Clemson University',
      degree: 'Master of Science',
      field: 'Industrial Engineering',
      location: 'Clemson, SC, United States',
      period: 'Aug 2023 - May 2025',
      gpa: '3.73/4.00',
      color: '#E76F51',
      highlights: ['Operations Research', 'Supply Chain Analytics', 'Process Optimization'],
    },
    {
      id: 2,
      institution: 'Savitribai Phule Pune University',
      degree: 'Bachelor of Engineering',
      field: 'Mechanical Engineering',
      location: 'Pune, India',
      period: 'Aug 2017 - May 2021',
      gpa: '3.30/4.00',
      color: '#264653',
      highlights: ['Manufacturing Processes', 'Systems Design', 'Engineering Fundamentals'],
    },
  ];

  return (
    <section id="education" className="education">
      <div className="education-container">
        <div className="section-header">
          <div className="section-label">
            <span className="label-line"></span>
            <span className="label-text">Academic Foundation</span>
          </div>
          <h2 className="section-title">Education & Learning</h2>
        </div>

        <div className="education-grid">
          {education.map((edu, index) => (
            <div 
              key={edu.id} 
              className="education-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="card-accent" style={{ background: edu.color }}></div>
              
              <div className="card-icon" style={{ background: `${edu.color}15`, color: edu.color }}>
                <GraduationCap size={32} />
              </div>
              
              <div className="card-content">
                <h3 className="institution-name">{edu.institution}</h3>
                <div className="degree-info">
                  <p className="degree-name">{edu.degree}</p>
                  <p className="field-name">{edu.field}</p>
                </div>
                
                <div className="education-meta">
                  <span className="meta-item">
                    <MapPin size={14} />
                    {edu.location}
                  </span>
                  <span className="meta-item period">{edu.period}</span>
                </div>

                <div className="gpa-badge" style={{ background: `${edu.color}15`, color: edu.color }}>
                  <AwardIcon size={16} />
                  <span>GPA: {edu.gpa}</span>
                </div>

                <div className="highlights">
                  {edu.highlights.map((highlight, idx) => (
                    <span key={idx} className="highlight-tag">{highlight}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;