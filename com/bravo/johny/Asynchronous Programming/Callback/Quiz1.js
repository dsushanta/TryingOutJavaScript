function doAsyncTask(cb) {
  cb();
}

function x() {
    console.log("Hello");
}

doAsyncTask(x);
//doAsyncTask(() => console.log(message));

let message = "Callback Called";
