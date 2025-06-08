import React from 'react';

function ModernContactComponent() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '40px 20px',
      background: '#f2f4f8',
    }}>
      <div style={{
        width: '100%',
        maxWidth: '400px',
        backgroundColor: '#ffffff',
        padding: '30px',
        borderRadius: '12px',
        boxShadow: '0 0 30px rgba(0, 0, 0, 0.1)',
        fontFamily: 'Segoe UI, sans-serif',
        textAlign: 'center'
      }}>
        <h2 style={{
          color: '#007bff',
          fontWeight: '600',
          marginBottom: '20px'
        }}>
          📬 Contact Us
        </h2>

        <form>
          <div style={{ marginBottom: '15px', textAlign: 'left' }}>
            <label style={labelStyle}>👤 Name</label>
            <input type="text" placeholder="Enter your name" style={inputStyle} />
          </div>

          <div style={{ marginBottom: '15px', textAlign: 'left' }}>
            <label style={labelStyle}>📧 Email Address</label>
            <input type="email" placeholder="Enter your email" style={inputStyle} />
          </div>

          <div style={{ marginBottom: '20px', textAlign: 'left' }}>
            <label style={labelStyle}>💬 Message</label>
            <textarea placeholder="Write your message..." rows="4" style={{ ...inputStyle, resize: 'none' }}></textarea>
          </div>

          <button type="submit" style={buttonStyle}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

const inputStyle = {
  width: '100%',
  padding: '10px 16px',
  borderRadius: '25px',
  border: '1px solid #ccc',
  fontSize: '15px',
  outline: 'none',
};

const labelStyle = {
  display: 'block',
  fontWeight: '600',
  fontSize: '14px',
  marginBottom: '6px'
};

const buttonStyle = {
  width: '100%',
  padding: '12px',
  backgroundColor: '#007bff',
  color: '#fff',
  fontSize: '16px',
  fontWeight: '600',
  border: 'none',
  borderRadius: '25px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
};

export default ModernContactComponent;
