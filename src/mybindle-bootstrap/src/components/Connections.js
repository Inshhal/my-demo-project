// src/components/Connections.js
import React from 'react';
import './Connections.css';
import { FaBell, FaVideo, FaUsers } from 'react-icons/fa';

const Connections = () => (
  <section className="connections-section py-5">
    <div className="container">
    
      <h2 className="connections-heading text-center mb-2">Where Every Clicks Sparks a Connection!</h2>
      <p className="connections-subheading text-center mb-4">From Reels to Real Talk – All in One Place</p>

      <div className="row align-items-center">
      
        <div className="col-md-6 text-center mb-4 mb-md-0">
          <img src="/settings.png" alt="App on mobile" className="connection-image" />
        </div>

        {/* Right: Content Boxes */}
        <div className="col-md-6">
          <div className="content-box mb-4">
            <FaVideo className="content-icon" />
            <h4 className="content-title">Short Videos & Reels</h4>
            <p className="content-desc">
              Engaging, bite-sized clips to share your moments and stay entertained.
            </p>
          </div>
          <div className="content-box mb-4">
            <FaBell className="content-icon" />
            <h4 className="content-title">Smart Notifications</h4>
            <p className="content-desc">
              Stay updated with only the most important alerts tailored for you.
            </p>
          </div>
          <div className="content-box">
            <FaUsers className="content-icon" />
            <h4 className="content-title">Interest-Based Communities</h4>
            <p className="content-desc">
              Join groups that match your passion and connect with like-minded people.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Connections;  