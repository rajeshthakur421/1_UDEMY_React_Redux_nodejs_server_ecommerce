//How to remove a key-value pair from JavaScript object
let details = {
  name: "Alex",
  age: 30,
  country: "Canada",
};

console.log("Original Object: ", details);
details = Object.keys(details)
  .filter((objKey) => objKey !== "age")
  .reduce((newObj, key) => {
    newObj[key] = details[key];
    return newObj;
  }, {});
console.log(details);
