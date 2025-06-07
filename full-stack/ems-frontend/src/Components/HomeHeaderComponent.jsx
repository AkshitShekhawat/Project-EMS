// src/Components/HomeHeaderComponent.jsx

import React from 'react';
import { Link } from 'react-router-dom';

function HomeHeaderComponent() {
  return (
    <header>
      <nav className="navbar navbar-dark bg-dark px-4">
        <div className="container-fluid d-flex align-items-center justify-content-between">
          
          {/* Left: Logo */}
          <div className="navbar-brand">EMS</div>

          {/* Center: Nav Links */}
          <div className="d-flex justify-content-center flex-grow-1">
            <div className="d-flex gap-3">
              <Link to="/" className="btn btn-outline-light">Home</Link>
              <a href="#services" className="btn btn-outline-light">Services</a>
              <a href="#gallery" className="btn btn-outline-light">Gallery</a>
              <Link to="/about" className="btn btn-outline-light">About</Link>
              <a href="#contact" className="btn btn-outline-light">Contact</a>
            </div>
          </div>

          {/* Right: Login/SignUp */}
          <div>
            <Link to="/signup" className="btn btn-primary">Login / SignUp</Link>
          </div>

        </div>
      </nav>
    </header>
  );
}

export default HomeHeaderComponent;
