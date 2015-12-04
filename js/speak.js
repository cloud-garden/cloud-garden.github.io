var isSpeaking = false;

$(function(){

    if (!'SpeechSynthesisUtterance' in window) {
        console.log('Speech synthesis(音声合成) APIには未対応です.');
        return;
    }

    var msg = new SpeechSynthesisUtterance();
    var voices = window.speechSynthesis.getVoices();

    msg.voice = voices[7];
    msg.volume = 1.0;
    msg.rate = 1.2;
    msg.pitch = 1.3;
    msg.lang = 'ja-UP';
    msg.onend = function (event) {
    	isSpeaking = false;
    }

		$("#character-img").click(function() {
			if(!isSpeaking) {
				isSpeaking = true;
		    msg.text = $("#character-comment p").text();
		    			console.log("ok")
		    speechSynthesis.speak(msg);
			}
		});
});
