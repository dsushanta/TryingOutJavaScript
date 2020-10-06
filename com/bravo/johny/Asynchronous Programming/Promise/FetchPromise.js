const fetch = require('node-fetch');
const url = "https://reqres.in/api/users?page=2";

const isStatus200 = function (res) {
    if (res.status == 200) {
        return res;
    } else {
        let err = new Error(res.statusText);
        err.response = res;
        throw err;
    }
}

const getPostJson = function (res) {
    return res.json();
}

fetch(url)
    .then(isStatus200)
    .then(getPostJson)
    .then(val => console.log(val))
    .catch(err => console.log(err));