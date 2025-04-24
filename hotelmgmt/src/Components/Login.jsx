import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../Components/Login.css'
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
    <div className='login'>
      <div className="card">
      <h2 className='heading'>Admin Login</h2>

<form  onSubmit={handleSubmit}>
  <div className='login-input'>
    <label>Email:</label><br />
    <input 
      id='login-input'
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
      placeholder="Enter your email"
    />
  </div>

  <div >
    <label>Password:</label><br />
    <input
     id='login-input'
      type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required
      placeholder="Enter your password"
    />
  </div>

  <button type="submit" >
    Login
  </button>
</form>


      </div>
      
    </div>
  );
}

export default Login;
