function login(email, pwd) {
    setTimeout(() => {
        return { "email": email }
    }, 5000);
}

console.log("Start");
user = login("johnyb@cartoonnetwork.com", "ohhmama");
console.log(user);
console.log("End");

// Synchronous programming

function login(email, pwd) {
  setTimeout((_) => {
    return { email: email };
  }, 3000);
}
function getUserName(email) {
    setTimeout(_ => { 
        return (email.split("@")[0]);
    }, 2000);
}

function getVideos(userName) {
  setTimeout(_ => {
    return ['videoId1', 'videoId2', 'videoId3'];
  }, 2000);
}

function getVideoTitle(videoTitle) {
    setTimeout(_ => {
        return "Title of Video 1";
    }, 2000);
}

user = login("johnyb@cartoonnetwork.com", "ohhmama")
userName = getUserName(user.email);
videoIds = getVideos(userName);
videoTitle = getVideoTitle(videoIds[0]);