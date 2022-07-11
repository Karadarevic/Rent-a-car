import React from "react";
import "./App.css";
import sedans from "./images/icon-sedans.svg";
import suvs from "./images/icon-suvs.svg";
import luxury from "./images/icon-luxury.svg";

export default () => {
  return (
    <div className="fullbox">
      <div className="card">
        <div className="division">
          <img src={sedans} alt="sedan-icon" />
          <h1> SEDANS </h1>
          <p>
            Choose a sedan for its affordability and excellent fuel economy.
            Ideal for cruising in the city or on your next road trip
          </p>
          <a>Learn More</a>
        </div>
        <div className="division">
          <img src={suvs} alt="suv-icon" />
          <h1> SUVS </h1>
          <p>
            Take an SUV for its spacious interior, power, and versatility.
            Perfect for your next family vacation and off-road adventures
          </p>
          <a>Learn More</a>
        </div>
        <div className="division">
          <img src={luxury} alt="luxury-icon" />
          <h1> LUXURY </h1>
          <p>
            Cruise in the best car brands without the bloated prices. Enjoy the
            enhanced comfort of a luxury rental and arrive in style
          </p>
          <a>Learn More</a>
        </div>
      </div>
    </div>
  );
};
