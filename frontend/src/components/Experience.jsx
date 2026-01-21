import React from 'react';
import { Briefcase, Calendar, DollarSign } from 'lucide-react';
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
      achievements: [
        'Optimized logistics spend by analyzing demand volatility and recalibrating MOQs and Lead Times with global suppliers, slashing detention costs by $600K and unlocking $5M in free cash flow',
        'Steered a cross-functional team of 10 in a Logistics Risk Assessment (FMEA), identifying 20 critical failure modes and implementing control plans to lower aggregate Risk Priority Number (RPN) by 55%',
        'Deployed a returnable packaging tracking system to close visibility gaps, curtailing missed shipments and saving $100K in expendable packaging costs',
        'Managed daily operations as the FTZ Zone Specialist, leveraging duty deferral strategies and precise HTS classification to evaluate landed costs and mitigate tariff impacts on international shipments',
      ],
      highlight: '$5.7M Impact',
    },
    {
      id: 2,
      company: 'OPMOBILITY',
      position: 'Commodity Buyer Intern',
      location: 'Greer, SC',
      period: 'May 2024 – May 2025',
      achievements: [
        'Presented a commodity strategy to senior management, highlighting comprehensive Spend Analysis on the $100M commodity portfolio, new project sourcing, plant support needs, compliance, and a new opportunity to quote on tailgate business',
        'Delivered $2.1M in annualized cost savings by conducting comprehensive analysis of supplier cost structures, benchmarking machine rates, labor, overhead, and profit margins, and leveraging insights to renegotiate MSAs and rebate agreements',
        'Orchestrated comprehensive supplier onboarding for BMW and Rivian programs, managing end-to-end documentation including NDAS, GPCs, MSAS, ISO/IATF certifications, ensuring 100% compliance',
        'Maintained and updated purchasing records, price lists, and supplier agreements, ensuring 100% accuracy and resolving blocked invoices with suppliers and Accounts Payable',
        'Spearheaded systematic BOM analysis in SAP, identifying obsolete parts and updating source lists and supplier contracts, resulting in improved inventory accuracy and reduced carrying costs',
      ],
      highlight: '$2.1M Savings',
    },
    {
      id: 3,
      company: 'OERLIKON BALZERS',
      position: 'Production Engineer',
      location: 'Location not specified',
      period: 'Sep 2022 - May 2023',
      achievements: [
        'Facilitated technical troubleshooting and root cause analysis investigations using 8D & 5 Whys methodologies to resolve recurring quality claims, implementing robust CAPAs that eradicated repeat non-conformances for key aerospace customers',
        'Established standardized operating procedures (SOPs) and visual management systems, and trained 5 operators to streamline production workflows and ensure consistent daily output with full compliance',
        'Deployed real-time SPC monitoring to detect process drifts in temperature and pressure early, empowering operators to stop line and adjust settings to prevent scrap and rework, driving a 15% improvement in first-pass yield',
        'Optimized cross-functional production planning by managing WIP flow and prioritizing critical SKUs against capacity constraints, achieving 100% Service Level Agreement (SLA) adherence with zero backorders',
      ],
      highlight: '15% Yield Improvement',
    },
    {
      id: 4,
      company: 'RAJ PLASTICS',
      position: 'Assistant Project Manager',
      location: 'Location not specified',
      period: 'May 2020 – May 2022',
      achievements: [
        'Spearheaded end-to-end implementation of a new MRP system to replace fragmented manual trackers for 50 SKUs, establishing real-time visibility for orders and inventory that reduced stockouts',
        'Streamlined strategic sourcing and purchasing process for 3 critical supplier RFPs spanning $500k annual raw material spend, consolidating requirements across 15 cross-functional stakeholders to negotiate favorable terms, yielding 7% cost savings',
        'Directed a capital expansion project to increase production capacity by 30%, creating a business case for new machinery investment and overseeing installation and commissioning',
        'Launched 3 new product lines successfully by coordinating with design teams on DFM requirements, validating manufacturing processes, and ensuring smooth transition from prototype to full-scale production',
      ],
      highlight: '30% Capacity Increase',
    },
  ];

  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <div className="section-header">
          <span className="section-label">Professional Journey</span>
          <h2 className="section-title">Work Experience</h2>
        </div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="timeline-item" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="timeline-marker">
                <div className="marker-dot">
                  <Briefcase size={16} />
                </div>
                {index < experiences.length - 1 && <div className="marker-line"></div>}
              </div>

              <div className="timeline-content">
                <div className="experience-card">
                  {exp.current && <span className="current-badge">Current</span>}
                  {exp.highlight && (
                    <div className="highlight-badge">
                      <DollarSign size={16} />
                      <span>{exp.highlight}</span>
                    </div>
                  )}
                  
                  <div className="card-header">
                    <div>
                      <h3 className="company-name">{exp.company}</h3>
                      <p className="position-title">{exp.position}</p>
                    </div>
                  </div>

                  <div className="card-meta">
                    <span className="meta-item">
                      <Calendar size={14} />
                      {exp.period}
                    </span>
                    {exp.location && (
                      <span className="meta-item location">{exp.location}</span>
                    )}
                  </div>

                  <ul className="achievements-list">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="achievement-item">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;