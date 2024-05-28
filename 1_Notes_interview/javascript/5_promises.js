1****************
function fetchData() {
    return new Promise((resolve, reject) => {
      // Simulate fetching data (delay of 2 seconds)
      setTimeout(() => {
        const data = "Data from server";
        resolve(data); // Promise is fulfilled with fetched data
      }, 2000);
    });
  }
  
  fetchData()
    .then(data => {
      console.log(data); // Handle the resolved data (fetched data)
    })
    .catch(error => {
      console.error(error); // Handle any errors during data fetching
    });
  
  console.log("This will be displayed before data is fetched");

2.****************************************  
let myPromise = new Promise(function(myResolve, myReject) {
    setTimeout(function() { myResolve("I love You !!"); }, 3000);
  });
  
  myPromise.then(function(value) {
    console.log(value)
  });