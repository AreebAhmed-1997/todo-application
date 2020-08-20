var list = document.getElementById("list") 
function addtodo(){

    var todo_item= document.getElementById('todo-item')
    var li = document.createElement('li')
    li.setAttribute("id", "listname")
    var note= document.createTextNode(todo_item.value)
    li.appendChild(note)
    list.appendChild(li)
    

    var del =document.createElement("button")
    var deltext=document.createTextNode("Delete")
    del.setAttribute("onclick","deleteitem(this)")
    del.setAttribute("id", "delitem") 
    del.appendChild(deltext)
    
    var edit =document.createElement("button")
    var edittext = document.createTextNode("Edit")
    edit.setAttribute("id", "editbtn")
    edit.setAttribute("onclick","edititem(this)")
    edit .appendChild(edittext)
    

    li.appendChild(del)
   li.appendChild(edit)
   
   todo_item.value=""
    
}
function deleteitem(e){
 e.parentNode.remove()
}
function deleteall(){
    list.innerHTML=""
}
function edititem(e){
    e.parentNode.firstChild.nodeValue 
    var editing= prompt("enter the value", "val")
    e.parentNode.firstChild.nodeValue = editing
}
