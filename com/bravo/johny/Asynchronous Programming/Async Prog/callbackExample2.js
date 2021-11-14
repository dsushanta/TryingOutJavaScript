function f() {
    setTimeout((_) => {
        console.log("Hello World");
  }, 5000);
}

console.log("Start");
f()
console.log("End");
