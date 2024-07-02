//How to convert two-dimensional array into an object in JavaScript ?
function arr2obj(arr) {
  // Create an empty object
  let obj = {};

  arr.forEach((v) => {
    // Extract the key and the value
    let key = v[0];
    let value = v[1];

    // Add the key and value to
    // the object
    obj[key] = value;
  });

  // Return the object
  return obj;
}

console.log(
  arr2obj([
    ["John", 12],
    ["Jack", 13],
    ["Matt", 14],
    ["Maxx", 15],
  ]),
);
//{ John: 12, Jack: 13, Matt: 14, Maxx: 15 }
