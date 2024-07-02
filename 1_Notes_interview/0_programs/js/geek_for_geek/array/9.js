//find the sum of all elements of a given array
// Creating array
let arr = [4, 8, 7, 13, 12];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}

// arr.forEach((x) => {
//   sum += x;
// });

console.log("Sum is " + sum); // Prints: 44
