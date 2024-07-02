//Sort Words in Alphabetical Order
// Implementing bubble sort function
function bubbleSort(wordsArray) {
  // Getting size of array
  const length = wordsArray.length;
  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      if (
        wordsArray[j].localeCompare(wordsArray[j + 1], undefined, {
          sensitivity: "base",
        }) > 0
      ) {
        // Swaping word in the array
        const temp = wordsArray[j];
        wordsArray[j] = wordsArray[j + 1];
        wordsArray[j + 1] = temp;
      }
    }
  }
  return wordsArray;
}

const words = [
  "JavaScript",
  "Program",
  "to",
  "Sort",
  "Words",
  "in",
  "Alphabetical",
  "Order",
];

const sortedWords = bubbleSort(words);

// Getting the sorted array output
console.log(sortedWords);
