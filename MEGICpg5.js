function revealHeadTilt(){
	document.getElementById("hospitalImageAfter").style.visibility="visible";
	document.getElementById("hospitalImageToDisappear").style.visibility="hidden";
	document.getElementById("list1").classList.toggle("done");
	document.getElementById("rightInfo").style.visibility="visible";
	document.getElementById("taskComplete").style.visibility="visible";
	document.getElementById("checkListul").style.visibility="visible";
	document.getElementById("list1").style.visibility="visible";
	document.getElementById("list2").style.visibility="visible";
	document.getElementById("list3").style.visibility="visible";
	
}
var count = 0;
var timeElapsed=0;
var timeElapsedCount=0;

function checkForMove(){
	document.getElementById("list2").classList.toggle("done",true);
}

function sizeChange(){
	var x = document.getElementById("circleSize");
	x.classList.toggle("circleSize");
	count+=1
	if(count ==1){
		timeElapsedCount = timeElapsed;
	}
	//Bag is tapped 8 times
	if (count == 8){
		var difference = timeElapsed - timeElapsedCount;
		if(difference < 12 || difference > 20){
			alert(`You're all done. You took ${difference} seconds for 4 squeezes. The optimal timing is 12-20 seconds. Please try again`);
			timeElapsed = 0; 
			count = 0;
			timeElapsedCount = 0;
			sizeChange();
			}
		else{
			alert(`You're all done. You took ${difference} seconds for 4 squeezes. The optimal timing is 12-20 seconds. Please proceed and press the next button`);
			document.getElementById("list3").classList.toggle("done");
		}
		
	}	
}

function runTimer(){
	var a = document.getElementById("timer");
	a.disabled = true;
	var d = setInterval(()=>{
		timeElapsed +=1;
		
	document.getElementById("time").innerHTML="00." + timeElapsed;
	if (timeElapsed>59){
		clearInterval(d);
	}
	}, 1000);
}
