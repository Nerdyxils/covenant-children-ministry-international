import React from 'react';
import './AfterSchoolPrograms.css';
// Assuming you have these images in your src/assets folder
import imageOne from '../assets/image-one.png';
import imageTwo from '../assets/image-two.png';
import imageThree from '../assets/image-three.png';
import imageFour from '../assets/image-four.png';

const AfterSchoolPrograms = () => {
  return (
    <div className="after-school-programs">
      <h2>After School Programs</h2>
      <p>Discover our range of activities for children, including sports, arts, homework help, and specialized programs for children with autism.</p>
      <div className="images-row">
        <img src={imageOne} alt="Activity One" style={{ flex: 7 }} />
        <img src={imageTwo} alt="Activity Two" style={{ flex: 3 }} />
      </div>
      <div className="images-row second-row">
        <img src={imageThree} alt="Activity Three" style={{ flex: 3 }} />
        <img src={imageFour} alt="Activity Four" style={{ flex: 7 }} />
      </div>
    </div>
  );
};

export default AfterSchoolPrograms;

