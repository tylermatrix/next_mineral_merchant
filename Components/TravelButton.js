import React from "react";

function TravelButton({ planetName = "planet" }) {
  return (
    <div>
      <div className="travelButton ">
        <div className="travelButtonText">
          <div className="circle">
            <p className="text">Visit</p>
          </div>
        </div>
        <h4 className="text">{planetName}</h4>
      </div>
    </div>
  );
}

export default TravelButton;
