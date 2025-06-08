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
        <button className='login-signup-btn'
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

        {/* Button-style image section */}
<div style={{
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: '20px',
  marginTop: '30px'
}}>
  {[ 
    // image ratio needed to fix in designed box is 842 X 414
    // { src: '/images/button2.png', alt: 'Login', action: () => navigate('/login') },
    { src: '/images/buimg.png', alt: 'Signup', action: () => alert('Coming Soon!') },
    { src: '/images/buimg2.png', alt: 'employees', action: () => navigate('/employees') },
    { src: '/images/buimg3.png', alt: 'Explore Features', action: () => alert('Coming Soon!') },
    { src: '/images/buimg4.png', alt: 'Explore Features', action: () => alert('Coming Soon!') },
    // Add more as needed
  ].map((btn, index) => (
    <div key={index}
      onClick={btn.action}
      style={{
        cursor: 'pointer',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.2s',
        width: '180px'
      }}
      onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
      onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
    >
      <img
        src={btn.src}
        alt={btn.alt}
        style={{
          width: '100%',
          height: '90px',
          display: 'block'
        }}
      />
    </div>
  ))}
</div>
<br/>

        {/* Image Section */}
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
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
              width: '235px'
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
