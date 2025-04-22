import React, { useState } from 'react';

function AdminRegister() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Password strength check
    if (password.length < 6) {
      setErrorMessage('Password must be at least 6 characters long.');
      return;
    }

    setLoading(true);
    setSuccessMessage('');
    setErrorMessage('');

    try {
      const response = await fetch('http://localhost:5000/api/admin/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage('Admin registered successfully!');
        setName('');
        setEmail('');
        setPassword('');
      } else {
        // Provide better error feedback
        setErrorMessage(data.message || 'Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', paddingTop: '50px' }}>
      <h2>Admin Register</h2>

      {/* Display success or error message */}
      {successMessage && (
        <div style={{ color: 'green', marginBottom: '10px' }}>{successMessage}</div>
      )}
      {errorMessage && (
        <div style={{ color: 'red', marginBottom: '10px' }}>{errorMessage}</div>
      )}

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>Name:</label><br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Email:</label><br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: '100%', padding: '8px' }}
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
          />
        </div>

        <button type="submit" style={{ padding: '10px 20px' }} disabled={loading}>
          {loading ? 'Registering...' : 'Register'}
        </button>
      </form>
    </div>
  );
}

export default AdminRegister;
