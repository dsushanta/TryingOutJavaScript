function login(email, pwd, callback) {
  setTimeout((_) => {
    if (email.includes("@")) {
      console.log(email);
      callback({ email: email });
    } else {
      reject(new Error("Invalid Username / Password"));
    }
  }, 3000);
}

function getUserName(email, callback) {
  setTimeout((_) => {
    let userName = email.split("@")[0];
    console.log(userName);
    callback(userName);
  }, 2000);
}

function getVideos(userName, callback) {
  setTimeout((_) => {
    let videoIds = ["videoId1", "videoId2", "videoId3"];
    console.log(videoIds);
    callback(videoIds);
  }, 2000);
}

function getVideoTitle(videoTitle, callback) {
  setTimeout((_) => {
    callback("Title of Video 1");
  }, 2000);
}

console.log("Start");

login("johnyb@cartoonnetwork.com", "ohhmama", (userObject) => {
  getUserName(userObject.email, (userName) => {
    getVideos(userName, (videoIds) => {
      getVideoTitle(videoIds[0], (title) => {
        console.log(title);
      });
    });
  });  
});

console.log("End");
