// src/pages/Payments.jsx
import React, { useState, useEffect } from "react";
import "./Payments.css";

const Payments = () => {
  const [payments, setPayments] = useState([]);
  const [newPayment, setNewPayment] = useState({
    bookingId: "",
    guestName: "",
    roomNumber: "",
    amount: "",
    paymentStatus: "Pending",
  });

  useEffect(() => {
    // Dummy data with Indian guest names and INR amounts
    const dummyPayments = [
      {
        bookingId: "B001",
        guestName: "Aarav Patel",
        roomNumber: "101",
        amount: 3000, // In INR
        paymentStatus: "Completed",
      },
      {
        bookingId: "B002",
        guestName: "Priya Sharma",
        roomNumber: "102",
        amount: 5000, // In INR
        paymentStatus: "Pending",
      },
      {
        bookingId: "B003",
        guestName: "Rohan Verma",
        roomNumber: "103",
        amount: 8000, // In INR
        paymentStatus: "Completed",
      },
    ];
    setPayments(dummyPayments);
  }, []);

  const handleAddPayment = () => {
    if (!newPayment.bookingId || !newPayment.guestName || !newPayment.roomNumber || !newPayment.amount) {
      alert("Please fill in all fields.");
      return;
    }
    setPayments([...payments, newPayment]);
    setNewPayment({
      bookingId: "",
      guestName: "",
      roomNumber: "",
      amount: "",
      paymentStatus: "Pending",
    });
  };

  return (
    <div className="payments-container">
      <h2 className="payments-title">Payment and Billing</h2>

      {/* New Payment Form */}
      <div className="new-payment-form">
        <input
          type="text"
          placeholder="Booking ID"
          value={newPayment.bookingId}
          onChange={(e) => setNewPayment({ ...newPayment, bookingId: e.target.value })}
        />
        <input
          type="text"
          placeholder="Guest Name"
          value={newPayment.guestName}
          onChange={(e) => setNewPayment({ ...newPayment, guestName: e.target.value })}
        />
        <input
          type="text"
          placeholder="Room Number"
          value={newPayment.roomNumber}
          onChange={(e) => setNewPayment({ ...newPayment, roomNumber: e.target.value })}
        />
        <input
          type="number"
          placeholder="Amount (INR)"
          value={newPayment.amount}
          onChange={(e) => setNewPayment({ ...newPayment, amount: e.target.value })}
        />
        <button className="add-payment-btn" onClick={handleAddPayment}>Add Payment</button>
      </div>

      {/* Payment Table */}
      <table className="payment-table">
        <thead>
          <tr>
            <th>Booking ID</th>
            <th>Guest Name</th>
            <th>Room Number</th>
            <th>Amount (INR)</th>
            <th>Payment Status</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment) => (
            <tr key={payment.bookingId}>
              <td>{payment.bookingId}</td>
              <td>{payment.guestName}</td>
              <td>{payment.roomNumber}</td>
              <td>{payment.amount} INR</td>
              <td>{payment.paymentStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Payments;
