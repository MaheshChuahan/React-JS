import { useState } from "react";
import "./App.css";
import  iphone from "./images/iphone-1.avif"
import iphone2 from"./images/iphone-2.avif"
import iphone3 from"./images/iphone-3.avif"
import watch1 from"./images/watch-1.avif"
import watch2 from"./images/watch-2.avif"
import watch3 from"./images/watch-3.avif"
import airpords1 from"./images/airpords-1.avif"
import airpords2 from"./images/airpords-2.avif"
import airpords3 from"./images/airpords-3.avif"
import mac1 from "./images/mac-1.avif"
import mac2 from "./images/mac-2.avif"
import mac3 from "./images/mac-3.avif"
import 'bootstrap/dist/css/bootstrap.min.css'

const products = [
  {
    id: 1,
    name: "iPhone 15 pro",
    price: "79,500",
    category: "iPhone",
    image: iphone,
  },

  {
    id: 5,
    name: "AirPods 2nd generation",
    price: "20,000",
    category: "AirPods",
    image: airpords1,
  },

   {
    id: 2,
    name: "iPhone 16 pro",
    price: "99,900",
    category: "iPhone",
    image:iphone2,
  },

  {
    id: 7,
    name: "MacBook Air",
    price: "99,900",
    category: "Mac",
    image: mac1,
  },

   {
    id: 3,
    name: "iPhone 12 pro",
    price: "45,000",
    category: "iPhone",
    image:iphone3,
  },

  {
    id: 4,
    name: "Apple Watch Series 9",
    price: "22,000",
    category: "Watch",
    image: watch1,
  },

  {
    id: 6,
    name: "AirPods 4nd generation",
    price: "25,000",
    category: "AirPods",
    image: airpords2,
  },

  {
    id: 8,
    name: "iMac",
    price: "23,900",
    category: "Mac",
    image: mac2,
  },

  {
    id: 9,
    name: "iMac2",
    price: "34,900",
    category: "Mac",
    image: mac3,
  },

  {
    id: 10,
    name: "AirPods 3rd generation",
    price: "19,900",
    category: "AirPods",
    image: airpords3,
  },

  {
    id: 11,
    name: "Apple Watch Ultra 2",
    price: "89,900",
    category: "Watch",
    image: watch2,
  },
  
  {
    id: 12,
    name: "Apple Watch SE",
    price: "29,900",
    category: "Watch",
    image: watch3,
  },
];

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "iPhone", "Watch", "AirPods", "Mac"];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="app-container">
      <h1>Apple Store</h1>

      <div className="buttons-container">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={selectedCategory === category ? "active" : ""}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="products-container">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>Rs : {product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
