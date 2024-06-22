const fs = require("fs");

const directoryName = "new-directory";

fs.mkdir(directoryName, (err) => {
  if (err) {
    console.error("Error creating directory:", err);
  } else {
    console.log(`Directory '${directoryName}' created successfully.`);
  }
});
