async function login(email, pwd) {
  let userObject;
  setTimeout((_) => {
    if (email.includes("@")) {
      console.log(email);
      userObject = { "email": email };
    }
  }, 3000);
  return userObject;
}

async function getUserName(email) {
  setTimeout((_) => {
    let userName = email.split("@")[0];
    console.log(userName);
  }, 2000);
  return await userName;
}

async function getVideos(userName) {
  setTimeout((_) => {
    const videoIds = ["videoId1", "videoId2", "videoId3"];
    console.log(videoIds);
  }, 2000);
  return await videoIds;
}

async function getVideoTitle(videoTitle) {
  setTimeout((_) => {
      console.log("Title of VIdeo 1");
    }, 2000);
}

async function getVideoTitleFromUser() {
    try {
        const user = await login("johnyb@cartoonnetwork.com", "ohhmama");
        console.log("hello");
        const userName = await getUserName(user.email);
        const videoIds = await getVideos(userName);
        const videoTitle = await getVideoTitle(videoIds[0]);
    } catch (err) {
        console.log(err.message);
    }
}

console.log("Start");

getVideoTitleFromUser();

console.log("End");
