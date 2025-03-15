import "../styles/Exp.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Exp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const experiences = [
    {
      title: "Teacher Assistant and Tutor",
      company: "George Brown College",
      type: "Part-time",
      location: "Toronto, Ontario, Canada",
      duration: "January 2024 - Present",
      details: [
        "Accumulated over 550 hours of tutoring experience, providing one-on-one academic support to students in various subjects, including HTML, CSS, JavaScript, C#, Python, Java, C++, PHP, MySQL, Mathematics, CCNA, Data Structures, and Algorithms.",
        "Assist instructors during lab sessions by addressing student inquiries, troubleshooting technical issues, and reinforcing key concepts.",
        "Plan and conduct interactive in-class tutoring sessions to enhance student comprehension of weekly course material.",
      ],
    },
    {
        title: "Research Assistant",
        company: "George Brown College",
        type: "Contract",
        location: "Toronto, Ontario, Canada",
        duration: "March 2025 - April 2025",
        details: [
          "Assisted in the development of a research-based application using React Native and Firebase.",
          "Contributed to implementing Firebase Firestore for real-time data storage and retrieval, ensuring seamless data access for research purposes.",
          "Collaborated with the development team and faculty members to refine app functionalities.",
        ],
    },    
  ];
  

  return (
    <div className="exp-wrapper">
      <h2 className={`exp-header ${isVisible ? "fade-in" : ""}`}>Experience</h2>

      <div className="exp-container">
        {experiences.map((exp, index) => (
          <div className="exp-box row" key={index}>
            <motion.div
              className={`exp-middle col-lg-6 col-sm-12 ${
                index % 2 === 0 ? "order-lg-first" : "order-lg-last"
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="exp-text exp-content">
                <h3 className="exp-title">{exp.title}</h3>
                <h3 className="exp-company">{exp.company}</h3>
                <h4 className="exp-details">
                  {exp.type} - {exp.location}
                </h4>
                <p className="exp-duration">{exp.duration}</p>
              </div>
            </motion.div>

            <motion.div
              className={`col-lg-6 col-sm-12 ${
                index % 2 === 0 ? "order-lg-last" : "order-lg-first"
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <div
                className={`exp-text ${
                  index % 2 === 0 ? "exp-border-left" : "exp-border-right"
                }`}
              >
                <ul className="exp-details-list">
                  {exp.details.map((detail, idx) => (
                    <li key={idx}>
                      <span className="bullet">•</span> {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}