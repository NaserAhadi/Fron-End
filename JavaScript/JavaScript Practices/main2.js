// console.log(navigator.appVersion);

// Object Literal //
const book1 = {
    title: 'book one',
    author: 'Naser Ahadi',
    year: '2030',
    getSummary: function () {
        return `${this.title} will write by ${this.author} in ${this.year}`;
    }
};

const book2 = {
    title: 'book two',
    author: 'Naser Ahadi',
    year: '2025',
    getSummary: function () {
        return `${this.title} will write by ${this.author} in ${this.year}`;
    }
};
// console.log(book1);
// console.log(book1.getSummary());
// console.log(Object.values(book1));
// console.log(Object.keys(book1));

// console.log(book2);

// ******************************************************* //
// Constructor - ES5 //
// function Book(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
//
//     // method
//     this.getSummary = function () {
//         return `${this.title} will write by ${this.author} in ${this.year}`;
//     }
// }

// Instantiate an object
// const book3 = new Book('book three','Naser Ahadi','2030');
// const book4 = new Book('book four','Naser Ahadi','2028');
// console.log(book3.title);
// console.log(book4.getSummary());
// console.log(book3);

// ******************************************************* //
// Prototype //
// function Book(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
// }

// with this way method go to the prototype
// Book.prototype.getSummary = function(){
//     return `${this.title} was written by ${this.author} in ${this.year}`;
// };
//
// const book5 = new Book('book five','Naser Ahadi','2017');
// console.log(book5);
// console.log(book5.getSummary());

// ******************************************************* //
// Inheritance //
// function Magazine(title,author,year,month){
//     Book.call(this,title,author,year);
//
//     this.month = month;
// }

// Inherit Prototype (for method)
// Magazine.prototype = Object.create(Book.prototype);

// Instantiate magazine object
// const mag1 = new Magazine('programming','newyork times','2017','march');

// change magazine prototype constructor
// Magazine.prototype.constructor = Magazine;
// console.log(mag1);

// ******************************************************* //
// Classes - ES6 //
class Book1 {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year
    }


    getSummary() {
        return `${this.title} will write by ${this.author} in ${this.year}`;
    }

// static method : you don't need to instantiate object to execute that
    static toBookStore() {
        console.log('Barens & Noble')
    }
}

// Instantiate object
const book6 = new Book1('book six', 'Jon Dep', '2011');

console.log(book6);

Book1.toBookStore();

// ******************************************************* //
// Subclasses //
class Magazine extends Book1 {
    constructor(title,author,year,month){
        super(title,author,year);
        this.month = month
    }
}

// instantiate object
const mag1 = new Magazine('mag one','jon doe','2018','jan');
console.log(mag1);
console.log(mag1.getSummary());