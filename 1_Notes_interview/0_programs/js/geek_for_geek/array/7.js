//How to insert an item into array at specific index in JavaScript
function insertElement() {
  let arr = [1, 2, 3, 4, 5];
  let index = 2;
  let element = -99;

  // Shift all elements one place
  // to the back until index
  for (let i = arr.length; i > index; i--) {
    arr[i] = arr[i - 1];
  }

  // Insert the element at the index
  arr[index] = element;

  console.log(arr);
}

insertElement();
