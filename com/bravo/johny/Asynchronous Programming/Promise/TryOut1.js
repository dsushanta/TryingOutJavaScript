import fetch from 'node-fetch';

let data = fetch("https://jsonplaceholder.typicode.com6/todos/1");

    data.catch(err => console.log("err"))
    data
    .then(response => response.json())
    .then(json => json.title)
    .then(title => console.log(title));
