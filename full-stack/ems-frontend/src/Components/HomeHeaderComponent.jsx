// src/Components/HomeHeaderComponent.jsx

import React from 'react';
import { Link } from 'react-router-dom';

function HomeHeaderComponent() {
  return (
    <header>
      <nav className="navbar navbar-dark bg-dark px-4">
        <div className="container-fluid d-flex align-items-center justify-content-between">
          
          {/* Left: Logo */}
          <Link to="/" className="navbar-brand d-flex align-items-center">
  <img src="/images/logo.png" alt="EMS Logo" style={{ height: '40px', width: 'auto', marginRight: '8px' }} />
  <span className="fw-bold text-white">EMS</span>
</Link>


          {/* Center: Nav Links */}
         <div className="d-flex justify-content-center flex-grow-1">
  <div className="d-flex gap-3 nav-menu">
    <Link to="/" className="nav-link-custom">Home</Link>
    <a href="#services" className="nav-link-custom">Services</a>
    <a href="#gallery" className="nav-link-custom">Gallery</a>
    <Link to="/about" className="nav-link-custom">About</Link>
    <Link to="/contact" className="nav-link-custom">Contact</Link>
  </div>
</div>


          {/* Right: Login/SignUp */}
          <div>
            <Link to="/signup" className="login-signup-btn">
                Login / SignUp
              </Link>
          </div>

        </div>
      </nav>
    </header>
  );
}

export default HomeHeaderComponent;
