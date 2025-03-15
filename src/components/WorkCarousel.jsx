import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SportThumb from '../assets/projects-thumbnail/sporttrackr.png';
import FlashifyThumb from '../assets/projects-thumbnail/flashify.webp';
import FileManager from '../assets/projects-thumbnail/filemanager.png';
import '../styles/components/WorkCarousel.css';

const WorkCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [direction, setDirection] = useState(0);

  const projects = [
    {
      id: 1,
      title: "SportTrackr",
      description: "A comprehensive Football league management application for web and mobile platforms with real-time statistics and team management features.",
      webImage: FileManager,
      mobileImage: FlashifyThumb,
      hasMobile: true,
      details: {
        techStack: ["React", "React Native","Node.js", "Postgres"],
        features: ["Real-time stats", "Team management", "Player tracking", "Mobile responsive"],
        github: "https://github.com/username/sporttrackr",
        liveDemo: null
      }
    },
    {
      id: 2,
      title: "Flashify",
      description: "An intuitive Flashcard generator & notes application with spaced repetition learning algorithms for efficient knowledge retention.",
      webImage: SportThumb,
      mobileImage: FlashifyThumb,
      hasMobile: true,
      details: {
        techStack: ["React", "React Native", "Flask", "SQLite"],
        features: ["Flashcard creation", "Notes organization", "Learning analytics", "Cross-platform"],
        github: "https://github.com/username/flashify",
        liveDemo: null
      }
    },
  ];

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      zIndex: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      zIndex: 0
    })
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="work-carousel-container">
      <div className="carousel-wrapper">

        <div className="carousel-content">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="project-card"
            >
              <motion.div 
                className="project-images"
                whileHover={{ scale: 1.02 }}
                onClick={openModal}
              >
                {projects[currentIndex].hasMobile ? (
                  <div className="dual-images">
                    <img src={projects[currentIndex].webImage} alt="Web version" className="web-img" />
                    <img src={projects[currentIndex].mobileImage} alt="Mobile version" className="mobile-img" />
                  </div>
                ) : (
                  <img src={projects[currentIndex].webImage} alt={projects[currentIndex].title} className="single-img" />
                )}
              </motion.div>
              <div className="project-info">
                <h2>{projects[currentIndex].title}</h2>
                <p>{projects[currentIndex].description}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="carousel-dots">
        {projects.map((_, idx) => (
          <motion.button
            key={idx}
            className={`dot ${idx === currentIndex ? 'active' : ''}`}
            onClick={() => {
              setDirection(idx > currentIndex ? 1 : -1);
              setCurrentIndex(idx);
            }}
            whileHover={{ scale: 1.2 }}
          />
        ))}
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="project-modal"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <div className="modal-content">
              <button className="modal-close" onClick={closeModal}>×</button>
              <h2>{projects[currentIndex].title}</h2>
              <p>{projects[currentIndex].description}</p>
              <div className="modal-details">
                <h3>Tech Stack</h3>
                <ul>
                  {projects[currentIndex].details.techStack.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
                <h3>Features</h3>
                <ul>
                  {projects[currentIndex].details.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <div className="modal-links">
                  <a href={projects[currentIndex].details.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                  {projects[currentIndex].details.liveDemo &&
                  <a href={projects[currentIndex].details.liveDemo} target="_blank" rel="noopener noreferrer">Live Demo</a>                  
                  }
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WorkCarousel;