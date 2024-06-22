1;
const fs = require("node:fs");
const data = fs.readFileSync("/file.md"); // blocks here until file is read

2;
const fs = require("node:fs");
const data = fs.readFileSync("/file.md"); // blocks here until file is read
console.log(data);
moreWork(); // will run after console.log

3; //Lines of code are executed in series, one after another, for example:
const a = 1;
const b = 2;
const c = a * b;
console.log(c);
doSomething();
