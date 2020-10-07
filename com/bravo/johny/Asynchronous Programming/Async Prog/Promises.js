function login(email, pwd) {
    return new Promise((resolve, reject) => {
        setTimeout((_) => {
            if (email.includes("@")) {
                console.log(email);
                resolve({ email: email });
            } else {
                reject(new Error("Invalid Username / Password"));
            }
        }, 3000);
    });
}

function getUserName(email) {
    return new Promise((resolve, reject) => {
        setTimeout((_) => {
            let userName = email.split("@")[0];
            console.log(userName);
            resolve(userName);
        }, 2000);
    });
}
  

function getVideos(userName) {
    return new Promise((resolve, reject) => {
        setTimeout((_) => {
            let videoIds = ["videoId1", "videoId2", "videoId3"];
            console.log(videoIds);
            resolve(videoIds);
        }, 2000);
    })
}

function getVideoTitle(videoTitle) {
    return new Promise((resolve, reject) => {
        setTimeout((_) => {
            resolve("Title of VIdeo 1");
        }, 2000);
    });
}

console.log("Start");

login("johnyb@cartoonnetwork.com", "ohhmama")
    .then(userObject => getUserName(userObject.email))
    .then(userName => getVideos(userName))
    .then(videoIds => getVideoTitle(videoIds[0]))
    .catch(err => console.log(err.message));

console.log("End");
