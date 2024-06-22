1;
const promise = new Promise(function (resolve, reject) {
  const string1 = "geeksforgeeks";
  const string2 = "geeksforgeeks";
  if (string1 === string2) {
    resolve();
  } else {
    reject();
  }
});

promise
  .then(function () {
    console.log("Promise resolved successfully");
  })
  .catch(function () {
    console.log("Promise is rejected");
  });

2;
myPromise
  .then((value) => `${value} and bar`)
  .then((value) => `${value} and bar again`)
  .then((value) => `${value} and again`)
  .then((value) => `${value} and again`)
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.error(err);
  });
