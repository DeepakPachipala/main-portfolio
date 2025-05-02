import React, { useState, useEffect, useRef } from 'react';
import { experienceData, educationData } from './Data';
import './Experience.css';

const ExperienceAndEducation = () => {
  const [activeTab, setActiveTab] = useState('experience');
  const [activeId, setActiveId] = useState(null);
  const [transitionKey, setTransitionKey] = useState(0);

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

  const data = activeTab === 'experience' ? experienceData : educationData;

  const handleTabChange = (tab) => {
    if (tab !== activeTab) {
      setActiveTab(tab);
      setTransitionKey(prev => prev + 1);
      setActiveId(null);
    }
  };

  return (
    <>
    <h2
        id="experience"
        ref={headingRef}
        className={`section-title ${inView ? "animate" : ""}`}
      >
        Experience & Education
      </h2>
    <div id='experience' className="timeline-wrapper">
      <div className="tab-buttons">
        <button
          className={activeTab === 'experience' ? 'active' : ''}
          onClick={() => handleTabChange('experience')}
        >
          Experience
        </button>
        <button
          className={activeTab === 'education' ? 'active' : ''}
          onClick={() => handleTabChange('education')}
        >
          Education
        </button>
        <div className={`tab-indicator ${activeTab}`} />
      </div>

      <div key={transitionKey} className="vertical-timeline fade-slide">
        {data.map((item, index) => (
          <div
            key={item.id}
            className={`timeline-item ${activeId === item.id ? 'active' : ''} ${index % 2 === 0 ? 'left' : 'right'}`}
            onMouseEnter={() => setActiveId(item.id)}
            onMouseLeave={() => setActiveId(null)}
          >
            <div className="timeline-dot" />
            <div className="timeline-content card-animate">
              <h3>{item.title}</h3>
              <p>{activeTab === 'experience' ? item.company : item.institution}</p>
              <span className="year">{item.year}</span>
              <p>{activeTab === 'experience' ? item.description : item.course}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default ExperienceAndEducation;
