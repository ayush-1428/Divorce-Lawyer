import React, { useState } from "react";
import "./project.css";
import one from "../../assets/data/one/two.png";
import two from "../../assets/data/two/two.png";
import three from "../../assets/data/three/one.png";
import four from "../../assets/data/four/one.png";

import CustomCursor from "./CustomCursor.jsx";

import { motion } from "motion/react";

const Project = () => {
  const [cursorVisible, setCursorVisible] = useState(false); // ✅ Correct position

  return (
    <motion.div className="project"
    
      initial={{
     
      scaleY: 0.9,
      scaleX: 0.9,

    }}
    animate={{

      scaleY: 1,
      scaleX: 1,
    }}

    transition={{
      duration: 0.3,
      ease: 'linear'
    }}
    
    viewport={{
      once: true,
    }}
    
    >
      {/* Custom Cursor Component */}
      <CustomCursor visible={cursorVisible} />

      <div className="project_cont">
        <br />
        <br />
        <br />

        <h1 className="project_text">Legal Services</h1>
        <br />
        <br />
        <br />
        <br />

        {/* Project Section */}
        <div className="Projects_show">
          {[
            { src: one, label: "Alimony & Maintenance" },
            { src: two, label: "Contested Divorce" },
            { src: three, label: "Child Custody & Visitation" },
            { src: four, label: "Mutual Divorce" },
          ].map((item, index) => (
            <a
              href="/services"
              key={index}
              className="projectUrlHover projectsIamge"
              onMouseEnter={() => setCursorVisible(true)}
              onMouseLeave={() => setCursorVisible(false)}
            >
              <div className="image_boxyBox">
                <img
                  src={item.src}
                  className="image_onBoxyBox"
                  alt={item.label}
                  loading="lazy"
                />
                <div className="overlayText">{item.label}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
