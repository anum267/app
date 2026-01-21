import React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import './Education.css';

const Education = () => {
  const education = [
    {
      id: 1,
      institution: 'Clemson University',
      degree: 'Master of Science in Industrial Engineering',
      location: 'Clemson, SC, United States',
      period: 'Aug 2023 - May 2025',
      gpa: '3.73/4.00',
      description: 'Advanced studies in operations research, supply chain optimization, and data analytics',
    },
    {
      id: 2,
      institution: 'Savitribai Phule Pune University',
      degree: 'Bachelor of Engineering in Mechanical Engineering',
      location: 'Pune, India',
      period: 'Aug 2017 - May 2021',
      gpa: '3.30/4.00',
      description: 'Foundation in engineering principles, manufacturing processes, and systems design',
    },
  ];

  return (
    <section id="education" className="education">
      <div className="education-container">
        <div className="section-header">
          <span className="section-label">Academic Background</span>
          <h2 className="section-title">Education</h2>
        </div>

        <div className="education-grid">
          {education.map((edu, index) => (
            <div 
              key={edu.id} 
              className="education-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="card-icon">
                <GraduationCap size={28} />
              </div>
              
              <div className="card-content">
                <h3 className="institution-name">{edu.institution}</h3>
                <p className="degree-name">{edu.degree}</p>
                <p className="education-location">{edu.location}</p>
                
                <div className="education-meta">
                  <span className="period">{edu.period}</span>
                  <span className="gpa">
                    <Award size={14} />
                    GPA: {edu.gpa}
                  </span>
                </div>

                <p className="education-description">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;