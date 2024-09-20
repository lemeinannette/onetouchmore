import React from "react";
import './Cart.css'; 
import Checkout from './Checkout';  // Import the Checkout component

const Cart = ({ cart, handleAddQuantity, handleDecreaseQuantity, handleRemoveFromCart }) => {

  const totalPrice = cart.reduce((total, item) => {
    const price = parseInt(item.price.replace('Sh', '').replace(',', ''));
    return total + (price * item.quantity);
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
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>
                    <button onClick={() => handleDecreaseQuantity(item)}>-</button>
                    {item.quantity}
                    <button onClick={() => handleAddQuantity(item)}>+</button>
                  </td>
                  <td>Sh {(parseInt(item.price.replace('Sh', '').replace(',', '')) * item.quantity).toLocaleString()}</td>
                  <td>
                    <button onClick={() => handleRemoveFromCart(item)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="cart-summary">
            <h3>Subtotal: Sh {totalPrice.toLocaleString()}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
