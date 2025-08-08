const fetch = require("node-fetch");

const host = "192.168.0.33";
const port = "8081";

let BaseUrl = `http://${host}:${port}/LibraryManagement/`;
let bearer = "Basic YWRtaW46bGlicmFyeQ==";

// declaring the headers
const headers = {
  "Content-Type": "application/json",
  Authorization: bearer,
  "Access-Control-Allow-Origin": "*",
};

const getFavGenre = (userId) => {
  return new Promise((resolve, reject) => {
    let resourceURL = BaseUrl + "userss/" + userId;
    fetch(resourceURL, {
      method: "GET",
      headers,
    })
      .then((response) => {
        let a = response.json();
        console.log(a.abc);
        console.log(response);
      })
      .catch(_ => reject());
  });
};

let userId = "joey";
getFavGenre(userId).catch((_) => console.log("hello 12347899999987666"));