import React, { useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Home from "../Components/Home/Home";
import About from "../Components/About/About";
import FAQs from "../Components/FAQ/FAQs";
import ContactUs from "../Components/Contact/ContactUs";
import BookRepair from "../Components/BookRepair/BookRepair";
import NavBar from "../Components/Navbar/NavBar";
import FindRepair from "../Components/FindRepairs/FindRepair";
import Admin from "../Components/Admin/Admin";
import Dashboard from "../Components/Admin/Dashboard";
import Cart from "../Components/Cart";
import Checkout from "../Components/Checkout"; 

const AppRoutes = () => {
  const [cart, setCart] = useState([]);
  const location = useLocation();

  const isAdminAccess = () => {
    const searchParams = new URLSearchParams(window.location.search);
    return searchParams.get("key") === "12345secureAccess";
  };

  const showNavBar = location.pathname !== "/dashboard";

  const handleAddToCart = (item) => {
    setCart((prevCart) => {
      const itemInCart = prevCart.find((cartItem) => cartItem.id === item.id);
      if (itemInCart) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const handleAddQuantity = (item) => {
    setCart((prevCart) =>
      prevCart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
    );
  };

  const handleDecreaseQuantity = (item) => {
    setCart((prevCart) =>
      prevCart.map((cartItem) =>
        cartItem.id === item.id
          ? {
              ...cartItem,
              quantity: cartItem.quantity > 1 ? cartItem.quantity - 1 : 1,
            }
          : cartItem
      )
    );
  };

  const handleRemoveFromCart = (item) => {
    setCart((prevCart) => prevCart.filter((cartItem) => cartItem.id !== item.id));
  };

  const totalPrice = cart.reduce((total, item) => {
    const price = parseInt(item.price.replace('Sh', '').replace(',', ''));
    return total + (price * item.quantity);
  }, 0);

  return (
    <>
      {showNavBar && <NavBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/book-repair" element={<BookRepair />} />
        <Route path="/find-repair" element={<FindRepair handleAddToCart={handleAddToCart} cart={cart} />} />
        <Route
          path="/admin-access"
          element={isAdminAccess() ? <Admin /> : <Navigate to="/" />}
        />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route 
          path="/cart" 
          element={
            <Cart 
              cart={cart} 
              handleAddQuantity={handleAddQuantity} 
              handleDecreaseQuantity={handleDecreaseQuantity} 
              handleRemoveFromCart={handleRemoveFromCart} 
            />
          } 
        />
        <Route path="/checkout" element={<Checkout cartItems={cart} totalPrice={totalPrice} />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
