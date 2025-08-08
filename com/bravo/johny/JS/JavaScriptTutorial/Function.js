
let length = function(string) {
  return string.length;
};

let f = function(name, age = 20) {
  return 'Hello ' + name + '.. Your age is : ' + age;
};

module.exports = { length, f };
