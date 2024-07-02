//Add new elements at the beginning of an array using JavaScript
function addElementsAtBeginning(arr, elementsToAdd) {
  for (let i = elementsToAdd.length - 1; i >= 0; i--) {
    arr.unshift(elementsToAdd[i]);
    //arr.splice(0, 0, elementsToAdd[i]);
  }
  return arr;
}

// Example usage
let arr = [3, 4, 5];
let elementsToAdd = [1, 2];
arr = addElementsAtBeginning(arr, elementsToAdd);
console.log(arr); // Output: [1, 2, 3, 4, 5]
