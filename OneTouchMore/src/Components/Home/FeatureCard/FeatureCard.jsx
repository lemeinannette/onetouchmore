import React from "react";
import "./FeatureCard.css";

const FeatureCard = () => {
  return (
    <div className="feature-cards-container">
      {/* Existing Feature Cards */}
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

      <div className="feature-card">
        <img
          src="https://img.icons8.com/?size=100&id=86106&format=png&color=000000"
          alt="Genuine Parts"
          className="feature-icon"
        />
        <h3>Genuine Parts</h3>
        <p>
          We only use high-quality, genuine parts for all repairs, ensuring the longevity
          and performance of your device. Our trusted suppliers provide components that
          meet the original manufacturer specifications.
        </p>
      </div>

      <div className="feature-card">
        <img
          src="https://img.icons8.com/?size=100&id=3KqnS78ZB6Ew&format=png&color=000000"
          alt="Warranty Coverage"
          className="feature-icon"
        />
        <h3>Warranty Coverage</h3>
        <p>
          All our repairs come with a warranty, so you can have peace of mind knowing that
          if any issues arise post-repair, we'll take care of it. Our warranty covers both
          parts and labor.
        </p>
      </div>

      <div className="feature-card">
        <img
          src="https://img.icons8.com/?size=100&id=X32RlNSNpHfO&format=png&color=000000"
          alt="Data Privacy"
          className="feature-icon"
        />
        <h3>Data Privacy & Security</h3>
        <p>
          We understand the importance of your personal data. Our team follows strict protocols
          to ensure that your data is secure during any repair process, with complete discretion
          and care.
        </p>
      </div>

      {/* New Feature Cards */}
      <div className="feature-card">
        <img
          src="https://img.icons8.com/?size=100&id=XSeZcF2xlF7i&format=png&color=000000" 
          alt="Extended Support Hours"
          className="feature-icon"
        />
        <h3>Extended Support Hours</h3>
        <p>
          We offer flexible support hours, including evenings and weekends, to accommodate
          your busy schedule. Whether you need assistance after work or on weekends, our team
          is here to help.
        </p>
      </div>

      <div className="feature-card">
        <img
          src="https://img.icons8.com/?size=100&id=4LHSoXUtoHAn&format=png&color=000000" 
          alt="Pickup & Delivery"
          className="feature-icon"
        />
        <h3>Pickup & Delivery</h3>
        <p>
          Can't visit us in person? No problem! We offer convenient pickup and delivery
          services for your device repairs. Simply schedule a pickup, and we'll handle the rest.
        </p>
      </div>

      <div className="feature-card">
        <img
          src="https://img.icons8.com/?size=100&id=13579&format=png&color=000000"
          alt="Eco-Friendly Repairs"
          className="feature-icon"
        />
        <h3>Eco-Friendly Repairs</h3>
        <p>
          We're committed to environmental sustainability. Our repair processes minimize
          waste and use eco-friendly materials wherever possible, ensuring that your device
          repairs are both effective and environmentally responsible.
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
