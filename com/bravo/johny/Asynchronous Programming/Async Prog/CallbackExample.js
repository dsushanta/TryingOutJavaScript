vals = [1, 2, 3, 4];
vals.forEach((element) => {
  console.log(element);
});

vals.forEach(f);

function f(e) {
  console.log(e);
}

