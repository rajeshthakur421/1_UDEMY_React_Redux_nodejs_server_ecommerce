1; //Remove the duplicate element from an array using set method
let array = [1, 2, 3, 2, 4, 5, 1];
let uniqueElements = new Set(array);
// Convert the Set back to an array (if array-like behavior is needed)
let uniqueArray = Array.from(uniqueElements);
console.log("Original Array:", array);
console.log("Array with duplicates removed:", uniqueArray);

2; //Remove the duplicate element from an array without in built method
function removeDuplicates(array) {
  let uniqueArray = [];
  // Iterate over the original array
  for (let i = 0; i < array.length; i++) {
    // Check if the current element is already in the uniqueArray
    if (uniqueArray.indexOf(array[i]) === -1) {
      uniqueArray.push(array[i]); // Add element to uniqueArray if it's not already there
    }
  }
  return uniqueArray;
}

let array = [1, 2, 3, 2, 4, 5, 1];
let uniqueArray = removeDuplicates(array);
console.log("Original Array:", array);
console.log("Array with duplicates removed:", uniqueArray);

3; //Reverse String
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Example usage:
let originalString = "Hello, world!";
let reversedString = reverseString(originalString);
console.log("Original String:", originalString);
console.log("Reversed String:", reversedString);

4; //Reverse String using loop
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

// Example usage:
let originalString = "Hello, world!";
let reversedString = reverseString(originalString);
console.log("Original String:", originalString);
console.log("Reversed String:", reversedString);

5; //Reverse String using recursion
function reverseString(str) {
  if (str === "") {
    return "";
  } else {
    return reverseString(str.substr(1)) + str.charAt(0);
  }
}

// Example usage:
let originalString = "Hello, world!";
let reversedString = reverseString(originalString);
console.log("Original String:", originalString);
console.log("Reversed String:", reversedString);

6; //Copy array from one to Another

//using slice
let array1 = [1, 2, 3, 4, 5];
let array2 = array1.slice();

console.log("Original Array:", array1);
console.log("Copied Array:", array2);

//using concate
let array1 = [1, 2, 3, 4, 5];
let array2 = array1.concat();

console.log("Original Array:", array1);
console.log("Copied Array:", array2);

//using Using Spread Operator
let array1 = [1, 2, 3, 4, 5];
let array2 = [...array1];

console.log("Original Array:", array1);
console.log("Copied Array:", array2);

//Using Array.from()
let array1 = [1, 2, 3, 4, 5];
let array2 = Array.from(array1);

console.log("Original Array:", array1);
console.log("Copied Array:", array2);

//Using forEach() Loop
let array1 = [1, 2, 3, 4, 5];
let array2 = [];

array1.forEach((element) => {
  array2.push(element);
});

console.log("Original Array:", array1);
console.log("Copied Array:", array2);

//Copy array1 into array2 using push method
let array1 = [1, 2, 3, 4, 5];
let array2 = [];

for (let i = 0; i < array1.length; i++) {
  array2.push(array1[i]);
}

console.log("Original Array:", array1);
console.log("Copied Array:", array2);

7; //Reverse the array element

//Using reverse() Method
let array = [1, 2, 3, 4, 5];
array.reverse();
console.log("Reversed Array:", array);

//Using a Loop for Manual Reversal
function reverseArray(arr) {
  let reversedArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArray.push(arr[i]);
  }
  return reversedArray;
}
let array = [1, 2, 3, 4, 5];
let reversedArray = reverseArray(array);

console.log("Original Array:", array);
console.log("Reversed Array:", reversedArray);

//Using Spread Operator (...) and reverse()
let array = [1, 2, 3, 4, 5];
let reversedArray = [...array].reverse();

console.log("Original Array:", array);
console.log("Reversed Array:", reversedArray);

8; //Delete the array element first last
// Using shift() and pop() Methods
let array = [1, 2, 3, 4, 5];
array.shift();
array.pop();
console.log("Modified Array:", array);

//using Slice
let array = [1, 2, 3, 4, 5];
let newArray = array.slice(1, -1);
console.log("Original Array:", array);
console.log("New Array without First and Last Elements:", newArray);

//without any methods
function deleteFirstLast(arr) {
  if (arr.length <= 2) {
    return []; // If array has 0 or 1 element, return empty array
  }

  let result = [];

  // Iterate through the array, skipping the first and last elements
  for (let i = 1; i < arr.length - 1; i++) {
    result.push(arr[i]);
  }

  return result;
}

let array = [1, 2, 3, 4, 5];

let newArray = deleteFirstLast(array);

console.log("Original Array:", array);
console.log("New Array without First and Last Elements:", newArray);

9; //Add the array element first last by using splice
let array = [2, 3, 4]; // Original array without first and last elements
array.splice(0, 0, 1); // Insert 1 at index 0 (beginning)
array.splice(array.length, 0, 5); // Insert 5 at the end
console.log("Modified Array:", array);

10; //Delete the given element from array
//Using splice() Method
let array = [1, 2, 3, 4, 5];
let elementToDelete = 3; // Element to delete
// Find the index of the element to delete
let index = array.indexOf(elementToDelete);
if (index !== -1) {
  // Use splice to remove the element at the found index
  array.splice(index, 1);
}
console.log("Modified Array:", array);

//using filter
let array = [1, 2, 3, 4, 5];
let elementToDelete = 3; // Element to delete
// Create a new array excluding the element to delete
let newArray = array.filter((item) => item !== elementToDelete);
console.log("Original Array:", array);
console.log("New Array without Element:", newArray);

//delete without methods
function deleteElementFromArray(arr, elementToDelete) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== elementToDelete) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

let array = [1, 2, 3, 4, 5];
let elementToDelete = 3;

let newArray = deleteElementFromArray(array, elementToDelete);

console.log("Original Array:", array);
console.log("New Array without Element:", newArray);

11; //Check the given element are available in array or not
function elementExists(arr, element) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      return true;
    }
  }
  return false;
}

let array = [1, 2, 3, 4, 5];
let elementToFind = 3;

if (elementExists(array, elementToFind)) {
  console.log(`Element ${elementToFind} exists in the array.`);
} else {
  console.log(`Element ${elementToFind} does not exist in the array.`);
}

//using includes
function elementExists(arr, element) {
  return arr.includes(element);
}

let array = [1, 2, 3, 4, 5];
let elementToFind = 3;

if (elementExists(array, elementToFind)) {
  console.log(`Element ${elementToFind} exists in the array.`);
} else {
  console.log(`Element ${elementToFind} does not exist in the array.`);
}

//using indexOf
function elementExists(arr, element) {
  return arr.indexOf(element) !== -1;
}

let array = [1, 2, 3, 4, 5];
let elementToFind = 3;

if (elementExists(array, elementToFind)) {
  console.log(`Element ${elementToFind} exists in the array.`);
} else {
  console.log(`Element ${elementToFind} does not exist in the array.`);
}

12; //Check the no of occurrence in string/array
function countOccurrences(str, substring) {
  let count = 0;
  let index = str.indexOf(substring);
  while (index !== -1) {
    count++;
    index = str.indexOf(substring, index + 1);
  }
  return count;
}

let text = "hello world hello";
let substringToFind = "hello";

let occurrences = countOccurrences(text, substringToFind);
console.log(`"${substringToFind}" occurs ${occurrences} times in "${text}".`);

//using reduce
function countOccurrences(arr, element) {
  return arr.reduce((count, currentValue) => {
    return count + (currentValue === element ? 1 : 0);
  }, 0);
}

let array = [1, 2, 1, 3, 1, 4, 1];
let elementToFind = 1;

let occurrences = countOccurrences(array, elementToFind);
console.log(`${elementToFind} occurs ${occurrences} times in the array.`);

//using loop
function countOccurrences(arr, element) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      count++;
    }
  }
  return count;
}

let array = [1, 2, 1, 3, 1, 4, 1];
let elementToFind = 1;

let occurrences = countOccurrences(array, elementToFind);
console.log(`${elementToFind} occurs ${occurrences} times in the array.`);

13; //Shift the 0 element from array to last in array
function moveZerosToEnd(arr) {
  // Initialize a count for non-zero elements
  let count = 0;

  // Iterate through the array and move non-zero elements to the front
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      // Swap non-zero element to the front
      let temp = arr[count];
      arr[count] = arr[i];
      arr[i] = temp;

      // Increment count of non-zero elements
      count++;
    }
  }

  return arr;
}

let array = [0, 2, 0, 1, 0, 4, 0, 3];
let result = moveZerosToEnd(array);

console.log("Original Array:", array);
console.log("Array with 0s moved to end:", result);

14; //pass n input values in function and check max
function findMax(...args) {
  if (args.length === 0) {
    return undefined; // Handle case with no arguments
  }
  let max = args[0]; // Assume the first element is the maximum initially
  // Iterate through the remaining elements and update 'max' if a larger element is found
  for (let i = 1; i < args.length; i++) {
    if (args[i] > max) {
      max = args[i];
    }
  }
  return max;
}
// Example usage:
let maxValue = findMax(10, 5, 8, 15, 3);
console.log(`The maximum value is: ${maxValue}`);

14; //Write a function in JavaScript that takes an array of numbers as input
//and returns the sum of all positive numbers. Ensure the function handles edge cases
//like empty arrays and arrays containing only negative numbers.
function sumOfPositiveNumbers(arr) {
  return arr.reduce((sum, num) => {
    if (num > 0) {
      return sum + num;
    }
    return sum;
  }, 0);
}

// Example usage:
let numbers = [-1, 2, 3, -4, 5];
let result = sumOfPositiveNumbers(numbers);
console.log("Sum of positive numbers:", result); // Output: Sum of positive numbers: 10

15; //Given an array of integers, write a function to move all 0 elements to the end of the array
// while maintaining the relative order of the non-zero elements.
function moveZerosToEnd(arr) {
  let j = 0; // pointer to place non-zero elements

  // Move non-zero elements to the front of the array
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[j++] = arr[i];
    }
  }

  // Fill the rest of the array with 0s
  while (j < arr.length) {
    arr[j++] = 0;
  }

  return arr;
}

// Example usage:
let array = [0, 2, 0, 1, 0, 4, 0, 3];
let result = moveZerosToEnd(array);
console.log("Array after moving 0s to the end:", result);

16; //Write a function to rotate elements of an array to the right by a given number of steps.
function rotateArrayRight(arr, steps) {
  if (arr.length === 0) {
    return arr; // Return empty array if input array is empty
  }

  const n = arr.length;
  steps = steps % n; // Adjust steps in case it's greater than array length

  // If steps are negative, convert them to positive equivalent
  if (steps < 0) {
    steps = n + steps;
  }

  // Rotate the array elements to the right
  for (let i = 0; i < steps; i++) {
    // Take out the last element
    const last = arr[arr.length - 1];
    // Shift all elements to the right by one position
    for (let j = arr.length - 1; j > 0; j--) {
      arr[j] = arr[j - 1];
    }
    // Place the last element at the beginning
    arr[0] = last;
  }

  return arr;
}

// Example usage:
const array = [1, 2, 3, 4, 5];
const steps = 2;
console.log(rotateArrayRight(array, steps)); // Output: [4, 5, 1, 2, 3]

17; //Write a function to remove null and undefined values from an array.
function removeNullAndUndefined(arr) {
  // Filter out null and undefined values
  return arr.filter((value) => value !== null && value !== undefined);
}

// Example usage:
const array = [1, null, 2, undefined, 3, 4, null, undefined, 5];
console.log(removeNullAndUndefined(array)); // Output: [1, 2, 3, 4, 5]

//using loop
function removeNullAndUndefined(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== null && arr[i] !== undefined) {
      result.push(arr[i]);
    }
  }
  return result;
}

// Example usage:
const array = [1, null, 2, undefined, 3, 4, null, undefined, 5];
console.log(removeNullAndUndefined(array)); // Output: [1, 2, 3, 4, 5]
