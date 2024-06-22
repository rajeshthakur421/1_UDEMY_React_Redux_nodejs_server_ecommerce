1;

console.log("Start");

setTimeout(() => {
  console.log("Timeout callback");
}, 0);

console.log("End");

2;
console.log("Start");

setTimeout(() => {
  console.log("Timeout callback");
}, 2000);

console.log("End");

3;
console.log("Fetching data...");

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((data) => {
    console.log("Data received:", data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

console.log("Processing other tasks...");
