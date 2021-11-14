const fetch = require("node-fetch");

const url = "https://jsonplaceholder.typicode.com/posts";


const getPosts = async (url) => {
    const response = await fetch(url);
    let a = await response.json();
    console.log(a);
};

getPosts(url);