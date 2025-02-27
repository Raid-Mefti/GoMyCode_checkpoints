// create-file.js
const fs = require("fs");

fs.writeFile("welcome.txt", "Hello Node", (err) => {
    if (err) throw err;
    console.log('File "welcome.txt" created successfully!');
});
