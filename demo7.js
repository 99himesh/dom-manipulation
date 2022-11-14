var form=document.getElementById('addForm');
var itemList=document.getElementById('items');


form.addEventListener('submit',addItem);
itemList.addEventListener('click',removeitem);
      function  addItem(e){
        e.preventDefault();

        //to get  value from imput
      var newItem=document.getElementById('item').value;
      //create a new li
      var li=document.createElement('li');
      //add class
      li.className='list-group-item';
      
      //add text node with input value
      li.appendChild(document.createTextNode(newItem));


      // add button

      var deletebtn=document.createElement('button');

     //add class name
     deletebtn.className='btn btn-danger btn-sm float-right delete';

     //append textnode

     deletebtn.appendChild(document.createTextNode('x'));
     
     // append button to li
     li.appendChild(deletebtn);
     //append li to list
      itemList.appendChild(li);
    

    // add edit button 
   var editbtn=document.createElement('button');
  //add class name
   editbtn.className='float-right mx-2';
    //append text node
   editbtn.appendChild(document.createTextNode('edit'));
   //append button to li
      li.appendChild(editbtn);
   //append li to list
    itemList.appendChild(li);
 }

    //remove element
    function removeitem(e){
      if(e.target.classList.contains('delete')){
        if(confirm('are you sure')){
          var li=e.target.parentElement;
          itemList.removeChild(li);
        }
      }
    }
