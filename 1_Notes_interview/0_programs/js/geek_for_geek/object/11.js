//JavaScript Program to Count the Number of Keys/Properties in an Object
const user = {
  name: "Aman",
  age: 30,
  email: "Aman@example.com",
  address: {
    street: "Sector-15 A-Block",
    city: "Noida",
    state: "Up",
  },
};

let count = 0;
for (let key in user) {
  if (user.hasOwnProperty(key)) {
    count++;
  }
}

console.log("Number of keys: " + count);
