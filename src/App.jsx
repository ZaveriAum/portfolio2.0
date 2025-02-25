import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Background from "./components/Background";
import '../src/App.css'
const pages = [Home, About, Work];

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const deltaYAccumulated = useRef(0);
  const isScrolling = useRef(false);
  const threshold = 300;

  useEffect(() => {
    const handleScroll = (event) => {
      event.preventDefault();

      console.log(deltaYAccumulated.current);
      deltaYAccumulated.current += event.deltaY;

      if (isScrolling.current) return;

      if (Math.abs(deltaYAccumulated.current) >= threshold) {
        const direction = deltaYAccumulated.current > 0 ? 1 : -1;
        setIndex((prev) => (prev + direction + pages.length) % pages.length);

        deltaYAccumulated.current = 0;
        isScrolling.current = true;

        setTimeout(() => {
          isScrolling.current = false;
        }, 500);
      }
    };

    window.addEventListener("wheel", handleScroll, { passive: false });
    return () => window.removeEventListener("wheel", handleScroll);
  }, []);

  const Page = pages[index];

  return (
    <div className="app-container">
      <Background 
        particleColors={['#FCFFC1', '#FFE893', '#FBB4A5', '#FB9EC6']}
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
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute w-full h-full"
          >
            <Page />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
