import React from 'react';
import { Link } from 'react-router-dom';

function HeaderComponent() {
  return (
    <div>
      <header>
        <nav className='navbar navbar-dark bg-dark px-4 d-flex justify-content-between'>
          {/* Left side: Title */}
          <a className="navbar-brand" href="http://www.AkshitVerse.net">
            Employee Management System
          </a>

          {/* Right side: About + Signup Buttons */}
          <div>
            <Link to="/about" className="btn btn-outline-light me-2">
              About
            </Link>
            <Link to="/signup" className="btn btn-light text-dark">
              Signup
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default HeaderComponent;
