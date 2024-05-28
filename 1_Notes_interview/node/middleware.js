1.***************************************
const express = require('express');
const app = express();

// Custom middleware function
function myMiddleware(req, res, next) {
  console.log('Middleware function executed');
  next(); // Call the next middleware function in the stack
}

// Register middleware globally
app.use(myMiddleware);

//locally
app.get('/', myMiddleware, (req, res) => {
    res.send('Hello World!');
  });
  

// Route handler
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
