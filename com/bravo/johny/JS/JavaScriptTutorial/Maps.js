let f1 = {
  Name: "Joey",
  Age: 30,
  FavoriteDialogue: "How you Doing !!",
};
let f2 = {
  Name: "Chandler",
  Age: 32,
  FavoriteDialogue:
    "I am not very good at advice, can i interest you in a sracastic comment !!",
};
let f3 = {
  Name: "Ross",
  Age: 29,
  FavoriteDialogue: "We were on a break !!",
};

let friends = new Map();

friends.set("f1", f1);
friends.set("f2", f2);
friends.set("f3", f3);
// console.log(friends);
// console.log(friends.size);

// console.log(friends.get('f2'));

// for(const [k,v] of friends.entries()) {
//     console.log(k + " : " + v.Name);
// }

friends.forEach((v, k) => console.log(k + " : " + v.Name));
