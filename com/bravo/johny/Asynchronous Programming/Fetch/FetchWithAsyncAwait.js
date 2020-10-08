const fetch = require('node-fetch');

const usersUrl = "https://gorest.co.in/public-api/users";
let todoUrl = "https://gorest.co.in/public-api/users/USER_ID/todos";

const getUserId = async (userEmail) => {
    const allUsers = await fetch(usersUrl);
    let userId;
    let json = await allUsers.json();
    json.data.map((userObject) => {
      if (userObject.email.includes(userEmail)) {
        userId = userObject.id;
      }
    });
    return await userId;
}

const getUsersFirstTodo = async (userId) => {
  todoUrl = todoUrl.replace("USER_ID", userId);
    const todoResponse = await fetch(todoUrl);
    let json = await todoResponse.json();
    return json.data[0].title;
}

const displayUsersFirstTodo = async (email) => {
    let userId = await getUserId(email);
    let firstTodo = await getUsersFirstTodo(userId);
    console.log(firstTodo);
};

let email = "tushar_chaturvedi@conroy.biz";
displayUsersFirstTodo(email);
