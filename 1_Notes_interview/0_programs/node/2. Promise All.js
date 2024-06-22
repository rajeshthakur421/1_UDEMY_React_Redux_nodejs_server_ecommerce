// Function simulating fetching data from an API with a delay
function fetchDataFromAPI1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data from API 1");
    }, 2000); // Simulate delay with setTimeout
  });
}

// Function simulating fetching data from another API with a delay
function fetchDataFromAPI2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data from API 2");
    }, 1500); // Simulate delay with setTimeout
  });
}

Promise.all([fetchDataFromAPI1(), fetchDataFromAPI2()])
  .then((results) => {
    console.log("All data fetched successfully");
    console.log("Data from API 1:", results[0]);
    console.log("Data from API 2:", results[1]);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
