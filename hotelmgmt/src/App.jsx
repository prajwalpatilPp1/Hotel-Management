
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.jsx'
import Login from './Components/Login'
import Home from './Components/Home'
import Booking from './Components/Booking'
import AdminRegister from './Components/Register'
import Dashboard from './Components/Dashboard'
import Rooms from './Components/Rooms'
import './Components/admin.css'
import Inventory from './Components/Inventory'
import Payments from './Components/Payments'
import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'

function App() {
  

  return (
    <Router>
      <Header /> {/* Displayed on all pages */}
      <div>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/register" element={<AdminRegister />} />  
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/rooms" element={<Rooms/>}/>
          <Route path="/inventory" element={<Inventory/>}/>
          <Route path='/payments'  element={<Payments/>}/>
        </Routes>
        
      </div>
      
      <Footer /> 
    </Router>
  )
}

export default App
