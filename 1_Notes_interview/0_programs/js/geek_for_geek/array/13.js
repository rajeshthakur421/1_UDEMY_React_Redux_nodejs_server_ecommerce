//How to replace an item from an array in JavaScript
let arr = [1, 2, 3, 4, 5];
let index = 2; // Index of the item to replace
let newValue = 10;

arr.forEach((item, i, array) => {
  if (i === index) {
    array[i] = newValue;
  }
});

console.log(arr); // [1, 2, 10, 4, 5]
