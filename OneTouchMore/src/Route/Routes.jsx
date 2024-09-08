import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Components/Home/Home";
import About from "../Components/About/About";
import FAQs from "../Components/FAQ/FAQs";
import ContactUs from "../Components/Contact/ContactUs";
import BookRepair from "../Components/BookRepair/BookRepair";
import NavBar from "../Components/Navbar/NavBar";
import FindRepair from "../Components/FindRepairs/FindRepair";
const AppRoutes = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/book-repair" element={<BookRepair />} />
        <Route path="/find-repair" element={<FindRepair />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
