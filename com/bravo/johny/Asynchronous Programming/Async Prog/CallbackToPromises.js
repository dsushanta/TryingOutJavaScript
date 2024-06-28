function login(email, pwd) {
    return new Promise((resolve, reject) => {
        setTimeout((_) => {
            if (email.includes("@")) {
                console.log(email);
                resolve({ email: email, status: 200});
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
            if (userName.length >= 12) {
                console.log(userName);
                resolve(userName);
            } else {
                reject("username is too small");
            }
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
            resolve("Title of Video 1");
        }, 2000);
    });
}

console.log("Start");

login("johnyb@cartoonnetwork.com", "ohhmama")
    .then(userObj => console.log(userObj))
    .then(userName => getVideos(userName))
    .then(videoIds => console.log(videoIds))

// login("johnyb@cartoonnetwork.com", "ohhmama")
//     .then(userObj => getUserName(userObj.email))
//     .then(userName => getVideos(userName))

// login("johnyb@cartoonnetwork.com", "ohhmama")
//     .then(userObject => getUserName(userObject.email))
//     .catch(message => console.log(message))
//     .then(userName => getVideos(userName))
//     .then(videoIds => getVideoTitle(videoIds[0]))
//     .then(title => console.log(title))
//     .catch(err => console.log(err.message));

console.log("End");
