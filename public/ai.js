// SpeechRecognition

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();


recognition.onstart = function () {
  console.log("Started..");
  document.getElementById("mic").style.animation = "wave 0.5s infinite linear";
};

recognition.onend = () => {
  console.log("Ended...");
  document.getElementById("mic").style.animation = "none";
};

recognition.onresult = function (e) {
  const resultIndex = e.resultIndex;
  const { transcript } = e.results[resultIndex][0];
  console.log(transcript);
  speakOutLoud(transcript);
};

function speakNow() {
  recognition.start();
}


function speakOutLoud(transcript) {
  let spoken = transcript;

  // The action of saying or expressing something aloud..
  const SpeechSynthesisUtterance =
    window.SpeechSynthesisUtterance || window.webkitSpeechSynthesisUtterance;

  const utterance = new SpeechSynthesisUtterance();



  // Artificial production of human speech
  const speechSynthesis =
    window.speechSynthesis || window.webkitspeechSynthesis;

  // Thalha - 22/01/23 
  // Greeting 1
  var greeting1 = ["hi", "hello", "hai"];
  for (item of greeting1) {
    if (spoken.includes(item)) {
      utterance.volume = 1; 
      utterance.rate = 1;
      utterance.pitch = 1;
      utterance.text = "Hi, It worked";
      speechSynthesis.speak(utterance);
      break;
    }
  }
  
  // Arunachalam - 23/01/23 
  // Greetings2
  var greeting2 = ["how are you", "how about you","how are you doing","is all well"];
  for (item of greeting2) {
    if (spoken.includes(item)) {
      utterance.volume = 1; 
      utterance.rate = 1;
      utterance.pitch = 1;
      utterance.text = "Thanks For Asking, I'm Fine...";
      speechSynthesis.speak(utterance);
      break;
    }
  }

  


}
