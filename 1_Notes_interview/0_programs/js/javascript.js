1; /* 1,2,3 using promise print */
function printNumber(number) {
  return new Promise((resolve) => {
    console.log(number);
    resolve();
  });
}

printNumber(1)
  .then(() => printNumber(2))
  .then(() => printNumber(3))
  .catch((error) => console.error(error));

2; /*paralel run p1 and p2 using promise*/

function printNumber(number) {
  return new Promise((resolve) => {
    console.log(number);
    resolve();
  });
}

function printNumbersParallel() {
  const p1 = printNumber(1);
  const p2 = printNumber(2);

  Promise.all([p1, p2])
    .then(() => {
      console.log("Both promises are resolved");
    })
    .catch((error) => console.error(error));
}

printNumbersParallel();

3; /* remove user salary from middleware */
const express = require("express");
const app = express();

// Sample user data
const users = [
  { id: 1, name: "Alice", salary: 50000 },
  { id: 2, name: "Bob", salary: 60000 },
];

// Middleware to remove salary from user object
function removeSalary(req, res, next) {
  if (req.user && req.user.salary) {
    delete req.user.salary;
  }
  next();
}

// Middleware to attach a user object to the request (for demonstration purposes)
app.use((req, res, next) => {
  const userId = req.query.userId; // Assume userId is passed as a query parameter
  if (userId) {
    req.user = users.find((user) => user.id == userId);
  }
  next();
});

// Apply removeSalary middleware to the relevant route
app.use("/user", removeSalary);

app.get("/user", (req, res) => {
  res.json(req.user);
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

4; /**create custom directory */

const fs = require("fs");
const path = require("path");

function createCustomDirectory(dirName) {
  const dirPath = path.join(__dirname, dirName);

  fs.mkdir(dirPath, { recursive: true }, (err) => {
    if (err) {
      return console.error(`Error creating directory: ${err.message}`);
    }
    console.log(`Directory created successfully: ${dirPath}`);
  });
}

// Usage example
createCustomDirectory("my-custom-directory");

5; /**program on jwt token */
const express = require("express");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const { addUser, findUser } = require("./users");

const app = express();
const port = 3000;

const secretKey = "your_secret_key"; // Replace with your actual secret key

app.use(bodyParser.json());

app.post("/register", (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).send("Username and password are required");
  }
  const user = addUser(username, password);
  res.status(201).send({ message: "User registered successfully", user });
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = findUser(username);
  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).send("Invalid username or password");
  }
  const token = jwt.sign({ username: user.username }, secretKey, {
    expiresIn: "1h",
  });
  res.send({ message: "Logged in successfully", token });
});

const authenticateJWT = (req, res, next) => {
  const token =
    req.headers.authorization && req.headers.authorization.split(" ")[1];
  if (!token) {
    return res.sendStatus(403);
  }
  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }
    req.user = user;
    next();
  });
};

app.get("/protected", authenticateJWT, (req, res) => {
  res.send("This is a protected route");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

6; /** pass 3 input values in function and check max */
function findMax(a, b, c) {
  return Math.max(a, b, c);
}

// Test cases
console.log(findMax(1, 2, 3)); // Output: 3
console.log(findMax(10, 5, 8)); // Output: 10
console.log(findMax(-1, -5, -3)); // Output: -1
console.log(findMax(7, 7, 7)); // Output: 7
console.log(findMax(2, 3, 1)); // Output: 3
console.log(findMax(0, 100, 50)); // Output: 100

7; /**Program to Witte that can access all the http methods using express */
const express = require("express");
const app = express();
const port = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// GET method route
app.get("/", (req, res) => {
  res.send("Received a GET request");
});

// POST method route
app.post("/", (req, res) => {
  res.send("Received a POST request");
});

// PUT method route
app.put("/", (req, res) => {
  res.send("Received a PUT request");
});

// DELETE method route
app.delete("/", (req, res) => {
  res.send("Received a DELETE request");
});

// PATCH method route
app.patch("/", (req, res) => {
  res.send("Received a PATCH request");
});

// OPTIONS method route
app.options("/", (req, res) => {
  res.send("Received an OPTIONS request");
});

// HEAD method route
app.head("/", (req, res) => {
  res.send("Received a HEAD request");
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

8; /**Vowels program */
function identifyVowels(str) {
  const vowels = "aeiouAEIOU";
  const foundVowels = [];

  for (let char of str) {
    if (vowels.includes(char) && !foundVowels.includes(char)) {
      foundVowels.push(char);
    }
  }

  return foundVowels;
}

// Test the function
const testString2 = "Hello, World!";
console.log(
  `Vowels in "${testString2}": ${identifyVowels(testString2).join(", ")}`,
); // Output: e, o

function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

// Test the function
const testString = "Hello, World!";
console.log(`Number of vowels in "${testString}": ${countVowels(testString)}`); // Output: 3

9; /**Create childprocess */
const { exec } = require("child_process");

exec("ls -l", (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
});

10; /**Array destructing program */
// Original array
const colors = ["red", "green", "blue"];

// Destructuring assignment
const [firstColor, secondColor, thirdColor] = colors;

console.log(firstColor); // Output: 'red'
console.log(secondColor); // Output: 'green'
console.log(thirdColor); // Output: 'blue'

11; /**Deep copy program */
function deepCopy(obj) {
  // If obj is null or not an object, return it directly
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  // Create a new object or array based on the type of obj
  const newObj = Array.isArray(obj) ? [] : {};

  // Iterate over each property of obj
  for (let key in obj) {
    // If the property is an object or array, recursively call deepCopy
    if (typeof obj[key] === "object" && obj[key] !== null) {
      newObj[key] = deepCopy(obj[key]);
    } else {
      // Otherwise, copy the property value directly
      newObj[key] = obj[key];
    }
  }

  return newObj;
}

// Test the deep copy function
const obj1 = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    country: "USA",
  },
  hobbies: ["reading", "sports"],
};

const obj2 = deepCopy(obj1);

// Modify obj2 to demonstrate deep copy
obj2.name = "Alice";
obj2.address.city = "Los Angeles";
obj2.hobbies.push("cooking");

console.log("Original object:", obj1);
console.log("Deep copy:", obj2);

12; /**Shallow copy program */
function shallowCopy(obj) {
  // If obj is null or not an object, return it directly
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  // Create a new object with the same prototype as obj
  const newObj = Object.create(Object.getPrototypeOf(obj));

  // Copy all enumerable own properties of obj to newObj
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = obj[key];
    }
  }

  return newObj;
}

// Test the shallow copy function
const obj1 = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    country: "USA",
  },
  hobbies: ["reading", "sports"],
};

const obj2 = shallowCopy(obj1);

// Modify obj2 to demonstrate shallow copy
obj2.name = "Alice";
obj2.address.city = "Los Angeles";
obj2.hobbies.push("cooking");

console.log("Original object:", obj1);
console.log("Shallow copy:", obj2);

13; /**aws */
function addNumbers(num1, num2) {
  return num1 + num2;
}

// Example usage:
const result = addNumbers(5, 10);
console.log("The sum is:", result); // Output: The sum is: 15

//aws lambda function convert of above
exports.handler = async (event) => {
  // Parse the input event to extract num1 and num2
  const { num1, num2 } = JSON.parse(event.body);

  // Perform the addition
  const sum = addNumbers(num1, num2);

  // Return the result
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      sum: sum,
    }),
  };
  return response;
};

// Original function
function addNumbers(num1, num2) {
  return num1 + num2;
}

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
