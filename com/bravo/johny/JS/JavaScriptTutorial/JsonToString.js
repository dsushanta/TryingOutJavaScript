let f1 = {
    "Name" : "Joey",
    "Age" : 30,
    "FavoriteDialogue" : "How you Doing !!"
};

let f1ToString = JSON.stringify(f1);
console.log(typeof f1ToString);
console.log(f1ToString);

let f1ToJson = JSON.parse(f1ToString);
console.log(typeof f1ToJson);
console.log(f1ToJson);