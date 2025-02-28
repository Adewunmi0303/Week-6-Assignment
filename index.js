// This is my first JavaScript
console.log('Hello World'); 

// calculating a value
function sum(a, b){
    return a + b;
}
console.log(sum(4, 3));

// Js assignment 3
function findLargestNumber(arr) {
    return Math.max(...arr);
}

const numbers = [54, 28, 81,99];
console.log("Largest Number:", findLargestNumber(numbers));