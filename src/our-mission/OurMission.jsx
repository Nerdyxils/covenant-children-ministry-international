import React from 'react';
import { Link } from 'react-router-dom';
import './OurMission.css';
import bgArt from '../assets/bg-art.png';
import '../pages/pages.css'; // Import for consistent button styling

const OurMission = () => {
    
const missionAfterStyle = {
    backgroundImage: `url(${bgArt})`,
    backgroundSize: 'auto',
    backgroundRepeat: 'no-repeat',
    position: 'absolute',
    bottom: '20px',
    right: '20px',
    width: '100%',
    maxWidth: '100px',
    height: '100px', 
};

  return (
    <div className="mission-section" id="mission">
        <div style={missionAfterStyle}></div> 
        <div className="mission-pad">
        <h2 className="mission-subheading">Our Mission</h2>
        <p className="mission-paragraph">At Covenant Children Ministry International, our mission is to help children discover their God-given potential, lead them to a relationship with Jesus Christ, and provide support and resources to families worldwide.</p>
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Link to="/mission" className="btn btn-primary">Learn More About Our Mission</Link>
        </div>
        </div> 
        </div>
  );
};

export default OurMission;
