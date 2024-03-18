import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ChooseLevel.css"

const levels = ['Beginner', 'Intermediate', 'Expert'];
const ChooseLevel = () => {
  const [selectedLevel, setSelectedLevel] = useState(levels[0]); 

  const handleLevelChange = (newLevel) => {
    setSelectedLevel(newLevel);
  };

  const settings = {
    dots: true, 
    infinite: true, 
    slidesToShow: 1, 
    slidesToScroll: 1,
    
  };

  return (
    <div className="choose-level">
      <h2>Choose Your Level</h2>
      <Slider {...settings}>
        {levels.map((level) => (
          <div key={level} className="level-card" onClick={() => handleLevelChange(level)}>
            {level}
          </div>
        ))}
      </Slider>
      <p style={{marginTop: "40px"}}>Selected Level: {selectedLevel}</p>
    </div>
  );
};



export default ChooseLevel;
