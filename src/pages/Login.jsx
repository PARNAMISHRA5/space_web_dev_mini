import React from 'react';

const Login = () => {
  const handleClick = () => {
    // Replace 'http://localhost:8000/' with the URL you want to open
    window.open('http://localhost:8000/', '_blank');
  };

  return (
    <div
      style={{
        backgroundColor: '#141414',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '24px',
        color: 'white',
      }}
    >
      <h1 style={{ marginBottom: '20px' }}>Click to Book Your Travel 💯</h1>
      <button
        style={{
          backgroundColor: '#4CAF50',
          color: 'white',
          padding: '15px 30px',
          fontSize: '18px',
          border: 'none',
          cursor: 'pointer',
          borderRadius: '5px',
          transition: 'background-color 0.3s ease',
        }}
        onClick={handleClick}
        onMouseOver={(e) => e.target.style.backgroundColor = '#45a049'}
        onMouseOut={(e) => e.target.style.backgroundColor = '#4CAF50'}
      >
        Book Now
      </button>
    </div>
  );
};

export default Login;
