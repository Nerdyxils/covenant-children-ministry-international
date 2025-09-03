import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';
import './ContactUs.css';
import '../pages/pages.css'; // Import for consistent button styling

const ContactUs = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: '',
    });
    const [statusMessage, setStatusMessage] = useState('');
    const [isError, setIsError] = useState(false); // Track if there is an error
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prevState => ({
        ...prevState,
        [name]: value,
      }));
      // Reset error state on change
      if (isError) setIsError(false);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Check for empty fields
      if (!formData.name || !formData.email || !formData.message) {
        setStatusMessage('Error! Please fill in all fields.');
        setIsError(true); // Set error state to true
        return;
      }
  
      // Proceed with EmailJS sending process
      const serviceID = 'service_lwmcv6a'; // Use your actual service ID
      const templateID = 'template_07q98si'; // Use your actual template ID
      const userID = 'user_MgUIWcsi1jH4DWOrLSNHx'; // Use your actual user ID
      emailjs.send(serviceID, templateID, formData, userID)
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          setStatusMessage('Message Sent! Thank You For Your Message.');
          setIsError(false); // Reset error state
          setFormData({ // Reset form data
            name: '',
            email: '',
            message: '',
          });
        }, (err) => {
          console.log('FAILED...', err);
          setStatusMessage('Error! Message didn\'t go through');
          setIsError(true); // Set error state to true
        });
    };

  return (
    <div className="contact-section" id="contact">
      <div className="contact-info">
        <h2>Contact Us</h2>
        <p>For more information about our ministry or to get involved, please contact us with the details below. We look forward to connecting with you and welcoming you to our Covenant Children family.</p>
        <div className="contact-detail"><span className="icon">📧</span>hello@covenantchildrenministry.com</div>
        <div className="contact-detail"><span className="icon">📞</span>+1 (647) 407-0126</div>
        <div className="contact-detail"><span className="icon">📍</span>25 Claireport Crescent, Etobicoke, ON M9W 6P7, Canada</div>
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Link to="/contact" className="btn btn-primary">Visit Our Full Contact Page</Link>
        </div>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" className={isError ? 'input-error' : ''} id="name" name="name" value={formData.name} onChange={handleChange} />
        
        <label htmlFor="email">Email</label>
        <input type="email" className={isError ? 'input-error' : ''} id="email" name="email" value={formData.email} onChange={handleChange} />
        
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" className={isError ? 'input-error' : ''} placeholder="Type your message..." value={formData.message} onChange={handleChange}></textarea>
        
        <button type="submit">Submit</button>
        {statusMessage && <div className={`status-message ${isError ? 'error-message' : ''}`}>{statusMessage}</div>}
        </form>
    </div>
  );
};

export default ContactUs;
