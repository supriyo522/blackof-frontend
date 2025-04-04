import React from "react";
import video from "../assets/automotive.mp4";
import "./MainContainer.css"; // Import the CSS file

const MainContainer = () => {
  return (
    <div className="main-container">
      {/* Background Video */}
      <video autoPlay loop muted playsInline className="video-background">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div className="content">
        <p className="performance-text">Driven by performance</p>
        <p className="solution-text">
          <span>Soft trims and <span className="highlight">NVH solutions</span></span>
          <br />
          for seamless rides
        </p>
      </div>
    </div>
  );
};

export default MainContainer;
