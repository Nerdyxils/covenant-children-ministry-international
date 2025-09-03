import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './pages.css';

const ContactPage = () => {
  const [heroRef] = useScrollAnimation(0.3);
  const [infoRef, infoVisible] = useScrollAnimation(0.2);
  const [formRef, formVisible] = useScrollAnimation(0.2);
  const [timesRef, timesVisible] = useScrollAnimation(0.2);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add email service integration here
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="page-container">
      {/* Hero Section */}
      <section 
        className="page-hero" 
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/topimage.jpg)` }}
        ref={heroRef}
      >
        <div className="page-hero-content">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you. Get in touch with us today!</p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="section" ref={infoRef}>
        <div className="container">
          <div className="section-header">
            <h2>Get In Touch</h2>
            <p>We're here to help and answer any questions you may have</p>
          </div>
          <div className={`grid grid-2 ${infoVisible ? 'reveal active' : 'reveal'}`}>
            <div>
              <h3>Contact Information</h3>
              <div style={{ marginBottom: '2rem' }}>
                <h4 style={{ color: 'var(--primary-color)', marginBottom: '0.5rem' }}>Address</h4>
                <p>
                  25 Claireport Crescent<br />
                  Etobicoke, ON M9W 6P7<br />
                  Canada
                </p>
              </div>
              <div style={{ marginBottom: '2rem' }}>
                <h4 style={{ color: 'var(--primary-color)', marginBottom: '0.5rem' }}>Phone</h4>
                <p>+1 (647) 407-0126</p>
              </div>
              <div style={{ marginBottom: '2rem' }}>
                <h4 style={{ color: 'var(--primary-color)', marginBottom: '0.5rem' }}>Email</h4>
                <p>hello@covenantchildrenministry.com</p>
              </div>
              <div style={{ marginTop: '2rem' }}>
                <a href="tel:+16474070126" className="btn btn-primary" style={{ marginRight: '1rem' }}>
                  Call Us
                </a>
                <a href="mailto:hello@covenantchildrenministry.com" className="btn btn-secondary">
                  Email Us
                </a>
              </div>
            </div>
            <div>
              <iframe 
                title="Map to Covenant Children Ministry International"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.268851376!2d-79.647407!3d43.647407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b37b6b8b8b8b8%3A0x8b8b8b8b8b8b8b8!2s25+Claireport+Crescent%2C+Etobicoke%2C+ON+M9W+6P7!5e0!3m2!1sen!2sca!4v1234567890"
                width="100%" 
                height="400" 
                style={{ border: 0, borderRadius: '8px' }}
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section" ref={formRef}>
        <div className="container">
          <div className="section-header">
            <h2>Send Us a Message</h2>
            <p>Have a question or want to get involved? We'd love to hear from you!</p>
          </div>
          <div className={`contact-form ${formVisible ? 'reveal active' : 'reveal'}`}>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-2" style={{ gap: '1rem' }}>
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Your full name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div className="grid grid-2" style={{ gap: '1rem' }}>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(123) 456-7890"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder="What is this regarding?"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="6"
                  placeholder="Tell us more about your inquiry or how you'd like to get involved..."
                ></textarea>
              </div>
              <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Service Times Section */}
      <section className="section" ref={timesRef}>
        <div className="container">
          <div className="section-header">
            <h2>Service Times & Office Hours</h2>
            <p>When you can find us and join our activities</p>
          </div>
          <div className={`grid grid-3 ${timesVisible ? 'reveal active' : 'reveal'}`}>
            <div className="card text-center">
              <h3>Sunday Worship</h3>
              <p style={{ color: 'var(--primary-color)', fontWeight: 'bold', fontSize: '1.2rem' }}>
                10:00 AM - 12:00 PM
              </p>
              <p>Main worship service with children's programs</p>
            </div>
            <div className="card text-center">
              <h3>After-School Program</h3>
              <p style={{ color: 'var(--primary-color)', fontWeight: 'bold', fontSize: '1.2rem' }}>
                Monday - Friday<br />
                3:00 PM - 6:00 PM
              </p>
              <p>Homework help and enrichment activities</p>
            </div>
            <div className="card text-center">
              <h3>Office Hours</h3>
              <p style={{ color: 'var(--primary-color)', fontWeight: 'bold', fontSize: '1.2rem' }}>
                Monday - Friday<br />
                9:00 AM - 5:00 PM
              </p>
              <p>Administrative support and inquiries</p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <p>Quick answers to common questions</p>
          </div>
          <div className="grid grid-2">
            <div className="card">
              <h3>How can I enroll my child?</h3>
              <p>
                You can enroll your child by contacting us through phone, email, or by filling 
                out the contact form above. We'll schedule a meeting to discuss your child's 
                needs and our programs.
              </p>
            </div>
            <div className="card">
              <h3>What age groups do you serve?</h3>
              <p>
                We serve children from ages 3 to 18, with programs specifically designed for 
                different age groups and developmental stages.
              </p>
            </div>
            <div className="card">
              <h3>Do you offer transportation?</h3>
              <p>
                Currently, we don't provide transportation services, but we're located in a 
                convenient area with good public transit access.
              </p>
            </div>
            <div className="card">
              <h3>How can I volunteer?</h3>
              <p>
                We welcome volunteers! Please contact us to learn about current volunteer 
                opportunities and how you can contribute to our ministry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section">
        <div className="container text-center">
          <div className="section-header">
            <h2>Ready to Get Started?</h2>
            <p>Join our community and be part of something special</p>
          </div>
          <div className="flex-center" style={{ gap: '20px', flexWrap: 'wrap' }}>
            <a href="/services" className="btn btn-primary">Learn About Our Programs</a>
            <a href="/events" className="btn btn-secondary">View Upcoming Events</a>
            <a href="/about" className="btn btn-secondary">Learn More About Us</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
