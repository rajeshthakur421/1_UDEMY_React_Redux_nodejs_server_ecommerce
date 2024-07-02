//How to Remove Duplicates from an Array of Objects in JavaScript?
function removeDuplicates() {
  // Create an array of objects
  books = [
    { title: "C++", author: "Bjarne" },
    { title: "Java", author: "James" },
    { title: "Python", author: "Guido" },
    { title: "Java", author: "James" },
  ];

  // Declare a new array
  let newArray = [];

  // Declare an empty object
  let uniqueObject = {};

  // Loop for the array elements
  for (let i in books) {
    // Extract the title
    objTitle = books[i]["title"];

    // Use the title as the index
    uniqueObject[objTitle] = books[i];
  }

  // Loop to push unique object into array
  for (i in uniqueObject) {
    newArray.push(uniqueObject[i]);
  }

  // Display the unique objects
  console.log(newArray);
}
removeDuplicates();
