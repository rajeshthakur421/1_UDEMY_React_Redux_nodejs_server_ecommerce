1;
Promise.resolve().then(() => console.log(1));
setTimeout(() => console.log(2));
Promise.resolve().then(() => setTimeout(() => console.log(3)));
new Promise(res => {
console.log(4)
res();
}).then(() => console.log(5));
Promise.resolve().then(() => console.log(6));
setTimeout(() => console.log(7));
console.log(8);


2;

class Lib
{
readonly counter = -1;
Lib()
{
counter = 2;
}
}


3;
let a =1;
let b =a;
a=5;
const obj1={"greeting":"Hello"};
const obj2= JSON.parse(JSON.stringify(obj1));
obj1["greeting"] = "bye";
console.log(a);
console.log(b);
console.log(obj1);
console.log(obj2);

4;
class Magic {
}
console.log(typeof Magic);

5;
const instanceofM = new Magic():
console.log(typeof instanceofM);
6;
const Person = {
lang: "JS",
show: function() {
console.log(`hi. ${this.lang}`);
}
}
let fn= Person.show;
fn();
