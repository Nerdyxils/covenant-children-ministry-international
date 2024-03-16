import React, { useEffect, useRef, useState } from 'react';
import './OurMinistryEvents.css'; // Make sure to create this CSS file
import ToggleText from '../ToggleText';

const OurMinistryEvents = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  // const prayIMG = `${process.env.PUBLIC_URL}/assets/pray.png`;
  const breakIMG = `${process.env.PUBLIC_URL}/assets/march-break.jpeg`;
  const campIMG = `${process.env.PUBLIC_URL}/assets/summer-camp.jpg`;
  const dayIMG = `${process.env.PUBLIC_URL}/assets/childrensday.png`;
  const schoolIMG = `${process.env.PUBLIC_URL}/assets/afterschool.png`;
  const easterIMG = `${process.env.PUBLIC_URL}/assets/easter.png`;

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
            <img src={breakIMG} alt="event one" />
          </div>
          <div className="event-cta">
            <h2>March Break Camp</h2>
           <ToggleText text="During out March break camp we always organize exciting adventure! It’s a week filled with fun activities, games, and creative crafts. Children gets to make new friends, explore exciting themes, and embark on unforgettable fun activities together!"/>
          </div>
        </div>
        <div className="ministry-event">
          <div className="event-image">
            <img src={campIMG} alt="event one" />
          </div>
          <div className="event-cta">
            <h2>Summer Camp</h2>
            <ToggleText text="We are always excited for our awesome summer event at our Summer Camp! It’s always days filled with fun games, movies, arts and crafts, cooking, and swimming. We make unforgettable memories, and have a blast with your friends!"/>
          </div>
        </div>
        <div className="ministry-event">
          <div className="event-image">
            <img src={dayIMG} alt="event one" />
          </div>
          <div className="event-cta">
            <h2>Children's Day Celebration</h2>
            <ToggleText text="On Children’s day, we ensure to celebrate the day with a splash of creativity and cinematic fun! You can join us for a day filled with colorful painting sessions and exciting movies that will help your imagination and bring joy to children’s hearts. It's a day dedicated to celebrating the wonderful world of children!"/>
          </div>
        </div>
        <div className="ministry-event">
          <div className="event-image">
            <img src={schoolIMG} alt="event one" />
          </div>
          <div className="event-cta">
            <h2>After-School Program</h2>
            <ToggleText text="Join our After-School Program and let’s get you on a journey of learning and growth! Our dedicated team is here to support you in your academic endeavors by providing homework help, helping you getting on top of your class, and offering engaging activities to make learning fun and rewarding. Contact us to learn more about this program."/>
          </div>
        </div>
        <div className="ministry-event">
          <div className="event-image">
            <img src={easterIMG} alt="event one" />
          </div>
          <div className="event-cta">
            <h2>Easter Celebrations</h2>
            <ToggleText text="During the Easter celebrations we have our egg-citing Bunny Party and Egg Hunt extravaganza! You can join us for a day filled with fluffy bunnies, colorful eggs, and endless fun. We embark on a thrilling egg hunt adventure, while also enjoying delightful treats, and creating cherished memories with friends and family. It's a celebration you won't want to miss!"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMinistryEvents;
