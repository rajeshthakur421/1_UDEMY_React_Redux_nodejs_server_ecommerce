/*
const add = ( function () {
return function(){
}
})()
console.log(add()); //1
console.log(add()); //2
console.log(add()); //3
*/

const add = (function () {
  let counter = 0; // Counter variable to keep track of the count

  return function () {
    counter++;
    return counter;
  };
})();

console.log(add()); // 1
console.log(add()); // 2
console.log(add()); // 3
