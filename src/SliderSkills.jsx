import React, { useEffect, useState, useRef } from "react";
import "./SliderSkills.css";

const SliderSkills = () => {
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
        id="skills"
        ref={headingRef}
        className={`section-title ${inView ? "animate" : ""}`}
      >
        Skills
      </h2>

      <div
        className="slider"
        style={{ "--width": "100px", "--height": "100px", "--quantity": 10 }}
      >
        <div className="list">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="item" style={{ "--position": i + 1 }}>
              <img src={`/assets/${i + 1}.png`} alt={`slider-${i + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SliderSkills;
