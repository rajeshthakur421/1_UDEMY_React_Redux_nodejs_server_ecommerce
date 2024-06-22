//www.w3schools.com/js/js_function_closures.asp

1;
function foo() {
  let b = 1;
  function inner() {
    return b;
  }
  return inner;
}
let get_func_inner = foo();

console.log(get_func_inner());
console.log(get_func_inner());
console.log(get_func_inner());

2;
function outers() {
  let name = "Kumar";
  function inner() {
    console.log("Hello, " + name + "!");
  }
  return inner;
}
let greeting = outers();
greeting();
