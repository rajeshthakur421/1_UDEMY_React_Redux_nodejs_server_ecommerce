//Find the length of a JavaScript object
function getObjectLength() {
  // Declare an object
  exampleObject = {
    id: 1,
    name: "Arun",
    age: 30,
  };

  // Using Object.keys() method to get length
  objectLength = Object.keys(exampleObject).length;
  console.log(objectLength);
}
getObjectLength();
