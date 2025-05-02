// Loader.js
import React from "react";
import "./Loader.css";

const Loader = ({ text = "Loading..." }) => {
  return (
    <div className="loading-spinner">
      <div className="spinner"></div>
      <div>{text}</div>
    </div>
  );
};

export default Loader;
