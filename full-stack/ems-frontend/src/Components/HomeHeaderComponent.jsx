import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function HomeHeaderComponent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check login status on mount
    const loggedIn = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(loggedIn === 'true');
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    navigate('/'); // Redirect to home after logout
  };

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
              {/* ✅ Show Dashboard link only when logged in */}
              {isLoggedIn && (
              <Link to="/employees" className="nav-link-custom">Dashboard</Link>
            )}
            </div>
          </div>

          {/* Right: Login/Logout */}
          <div>
            {isLoggedIn ? (
              <button onClick={handleLogout} className="login-signup-btn">Logout</button>
            ) : (
              <Link to="/login" className="login-signup-btn">Login / SignUp</Link>
            )}
          </div>

        </div>
      </nav>
    </header>
  );
}

export default HomeHeaderComponent;
