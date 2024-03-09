import React, { useEffect, useRef, useState }  from 'react';
import './AboutUs.css'; // Ensure this file is in the same directory

const AboutUs = () => {
    const backgroundStyle = `${process.env.PUBLIC_URL}/assets/bg-art.png`;

    const [isVisible, setIsVisible] = useState(false);
    const aboutRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              setIsVisible(entry.isIntersecting);
            });
          },
          {
            root: null, // viewport
            rootMargin: '0px',
            threshold: 0.1
          }
        );
      
        // Copying aboutRef.current to a variable
        const currentRef = aboutRef.current;
      
        if (currentRef) {
          observer.observe(currentRef);
        }
      
        // Optional: Immediate visibility check (updated to use currentRef)
        const checkIfVisible = () => {
          if (currentRef && currentRef.getBoundingClientRect().top <= window.innerHeight) {
            setIsVisible(true);
          }
        };
        checkIfVisible();
      
        return () => {
          if (currentRef) {
            observer.disconnect();
          }
        };
      }, []); // Dependencies array remains empty as we're only setting this up once on component mount
      

  return (
        <div className="about-container" id="about" ref={aboutRef} style={{ backgroundImage: `url(${backgroundStyle})`}} >
                <div className={`about-text ${isVisible ? 'slide-in-left' : ''}`}>
                    <h1>About Us</h1>
                    <p>Established in 2010 by Evangelist Bolanle Oyeniyi, Covenant Children Ministry International is a Pentecostal Christian organization dedicated to nurturing and empowering children. From humble beginnings to a growing community, we focus on providing holistic support to children and families, regardless of background.</p>
                </div>
                <div className={`about-image ${isVisible ? 'fade-in' : ''}`}>
                    <img src={`${process.env.PUBLIC_URL}/assets/about-us-image.png`} alt="About Us" />
                </div>
        </div>
  );
};

export default AboutUs;
