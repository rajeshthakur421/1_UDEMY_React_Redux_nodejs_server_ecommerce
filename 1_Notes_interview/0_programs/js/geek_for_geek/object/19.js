//How to create an object from the given key-value pairs using JavaScript
let object = {};
let keys = [0, 1, 2];
let values = ["GeeksforGeeks", "Hello JavaScript", "Hello React"];
for (let i = 0; i < keys.length; i++) {
  object[keys[i]] = values[i];
}
console.log(object);

2;
function createObject(keys, values) {
  const object = {};

  for (let i = 0; i < keys.length; i++) {
    object[keys[i]] = values[i];
  }

  return object;
}

const keys = [0, 1, 2];
const values = ["GeeksforGeeks", "Hello JavaScript", "Hello React"];

const object = createObject(keys, values);

console.log(object);
