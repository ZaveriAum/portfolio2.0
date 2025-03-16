import "../styles/About.css";
import profilePhoto from "../assets/ProfilePhoto.jpg";
import { useEffect, useState } from "react";

function About() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="about-wrapper">
      <p className={`about-header ${isVisible ? 'fade-in' : ''}`}>About Me</p>
      
      <div className={`about-container ${isVisible ? 'fade-in' : ''}`}>
        <div className="about-image-container">
          <img 
            src={profilePhoto} 
            alt="Aum Zaveri" 
            className="about-image" 
            loading="lazy"
          />
        </div>

        <div className="about-content">
            <p className="about-text">
                Hey, I'm Aum, a software engineer passionate about building scalable and high-performance applications across web and mobile platforms.  
                I work with programming languages like Java, Python, C#, and JavaScript, along with frameworks and libraries such as React, React Native (Expo), Node.js, and Flask.  
                My journey started with a love for problem-solving and system design, leading me to build microservices, optimize databases, and implement CI/CD workflows.  
                I’ve worked on projects like SportTrackr and Flashify, ensuring seamless user experiences and real-time interactions.  
                I believe in clean code, continuous learning, and turning ideas into reality through technology.  
                <div className="modal-links">
                  <a href="https://drive.google.com/file/d/1ACeVfG4uflAqXzTJG63q44E-H5nMX9TJ/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                    Resume
                  </a>
                  <a href="https://drive.google.com/file/d/15x2v13DcsAMyx6aBmnyWOJ4X6dd-Q8SU/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                    Cover Letter
                  </a>
                  <a href="https://drive.google.com/file/d/1xxzuTwIb8BcnCchJHlBffedBuajwHK4C/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                    Recommendation Letter
                  </a>
                </div>
            </p>
        </div>
      </div>
    </div>
  );
}

export default About;