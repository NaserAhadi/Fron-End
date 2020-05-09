const companies = [
    {name: 'company 1', category: 'Finance', start: 1981, end: 2003},
    {name: 'company 2', category: 'Retail', start: 1992, end: 2008},
    {name: 'company 3', category: 'Auto', start: 1999, end: 2007},
    {name: 'company 4', category: 'Retail', start: 1989, end: 2010},
    {name: 'company 5', category: 'Technology', start: 2009, end: 2014},
    {name: 'company 6', category: 'Finance', start: 1987, end: 2010},
    {name: 'company 7', category: 'Auto', start: 1986, end: 1996},
    {name: 'company 8', category: 'Technology', start: 2011, end: 2016},
    {name: 'company 9', category: 'Retail', start: 1981, end: 1989},
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// for(let i = 0; i < companies.length; i++){
//     console.log(companies[i].name);
//     console.log(companies[i]);
// }

// forEach : The forEach() method calls a function once for each element in an array, in order. //
// companies.forEach(function(company){
//     console.log(company.name);
//     console.log(company);
// });


// filter : The filter() method creates a new array with all elements that pass the test implemented by the provided function.//

// get 21 and older
// let canDrink = [];
// for (let i = 0; i < ages.length; i++) {
//     if (ages[i] >= 21) {
//         canDrink.push(ages[i])
//     }
// }


// const canDrink = ages.filter(function (age) {
//     if (age >= 21) {
//         return true
//     }
// });

// Arrow function in filter method
const canDrink = ages.filter(age => age >= 21);

// ** console.table ==>> get information as a table to you ** //
// console.table(canDrink);

console.log(canDrink);

// get Retail companies
// ES5
// const retailCompanies = companies.filter(function(company){
//     if(company.category === 'Retail'){
//         return true
//     }
// });

// ES6 Arrow Function
const retailCompanies = companies.filter(company => company.category === 'Retail');
console.log(retailCompanies);

// get 80s company
// const companyYear80 = companies.filter(function(company){
//     if(company.start >= 1980 && company.start < 1990){
//         return true
//     }
// });

const companyYear80 = companies.filter(company => (company.start >= 1980 && company.start < 1990));
console.log(companyYear80);

// get companies lasted 10 years or more
// const company10YearMore = companies.filter(function(company){
//     if(company.end - company.start >= 10){
//         return true
//     }
// });

const company10YearMore = companies.filter(company => company.end - company.start >= 10);
console.log(company10YearMore);

// map: The map() method creates a new array with the results of calling a function for every array element.//

// create company name
// const companyName = companies.map(function(company){
//     return company.name
// });

const companyName = companies.map(company => (`${company.name} : [${company.start} - ${company.end}]`));
console.log(companyName);

// get age square
const agesSquare = ages.map(age => Math.sqrt(age));

const agesTimesTwo = ages.map(age => age * 2);
console.log(agesSquare);
console.log(agesTimesTwo);

// sort

// sort company by start year
// const sortedCompanies = companies.sort(function(c1,c2){
//     if(c1.start > c2.start){
//         return 1
//     } else {
//         return -1
//     }
// });

// const sortedCompanies = companies.sort(function(c1,c2){
//     return c1.start - c2.start
// });

// const sortedCompanies = companies.sort((c1, c2) => (c1.start > c2.start ? 1 : -1));

const sortedCompanies = companies.sort((c1, c2) => (c1.start - c2.start));

console.log(sortedCompanies);

// sort ages
const agesSorted = ages.sort((a, b) => (a - b));

const agesReversed = ages.sort((a, b) => b - a);
console.log(agesSorted);
console.log(agesReversed);

// The sort() method sorts an array alphabetically
let fruits = ["Banana", "Orange", "Apple", "Mango"];
// const fruitsSorted = fruits.sort();

console.log(fruits);
console.log(fruits.sort());
console.log(fruits.reverse());

// reduce
/*
The reduce() method reduces the array to a single value.
The reduce() method executes a provided function for each value of the array (from left-to-right).
The return value of the function is stored in an accumulator (result/total).
Note: reduce() does not execute the function for array elements without values.
Note: this method does not change the original array.

array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
*/

// let sumAges = 0;
// for(let i = 0; i < ages.length; i++){
//     sumAges += ages[i]
// }

// const sumAges = ages.reduce(function (total, age) {
//     return total + age
// }, 0);

const sumAges = ages.reduce((total, age) => total + age, 0);

console.log(sumAges);

const companyYears = companies.reduce((total, company) => total + (company.end - company.start), 0);

console.log(companyYears);

// combined example

const combined = ages
    .map(age => age * 2)
    .filter(age => age >= 40)
    .sort((a, b) => a - b)
    .reduce((total, age) => total + age, 0);

console.log(combined);



