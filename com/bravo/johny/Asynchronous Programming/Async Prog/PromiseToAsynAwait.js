async function login(email, pwd) {
    return new Promise(resolve => {
        setTimeout((_) => {
            if (email.includes("@")) {
                console.log(email);
                let userObject = { email: email };
                resolve(userObject);
            }
        }, 6000);
    });
}

async function getUserName(email) {
    return new Promise(resolve => {
        setTimeout((_) => {
            let userName = email.split("@")[0];
            console.log(userName);
            resolve(userName);
        }, 2000);
    });
}

async function getVideos(username) {
    return new Promise(resolve => {
        setTimeout((_) => {
            let videoIds = [`${username} - videoId-1`, `${username} - videoId-2`, `${username} - videoId-3`];
            console.log(videoIds);
            resolve(videoIds);
        }, 2000);
    });
}

async function getVideoTitle(videoTitle) {
    return new Promise(resolve => {
        setTimeout((_) => {
            let videoTitle = "Title of Video";
            console.log(videoTitle);
            resolve(videoTitle);
        }, 2000);
    });
}

async function getVideoTitleFromUser() {
    try {
        const user = await login("johnyb@cartoonnetwork.com", "ohhmama");
        console.log("hello 1");
        const userName = await getUserName(user.email);
        console.log("hello 2");
        const videoIds = await getVideos(userName);
        console.log("hello 3");
        const videoTitle = await getVideoTitle(videoIds[0]);
    } catch (err) {
        console.log(err.message);
    }
}

async function getUserNames1() {
    try {
        const users = [
            'chandlerbing@friends.com',
            'joeytribbiani@friends.com',
            'monicagellar@friends.com',
            'rossgellar@friends.com',
            'rachelgreen@friends.com',
            'phoebebuffay@friends.com'
        ];
        for (let i=0; i<users.length; i++) {
            let userObject = await login(users[i], "");
            console.log("hello 1 ", userObject.email);
            const userName = await getUserName(userObject.email);
            console.log("hello 2", userName);
            const videoIds = await getVideos(userName);
            console.log("-------------------------------------------");
        };
    } catch (err) {
        console.log(err.message);
    }
}

async function getUserNames2() {
    try {
        const users = [
            'chandlerbing@friends.com',
            'joeytribbiani@friends.com',
            'monicagellar@friends.com',
            'rossgellar@friends.com',
            'rachelgreen@friends.com',
            'phoebebuffay@friends.com'
        ];
        for (let i=0; i<users.length; i++) {
            await asyncCall(users[i]);
        };
    } catch (err) {
        console.log(err.message);
    }
}

const asyncCall = async user => {
    let userObject = await login(user, "");
    console.log("hello 1 ", userObject.email);
    const userName = await getUserName(userObject.email);
    console.log("hello 2", userName);
    const videoIds = await getVideos(userName);
    console.log("-------------------------------------------");
}

async function getUserNames3() {
    try {
        const users = [
            'chandlerbing@friends.com',
            'joeytribbiani@friends.com',
            'monicagellar@friends.com',
            'rossgellar@friends.com',
            'rachelgreen@friends.com',
            'phoebebuffay@friends.com'
        ];
        users.map(async user => {
            let userObject = await login(user, "");
            console.log("hello 1 ", userObject.email);
            const userName = await getUserName(userObject.email);
            console.log("hello 2", userName);
            const videoIds = await getVideos(userName);
            console.log("-------------------------------------------");
        });
    } catch (err) {
        console.log(err.message);
    }
}

async function getUserNames4() {
    try {
        const users = [
            'chandlerbing@friends.com',
            'joeytribbiani@friends.com',
            'monicagellar@friends.com',
            'rossgellar@friends.com',
            'rachelgreen@friends.com',
            'phoebebuffay@friends.com'
        ];
        users.forEach(async user => {
            let userObject = await login(user, "");
            console.log("hello 1 ", userObject.email);
            const userName = await getUserName(userObject.email);
            console.log("hello 2", userName);
            const videoIds = await getVideos(userName);
            console.log("-------------------------------------------");
        });
    } catch (err) {
        console.log(err.message);
    }
}

console.log("Start");

getUserNames1();

console.log("End");
