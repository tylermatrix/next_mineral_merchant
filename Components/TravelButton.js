import React from "react";

function TravelButton({ planetName = "planet" }) {
  const isActive = false;
  return (
    <div>
      <div className="travelButton ">
        <div className="travelButtonText">
          <div
            className={"circle" + " " + (isActive === true ? "active" : null)}
          >
            <p className="text">Visit</p>
          </div>
        </div>
        <h4 className="text">{planetName}</h4>
      </div>
    </div>
  );
}

export default TravelButton;
