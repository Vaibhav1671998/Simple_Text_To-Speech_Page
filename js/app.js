function enterpressalert(e, input){
	var code = (e.keyCode ? e.keyCode : e.which);
	if(code == 13) { 
		text = document.getElementById("text").value;
		responsiveVoice.speak(text);
	}
}
document.getElementById("demo").addEventListener('click',function () {
	text = document.getElementById("text").value;
	responsiveVoice.speak(text);
});