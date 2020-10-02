const friends = ["Joey", "Chandler", "Monica", "Rachel", "Ross", "Phoebe"];

friends.forEach(function (character) {
  console.log(character);
});

friends.forEach(function (character, i) {
  console.log(`Friend ${i + 1} : ${character}`);
});
