// src/Components/Sidebar/Sidebar.js
import React from "react";
import {
  FaTachometerAlt,
  FaUsers,
  FaChartBar,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa"; // Import icons
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="admin-sidebar">
      <div className="sidebar-header">
        <h2>Admin Panel</h2>
      </div>
      <ul className="sidebar-menu">
        <li className="sidebar-item">
          <a href="/dashboard" className="sidebar-link">
            <FaTachometerAlt className="sidebar-icon" />
            Dashboard
          </a>
        </li>
        <li className="sidebar-item">
          <a href="/users" className="sidebar-link">
            <FaUsers className="sidebar-icon" />
            Users
          </a>
        </li>
        <li className="sidebar-item">
          <a href="/reports" className="sidebar-link">
            <FaChartBar className="sidebar-icon" />
            Reports
          </a>
        </li>
        <li className="sidebar-item">
          <a href="/settings" className="sidebar-link">
            <FaCog className="sidebar-icon" />
            Settings
          </a>
        </li>
        <li className="sidebar-item">
          <a href="/logout" className="sidebar-link">
            <FaSignOutAlt className="sidebar-icon" />
            Logout
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
