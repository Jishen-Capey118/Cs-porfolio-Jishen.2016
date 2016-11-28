// Create a new list item when clicking on the "Add" button
var elementsCreated = 0
function newElement(){
  var li=document.createElement("li")
  var inputvalue = document.getElementById("myInput").value;
  var t= document.createTextNode(inputvalue + elementsCreated);
  li.appendChild(t);
  li.className = "listElement"
  li.id = "element" + elementsCreated
  li.addEventListener("click", deleteThisElement(elementsCreated)
  )
  elementsCreated++
  document.getElementById("myUL").appendChild(li)
}

// Click on a close button to hide the current list item


function deleteThisElement(elemNumber){
  alert(elemNumber)
  var element = document.getElementById("element" + elemNumber)
  element.parentNode.removeChild(element);
}

//get value of textbox




//code to close list