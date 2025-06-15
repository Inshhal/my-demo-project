// File: src/components/InstallApp.js
import React from 'react';
import './InstallApp.css';

const InstallApp = () => {
  return (
    <section className="install-section py-5">
      <div className="container text-center">
        <h2 className="install-title mb-3">How to Install Our App</h2>
        <p className="install-subtitle mb-5">
          Getting started is quick and easy! Follow these simple steps to install and start using MyBindle today.
        </p>

        <div className="row justify-content-center text-start">
          <div className="col-md-4 mb-4">
            <div className="install-step">
              <div className="step-number">Step no 01</div>
              <h5 className="step-heading">Download</h5>
              <p className="step-description">Open Play Store or App Store</p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="install-step">
              <div className="step-number">Step no 02</div>
              <h5 className="step-heading">Install App</h5>
              <p className="step-description">The app will install automatically.</p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="install-step">
              <div className="step-number">step no 03</div>
              <h5 className="step-heading">Ready to Use</h5>
              <p className="step-description">Sign up or log in & start exploring.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstallApp;
