// TOPICS : basic types(number, string, boolean), function

function add(a: number, b: number, showResult: boolean, phrase: string){
    let result = a + b;
    if(showResult) {
        console.log(phrase + result);
    } else 
        return result;
}

let a:number;
let b = 5;
let displayResult = true;
let phrase = "Sum is : ";
a = 3.7;


add(a,b, displayResult, phrase);