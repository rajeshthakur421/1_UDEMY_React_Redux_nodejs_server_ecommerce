//How to Get All Substrings of the Given String in JavaScript ?
function getAllSubstrings(str) {
  const substrings = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      substrings.push(str.slice(i, j));
    }
  }
  return substrings;
}

// Example usage:
const string = "abcd";
console.log(getAllSubstrings(string)); // Output: ["a", "ab", "abc", "abcd", "b", "bc", "bcd", "c", "cd", "d"]
