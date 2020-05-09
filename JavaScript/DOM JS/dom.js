// Get Element By Id //
// console.log(document.getElementById('header-title'));
// let headTitle = document.getElementById('header-title');
// let header = document.getElementById('header');

// big difference between textContent and innerText is when use innerText styles was considering.
// console.log(headTitle.textContent);
// console.log(headTitle.innerText);
//
// headTitle.textContent = 'hi';
// headTitle.innerText = 'GoodBye';
// headTitle.innerHTML = '<p>naser ahadi</p>';
//
// console.log(headTitle.textContent);
// console.log(headTitle);
//
// header.style.borderBottom = '5px double #000';

// Get Element By Class Name //
// let items = document.getElementsByClassName('item-list-group');
// console.log(items);
// console.log(items[2]);
// items[2].style.backgroundColor = 'yellow';
// items[2].style.fontWeight = 'bold';
// items[2].textContent = 'item 2 Changed';

// for (let i = 0; i < items.length; i++) {
//     items[i].style.backgroundColor = '#f4f4f4'
// }

// GET ELEMENT BY TAG NAME //
// let li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[2]);
// li[2].style.backgroundColor = 'yellow';
// li[2].style.fontWeight = 'bold';
// li[2].textContent = 'item 2 Changed';
//
// for (let i = 0; i < li.length; i++) {
//     li[i].style.backgroundColor = '#f4f4f4'
// }


// QUERY SELECTOR //
// let header = document.querySelector('#header');
// header.style.borderBottom = 'solid 3px red';
//
// let input = document.querySelector('input');
// input.value = 'added value';
//
// let submit = document.querySelector('input[type="submit"]');
// submit.value = 'SEND';
//
// let item = document.querySelector('.item-list-group');
// item.style.color = 'red';
//
// let lastItem = document.querySelector('.item-list-group:last-child');
// lastItem.style.color = 'blue';
//
// let nthItem = document.querySelector('.item-list-group:nth-child(3)');
// nthItem.style.color = 'coral';


// QUERY SELECTOR ALL //
// let title = document.querySelectorAll('.head-line');
// console.log(title);
// console.log(title[0]);
// title[0].textContent = 'helloooo';
//
// let odd = document.querySelectorAll('.item-list-group:nth-child(odd)');
// console.log(odd);
//
// for(let i = 0; i < odd.length; i++){
//     odd[i].style.backgroundColor = '#ccc'
// }
//
// let even = document.querySelectorAll('.item-list-group:nth-child(even)');
// console.log(even);
//
// for(let i = 0; i < even.length; i++){
//     even[i].style.backgroundColor = 'yellow'
// }

// Create Element //
// let newDiv = document.createElement('div');

// add class
// newDiv.className = 'newDivClass';

// add id
// newDiv.id = 'newDivId';

/// add text ///
// let newDivText = document.createTextNode('Hello Dom');
// newDiv.appendChild(newDivText);
//
// let container = document.querySelector('.header');
// let h1 = document.querySelector('h1');
//
// console.log(newDiv);
//
// container.insertBefore(newDiv,h1);
//
// console.log(container);
//
// newDiv.style.fontSize = '50px';
// newDiv.style.fontWeight = 'bold';


// add new li in ul //
// let newLi = document.createElement('li');
// let newLiText = document.createTextNode('New Item Here');

// newLi.appendChild(newLiText);
// console.log(newLi);

// let ul = document.querySelector('ul');
// let li = document.querySelector('li');

// ul.insertBefore(newLi,li);

// console.log(ul);

// Add Event Listener //
let button = document.querySelector('.btn');
let box = document.getElementById('box');
let inputItem = document.querySelector('input[type="text"]');
let outputPart = document.getElementById('output');
let selectItem = document.querySelector('select');
let form = document.querySelector('form');

button.addEventListener('click', buttonClick);
// button.addEventListener('dblclick',buttonClick);

// button.addEventListener('mousedown',buttonClick);
// button.addEventListener('mouseup',buttonClick);

// button.addEventListener('mouseover',buttonClick);
// button.addEventListener('mouseout',buttonClick);

// button.addEventListener('mouseenter',buttonClick);
// button.addEventListener('mouseleave',buttonClick);

box.addEventListener('mousemove', runEvent);

inputItem.addEventListener('keydown', inputEvent);
// inputItem.addEventListener('keyup',runEvent);
// inputItem.addEventListener('keypress',runEvent);

// selectItem.addEventListener('change',runEvent);
selectItem.addEventListener('input', runEvent);

form.addEventListener('submit', runEvent);

function buttonClick(e) {
    // console.log('button clicked');
    // document.querySelector('.wrapper').style.backgroundColor = '#f4f4f4';
    // document.getElementById('header-title').textContent = 'Changed';

    // console.log(e);
    console.log(e.target);
    console.log(e.target.className);
    console.log(e.target.value);
    console.log(e.type);
}

function runEvent(e) {
    e.preventDefault();
    console.log('EVENT TYPE :' + e.type);
    box.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},40)`;
    // console.log(e.offsetX,e.offsetY);
}

function inputEvent(e) {
    console.log('EVENT TYPE :' + e.type);
    outputPart.textContent = `${e.target.value}`;
    console.log(e.target.value)
}

