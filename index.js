var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "L":
      var sound2  = new Audio("sound2.mpeg");
      sound2.play();
      break;

    case "A":
      var sound1 = new Audio("sound1.mpeg");
      sound1.play();
      break;

    case "V":
      var sound3 = new Audio('sound3.mpeg');
      sound3.play();
      break;

    case "A":
      var sound4 = new Audio('sound4.mpeg');
      sound4.play();
      break;

    case "N":
      var sound5 = new Audio('sound5.mpeg');
      sound5.play();
      break;

    case "Y":
      var sound6 = new Audio('sound6.mpeg');
      sound6.play();
      break;

    case "A":
      var sound8 = new Audio('sound8.mpeg');
      sound8.play();
      break;


    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}

    
