import React from 'react';
import './Hero.css';
import { FaFire, FaGlobe } from 'react-icons/fa'; // Fire & Globe icons

const Hero = () => (
  <section className="hero-section">
    <div className="container">
      <div className="row align-items-center">
        {/* Left Side - Text */}
        <div className="col-md-6">
          <h1 className="display-hero">
            Stay Connected<br />Stay Social<br />Stay You!
          </h1>
          <p className="lead-hero">
            A place where friendships grow, connections thrive, and moments turn into unforgettable experiences.
            Whether you're looking to reconnect with old friends, build new relationships, or share what matters most to you – 
            MyBindle is your home for meaningful connection.
          </p>
          <button className="btn-hero">Get Started</button>
        </div>

        {/* Right Side - Image */}
        <div className="col-md-6 position-relative text-center">
          <div className='blackimage'></div>
          <div className="image-container">
            <img src="/mobileapp.png" alt="Mobile App" className="hero-image" />

            {/* Top Floating Label */}
            <span className="seamless-label">
              <FaFire className="fire-icon" /> Seamless connections
            </span>

            {/* Bottom Right Label */}
            <span className="discover-label">
              <FaGlobe className="me-1" /> Discover and Explore
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
