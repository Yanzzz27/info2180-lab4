window.onload= function(){
	var boundary=document.getElementById("boundary1")
	var allboundary= document.querySelectorAll(".boundary");
	var end=document.getElementById("end");
	var startbutton= document.getElementById("start"); 
	var statushead = document.getElementById("status");
	var gamemaze= document.getElementById("maze");


	boundary.onmouseover=function () {
		boundary.classList.add("youlose");
	}
	for (var i = 0; i < allboundary.length-1; i++) {
		allboundary[i].onmouseover = function (){
			for (var i = 0; i < allboundary.length-1; i++) {
				allboundary[i].classList.add("youlose");
			}
		}
	}
	end.onmouseover= function () {
		if (boundary.getAttribute("class")== "boundary") {
			statushead.innerHTML="You Win!";
		} else {
			statushead.innerHTML="You Lose!";
		}
	}

	startbutton.onclick= function () {
		statushead.innerHTML= 'Move your mouse over the "S" to begin.'
		for (var i = 0; i < allboundary.length-1; i++) {
			allboundary[i].setAttribute("class", "boundary");
		}
	}

	gamemaze.onmouseleave= function () {
		for (var i = 0; i < allboundary.length-1; i++) {
				allboundary[i].classList.add("youlose");
			}
	}

}
