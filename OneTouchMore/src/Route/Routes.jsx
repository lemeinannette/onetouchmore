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
import Checkout from "../Components/Checkout"; // Import the Checkout component

const AppRoutes = () => {
  const [cart, setCart] = useState([]);
  const location = useLocation();

  const isAdminAccess = () => {
    // Check for admin access via a query parameter or URL path
    const searchParams = new URLSearchParams(window.location.search);
    return searchParams.get("key") === "12345secureAccess"; // Replace with your actual secret key
  };

  // Determine if the NavBar should be shown based on the current route
  const showNavBar = location.pathname !== "/dashboard";

  const handleAddToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
    console.log(cart);
  };

  // Calculate total price for checkout
  const totalPrice = cart.reduce((total, item) => {
    const price = parseInt(item.price.replace('Sh', '').replace(',', ''));
    return total + (price * item.quantity);
  }, 0);

  return (
    <>
      {/* Conditionally render the NavBar based on the current route */}
      {showNavBar && <NavBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/book-repair" element={<BookRepair />} />
        <Route path="/find-repair" element={<FindRepair handleAddToCart={handleAddToCart} cart={cart} />} />
        {/* Admin Route - Accessible via hidden key */}
        <Route
          path="/admin-access"
          element={isAdminAccess() ? <Admin /> : <Navigate to="/" />}
        />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/cart" element={<Cart cart={cart} />} />
        <Route path="/checkout" element={<Checkout cartItems={cart} totalPrice={totalPrice} />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
