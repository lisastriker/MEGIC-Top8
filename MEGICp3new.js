function personReveal(){
	var x=document.getElementById("personPopup");
	document.getElementById("list1").classList.toggle("done",true);
	if(x.style.visibility=="visible"){
		x.style.visibility="hidden";
	}
	else{
		x.style.visibility="visible";
	
	}

}

function vitalsReveal(){
	var x=document.getElementById("vitalsPopup");
	document.getElementById("list2").classList.toggle("done", true);
	if(x.style.visibility=="visible"){
		x.style.visibility="hidden";
	}
	else{
		x.style.visibility="visible";
	}
}