// TOPIC : Function return types
// Tip : It is better if we let TypeScript infer the type
// undefined in javascript is a real value

function concat(a: string, b: string) {
  return a + b;
}

function add(a: number, b: number): number {
  return a + b;
}

function sub(a: number, b: number): number {
  return a - b;
}

function increment(a: number): void {
  console.log(a + 1);
}

//let sum: (a: number, b: number) => number;
let sum: Function;

sum = add;
console.log(sum(3, 9));

//sum = 10;   // this statement throws error as we trying to assing a function type variable to a number

sum = increment;
console.log(sum(7));

let sum1: (a: number, b: number) => number;

sum1 = add;
console.log(sum1(3, 9));

// sum1 = increment;
// console.log(sum1(7));

function addUsingCB(a: number, b: number, cb: (i: number, j: number) => number) {
  return cb(a, b);
}

console.log(addUsingCB(1, 8, add));
console.log(addUsingCB(1, 8, sub));

console.log(addUsingCB(12, 10, (a, b) => a + b));

// console.log(addUsingCB(1, 8, increment));        This throws error as the function type does not match

// console.log(addUsingCB(1, 8, concat));    // This throws error as the function type does not match