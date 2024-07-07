// String Manipulation Functions

// Reverse a String
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("hello"));

// Count Characters
function countCharacters(str) {
    return str.length;
}
console.log(countCharacters("Hello, World!"));

// Capitalize Words
function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
console.log(capitalizeWords("hello world"));  // Output: "Hello World"


// Array Functions

// Find Maximum and Minimum
function findMax(arr) {
    return Math.max(...arr);
}

function findMin(arr) {
    return Math.min(...arr);
}

const numbers = [5, 2, 9, 1, 7];
console.log(findMax(numbers));
console.log(findMin(numbers));

// Sum of Array
function sumArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

console.log(sumArray(numbers));  

// Filter Array
function filterArray(arr, condition) {
    return arr.filter(condition);
}

const evenNumbers = filterArray(numbers, num => num % 2 === 0);
console.log(evenNumbers); 


// Mathematical Functions

// Factorial
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(5));

// Prime Number Check
function isPrime(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(11)); 

// Fibonacci Sequence
function fibonacciSequence(n) {
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence.slice(0, n);
}

console.log(fibonacciSequence(6)); 