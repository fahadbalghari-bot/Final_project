// src/pages/Products.jsx
import React from 'react';
import { useCart } from '../context/CartContext';

const products = [
  {
    id: 1,
    name: "Hunza Dried Apricots",
    category: "fruits",
    price: 2500,
    image: "/images/apricots.jpg",
    description: "Sun-dried organic apricots from Hunza Valley.",
    rating: 4.8
  },
  {
    id: 2,
    name: "Premium Walnut Kernels",
    category: "nuts",
    price: 1800,
    image: "/images/walnuts.jpg",
    description: "Hand-cracked walnut kernels from Skardu.",
    rating: 4.7
  },
  {
    id: 3,
    name: "Gilgit Wild Honey",
    category: "honey",
    price: 3200,
    image: "/images/honey.jpg",
    description: "Pure wild honey from Gilgit mountains.",
    rating: 4.9
  }
];

const Products = () => {
  const { addToCart } = useCart();

  return (
    <div className="products-page">
      <div className="container">
        <h1>Our Products</h1>
        <div className="products-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <div className="image-placeholder">🖼️ {product.name}</div>
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <div className="product-price">Rs. {product.price}</div>
                <div className="product-rating">⭐ {product.rating}</div>
                <button 
                  className="btn btn-primary"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;