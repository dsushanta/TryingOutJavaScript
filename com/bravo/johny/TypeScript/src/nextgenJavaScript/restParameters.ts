
const conc = (...values: string[]) => {
  let result = '';
  values.forEach(v => {
    result = result + v;
  });

  const a = 'null';

  return result ;
};


console.log(conc('a', 'b'));

console.log(conc('a', 'b', 'c'));

const addNumbers = (...numbers: number[]): number => {
  let total = 0;
  numbers.forEach(n => {
    total += n;
  });

  return total;
};

console.log(addNumbers(1, 2, 3, 4));
console.log(addNumbers(1, 2, 3, 4, 5, 6));