import React from "react";
import "./Footer.css"; // Import CSS for styling

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-links">
          <a href="about">About Us</a>
          <a href="services">Services</a>
          <a href="contact">Contact</a>
          <a href="privacy-policy">Privacy Policy</a>
        </div>

        <div className="footer-info">
          <p>1234 Your Address, City, Country</p>
          <p>Email: contact@yourcompany.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
