// Assignment 1, week 4
const student = {
    name: 'Bakare Oladunni',
    age: 6,
    grade: 'B'
};
console.log(`Student Name: ${student.name}, Age: ${student.age}, Grade: ${student.grade}`);


// Assignment 2
function greetStudent(name) {
    console.log(`Hello, ${name}! Welcome to the class`);
}
greetStudent('Oladunni');


// Assignment 3
function getFullResponseFromAPI(success) {
    return new Promise ((resolve, reject) => {
        if (success) {
            resolve({ status: 200, body: 'success'});
        } else {
            reject (new Error('The API is not working'));
        }
    });
}
getFullResponseFromAPI(true)
   .then(response => console.log(response))
   .catch(error => console.error(error.message));
getFullResponseFromAPI(false)
   .then(response => console.log(response))
   .catch(error => console.error(error.message));


   // Assignment 4
console.log('Hello from Node.js!');