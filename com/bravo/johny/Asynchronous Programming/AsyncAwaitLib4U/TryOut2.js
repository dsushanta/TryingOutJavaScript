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

const getFavGenre = async (userId) => {
  let resourceURL = BaseUrl + "users/" + userId;
  const response = await fetch(resourceURL, {
    method: "PATCH",
    headers,
  });
    //let data = await response.json();

    //return data.favGenre;
    return response;
};


const getAuthorOfMyFavGenre = async (userId) => {
  let favGenre;
  try {
      favGenre = await getFavGenre(userId);
      console.log("From try block : ");
      //console.log(favGenre)
  } catch (error) {
    console.log("Error from catch block : " + error);
  }
};

let userId = "joey";
getAuthorOfMyFavGenre(userId);