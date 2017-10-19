window.onload= function(){
	var boundary=document.getElementById("boundary1")
	var allboundary= document.querySelectorAll(".boundary");

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

}