// AccessoryCard.js
import React from "react";
import { FaShoppingCart, FaWhatsapp } from "react-icons/fa";

const AccessoryCard = ({ item, handleAddToCart, handleBuyNow }) => (
  <div className="accessory-card">
    <img src={item.image} alt={item.name} className="accessory-image" />
    <div className="accessory-details">
      <p className="accessory-name">{item.name}</p>
      <p className="accessory-price">{item.price}</p>
      <div className="accessory-buttons">
        <button
          onClick={() => handleAddToCart(item)}
          className="add-to-cart-button"
        >
          <FaShoppingCart /> Add to Cart
        </button>
        <button onClick={() => handleBuyNow(item)} className="buy-now-button">
          <FaWhatsapp /> Buy Now
        </button>
      </div>
    </div>
  </div>
);

export default AccessoryCard;
