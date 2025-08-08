const friends = ['Joey', 'Chandler', 'Monica', 'Rachel', 'Ross', 'Phoebe'];

friends.forEach(function (character) {
  console.log(character);
});
friends.forEach(character => console.log(character));

/*friends.forEach(function (character, i) {
  console.log(`Friend ${i + 1} : ${character}`);
});*/
friends.forEach((character, i) => console.log(`Friend ${i + 1} : ${character}`));

const arr = [10, 20, -3, 42, 5];

arr.forEach((i, j, k, l) => {
  console.log(i + ' : ' + j + ' : ' + k + ' : ' + l);
});