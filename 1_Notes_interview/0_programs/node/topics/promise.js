1; //promise
function fetchData() {
  return new Promise((resolve, reject) => {
    // Simulate an API request
    setTimeout(() => {
      const data = { message: "Data fetched successfully" };
      resolve(data);
    }, 1000);
  });
}

// Using the custom fetchData
fetchData()
  .then((data) => {
    console.log(data.message);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

2; //Promise all
// Example functions that return promises
function asyncFunction1() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Result of asyncFunction1"), 1000);
  });
}

function asyncFunction2() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Result of asyncFunction2"), 1500);
  });
}

// Using Promise.all to wait for all promises to resolve
async function fetchData() {
  try {
    const results = await Promise.all([asyncFunction1(), asyncFunction2()]);

    console.log("All promises resolved successfully");
    console.log("Results:", results);
  } catch (error) {
    console.error("Error occurred:", error);
  }
}

// Calling the fetchData function
fetchData();

3; // promise chain
let countValue = new Promise(function (resolve, reject) {
  resolve("Promise resolved");
});

countValue
  .then(function successValue(result) {
    console.log(result);
  })

  .then(function successValue1() {
    console.log("You can call multiple functions this way.");
  });
