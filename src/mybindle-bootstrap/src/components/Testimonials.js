// File: src/components/Testimonial.js
import React from 'react';
import './Testimonials.css';
import { FaStar } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Emily R',
    location: 'USA',
    feedback:
      'This platform changed the way I stay in touch with my friends and family. The interface is smooth, and I love how easy it is to share my moments!',
  },
  {
    name: 'Amir K',
    location: 'India',
    feedback:
      'Finally, a social network that understands what I need! The profile features are a game-changer, and I feel safer sharing my life online.',
  },
  {
    name: 'Sophie M',
    location: 'Canada',
    feedback:
      'I can’t imagine my day without this app. Every interaction feels personal, and the communities make every interaction special!',
  },
  {
    name: 'Javier L',
    location: 'Mexico',
    feedback:
      'Running my small business has never been easier! This platform helped me connect with customers, promote my products, and grow my brand.',
  },
  {
    name: 'Lucas T',
    location: 'Brazil',
    feedback:
      'The perfect blend of fun and functionality. Whether I want to be social, discover trending content, or just catch up with friends, everything is right here!',
  },
  {
    name: 'Nora S',
    location: 'Canada',
    feedback:
      'I’ve tried many social platforms, but this one truly stands out! The experience feels personal, the connections feel real, and every feature just makes sense.',
  },
];

const Testimonial = () => {
  return (
    <section className="testimonial-section">
      <div className="container text-center">
        <h2 className="section-title">What Our Users Say</h2>
        <div className="testimonial-grid">
          {testimonials.map((user, index) => (
            <div key={index} className="testimonial-card">
              <div className="stars">
                {Array(5)
                  .fill()
                  .map((_, i) => (
                    <FaStar key={i} color="#FFB400" />
                  ))}
              </div>
              <p className="feedback-text">"{user.feedback}"</p>
              <p className="user-info">
                <strong>{user.name}</strong> - {user.location}
              </p>
            </div>
          ))}
        </div>
        <button className="see-more-btn">See More</button>
      </div>
    </section>
  );
};

export default Testimonial;

