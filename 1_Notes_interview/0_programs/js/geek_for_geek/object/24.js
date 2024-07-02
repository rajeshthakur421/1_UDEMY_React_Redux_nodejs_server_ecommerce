//How to change JSON String into an Object in JavaScript ?
const jsonString = `{"bookname" : "geekforgeeks", 
	"author" : "bharat", 
	"releaseYear" : "2001"}`;
const jsonObject = JSON.parse(jsonString);

console.log(jsonObject);
//output:{ bookname: 'geekforgeeks', author: 'bharat', releaseYear: '2001' }
