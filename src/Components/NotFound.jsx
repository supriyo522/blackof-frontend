import React from "react";
import Button from "./Button";
const NotFound = () => {
  return (
    <div className="w-full h-screen overflow-hidden flex justify-center items-center font-primary">
      <div className="flex flex-col justify-center items-center space-y-4">
        <h2 className="text-secondary text-9xl">404</h2>
        <p className="text-base">The page you have requested doesn't exist.</p>
        <Button text="Go to Homepage" className="bg-primary border-secondary font-semibold"/>
      </div>
    </div>
  );
};

export default NotFound;
