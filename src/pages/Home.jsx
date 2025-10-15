// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-text"
          >
            <h1>Authentic Treasures from Gilgit-Baltistan</h1>
            <p className="hero-description">
              Discover the pure essence of the mountains through our handpicked selection 
              of organic fruits, premium nuts, and exquisite handicrafts. Each product 
              tells a story of tradition, quality, and the breathtaking beauty of GB.
            </p>
            <div className="hero-buttons">
              <Link to="/products" className="btn btn-primary">
                Shop Now
              </Link>
              <Link to="/dashboard" className="btn btn-outline">
                Explore Dashboard
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-image"
          >
            <div className="image-placeholder">
              🏔️ Majestic GB Landscape
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="categories-section">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="section-title"
          >
            Explore Our Collections
          </motion.h2>
          <div className="categories-grid">
            {[
              { name: 'Fresh Fruits', emoji: '🍑', color: '#FF9A3D' },
              { name: 'Premium Nuts', emoji: '🌰', color: '#8D6B54' },
              { name: 'Pure Honey', emoji: '🍯', color: '#D4AC0D' },
              { name: 'Handicrafts', emoji: '🧵', color: '#4A7B9D' }
            ].map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="category-card"
                style={{ '--category-color': category.color }}
              >
                <div className="category-emoji">{category.emoji}</div>
                <h3>{category.name}</h3>
                <p>Discover authentic {category.name.toLowerCase()} from GB</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;