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
        "Age" : 31,
        "FavoriteDialogue" : "We were on a break !!"
    }
];

let friendChar = friends.find(function(friend) {
    return friend.Name === "Joey";
});

console.log(friendChar);