import React from "react";
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

const AppRoutes = () => {
  const location = useLocation();

  const isAdminAccess = () => {
    // Check for admin access via a query parameter or URL path
    // Example: Access via hidden URL like '/admin-access?key=SECRET_KEY'
    const searchParams = new URLSearchParams(window.location.search);
    // Example: Replace this in your AppRoutes component
    return searchParams.get("key") === "12345secureAccess"; // Replace with your actual secret key
  };

  // Determine if the NavBar should be shown based on the current route
  const showNavBar = location.pathname !== "/dashboard";

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
        <Route path="/find-repair" element={<FindRepair />} />
        {/* Admin Route - Accessible via hidden key */}
        <Route
          path="/admin-access"
          element={isAdminAccess() ? <Admin /> : <Navigate to="/" />}
        />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
