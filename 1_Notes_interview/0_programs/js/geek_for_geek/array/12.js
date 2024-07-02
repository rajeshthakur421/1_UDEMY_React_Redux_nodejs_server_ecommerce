//find if two arrays contain any common item in Javascript
// Declare two array
let array1 = ["a", "b", "c", "d"];
let array2 = ["k", "x", "z"];

// Function definition with passing two arrays
function findCommonElement(array1, array2) {
  // Loop for array1
  for (let i = 0; i < array1.length; i++) {
    // Loop for array2
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        // Return if common element found
        return true;
      }
    }
  }

  // Return if no common element exist
  return false;
}

console.log(findCommonElement(array1, array2));
