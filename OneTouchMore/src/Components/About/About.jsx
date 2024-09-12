import React from 'react';
import './About.css'; // Ensure the CSS is correctly linked
import Footer from "../Footer/Footer";

function About() {
  return (
    <div className="about-container">
      <div className="columns">
        <div className="left-column">
          <div className="header">
            <h1>Our values</h1>
            <p>What we love and stand for every day</p>
          </div>
          <div className="value-box reliability">
            <i className="icon">🌐</i>
            <h2>Reliability</h2>
            <p>We are open as a team and as a product. We don't put walls up unless it's necessary. We become better when we share information. We are open to diversity of opinion, backgrounds, and thought.</p>
          </div>
          <div className="value-box online-access">
            <i className="icon">🔗</i>
            <h2>Online Access</h2>
            <p>We play because we're a creator tool. Life is short. Let's build something meaningful. We play as a team because great teams build great things together. We keep those standards high.</p>
          </div>
        </div>
        <div className="right-column">
          <div className="value-box professional-partners">
            <i className="icon">🤝</i>
            <h2>Professional Partners</h2>
            <p>We want the best for our customers and ourselves. We coach people to their best potential. That's why an "Arcader" is both a teammate and a customer.</p>
          </div>
          <div className="value-box fast-service">
            <i className="icon">⚡</i>
            <h2>Fast Service</h2>
            <p>We act like owners. Let's empower each other. If we see something that needs change, we lead through it.</p>
          </div>
          <div className="value-box trusted">
            <i className="icon">🛡️</i>
            <h2>Trusted</h2>
            <p>We can be honest and kind. We can have high standards and be kind. We can say no and be kind. Kindness can vary across cultures, upbringings, and languages - but we try our best to be kind.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
