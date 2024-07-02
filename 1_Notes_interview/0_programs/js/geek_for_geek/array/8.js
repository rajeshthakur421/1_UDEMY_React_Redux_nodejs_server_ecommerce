//How to convert a number into array in JavaScript
const number = 12345;
const array = [];
const numStr = String(number);

for (let i = 0; i < numStr.length; i++) {
  array.push(Number(numStr[i]));
}

console.log(array);
