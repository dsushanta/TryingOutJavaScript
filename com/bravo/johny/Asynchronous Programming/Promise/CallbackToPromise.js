const { rejects } = require("assert");

function watchTutorialCallback(callback, errorCallback) {
  let userLeft = false;
  let userWatchingCatMeme = false;

  if (userLeft) {
    errorCallback({
      name: "User Left",
      message: ":(",
    });
  } else if (userWatchingCatMeme) {
    errorCallback({
      name: "User Watching Cat Meme",
      message: "WebDevSimplified < Cat",
    });
  } else {
    callback("Thumbs up and Subscribe");
  }
}

// watchTutorialCallback(
//   (message) => {
//     console.log(message);
//   },
//   (error) => {
//     console.log(error.name + " " + error.message);
//   }
// );

function watchTutorialPromise() {
  let userLeft = true;
  let userWatchingCatMeme = false;

    return new Promise((resolve, reject) => {
        if (userLeft) {
            reject({
                name: "User Left",
                message: ":(",
            });
        } else if (userWatchingCatMeme) {
            reject({
                name: "User Watching Cat Meme",
                message: "WebDevSimplified < Cat",
            });
        } else {
            resolve("Thumbs up and Subscribe");
        }
    });
}

watchTutorialPromise().then(val => {
    console.log("It is a success ", val);
}).catch(userObject => {
    console.log(userObject.name + userObject.message);
})