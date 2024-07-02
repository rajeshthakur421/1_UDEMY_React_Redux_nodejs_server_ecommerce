//How to Check a Key Exists in JavaScript Object
let exampleObj = {
  id: 1,
  remarks: "Good",
};

// Check for the keys
let output1 = exampleObj.hasOwnProperty("name");
let output2 = exampleObj.hasOwnProperty("remarks");
console.log(output1);
console.log(output2);
