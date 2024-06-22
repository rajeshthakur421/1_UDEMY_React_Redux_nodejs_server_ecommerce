// Custom middleware function
const loggerMiddleware = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next(); // Call the next middleware function
};

// Add middleware to handle all requests
app.use(loggerMiddleware);

2,
// Middleware for authentication
const authenticateMiddleware = (req, res, next) => {
    if (req.headers.authorization === 'Bearer token') {
        next(); // Proceed to the next middleware
    } else {
        res.status(401).send('Unauthorized');
    }
};

// Middleware for logging
const loggerMiddleware = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next(); // Proceed to the next middleware
};

// Apply middleware to specific routes
app.get('/protected', authenticateMiddleware, loggerMiddleware, (req, res) => {
    res.send('Protected Route');
});

3

// Error handling middleware
const errorHandlerMiddleware = (err, req, res, next) => {
    console.error('An error occurred:', err);
    res.status(500).send('Internal Server Error');
};

// Apply error handling middleware
app.use(errorHandlerMiddleware);

4



