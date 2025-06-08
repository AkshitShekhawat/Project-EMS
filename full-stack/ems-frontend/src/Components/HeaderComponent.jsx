import React from 'react';
import { Link } from 'react-router-dom';

function HeaderComponent() {
  return (
    <div>
      <header>
        <nav className='navbar navbar-dark bg-dark px-4 d-flex justify-content-between'>
          {/* Left side: Title */}
          <Link to="/" className="navbar-brand d-flex align-items-center">
            <img src="/images/logo.png" alt="EMS Logo" style={{ height: '40px', width: 'auto', marginRight: '8px' }} />
            <span className="fw-bold text-white">EMS</span>
          </Link>
          
          {/* Right side: About + Signup Buttons */}
          <div className="d-flex align-items-center gap-3 nav-menu">
  <Link to='/' className="nav-link-custom">Home</Link>
  <Link to="/about" className="nav-link-custom">About</Link>
  <Link to="/contact" className="nav-link-custom">Contact</Link>
  <Link to="/login" className="login-signup-btn">
    Login / SignUp
  </Link>
</div>

        </nav>
      </header>
    </div>
  );
}

export default HeaderComponent;
