import React from "react";
import "./HeroSection.css"; // Import CSS file for styling
import Img from "../../../assets/hero.png";

const HeroSection = () => {
  return (
    <div className="hero-card">
      <div className="hero-description">
        <h1>Expert Phone Repair</h1>
        <p>
          Broken screen? Battery issues? We’ve got you covered! Our expert
          technicians are dedicated to bringing your phone back to life with the
          highest quality parts and precision repairs.
        </p>
        <button className="cta-button">Book a Repair</button>
      </div>
      <div className="hero-image">
        <img src={Img} alt="Phone Repair" />
      </div>
    </div>
  );
};

export default HeroSection;
