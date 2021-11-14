const fetch = require("node-fetch");
const axios = require('axios');

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

const getFavGenre = async (userId) => {
  let resourceURL = BaseUrl + "users/" + userId;
  const response = await fetch(resourceURL, {
    method: "GET",
    headers,
  });
  let data = await response.json();

  return data.favGenre;
};

const getFirstBookOfFavGenre = async (genre) => {
  let resourceURL = BaseUrl + "books?genre=" + genre + "&offset=0&limit=1";
  const response = await fetch(resourceURL, {
    method: "GET",
    headers,
  });
  let bookData = await response.json();
  let bookIds = bookData.map((book) => book.bookId);
    
  return bookIds[0];
};

const getAuthor = async (bookId) => {
  let resourceURL = BaseUrl + "books/" + bookId;
  const response = await fetch(resourceURL, {
    method: "GET",
    headers,
  });
  let data = await response.json();
  
  return data.author;
};

const wait = async (time, message) => {
  setTimeout((_) => console.log(message), time);
};

// const getAuthorOfMyFavGenre = async (userId) => {
//   let favGenre = await getFavGenre(userId);
//   let bookId = await getFirstBookOfFavGenre(favGenre);
//   let author = await getAuthor(bookId);
//   console.log("One of the authors of your favourite genre is : " + author);



//   // if (author) {
//   //   await wait(0, "1st method");
//   //   //console.log("Hello")
//   // }
// }

const getAuthorOfMyFavGenre = async (userId) => {
  let favGenre, bookId, author;
  Promise.all(
    favGenre = await getFavGenre(userId),
    bookId = await getFirstBookOfFavGenre(favGenre),
    author = await getAuthor(bookId),
    console.log("One of the authors of your favourite genre is : " + author)
  )
}

let userId = "joey";


getAuthorOfMyFavGenre(userId);

//wait(0, "outside async await")