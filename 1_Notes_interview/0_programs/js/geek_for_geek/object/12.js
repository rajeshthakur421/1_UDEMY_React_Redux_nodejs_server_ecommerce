//Add an Object to an Array in JavaScript
function addObject() {
  let obj = { name: "John", age: 30 };
  let arr = ["Alice", "Bob"];

  arr = [...arr, obj];

  console.log(arr);
}

addObject();
