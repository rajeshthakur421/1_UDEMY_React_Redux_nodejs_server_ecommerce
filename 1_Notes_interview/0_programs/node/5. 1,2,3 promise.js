// Function to create a promise that resolves after a specified delay
function createPromise(value, delay) {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log(value);
        resolve();
      }, delay);
    });
  }
  
  // Chain promises to print numbers sequentially
  createPromise(1, 1000) // Print 1 after 1000 ms (1 second)
    .then(() => createPromise(2, 500)) // Print 2 after 500 ms (0.5 seconds)
    .then(() => createPromise(3, 300)); // Print 3 after 300 ms (0.3 seconds)
  