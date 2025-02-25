import React from "react";
import Orb from "../components/Orb"; // Import Orb component
import "../styles/Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <Orb 
      hoverIntensity={0.1}
      rotateOnHover={true}
      hue={0}
      forceHoverState={false}
      /> 
      <p className="name">Aum Zaveri</p>
    </div>
  );
}
