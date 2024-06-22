// Simulated asynchronous functions fetching data from APIs or performing async tasks
function fetchDataFromP1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: "Data from /p1" });
    }, 2000); // Simulating delay with setTimeout
  });
}

function fetchDataFromP2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: "Data from /p2" });
    }, 1500); // Simulating delay with setTimeout
  });
}

// Execute both promises in parallel
Promise.all([fetchDataFromP1(), fetchDataFromP2()])
  .then((results) => {
    const [p1Data, p2Data] = results;
    console.log("Data from /p1:", p1Data.data);
    console.log("Data from /p2:", p2Data.data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
