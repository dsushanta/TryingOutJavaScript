// function doAsyncTask(cb) {
//   cb();
// }

// doAsyncTask(() => console.log(message));

// let message = "Callback Called";

function doAsyncTask() {
  return Promise.resolve();
}

doAsyncTask().then(_ => console.log(message));

let message = "Promise Called";