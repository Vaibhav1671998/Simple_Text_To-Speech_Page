var voicelist = responsiveVoice.getVoices();
for (v in voicelist) {
   console.log(voicelist[v].name); 
   $('#voice').append('<option id="' + voicelist[v].name + '" value="' + voicelist[v].name + '">' + voicelist[v].name + '</option>');
}

function enterpressalert(e, input){
	if(responsiveVoice.voiceSupport()) {
      var code = (e.keyCode ? e.keyCode : e.which);
      if(code == 13) { 
         text = document.getElementById("text").value;
         selectedVoice = $('#voice :selected').text()
         responsiveVoice.speak(text,selectedVoice);
      }
   }
   else {
      alert("Your browser doesn't support this app")
   }  
}
document.getElementById("demo").addEventListener('click',function () {
	if(responsiveVoice.voiceSupport()) {
      text = document.getElementById("text").value;
      selectedVoice = $('#voice :selected').text()
      responsiveVoice.speak(text,selectedVoice);
   }
   else {
      alert("Your browser doesn't support this app")
   }  
});