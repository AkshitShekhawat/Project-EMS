// src/Components/HomeHeaderComponent.jsx

import React from 'react';
import { Link } from 'react-router-dom';

function HomeHeaderComponent() {
  return (
    <header>
      <nav className='navbar navbar-dark bg-dark px-4 d-flex justify-content-between align-items-center'>
        <div className='navbar-brand'>EMS</div>
        <div className='d-flex gap-3'>
          <a href="#home" className="btn btn-outline-light">Home</a>
          <Link to="/about" className="btn btn-outline-light">About</Link>
          <a href="#services" className="btn btn-outline-light">Services</a>
          <a href="#gallery" className="btn btn-outline-light">Gallery</a>
          <a href="#contact" className="btn btn-outline-light">Contact</a>
          <Link to="/signup" className="btn btn-primary">Login / SignUp</Link>
        </div>
      </nav>
    </header>
  );
}

export default HomeHeaderComponent;
