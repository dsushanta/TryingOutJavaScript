
const json = { name: "Joey", age: 30 }
function doAsyncTask(cb) {
  cb(json);
}

function x(arg) {
    console.log(arg);
}

doAsyncTask(x);
//doAsyncTask(() => console.log(message));

let message = "Callback Called";
