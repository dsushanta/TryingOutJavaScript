const fetch = require("node-fetch");

const host = "jarvis";
const port = "8082";

let BaseUrl = `http://${host}:${port}/LibraryManagement/`;
let bearer = "Basic YWRtaW46bGlicmFyeQ==";

// declaring the headers
const headers = {
  "Content-Type": "application/json",
  Authorization: bearer,
  "Access-Control-Allow-Origin": "*",
};

const getFavGenre = (userId, callback) => {
  let resourceURL = BaseUrl + "users/" + userId;
  fetch(resourceURL, {
    method: "GET",
    headers,
  })
    .then((response) => response.json())
    .then(data => callback(data.favGenre));
};

const getFirstBookOfFavGenre = (genre, callback) => {
   let resourceURL = BaseUrl + "books?genre=" + genre + "&offset=0&limit=1";
   fetch(resourceURL, {
     method: "GET",
     headers,
   })
     .then((response) => response.json())
     .then((bookData) => {
       let bookIds = bookData.map((book) => book.bookId);
       callback(bookIds[0]);
     });
     //.then((json) => callback(json.favGenre));
};

const getAuthor = (bookId, callback) => {
  let resourceURL = BaseUrl + "books/" + bookId;
  fetch(resourceURL, {
    method: "GET",
    headers,
  })
    .then((response) => response.json())
    .then((bookData) => callback(bookData.author));
};

let userId = "joey";
getFavGenre(userId, (genre) => {
  getFirstBookOfFavGenre(genre, (bookId) => {
    getAuthor(bookId, (author) => {
      console.log("One of the authors of your favourite genre is : " + author);
    })
  })
});
