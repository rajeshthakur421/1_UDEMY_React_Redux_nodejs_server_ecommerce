//How to merge properties of two JavaScript objects dynamically?
let A = {
  name: "geeksforgeeks",
};

let B = {
  domain: "https://geeksforgeeks.org",
};

let Sites = { ...A, ...B };
//let Sites = Object.assign(A, B);

console.log(Sites);
