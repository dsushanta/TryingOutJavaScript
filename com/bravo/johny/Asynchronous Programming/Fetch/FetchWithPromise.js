
const fetch = require("node-fetch");

const usersUrl = "https://gorest.co.in/public-api/users";
let todoUrl = "https://gorest.co.in/public-api/users/USER_ID/todos";

const getUserId = (userEmail) => {
    return new Promise((resolve, reject) => {
        fetch(usersUrl)
            .then(response => response.json())
            .then(json => {
                json.data.map((userObject) => {
                    if (userObject.email.includes(userEmail)) {
                        resolve(userObject.id);
                    }
                });
            })
    });
}

const getUsersFirstTodo = (userId) => {
    return new Promise((resolve, reject) => {
        todoUrl = todoUrl.replace("USER_ID", userId);
        fetch(todoUrl)
            .then((response) => response.json())
            .then((json) => resolve(json.data[0].title));
    });
};

let email = "tushar_chaturvedi@conroy.biz";
getUserId(email)
    .then(userId => getUsersFirstTodo(userId))
    .then(firstTodo => console.log(firstTodo))
    .catch(err => console.log(err.message));

