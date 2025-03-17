import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SportMob from '../assets/projects-thumbnail/sporttrackr-mob.png';
import SportWeb from '../assets/projects-thumbnail/sporttrackr-web.png';
import FlashifyThumb from '../assets/projects-thumbnail/flashify.webp';
import FlashifyWeb from '../assets/projects-thumbnail/flashify-web.png';
import NorthPoleWeb from '../assets/projects-thumbnail/NorthPole-web.png';
import TicTacToe from '../assets/projects-thumbnail/tic-tac-toe.png';

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
      webImage: SportWeb,
      mobileImage: SportMob,
      hasMobile: true,
      details: {
        techStack: ["React", "React Native", "Node.js", "Postgres"],
        features: ["League Management", "Team management", "Player tracking", "Real-time chat"],
        github: [
          "https://github.com/ZaveriAum/SportTrackr-backend",
          "https://github.com/ElioFezollari/SportTrackr",
          "https://github.com/ElioFezollari/SportTrackr-Mobile"
        ],
        liveDemo: null,
        additionalInfo: {
          projectSummary: {
            companyName: "MEA",
            teamMembers: ["Elio Fezollari", "Mia Truong", "Aum Zaveri", "Kate Labis"],
            contactEmails: [
              "fezollarielio@gmail.com",
              "aumzaveri06@gmail.com",
              "truongthuykyduyen@gmail.com",
              "kate.labis@georgebrown.ca"
            ],
            projectTitle: "SportTrackr",
            aboutCompany: "SportTrackr LTD focuses on applications for recreational sports leagues, benefiting both businesses and athletes.",
            aboutProject: "SportTrackr is a centralized app for soccer leagues, helping league managers, employees, and players by tracking stats, scheduling games, and managing operations."
          },
          projectVision: {
            purpose: "This document outlines the objectives, goals, and strategic direction for the development of SportTrackr.",
            scope: {
              inScope: [
                "League Creation & Management",
                "Score Tracking & Statistics",
                "User Profiles & Achievements",
                "Real-time Chat & Notifications",
                "Social Integration & Sharing",
                "Payment Processing"
              ],
              outOfScope: [
                "Physical Venue Booking",
                "Staff Management",
                "Pick-Up Games",
                "Payroll System",
                "Permanent Content Storage"
              ],
            },
          },
          businessRequirements: {
            highLevelRequirements: [
              { id: "HLR01", description: "Athlete must be able to make payments online." },
              { id: "HLR02", description: "Athlete must be able to see personal, league, and match data online." },
              { id: "HLR03", description: "Athlete must be able to join a team through the app." },
              { id: "HLR04", description: "Teams must be able to upload their data." },
              { id: "HLR05", description: "League Organizers must be able to manage leagues and process payments." }
            ]
          },
          projectPlan: {
            objective: "SportTrackr is a platform for football enthusiasts to find competitive leagues, track performance, and stay connected with their teams.",
            corporateGoals: [
              "Boost user engagement through real-time updates and league tracking.",
              "Expand market by catering to both casual and competitive players.",
              "Establish brand awareness via social media and cutting-edge features."
            ],
            scope: {
              inScope: [
                "League Creation & Management",
                "Score Tracking & Statistics",
                "User Profiles & Achievements",
                "Real-time Chat & Notification"
              ],
              outOfScope: [
                "Physical Venue Booking",
                "Pick Up Games",
                "Payroll Systems",
                "User Generated Content"
              ]
            },
            deliverables: [
              "SportTrackr Mobile Application",
              "Web Portals for league management",
              "User and Admin Guides",
              "Customer Support with FAQs",
              "Analytics tools for performance tracking"
            ],
            risks: [
              { risk: "Data Inconsistency & Quality", severity: "Medium", strategy: "Implement strong validation mechanisms." },
              { risk: "Scalability Challenges", severity: "High", strategy: "Use cloud services with auto-scaling." },
              { risk: "Security Threats", severity: "High", strategy: "Strong encryption & secure authentication (JWT)." },
              { risk: "Payment Processing Failure", severity: "High", strategy: "Implement failover strategies & notifications." },
              { risk: "User Retention Issues", severity: "High", strategy: "Introduce social engagement features & achievements." }
            ]
          },
          requirementsAnalysisAndDesign: {
            purpose: "Defines software needs, functional/non-functional requirements, and system design before programming.",
            systemOverview: "SportTrackr simplifies league organization, allowing players to create teams, join local leagues, and track performance.",
            functionalRequirements: [
              { id: "FR01", description: "League organizers can create and manage leagues with team limits, schedules, and stats tracking." },
              { id: "FR02", description: "Athletes can make online payments for league entry fees securely." },
              { id: "FR03", description: "Users can track personal and team statistics in real-time." },
              { id: "FR04", description: "The app offers an in-app chat feature for teams and leagues." },
              { id: "FR05", description: "Social sharing features allow users to post achievements and match highlights." }
            ],
            nonFunctionalRequirements: {
              performance: "95% of interactions should respond within 1 second. Payments should process within 5 seconds.",
              reliability: "System must have 99% uptime, with backups available for up to 7 days.",
              security: "Data must be encrypted, and multi-factor authentication should be implemented for league organizers.",
              scalability: "Should handle up to 5,000 concurrent users without performance degradation."
            },
            dataModeling: "SportTrackr uses PostgreSQL for structured data and cloud storage for images/videos, ensuring scalable and secure data management.",
            processModeling: [
              { name: "League Creation", steps: ["Organizer enters details", "System validates data", "League is created"] },
              { name: "Player Payments", steps: ["User enters payment details", "System processes transaction", "Confirmation received"] },
              { name: "Real-Time Chat", steps: ["User sends message", "Message stored in database", "Team members receive notification"] }
            ]
          },
          wireframe: "https://www.figma.com/design/HWCtLXIZCJVHe0IzQH4qJi/Sport-Tracker?node-id=0-1&t=VZssplJcHB0G9IHS-1"
        }
      }
    },
    {
      id: 2,
      title: "Flashify",
      description: "An intuitive Flashcard generator & notes application with spaced repetition learning algorithms for efficient knowledge retention.",
      webImage: FlashifyWeb,
      mobileImage: FlashifyThumb,
      hasMobile: true,
      details: {
        techStack: ["React", "React Native", "Flask", "SQLite"],
        features: ["Flashcard creation", "Notes organization", "Learning analytics", "Cross-platform"],
        github: [
          "https://github.com/ZaveriAum/Flashify-backend",
          "https://github.com/ZaveriAum/Flashify-web",
          "https://github.com/ZaveriAum/Flashify-frontend"
        ],
        liveDemo: null,
        additionalInfo: {
          wireframe: "https://www.figma.com/design/8SE0wiwKfeQj0d1FjGmano/Flashify?node-id=0-1&t=pkgs6KfwtzIsDg1A-1"
        }
      }
    },
    {
      id: 3,
      title: "North Pole",
      description: "NorthPole Booking is a comprehensive full-stack ASP.NET Core application designed to streamline the booking experience for flights, cars, and hotels (including rooms). This platform integrates powerful technologies such as LINQ, Entity Framework Core, and Identity Management.",
      webImage: NorthPoleWeb,
      hasMobile: false,
      details: {
        techStack: ["ASP.NET MVC Core", "Microsoft Entity Framework Core", "Microsoft SQL", "SendGrid API","Bootstrap"],
        features: ["Seamless Booking System for Flight, Car and Hotel", "User Authentication", "Role Management", "Email Notifications", "User Reviews & Ratings", "Admin Dashboard"],
        github: [
          "https://github.com/ZaveriAum/COMP2139-Assignment1",
        ],
        liveDemo: null,
        additionalInfo: {
          wireframe: null
        }
      }
    },{
      id: 4,
      title: "Tic Tac Toe AI",
      description: "Tic Tac Toe AI is an advanced JavaFX-based desktop game featuring an intelligent AI opponent powered by the Minimax algorithm. The application provides an interactive and visually appealing GUI for a seamless gaming experience.",
      webImage: TicTacToe,
      hasMobile: false,
      details: {
        techStack: ["JavaFX", "Minimax Algorithm", "FXML", "Scene Builder"],
        features: [
          "Single-Player Mode with AI Opponent",
          "Minimax Algorithm for Optimal AI Decisions",
          "Interactive JavaFX GUI",
          "Smooth Animations & UI Effects",
          "Multiplayer (Local) Mode"
        ],
        github: [
          "https://github.com/ZaveriAum/TicTacToe-minimax_AI-two_player"
        ],
        liveDemo: null,
        additionalInfo: {
          wireframe: null
        }
      }
    }    
  ];  

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    }
  
    return () => {
      document.body.style.overflow = "auto"; 
      document.documentElement.style.overflow = "auto";
    };
  }, [isModalOpen]);   

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
      <div className="project-modal-header">
        <h2>{projects[currentIndex].title}</h2>
        <button className="modal-close" onClick={closeModal}>×</button>
      </div>

      <div className="modal-links">
        {projects[currentIndex].details.github.length === 1 ? (
          <a href={projects[currentIndex].details.github[0]} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        ) : (
          projects[currentIndex].details.github.map((link, i) => (
            <a key={i} href={link} target="_blank" rel="noopener noreferrer">
              {i === 0 ? "Backend" : i === 1 ? "Frontend" : "Mobile"}
            </a>
          ))
        )}
        {projects[currentIndex].details.additionalInfo.wireframe && (
          <a href={projects[currentIndex].details.additionalInfo.wireframe} target="_blank" rel="noopener noreferrer">Wireframes</a>
        )}
        {projects[currentIndex].details.liveDemo && (
          <a href={projects[currentIndex].details.liveDemo} target="_blank" rel="noopener noreferrer">Live Demo</a>
        )}
      </div>
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

        {projects[currentIndex].details.additionalInfo?.projectSummary && (
          <div className="project-summary">
            <h3>Project Summary</h3>
            <p><strong>Company Name:</strong> {projects[currentIndex].details.additionalInfo.projectSummary.companyName}</p>
            <p><strong>About the Company:</strong> {projects[currentIndex].details.additionalInfo.projectSummary.aboutCompany}</p>
            <p><strong>About the Project:</strong> {projects[currentIndex].details.additionalInfo.projectSummary.aboutProject}</p>
          </div>
        )}

        {projects[currentIndex].details.additionalInfo?.projectPlan && (
          <div className="project-plan">
            <h3>Project Plan</h3>
            <p><strong>Objective:</strong> {projects[currentIndex].details.additionalInfo.projectPlan.objective}</p>
            <h4>Corporate Goals</h4>
            <ul>
              {projects[currentIndex].details.additionalInfo.projectPlan.corporateGoals.map((goal, i) => (
                <li key={i}>{goal}</li>
              ))}
            </ul>
            <h4>Scope</h4>
            <h5>In Scope</h5>
            <ul>
              {projects[currentIndex].details.additionalInfo.projectPlan.scope.inScope.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <h5>Out of Scope</h5>
            <ul>
              {projects[currentIndex].details.additionalInfo.projectPlan.scope.outOfScope.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <h4>Deliverables</h4>
            <ul>
              {projects[currentIndex].details.additionalInfo.projectPlan.deliverables.map((deliverable, i) => (
                <li key={i}>{deliverable}</li>
              ))}
            </ul>
          </div>
        )}

        {projects[currentIndex].details.additionalInfo?.requirementsAnalysisAndDesign && (
          <div className="requirements-analysis">
            <h3>Requirements, Analysis & Design</h3>
            <p><strong>Purpose:</strong> {projects[currentIndex].details.additionalInfo.requirementsAnalysisAndDesign.purpose}</p>
            <p><strong>System Overview:</strong> {projects[currentIndex].details.additionalInfo.requirementsAnalysisAndDesign.systemOverview}</p>
            
            <h4>Functional Requirements</h4>
            <ul>
              {projects[currentIndex].details.additionalInfo.requirementsAnalysisAndDesign.functionalRequirements.map((req, i) => (
                <li key={i}><strong>{req.id}:</strong> {req.description}</li>
              ))}
            </ul>

            <h4>Non-Functional Requirements</h4>
            <ul>
              <li><strong>Performance:</strong> {projects[currentIndex].details.additionalInfo.requirementsAnalysisAndDesign.nonFunctionalRequirements.performance}</li>
              <li><strong>Reliability:</strong> {projects[currentIndex].details.additionalInfo.requirementsAnalysisAndDesign.nonFunctionalRequirements.reliability}</li>
              <li><strong>Security:</strong> {projects[currentIndex].details.additionalInfo.requirementsAnalysisAndDesign.nonFunctionalRequirements.security}</li>
              <li><strong>Scalability:</strong> {projects[currentIndex].details.additionalInfo.requirementsAnalysisAndDesign.nonFunctionalRequirements.scalability}</li>
            </ul>

            {projects[currentIndex].details.additionalInfo.requirementsAnalysisAndDesign.processModeling.map((process, i) => (
              <div key={i}>
                <h4>Process Modeling</h4>
                <h5>{process.name}</h5>
                <ul>
                  {process.steps.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  </motion.div>
)}



      </AnimatePresence>
    </div>
  );
};

export default WorkCarousel;