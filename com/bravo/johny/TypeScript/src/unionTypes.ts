// TOPICS : union types

function combine(a: number|string, b: string|number) {
    let result;

    if(typeof a === 'number' && typeof b === 'number')
        result = a + b;
    else    
        result = a.toString() + b.toString();

    return result;
}

console.log(combine(10.3, 8));

console.log(combine('Hello', 'World'));