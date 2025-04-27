// src/pages/Rooms.jsx
import React, { useState, useEffect } from "react";
import "./Rooms.css";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [newRoom, setNewRoom] = useState({
    roomNumber: "",
    roomType: "",
    price: "",
    availability: "Available",
    amenities: "",
  });

  useEffect(() => {
    // In real app, this would be fetched from an API
    const dummyRooms = [
      {
        roomNumber: "101",
        roomType: "Single",
        price: 3000,
        availability: "Available",
        amenities: "AC, Free WiFi, TV, Hot Water",
      },
      {
        roomNumber: "102",
        roomType: "Double",
        price: 5000,
        availability: "Occupied",
        amenities: "AC, Free WiFi, TV, Hot Water, Mini Fridge",
      },
      {
        roomNumber: "103",
        roomType: "Suite",
        price: 8000,
        availability: "Available",
        amenities: "AC, Free WiFi, TV, Hot Water, Mini Fridge, Bathtub",
      },
      {
        roomNumber: "104",
        roomType: "Single",
        price: 3000,
        availability: "Available",
        amenities: "AC, Free WiFi, TV, Hot Water",
      },
    ];
    setRooms(dummyRooms);
  }, []);

  const handleAddRoom = () => {
    if (!newRoom.roomNumber || !newRoom.roomType || !newRoom.price || !newRoom.amenities) {
      alert("Please fill in all fields.");
      return;
    }
    setRooms([...rooms, newRoom]);
    setNewRoom({
      roomNumber: "",
      roomType: "",
      price: "",
      availability: "Available",
      amenities: "",
    });
  };

  const handleRemoveRoom = (roomNumber) => {
    setRooms(rooms.filter((room) => room.roomNumber !== roomNumber));
  };

  const toggleAvailability = (roomNumber) => {
    setRooms(rooms.map((room) => 
      room.roomNumber === roomNumber 
      ? { ...room, availability: room.availability === "Available" ? "Occupied" : "Available" }
      : room
    ));
  };

  return (
    <div className="rooms-container">
      <h2 className="rooms-title">Room Management</h2>

      {/* Add Room Form */}
      <div className="add-room-form">
        <h3>Add New Room</h3>
        <input
          type="text"
          placeholder="Room Number"
          value={newRoom.roomNumber}
          onChange={(e) => setNewRoom({ ...newRoom, roomNumber: e.target.value })}
        />
        <input
          type="text"
          placeholder="Room Type"
          value={newRoom.roomType}
          onChange={(e) => setNewRoom({ ...newRoom, roomType: e.target.value })}
        />
        <input
          type="number"
          placeholder="Price (INR)"
          value={newRoom.price}
          onChange={(e) => setNewRoom({ ...newRoom, price: e.target.value })}
        />
        <input
          type="text"
          placeholder="Amenities"
          value={newRoom.amenities}
          onChange={(e) => setNewRoom({ ...newRoom, amenities: e.target.value })}
        />
        <button onClick={handleAddRoom} className="add-room-btn">Add Room</button>
      </div>

      {rooms.length === 0 ? (
        <p>No rooms available.</p>
      ) : (
        <table className="rooms-table">
          <thead>
            <tr>
              <th>Room Number</th>
              <th>Room Type</th>
              <th>Price (INR)</th>
              <th>Availability</th>
              <th>Amenities</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {rooms.map((room) => (
              <tr key={room.roomNumber}>
                <td>{room.roomNumber}</td>
                <td>{room.roomType}</td>
                <td>{room.price} ₹</td>
                <td>
                  <button
                    className={`availability-btn ${room.availability === "Available" ? "available" : "occupied"}`}
                    onClick={() => toggleAvailability(room.roomNumber)}
                  >
                    {room.availability}
                  </button>
                </td>
                <td>{room.amenities}</td>
                <td>
                  <button
                    onClick={() => handleRemoveRoom(room.roomNumber)}
                    className="remove-room-btn"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Rooms;
