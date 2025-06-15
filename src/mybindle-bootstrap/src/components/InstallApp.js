import React from 'react';
import './InstallApp.css';

const steps = ['Download', 'Install App', 'Ready to Use'];

const InstallApp = () => (
  <section className="install-section py-5">
    <div className="container text-center">
      <h2 className="mb-4">How to Install Our App</h2>
      <div className="row justify-content-center">
        {steps.map((step, idx) => (
          <div key={idx} className="col-md-3 mb-3">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="text-danger">Step 0{idx + 1}</h5>
                <p className="mt-2">{step}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default InstallApp;
