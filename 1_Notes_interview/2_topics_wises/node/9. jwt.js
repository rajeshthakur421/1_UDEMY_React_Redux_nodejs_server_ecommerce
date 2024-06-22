header:
{
  "alg" : "HS256",
  "typ" : "JWT"
}
Payload:
{
  "id" : 123456789,
  "name" : "Joseph"
}
Secret: GeeksForGeeks


1; //EXAMPLE 1
const jwt = require('jsonwebtoken');

// Secret key for signing and verifying JWTs (keep it secret and secure)
const secretKey = 'your_secret_key';

// Sample user data (could be retrieved from a database)
const user = {
  id: 1,
  username: 'john_doe',
  role: 'admin'
};

// Generate a JWT token
const token = jwt.sign(user, secretKey, { expiresIn: '1h' });

console.log('Generated JWT:', token);

// Verify the JWT token
jwt.verify(token, secretKey, (err, decoded) => {
  if (err) {
    console.error('JWT Verification Error:', err);
    return;
  }
  console.log('Decoded JWT:', decoded);
});


2; //example 2
const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 3000;

// Secret key for signing and verifying JWTs (keep it secret and secure)
const secretKey = 'your_secret_key';

// Sample user data (could be retrieved from a database)
const users = [
  { id: 1, username: 'john_doe', password: 'password', role: 'admin' },
  { id: 2, username: 'jane_smith', password: 'password', role: 'user' }
];

// Middleware to parse JSON bodies
app.use(express.json());

// Login route to authenticate users and generate JWT
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Check if username and password are correct
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  // Generate JWT token
  const token = jwt.sign({ id: user.id, username: user.username, role: user.role }, secretKey, { expiresIn: '1h' });
  res.json({ token });
});

// Protected route example
app.get('/profile', authenticateToken, (req, res) => {
  res.json(req.user);
});

// Middleware to authenticate JWT token
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Token verification failed' });
    }
    req.user = user;
    next();
  });
}

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
