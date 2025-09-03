import React from 'react';
import { Link } from 'react-router-dom';
import './OurServices.css'; // Make sure this CSS file is in the same directory
import '../pages/pages.css'; // Import for consistent button styling

const services = [
  { title: "Worship & Prayer", description: "Whenever we gather with the kids, we engage in uplifting worship, praise and prayers." },
  { title: "Discipleship & Christian Fellowship", description: "Engage in Bible studies, mentoring, and fellowship to grow spiritually and build community." },
  { title: "Education Ministry", description: "We offer Sunday School classes and educational programs to nurture children's faith and academic development." },
  { title: "Family Ministry", description: "Celebrate family values through special events and banquets that honor and support single mothers and families." },
  { title: "Music Ministry", description: "The mission of the choir is to encourage children to lift up the name of Jesus Christ through the highest-quality inspirational music." },
  { title: "Evangelism Ministry", description: "Extend a helping hand to those in need through food, clothing, prayer, and financial assistance." },
];

const OurServices = () => {
  return (
    <div className="services-section" id="services">
      <div className="services-header">
        <p className="services-intro">Our Services</p>
       <h2>Here Are Our Services  </h2>
      </div>
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-box">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <Link to="/services" className="btn btn-primary">Explore All Our Services</Link>
      </div>
    </div>
  );
};

export default OurServices;
