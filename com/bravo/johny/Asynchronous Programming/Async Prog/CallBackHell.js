const login = (email, pwd, callback, reject) => {
  setTimeout((_) => {
    if (email.includes("@")) {
      console.log(email);
      callback({ email: email });
    } else {
      reject(new Error("Invalid Username / Password"));
    }
  }, 3000);
}

const getUserName = (email, callback) => {
  setTimeout((_) => {
    let userName = email.split("@")[0];
    console.log(userName);
    callback(userName);
  }, 2000);
}

const getVideos = (userName, callback) => {
  setTimeout((_) => {
    let videoIds = ["videoId1", "videoId2", "videoId3"];
    console.log(videoIds);
    callback(videoIds);
  }, 2000);
}

const getVideoTitle = (videoTitle, callback) => {
  setTimeout((_) => {
    callback("Title of Video 1");
  }, 2000);
}

console.log("Start");

// 1st step
login(
    "johnyb@cartoonnetwork.com",
    "ohhmama",
    (userObject) => {
      console.log(userObject)
    },
    err => console.log(err.message)
);

// 2nd Step
login(
    "johnyb@cartoonnetwork.com",
    "ohhmama",
    (userObject) => {
      getUserName(userObject.email, (username) => {
        console.log(username)
      })
    },
    err => console.log(err.message)
);

// 3rd Step
login(
    "johnyb@cartoonnetwork.com",
    "ohhmama",
    (userObject) => {
      getUserName(userObject.email, (username) => {
        getVideos(username, (videoIds) => {
          console.log(videoIds)
        })
      })
    },
    err => console.log(err.message)
);

// 4th Step
// Callback hell : when a callback calls a function which passes another callback
login(
    "johnyb@cartoonnetwork.com",
    "ohhmama",
    (userObject) => {
      getUserName(userObject.email, (username) => {
        getVideos(username, (videoIds) => {
          getVideoTitle(videoIds[0], title => {
            console.log(title)
          })
        })
      })
    },
    err => console.log(err.message)
);

console.log("End");
