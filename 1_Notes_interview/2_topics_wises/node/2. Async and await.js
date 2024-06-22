function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

async function asyncCall() {
  console.log('calling');
  const result = await resolveAfter2Seconds();
  console.log(result);
  // Expected output: "resolved"
}

asyncCall();


2.
async function fun1(req, res){
  let response = await request.get('http://localhost:3000');
    if (response.err) { console.log('error');}
    else { console.log('fetched response');
}

3.
async function fetchDataAsync() {
  try {
    const response = await fetch('/endpoint');
    const summary = await response.text();
    console.log(summary);
  } catch (error) {
    console.log('Error:' + error.message);
  }
}

// Call fetchDataAsync()
fetchDataAsync();