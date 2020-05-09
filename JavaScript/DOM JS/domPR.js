let form = document.querySelector('.add-item');
// let submitBtn = document.querySelector('input[type="submit"]');
let button = document.querySelector('.btn');
let itemList = document.querySelector('.item-list');
let inputText = document.querySelector('#itemInput');
let filter = document.getElementById('filter');
// let editButton = document.querySelector('.edit');
let item1 = document.querySelector('.item-list-group');

// add event
form.addEventListener('submit', addItem);
// delete event
itemList.addEventListener('click', removeItem);
// filter event
filter.addEventListener('keyup', filterItem);
// edit event
itemList.addEventListener('click',editItem);



function addItem(e) {
    e.preventDefault();
    // create element
    let newLi = document.createElement('li');
    // add className
    newLi.className = 'item-list-group';
    // add newLi to ul
    itemList.appendChild(newLi);

    // create p tag and add text node to p tag
    let mypTag = document.createElement('p');
    // add class to p tag
    mypTag.className = 'pItem';
    mypTag.appendChild(document.createTextNode(inputText.value));
    // mypTag to newLi
    newLi.appendChild(mypTag);

    // add delete button
    let delButton = document.createElement('button');
    // add class to delButton
    delButton.className = 'del-btn';
    // add text to delButton
    delButton.appendChild(document.createTextNode('X'));

    // add edit button
    let editBtn = document.createElement('button');
    // add class to edit button
    editBtn.className = 'edit';
    // add text to edit button
    let editBtnText = document.createTextNode('Edit');
    editBtn.appendChild(editBtnText);

    // add delButton and editBtn to newLi
    newLi.appendChild(editBtn);
    newLi.appendChild(delButton);

    // clear input field
    setTimeout(clearInput,3000);
}

// remove item
function removeItem(e) {
    if (e.target.classList.contains('del-btn')) {
        if (confirm('Are You Sure?')) {
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// filter item
function filterItem(e) {
    // convert text to lower case
    let text = e.target.value.toLowerCase();

    // get lis
    let items = document.getElementsByTagName('li');

    // convert items to array
    Array.from(items).forEach(function (item) {
        let itemName = item.firstChild.textContent;
        // console.log(itemName);

        if (itemName.toLowerCase().indexOf(text) !== -1) {
            item.style.display = 'flex'
        } else {
            item.style.display = 'none'
        }
    })
}

// indexOf() Method: //
/*
string.indexOf(search value,start from)
it is searching first value.
case sensitive.
if search value doesn't found in string it return -1.
 */

// editItem
function editItem(e){
    if(e.target.classList.contains('edit')){
        let thatItem = e.target.parentElement.firstChild.textContent;
        let newText = prompt('edit item', thatItem);

        if (newText !== null){
            e.target.parentElement.firstChild.textContent = newText;
        }
    }
}

// clear input
function clearInput(){
    inputText.value = '';
}