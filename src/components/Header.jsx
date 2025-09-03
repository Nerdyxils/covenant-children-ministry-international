import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleScroll = () => {
    const position = window.pageYOffset;
    setIsScrolled(position > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsNavOpen(false);
  }, [location]);

  return (
    <nav className={`header-nav ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="logo">
          <Link to="/">
            <img src={`${process.env.PUBLIC_URL}/assets/ccmilogo.svg`} alt="Covenant Children Ministry International" />
          </Link>
        </div>
        <div className="menu-icon" onClick={toggleNav}>
          {isNavOpen ? (
            <img src={`${process.env.PUBLIC_URL}/assets/close-icon.png`} alt="Close Menu" />
          ) : (
            <img src={`${process.env.PUBLIC_URL}/assets/hamburger-icon.png`} alt="Open Menu" />
          )}
        </div>
        <ul className={`nav-menu ${isNavOpen ? 'open' : ''}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/services">Our Services</Link></li>
          <li><Link to="/mission">Our Mission</Link></li>
          <li><Link to="/events">Our Events</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
