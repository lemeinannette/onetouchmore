// src/Components/Login/Login.js
import React, { useState } from "react";
import axios from "axios"; // Import axios for making HTTP requests
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Make an API call to the login route on your Express server
      const response = await axios.post("http://localhost:5000/login", {
        username,
        password,
      });

      // Navigate to the dashboard or another page on success
      window.location.href = "/dashboard"; // Adjust the path based on your routing setup
    } catch (error) {
      console.error("Login failed:", error.response.data);
      alert("Invalid username or password");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-image">
          {/* Optional: add any overlay or text on the image */}
        </div>
        <div className="login-content">
          <h2 className="login-title">Login</h2>
          <form onSubmit={handleLogin} className="form">
            <div className="input-group">
              <label htmlFor="username" className="input-label">
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="input-field"
                placeholder="Enter your username"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="password" className="input-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-field"
                placeholder="Enter your password"
                required
              />
            </div>
            <button type="submit" className="login-button">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
