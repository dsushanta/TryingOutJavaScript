"use strict";
// TOPICS : type alias, enums, union types, literalTypes
var ReturnTypes;
(function (ReturnTypes) {
    ReturnTypes[ReturnTypes["AS_NUMBER"] = 0] = "AS_NUMBER";
    ReturnTypes[ReturnTypes["AS_TEXT"] = 1] = "AS_TEXT";
    ReturnTypes[ReturnTypes["AS_JSON"] = 2] = "AS_JSON";
    ReturnTypes[ReturnTypes["AS_XML"] = 3] = "AS_XML";
})(ReturnTypes || (ReturnTypes = {}));
function combine1(a, b, resultType) {
    let result;
    if (typeof a === 'number' && typeof b === 'number' || resultType === ReturnTypes.AS_NUMBER)
        result = +a + +b;
    else
        result = a.toString() + b.toString();
    return result;
}
console.log(combine1(10.3, 8, ReturnTypes.AS_NUMBER));
//console.log(combine('Hello', 'World', ReturnTypes.AS_JSON));   // This throws error because this type is not allowed
console.log(combine1('Hello', 'World', ReturnTypes.AS_TEXT));
//# sourceMappingURL=literalTypes.js.map