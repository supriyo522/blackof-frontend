import React from "react";
import './Button.css'; // Importing the external CSS file

const Button = ({ text, className, onClick }) => {
  return (
    <div
      className={`button-container ${className ? className : ""}`} 
      onClick={onClick}
    >
      <span className="button-text">{text}</span> {/*text as children*/}
    </div>
  );
};

export default Button;
