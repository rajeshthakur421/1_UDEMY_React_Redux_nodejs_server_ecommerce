//How to check object is an array in JavaScript
function checkObject() {
  const countries = ["India", "USA", "Canada"];
  const checkArrayObj = Array.isArray(countries);

  console.log(checkArrayObj);
}

checkObject();
