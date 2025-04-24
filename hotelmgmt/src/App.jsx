import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './Components/Login';
import Home from './Components/Home';
import Booking from './Components/Booking';
import AdminRegister from './Components/Register';
import Dashboard from './Components/Dashboard';
import Rooms from './Components/Rooms';
import Inventory from './Components/Inventory';
import Payments from './Components/Payments';
import Header from './Components/Header';
import Footer from './Components/Footer';

import './Components/Layout.css'; // Optional: rename to App.css if Layout is removed

function App() {
  return (
    <Router>
      <Header />

      <div style={{ minHeight: 'calc(100vh - 160px)' }}>
        {/* Adjust height if needed depending on header/footer height */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/register" element={<AdminRegister />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/payments" element={<Payments />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
