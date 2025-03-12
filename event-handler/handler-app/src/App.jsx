import { useState } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css'

const products = [
  {
    id: 1,
    name: "iPhone 15 pro",
    price: "1,44,900",
    category: "iPhone",
    image: "",
  },
   {
    id: 2,
    name: "iPhone 16 pro",
    price: "1,44,900",
    category: "iPhone",
    image: "/watch-3.avif",
  },
   {
    id: 3,
    name: "iPhone 12 pro",
    price: "1,44,900",
    category: "iPhone",
    image: "/watch-3.avif",
  },
  {
    id: 4,
    name: "Apple Watch Series 9",
    price: "41,999",
    category: "Watch",
    image: "/images/applewatch9.jpg",
  },

  {
    id: 5,
    name: "AirPods 2nd generation",
    price: "1,29,000",
    category: "AirPods",
    image: "/images/airpods2.jpg",
  },
  {
    id: 6,
    name: "AirPods 4nd generation",
    price: "1,29,000",
    category: "AirPods",
    image: "/images/airpods2.jpg",
  },

  {
    id: 7,
    name: "MacBook Air",
    price: "99,900",
    category: "Mac",
    image: "/images/macbookair.jpg",
  },
  {
    id: 8,
    name: "iMac",
    price: "1,34,900",
    category: "Mac",
    image: "/images/imac.jpg",
  },
  {
    id: 9,
    name: "iMac",
    price: "1,34,900",
    category: "Mac",
    image: "/images/imac.jpg",
  },
  {
    id: 10,
    name: "AirPods 3rd generation",
    price: "19,900",
    category: "AirPods",
    image: "/images/airpods3.jpg",
  },
  {
    id: 11,
    name: "Apple Watch Ultra 2",
    price: "89,900",
    category: "Watch",
    image: "/images/watchultra2.jpg",
  },
  {
    id: 12,
    name: "Apple Watch SE",
    price: "29,900",
    category: "Watch",
    image: "/images/watchse.jpg",
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
