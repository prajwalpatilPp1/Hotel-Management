import React, { useState, useEffect } from "react";
import "./Booking.css";

const Booking = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // In a real app, you would fetch this data from an API
    const dummyBookings = [
      {
        bookingId: "B001",
        guestName: "Aarav Patel",
        roomNumber: "101",
        checkInDate: "2025-05-01",
        checkOutDate: "2025-05-05",
        numberOfGuests: 2,
        specialRequests: "Late check-in",
        bookingStatus: "Confirmed",
        paymentStatus: "Paid",
      },
      {
        bookingId: "B002",
        guestName: "Priya Sharma",
        roomNumber: "205",
        checkInDate: "2025-05-03",
        checkOutDate: "2025-05-08",
        numberOfGuests: 1,
        specialRequests: "Near elevator",
        bookingStatus: "Confirmed",
        paymentStatus: "Pending",
      },
      {
        bookingId: "B003",
        guestName: "Rohan Verma",
        roomNumber: "307",
        checkInDate: "2025-05-02",
        checkOutDate: "2025-05-06",
        numberOfGuests: 3,
        specialRequests: "Extra bed",
        bookingStatus: "Checked-in",
        paymentStatus: "Paid",
      },
      {
        bookingId: "B004",
        guestName: "Sneha Deshmukh",
        roomNumber: "410",
        checkInDate: "2025-05-04",
        checkOutDate: "2025-05-09",
        numberOfGuests: 2,
        specialRequests: "",
        bookingStatus: "Cancelled",
        paymentStatus: "Refunded",
      },
      {
        bookingId: "B005",
        guestName: "Vikram Singh",
        roomNumber: "512",
        checkInDate: "2025-05-05",
        checkOutDate: "2025-05-10",
        numberOfGuests: 1,
        specialRequests: "High floor",
        bookingStatus: "Confirmed",
        paymentStatus: "Paid",
      },
    ];
    setBookings(dummyBookings);
  }, []);

  return (
    <div className="booking-list-container">
      <h2 className="booking-title">All Bookings</h2>

      {bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <table className="booking-table">
          <thead>
            <tr>
              <th>Booking ID</th>
              <th>Guest Name</th>
              <th>Room Number</th>
              <th>Check-In</th>
              <th>Check-Out</th>
              <th>Guests</th>
              <th>Status</th>
              <th>Payment</th>
              <th>Requests</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.bookingId}>
                <td>{booking.bookingId}</td>
                <td>{booking.guestName}</td>
                <td>{booking.roomNumber}</td>
                <td>{booking.checkInDate}</td>
                <td>{booking.checkOutDate}</td>
                <td>{booking.numberOfGuests}</td>
                <td>{booking.bookingStatus}</td>
                <td>{booking.paymentStatus}</td>
                <td>{booking.specialRequests || "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Booking;
