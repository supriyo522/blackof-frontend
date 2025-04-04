import React from "react";
import Button from "./Button";  // Importing the Button component
import './NotFound.css'; // Importing the external CSS file

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h2 className="not-found-title">404</h2>
        <p className="not-found-message">The page you have requested doesn't exist.</p>
        <Button text="Go to Homepage" className="not-found-button"/>
      </div>
    </div>
  );
};

export default NotFound;
