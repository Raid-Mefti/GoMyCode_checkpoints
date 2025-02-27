// read-file.js
const fs = require("fs");

fs.readFile("welcome.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
});
