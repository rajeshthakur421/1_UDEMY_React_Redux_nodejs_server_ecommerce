// Write a JavaScript code
const fs = require("fs");

fs.readFile('inputfile1.txt',
	function (ferr, filedata) {
		if (ferr) return console.error(ferr);
		console.log(filedata.toString());
	}
);
console.log("End of Program execution");
