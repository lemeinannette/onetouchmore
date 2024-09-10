// src/Components/Dashboard/Dashboard.js
import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './Dashboard.css'; // Optional: Add CSS for layout

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-content">
        {/* Add your dashboard content here */}
        <h1>Welcome to the Admin Dashboard</h1>
        <p>Here you can manage your application settings, view reports, manage users, and more.</p>
      </div>
    </div>
  );
};

export default Dashboard;
