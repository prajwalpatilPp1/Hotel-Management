import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Components/Dashboard.css'

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {

    navigate('/login');

  };

  return (
    <div >
      <h1>Welcome, Admin!</h1>

      <div className='dashboard-container' >

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
