import React from 'react';
import './Booking.css'; // make sure to create this file
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const Booking = () => {
  const totalBookings = 120;
  const roomTypes = {
    single: 40,
    double: 50,
    suite: 30,
  };

  const upcomingBookings = 15;
  const statusSummary = {
    booked: 80,
    cancelled: 20,
    checkedIn: 20,
  };


  const bookingData = [
    { name: 'Single', value: 40 },
    { name: 'Double', value: 50 },
    { name: 'Suite', value: 30 }
  ];
  
  const statusData = [
    { name: 'Booked', value: 80 },
    { name: 'Cancelled', value: 20 },
    { name: 'Checked-in', value: 20 }
  ];
  
  return (
    <div className="booking-summary">
  {/* Section 1: Quick Stats */}
  <div className="stats-grid">
    <div className="booking-box">
      <h3>Total Bookings</h3>
      <p>{totalBookings}</p>
    </div>

    <div className="booking-box">
      <h3>Room Types</h3>
      <p>Single: {roomTypes.single}</p>
      <p>Double: {roomTypes.double}</p>
      <p>Suite: {roomTypes.suite}</p>
    </div>

    <div className="booking-box">
      <h3>Upcoming (7 Days)</h3>
      <p>{upcomingBookings}</p>
    </div>

    <div className="booking-box">
      <h3>Status Summary</h3>
      <p>Booked: {statusSummary.booked}</p>
      <p>Cancelled: {statusSummary.cancelled}</p>
      <p>Checked-in: {statusSummary.checkedIn}</p>
    </div>
  </div>

  {/* Section 2: Charts */}
  <div className="chart-section">
    <div className="chart-box">
      <h3>Room Types</h3>
      <PieChart width={300} height={250}>
        <Pie
          data={bookingData}
          dataKey="value"
          cx="50%"
          cy="50%"
          outerRadius={80}
          label
        >
          {bookingData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={['#8884d8', '#82ca9d', '#ffc658'][index % 3]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>

    <div className="chart-box">
      <h3>Status Summary</h3>
      <PieChart width={300} height={250}>
        <Pie
          data={statusData}
          dataKey="value"
          cx="50%"
          cy="50%"
          outerRadius={80}
          label
        >
          {statusData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={['#00C49F', '#FF8042', '#0088FE'][index % 3]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  </div>
</div>

  );
};

export default Booking;
