
// Can not use arrow functions in objects methods as arrow functions dont have access to object parameters or this

// let length = function(string) {
//     return string.length;
// }

let length = (string) => string.length;

console.log(length("How you doing !!"));

const friends = [
    {
        "Name" : "Joey",
        "Age" : 30,
        "FavoriteDialogue" : "How you Doing !!"
    },
    {
        "Name" : "Chandler",
        "Age" : 32,
        "FavoriteDialogue" : "I am not very good at advice, can i interest you in a sracastic comment !!"
    },
    {
        "Name" : "Ross",
        "Age" : 29,
        "FavoriteDialogue" : "We were on a break !!"
    }
];

let search = friends.filter( (friend) => friend.Age >= 30);

console.log(typeof search);
console.log(search);