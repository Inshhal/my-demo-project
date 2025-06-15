import React from 'react';
import './DownloadCTA.css';

const DownloadCTA = () => {
  return (
    <section className="download-section">
      <div className="container download-wrapper">
        <div className="download-text">
          <h2 className="download-heading">Join the Fun – Download MyBindle Now!</h2>
          <p className="download-subheading">
            Your Social Network. Your Way.<br />
            Download MyBindle Now and Be a Part<br />
            of a Community That’s Always Buzzing!
          </p>

          <div className="store-buttons">
            <img src="/appstore.svg" alt="App Store" className="store-btn" />
            <img src="/playstore.svg" alt="Google Play" className="store-btn" />
          </div>
        </div>

        <div className="download-image">
          <img src="new.png2.png" alt="App on mobile" className="download-app-image" />
        </div>
      </div>
    </section>
  );
};

export default DownloadCTA;
