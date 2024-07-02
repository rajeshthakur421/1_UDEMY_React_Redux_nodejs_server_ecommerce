const express = require("express");
const app = express();
const port = 3000;

// Sample data (array of objects)
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
  { id: 4, name: "David" },
  { id: 5, name: "Eve" },
  { id: 6, name: "Frank" },
  { id: 7, name: "Grace" },
  { id: 8, name: "Hannah" },
  { id: 9, name: "Isaac" },
  { id: 10, name: "Jack" },
  // Add more sample data as needed
];

// Endpoint to get paginated users
app.get("/users", (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const pageSize = parseInt(req.query.pageSize) || 5;

  // Calculate start and end indexes based on page and pageSize
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  // Slice users array to get the paginated results
  const paginatedUsers = users.slice(startIndex, endIndex);

  // Simulated delay to mimic async operation (replace with DB query in real app)
  setTimeout(() => {
    res.json({
      page,
      pageSize,
      total: users.length,
      data: paginatedUsers,
    });
  }, 500); // Simulate 500ms delay
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
