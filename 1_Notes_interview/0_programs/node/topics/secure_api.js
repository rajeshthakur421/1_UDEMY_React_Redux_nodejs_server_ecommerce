1; // using jwt
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");

// Secret key for JWT signing
const secretKey = "your_secret_key";

// Example: Generating and verifying JWT tokens
const token = jwt.sign({ username: "alice" }, secretKey, { expiresIn: "1h" });
const verifiedToken = jwt.verify(token, secretKey);

// Example: Express middleware to protect routes
app.use(expressJwt({ secret: secretKey }).unless({ path: ["/login"] }));

2; //using http
const https = require("https");
const fs = require("fs");

const options = {
  key: fs.readFileSync("path/to/private/key.pem"),
  cert: fs.readFileSync("path/to/certificate.pem"),
};

const server = https.createServer(options, app);
server.listen(443);

3; //Input Validation and Sanitization
const { body, validationResult } = require("express-validator");

app.post(
  "/login",
  [
    body("username").isLength({ min: 3 }),
    body("password").isLength({ min: 8 }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // Handle login logic
  },
);

4; //Rate Limiting
const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});

// Apply to all requests
app.use(limiter);

5; //Error Handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

6; //Security Headers
const helmet = require("helmet");

app.use(helmet());

7; //Logging and Monitoring
const morgan = require("morgan");

app.use(morgan("combined"));
