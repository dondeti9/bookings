# bookings
import React, { useState } from 'react';
import './App.css';

function App() {
  const [bookings, setBookings] = useState([
    { id: 1, customer: 'John Doe', project: 'Project A', plotNo: 101, bookingDate: '2023-08-11', status: 'Approved' },
    { id: 2, customer: 'Jane Smith', project: 'Project B', plotNo: 202, bookingDate: '2023-08-12', status: 'Rejected' },
    { id: 3, customer: 'Alice Johnson', project: 'Project C', plotNo: 303, bookingDate: '2023-08-10', status: 'Approved' },
    // Add more bookings as needed
  ]);

  return (
    <div className="App">
      <h1>Bookings Section</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer</th>
            <th>Project Name</th>
            <th>Plot No.</th>
            <th>Booking Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td>{booking.id}</td>
              <td>{booking.customer}</td>
              <td>{booking.project}</td>
              <td>{booking.plotNo}</td>
              <td>{booking.bookingDate}</td>
              <td>{booking.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

