//How to check whether an array includes a particular value or not in JavaScript
let fruits_array = [
  "mango",
  "banana",
  "apple",
  "pineapple",
  "pomegranate",
  "orange",
];

let valueChecker = (value) => {
  for (let i = 0; i < fruits_array.length; i++) {
    let current_value = fruits_array[i];
    if (value === current_value) {
      return value + " is present at index: " + i;
    }
  }
  return value + " is not included in this array..";
};

console.log(valueChecker("apple"));
console.log(valueChecker("app"));
console.log(valueChecker("banana"));

//using index
let fruits_array = [
  "mango",
  "banana",
  "apple",
  "pineapple",
  "pomegranate",
  "orange",
];

let checkValue = (value) => {
  if (fruits_array.indexOf(value) >= 0)
    return value + " is present at index : " + fruits_array.indexOf(value);
  else return value + " is not present in this array";
};

console.log(checkValue("apple"));
console.log(checkValue("app"));
console.log(checkValue("mango"));
