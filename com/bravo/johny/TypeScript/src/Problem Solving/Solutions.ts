// Find max number in an array
export const getMaxNumber = (array: number[]) => {
    return Math.max(...array);
}

// Write a JavaScript function to check if a given string is a palindrome
export const checkIfPalindrome = (input: string) : boolean => {
    return input === input.split('').reverse().join('')
}

// Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers
export const evenNumbers = (array: number[]): number[] => {
    return array.filter(n => n%2===0)
}

// Write a JavaScript program to calculate the factorial of a given number
export const factorial = (num: number): number => {
    if(num === 1)
        return 1;
    return num * factorial(num-1);
}

// Write a JavaScript function to check if a given number is prime
export const checkPrime = (num: number): boolean => {
    if (num <= 1)
        return false;
    for (let i = 2; i<= Math.sqrt(num); i++) {
        if (num % i === 0)
            return false;
    }
    return true;
}

// Write a function that takes an array of integers as input and deletes the middle element

export const deleteMiddleElement = (numbers: number[]): number[] => {
    let middleIndex = Math.floor(numbers.length / 2);
    return numbers.filter((num, index) => index != middleIndex);
}
