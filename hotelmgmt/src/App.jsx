import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Home from './Components/Home';
import Booking from './Components/Booking';
import Register from './Components/Register';
import Dashboard from './Components/Dashboard';
import Rooms from './Components/Rooms';
import Inventory from './Components/Inventory';
import Payments from './Components/Payments';
import Layout from './Components/Layout';  // Wrap header and footer inside Layout
import Maintenance from './Components/Maintenance';
import AddBooking from './Components/Addbooking';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/maintenance" element={<Maintenance />} />
          <Route path="/addbooking" element={<AddBooking />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
