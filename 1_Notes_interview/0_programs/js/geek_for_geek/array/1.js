//Get the first and last item in an array using JavaScript
function getFirstAndLast(array) {
  let firstItem, lastItem;
  for (let i = 0; i < array.length; i++) {
    if (i === 0) {
      firstItem = array[i]; // Assign first item
    }
    if (i === array.length - 1) {
      lastItem = array[i]; // Assign last item
    }
  }
  return { first: firstItem, last: lastItem };
}

const arr = [1, 2, 3, 4, 5];
const result = getFirstAndLast(arr);
console.log(`First item: ${result.first}, Last item: ${result.last}`); // Output: First item: 1, Last item: 5
