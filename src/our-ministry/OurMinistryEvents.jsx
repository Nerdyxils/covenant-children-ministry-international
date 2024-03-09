import React, { useEffect, useRef, useState } from 'react';
import './OurMinistryEvents.css'; // Make sure to create this CSS file

const OurMinistryEvents = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const prayIMG = `${process.env.PUBLIC_URL}/assets/pray.png`;

  useEffect(() => {
      const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => setIsVisible(entry.isIntersecting));
      }, { threshold: 0.1 });

      observer.observe(sectionRef.current);

      return () => observer.disconnect();
  }, []);

  return (
    <div className="ministry-events-section" id="events" ref={sectionRef}>
      <div className={`ministry-events-heading ${isVisible ? 'slide-down' : ''}`}>
        <h1>Our Ministry Events</h1>
        <p>Throughout the year, we organize various events such as worship services, Bible studies, educational programs, family celebrations, and outreach initiatives to serve our community and spread God's love.</p>
      </div>
      <div className={`ministry-events-grid ${isVisible ? 'fade-in' : ''}`}>
        <div className="ministry-event">
          <div className="event-image">
            <img src={prayIMG} alt="event one" />
          </div>
          <div className="event-cta">
            <h2>Annual Events</h2>
            <p>Join us for annual celebrations, scholarships, and awards ceremonies that uplift and empower needy children and families.</p>
            <button>View Details</button>
          </div>
        </div>
        <div className="ministry-event">
          <div className="event-image">
            <img src={prayIMG} alt="event one" />
          </div>
          <div className="event-cta">
            <h2>Annual Events</h2>
            <p>Join us for annual celebrations, scholarships, and awards ceremonies that uplift and empower needy children and families.</p>
            <button>View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMinistryEvents;
