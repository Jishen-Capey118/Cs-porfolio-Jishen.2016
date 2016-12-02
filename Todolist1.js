// Click on the close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;

// Create a new list item when clicking on the "Add" button by using a function newElement(inputtext)
function newElement(inputtext) {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    //If statement represents how nothing will appear if inputvalue === "" which is nothing
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
  //The getElementsByTagName(), all child elements matching the tag name are returned as an array. If not sure if this is written correctly, but this is supposed to check whether the hidden input element value is equal to a blank var
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
//Above the Variable i is set to the number 0. While variable i is less than d.length, repeat this block of code. Add one to variable i.
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
// This changes the innerHTML (the content inside) of every <TD> whose class is 'titlebg'. Every time the loop is ran, the if() statement is ran against the next element in the array.