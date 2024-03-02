import React from 'react';
import './MeetOurFounder.css'; // Make sure to create this CSS file
// Import the founder's image and background graphical image
import founderImage from '../assets/Our-founder.png'; // Update the path as needed
import backgroundGraphic from '../assets/bg-element.png'; // Update the path as needed

const MeetOurFounder = () => {
  return (
    <div className="founder-section" style={{ backgroundImage: `url(${backgroundGraphic})` }}>
      <div className="founder-content">
        <h2>Meet our Founder</h2>
        <p>Established in 2010 by Evangelist Bolanle Oyeniyi, Covenant Children Ministry International is a Pentecostal Christian organization dedicated to nurturing and empowering children. From humble beginnings to a growing community, we focus on providing holistic support to children and families, regardless of background.</p>
      </div>
      <div className="founder-image-container">
        <img src={founderImage} alt="Founder" />
        <div className="founder-name">Evangelist Bolanle Oyeniyi <br /><span> Our Founder </span></div>
      </div>
    </div>
  );
};

export default MeetOurFounder;
