import React from "react";
import "./App.css";
import sedans from "./images/icon-sedans.svg";
import suvs from "./images/icon-suvs.svg";
import luxury from "./images/icon-luxury.svg";

export default () => {
  return (
    <div className="fullbox">
      <div className="card">
        <div className="sedans">
          <img src={sedans} alt="sedan-icon" />
          <h1 className="title"> SEDANS </h1>
          <p className="discription">
            Choose a sedan for its affordability and excellent fuel economy.
            Ideal for cruising in the city or on your next road trip
          </p>
          <a>Learn More</a>
        </div>
        <div className="suvs">
          <img src={suvs} alt="suv-icon" />
          <h1 className="title"> SUVS </h1>
          <p className="discription">
            Take an SUV for its spacious interior, power, and versatility.
            Perfect for your next family vacation and off-road adventures
          </p>
          <a>Learn More</a>
        </div>
        <div className="luxury">
          <img src={luxury} alt="luxury-icon" />
          <h1 className="title"> LUXURY </h1>
          <p className="discription">
            Cruise in the best car brands without the bloated prices. Enjoy the
            enhanced comfort of a luxury rental and arrive in style
          </p>
          <a>Learn More</a>
        </div>
      </div>
    </div>
  );
};
