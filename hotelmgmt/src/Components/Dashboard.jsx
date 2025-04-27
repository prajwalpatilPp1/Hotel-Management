import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Components/Dashboard.css';

function Dashboard() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    navigate('/login');
  };

  const toggleMenu = () => {
    setMenuOpen(prev => {
      const next = !prev;
      document.body.style.overflow = next ? 'hidden' : 'auto';
      return next;
    });
  };

  return (
    <div className="dashboard-main">
      <h1 className='heading'>Welcome, Admin!</h1>

      <div className="hamburger" onClick={toggleMenu}>
        {menuOpen ? '✕' : '☰'}
      </div>

      <div className={`overlay ${menuOpen ? 'show' : ''}`} onClick={toggleMenu}></div>

      <div className={`dashboard-container ${menuOpen ? 'open' : ''}`}>
        {/* Removed the dropdown and added buttons directly */}
        <button onClick={() => navigate('/booking')}>View Bookings</button>
        <button onClick={() => navigate('/addbooking')}>Add Booking</button>

        <button onClick={() => navigate('/rooms')}>Rooms</button>
        <button onClick={() => navigate('/payments')}>Payments</button>
        <button onClick={() => navigate('/inventory')}>Inventory</button>
        <button onClick={() => navigate('/maintenance')}>Maintenance</button>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}

export default Dashboard;
