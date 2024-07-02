//How to remove Objects from Associative Array in JavaScript
function deleteObjects() {
  // Declaring an associative
  // array of objects
  let arr = new Object();

  // Adding objects in array
  arr["key"] = "Value";
  arr["geeks"] = "GeeksforGeeks";
  arr["name"] = "JavaScript";

  // Checking object exist or not
  console.log(arr["name"]);

  // Removing object from
  // associative array
  const updatedArray = Object.fromEntries(
    Object.entries(arr).filter(([key]) => key !== "name"),
  );

  // It gives result as undefined
  // as object is deleted
  return updatedArray;
}

// Calling function
console.log(deleteObjects());
