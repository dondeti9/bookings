// Sample data for bookings
const bookingsData = [
  { customerId: '001', projectName: 'Project A', plotNo: '101', bookingDate: '2023-08-11', status: 'Confirmed' },
  { customerId: '002', projectName: 'Project B', plotNo: '202', bookingDate: '2023-08-12', status: 'Pending' },
  { customerId: '003', projectName: 'Project C', plotNo: '303', bookingDate: '2023-08-10', status: 'Cancelled' }
  // Add more data as needed
];

// Function to populate the table with data
function populateTable() {
  const tableBody = document.getElementById('bookingsTable').getElementsByTagName('tbody')[0];

  for (const booking of bookingsData) {
    const row = tableBody.insertRow();

    const customerCell = row.insertCell(0);
    customerCell.innerHTML = booking.customerId;

    const projectCell = row.insertCell(1);
    projectCell.innerHTML = booking.projectName;

    const plotCell = row.insertCell(2);
    plotCell.innerHTML = booking.plotNo;

    const dateCell = row.insertCell(3);
    dateCell.innerHTML = booking.bookingDate;

    const statusCell = row.insertCell(4);
    statusCell.innerHTML = booking.status;
  }
}

// Call the function to populate the table on page load
window.onload = populateTable;
