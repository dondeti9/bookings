# bookings
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
  }
  table {
    border-collapse: collapse;
    width: 100%;
    border: 1px solid #ddd;
  }
  th, td {
    text-align: left;
    padding: 8px;
  }
  th {
    background-color: #f2f2f2;
    cursor: pointer;
  }
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
</style>
<title>Bookings Section</title>
</head>
<body>
<h1>Bookings Section</h1>
<table id="bookingsTable">
  <tr>
    <th onclick="sortTable(0)">Customer ID</th>
    <th onclick="sortTable(1)">Project Name</th>
    <th onclick="sortTable(2)">Plot No.</th>
    <th onclick="sortTable(3)">Booking Date</th>
    <th onclick="sortTable(4)">Status</th>
  </tr>
  <tr>
    <td>001</td>
    <td>Project A</td>
    <td>101</td>
    <td>2023-08-11</td>
    <td>Confirmed</td>
  </tr>
  <tr>
    <td>002</td>
    <td>Project B</td>
    <td>202</td>
    <td>2023-08-12</td>
    <td>Pending</td>
  </tr>
  <tr>
    <td>003</td>
    <td>Project C</td>
    <td>303</td>
    <td>2023-08-10</td>
    <td>Cancelled</td>
  </tr>
  <!-- Add more rows as needed -->
</table>



