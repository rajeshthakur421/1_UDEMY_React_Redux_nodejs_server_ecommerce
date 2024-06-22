1;
function add(x) {
  return function (y) {
    return x + y;
  };
}
const sum = add(5)(3);
console.log(sum);
