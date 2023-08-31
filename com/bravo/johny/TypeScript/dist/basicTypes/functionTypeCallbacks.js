"use strict";
// TOPIC : Function return types
// Tip : It is better if we let TypeScript infer the type
// undefined in javascript is a real value
function concat(a, b) {
    return a + b;
}
function add(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
}
function increment(a) {
    console.log(a + 1);
}
//let sum: (a: number, b: number) => number;
let sum;
sum = add;
console.log(sum(3, 9));
//sum = 10;   // this statement throws error as we trying to assing a function type variable to a number
sum = increment;
console.log(sum(7));
let sum1;
sum1 = add;
console.log(sum1(3, 9));
// sum1 = increment;
// console.log(sum1(7));
function addUsingCB(a, b, cb) {
    return cb(a, b);
}
console.log(addUsingCB(1, 8, add));
console.log(addUsingCB(1, 8, sub));
console.log(addUsingCB(12, 10, (a, b) => a + b));
// console.log(addUsingCB(1, 8, increment));        This throws error as the function type does not match
// console.log(addUsingCB(1, 8, concat));    // This throws error as the function type does not match
//# sourceMappingURL=functionTypeCallbacks.js.map