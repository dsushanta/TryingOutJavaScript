const fetch = require("node-fetch");
const url = "https://reqres.in/api/users?page=2";

const isStatus200 = function (res) {
  if (res.status == 200) {
    return res;
  } else {
    let err = new Error(res.statusText);
    err.response = res;
    throw err;
  }
};

const getPostJson = function (res) {
    console.log("Getting json ..");
    return res.json();
};

const getTotal = function (res) {
  console.log("Getting title ..");
  return res.total;
};

const echoTotal = function (total) {
  console.log(total);
};

fetch(url)
    .then(isStatus200)
    .then(getPostJson)
    .then(getTotal)
    .then(echoTotal)
    .catch((err) => console.log(err));
