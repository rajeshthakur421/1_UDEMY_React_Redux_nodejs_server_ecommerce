//JavaScript Program to Create Two Dimensional Array
function create2DArray(rows, cols, initialValue) {
  let arr = [];
  for (let i = 0; i < rows; i++) {
    arr[i] = [];
    for (let j = 0; j < cols; j++) {
      arr[i][j] = initialValue;
    }
  }
  return arr;
}

let arr = create2DArray(3, 4, 0);
console.log(arr);
