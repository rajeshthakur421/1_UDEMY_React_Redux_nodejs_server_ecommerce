//How to get a key in a JavaScript object by its value
function getKeyByValue(object, value) {
  for (let prop in object) {
    if (object.hasOwnProperty(prop)) {
      if (object[prop] === value) return prop;
    }
  }
}

const exampleObject = {
  key1: "Geeks",
  key2: 100,
  key3: "Javascript",
};

ans = getKeyByValue(exampleObject, 100);

console.log(ans);
