Microservices architecture involves breaking down a large application into smaller, independently deployable services 
that are focused on specific business functionalities. Each microservice is responsible for a single task and communicates 
with other services via APIs. Here's how you can implement microservices in Node.js:

// user-service.js
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let users = [];

// Create a new user
app.post('/users', (req, res) => {
  const { id, name } = req.body;
  users.push({ id, name });
  res.json({ message: 'User created successfully', user: { id, name } });
});

// Get all users
app.get('/users', (req, res) => {
  res.json(users);
});

app.listen(port, () => {
  console.log(`UserService is running on port ${port}`);
});


// product-service.js
const express = require('express');
const app = express();
const port = 4000;

app.use(express.json());

let products = [];

// Create a new product
app.post('/products', (req, res) => {
  const { id, name, price } = req.body;
  products.push({ id, name, price });
  res.json({ message: 'Product created successfully', product: { id, name, price } });
});

// Get all products
app.get('/products', (req, res) => {
  res.json(products);
});

app.listen(port, () => {
  console.log(`ProductService is running on port ${port}`);
});
