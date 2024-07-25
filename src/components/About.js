import React from 'react';
import './About.css';
import profilePhoto from './profile_photo.jpeg';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <div className="about-text">
          <h2
          style={{
            color: "white",
            // fontFamily: "Arial, sans-serif", 
            fontFamily: "serif",
            // padding: "20px",
            textAlign: "left", 
            borderRadius: "50px",
            fontSize: "40px",
            // textShadow: "0 0 20px blue"
          }}
          > Lets have Introduction! </h2>
          <p>I go by the saying, "Learning is a stream, and it ought not to stop."
            What interests me about working for limeroad is the opportunity to contribute to the forefront of lending technology and infrastructure. The prospect of being part of a team that is shaping the future of delivering freshness of styles, quality, and affordability and focus on value/masstige segment within the Indian lifestyle/fashion space. 

Additionally, I am drawn to the idea of being part of a team that includes graduates from top engineering college, which resonates with me as an IIT Kharagpur 2023 graduate myself.
            </p>
        </div>
        <div className="about-image">
          <img src={profilePhoto} alt="my Photo" />
        </div>
      </div>
    </section>
  );
};

export default About;
