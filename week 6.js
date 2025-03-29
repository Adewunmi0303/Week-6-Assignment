// Assignment 1
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter(num => num % 2 === 0);
const sum = numbers.reduce((acc,num) => acc + num, 0);
const result = (numbers)
console.log(result);


// Assignment 2
const nestedArray = [[1,2], [3,4], [5]]
const flat = flat (nestedArray)
console.log(nestedArray.flat);


// Assignment 3
const typedArray = new Uint8Array([1, 2, 3, 4, 5]);
console.log('Original TypedArray:', typedArray);

const reverseArray = Array.from(typedArray).reserve();
console.log('Reserved Array:', reservedArray);

// Assignment 4
const regularArray = [1, 2, 3, 4, 5];
const typedArray = TypedArray(regularArray);
console.log('TypedArray:', typedArray);

const backToArray = toRegularArray(typedArray);
console.log('Regular:', backToArray);