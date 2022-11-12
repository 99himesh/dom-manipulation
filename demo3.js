var items=document.getElementsByClassName('list-group-item');
items[2].style.backgroundColor='green';
for(var i=0;i<items.length;i++){
    items[i].style.fontWeight='bold';
    items[i].style.color='orange'
}



var li=document.getElementsByTagName('li');
li[4].style.background='red';
li[4].style.listStyle='none';
for(var i=0;i<li.length;i++){
    li[i].style.fontWeight='bold';
    li[i].style.color='orange';
    
}