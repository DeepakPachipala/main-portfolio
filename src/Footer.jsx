import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section about">
            <h3>About Us</h3>
            <p>
              Passionate Full Stack Developer with 2 years of experience
              building scalable web applications, specializing in React.js,
              Node.js, and delivering seamless user experiences.
            </p>
          </div>

          <div className="footer-section links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#about">Services</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className="footer-section footercontact">
            <h3>Contact Info</h3>
            <ul>
              {/* <li>India </li> */}
              <li>
                Email:{" "}
                <a href="mailto:deepakpachipala@gmail.com">
                  deepakpachipala@gmail.com
                </a>
              </li>
              <li>Phone: +91 9491476754</li>
            </ul>
          </div>

          <div className="footer-section social">
            <h3>Follow Us</h3>
            <div className="social-links">
              {/* <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a> */}
              {/* <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a> */}
              <a
                href="https://github.com/DeepakPachipala?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/deepak-reddy-pachipala-051485232/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Your Company. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
