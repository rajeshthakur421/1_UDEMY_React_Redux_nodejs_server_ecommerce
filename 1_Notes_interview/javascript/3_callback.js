Certainly! Here are a few examples of using callbacks in JavaScript:

1. **Basic Callback Example**:
   
  
   function greet(name, callback) {
       setTimeout(() => {
           callback(`Hello, ${name}!`);
       }, 1000);
   }

   function displayGreeting(greeting) {
       console.log(greeting);
   }

   greet('Alice', displayGreeting);
 
2. **Nested Callbacks**:

  
   function stepOne(callback) {
       setTimeout(() => {
           callback('Step 1 complete');
       }, 1000);
   }

   function stepTwo(callback) {
       setTimeout(() => {
           callback('Step 2 complete');
       }, 1500);
   }

   function stepThree(callback) {
       setTimeout(() => {
           callback('Step 3 complete');
       }, 500);
   }

   function finalStep(message) {
       console.log('All steps completed:', message);
   }

   stepOne((stepOneResult) => {
       console.log(stepOneResult);
       stepTwo((stepTwoResult) => {
           console.log(stepTwoResult);
           stepThree((stepThreeResult) => {
               console.log(stepThreeResult);
               finalStep('Process finished');
           });
       });
   });
  
3. **Error Handling with Callbacks**:

  
   function fetchData(callback) {
       setTimeout(() => {
           const error = Math.random() < 0.5 ? null : new Error('Failed to fetch data');
           if (error) {
               callback(error, null);
           } else {
               callback(null, 'Data fetched successfully');
           }
       }, 2000);
   }

   function handleResult(error, data) {
       if (error) {
           console.error('Error:', error.message);
       } else {
           console.log('Data:', data);
       }
   }

   fetchData(handleResult);
  