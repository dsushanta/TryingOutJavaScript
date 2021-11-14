"use strict";
function add(a, b, showResult, phrase) {
    let result = a + b;
    if (showResult) {
        console.log(phrase + result);
    }
    else
        return result;
}
let a = 3.7;
let b = 5;
let displayResult = true;
let phrase = "Sum is : ";
add(a, b, displayResult, phrase);
//# sourceMappingURL=types.js.map