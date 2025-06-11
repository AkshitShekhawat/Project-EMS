import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginComponent = () => {
  const [loginData, setLoginData] = useState({
    identifier: '',
    password: '',
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post('http://localhost:8080/api/auth/login', {
        usernameOrEmail: loginData.identifier,
        password: loginData.password,
      });

      console.log('Login success:', response.data);

      // ✅ Store login status
      localStorage.setItem('isLoggedIn', 'true');

      // ✅ Redirect and refresh the UI to update the header
      navigate('/dashboard');
      window.location.reload(); // force HomeHeaderComponent to re-check login
    } catch (err) {
      console.error('Login failed:', err);
      setError(err.response?.data || 'Login failed. Please try again.');
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow p-5" style={{ maxWidth: '400px', width: '100%' }}>
        <h3 className="text-center mb-4">
          🔐 <strong>Login to Your Account</strong>
        </h3>

        {error && (
          <div className="alert alert-danger py-2 text-center">{error}</div>
        )}

        <form onSubmit={handleLogin}>
          <div className="form-group mb-3">
            <label className="form-label fw-semibold">📧 Username or Email</label>
            <input
              type="text"
              className="form-control rounded-pill px-3"
              name="identifier"
              placeholder="Enter username or email"
              value={loginData.identifier}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group mb-4">
            <label className="form-label fw-semibold">🔒 Password</label>
            <input
              type="password"
              className="form-control rounded-pill px-3"
              name="password"
              placeholder="Enter your password"
              value={loginData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-success rounded-pill py-2">
              Login
            </button>
          </div>
        </form>

        <p className="text-center mt-3 mb-0">
          Don’t have an account?{' '}
          <a href="/signup" className="text-decoration-none">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginComponent;
