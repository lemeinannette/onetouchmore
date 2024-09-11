import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css"; // Import the CSS file

const NavBar = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleBookRepairClick = () => {
    navigate("/book-repair"); // Navigate to the /book-repair route
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src="/path/to/your/logo.png" alt="Logo" className="logo" />
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact-us">Contact Us</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          <Link to="/find-repair">Accessory Hunt</Link>
        </li>
      </ul>
      <div className="button-container">
        <button className="book-repair-button" onClick={handleBookRepairClick}>
          Book Repair
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
