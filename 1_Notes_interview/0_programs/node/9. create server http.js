const http = require("http");

// Define port number
const port = 3000;

// Create a server instance
const server = http.createServer((req, res) => {
  // Set response header with content type
  res.writeHead(200, { "Content-Type": "text/plain" });

  // Send response to the client
  res.end("Hello, World!\n");
});

// Start the server
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
