"use strict";
const person = {
    name: 'Joey',
    age: 32,
    role: [1, 'actor']
};
console.log(person);
// Arrays
const person1 = {
    name: 'Joey',
    age: 32,
    hobbies: ['Sports', 'Singing']
};
let favActors;
// favActors = 'Chandler';     throws error as the variable favActors is supposed to contain an array of strings
favActors = ['Joey', 'Chandler'];
// favActors = ['Monica', 2] throws error as the variable favActors is supposed to contain an array of strings only
let favActors1;
favActors1 = ['abc', 12, true];
console.log(favActors);
person1.hobbies.forEach(hobby => console.log(hobby.toUpperCase()));
//# sourceMappingURL=arraysObjectsTypes.js.map