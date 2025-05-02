import React, { useState,useEffect, useRef } from "react";
import { projectsData } from "./Data.js";
import { SiGithub } from "react-icons/si";
import { SiVercel } from "react-icons/si";
import "./Projects.css";

const Projects = () => {
  const [activeSection, setActiveSection] = useState(3);

  const [inView, setInView] = useState(false);
    const headingRef = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setInView(true); // When the element is in view, add the animation
          } else {
            setInView(false); // Optionally, reset when it goes out of view
          }
        },
        { threshold: 0.3 } // Adjust this threshold as needed
      );
  
      if (headingRef.current) {
        observer.observe(headingRef.current); // Observe the section title
      }
  
      return () => {
        if (headingRef.current) {
          observer.unobserve(headingRef.current);
        }
      };
    }, []);

  const handleButtonClick = (section) => {
    setActiveSection(section);
  };

  // Handle hover events to play/pause videos
  const videoRefs = useRef([]);

  const handleMouseEnter = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      video.classList.remove("paused");
      video.play();
    }
  };

  const handleMouseLeave = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      video.classList.add("paused");
      video.pause();
      // videoRefs.current[index].currentTime = 0; // Reset to the beginning
    }
  };

  const handleVideoReset = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      video.currentTime = 0;
    }
  };

  return (
    <>
    <h2
        id="projects"
        ref={headingRef}
        className={`section-title ${inView ? "animate" : ""}`}
      >
        Projects
      </h2>
    <div className="projects">
      <div className="buttons">
        <button
          className={activeSection === 1 ? "active" : ""}
          onClick={() => handleButtonClick(1)}
        >
          UI
        </button>
        <button
          className={activeSection === 2 ? "active" : ""}
          onClick={() => handleButtonClick(2)}
        >
          SPA's
        </button>
        <button
          className={activeSection === 3 ? "active" : ""}
          onClick={() => handleButtonClick(3)}
        >
          ReactJs
        </button>
        <button
          className={activeSection === 4 ? "active" : ""}
          onClick={() => handleButtonClick(4)}
        >
          3D
        </button>
        {/* <button
          className={activeSection === 5 ? "active" : ""}
          onClick={() => handleButtonClick(5)}
        >
          Mern
        </button>
        <button
          className={activeSection === 6 ? "active" : ""}
          onClick={() => handleButtonClick(6)}
        >
          Pern
        </button> */}
      </div>
      <div className="content">
        {projectsData[activeSection] && (
          <div className="cards">
            {projectsData[activeSection].map((project, index) => (
              <div key={index} className="card">
                <div
                  className="video-wrapper"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                  onClick={() => handleVideoReset(index)}
                >
                  {index === 0 && <div className="hover-emoji">👀</div>}
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    poster={project.thumbnail}
                    src={project.video}
                    type="video/mp4"
                    muted
                    preload="auto"
                    className="project-video"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="git-web-links">
                  <a
                    href={project.gitlink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="git-link"
                  >
                    <SiGithub />
                  </a>
                  <a
                    href={project.weblink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="web-link"
                  >
                    <SiVercel />
                  </a>
                </div>
                <h3>{project.title}</h3>
                <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                  <img src={project.image} alt={project.title} />
                  <p>{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default Projects;
