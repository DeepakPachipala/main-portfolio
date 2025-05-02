import React, { useEffect, useState, useRef } from "react";
import "./About.css";

const About = () => {
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
  return (
    <>
      <h2
        id="about"
        ref={headingRef}
        className={`section-title ${inView ? "animate" : ""}`}
      >
        About & Services
      </h2>
      <div className="about-container">
        <div className="about-wrapper">
          {/* Left Card - About Me */}
          <div className="about-card">
            <div className="about-image">
              <img src="/assets/profile.jpg" alt="My Profile" />
            </div>
            <div className="about-info">
              <h1>About Me</h1>
              <p>
                I'm a Full Stack Developer passionate about building scalable,
                user-friendly web apps. I work across the stack—from crafting
                responsive UIs to developing robust backend systems—using tools
                like <strong>React</strong>, <strong>Node.js</strong>,{" "}
                <strong>MongoDB</strong>, <strong>Express.js</strong>,{" "}
                <strong>PostgreSQL</strong>, <strong>Next.js</strong> and more.
                I thrive on solving problems, writing clean code, and
                collaborating to turn ideas into real, impactful products.
              </p>
            </div>
          </div>

          {/* Right Card - Services */}
          <div className="services-card">
            <h2 className="services-heading">Services I Provide</h2>
            <div className="services-list">
              <div className="service-item">
                <h3>Frontend Development</h3>
                <p>
                  Crafting responsive and interactive UIs using React, Tailwind,
                  and Framer Motion. Implementing state management with tools
                  like Redux, Context API, etc.
                </p>
              </div>
              <div className="service-item">
                <h3>E-commerce Development</h3>
                <p>
                  Developing fully functional e-commerce platforms with features
                  like product catalogs, cart systems, and secure checkout
                  processes.
                </p>
              </div>
              <div className="service-item">
                <h3>API Development and Integration</h3>
                <p>
                  Building RESTful APIs for web applications and scalable APIs
                  with Node.js, Express, and MongoDB.
                </p>
              </div>
              <div className="service-item">
                <h3>Custom Web Application Development</h3>
                <p>
                  Creating both frontend and backend solutions to build fully
                  functional, user-friendly applications.
                </p>
              </div>
              <div className="service-item">
                <h3>Database Design and Management</h3>
                <p>
                  Designing and optimizing RDBMS and DBMS. Data modeling,
                  database management, and query optimization.
                </p>
              </div>
              <div className="service-item">
                <h3>Backend Development</h3>
                <p>
                Building and maintaining scalable backend architectures using languages like Node.js
                Creating robust server-side applications using frameworks like Express.js
                Integration with cloud services and databases for storage and retrieval.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
