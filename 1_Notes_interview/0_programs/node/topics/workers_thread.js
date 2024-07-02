1; //Create a file named worker.js for the worker thread:
const { workerData, parentPort } = require("worker_threads");

// Simulate a CPU-intensive task (e.g., calculating factorial)
function calculateFactorial(num) {
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
}

// Receive data from main thread
const { number } = workerData;

// Perform computation
const result = calculateFactorial(number);

// Send result back to main thread
parentPort.postMessage(result);

2; //Create another file named main.js for the main thread:
const { Worker } = require("worker_threads");

// Data to be passed to the worker thread
const workerData = { number: 5 };

// Create a new worker thread
const worker = new Worker("./worker.js", { workerData });

// Listen for messages from the worker thread
worker.on("message", (result) => {
  console.log(`Factorial of ${workerData.number} is: ${result}`);
});

// Handle errors in the worker thread
worker.on("error", (err) => {
  console.error("Worker error:", err);
});

// Handle worker thread exit
worker.on("exit", (code) => {
  if (code !== 0) {
    console.error(`Worker stopped with exit code ${code}`);
  }
});
