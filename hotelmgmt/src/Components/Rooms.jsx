import React, { useState } from 'react';
import './Rooms.css';

function Rooms() {
  const [rooms, setRooms] = useState([
    {
      id: 1,
      name: 'Deluxe Room',
      price: '₹3000/night',
      facilities: '1 King Bed, Free Wi-Fi, Breakfast Included',
      status: 'Available',
      customer: null,
    },
    {
      id: 2,
      name: 'Suite',
      price: '₹5000/night',
      facilities: '2 King Beds, Living Area, Ocean View, Free Wi-Fi, Breakfast Included',
      status: 'Occupied',
      customer: {
        name: 'Rahul Sharma',
        phone: '9876543210',
        checkinDate: '2025-04-25',
      },
    },
    {
      id: 3,
      name: 'Standard Room',
      price: '₹2000/night',
      facilities: '1 Queen Bed, Free Wi-Fi',
      status: 'Occupied',
      customer: {
        name: 'Priya Mehta',
        phone: '9123456780',
        checkinDate: '2025-04-24',
      },
    },
  ]);

  const handleCheckout = (roomId) => {
    const updatedRooms = rooms.map((room) =>
      room.id === roomId
        ? { ...room, status: 'Available', customer: null }
        : room
    );
    setRooms(updatedRooms);
    alert(`Room ${roomId} has been checked out successfully!`);
  };

  return (
    <div className="rooms-page">
      <h1>Rooms Overview</h1>
      <table className="rooms-table">
        <thead>
          <tr>
            <th>Room Name</th>
            <th>Price</th>
            <th>Facilities</th>
            <th>Status</th>
            <th>Customer Name</th>
            <th>Phone Number</th>
            <th>Check-in Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {rooms.map(room => (
            <tr key={room.id}>
              <td>{room.name}</td>
              <td>{room.price}</td>
              <td>{room.facilities}</td>
              <td>
                <span className={room.status === 'Available' ? 'available' : 'occupied'}>
                  {room.status}
                </span>
              </td>
              <td>{room.customer ? room.customer.name : '-'}</td>
              <td>{room.customer ? room.customer.phone : '-'}</td>
              <td>{room.customer ? room.customer.checkinDate : '-'}</td>
              <td>
                {room.status === 'Available' ? (
                  <button className="book-now" onClick={() => alert('Redirect to Booking')}>
                    Book Now
                  </button>
                ) : (
                  <button className="checkout-btn" onClick={() => handleCheckout(room.id)}>
                    Checkout
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Rooms;
