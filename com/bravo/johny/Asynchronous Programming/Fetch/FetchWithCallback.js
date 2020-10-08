const fetch = require("node-fetch");

const usersUrl = "https://gorest.co.in/public-api/users";
let todoUrl = "https://gorest.co.in/public-api/users/USER_ID/todos";

const getUserId = (userEmail, callback) => {
  fetch(usersUrl)
    .then((response) => response.json())
    .then((json) => {
      json.data.map((userObject) => {
          if (userObject.email.includes(userEmail)) {
          callback(userObject.id);
        }
      });
    });
};

const getUsersFirstTodo = (userId, callback) => {
  todoUrl = todoUrl.replace("USER_ID", userId);
  fetch(todoUrl)
    .then((response) => response.json())
    .then((json) => callback(json.data[0].title));
};

let email = "tushar_chaturvedi@conroy.biz";
getUserId(email, (userId) => {
    getUsersFirstTodo(userId, (firstTodo) => {
        console.log(firstTodo)
    })
});
