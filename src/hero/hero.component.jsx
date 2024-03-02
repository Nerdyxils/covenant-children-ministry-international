import React, { useState } from 'react';
import './hero.styles.css'; // Make sure the CSS file is in the same directory

const HeroSection = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const backgroundImageUrl = `${process.env.PUBLIC_URL}/assets/hero-bg.jpeg`;

    return (
        <div className="hero-container" style={{ backgroundImage: `url(${backgroundImageUrl})`}}>
            <nav className="hero-nav">
                <div className="logo">
                    <img src={`${process.env.PUBLIC_URL}/assets/ccmilogo.svg`} alt="Covenant Children Ministry International" />
                </div>
                <div className="menu-icon" onClick={toggleNav}>
                    {/* Toggle between icons */}
                    {isNavOpen ? (
                        <img src={`${process.env.PUBLIC_URL}/assets/close-icon.png`} alt="Close Menu" />
                    ) : (
                        <img src={`${process.env.PUBLIC_URL}/assets/hamburger-icon.png`} alt="Open Menu" />
                    )}
                </div>
                <ul className={`nav-menu ${isNavOpen ? 'open' : ''}`}>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#services">Our Services</a></li>
                    <li><a href="#mission">Our Mission</a></li>
                    <li><a href="#events">Our Events</a></li>
                </ul>
            </nav>
            <div className="hero-content">
                <h1 className="hero-heading">Where faith meets compassion, and children find their place to flourish in Christ's love.</h1>
                <p className="hero-subheading">Join us at Covenant Children Ministry International</p>
                <button className="hero-cta">Learn More</button>
            </div>
        </div>
    );
}

export default HeroSection;
