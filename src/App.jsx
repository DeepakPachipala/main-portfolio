import React, { Suspense, lazy } from "react";
import "./App.css";
import ErrorBoundary from "./ErrorBoundary";
import Header from "./Header";
import Loader from "./Loader";

const SplineHome = lazy(() => import("./SplineHome"));
const About = lazy(() => import("./About"));
const Experience = lazy(() => import("./Experience"));
const SliderSkills = lazy(() => import("./SliderSkills"));
const Projects = lazy(() => import("./Projects"));
const Contact = lazy(() => import("./Contact"));
const Footer = lazy(() => import("./Footer"));

const App = () => {
  return (
    <>
      <ErrorBoundary>
        <Suspense fallback={<Loader text="Loading header" />}>
          <Header />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary>
        <Suspense fallback={<Loader text="Loading home" />}>
          <SplineHome />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary>
        <Suspense fallback={<Loader text="Loading experience" />}>
          <About />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary>
        <Suspense fallback={<Loader text="Loading experience" />}>
          <Experience />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary>
        <Suspense fallback={<Loader text="Loading skills" />}>
          <SliderSkills />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary>
        <Suspense fallback={<Loader text="Loading projects" />}>
          <Projects />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary>
        <Suspense fallback={<Loader text="Loading contact" />}>
          <Contact />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary>
        <Suspense fallback={<Loader text="Loading footer" />}>
          <Footer />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default App;
