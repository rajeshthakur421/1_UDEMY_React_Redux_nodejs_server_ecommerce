//	JavaScript Program to Merge Two Arrays and Remove Duplicate Items
let arr1 = [1, 2, 3];
let arr2 = [3, 4, 5];
let mergedArray = [...arr1];

for (let item of arr2) {
  if (mergedArray.indexOf(item) === -1) {
    mergedArray.push(item);
  }
}

console.log(mergedArray);
