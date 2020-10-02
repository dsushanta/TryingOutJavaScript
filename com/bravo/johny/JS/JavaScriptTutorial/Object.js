
// Object properties can be both primitive values, other objects, and functions.
// JavaScript objects are mutable

let friends_joey = {
    "Name" : "Joey Tribbiani",
    "Age" : 30,
    "FavoriteDialogue" : "How you Doing !!",
    "Series" : function(){return "Friends";}
}

console.log(`${friends_joey.Name}'s favorite dialogue : ${friends_joey.FavoriteDialogue}`);
console.log(friends_joey.Series());

let friends_chandler = new Object();
friends_chandler.Name = "Chandler Bing";
friends_chandler.Age = 31;
friends_chandler.FavoriteDialogue = "I am not great at the advice, can I interest you in a sarcastic comment";

console.log(`${friends_chandler.Name}'s favorite dialogue : ${friends_chandler.FavoriteDialogue}`);