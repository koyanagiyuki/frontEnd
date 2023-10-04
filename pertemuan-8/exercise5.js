// Destructuring Array
const colors = ['red', 'green', 'blue'];
const [firstColor, secondColor, thirdColor] = colors;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);

// Destructuring dengan mengambil sebagian item
const fruits = ['apple', 'banana', 'cherry', 'date'];
const [firstFruit, , thirdFruit] = fruits;

console.log(firstFruit);
console.log(thirdFruit);

// Destructuring dengan menggunakan default value
const names = ['Alice', 'Bob'];
const [firstName, lastName, greeting = 'Hello'] = names;

console.log(firstName);
console.log(lastName);
console.log(greeting);

// Destructuring dengan menggunakan rest operator
const numbers = [1, 2, 3, 4, 5];
const [firstNumber, ...restNumbers] = numbers;

console.log(firstNumber);
console.log(restNumbers);


// Destructuring Object
