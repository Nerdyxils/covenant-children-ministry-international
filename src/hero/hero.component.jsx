import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './hero.styles.css'; // Make sure the CSS file is in the same directory
import '../pages/pages.css'; // Import for consistent button styling

const HeroSection = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const handleScroll = () => {
        const position = window.pageYOffset;
        setIsScrolled(position > 0);
    };

    useEffect(() => {
        // Add error handling for scroll events
        const handleScrollWithErrorHandling = () => {
            try {
                handleScroll();
            } catch (error) {
                // Suppress ResizeObserver related errors
                if (error.message?.includes?.('ResizeObserver')) {
                    return;
                }
                console.warn('Scroll handler error:', error);
            }
        };

        window.addEventListener('scroll', handleScrollWithErrorHandling);

        return () => {
            window.removeEventListener('scroll', handleScrollWithErrorHandling);
        };
    }, []);

    const backgroundImageUrl = `${process.env.PUBLIC_URL}/assets/hero-bg.jpeg`;

    return (
        <div className="hero-container" style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
            <nav className={`hero-nav ${isScrolled ? 'scrolled' : ''}`}>
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
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/services">Our Services</Link></li>
                    <li><Link to="/mission">Our Mission</Link></li>
                    <li><Link to="/events">Our Events</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                </ul>
            </nav>
            <div className="hero-content">
                <h1 className="hero-heading">Where faith meets compassion, and children find their place to flourish in Christ's love.</h1>
                <p className="hero-subheading">Join us at Covenant Children Ministry International</p>
                <Link to="/about" className="btn btn-primary">Learn More</Link>
            </div>
        </div>
    );
}

export default HeroSection;
