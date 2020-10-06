function login(email, pwd, callback) {
    setTimeout(() => {
        callback({ "email": email })
    }, 3000);
}

console.log("Start");
login("johnyb@cartoonnetwork.com", "ohhmama", (userObject) =>
  console.log(userObject)
);
console.log("End");