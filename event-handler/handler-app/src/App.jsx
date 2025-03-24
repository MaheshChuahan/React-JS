import { useState } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css'

const products = [
  {
    id: 1,
    name: "iPhone 15 pro",
    price: "1,44,900",
    category: "iPhone",
    image: "/images/iphone-1.avif",
  },
   {
    id: 2,
    name: "iPhone 16 pro",
    price: "1,44,900",
    category: "iPhone",
    image: "/images/iphone-2.avif",
  },
   {
    id: 3,
    name: "iPhone 12 pro",
    price: "1,44,900",
    category: "iPhone",
    image: "/images/iphone-3.avif",
  },
  {
    id: 4,
    name: "Apple Watch Series 9",
    price: "41,999",
    category: "Watch",
    image: "/images/watch-1.avif",
  },

  {
    id: 5,
    name: "AirPods 2nd generation",
    price: "1,29,000",
    category: "AirPods",
    image: "/images/airpords-1.avif",
  },
  {
    id: 6,
    name: "AirPods 4nd generation",
    price: "1,29,000",
    category: "AirPods",
    image: "/images/airpords-2.avif",
  },

  {
    id: 7,
    name: "MacBook Air",
    price: "99,900",
    category: "Mac",
    image: "/images/mac-1.avif",
  },
  {
    id: 8,
    name: "iMac",
    price: "1,34,900",
    category: "Mac",
    image: "/images/mac-2.avif",
  },
  {
    id: 9,
    name: "iMac",
    price: "1,34,900",
    category: "Mac",
    image: "/images/mac-3.avif",
  },
  {
    id: 10,
    name: "AirPods 3rd generation",
    price: "19,900",
    category: "AirPods",
    image: "/images/airpords-3.avif",
  },
  {
    id: 11,
    name: "Apple Watch Ultra 2",
    price: "89,900",
    category: "Watch",
    image: "/images/watch-2.avif",
  },
  {
    id: 12,
    name: "Apple Watch SE",
    price: "29,900",
    category: "Watch",
    image: "/images/watch-3.avif ",
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
