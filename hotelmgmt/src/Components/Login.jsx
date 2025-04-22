import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // Create a navigate function
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Admin Login Details:', { email, password });
    
    // Redirect to the dashboard after a successful login
    alert('Admin Login successful! (Check console)');
    navigate('/dashboard');  // Redirect to /dashboard
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', paddingTop: '50px' }}>
      <h2>Admin Login</h2>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>Email:</label><br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: '100%', padding: '8px' }}
            placeholder="Enter your email"
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Password:</label><br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: '100%', padding: '8px' }}
            placeholder="Enter your password"
          />
        </div>

        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer' }}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
