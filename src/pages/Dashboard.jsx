// src/pages/Dashboard.jsx
import React, { useState, useEffect } from 'react';
import { FiPackage, FiUsers, FiDollarSign, FiTrendingUp, FiShoppingCart } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalOrders: 0,
    totalRevenue: 0,
    activeUsers: 0
  });

  const [recentOrders, setRecentOrders] = useState([]);
  const [topProducts, setTopProducts] = useState([]);

  useEffect(() => {
    // Mock data
    setStats({
      totalProducts: 156,
      totalOrders: 89,
      totalRevenue: 245600,
      activeUsers: 234
    });

    setRecentOrders([
      { id: 1, customer: 'Ali Khan', product: 'Dried Apricots', amount: 2500, status: 'Delivered' },
      { id: 2, customer: 'Sara Ahmed', product: 'Walnut Kernels', amount: 1800, status: 'Processing' },
      { id: 3, customer: 'Bilal Hassan', product: 'GB Honey', amount: 3200, status: 'Shipped' }
    ]);

    setTopProducts([
      { name: 'Dried Apricots', sales: 45, revenue: 112500 },
      { name: 'Walnut Kernels', sales: 32, revenue: 57600 },
      { name: 'GB Honey', sales: 28, revenue: 89600 }
    ]);
  }, []);

  const StatCard = ({ icon, title, value, change }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="stat-card"
    >
      <div className="stat-icon">{icon}</div>
      <div className="stat-content">
        <h3>{title}</h3>
        <p className="stat-value">{value}</p>
        {change && <span className={`stat-change ${change > 0 ? 'positive' : 'negative'}`}>
          {change > 0 ? '↑' : '↓'} {Math.abs(change)}%
        </span>}
      </div>
    </motion.div>
  );

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Dashboard Overview</h1>
        <p>Monitor your store performance and manage products</p>
      </div>

      <div className="stats-grid">
        <StatCard
          icon={<FiPackage />}
          title="Total Products"
          value={stats.totalProducts}
          change={12}
        />
        <StatCard
          icon={<FiShoppingCart />}
          title="Total Orders"
          value={stats.totalOrders}
          change={8}
        />
        <StatCard
          icon={<FiDollarSign />}
          title="Total Revenue"
          value={`Rs. ${stats.totalRevenue.toLocaleString()}`}
          change={15}
        />
        <StatCard
          icon={<FiUsers />}
          title="Active Users"
          value={stats.activeUsers}
          change={5}
        />
      </div>

      <div className="dashboard-content">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="dashboard-card"
        >
          <h2>Recent Orders</h2>
          <div className="orders-table">
            <table>
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Product</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map(order => (
                  <tr key={order.id}>
                    <td>#{order.id}</td>
                    <td>{order.customer}</td>
                    <td>{order.product}</td>
                    <td>Rs. {order.amount}</td>
                    <td>
                      <span className={`status-badge status-${order.status.toLowerCase()}`}>
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="dashboard-card"
        >
          <h2>Top Selling Products</h2>
          <div className="products-list">
            {topProducts.map((product, index) => (
              <div key={index} className="product-item">
                <div className="product-info">
                  <h4>{product.name}</h4>
                  <p>{product.sales} sales</p>
                </div>
                <div className="product-revenue">
                  Rs. {product.revenue.toLocaleString()}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;