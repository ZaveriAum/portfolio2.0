import React, { useState, useEffect } from "react";
import SportThumb from '../assets/projects-thumbnail/sporttrackr.png';
import FlashifyThumb from '../assets/projects-thumbnail/flashify.png';
import FileManager from '../assets/projects-thumbnail/filemanager.png';
import '../styles/components/WorkCarousel.css';

const WorkCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [autoplayEnabled, setAutoplayEnabled] = useState(true);

  const projects = [
    {
      id: 1,
      title: "SportTrackr",
      description: "A comprehensive Football league management application for web and mobile platforms with real-time statistics and team management features.",
      webImage: FileManager,
      mobileImage: FlashifyThumb,
      hasMobile: true,
    },
    {
      id: 2,
      title: "Flashify",
      description: "An intuitive Flashcard generator & notes application with spaced repetition learning algorithms for efficient knowledge retention.",
      webImage: "/api/placeholder/500/300",
      mobileImage: "/api/placeholder/200/400",
      hasMobile: true,
    },
    {
      id: 3,
      title: "File Manager",
      description: "A powerful Python GUI-based file manager for desktop with advanced organization features and batch processing capabilities.",
      webImage: "/api/placeholder/500/300",
      hasMobile: false,
    }
  ];

  // useEffect(() => {
  //   let interval;
  //   if (autoplayEnabled && !isHovering) {
  //     interval = setInterval(() => {
  //       handleNext();
  //     }, 7000);
  //   }
  //   return () => clearInterval(interval);
  // }, [currentIndex, autoplayEnabled, isHovering]);

  const pauseAutoplay = () => {
    setAutoplayEnabled(false);
    setTimeout(() => setAutoplayEnabled(true), 30000);
  };

  const handleNext = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setIsHovering(false);
    
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
      setIsTransitioning(false);
    }, 300);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setIsHovering(false);
    
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
      setIsTransitioning(false);
    }, 300);
  };

  const handleDotClick = (index) => {
    if (isTransitioning || currentIndex === index) return;
    
    setIsTransitioning(true);
    setIsHovering(false);
    pauseAutoplay();
    
    setTimeout(() => {
      setCurrentIndex(index);
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <div className="project-showcase-container">
      
      <div className="carousel-container">
        <button 
          className="nav-button nav-button-left"
          onClick={() => {
            handlePrev();
            pauseAutoplay();
          }}
          aria-label="Previous project"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        
        <button 
          className="nav-button nav-button-right"
          onClick={() => {
            handleNext();
            pauseAutoplay();
          }}
          aria-label="Next project"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
        
        <div 
          className={`project-card ${isTransitioning ? 'transitioning' : ''}`}
          onMouseEnter={() => {
            setAutoplayEnabled(false);
          }}
          onMouseLeave={() => {
            setTimeout(() => setAutoplayEnabled(true), 5000);
          }}
        >
          <div className="project-header">
            <h2>{projects[currentIndex].title}</h2>
            <p>{projects[currentIndex].description}</p>
          </div>
          
          <div 
            className="project-images-container"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {projects[currentIndex].hasMobile ? (
              <div className={`dual-image-container ${isHovering ? 'hovered' : ''}`}>
                <div className="project-image web-image">
                  <img 
                    src={projects[currentIndex].webImage} 
                    alt={`${projects[currentIndex].title} web version`}
                  />
                </div>
                
                <div className="project-image mobile-image">
                  <img 
                    src={projects[currentIndex].mobileImage} 
                    alt={`${projects[currentIndex].title} mobile version`}
                  />
                </div>
              </div>
            ) : (
              <div className={`project-image single-image ${isHovering ? 'hovered' : ''}`}>
                <img 
                  src={projects[currentIndex].webImage} 
                  alt={projects[currentIndex].title}
                />
              </div>
            )}
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default WorkCarousel;