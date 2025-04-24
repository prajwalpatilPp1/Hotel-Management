import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Components/Home.css'; // ✅ Import CSS file

function Home() {
  const navigate = useNavigate();

  const handleAdminLogin = () => {
    navigate('/login');
  };

  const handleAdminRegister = () => {
    navigate('/register');
  };

  return (
    <div className="home-container">
      <h1>Welcome to Our Hotel</h1>
      <div className="home-buttons">
        <button onClick={handleAdminLogin} className="home-button">
          Admin Login
        </button>
        <button onClick={handleAdminRegister} className="home-button">
          Admin Register
        </button>
      </div>
    </div>
  );
}

export default Home;
