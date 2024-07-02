//Creating objects in JavaScript

1; //Creating object with a constructor
// Simple function
function vehicle(name, maker, engine) {
  this.name = name;
  this.maker = maker;
  this.engine = engine;
}
// New keyword to create an object
let car = new vehicle("GT", "BMW", "1998cc");
// Property accessors
console.log(car.name);
console.log(car.maker);
console.log(car["engine"]);

2; //Using object literals
// Creating js objects with object literal
let car = {
  name: "GT",
  maker: "BMW",
  engine: "1998cc",
};
// Property accessor
console.log(car.name); //dot notation
console.log(car["maker"]); //bracket notation

3; //Creating object with Object.create() method
const coder = {
  isStudying: false,
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I studying?: ${this.isStudying}`);
  },
};
const me = Object.create(coder);
me.name = "Mukul";
me.isStudying = true;
me.printIntroduction();

4; //Using es6 classes
// Using es6 classes
class Vehicle {
  constructor(name, maker, engine) {
    this.name = name;
    this.maker = maker;
    this.engine = engine;
  }
}

let car1 = new Vehicle("GT", "BMW", "1998cc");

console.log(car1.name); //GT
