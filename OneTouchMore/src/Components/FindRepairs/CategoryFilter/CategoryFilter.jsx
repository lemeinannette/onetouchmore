// CategoryFilter.js
import React from "react";

const CategoryFilter = ({ category, setCategory }) => (
  <div className="category-filter">
    <label htmlFor="category">Category:</label>
    <select
      id="category"
      value={category}
      onChange={(e) => setCategory(e.target.value)}
    >
      <option value="All">All</option>
      <option value="back-covers">Back Covers</option>
      <option value="battery">Battery</option>
      <option value="battery-connectors">Battery Connectors</option>
      <option value="camera-glass">Camera Glass</option>
      <option value="cameras">Cameras</option>
      <option value="charging-plate">Charging Plate</option>
      <option value="earpiece">Earpiece</option>
      <option value="finger-sensor">Finger Sensor</option>
      <option value="flex-cable">Flex Cable</option>
      <option value="frame-glass">Frame Glass</option>
      <option value="homekey-button">Homekey Button</option>
      <option value="housing-chasis">Housing/Chasis</option>
      <option value="lcd">LCD</option>
      <option value="mic-plate">Mic Plate</option>
      <option value="others">Others</option>
      <option value="phone-ringers">Phone Ringers</option>
      <option value="power-switch">Power Switch</option>
      <option value="scroller">Scroller</option>
      <option value="sim-trays">Sim Trays</option>
      <option value="tools">Tools</option>
      <option value="touch-screen">Touch Screen</option>
    </select>
  </div>
);

export default CategoryFilter;
