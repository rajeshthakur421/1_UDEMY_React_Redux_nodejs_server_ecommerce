//How to empty an array in JavaScript ?
let Arr = [1, 2, 3, 4, 5];

console.log("Array Elements: " + Arr);
console.log("Array Length: " + Arr.length);

function emptyArray() {
  Arr = [];
  //Arr.length = 0;
  //array.splice(0, array.length);
  /*
    while (Arr.length > 0) {
        Arr.pop();
    }
  */
  console.log("Empty Array Elements: " + Arr);
  console.log("Empty Array Length: " + Arr.length);
}

emptyArray();
