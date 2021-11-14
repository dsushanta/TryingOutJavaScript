"use strict";
function add(a, b, showResult, phrase) {
    let result = a + b;
    if (showResult) {
        console.log(phrase + result);
    }
    else
        return result;
}
let a;
let b = 5;
let displayResult = true;
let phrase = "Sum is : ";
a = 3.7;
add(a, b, displayResult, phrase);
//# sourceMappingURL=basicTypes.js.map