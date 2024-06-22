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
