// IntroSection.js
import React from "react";
import "../Styles/IntroSection.css";

const IntroSection = () => {
  return (
    <div className="intro-section">
      <div className="overlay"></div>
      <div className="context">
        <h1 className="cxt">This is your school.</h1>
        <p>
          This is your journey. This is the extraordinary opportunity your story
          deserves.
        </p>
      </div>
    </div>
  );
};

export default IntroSection;
