1.***********************

npm install express jsonwebtoken

const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
const port = 3000;

app.use(express.json());

// Secret key for JWT
const secretKey = 'your_secret_key';

// Sample user data
const users = [
  { id: 1, username: 'user1', password: 'password1' },
  { id: 2, username: 'user2', password: 'password2' }
];

// Login route
app.post('/login', (req, res) => {
  // Get username and password from request body
  const { username, password } = req.body;

  // Check if user exists and password matches
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    // Generate JWT token
    const token = jwt.sign({ id: user.id, username: user.username }, secretKey, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ error: 'Invalid username or password' });
  }
});

// Protected route
app.get('/protected', authenticateJWT, (req, res) => {
  res.json({ message: 'Protected route accessed successfully', user: req.user });
});

// Middleware for JWT authentication
function authenticateJWT(req, res, next) {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        return res.status(403).json({ error: 'JWT verification failed' });
      }
      req.user = decoded;
      next();
    });
  } else {
    res.status(401).json({ error: 'JWT token not provided' });
  }
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

2.********************************************
