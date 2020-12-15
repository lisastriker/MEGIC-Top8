
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function onOpenClick(){
	document.getElementById("vitalsPopup").classList.toggle("showThis");
}

function audioOpenClick(){
	document.getElementById("stridorSound").classList.toggle("showThisOne");
}

function purselipsOpenClick(){
	document.getElementById("purselipsPopup").classList.toggle("showThisTwo");
}



//check answer for breathing
function checkAnswer(){
	var x = document.getElementById("stridor").checked;
	if(x){
		document.getElementById("demo").style.visibility="visible";
		document.getElementById("demo").innerHTML="Yes, you are right!";
	}
	else{
		document.getElementById("demo").style.visibility="visible";
		document.getElementById("demo").innerHTML="You are wrong. The correct answer is Stridor.";
	}
}



//check answer for vitals
function checkAnswer2(){
	var ans1 = document.getElementById("heartrate").checked;
	var ans2 = document.getElementById("temperature").checked;
	var ans3 = document.getElementById("respiratoryrate").checked;
	var ans4 = document.getElementById("bloodpressure").checked;
	if(ans1==true && ans2==false && ans3==true && ans4==false){
		document.getElementById("answer2").innerHTML="Yes, you are right!";
	}
	else{
		document.getElementById("answer2").innerHTML="You are wrong. The correct answer is heart rate and respiratory rate.";
	}
}

//check for press on images part 1
function checkForPress(){
	var clicked = false;
	document.getElementById("showMe").innerHTML="clicked";
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

