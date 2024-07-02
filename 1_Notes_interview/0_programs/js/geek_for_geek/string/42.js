//JavaScript Program to Count the Occurrences of Each Character
let str = "GeeksforGeeks";
let result = {};

// Iterate over each character of the string
str.split("").forEach((char) => {
  // Increment the count of the character in the object
  result[char] = (result[char] || 0) + 1;
});

console.log("The occurrence of each letter in the given string is:", result);
