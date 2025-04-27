// src/pages/AddBooking.jsx
import React, { useState } from "react";
import "./Booking.css"; // still using Booking.css for styles

const AddBooking = () => {
  const [formData, setFormData] = useState({
    guestName: "",
    roomNumber: "",
    checkInDate: "",
    checkOutDate: "",
    numberOfGuests: 1,
    specialRequests: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking Data Submitted:", formData);
    // You can later POST this formData to your backend API
    alert("Booking submitted successfully!");
    setFormData({
      guestName: "",
      roomNumber: "",
      checkInDate: "",
      checkOutDate: "",
      numberOfGuests: 1,
      specialRequests: "",
    });
  };

  return (
    <div className="booking-container">
      <h2 className="booking-title">Add New Booking</h2>
      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Guest Name</label>
          <input
            type="text"
            name="guestName"
            value={formData.guestName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Room Number</label>
          <input
            type="text"
            name="roomNumber"
            value={formData.roomNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Check-in Date</label>
          <input
            type="date"
            name="checkInDate"
            value={formData.checkInDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Check-out Date</label>
          <input
            type="date"
            name="checkOutDate"
            value={formData.checkOutDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Number of Guests</label>
          <input
            type="number"
            name="numberOfGuests"
            min="1"
            value={formData.numberOfGuests}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Special Requests</label>
          <textarea
            name="specialRequests"
            value={formData.specialRequests}
            onChange={handleChange}
            rows="3"
            placeholder="Any special requests?"
          />
        </div>

        <button type="submit" className="submit-btn">Submit Booking</button>
      </form>
    </div>
  );
};

export default AddBooking;
