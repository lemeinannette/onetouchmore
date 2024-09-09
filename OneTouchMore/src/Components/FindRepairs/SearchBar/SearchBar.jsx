import React from "react";
import { FaSearch } from "react-icons/fa";


const SearchBar = ({ searchTerm, setSearchTerm }) => (
  <div style={{ position: "relative" }}>
    <input
      type="text"
      placeholder="Search..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
    <FaSearch
      style={{
        position: "absolute",
        right: "10px",
        top: "50%",
        transform: "translateY(-50%)",
        color: "#3cd8c9",
        pointerEvents: "none",
      }}
    />
  </div>
);

export default SearchBar;
