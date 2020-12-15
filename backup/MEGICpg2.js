//check for press on images part 1
function checkForPress(){
	var clicked = false;
	document.getElementById("showMe").innerHTML="clicked";
}
//Make container disappear after answering
function nextQuestion(){
	document.getElementById("questionContainer").style.visibility="hidden";
	document.getElementById("administerContainer").style.visibility="visible";
	document.getElementById("administerContainerAbove").style.visibility="visible";
}
function dragStart(event) {
  event.dataTransfer.setData("Text", event.target.id);
}

function dragging(event) {
  document.getElementById("showMe").innerHTML = "The p element is being dragged";
}

function allowDrop(event) {
  event.preventDefault();
  document.getElementById("showMe").innerHTML="letmestay";
}

function drop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("Text");
  event.target.appendChild(document.getElementById(data));
  document.getElementById("showMe").innerHTML = "The p element was dropped";
}
//check for press on images part 2
/*function checkClickAndDrag(){
	document.getElementById("showMe").innerHTML="clicked";
}*/