// Function simulating fetching data from an API with a delay
function fetchDataFromAPI1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data from API 1");
    }, 2000); // Simulate delay with setTimeout
  });
}

// Function simulating fetching data from another API with a shorter delay
function fetchDataFromAPI2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data from API 2");
    }, 1500); // Simulate shorter delay with setTimeout
  });
}

Promise.race([fetchDataFromAPI1(), fetchDataFromAPI2()])
  .then((firstResult) => {
    console.log("First result received:", firstResult);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
