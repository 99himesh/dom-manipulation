
var form=document.getElementById('addForm');
var itemList=document.getElementById('items');


form.addEventListener('submit',addItem);


      function  addItem(e){
        e.preventDefault();

        //to get  value from imput
      var newItem=document.getElementById('item').value;
     // add description value
      var newItem1=document.getElementById('item1').value;
      //create a new li
      var li=document.createElement('li');
      //add class
      li.className='list-group-item';
      
      //add text node with input value of item and description
      li.appendChild(document.createTextNode(newItem+' '+newItem1));




var filter=document.getElementById('filter');
var itemList=document.getElementById('items');

filter.addEventListener('keyup',filteritem);

function filteritem(e){
//convert text to lowerCase 
  var text=e.target.value.toLowerCase();
  var item=itemList.getElementsByTagName('li');
  Array.from(item).forEach(function(item){
     var itemName =item.firstChild.textContent;
     var desli=item.childNodes[1].textContent;
     if(itemName.toLocaleLowerCase().indexOf(text) !=-1  || desli.toLowerCase().indexOf(text!=-1   )){
        item.style.display='block';
     }else{
        item.style.display='none';
     }
  });
}