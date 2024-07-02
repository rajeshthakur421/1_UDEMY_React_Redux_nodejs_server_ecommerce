//JavaScript Program to Sort Array of Objects by String Property Value
let GFG_Object = [
  { f_name: "geeks", l_name: "_2" },
  { f_name: "For", l_name: "_1" },
  { f_name: "GFG", l_name: "_3" },
];

// Create an array of objects with additional properties
let mapped = GFG_Object.map((el, i) => {
  return { index: i, value: el.f_name.toLowerCase() };
});

// Sort the mapped array containing the reduced values
mapped.sort((a, b) => {
  if (a.value < b.value) {
    return -1;
  }
  if (a.value > b.value) {
    return 1;
  }
  return 0;
});

// Create a new array based on the sorted mapped array
let result = mapped.map((el) => GFG_Object[el.index]);

console.log(result);
