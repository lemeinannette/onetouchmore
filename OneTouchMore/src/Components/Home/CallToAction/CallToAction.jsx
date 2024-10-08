import React from "react";
import { Link } from 'react-router-dom';
import "./CallToAction.css";

const CallToAction = () => {
  return (
    <div className="cta-container">
      <div className="cta-content">
        <h2>Get Your Device Fixed Today!</h2>
        <p>
          Don’t let a broken device slow you down. Our experts are here to
          provide fast, reliable, and affordable repair services.
        </p>
        <Link to="/book-repair" className="cta-schedule-btn">Schedule a Repair</Link>
      </div>
    </div>
  );
};

export default CallToAction;
