//Max/Min value of an attribute in an array of objects in JavaScript
// Input array of objects
let Arr = [
  { x: "3/10/2003", y: 0.023452007 },
  { x: "8/12/2002", y: 0.02504234 },
  { x: "1/16/2001", y: 0.024533546 },
  { x: "8/19/2006", y: 0.03123423457 },
];

// Initialize min and max values
let maxValue = Arr[0].y;
let minValue = Arr[0].y;

// Getting min and max value using for loops
for (let i = 0; i < Arr.length; i++) {
  if (Arr[i].y > maxValue) {
    maxValue = Arr[i].y;
  }
  if (Arr[i].value < minValue) {
    minValue = Arr[i].y;
  }
}

// Display the output
console.log(Arr);
console.log("Max Value:", maxValue);
console.log("Min Value:", minValue);

2; //apply,map
let Arr = [
  { x: "3/10/2003", y: 0.023452007 },
  { x: "8/12/2002", y: 0.02504234 },
  { x: "1/16/2001", y: 0.024533546 },
  { x: "8/19/2006", y: 0.03123423457 },
];

console.log(JSON.stringify(Arr));

function gfg_Run() {
  console.log(
    "Maximum value of y = " +
      Math.max.apply(
        Math,
        Arr.map(function (event) {
          return event.y;
        }),
      ),
  );
}

gfg_Run();
