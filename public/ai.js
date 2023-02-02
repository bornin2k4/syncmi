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

var i = 0;
if (i==0) {
  i+=1;
  speakOutLoud("...");
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

  var voices = window.speechSynthesis.getVoices();
  utterance.voice = voices[2]; // Note: some voices don't support altering params

  utterance.voiceURI = 'native';
  utterance.volume = 1; // 0 to 1
  utterance.rate = 1; // 0.1 to 10
  utterance.pitch = 1; //0 to 2
  utterance.lang = 'en-US';

  // Thalha - 22/01/23 
  // Greeting 1
  var greeting1 = ["hi", "hello", "hai"];
  for (item of greeting1) {
    if (spoken.includes(item)) {
      utterance.text = "Hello...";
      speechSynthesis.speak(utterance);
      break;
    }
  }

  // Arunachalam - 23/01/23 
  // Greetings2
  var greeting2 = ["how are you", "how about you", "how are you doing", "is all well"];
  for (item of greeting2) {
    if (spoken.includes(item)) {
      utterance.text = "Thanks For Asking, I'm Fine...";
      speechSynthesis.speak(utterance);
      break;
    }
  }

  // Thalha - 24/01/23
  // service
  var service = ["what are the services provided"];
  for (item of service) {
    if (spoken.includes(item)) {
      utterance.text = "We Provide all Web related services from Web Designing to Development...";
      speechSynthesis.speak(utterance);
      break;
    }
  }

  


}

