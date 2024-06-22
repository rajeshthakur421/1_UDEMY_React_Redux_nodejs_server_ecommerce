//Use the cluster module to create an HTTP server that utilizes multiple CPU cores.

const cluster = require("cluster");
const http = require("http");
const numCPUs = require("os").cpus().length;

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  // Fork workers for each CPU core
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  // Handle when a worker exits
  cluster.on("exit", (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
    cluster.fork(); // Replace the dead worker
  });
} else {
  // Workers can share any TCP connection
  // Start an HTTP server
  http
    .createServer((req, res) => {
      res.writeHead(200);
      res.end("Hello, World!\n");
    })
    .listen(3000);

  console.log(`Worker ${process.pid} started`);
}
