import React from 'react';
import './Header.css';

const Header = () => (
  <header className="mybindle-header py-3">
    <div className="container text-center d-flex flex-column align-items-center">
      <div className="logo-circle mb-1">
        <span className="logo-text">MB</span>
      </div>
      <h2 className="brand-title m-0">MyBindle</h2>
    </div>
  </header>
);

export default Header;
