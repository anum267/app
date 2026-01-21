import React from 'react';
import { Building2, Calendar, TrendingUp } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: 'ZF FOXCONN',
      position: 'Supply Chain Specialist',
      location: 'Greenville, SC',
      period: 'June 2025 - Dec 2025',
      current: true,
      color: '#E76F51',
      achievements: [
        'Optimized logistics spend by analyzing demand volatility and recalibrating MOQs and Lead Times with global suppliers, slashing detention costs by $600K and unlocking $5M in free cash flow',
        'Steered a cross-functional team of 10 in a Logistics Risk Assessment (FMEA), identifying 20 critical failure modes and implementing control plans to lower aggregate Risk Priority Number (RPN) by 55%',
        'Deployed a returnable packaging tracking system to close visibility gaps, curtailing missed shipments and saving $100K in expendable packaging costs',
      ],
      impact: '$5.7M',
    },
    {
      id: 2,
      company: 'OPMOBILITY',
      position: 'Commodity Buyer Intern',
      location: 'Greer, SC',
      period: 'May 2024 – May 2025',
      color: '#264653',
      achievements: [
        'Delivered $2.1M in annualized cost savings by conducting comprehensive analysis of supplier cost structures, benchmarking machine rates, labor, overhead, and profit margins',
        'Orchestrated comprehensive supplier onboarding for BMW and Rivian programs, managing end-to-end documentation ensuring 100% compliance',
        'Spearheaded systematic BOM analysis in SAP, identifying obsolete parts and updating source lists, resulting in improved inventory accuracy and reduced carrying costs',
      ],
      impact: '$2.1M',
    },
    {
      id: 3,
      company: 'OERLIKON BALZERS',
      position: 'Production Engineer',
      location: 'Manufacturing Facility',
      period: 'Sep 2022 - May 2023',
      color: '#2A9D8F',
      achievements: [
        'Facilitated technical troubleshooting using 8D & 5 Whys methodologies to resolve recurring quality claims, implementing robust CAPAs that eradicated repeat non-conformances',
        'Deployed real-time SPC monitoring to detect process drifts early, driving a 15% improvement in first-pass yield',
        'Optimized cross-functional production planning achieving 100% Service Level Agreement (SLA) adherence with zero backorders',
      ],
      impact: '15% Yield ↑',
    },
    {
      id: 4,
      company: 'RAJ PLASTICS',
      position: 'Assistant Project Manager',
      location: 'Operations Center',
      period: 'May 2020 – May 2022',
      color: '#F4A261',
      achievements: [
        'Spearheaded end-to-end implementation of a new MRP system for 50 SKUs, establishing real-time visibility that reduced stockouts',
        'Streamlined strategic sourcing for $500k annual raw material spend, yielding 7% cost savings',
        'Directed a capital expansion project to increase production capacity by 30%',
      ],
      impact: '30% Capacity',
    },
  ];

  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <div className="section-header">
          <div className="section-label">
            <span className="label-line"></span>
            <span className="label-text">Career Path</span>
          </div>
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-description">
            A track record of delivering measurable impact across diverse supply chain roles
          </p>
        </div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div 
              key={exp.id} 
              className="timeline-item"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="timeline-line" style={{ background: exp.color }}></div>
              
              <div className="experience-card">
                {exp.current && (
                  <span className="current-badge">
                    <span className="badge-dot"></span>
                    Current Role
                  </span>
                )}
                
                <div className="card-header">
                  <div className="company-badge" style={{ background: `${exp.color}15`, color: exp.color }}>
                    <Building2 size={20} />
                  </div>
                  <div className="header-content">
                    <h3 className="company-name">{exp.company}</h3>
                    <p className="position-title">{exp.position}</p>
                  </div>
                  {exp.impact && (
                    <div className="impact-badge" style={{ borderColor: exp.color, color: exp.color }}>
                      <TrendingUp size={16} />
                      <span>{exp.impact}</span>
                    </div>
                  )}
                </div>

                <div className="card-meta">
                  <span className="meta-item">
                    <Calendar size={14} />
                    {exp.period}
                  </span>
                  <span className="meta-divider">•</span>
                  <span className="meta-item">{exp.location}</span>
                </div>

                <ul className="achievements-list">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="achievement-item">
                      <span className="achievement-bullet" style={{ background: exp.color }}></span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;