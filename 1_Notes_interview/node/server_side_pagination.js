const express = require("express");
const app = express();
const port = 3000;

// Sample data
const todos = [
  { id: 1, title: "Task 1" },
  { id: 2, title: "Task 2" },
  // Add more sample data
];

// Route to fetch paginated todos
app.get("/todos", (req, res) => {
  const page = parseInt(req.query.page) || 1; // Default to page 1 if not provided
  const pageSize = 10; // Number of items per page
  const startIndex = (page - 1) * pageSize;
  const endIndex = page * pageSize;

  const paginatedTodos = todos.slice(startIndex, endIndex);

  res.json({
    page,
    pageSize,
    totalPages: Math.ceil(todos.length / pageSize),
    todos: paginatedTodos,
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
