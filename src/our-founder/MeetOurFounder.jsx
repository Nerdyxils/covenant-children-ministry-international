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
                <p>In the year 2007, God revealed to Evangelist Bolanle Oyeniyi to establish a children ministry and to be successful in this journey; Evangelist Bolanle Oyeniyi went to school for Diploma in Social Service Work (Centennial College) and a certificate in
                    Dual Diagnosis (George Brown) to have understanding and to be licenced in dealing with children
                    and the autistic children. Prior to her establishing Covenant Children Ministry, Evangelist Bolanle
                    Oyeniyi for many years work as the head children department of Christ Apostolic Church (Vineyard
                    of Comfort) Toronto and Winnipeg branch
                    After Evangelist Bolanle Oyeniyi completed her degree in Child Education in 2010, she established
                    Covenant Children Ministry International with 10 people. The ministry has visiting children from
                    different churches, giving lectures, presenting gifts to underprivileged children. Also, the Ministry
                    distributes the children bible to all children from different background. The Ministry has assisted
                    thousands of autistic children and children in foster homes; reuniting the children and their families
                    and counseling broken families.</p>
            </div>
            <div className={`founder-image-container ${isVisible ? 'slide-in-from-right' : ''}`}>
                <img src={founderImage} alt="Founder" />
                <div className="founder-name">Evangelist Bolanle Oyeniyi<br /><span className='small__name'> Our Founder </span></div>
            </div>
        </div>
    );
};

export default MeetOurFounder;
