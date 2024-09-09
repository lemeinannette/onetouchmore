import React from "react";
import {
  FaShieldAlt,
  FaPlayCircle,
  FaHandsHelping,
  FaBolt,
  FaCheckCircle,
  FaTools,
} from "react-icons/fa";
import "./About.css";
import Footer from "../Footer/Footer";

const AboutUs = () => {
  return (
    <>
      <div className="about-container">
        <div className="about-card">
          <FaShieldAlt className="card-icon" />
          <div className="card-content">
            <h2>Reliability</h2>
            <p>
              We are dedicated to providing reliable services and products. Our
              commitment to openness ensures trust, and we foster collaboration
              among diverse backgrounds.
            </p>
          </div>
        </div>

        <div className="about-card">
          <FaPlayCircle className="card-icon" />
          <div className="card-content">
            <h2>Online Access</h2>
            <p>
              We ensure that our services are available online for easy access
              at any time. Enjoy fast and convenient solutions for your needs,
              all at your fingertips.
            </p>
          </div>
        </div>

        <div className="about-card">
          <FaHandsHelping className="card-icon" />
          <div className="card-content">
            <h2>Professional Partners</h2>
            <p>
              We partner with experts in various fields to ensure that we
              provide top-notch service and knowledge. This allows us to help
              our customers grow professionally and personally.
            </p>
          </div>
        </div>

        <div className="about-card">
          <FaBolt className="card-icon" />
          <div className="card-content">
            <h2>Fast Service</h2>
            <p>
              Time is important. We strive to deliver our services quickly and
              efficiently, ensuring that you get what you need in the shortest
              time possible.
            </p>
          </div>
        </div>

        <div className="about-card">
          <FaCheckCircle className="card-icon" />
          <div className="card-content">
            <h2>Trusted</h2>
            <p>
              Our customers trust us for our honesty and integrity. We ensure
              that every interaction is grounded in respect and kindness.
            </p>
          </div>
        </div>

        <div className="about-card">
          <FaTools className="card-icon" />
          <div className="card-content">
            <h2>Phone Repair Training</h2>
            <p>
              We also provide hands-on training for individuals looking to
              become experts in phone repairs. Learn from professionals and gain
              skills that are in high demand.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
