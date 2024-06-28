
// arr = [10, 20, -3, 42, 5];
//
// arr.forEach((i,j,k,l) => {
//   console.log(i + ' : ' + j + ' : ' + k + ' : ' + l);
// });

// let str = "my name is Nikhil"
//
// function rev(strr) {
//   return strr.split(" ").map(e => e.split("").reverse().join("")).join(" ")
// }
//
// console.log(rev(str))

new Promise((resolve) => {
  console.log(1);
  resolve(2);
}).then((result) => console.log(result));

console.log(3);