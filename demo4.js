


// var header=document.querySelector('#main-header');
// header.style.borderBottom='4px solid black';
// var input=document.querySelector('input');
// input.value="fill name";
// var submit=document.querySelector('input[type="submit"]');
// submit.value='SEND';
// var items=document.querySelector('.list-group-item');
// items.style.color='red';
// var lastitems=document.querySelector('.list-group-item:last-child');
// lastitems.style.color='red';
// var nthitems=document.querySelector('.list-group-item:nth-child(2)');
// nthitems.style.color='green';


var nthitems=document.querySelector('.list-group-item:nth-child(2)');
nthitems.style.background='green';
var nth2items=document.querySelector('.list-group-item:nth-child(3)');
nth2items.style.visibility='hidden';



// var title=document.querySelectorAll('.title');
// console.log(title);
// title[0].textContent='hello';
// var li=document.querySelectorAll('li:nth-child(odd)');
// for(var i=0;i<li.length;i++){
//     li[i].style.background='green';
// }

// var li=document.querySelectorAll('li:nth-child(even)');
// for(var i=0;i<li.length;i++){
//     li[i].style.background='green';
// }
var list=document.querySelectorAll('li');
list[1].style.color='lightgreen';
var li=document.querySelectorAll('li:nth-child(odd)');
for(var i=0;i<li.length;i++){
    li[i].style.background='green';
}

