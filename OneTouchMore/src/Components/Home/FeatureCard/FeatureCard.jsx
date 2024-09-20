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
          Our technicians are certified and have years of experience handling
          all types of phone repairs, ensuring your device is in safe hands.
          From broken screens to internal hardware repairs, we've got you covered.
        </p>
      </div>

      <div className="feature-card turnaround">
        <img
          src="https://img.icons8.com/?size=100&id=70688&format=png&color=000000"
          alt="Quick Turnaround"
          className="feature-icon"
        />
        <h3>Quick Turnaround</h3>
        <p>
          We understand how essential your phone is to your daily life. Our team
          is committed to providing fast and efficient repairs, ensuring minimal downtime.
          Most repairs are completed within the same day, so you can get back to your routine quickly.
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
          Not sure what's wrong with your phone? We offer a free diagnostic service
          to identify the issue. Whether it's a software malfunction, battery issue,
          or damaged screen, we'll assess the problem and provide a detailed repair plan
          before any costs are incurred.
        </p>
      </div>

      <div className="feature-card">
        <img
          src="https://img.icons8.com/?size=100&id=44369&format=png&color=000000"
          alt="Affordable Pricing"
          className="feature-icon"
        />
        <h3>Affordable Pricing</h3>
        <p>
          We believe in providing top-quality repairs at affordable prices. Our transparent
          pricing model ensures no hidden costs, and we offer competitive rates to make sure
          you get the best value for your money.
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
