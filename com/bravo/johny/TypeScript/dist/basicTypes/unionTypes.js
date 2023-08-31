"use strict";
// TOPICS : union types
function combine(a, b) {
    let result;
    if (typeof a === 'number' && typeof b === 'number')
        result = a + b;
    else
        result = a.toString() + b.toString();
    return result;
}
console.log(combine(10.3, 8));
console.log(combine('Hello', 'World'));
//# sourceMappingURL=unionTypes.js.map