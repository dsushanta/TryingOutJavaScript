function login(email, pwd, callback) {
  setTimeout((_) => {
    callback({ email: email });
  }, 3000);
}

function getUserName(email, callback) {
  setTimeout((_) => {
    callback(email.split("@")[0]);
  }, 2000);
}

function getVideos(userName, callback) {
  setTimeout((_) => {
    callback(["videoId1", "videoId2", "videoId3"]);
  }, 2000);
}

function getVideoTitle(videoTitle, callback) {
  setTimeout((_) => {
    callback("Title of VIdeo 1");
  }, 2000);
}

console.log("Start");
login("johnyb@cartoonnetwork.com", "ohhmama", (userObject) => {
    console.log(userObject.email);
    getUserName(userObject.email, (userName) => {
        console.log(userName);
        getVideos(userName, (videoIds) => {
            console.log(videoIds);
            getVideoTitle(videoIds[0], (title) => {
                console.log(title);
            })
        })
    })  
});
console.log("End");
