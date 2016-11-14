//Change Variables and save DOM Element to each
var newBGColor = document.getElementById("newBGColor");
var colorChangerButton = document.getElementById("colorChangeButton");

/* Event Listener for button.
   Sets Background for provided value*/
colorChangerButton.addEventListener("click", function(){

document.body.style.backgroundColor=newBGColor.value;
})
