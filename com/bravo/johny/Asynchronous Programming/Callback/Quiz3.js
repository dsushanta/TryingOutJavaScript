const fs = require("fs");

function readFileThenDo(next) {
    fs.readFile("./blah.nofile", (err, data) => {
        try {
          if (err) throw err;
          next(data);
        } catch (err) {
            console.log("Hello");
      }
  });
}
// Hint use try..catch
readFileThenDo((data) => console.log(data));

// try catch does not work with asynchronous functions