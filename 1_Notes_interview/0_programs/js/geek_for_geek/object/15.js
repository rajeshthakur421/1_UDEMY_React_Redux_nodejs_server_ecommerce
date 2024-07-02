//How to convert an Object {} to an Array [] of key-value pairs in JavaScript?
let obj = { 1: 5, 2: 7, 3: 0, 4: 0, 5: 0 };
let result = [];

for (let key in obj) {
  if (obj.hasOwnProperty(key)) {
    result.push([Number(key), obj[key]]);
  }
}

// Printing values
for (let i = 0; i < result.length; i++) {
  for (let z = 0; z < result[i].length; z++) {
    console.log(result[i][z]);
  }
}
