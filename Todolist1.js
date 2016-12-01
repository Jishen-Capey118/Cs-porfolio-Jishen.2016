// Click on the close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
 
// Create a new list item when clicking on the "Add" button
function newElement(inputtext) {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    if(inputValue === ""){
        inputValue = inputtext
    }
    document.getElementById("myInput").value = ""
    var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
  } else {
      document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";}}
}
//things I will use when I am writing
var stuffToWrite = [
  "Wake Up",
  "idkwhythisdoesntwork",
  "Go to Computer Science class",
  "Help Hung Tam's Depression",
  "Watch Anime",
  "Listen to Andy cry about Kathy",
  "Feed Princess, since she can't feed herself",
  "Play Roblox"
  
]
for(i=0;i<stuffToWrite.length;i++){
  newElement(stuffToWrite[i])
}