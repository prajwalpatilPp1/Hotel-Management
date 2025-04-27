import React, { useState } from 'react';
import './Inventory.css';

function Inventory() {
  const [inventory, setInventory] = useState([
    { id: 'I001', itemName: 'Towels', quantity: 50, status: 'In Stock' },
    { id: 'I002', itemName: 'Bedsheets', quantity: 30, status: 'In Stock' },
    { id: 'I003', itemName: 'Toiletries', quantity: 100, status: 'In Stock' },
    { id: 'I004', itemName: 'Shampoo Bottles', quantity: 20, status: 'Low Stock' },
    { id: 'I005', itemName: 'Curtains', quantity: 15, status: 'In Stock' },
  ]);

  const handleUpdateStatus = (id) => {
    setInventory(prevInventory =>
      prevInventory.map(item =>
        item.id === id ? { ...item, status: item.status === 'In Stock' ? 'Out of Stock' : 'In Stock' } : item
      )
    );
  };

  return (
    <div className="inventory-container">
      <h2>Inventory Management</h2>
      <table className="inventory-table">
        <thead>
          <tr>
            <th>Item ID</th>
            <th>Item Name</th>
            <th>Quantity</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.itemName}</td>
              <td>{item.quantity}</td>
              <td>{item.status}</td>
              <td>
                <button onClick={() => handleUpdateStatus(item.id)}>
                  {item.status === 'In Stock' ? 'Mark Out of Stock' : 'Mark In Stock'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Inventory;
