1;
const fs = require("fs");

// Create a readable stream from a file
const readableStream = fs.createReadStream("input.txt", { encoding: "utf8" });

// Create a writable stream to a file
const writableStream = fs.createWriteStream("output.txt", { encoding: "utf8" });

// Pipe the readable stream to the writable stream
readableStream.pipe(writableStream);

// Log completion message
writableStream.on("finish", () => {
  console.log("File content copied successfully.");
});
