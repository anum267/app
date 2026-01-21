import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Send, MapPin } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus(''), 4000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'anishm5505@gmail.com',
      link: 'mailto:anishm5505@gmail.com',
      color: '#E76F51',
    },
    {
      icon: <Phone size={24} />,
      label: 'Phone',
      value: '(864) 765-7844',
      link: 'tel:+18647657844',
      color: '#264653',
    },
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      link: 'https://www.linkedin.com/in/anishmeher',
      color: '#2A9D8F',
    },
    {
      icon: <MapPin size={24} />,
      label: 'Location',
      value: 'Greenville, SC',
      color: '#F4A261',
    },
  ];

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="section-header">
          <div className="section-label">
            <span className="label-line"></span>
            <span className="label-text">Get In Touch</span>
          </div>
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-description">
            I'm always open to discussing new opportunities, collaborations, or supply chain challenges. 
            Drop me a message and I'll get back to you soon.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            {contactInfo.map((info, index) => (
              <div 
                key={index} 
                className="info-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="info-icon" style={{ background: `${info.color}15`, color: info.color }}>
                  {info.icon}
                </div>
                <div className="info-content">
                  <h4>{info.label}</h4>
                  {info.link ? (
                    <a href={info.link} target={info.link.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                      {info.value}
                    </a>
                  ) : (
                    <p>{info.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="What would you like to discuss?"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Tell me more about your project or inquiry..."
              />
            </div>

            <button type="submit" className="submit-button" disabled={status === 'sending'}>
              {status === 'sending' ? (
                'Sending...'
              ) : (
                <>
                  <span>Send Message</span>
                  <Send size={18} />
                </>
              )}
            </button>

            {status === 'success' && (
              <div className="success-message">
                <p>Thank you for reaching out! I'll get back to you soon.</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;