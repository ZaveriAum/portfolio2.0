import React from "react";
import WorkCarousel from "../components/WorkCarousel";
import '../styles/Work.css';
import { motion } from "framer-motion";

function Work() {
  return (
    <motion.div 
      className="work-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="work-title">My Projects</h1>
      <WorkCarousel />
    </motion.div>
  );
}

export default Work;