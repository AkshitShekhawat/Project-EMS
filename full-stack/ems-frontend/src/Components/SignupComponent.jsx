import { signupUser } from '../Services/AuthService'; // ✅ use this
import React, { useState } from 'react';

const SignupComponent = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        console.log("Sending user:", user); 
      await signupUser(user); // ✅ use service function
      setMessage("Signup successful! Now you can log in.");
    } catch (error) {
      setMessage("Signup failed. Try again or check if user already exists.");
    }
  };

  return (
  <div className="d-flex justify-content-center align-items-center min-vh-100 bg-gradient">
    <div className="signup-box card p-4 shadow-lg border-0" style={{ maxWidth: '420px', width: '100%' }}>
      <h3 className="text-center mb-4 text-primary">🚀 Create Your Account</h3>

      {message && <div className="alert alert-info text-center">{message}</div>}

      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label className="form-label fw-semibold">👤 User Name</label>
          <input
            type="text"
            className="form-control rounded-pill px-3"
            name="name"
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="form-group mb-3">
          <label className="form-label fw-semibold">📧 Email Address</label>
          <input
            type="email"
            className="form-control rounded-pill px-3"
            name="email"
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group mb-4">
          <label className="form-label fw-semibold">🔒 Password</label>
          <input
            type="password"
            className="form-control rounded-pill px-3"
            name="password"
            onChange={handleChange}
            placeholder="Create a password"
            required
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary rounded-pill py-2">
            Sign Up
          </button>
        </div>
      </form>

      <p className="text-center mt-3 mb-0">
        Already have an account? <a href="/login" className="text-decoration-none">Login</a>
      </p>
    </div>
  </div>
);


};

export default SignupComponent;
