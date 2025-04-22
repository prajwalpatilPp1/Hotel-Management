import React from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear session/token if you use it
    navigate('/login');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Welcome, Admin!</h1>

      <div style={{ marginTop: '20px' }}>
        <button onClick={() => navigate('/booking')}>View Bookings</button>
        <button onClick={() => navigate('/rooms')}>Rooms</button>
        <button onClick={() => navigate('/payments')}>Payments</button>
        <button onClick={() => navigate('/inventory')}>Inventory</button>
        <button onClick={() => navigate('/Maintenence')}>Maintenence</button>
        

        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}

export default Dashboard;
