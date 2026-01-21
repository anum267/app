import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import './Certifications.css';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      name: 'Supply Chain Foundations: Project Management',
      issuer: 'Professional Certification',
      description: 'Comprehensive training in project management principles applied to supply chain operations',
    },
    {
      id: 2,
      name: 'Six Sigma Green Belt',
      issuer: 'Process Improvement Certification',
      description: 'Advanced methodologies for process improvement, quality management, and defect reduction',
    },
    {
      id: 3,
      name: 'Certified Zone Specialist',
      issuer: 'FTZ Certification',
      description: 'Specialized knowledge in Foreign Trade Zone operations, duty deferral, and international trade compliance',
    },
  ];

  return (
    <section id="certifications" className="certifications">
      <div className="certifications-container">
        <div className="section-header">
          <span className="section-label">Professional Credentials</span>
          <h2 className="section-title">Certifications</h2>
        </div>

        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div 
              key={cert.id} 
              className="certification-card"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="cert-icon">
                <Award size={28} />
              </div>
              
              <div className="cert-content">
                <h3 className="cert-name">{cert.name}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
                <p className="cert-description">{cert.description}</p>
              </div>

              <div className="cert-link">
                <ExternalLink size={18} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;