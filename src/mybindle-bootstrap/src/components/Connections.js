// src/components/Connections.js
import React from 'react';
import './Connections.css';
import { FaBell } from 'react-icons/fa';   // Notification icon
import { FaVideo } from 'react-icons/fa';  // Video icon
import { FaUsers } from 'react-icons/fa';  // Community icon

const Connections = () => (
  <section className="connections-section py-5">
    <div className="container">
      <div className="row align-items-center">
        
        {/* Left: Mobile Image */}
        <div className="col-md-6 text-center mb-4 mb-md-0">
          <img src="/settings.png" alt="App on mobile" className="connection-image" />
        </div>

        {/* Right: Content Boxes */}
        <div className="col-md-6">
          <div className="content-box mb-4">
            <FaVideo className="content-icon" />
            <h4 className="content-title">Short Videos & Reels</h4>
            <p className="content-desc">Engaging, bite-sized clips to share your moments and stay entertained.</p>
          </div>
          <div className="content-box mb-4">
            <FaBell className="content-icon" />
            <h4 className="content-title">Smart Notifications</h4>
            <p className="content-desc">Stay updated with only the most important alerts tailored for you.</p>
          </div>
          <div className="content-box">
            <FaUsers className="content-icon" />
            <h4 className="content-title">Interest-Based Communities</h4>
            <p className="content-desc">Join groups that match your passion and connect with like-minded people.</p>
          </div>
        </div>

      </div>
    </div>
  </section>
);

export default Connections;
