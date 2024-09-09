import React, { useState } from "react";
import "./FindRepair.css";
import SearchBar from "./SearchBar/SearchBar";
import CategoryFilter from "./CategoryFilter/CategoryFilter";
import AccessoryCard from "./AccessoryCard/AccessoryCard";
import Footer from "../Footer/Footer";
// Dummy data for accessories
const accessories = [
  {
    name: "SAMSUNG A70 COMP OL",
    price: "Sh 5,500",
    image: "https://via.placeholder.com/150",
    id: 1,
  },
  {
    name: "POWER SUPPLY 1502AD",
    price: "Sh 2,800",
    image: "https://via.placeholder.com/150",
    id: 2,
  },
  {
    name: "TECNO BC3/ POP 4 PR",
    price: "Sh 1,100",
    image: "https://via.placeholder.com/150",
    id: 3,
  },
  {
    name: "FAMOUS CONTAINER(4",
    price: "Sh 1,100",
    image: "https://via.placeholder.com/150",
    id: 4,
  },
  {
    name: "I PHONE 6S[A1683,A1",
    price: "Sh 1,100",
    image: "https://via.placeholder.com/150",
    id: 5,
  },
  {
    name: "INFINIX X624/KB7 /H",
    price: "Sh 1,000",
    image: "https://via.placeholder.com/150",
    id: 6,
  },
  {
    name: "LENOVO A1000 LCD ON",
    price: "Sh 550",
    image: "https://via.placeholder.com/150",
    id: 7,
  },
  {
    name: "IPHONE 11[2111/A222",
    price: "Sh 1,600",
    image: "https://via.placeholder.com/150",
    id: 8,
  },
  {
    name: "GLUE T7000/ T6000 B",
    price: "Sh 250",
    image: "https://via.placeholder.com/150",
    id: 9,
  },
  {
    name: "SAMSUNG A310(2016)",
    price: "Sh 1,500",
    image: "https://via.placeholder.com/150",
    id: 10,
  },
  {
    name: "A16K/REALME C11 CO",
    price: "Sh 1,300",
    image: "https://via.placeholder.com/150",
    id: 11,
  },
  {
    name: "TECNO CD7 BATTERY",
    price: "Sh 550",
    image: "https://via.placeholder.com/150",
    id: 12,
  },
  {
    name: "TECNOCG9/CAMON 18",
    price: "Sh 3,400",
    image: "https://via.placeholder.com/150",
    id: 13,
  },
  {
    name: "1 PLUS 8 ORG COMP",
    price: "Sh 8,900",
    image: "https://via.placeholder.com/150",
    id: 14,
  },
  {
    name: "1 PLUS 8 T (1+8T) C",
    price: "Sh 500",
    image: "https://via.placeholder.com/150",
    id: 15,
  },
  {
    name: "1 PLUS NORD 10 COMP",
    price: "Sh 2,400",
    image: "https://via.placeholder.com/150",
    id: 16,
  },
  {
    name: "1 PLUS NORD CE2 5G",
    price: "Sh 2,600",
    image: "https://via.placeholder.com/150",
    id: 17,
  },
  {
    name: "1 PLUS NORD CE3 LIT",
    price: "Sh 2,600",
    image: "https://via.placeholder.com/150",
    id: 18,
  },
  {
    name: "1+8 POWER SWITCH",
    price: "Sh 100",
    image: "https://via.placeholder.com/150",
    id: 19,
  },
  {
    name: "10ELMINI MICROSCOPE",
    price: "Sh 12,800",
    image: "https://via.placeholder.com/150",
    id: 20,
  },
  {
    name: "115 IN 1 TOOLKIT SE",
    price: "Sh 1,300",
    image: "https://via.placeholder.com/150",
    id: 21,
  },
  {
    name: "12PIN CHINA LCD ONL",
    price: "Sh 130",
    image: "https://via.placeholder.com/150",
    id: 22,
  },
  {
    name: "15 PIN LCD",
    price: "Sh 300",
    image: "https://via.placeholder.com/150",
    id: 23,
  },
  {
    name: "16 PIN BIG LCD ONLY",
    price: "Sh 300",
    image: "https://via.placeholder.com/150",
    id: 24,
  },
  {
    name: "1688 TOOL KIT",
    price: "Sh 400",
    image: "https://via.placeholder.com/150",
    id: 25,
  },
  {
    name: "16PIN CHINA LCD ONL",
    price: "Sh 110",
    image: "https://via.placeholder.com/150",
    id: 26,
  },
  {
    name: "17 PIN BIG LCD",
    price: "Sh 210",
    image: "https://via.placeholder.com/150",
    id: 27,
  },
  {
    name: "17PIN BIG CHINA LCD",
    price: "Sh 190",
    image: "https://via.placeholder.com/150",
    id: 28,
  },
  {
    name: "18MM RINGER",
    price: "Sh 20",
    image: "https://via.placeholder.com/150",
    id: 29,
  },
  {
    name: "1PLUS 8 ORG COMP LC",
    price: "Sh 13,300",
    image: "https://via.placeholder.com/150",
    id: 30,
  },
];


const FindRepair = () => {
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");

  const handleAddToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const handleBuyNow = (item) => {
    // Redirect to WhatsApp with message
    window.open(
      `https://wa.me/?text=I'm interested in buying ${item.name} for ${item.price}`,
      "_blank"
    );
  };

  const filteredAccessories = accessories.filter(
    (item) =>
      (category === "All" ||
        item.name.toLowerCase().includes(category.toLowerCase())) &&
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="find-repair-container">
        <h1>Accessory Hunt</h1>
        <p>
          Get all mobile phone spares, tools and equipment. Delivery country
          wide! Order Now.
        </p>

        <div className="search-bar-category">
          <div className="search-bar">
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </div>
          <CategoryFilter category={category} setCategory={setCategory} />
        </div>

        <div className="accessory-list">
          {filteredAccessories.map((item) => (
            <AccessoryCard
              key={item.id}
              item={item}
              handleAddToCart={handleAddToCart}
              handleBuyNow={handleBuyNow}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default FindRepair;
