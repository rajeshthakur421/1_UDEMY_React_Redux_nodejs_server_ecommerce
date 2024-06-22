/*
Microservices Structure
In this example, we'll create several microservices for basic eCommerce functionalities:

Product Service: Manages product information.
User Service: Handles user authentication and profile management.
Order Service: Manages order creation, retrieval, and processing.
Payment Service: Handles payment processing.
Gateway Service: Acts as an API gateway to route requests to the appropriate microservices and handle authentication.
*/

1; // product-service.js

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const port = 3001;

mongoose.connect("mongodb://localhost:27017/ecommerce", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const Product = mongoose.model("Product", { name: String, price: Number });

app.use(bodyParser.json());

// Get all products
app.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Add a new product
app.post("/products", async (req, res) => {
  const { name, price } = req.body;
  try {
    const product = new Product({ name, price });
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Product service listening at http://localhost:${port}`);
});

2; // user-service.js
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3002;

const users = [
  { id: 1, username: "john_doe", password: "password" },
  { id: 2, username: "jane_smith", password: "password" },
];

app.use(bodyParser.json());

// User authentication
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    (u) => u.username === username && u.password === password,
  );
  if (user) {
    // Generate JWT token
    const token = jwt.sign(
      { id: user.id, username: user.username },
      "secret_key",
      { expiresIn: "1h" },
    );
    res.json({ token });
  } else {
    res.status(401).json({ error: "Invalid credentials" });
  }
});

app.listen(port, () => {
  console.log(`User service listening at http://localhost:${port}`);
});

3; // order-service.js
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3003;

const orders = [];

app.use(bodyParser.json());

// Get all orders
app.get("/orders", (req, res) => {
  res.json(orders);
});

// Create a new order
app.post("/orders", (req, res) => {
  const { userId, productId, quantity } = req.body;
  const order = { userId, productId, quantity };
  orders.push(order);
  res.status(201).json(order);
});

app.listen(port, () => {
  console.log(`Order service listening at http://localhost:${port}`);
});

4; // payment-service.js
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3004;

app.use(bodyParser.json());

// Process payment
app.post("/payment", (req, res) => {
  const { userId, amount, cardDetails } = req.body;
  // Simulate payment processing
  setTimeout(() => {
    res.json({
      message: `Payment of $${amount} processed successfully for user ${userId}`,
    });
  }, 2000);
});

app.listen(port, () => {
  console.log(`Payment service listening at http://localhost:${port}`);
});

5; // gateway-service.js
const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const jwt = require("jsonwebtoken");

const app = express();
const port = 3000;

const secretKey = "secret_key";

app.use(bodyParser.json());

// Authenticate middleware
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      return res.status(403).json({ error: "Token verification failed" });
    }
    req.user = user;
    next();
  });
}

// Product service proxy
app.get("/products", authenticateToken, (req, res) => {
  axios
    .get("http://localhost:3001/products")
    .then((response) => res.json(response.data))
    .catch((error) => res.status(500).json({ error: "Internal Server Error" }));
});

// Order service proxy
app.get("/orders", authenticateToken, (req, res) => {
  axios
    .get("http://localhost:3003/orders")
    .then((response) => res.json(response.data))
    .catch((error) => res.status(500).json({ error: "Internal Server Error" }));
});

// Create order and payment
app.post("/create-order", authenticateToken, async (req, res) => {
  const { userId, productId, quantity, amount, cardDetails } = req.body;

  try {
    // Create order
    const orderResponse = await axios.post("http://localhost:3003/orders", {
      userId,
      productId,
      quantity,
    });
    const order = orderResponse.data;

    // Process payment
    const paymentResponse = await axios.post("http://localhost:3004/payment", {
      userId,
      amount,
      cardDetails,
    });
    const paymentResult = paymentResponse.data;

    res.json({ order, paymentResult });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Gateway service listening at http://localhost:${port}`);
});

6;
/*
node product-service.js
node user-service.js
node order-service.js
node payment-service.js
node gateway-service.js */
