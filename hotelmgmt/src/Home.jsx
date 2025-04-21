import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleAdminLogin = () => {
    navigate('/login');
  };

  const handleAdminRegister = () => {
    navigate('/register');
  };

  return (
    <div style={{ textAlign: 'center', paddingTop: '50px' }}>
      <h1>Welcome to Our Hotel</h1>
      <div style={{ marginTop: '20px' }}>
        <button
          onClick={handleAdminLogin}
          style={{ padding: '10px 20px', margin: '10px' }}
        >
          Admin Login
        </button>
        <button
          onClick={handleAdminRegister}
          style={{ padding: '10px 20px', margin: '10px' }}
        >
          Admin Register
        </button>
      </div>
    </div>
  );
}

export default Home;
