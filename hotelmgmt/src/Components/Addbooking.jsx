import React, { useState } from 'react';
import './Addbooking.css'; // ✅ Linking external CSS

function AddBooking() {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking Added:', { name, date });
    alert('Booking Added Successfully!');
    // Later, you can POST the data to your backend
  };

  return (
    <div className="add-booking-container">
      <h2 className="add-booking-heading">Add Booking</h2>
      <form className="add-booking-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Customer Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="date"
          placeholder="Booking Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <button type="submit">Add Booking</button>
      </form>
    </div>
  );
}

export default AddBooking;
