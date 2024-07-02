//JavaScript Program to Create Dynamic Values and Objects
const dynamicKey = "age";
const dynamicValue = 30;

const dynamicObject = {
  name: "Aman",
};

// Using bracket notation to
//set properties dynamically
dynamicObject[dynamicKey] = dynamicValue;
dynamicObject["city"] = "Noida";

console.log(dynamicObject);

//using dynamically
const dynamicObject = {
  name: "Aman",
};

function addProperties(obj, properties) {
  for (let key in properties) {
    obj[key] = properties[key];
  }
}

const additionalProperties = {
  age: 25,
  city: "New York",
  occupation: "Engineer",
};

addProperties(dynamicObject, additionalProperties);

console.log(dynamicObject);
// Output: { name: 'Aman', age: 25, city: 'New York', occupation: 'Engineer' }
