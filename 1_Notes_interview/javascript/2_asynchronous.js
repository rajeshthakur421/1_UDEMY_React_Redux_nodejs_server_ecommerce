
1. **Callbacks**:

   function fetchData(callback) {
       setTimeout(() => {
           callback('Data fetched successfully');
       }, 2000);
   }

   console.log('Start');
   fetchData((data) => {
       console.log(data);
   });
   console.log('End');

2. **Promises**: 

   function fetchData() {
       return new Promise((resolve, reject) => {
           setTimeout(() => {
               resolve('Data fetched successfully');
           }, 2000);
       });
   }

   console.log('Start');
   fetchData()
       .then((data) => {
           console.log(data);
       })
       .catch((error) => {
           console.error(error);
       });
   console.log('End');
 

3. **Async/Await**: 

   async function fetchData() {
       return new Promise((resolve) => {
           setTimeout(() => {
               resolve('Data fetched successfully');
           }, 2000);
       });
   }

   async function processData() {
       console.log('Start');
       try {
           const data = await fetchData();
           console.log(data);
       } catch (error) {
           console.error(error);
       }
       console.log('End');
   }

   processData();
 