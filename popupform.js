let button = document.getElementById("downloadButton");

let popup = document.getElementById("popup");

let book = document.getElementById("bookText");

function download(){
	document.getElementById("popup").style.display = "block";

}

function closer(){
	document.getElementById("popup").style.display = "none";
}


window.onclick = function(event) {
  if (event.target == popup) {
    popup.style.display = "none";
  }
}

function thankyou(){
	var formText = document.getElementById("formText").value;
	var formMail = document.getElementById("formMail").value;
	var messageBox = document.getElementById("messageBox");
	
	if (formText !="" && formMail !="") {
		var changeText = document.getElementById("innerDiv");
		changeText.innerHTML = "<span style='font-family: Open Sans; font-size: 16px; text-align: center;'><b>Thanks for subscribing!</b><br/>Please check your e-mail. We sent you your own copy.<br/><br/> <b>Enjoy!!!</b></center>";
	} else {
		messageBox.innerHTML = "<span style='font-family: Open Sans; font-size: 16px; text-align: center; color: red'>Please fill all fields!</span>"
		return;
	}
	
}
