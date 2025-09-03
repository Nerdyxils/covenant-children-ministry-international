import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
// Assuming you have a logo image in your project
import logo from '../assets/ccmilogo.svg'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <nav className="footer-nav">
          <Link to="/about">About Us</Link>
          <Link to="/services">Our Services</Link>
          <Link to="/mission">Our Mission</Link>
          <Link to="/events">Our Events</Link>
          <Link to="/contact">Contact Us</Link>
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
