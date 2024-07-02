//How to get the last item of JavaScript object
let Obj = {
  "1_prop": "1_Val",
  "2_prop": "2_Val",
  "3_prop": "3_Val",
};

console.log(JSON.stringify(Obj));

function GFG_Fun() {
  let lastElement;

  for (lastElement in Obj);
  lastElement;

  console.log(
    "The last key = '" +
      lastElement +
      "' <br> Value = '" +
      Obj[lastElement] +
      "'",
  );
}
GFG_Fun();
