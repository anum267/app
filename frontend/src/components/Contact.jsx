import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Send } from 'lucide-react';
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
    // Mock form submission
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="section-header">
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-description">
            I'm always open to discussing new opportunities, collaborations, or supply chain challenges.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">
                <Mail size={24} />
              </div>
              <div className="info-text">
                <h4>Email</h4>
                <a href="mailto:anishm5505@gmail.com">anishm5505@gmail.com</a>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <Phone size={24} />
              </div>
              <div className="info-text">
                <h4>Phone</h4>
                <a href="tel:+18647657844">(864) 765-7844</a>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <Linkedin size={24} />
              </div>
              <div className="info-text">
                <h4>LinkedIn</h4>
                <a href="https://www.linkedin.com/in/anishmeher" target="_blank" rel="noopener noreferrer">
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
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
                placeholder="What's this about?"
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
                rows="5"
                placeholder="Your message here..."
              />
            </div>

            <button type="submit" className="submit-button" disabled={status === 'sending'}>
              {status === 'sending' ? (
                'Sending...'
              ) : (
                <>
                  <Send size={18} />
                  <span>Send Message</span>
                </>
              )}
            </button>

            {status === 'success' && (
              <p className="success-message">Message sent successfully! I'll get back to you soon.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;