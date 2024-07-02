//How to convert an object to string using JavaScript
// Input object
let obj_to_str = {
  name: "GeeksForGeeks",
  city: "Noida",
  contact: 2488,
};

// Converion to string
let myJSON = JSON.stringify(obj_to_str);
//let objStr = obj.toString();

// Display output
console.log(myJSON);
