import React, { useEffect } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import "@google/model-viewer";
import "./SplineHome.css";
import AOS from "aos";
import "aos/dist/aos.css";

const SplineHome = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src =
  //     "https://unpkg.com/@splinetool/viewer@1.9.82/build/spline-viewer.js";
  //   script.type = "module";
  //   script.async = true;
  //   document.head.appendChild(script);

  //   return () => {
  //     document.head.removeChild(script);
  //   };
  // }, []);

  const [text] = useTypewriter({
    words: [
      "React.js Developer",
      "Full Stack Developer",
      "UI/UX Designer",
      "Creative Coder",
    ],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });

  return (
    <div id="home" className="splineviewer-container">
      <div>
        {" "}
        <model-viewer
          src="/assets/laptop.glb"
          camera-orbit="90deg 90deg"
          autoplay
          data-aos="fade-zoom-out"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0"
          data-aos-duration="5000"
          className="laptop3d"
        ></model-viewer>
      </div>
      <div className="overlay-gradient"></div>
      {/* <div className="splineviewer-background ">
        <spline-viewer style={{right:"-200px"}}
         data-aos="fade-zoom-in"
         data-aos-easing="ease-in-back"
         data-aos-delay="300"
         data-aos-offset="0"
         data-aos-duration="3000"
          url="https://prod.spline.design/AfixCYSq8c2zQAiD/scene.splinecode"
          className="splineviewer"
        ></spline-viewer>
      </div> */}

      <div
        className="devdetails"
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0"
        data-aos-duration="3000"
      >
        <h1>
          Hi, I'm <span className="highlighted-name">Deepak</span>
        </h1>
        <h2>
          a <span className="typing-text">{text}</span>
          <Cursor cursorStyle="|" cursorColor="#ff014f" />
        </h2>
        <p>
          “Turning pixels into stories with code, creativity, and a love for
          immersive web experiences.”
        </p>

        <div className="socials-container">
          <div>
            <h3>Connect with me</h3>
            <div className="social-icons">
              <a
                href="mailto:deepakpachipala@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/assets/email.png" alt="email" />
              </a>
              <a
                href="https://www.linkedin.com/in/deepak-reddy-pachipala-051485232/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/assets/lnBannerIcon.png" alt="linkedIn" />
              </a>
            </div>
          </div>

          <div>
            <h3>Tech Stack</h3>
            <div className="social-icons">
              <a
                href="https://react.dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/assets/react.png" alt="reactjs" />
              </a>
              <a
                href="https://nodejs.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/assets/nodejs.png" alt="nodejs" />
              </a>
              <a
                href="https://www.postgresql.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/assets/postgresql.png" alt="postgresql" />
              </a>
              <a
                href="https://tailwindcss.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/assets/tailwind.png" alt="tailwind" />
              </a>
              <a
                href="https://github.com/deepakpachipala"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/assets/github.png" alt="github" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* <h2 className="made-with-react">Made with React 💙</h2> */}
    </div>
  );
};

export default SplineHome;
