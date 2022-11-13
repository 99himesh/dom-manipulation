var itemlist=document.querySelector('#items');
// parent node

console.log(itemlist.parentNode);
itemlist.parentNode.style.background='red';
console.log(itemlist.parentNode.parentNode.parentNode);

// parent element
console.log(itemlist.parentElement);
itemlist.parentElement.style.background='red';


// child node
console.log(itemlist.childNodes)

children
console.log(itemlist.children)
console.log(itemlist.children[1])
itemlist.children[1].style.background='yellow';


// last children
console.log(itemlist.lastChild)
itemlist.lastElementChild.textContent="hello";  


// next sibling
console.log(itemlist.nextSibling)
// next element sibling
console.log(itemlist.nextElementSibling)

// prev sibling

console.log(itemlist.previousSibling)
// prev element sibling

console.log(itemlist.previousElementSibling)
itemlist.previousElementSibling.style.background='red';

//create element
var newDiv=document.createElement('div');
 newDiv.className='hello';
 newDiv.id='helloworld';
 newDiv.setAttribute('title','hello div');

 var newDivText=document.createTextNode('hello world');
 newDiv.appendChild(newDivText);

console.log(newDiv)
var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');
container.insertBefore(newDiv,h1 )

var ul=document.querySelector('ul#items');
console.log(ul);
var li=document.querySelector('li.list-group-item');
ul.insertBefore(newDiv,li);




