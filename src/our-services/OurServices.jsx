import React from 'react';
import './OurServices.css'; // Make sure this CSS file is in the same directory

const services = [
  { title: "Worship & Prayer", description: "Join us every Sunday at 11 am for uplifting worship services and regular prayer gatherings." },
  { title: "Discipleship & Christian Fellowship", description: "Engage in Bible studies, mentoring, and fellowship to grow spiritually and build community." },
  { title: "Education Ministry", description: "We offer Sunday School classes and educational programs to nurture children's faith and academic development." },
  { title: "Family Ministry", description: "Celebrate family values through special events and banquets that honor and support single mothers and families." },
  { title: "Music Ministry", description: "Our choir inspires spiritual enrichment through uplifting music during our monthly services." },
  { title: "Evangelism Ministry", description: "Extend a helping hand to those in need through food, clothing, prayer, and financial assistance." },
];

const OurServices = () => {
  return (
    <div className="services-section" id="services">
      <div className="services-header">
        <p className="services-intro">Our Services</p>
        <h2>Come Worship With Us</h2>
      </div>
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-box">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
