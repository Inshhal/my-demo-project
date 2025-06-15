// DownloadCTA.js
import React from "react";
import "./DownloadCTA.css";
import { FaDownload, FaMobileAlt, FaCheckCircle } from "react-icons/fa";

const DownloadCTA = () => {
  return (
    <section className="install-section">
      <h2>How to Install Our App</h2>
      <p className="subtext">
        Getting started is quick and easy! Follow these simple steps to install and start using MyBindle today.
      </p>

      <div className="install-steps">
        <div className="step">
          <div className="circle">01</div>
          <FaDownload className="icon" />
          <h3>Download</h3>
          <p>Open Play Store or App Store</p>
        </div>

        <div className="step">
          <div className="circle">02</div>
          <FaMobileAlt className="icon" />
          <h3>Install App</h3>
          <p>The app will install automatically.</p>
        </div>

        <div className="step">
          <div className="circle">03</div>
          <FaCheckCircle className="icon" />
          <h3>Ready to Use</h3>
          <p>Sign up or login & start exploring.</p>
        </div>
      </div>
    </section>
  );
};

export default DownloadCTA;
