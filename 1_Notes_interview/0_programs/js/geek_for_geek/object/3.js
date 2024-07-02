//Add an Object to an Array in JavaScript
function pushFunction() {
  list.push("Four", "Five");
  console.log(list);
}

let list = ["One", "Two", "Three"];
pushFunction();

//uisng ...
function addObject() {
  let obj = { name: "John", age: 30 };
  let arr = ["Alice", "Bob"];

  arr = [...arr, obj];

  console.log(arr);
}

addObject();
