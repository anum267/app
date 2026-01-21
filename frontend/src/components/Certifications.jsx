import React from 'react';
import { Award, ExternalLink, Shield } from 'lucide-react';
import './Certifications.css';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      name: 'Supply Chain Foundations: Project Management',
      issuer: 'Professional Certification',
      icon: <Award size={28} />,
      color: '#E76F51',
      description: 'Comprehensive training in project management principles applied to supply chain operations',
    },
    {
      id: 2,
      name: 'Six Sigma Green Belt',
      issuer: 'Process Excellence',
      icon: <Shield size={28} />,
      color: '#264653',
      description: 'Advanced methodologies for process improvement, quality management, and defect reduction',
    },
    {
      id: 3,
      name: 'Certified Zone Specialist',
      issuer: 'FTZ Operations',
      icon: <Award size={28} />,
      color: '#2A9D8F',
      description: 'Specialized knowledge in Foreign Trade Zone operations and international trade compliance',
    },
  ];

  return (
    <section id="certifications" className="certifications">
      <div className="certifications-container">
        <div className="section-header">
          <div className="section-label">
            <span className="label-line"></span>
            <span className="label-text">Credentials</span>
          </div>
          <h2 className="section-title">Professional Certifications</h2>
        </div>

        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div 
              key={cert.id} 
              className="certification-card"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="cert-header" style={{ background: `${cert.color}08` }}>
                <div className="cert-icon" style={{ background: `${cert.color}15`, color: cert.color }}>
                  {cert.icon}
                </div>
              </div>
              
              <div className="cert-content">
                <span className="cert-issuer" style={{ color: cert.color }}>{cert.issuer}</span>
                <h3 className="cert-name">{cert.name}</h3>
                <p className="cert-description">{cert.description}</p>
                
                <button className="cert-link" style={{ color: cert.color }}>
                  <span>View Credential</span>
                  <ExternalLink size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;