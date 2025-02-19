import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";

const pages = [Home, About, Work];

export default function Carousel() {
  const [index, setIndex] = useState(0);
  let scrollCount = 0;
  const scrollThreshold = 3;

  useEffect(() => {
    const handleScroll = (event) => {
      scrollCount += Math.sign(event.deltaY);
      
      if (Math.abs(scrollCount) >= scrollThreshold) {
        if (scrollCount > 0) {
          setIndex((prev) => (prev + 1) % pages.length);
        } else {
          setIndex((prev) => (prev - 1 + pages.length) % pages.length);
        }
        scrollCount = 0;
      }
    };

    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, []);

  const Page = pages[index];

  return (
    <div className="relative w-screen h-screen overflow-hidden">
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
  );
}