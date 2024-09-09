import React from "react";
import "./FeatureCard.css";

const FeatureCard = () => {
  return (
    <div className="feature-cards-container">
      <div className="feature-card">
        <img
          src="https://img.icons8.com/?size=100&id=20544&format=png&color=000000"
          alt="Trusted Professional"
          className="feature-icon"
        />
        <h3>Trusted Professional</h3>
        <p>
          Expert phone repair services with a focus on quality and reliability.
        </p>
      </div>
      <div className="feature-card turnaround">
        <img
          src="https://img.icons8.com/?size=100&id=70688&format=png&color=000000"
          alt="Turnaround"
          className="feature-icon"
        />
        <h3>Turnaround</h3>
        <p>
          Quick turnaround time to get your phone repaired and back to you in no
          time.
        </p>
      </div>
      <div className="feature-card">
        <img
          src="https://img.icons8.com/?size=100&id=caP9z5QawLJf&format=png&color=000000"
          alt="Free Diagnosis"
          className="feature-icon"
        />
        <h3>Free Diagnosis</h3>
        <p>
          Get a free diagnosis of your phone’s issues before proceeding with
          repairs.
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
