const express = require("express");
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Sample data
let todos = [
  { id: 1, title: "Task 1", completed: false },
  { id: 2, title: "Task 2", completed: true },
];

// Routes
// GET all todos
app.get("/todos", (req, res) => {
  res.json(todos);
});

// GET todo by id
app.get("/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find((todo) => todo.id === id);
  if (todo) {
    res.json(todo);
  } else {
    res.status(404).json({ error: "Todo not found" });
  }
});

// POST a new todo
app.post("/todos", (req, res) => {
  const todo = req.body;
  todo.id = todos.length + 1;
  todos.push(todo);
  res.status(201).json(todo);
});

// PUT update todo by id
app.put("/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const todoIndex = todos.findIndex((todo) => todo.id === id);
  if (todoIndex !== -1) {
    todos[todoIndex] = { ...todos[todoIndex], ...req.body };
    res.json(todos[todoIndex]);
  } else {
    res.status(404).json({ error: "Todo not found" });
  }
});

// DELETE todo by id
app.delete("/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  todos = todos.filter((todo) => todo.id !== id);
  res.sendStatus(204);
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
