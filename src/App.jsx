import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Background from "./components/Background";
import Exp from "./pages/Exp";
import "../src/App.css";
import sayHiEmoji from "./assets/wave-emoji.webp";
import homeIcon from "./assets/home-icon.svg";
import aboutMeIcon from "./assets/about-me-icon.svg";
import projectsIcon from "./assets/project-icon.svg";
import expIcon from "./assets/exp-icon.svg";

const pages = [
  { component: Home, title: "Home", icon: homeIcon },
  { component: About, title: "About", icon: aboutMeIcon },
  { component: Work, title: "Work", icon: projectsIcon },
  { component: Exp, title: "Exp", icon: expIcon },
];

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const carouselRef = useRef(null);
  const lastScrollTime = useRef(0);
  const touchStartY = useRef(0);
  const touchEndY = useRef(0);
  const isScrolling = useRef(false);

  useEffect(() => {
    const handleWheel = (event) => {
      event.preventDefault();
      
      if (isScrolling.current) return;
      
      const now = Date.now();
      if (now - lastScrollTime.current < 800) return;

      const scrollThreshold = 50;
      const delta = Math.abs(event.deltaY);
      if (delta < scrollThreshold) return;

      const direction = event.deltaY > 0 ? 1 : -1;
      
      isScrolling.current = true;
      changePage(direction);
      lastScrollTime.current = now;

      setTimeout(() => {
        isScrolling.current = false;
      }, 800);
    };

    const element = carouselRef.current;
    if (element) {
      element.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (element) {
        element.removeEventListener("wheel", handleWheel);
      }
    };
  }, [index]);

  useEffect(() => {
    const element = carouselRef.current;

    const handleTouchStart = (e) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      e.preventDefault();
    };

    const handleTouchEnd = (e) => {
      touchEndY.current = e.changedTouches[0].clientY;
      const swipeDistance = touchEndY.current - touchStartY.current;

      if (Math.abs(swipeDistance) > 50) {
        const direction = swipeDistance > 0 ? -1 : 1;
        changePage(direction);
      }
    };

    if (element) {
      element.addEventListener("touchstart", handleTouchStart);
      element.addEventListener("touchmove", handleTouchMove, { passive: false });
      element.addEventListener("touchend", handleTouchEnd);
    }

    return () => {
      if (element) {
        element.removeEventListener("touchstart", handleTouchStart);
        element.removeEventListener("touchmove", handleTouchMove);
        element.removeEventListener("touchend", handleTouchEnd);
      }
    };
  }, [index]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      const now = Date.now();
      if (now - lastScrollTime.current < 800) return;

      if (event.key === "ArrowDown") {
        changePage(1);
        lastScrollTime.current = now;
      } else if (event.key === "ArrowUp") {
        changePage(-1);
        lastScrollTime.current = now;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [index]);

  const changePage = (direction) => {
    const newIndex = (index + direction + pages.length) % pages.length;
    setIndex(newIndex);
  };

  const goToPage = (pageIndex) => {
    if (pageIndex === index) return;
    setIndex(pageIndex);
  };

  const CurrentPage = pages[index].component;

  return (
    <div className="app-container" ref={carouselRef}>
      <Background
        particleColors={["#FCFFC1", "#FFE893", "#FBB4A5", "#FB9EC6"]}
        particleCount={600}
        particleSpread={20}
        speed={0.05}
        particleBaseSize={300}
        moveParticlesOnHover={false}
        alphaParticles={true}
        disableRotation={false}
      />

      <div className="content">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute w-full h-full"
          >
            <CurrentPage />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="navigation-dots">
        {pages.map((page, i) => (
          <button
            key={i}
            className={`nav-dot ${i === index ? "active" : ""}`}
            onClick={() => goToPage(i)}
            aria-label={`Go to ${page.title}`}
          >
            <img src={page.icon} alt={page.title} className="page-icon" />
          </button>
        ))}
      </div>

      <button className="sayhi-button">
        <img src={sayHiEmoji} alt="say-hi-icon" className="sayhi-icon" />
      </button>
    </div>
  );
}