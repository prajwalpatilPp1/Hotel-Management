// src/ManageRooms.jsx

import React, { useState } from 'react';

function ManageRooms() {
  const [rooms, setRooms] = useState([]);
  const [newRoom, setNewRoom] = useState('');

  const handleAddRoom = () => {
    if (newRoom.trim()) {
      setRooms([...rooms, newRoom.trim()]);
      setNewRoom('');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2> Manage Rooms</h2>
      <input
        type="text"
        placeholder="Enter room name"
        value={newRoom}
        onChange={(e) => setNewRoom(e.target.value)}
      />
      <button onClick={handleAddRoom} >Add Room</button>

      <ul>
        {rooms.map((room, index) => (
          <li key={index}>{room}</li>
        ))}
      </ul>
    </div>
  );
}

export default ManageRooms;
