// Find Duplicate Elements in an Array
let check_duplicate_in_array = (input_array) => {
  let duplicate_elements = [];
  for (element of input_array) {
    if (input_array.indexOf(element) !== input_array.lastIndexOf(element)) {
      duplicate_elements.push(element);
    }
  }
  return [...new Set(duplicate_elements)];
};
let arr = [1, 1, 2, 2, 3, 3, 4, 5, 6, 1];
console.log(check_duplicate_in_array(arr));
