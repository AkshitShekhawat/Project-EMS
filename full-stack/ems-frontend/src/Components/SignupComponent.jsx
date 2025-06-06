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
    <div className="container mt-4">
      <h2>Signup</h2>
      {message && <div className="alert alert-info">{message}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label>Name</label>
          <input type="text" className="form-control" name="name" onChange={handleChange} required />
        </div>
        <div className="form-group mb-3">
          <label>Email</label>
          <input type="email" className="form-control" name="email" onChange={handleChange} required />
        </div>
        <div className="form-group mb-3">
          <label>Password</label>
          <input type="password" className="form-control" name="password" onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-primary">Signup</button>
      </form>
    </div>
  );
};

export default SignupComponent;
