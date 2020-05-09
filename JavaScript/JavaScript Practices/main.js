// alert('hello world')
console.log('hello');

// let , const
// let => you can reassign it , const => you can not reassign

// Data Types: string , number , boolean , null , undefined
const name = 'Naser';
const age = 30;
const rating = 4.5;
const isCool = true;
const h = null;
const k = undefined;
let z;

console.log(typeof name);

// concatenation
console.log('my name is ' + name + ' and my age is ' + age);
// template string
console.log(`my name is ${name} and my age is ${age}`);

const s = 'hello world!';
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0, 7));
console.log(s.split(''));

//Arrays:
const numbers = new Array(1, 2, 3, 4);
console.log(numbers);

const fruits = ['apple', 'oranges', 'peer'];
fruits[3] = true;
fruits.push('pineapple');
fruits.unshift(10);
console.log(`is fruits an Array ? ${Array.isArray(fruits)}`);
console.log(fruits.indexOf('oranges'));
console.log(fruits);

//object
const person = {
    firstName: 'Naser',
    lastName: 'Ahadi',
    age: 30,
    hobbies: ['books', 'movies', 'sport'],
    address: {
        city: 'malard',
        country: 'iran'
    }
};

console.log(person.firstName, person.lastName);
console.log(person.hobbies[1]);
console.log(person.address.city);

const {firstName, lastName, address: {city, country}} = person;
console.log(country);

// ADD ITEM TO OBJECT
person.email = 'naserahadi95@gmail.com';
console.log(person);

// Array of objects
const todos = [
    {
        id: 1,
        text: 'take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting Boss',
        isCompleted: false
    },
    {
        id: 3,
        text: 'Buy for dinner',
        isCompleted: true
    },
];

console.log(todos[2].text);

// convert array to json
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

// for loop
for (let i = 0; i <= 5; i++) {
    console.log(`for loop numbers: ${i}`)
}

for (let i = 0; i < todos.length; i++) {
    console.log(todos[i].text)
}

for (let todo of todos) {
    console.log(`this is for of way:\n\t${todo.text}`)
}

// while loop
let i = 0;
while (i <= 5) {
    console.log(`while loop number : ${i}`);
    i++;
}

// forEach , map , filter
todos.forEach(function (todo) {
    console.log(`forEach Method:\n ${todo.text}`)
});

console.log('map method in below');
const todoText = todos.map(function (todo) {
    return todo.text
});
console.log(todoText);

const todoCompleted = todos.filter(function (todo) {
    return todo.isCompleted === true
});

console.log(todoCompleted);

const todoCompletedText = todos.filter(function (todo) {
    return todo.isCompleted === true
}).map(function (todo) {
    return todo.text
});

console.log(todoCompletedText);

// Condition
const x = 2;
const y = 2;

if (x > 10) {
    console.log('x is greater than 10')
} else if (x === 10) {
    console.log('x is 10')
} else {
    console.log('x is less than 10')
}

if (x < 10 && y > 5) {
    console.log('x is less than 10 and y is more than 5')
} else if (x < 10 || y > 5) {
    console.log('x is less than 10 OR y is more than 5')
} else {
    console.log('conditions are not true')
}

// Ternary operator
const color = x > 10 ? 'green' : 'black';
console.log(color);

switch (color) {
    case 'green':
        console.log('color is green');
        break;
    case "black":
        console.log('color is black');
        break;
    default:
        console.log('color is not green or black');
        break
}

// functions
function addNums(num1 = 1, num2 = 1) {
    return num1 + num2
}

console.log(addNums(6, 7));

// Arrow functions
const addNums2 = (num1 = 1, num2 = 1) => {
    return num1 + num2
};
console.log(addNums2(4, 4));

// Arrow Function with one statement in curly braces we can erase curly braces and return.
const addNums3 = (num1 = 1, num2 = 1) => num1 + num2;

console.log(addNums3(5, 4));

// Arrow Function with one parameter
const addNums4 = num1 => num1 + 5;

console.log(addNums4(5));


// Object Oriented Programming
// constructor function in ES5
function Person(firstName,lastName,dob){
    // attributes or properties
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);

    // methods:
    this.getBirthYear = function(){
        return this.dob.getFullYear()
    };

    this.getFullName = function(){
        return `${this.firstName} ${this.lastName}`
    }
}

// Instantiate object
const person1 = new Person('Naser','Ahadi','4-3-1990');
const person2 = new Person('Will','Smith','5-5-1980');

console.log(person1);
console.log(person2.getBirthYear());
console.log(person2.getFullName());

// OOP with class (ES6)
class Person2{
    constructor(firstName,lastName,dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob)
    }

    // methods
    getBirthYear(){
        return this.dob.getFullYear()
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

// Instantiate object
const person3 = new Person2('Ali','Hami','12-3-1995');
console.log(person3);
console.log(person3.getFullName());