//JavaScript Program to Get All Unique Values (Remove Duplicates) in an Array
// Creating a 3x4 two-dimensional array
let Arr = [
  "Manish",
  "Chandan",
  "Piyush",
  "Sunil",
  "Pankaj",
  "Piyush",
  "Pankaj",
  "Tiny",
  "Chandan",
  "Manish",
];

let outputArray = [];

// Count variable is used to add the
// new unique value only once in the
// outputArray.
let count = 0;

// Start variable is used to set true
// if a repeated duplicate value is
// encontered in the output array.
let start = false;

for (let j = 0; j < Arr.length; j++) {
  for (let k = 0; k < outputArray.length; k++) {
    if (Arr[j] == outputArray[k]) {
      start = true;
    }
  }
  count++;
  if (count == 1 && start == false) {
    outputArray.push(Arr[j]);
  }
  start = false;
  count = 0;
}

console.log(outputArray);
