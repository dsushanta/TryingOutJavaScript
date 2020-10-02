let a = 10;
a = a + 10;

console.log("Value of a = " + a);

console.log(global.f);

const b = {};
b.x = 1;

//b = {n:3};

console.log(b);

const c = ["Hello", 2, true];
c[1] = 3;

c = [5];

console.log(c);
