import React from "react";
import "./LandingShell.css";

function LandingShell() {
  return (
    <div className="LandingShell">
      <div className="localBox">
        <p className="largeText">Shop Local</p>
        <button className="largeButton" onClick={() => console.log("Hello!")}>
          Explore local options
        </button>
      </div>
    </div>
  );
}

export default LandingShell;
