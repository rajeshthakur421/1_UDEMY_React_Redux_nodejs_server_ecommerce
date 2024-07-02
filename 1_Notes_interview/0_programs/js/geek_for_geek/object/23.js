//Remove blank attributes from a JavaScript Object
function removeBlankAttributes(obj) {
  const result = {};
  for (const key in obj) {
    if (obj[key] !== null && obj[key] !== undefined) {
      result[key] = obj[key];
    }
  }
  return result;
}

const originalObject = {
  name: "John",
  age: null,
  city: "New York",
  occupation: undefined,
};

const objectWithoutBlankAttributes = removeBlankAttributes(originalObject);
console.log(objectWithoutBlankAttributes);

2;
function removeNullUndefined(obj) {
  for (const key in obj) {
    if (obj[key] === null || obj[key] === undefined) {
      delete obj[key];
    }
  }
}

const sampleObject = {
  a: 1,
  b: null,
  c: 3,
  d: undefined,
};

removeNullUndefined(sampleObject);
console.log(sampleObject);
