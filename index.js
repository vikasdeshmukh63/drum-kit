// BUTTONS SELECTION
const buttons = document.querySelectorAll(".drum");


// ADDING EVENT LISTENER TO BUTTONS FOR LISTENING THE CLICKS
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    soundBar(this.innerText);
    keystyle(this.innerText);
  });
});


// ADDING EVENT LISTENER TO BUTTONS FOR LISTENING THE KEYBOARD KEYPRESS
document.addEventListener("keydown", (e) => {
  soundBar(e.key);
  keystyle(e.key);
});


// FUNCTION FOR SOUND GENERATION
function soundBar(key) {
  switch (key) {
    case "w":
      var audio = new Audio("./sounds/crash.mp3");
      audio.play();
      break;

    case "a":
      var audio = new Audio("./sounds/kick-bass.mp3");
      audio.play();
      break;

    case "s":
      var audio = new Audio("./sounds/snare.mp3");
      audio.play();
      break;

    case "d":
      var audio = new Audio("./sounds/tom-1.mp3");
      audio.play();
      break;

    case "j":
      var audio = new Audio("./sounds/tom-2.mp3");
      audio.play();
      break;

    case "k":
      var audio = new Audio("./sounds/tom-3.mp3");
      audio.play();
      break;

    case "l":
      var audio1 = new Audio("./sounds/tom-4.mp3");
      audio1.play();
      break;
    default:
      console.log("Invalid");
  }
}


// FUNCTION FOR CHANGING STYLE OF BUTTON AFTER PRESSING
function keystyle(pressedButton){
  let classKey = document.querySelector("."+ pressedButton);

  classKey.classList.add("pressed");
  setTimeout(()=>{
    classKey.classList.remove("pressed");
  },100);
}