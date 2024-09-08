import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Components/Home";
import About from "../Components/About";
import FAQs from "../Components/FAQs";
import ContactUs from "../Components/ContactUs";
import BookRepair from "../Components/BookRepair";
import NavBar from "../Components/NavBar";
import FindRepair from "../Components/FindRepair";
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
