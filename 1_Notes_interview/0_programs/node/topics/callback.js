1;
function addNumbers(num1, num2, callback) {
  const sum = num1 + num2;
  callback(sum);
}

addNumbers(3, 5, (result) => {
  console.log("The sum is:", result);
});

2;
function mainFunction(callback) {
  console.log("Performing operation...");
  // Use setTimeout to simulate an asynchronous operation
  setTimeout(function () {
    callback("Operation complete");
  }, 1000);
}

// Define the callback function
function callbackFunction(result) {
  console.log("Result: " + result);
}

// Call the main function with the callback function
mainFunction(callbackFunction);
//This code is contributed by Veerendra Singh Rajpoot
