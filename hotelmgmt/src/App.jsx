import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'
import Login from './login'
import Home from './home'
import Booking from './booking'
import AdminRegister from './Register'
import Dashboard from './Dashboard'
import Rooms from './Rooms'
import './admin.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/register" element={<AdminRegister />} />  {/* Admin Register */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/rooms" element={<Rooms/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
