// TOPICS : type alias, enums, union types, literalTypes


type Combined = number | string

enum ReturnTypes {
    AS_NUMBER,
    AS_TEXT,
    AS_JSON,
    AS_XML
}

function combine1( 
  a: Combined, 
  b: Combined,
  resultType: ReturnTypes.AS_NUMBER | ReturnTypes.AS_TEXT) {

  let result;
  if(typeof a === 'number' && typeof b === 'number' || resultType === ReturnTypes.AS_NUMBER)
    result = +a + +b;
  else    
    result = a.toString() + b.toString();

  return result;
}

console.log(combine1(10.3, 8, ReturnTypes.AS_NUMBER));

//console.log(combine('Hello', 'World', ReturnTypes.AS_JSON));   // This throws error because this type is not allowed

console.log(combine1('Hello', 'World', ReturnTypes.AS_TEXT));