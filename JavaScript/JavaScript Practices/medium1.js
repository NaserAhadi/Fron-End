// example of medium - using reduce //
var personnel = [
    {
        id: 5,
        name: "Luke Skywalker",
        pilotingScore: 98,
        shootingScore: 56,
        isForceUser: true,
    },
    {
        id: 82,
        name: "Sabine Wren",
        pilotingScore: 73,
        shootingScore: 99,
        isForceUser: false,
    },
    {
        id: 22,
        name: "Zeb Orellios",
        pilotingScore: 20,
        shootingScore: 59,
        isForceUser: false,
    },
    {
        id: 15,
        name: "Ezra Bridger",
        pilotingScore: 43,
        shootingScore: 67,
        isForceUser: true,
    },
    {
        id: 11,
        name: "Caleb Dume",
        pilotingScore: 71,
        shootingScore: 85,
        isForceUser: true,
    },
];
// get total score with just reduce without filter or map methods //
let personScore = personnel.reduce(
    (total, pilot) =>
        pilot.isForceUser ? total + pilot.pilotingScore + pilot.shootingScore : total, 0
);
console.log(personScore);

// get unique value in array by set method and spread operator //
const array = [1, 1, 1, 2, 2, 3, 3, 4, 4, 5, 6, 7, 7, 8, 9];
const uniqueArray = [...new Set(array)];
console.log(array);
console.log(uniqueArray);
/*
above trick works for array containing primitive types: undefined,null,boolean,string and number.
(if array containing objects,functions or additional arrays,you'd need different approach)
 */

// using && and || for short-circuit evaluation //
/*
using && will return the first false or 'falsy value'. if every operand evaluates
to true,the last evaluated expression will be returned.
 */
let one = 1, two = 2, three = 3;
console.log(one && two && three); // Result : 3

/*
using || will return the first true.if every operand evaluates to false,the last evaluated expression will be returned.
 */
let four = 4, five = 5, six = 6;
console.log(four || five || six); // Result : 4
// Notice : 0 , "" , null , undefined , NaN , false are falsy value.
console.log(0 || null); // Result : null
console.log((uniqueArray || []).length);// Result : 9

// convert to boolean //
// negative operator "!" , will convert the type to "boolean"
let isFalse = !1;
console.log(!1); // Result : false
console.log(typeof isFalse); // Result : boolean

// convert to number //
let int = '25';
int = +int;
console.log(int); // Result : 25
console.log(typeof int); // Result : number
console.log(+true); // Return : 1
console.log(+false); // Return : 0

// quick float to integer //
// we have Math.ceil() , Math.floor() or Math.round but the faster way is bitwise OR operator :
console.log(23.8 | 0); // Result : 23
console.log(-23.8 | 0); // Result : -23
// | it round the number to up

// remove final digits //
// the bitwise operator can remove final digits from integer and we don't need convert between two types like this:
let str = '1553';
console.log(Number(str.substring(0, str.length - 1))); // Result : 155
console.log(1553 / 10 | 0); // Result : 155
console.log(1553 / 100 | 0); // Result : 15
console.log(1553 / 1000 | 0); // Result : 1

// Truncate an array //
let array2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//array2.length = 4 ;
//console.log(array2); // Result : [0,1,2,3]
// use slice method to truncate an array:
let array3 = array2.slice(0, 6);
console.log(array3); // Result : [0, 1, 2, 3, 4, 5]

// Get the last item in arrays //
// slice can get negative integers:
console.log(array2.slice(-1)); // Result : [9]
console.log(array2.slice(-2)); // Result : [8,9]
console.log(array2.slice(-3)); // Result : [7,8,9]

// Format JSON code //
console.log(JSON.stringify({alpha: 'A', beta: 'B'}));
/*
Result:
{"alpha":"A","beta":"B"}
 */
console.log(JSON.stringify({alpha: 'A', beta: 'B'}, null, '\t'));
/*
Result:
{
	"alpha": "A",
	"beta": "B"
}
 */

// Destructuring //
/*
destructuring is a way to extracting multiple values from data stored in object and array.
 */
// Object Destructuring
const obj = {first: 'Jane', last: 'Doe'};
const {first, last} = obj;
console.log(first + '\n', last);// Result : Jane , Doe

// Array Destructuring
// destructuring works for all iterable values
const arr = [1, 2, 3, 4];
const [x, y] = arr;
console.log(x + ' ,', y); // Result : 1 , 2
const [m, ...n] = arr;
console.log(m); // Result: 1
console.log(n); // Result: [2,3,4]

// Don't use (==) , use (===) //
console.log(typeof undefined); // Result: undefined
console.log(typeof null); // Result: object
console.log(null == undefined); // Result: true  => bad practice
console.log(null === undefined); // Result: false => good practice

// in arrays instead of for ... in use for ... of //
const myArr = ['a','b','c','d'];
for (let i in myArr){
    console.log(i)
}
// Result : 0 1 2 3  => you get indexes of elements
for(let i of myArr){
    console.log(i)
}
// Result : a b c d  => you get the elements and that's ok

// rest parameter in js //
// the rest parameter allows us to represent an indefinite number of arguments as an array.
const add = (...theArgs) => {
    console.log(theArgs);
    return theArgs.reduce((total,n) => total+n,0)
};
console.log(add(1,2,3)); //Result : [1,2,3] - 6
console.log(add(1,2,5,6,7,8,9,10,54,64)); //Result : [1, 2, 5, 6, 7, 8, 9, 10, 54, 64] - 166
