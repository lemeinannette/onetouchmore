import React from "react";
import "./Home.css";
import HeroSection from "./HeroSection/HeroSection";
import FeatureCard from "./FeatureCard/FeatureCard";
import RepairCategories from "./RepairCategories/RepairCategories";
import CallToAction from "./CallToAction/CallToAction";
import Footer from "../Footer/Footer";
const Home = () => {
  return (
    <div>
    <HeroSection />
    <FeatureCard />
    <RepairCategories />
    <CallToAction />
    <Footer />
    </div>
  );
};

export default Home;
