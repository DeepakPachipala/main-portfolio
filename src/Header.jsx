import React, { useEffect, useState } from "react";
import { FaDownload, FaBars, FaTimes } from "react-icons/fa";
import "./Header.css";

const sections = ["home","about", "experience", "skills", "projects", "contact", "resume"];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false); // ← mobile menu toggle

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (current && current !== activeSection) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <a href="#home">
        <img src="/assets/logo.svg" alt="Portfolio Logo" className="logo" />
      </a>

      {/* Hamburger Menu Icon */}
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <nav>
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="#about" className={activeSection === "about" ? "active" : ""} onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#experience" className={activeSection === "experience" ? "active" : ""} onClick={() => setMenuOpen(false)}>Experience</a>
          <a href="#skills" className={activeSection === "skills" ? "active" : ""} onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#projects" className={activeSection === "projects" ? "active" : ""} onClick={() => setMenuOpen(false)}>Projects</a>
          
          <div className="tooltip-wrapper">
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              <img src="/assets/contact.png" alt="contact" />
            </a>
            <span className="tooltip-text">Contact</span>
          </div>

          <div className="tooltip-wrapper">
            <a href="/resume.pdf" download onClick={() => setMenuOpen(false)}>
              <img src="/assets/resume.png" alt="resume" />
            </a>
            <span className="tooltip-text">Resume <FaDownload /></span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
  