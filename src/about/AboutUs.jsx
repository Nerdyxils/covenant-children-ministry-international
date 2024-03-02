import React from 'react';
import './AboutUs.css'; // Ensure this file is in the same directory

const AboutUs = () => {
    const backgroundStyle = `${process.env.PUBLIC_URL}/assets/bg-art.png`;
  return (
        <div className="about-container" style={{ backgroundImage: `url(${backgroundStyle})`}} >
                <div className="about-text">
                    <h1>About Us</h1>
                    <p>Established in 2010 by Evangelist Bolanle Oyeniyi, Covenant Children Ministry International is a Pentecostal Christian organization dedicated to nurturing and empowering children. From humble beginnings to a growing community, we focus on providing holistic support to children and families, regardless of background.</p>
                </div>
                <div className="about-image">
                    <img src={`${process.env.PUBLIC_URL}/assets/about-us-image.png`} alt="About Us" />
                </div>
        </div>
  );
};

export default AboutUs;
