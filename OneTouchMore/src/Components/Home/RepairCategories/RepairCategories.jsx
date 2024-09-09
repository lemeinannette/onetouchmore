import React, { useState, useEffect } from "react";
import "./RepairCategories.css";

const repairItems = [
  {
    title: "Button Repair",
    description:
      "Fix unresponsive buttons, stuck keys, and other button-related issues on your devices.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWYqkcGWCcRr1ffVI_WlhHVKyYnM3lvXiBAg&s", // Image for button repair
  },
  {
    title: "Screen Repair",
    description:
      "Replace cracked or damaged screens, including touch sensitivity issues and display problems.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXWuduMDPIdnnr1J3mv4I1zMxG55PjWdL8EA&s", // Image for screen repair
  },
  {
    title: "iPhone",
    description: "Cracked screens, water damage, battery problems, and more.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_UemycsjleK_60Y18TYD6jaLGdHMywBVRlw&s",
  },
  {
    title: "iPad",
    description: "Cracked screens, battery problems, and software issues.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXnpa81Bb1G2Lfg42mXc1YiLyCIRhbhONPPQ&s",
  },
  {
    title: "Android",
    description: "Complex repairs like motherboard replacements.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBHDSJJlAtuGAAhQ-xpDUj6YptAGKS_4UA4Q&s",
  },
  {
    title: "Tablet",
    description: "Fast and cost-effective solutions for all kinds of tablets.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEBzYbZEtWx9JWnUVjnDgxz5lqpii5QhjZoQ&s",
  },
  // Add more items as needed
];

const RepairCategories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + 3 >= repairItems.length ? 0 : prevIndex + 3
      );
    }, 8000); // Change every 8 seconds

    return () => clearInterval(interval);
  }, []);

  const visibleItems = repairItems.slice(currentIndex, currentIndex + 3);

  return (
    <div className="repair-categories-container">
      {visibleItems.map((item, index) => (
        <div className="repair-category" key={index}>
          <img
            src={item.image}
            alt={`${item.title} Repair`}
            className="category-image"
          />
          <div className="category-content">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RepairCategories;
