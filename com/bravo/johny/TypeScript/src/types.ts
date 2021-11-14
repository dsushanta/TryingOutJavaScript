function add(a: number, b: number, showResult: boolean, phrase: string){
    let result = a + b;
    if(showResult) {
        console.log(phrase + result);
    } else 
        return result;
}

let a: number = 3.7;
let b: number = 5;
let displayResult: boolean = true;
let phrase: string = "Sum is : ";

add(a,b, displayResult, phrase);