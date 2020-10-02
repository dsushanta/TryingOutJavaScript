// calling x after definition via var
var x = 5;
console.log(x);

// calling y after definition via let
let y = 10;
console.log(y);

// calling var z before definition will return undefined
console.log(z);
var z = 2;

// calling let a before definition will give error
//  console.log(a);
//  let a = 3;

{
  let d = 60;
  var e = 70;
  f = 80; // This is dangerous, it makes the variable global
}

//console.log(d);  // throws error
console.log(e);
console.log(f);
console.log(global.f);
console.log(global.e);
