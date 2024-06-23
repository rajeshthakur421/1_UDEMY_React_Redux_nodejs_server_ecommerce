/*
const jwt = require("jsonwebtoken");
const secretKey = "your_secret_key"; // Replace with your own secret key
const user = {
  id: 1,
  username: "john_doe",
  email: "john.doe@example.com",
};

function generateToken(user) {
  .......
  const token = jwt.sign(payload, secretKey, { expiresIn: "1h" });
  return token;
}
function verifyToken(token) {
    ...........
    const decoded = jwt.verify(token, secretKey);
    return decoded;  
}

*/

const jwt = require("jsonwebtoken");

// Secret key used to sign the JWT
const secretKey = "your_secret_key"; // Replace with your own secret key

// User object (normally this would be fetched from a database)
const user = {
  id: 1,
  username: "john_doe",
  email: "john.doe@example.com",
};

// Function to generate a JWT token
function generateToken(user) {
  // Define payload (data you want to include in the token)
  const payload = {
    id: user.id,
    username: user.username,
    email: user.email,
  };

  // Sign the token with a secret key and expiration (optional)
  const token = jwt.sign(payload, secretKey, { expiresIn: "1h" });
  return token;
}

// Function to verify a JWT token
function verifyToken(token) {
  try {
    const decoded = jwt.verify(token, secretKey);
    return decoded; // Decoded payload if the token is valid
  } catch (error) {
    console.error("Error verifying token:", error.message);
    return null; // Return null if token is invalid
  }
}

// Generate a token
const token = generateToken(user);
console.log("Generated token:", token);

// Verify the token
const decodedToken = verifyToken(token);
if (decodedToken) {
  console.log("Decoded token:", decodedToken);
} else {
  console.log("Token is invalid.");
}
