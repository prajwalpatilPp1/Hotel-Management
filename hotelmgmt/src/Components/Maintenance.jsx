import React, { useState } from 'react';
import './Maintenance.css';

function Maintenance() {
  const [maintenanceRequests, setMaintenanceRequests] = useState([
    { id: 'M001', room: '101', request: 'Air conditioner not working', status: 'Pending' },
    { id: 'M002', room: '205', request: 'Leaky faucet', status: 'In Progress' },
    { id: 'M003', room: '307', request: 'TV remote missing', status: 'Completed' },
    { id: 'M004', room: '410', request: 'Broken window', status: 'Pending' },
    { id: 'M005', room: '512', request: 'No hot water', status: 'In Progress' },
  ]);

  const handleUpdateRequest = (id) => {
    setMaintenanceRequests(prevRequests =>
      prevRequests.map(req =>
        req.id === id ? { ...req, status: req.status === 'Pending' ? 'In Progress' : 'Completed' } : req
      )
    );
  };

  return (
    <div className="maintenance-container">
      <h2>Maintenance Requests</h2>
      <table className="maintenance-table">
        <thead>
          <tr>
            <th>Request ID</th>
            <th>Room</th>
            <th>Request</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {maintenanceRequests.map(request => (
            <tr key={request.id}>
              <td>{request.id}</td>
              <td>{request.room}</td>
              <td>{request.request}</td>
              <td>{request.status}</td>
              <td>
                <button onClick={() => handleUpdateRequest(request.id)}>
                  {request.status === 'Pending' ? 'Mark In Progress' : request.status === 'In Progress' ? 'Mark Completed' : 'Completed'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Maintenance;
