const friends = ['Joey', 'Chandler', 'Monica', 'Rachel', 'Ross', 'Phoebe'];

console.log(friends);

// Start

friends.shift();
console.log(friends);

friends.unshift('Ursula');
console.log(friends);

// End

friends.pop()
console.log(friends);

friends.push('Gunther');
console.log(friends);

friends[1] = 'janice'
console.log(friends);

friends.splice(3, 1, 'Richard');
console.log(friends);

friends.splice(2, 2, 'Emily', 'Pete');
console.log(friends);

friends.splice(2, 3, 'Emily', 'Pete');
console.log(friends);