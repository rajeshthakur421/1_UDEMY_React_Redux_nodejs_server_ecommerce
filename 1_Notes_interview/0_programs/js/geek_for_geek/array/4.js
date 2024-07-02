//Reverse an array in JavaScript
let original_array = [1, 2, 3, 4];

let reversed_array = [];
console.log("Original Array: ");
console.log(original_array);

for (let i = original_array.length - 1; i >= 0; i--) {
  reversed_array.push(original_array[i]);
}

console.log("Reversed Array: ");
console.log(reversed_array);

//using recursion
function reverseArray(arr) {
  if (arr.length === 0) {
    return [];
  } else {
    return [arr[arr.length - 1]].concat(
      reverseArray(arr.slice(0, arr.length - 1)),
    );
  }
}

const arr = [1, 2, 3, 4, 5];
const reversedArr = reverseArray(arr);
console.log(reversedArr);
