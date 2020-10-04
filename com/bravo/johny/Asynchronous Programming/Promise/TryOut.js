// function doAsyncTask(cb) {
//   cb();
// }

// doAsyncTask(() => console.log(message));

// let message = "Callback Called";

function doAsyncTask() {
  return Promise.resolve("hello ");
}

doAsyncTask().then((b) => console.log(b + message));

let message = "Promise Called";

const p = Promise.resolve("Hello ");

p.then(val => {
  console.log(val);
  return "World ";
}).then(val => {
  console.log(val);
});