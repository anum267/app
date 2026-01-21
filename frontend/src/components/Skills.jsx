import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      id: 1,
      category: 'Core Competencies',
      skills: [
        'Root Cause Analysis',
        'Data Visualization',
        'Data Analysis',
        'Six Sigma',
        'Vendor Negotiation',
        'Logistics Management',
        'Leadership',
        'Critical Thinking',
        'Inventory Management',
        'Production Management',
        'Process Improvement',
        'Problem Solving',
        'Contract Negotiation',
      ],
    },
    {
      id: 2,
      category: 'Software Proficiency',
      skills: [
        'MS Excel',
        'MS Project',
        'Tableau',
        'SAP-BW',
        'TEMPO',
        'Python',
        'SQL',
        'MATLAB',
        'Minitab',
        'JMP',
        'CATIA',
        'Notion',
        'Visio',
      ],
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <div className="section-header">
          <span className="section-label">What I Bring</span>
          <h2 className="section-title">Skills & Expertise</h2>
        </div>

        <div className="skills-content">
          {skillCategories.map((category, catIndex) => (
            <div 
              key={category.id} 
              className="skill-category"
              style={{ animationDelay: `${catIndex * 0.1}s` }}
            >
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="skill-tag"
                    style={{ animationDelay: `${(catIndex * 0.1) + (skillIndex * 0.05)}s` }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;