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
      {/* About Section */}
      <div className="about-section">
      <h2>About Us</h2>
        <div className="about-content">
         
          <div className="about-image">
          <img src="https://img.freepik.com/free-vector/professional-mechanic-isometric-concept-with-equipment-call-symbols_1284-26981.jpg?t=st=1726064120~exp=1726067720~hmac=4210099abed43829960e3d0541e07804612cd1a31cc98014bf1d5723749dc6c9&w=900" alt="About Us" /> {/* Path to your about us image */}
        </div>
        <p>
            Welcome to ONETOUCHMORE your one-stop shop for all things
            mobile! We are a team of passionate phone enthusiasts dedicated to
            providing exceptional service and high-quality products to our
            valued customers. Whether you're looking for the latest smartphone,
            accessories, or expert repairs, we've got you covered.
          </p>
         
        </div>
        </div>

      {/* CEO Section */}
      <div className="ceo-section">
        <div className="ceo-image">
          <img src="https://img.freepik.com/premium-photo/web-developer-game-software-design_1297153-30094.jpg?w=826" alt="CEO" /> 
        </div>
        <div className="ceo-content">
          <h2>Message from the CEO</h2>
          <p>
            As the founder of ONETOUCHMORE, I am incredibly proud of the
            team we've assembled and the impact we've made in the community. We
            are driven by a passion for technology and a desire to make a
            positive difference in people's lives. Our goal is to provide our
            customers with the best possible mobile experience, whether it's
            finding their dream phone, getting their device fixed quickly, or
            simply receiving excellent customer service. I believe in the power
            of technology to connect us and enhance our lives, and I'm
            excited to see what the future holds for ONETOUCHMORE and our
            valued customers.
          </p>
        </div>
      </div>

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