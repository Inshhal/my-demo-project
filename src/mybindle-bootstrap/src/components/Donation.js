import React from 'react';
import './Donation.css';

const DonationSection = () => {
  return (
    <section className="donation-section">
      <div className="container donation-wrapper">
        <div className="donation-text">
          <h2 className="donation-heading">
            Be the Reason<br />
            Someone Smiles Today!
          </h2>
          <p className="donation-subheading">
            Your generosity can change lives: every donation brings hope, support, and a brighter future.
            Give today and make a difference!
          </p>
          <button className="donate-button">Donate Now</button>
        </div>
        <div className="donation-image">
                    <img src="/myapp-png3.webp" alt="App on mobile" className="connection-image" />

        </div>
      </div>
    </section>
  );
};

export default DonationSection;
