import React from 'react';

function ModernContactComponent() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '10px 20px',
      background: '#f2f4f8'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '520px',
        backgroundColor: '#ffffff',
        padding: '30px',
        borderRadius: '16px',
        boxShadow: '0 8px 240px rgba(0, 0, 0, 0.1)',
        fontFamily: 'Segoe UI, sans-serif'
      }}>
        <h2 style={{ textAlign: 'center', marginBottom: '5px' }}>📬 Get in Touch</h2>
        <p style={{ textAlign: 'center', color: '#555', marginBottom: '10px' }}>
          We'd love to hear from you. Fill out the form below and we'll get back to you soon.
        </p>

        <form>
          <div style={{ marginBottom: '10px' }}>
            <label style={{ display: 'block', marginBottom: '6px', fontWeight: '600' }}>Name</label>
            <input
              type="text"
              placeholder="John Doe"
              style={inputStyle}
            />
          </div>

          <div style={{ marginBottom: '10px' }}>
            <label style={{ display: 'block', marginBottom: '6px', fontWeight: '600' }}>Email</label>
            <input
              type="email"
              placeholder="john@example.com"
              style={inputStyle}
            />
          </div>

          <div style={{ marginBottom: '10px' }}>
            <label style={{ display: 'block', marginBottom: '6px', fontWeight: '600' }}>Message</label>
            <textarea
              placeholder="Your message here..."
              rows="4"
              style={{ ...inputStyle, resize: 'none' }}
            ></textarea>
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
  padding: '12px 16px',
  borderRadius: '8px',
  border: '1px solid #ccc',
  fontSize: '16px',
  outline: 'none',
  transition: 'border-color 0.2s ease-in-out',
};

const buttonStyle = {
  width: '100%',
  padding: '14px',
  backgroundColor: '#007bff',
  color: '#fff',
  fontSize: '16px',
  fontWeight: '600',
  border: 'none',
  borderRadius: '100px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
};

export default ModernContactComponent;
