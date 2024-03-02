import React from 'react';
import './OurMission.css';

const OurMission = () => {
  // Note: Adjusted the path to not use '..' before 'assets'
  const backgroundImageUrl = `${process.env.PUBLIC_URL}/assets/bg-art.png`;

  // This will serve as the container that mimics the ::after pseudo-element
  const missionAfterStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    position: 'absolute',
    bottom: '20px',
    right: '20px',
    width: '25%',
    maxWidth: '100px',
    // height: '100px',
  };

  return (
    <div className="mission-section">
        <div style={missionAfterStyle}></div> 
        <h2 className="mission-subheading">Our Mission</h2>
        <p className="mission-paragraph">At Covenant Children Ministry International, our mission is to help children discover their God-given potential, lead them to a relationship with Jesus Christ, and provide support and resources to families worldwide.</p>
    </div>
  );
};

export default OurMission;

