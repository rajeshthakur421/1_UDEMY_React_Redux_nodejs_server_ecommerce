//JavaScript Program to find Smallest and Largest Word in a String
function myFunction(str) {
  let words = str.split(" ");
  if (words.length === 0) {
    return { smallest: "", largest: "" };
  }

  let smallest = words[0];
  let largest = words[0];

  for (let i = 1; i < words.length; i++) {
    let word = words[i];
    if (word.length < smallest.length) {
      smallest = word;
    }
    if (word.length > largest.length) {
      largest = word;
    }
  }
  return { smallest, largest };
}

let inputStr = "GeeksforGeeks a computer science portal.";
let result = myFunction(inputStr);
console.log(result);
