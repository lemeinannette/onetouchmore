import React, { useState } from "react";
import './Cart.css'; 
import Checkout from './Checkout';  // Import the Checkout component

const Cart = ({ cart }) => {
  
  const [cartItems, setCartItems] = useState(cart.map(item => ({ ...item, quantity: 1 })));
  const [isCheckout, setIsCheckout] = useState(false);  // State to toggle checkout

  const handleAddQuantity = (index) => {
    const updatedCart = cartItems.map((item, i) => 
      i === index ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCart);
  };

  const handleDecreaseQuantity = (index) => {
    const updatedCart = cartItems.map((item, i) => 
      i === index ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
    );
    setCartItems(updatedCart);
  };

  const handleRemoveFromCart = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
  };

  const totalPrice = cartItems.reduce((total, item) => {
    const price = parseInt(item.price.replace('Sh', '').replace(',', ''));
    return total + (price * item.quantity);
  }, 0);

  const handleCheckoutClick = () => {
    setIsCheckout(true);  // Toggle to show the Checkout component
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {isCheckout ? ( 
        // Show Checkout component if the checkout button is clicked
        <Checkout cartItems={cartItems} totalPrice={totalPrice} />
      ) : (
        cartItems.length === 0 ? (
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
                {cartItems.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>
                      <button onClick={() => handleDecreaseQuantity(index)}>-</button>
                      {item.quantity}
                      <button onClick={() => handleAddQuantity(index)}>+</button>
                    </td>
                    <td>Sh {(parseInt(item.price.replace('Sh', '').replace(',', '')) * item.quantity).toLocaleString()}</td>
                    <td>
                      <button onClick={() => handleRemoveFromCart(index)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="cart-summary">
              <h3>Subtotal: Sh {totalPrice.toLocaleString()}</h3>
              <button className="checkout-button" onClick={handleCheckoutClick}>Checkout</button>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Cart;
