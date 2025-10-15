// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Gilgit-Baltistan Authentic</h3>
          <p>Bringing the authentic taste and crafts of GB to your doorstep.</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/dashboard">Dashboard</Link>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: info@gbauthentic.com</p>
          <p>Phone: +92 123 456 7890</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Gilgit-Baltistan Authentic. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;