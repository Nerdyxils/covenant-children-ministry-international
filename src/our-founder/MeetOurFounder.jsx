import React, { useEffect, useRef, useState } from 'react';
import './MeetOurFounder.css';
import founderImage from '../assets/Our-founder.png';
import backgroundGraphic from '../assets/bg-element.png';

const MeetOurFounder = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Store the current value of the ref in a variable inside the effect
        const currentRef = sectionRef.current;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => setIsVisible(entry.isIntersecting));
            },
            { threshold: 0.1 }
        );

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            // Use the stored ref value for cleanup
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []); // The empty dependency array ensures this effect runs only once when the component mounts

    return (
        <div className="founder-section" ref={sectionRef} style={{ backgroundImage: `url(${backgroundGraphic})` }}>
            <div className={`founder-content ${isVisible ? 'slide-in-from-left' : ''}`}>
                <h2>Meet our Founder</h2>
                <p>Established in 2010 by Evangelist Bolanle Oyeniyi, Covenant Children Ministry International is a Pentecostal Christian organization dedicated to nurturing and empowering children. From humble beginnings to a growing community, we focus on providing holistic support to children and families, regardless of background.</p>
            </div>
            <div className={`founder-image-container ${isVisible ? 'slide-in-from-right' : ''}`}>
                <img src={founderImage} alt="Founder" />
                <div className="founder-name">Evangelist Bolanle Oyeniyi<br /><span className='small__name'> Our Founder </span></div>
            </div>
        </div>
    );
};

export default MeetOurFounder;
