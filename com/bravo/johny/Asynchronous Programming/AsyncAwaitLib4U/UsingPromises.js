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

const getFavGenre = (userId) => {
    return new Promise((resolve, reject) => {
        let resourceURL = BaseUrl + "users/" + userId;
        fetch(resourceURL, {
          method: "GET",
          headers,
        })
          .then((response) => {
            const statusCode = response.status;
            const data = response.json();

            return Promise.all([statusCode, data]);
          })
          .then((result) => resolve(result[1].favGenre))
          .catch((error) => reject(error));      
    });
  
};

const getFirstBookOfFavGenre = (genre) => {
    return new Promise((resolve, reject) => {
        let resourceURL = BaseUrl + "books?genre=" + genre + "&offset=0&limit=1";
        fetch(resourceURL, {
            method: "GET",
            headers,
        })
            .then((response) => {
            const statusCode = response.status;
            const data = response.json();

            return Promise.all([statusCode, data]);
          })
            .then((result) => {
                let bookData = result[1];
                let bookIds = bookData.map((book) => book.bookId);
                resolve(bookIds[0]);
            })
          .catch((error) => reject(error));
    });
};

const getAuthor = (bookId) => {
    return new Promise((resolve, reject) => {
        let resourceURL = BaseUrl + "books/" + bookId;
        fetch(resourceURL, {
          method: "GET",
          headers,
        })
            .then((response) => {
            const statusCode = response.status;
            const data = response.json();

            return Promise.all([statusCode, data]);
          })
          .then((result) => resolve(result[1].author))
          .catch((error) => reject(error));    
    });
};

const wait = (time, message) => {
  setTimeout(_ => console.log(message), time);
}

let userId = "joey";
getFavGenre(userId)
  .then((genre) => getFirstBookOfFavGenre(genre))
  .catch((err) => console.log("Hello ----" + err))
  .then((bookId) => getAuthor(bookId))
  .then((author) =>
    console.log("One of the authors of your favourite genre is : " + author)
  )
  .then(wait(5000, "1st method"))
  .then(wait(3000, "2nd method"));

  wait(0, "Outside method");
