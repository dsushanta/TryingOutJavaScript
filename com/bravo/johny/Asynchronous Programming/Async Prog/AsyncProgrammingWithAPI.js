const fetch = require('node-fetch');

const postsUrl = "https://jsonplaceholder.typicode.com/posts";
//commentsUrl = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`;

async function getPostWithUserId(userId) {
    const allPostsResponse = await fetch(postsUrl);
    let jsonResponse = await allPostsResponse.json();
    console.log(jsonResponse)
}

getPostWithUserId(1);
