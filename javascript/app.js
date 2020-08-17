var list = document.getElementById("list") 
function addtodo(){

    var todo_item= document.getElementById('todo-item')
    var li = document.createElement('li')
    li.setAttribute("id", "listname")
    var note= document.createTextNode(todo_item.value)
    li.appendChild(note)
    list.appendChild(li)
    todo_item.value=""
    

    var del =document.createElement("button")
    var deltext=document.createTextNode("Delete")
    del.appendChild(deltext)
   list.appendChild(del)
   
  
}
function deleteall(){
    list.innerHTML=""
}