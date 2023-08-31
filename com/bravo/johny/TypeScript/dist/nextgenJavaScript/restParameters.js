"use strict";
const conc = (...values) => {
    let result = '';
    values.forEach(v => {
        result = result + v;
    });
    return result;
};
console.log(conc('a', 'b'));
console.log(conc('a', 'b', 'c'));
//# sourceMappingURL=restParameters.js.map