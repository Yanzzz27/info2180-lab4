window.onload= function(){
	var boundary=document.getElementById("boundary1")
	var allboundary= document.querySelectorAll(".boundary");
	var end=document.getElementById("end");
	var startbutton= document.getElementById("start");

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
			console.log("You Win!");
		} else {
			console.log("You Lose!");
		}
	}

	startbutton.onclick= function () {
		for (var i = 0; i < allboundary.length-1; i++) {
			allboundary[i].setAttribute("class", "boundary");
		}
	}

}
