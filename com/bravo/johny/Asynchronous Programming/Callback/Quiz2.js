import fs from 'fs';

function readFileThenDo(next) {
  fs.readFile('./blah.nofile', (err, data) => {
    next(data);
  });
}
let d = "hello"

readFileThenDo((d) => {
  console.log(d);
});
