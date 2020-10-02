
//console.log(length("How you doing !!"));

let length = function(string) {
    return string.length;
}

let f = function(name, age = 20) {
    console.log("Hello " + name + ".. Your age is : " + age);
}

let f1 = function(name, age = 20, favSport) {
    console.log("Hello " + name + ".. Your age is : " + age);
    console.log("My fav sport is : " + favSport);
}

console.log(length("How you doing !!"));
f('Joey', 30);
f1('Chandler', 'cricket');