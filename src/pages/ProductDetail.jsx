// src/pages/ProductDetail.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const products = [
  {
    id: 1,
    name: "Hunza Dried Apricots",
    category: "fruits",
    price: 2500,
    image: "/images/apricots.jpg",
    description: "Sun-dried organic apricots from the pristine valleys of Hunza. Rich in flavor and nutrients.",
    features: ["100% Organic", "No Added Sugar", "Rich in Vitamins", "Traditional Sun-Drying"],
    producer: "Hunza Valley Farmers Cooperative",
    rating: 4.8,
    reviews: 124
  }
];

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="product-detail">
        <div className="container">
          <h1>Product Not Found</h1>
          <Link to="/products" className="btn btn-primary">Back to Products</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="product-detail">
      <div className="container">
        <div className="product-detail-content">
          <div className="product-image-large">
            <div className="image-placeholder">🖼️ {product.name}</div>
          </div>
          <div className="product-info">
            <h1>{product.name}</h1>
            <div className="product-meta">
              <span className="rating">⭐ {product.rating} ({product.reviews} reviews)</span>
              <span className="producer">By {product.producer}</span>
            </div>
            <p className="description">{product.description}</p>
            
            <div className="features">
              <h3>Features:</h3>
              <ul>
                {product.features.map((feature, index) => (
                  <li key={index}>✓ {feature}</li>
                ))}
              </ul>
            </div>
            
            <div className="price-section">
              <div className="price">Rs. {product.price}</div>
              <button 
                className="btn btn-primary"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;