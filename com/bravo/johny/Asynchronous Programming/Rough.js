//setTimeout(() => console.log("Hello"), 5000);

const callbackExample = (asyncPattern, callback) => {
  console.log(
    `This is an example, with a ${asyncPattern} passed an an argument`
  );
  callback();
};

const testCallbackFunc = () => {
  console.log("Again, this is just a simple callback example");
};

// call our function and pass the testCallbackFunction as an argument
callbackExample("callback", testCallbackFunc);