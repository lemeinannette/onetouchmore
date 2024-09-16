import React, { useState } from "react";
import './Checkout.css'; 

const Checkout = ({ cartItems, totalPrice }) => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    paymentMethod: 'credit-card',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
    phoneNumber: '',
  });
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate payment processing or order submission
    console.log('Checkout Details:', formData);
    console.log('Cart Items:', cartItems);

    // Display success message and clear form
    setSuccessMessage("Order placed successfully!");
    setFormData({
      name: '',
      address: '',
      paymentMethod: 'credit-card',
      cardNumber: '',
      expirationDate: '',
      cvv: '',
      phoneNumber: '', // Reset phone number
    });
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      {successMessage && <p className="success-message">{successMessage}</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Shipping Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Payment Method:</label>
          <select
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
          >
            <option value="credit-card">Credit Card</option>
            <option value="mpesa">M-Pesa</option>
          </select>
        </div>

        {/* Show credit card fields when payment method is Credit Card */}
        {formData.paymentMethod === 'credit-card' && (
          <>
            <div>
              <label>Card Number:</label>
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Expiration Date:</label>
              <input
                type="text"
                name="expirationDate"
                value={formData.expirationDate}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>CVV:</label>
              <input
                type="text"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                required
              />
            </div>
          </>
        )}

        {/* Show phone number input when payment method is M-Pesa */}
        {formData.paymentMethod === 'mpesa' && (
          <div>
            <label>Phone Number (for M-Pesa):</label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
        )}

        <h3>Total: Sh {totalPrice.toLocaleString()}</h3>
        <button type="submit" className="checkout-submit">Submit Order</button>
      </form>
    </div>
  );
};

export default Checkout;
