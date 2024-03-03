import React from 'react';
import './Footer.css';
// Assuming you have a logo image in your project
import logo from '../assets/ccmilogo.svg'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="Logo" />
        </div>
        <nav className="footer-nav">
          <a href="#about">About Us</a>
          <a href="#services"> Our Services</a>
          <a href="#services"> Our Mission</a>
          <a href="#services"> Our Events</a>
          <a href="#contact">Contact Us</a>
        </nav>
      </div>
      <br/>
      <br/>
      <br/>
      <hr />
      <p className="rights-text">All Rights Reserved 2024</p>
    </footer>
  );
};

export default Footer;
