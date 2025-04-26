import React, { useState } from 'react';
import './Payments.css';

const Payments = () => {
  const [payments, setPayments] = useState([
    { id: 1, name: 'John Doe', status: 'Paid', method: 'UPI', advance: 0 },
    { id: 2, name: 'Jane Smith', status: 'Unpaid', method: '-', advance: 0 },
    { id: 3, name: 'Robert Brown', status: 'Advance Paid', method: 'Cash', advance: 2000 },
    { id: 4, name: 'Emily Davis', status: 'Paid', method: 'Card', advance: 0 },
  ]);

  return (
    <div className="payments-page">
      <h2>Payments Overview</h2>
      <table className="payments-table">
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Status</th>
            <th>Method</th>
            <th>Advance Payment (₹)</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment) => (
            <tr key={payment.id}>
              <td>{payment.name}</td>
              <td className={payment.status === 'Paid' ? 'paid' : payment.status === 'Advance Paid' ? 'advance' : 'unpaid'}>
                {payment.status}
              </td>
              <td>{payment.method}</td>
              <td>{payment.advance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Payments;
