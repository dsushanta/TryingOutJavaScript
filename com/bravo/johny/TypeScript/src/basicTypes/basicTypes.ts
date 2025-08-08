// TOPICS : basic types(number, string, boolean), function

function add1(a: number, b: number, showResult: boolean, phrase: string){
  const result = a + b;
  if(showResult) {
    console.log(phrase + result);
  } else 
    return result;
}

const a = 3.7;
const b = 5;
const displayResult = true;
const phrase = 'Sum is : ';

const result = add1(a,b, displayResult, phrase);