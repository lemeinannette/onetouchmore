import React from "react";
import './Cart.css'; // Import the CSS

const Cart = ({ cart }) => {
  // Calculate total price
  const totalPrice = cart.reduce((total, item) => {
    // Assuming item.price is a string with 'Sh' prefix, we extract the number and parse it to an integer
    const price = parseInt(item.price.replace('Sh', '').replace(',', ''));
    return total + price;
  }, 0);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart-content">
          <table className="cart-table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>1</td>
                  <td>{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="cart-summary">
            <h3>Subtotal: Sh {totalPrice.toLocaleString()}</h3>
            <button className="checkout-button">Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
