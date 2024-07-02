// iterate over a JavaScript object
function iterateObject() {
  let exampleObj = {
    book: "Sherlock Holmes",
    author: "Arthur Conan Doyle",
    genre: "Mystery",
  };

  Object.keys(exampleObj).forEach((key) => {
    const value = exampleObj[key];
    console.log(`${key}: ${value}`);
  });
}
iterateObject();
