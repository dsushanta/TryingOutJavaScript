const fs = require("fs");

function readFile(filename, encoding) {
  const promise = new Promise((resolve, reject) => {
      fs.readFile(filename, encoding, (err, data) => {
          if (err) {
              reject(err);
          } else {
              resolve(data);
          }
      });
  });
    return promise;
}
readFile("./files/demofile.txt", "utf-8").then(
    val => console.log(val),
    val => console.log(val)
);