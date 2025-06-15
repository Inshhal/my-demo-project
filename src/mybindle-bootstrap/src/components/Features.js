// File: src/components/Features.js
import React from 'react';
import './Features.css';
import { FaUsers, FaShareAlt, FaComments, FaShieldAlt, FaCompass, FaChartLine } from 'react-icons/fa';

const Features = () => {
  return (
    <section className="features-section py-5">
      <div className="container">
        <h2 className="features-heading text-center mb-2">Features That Keep You Hooked!</h2>
        <p className="features-subheading text-center mb-4">Meet, Chat, Share - Anytime, Anywhere!</p>

        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="feature-card p-4 text-center">
              <FaUsers size={30} className="mb-2 text-danger" />
              <h5 className="feature-title">Seamless Connections</h5>
              <p className="feature-description">
                Stay in touch with friends, family, and loved ones at your fingertips.
              </p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="feature-card p-4 text-center">
              <FaShareAlt size={30} className="mb-2 text-danger" />
              <h5 className="feature-title">Share Your Story</h5>
              <p className="feature-description">
                Upload photos, videos, and moments to let the world know what’s happening in your life.
              </p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="feature-card p-4 text-center">
              <FaComments size={30} className="mb-2 text-danger" />
              <h5 className="feature-title">Real-Time Chat</h5>
              <p className="feature-description">
                Connect instantly with smooth, lightning-fast messaging.
              </p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="feature-card p-4 text-center">
              <FaShieldAlt size={30} className="mb-2 text-danger" />
              <h5 className="feature-title">Privacy First</h5>
              <p className="feature-description">
                Your data, your control. We prioritize your privacy with world-class security.
              </p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="feature-card p-4 text-center">
              <FaCompass size={30} className="mb-2 text-danger" />
              <h5 className="feature-title">Discover & Explore</h5>
              <p className="feature-description">
                Find exciting content, join communities, or follow pages that match your interests.
              </p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="feature-card p-4 text-center">
              <FaChartLine size={30} className="mb-2 text-danger" />
              <h5 className="feature-title">Grow Your Business</h5>
              <p className="feature-description">
                Use our platform to market your business, connect with clients, and build meaningful relationships.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
