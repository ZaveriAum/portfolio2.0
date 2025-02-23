import React, { useState, useEffect } from "react";
import "../styles/components/WorkCarousel.css";
import SportThumb from '../assets/projects-thumbnail/sporttrackr.png';
import FlashifyThumb from '../assets/projects-thumbnail/flashify.png';
import FileManager from '../assets/projects-thumbnail/filemanager.png';
import TicTacToe from '../assets/projects-thumbnail/tic-tac-toe.png';

const projects = [
    { id: 1, image: SportThumb, alt: "Sport Trackr" },
    { id: 2, image: FlashifyThumb, alt: "Flashify" },
    { id: 3, image: FileManager, alt: "File Manager" },
    { id: 4, image: TicTacToe, alt: "Tic Tac Toe" }
];

const Carousel = () => {
    const [index, setIndex] = useState(0);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setIndex((prevIndex) => (prevIndex + 1) % projects.length);
    //     }, 3000);
    //     return () => clearInterval(interval);
    // }, []);

    return (
        <div className="carousel-container">
            <div className="carousel" style={{ transform: `translateX(-${index * 100}%)` }}>
                {projects.map((project) => (
                    <div key={project.id} className="carousel-item">
                        <img src={project.image} alt={project.alt} className="carousel-image" />
                    </div>
                ))}
            </div>
            <div className="dots-container">
                {projects.map((_, i) => (
                    <span
                        key={i}
                        className={`dot ${i === index ? "active" : ""}`}
                        onClick={() => setIndex(i)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
