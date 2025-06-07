import React from 'react';
import { useNavigate } from 'react-router-dom';
import HomeHeaderComponent from './HomeHeaderComponent';
import FooterComponent from './FooterComponent';

function HomePage() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/employees');
  };

  return (
    <>
      <HomeHeaderComponent />

      <div style={{
        height: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '20px'
      }}>
        <h1>Welcome to My <strong>Employee Management System</strong></h1>
        <p>Get Started By Signing Up or Logging In</p>
        <button
          onClick={handleGetStarted}
          style={{
            backgroundColor: 'red',
            color: 'white',
            padding: '15px 30px',
            fontSize: '20px',
            border: 'none',
            borderRadius: '84px',
            cursor: 'pointer',
            marginTop: '20px'
          }}
        >
          GetStarted With Demo
        </button>
      </div>

      <FooterComponent />
    </>
  );
}

export default HomePage;
