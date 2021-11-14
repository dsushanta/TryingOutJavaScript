function f() {
  setTimeout(function (){
    console.log("Hello World");
  }, 5000);
}

console.log("Start");
f();
console.log("End");
