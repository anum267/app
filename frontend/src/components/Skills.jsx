import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      id: 1,
      category: 'Core Competencies',
      color: '#E76F51',
      skills: [
        'Strategic Sourcing',
        'Cost Optimization',
        'Six Sigma',
        'Vendor Negotiation',
        'Logistics Management',
        'Risk Mitigation',
        'Data Analysis',
        'Process Improvement',
        'Inventory Management',
        'Production Management',
        'Leadership',
        'Contract Negotiation',
        'Critical Thinking',
      ],
    },
    {
      id: 2,
      category: 'Technical Tools',
      color: '#264653',
      skills: [
        'SAP-BW',
        'Python',
        'SQL',
        'Tableau',
        'MS Excel',
        'Minitab',
        'JMP',
        'MATLAB',
        'MS Project',
        'TEMPO',
        'CATIA',
        'Visio',
        'Notion',
      ],
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <div className="section-header">
          <div className="section-label">
            <span className="label-line"></span>
            <span className="label-text">Expertise</span>
          </div>
          <h2 className="section-title">Skills & Tools</h2>
          <p className="section-description">
            A comprehensive toolkit combining strategic thinking with technical proficiency
          </p>
        </div>

        <div className="skills-wrapper">
          {skillCategories.map((category, catIndex) => (
            <div 
              key={category.id} 
              className="skill-category"
              style={{ animationDelay: `${catIndex * 0.15}s` }}
            >
              <div className="category-header">
                <div className="category-icon" style={{ background: `${category.color}15`, color: category.color }}>
                  <span className="icon-dot" style={{ background: category.color }}></span>
                </div>
                <h3 className="category-title">{category.category}</h3>
              </div>
              
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="skill-tag"
                    style={{ 
                      animationDelay: `${(catIndex * 0.15) + (skillIndex * 0.05)}s`,
                      '--hover-color': category.color 
                    }}
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