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
        minHeight: '70vh',
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
            marginTop: '20px',
            marginBottom: '40px'
          }}
        >
          GetStarted With Demo
        </button>

        {/* Image Gallery Section */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          flexWrap: 'wrap',
          maxWidth: '1000px'
        }}>
          {[1, 2, 3, 4].map((img, index) => (
            <div key={index} style={{
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
              width: '200px'
            }}>
              <img
                src={`/images/img${img}.png`}
                alt={`Employee ${img}`}
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block'
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <FooterComponent />
    </>
  );
}

export default HomePage;
