const fs = require("fs");
const zlib = require("zlib");
const { resolve } = require("path");

function zlibPromise(data) {
    return new Promise((resolve, reject) => {
        zlib.gzip(data, (error, result) => {
            if (error) reject(error);
            resolve(data, result);
        });
    });
};

function readFile(filename, encoding) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, encoding, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
}
