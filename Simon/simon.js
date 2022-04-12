var buttonColors = ["red","blue","green","yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;

function nextSequence(){
  level++;
  $("h1").text("Level "+level);
  userClickedPattern = [];
  var randomNumber = Math.floor(Math.random()*4);
  var randomChosenColour = buttonColors[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#"+randomChosenColour).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

$(".btn").click( function(event) {
  var userChosenColor = event.target.id;
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  animatePress(userChosenColor);
  if (checkAnswer(userClickedPattern.length-1)){
    if (userClickedPattern.length == level){
      setTimeout(nextSequence,1000);
    }
  } else {
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 200);
      $("h1").text("Game over, press any key to restart");
      startOver();
  }

})

function playSound(color){
  var audio = new Audio("sounds/"+color+".mp3");
  audio.play();
}

function animatePress(currentColor) {
  $("#"+currentColor).addClass("pressed");
  setTimeout(function() {
    $("#"+currentColor).removeClass("pressed");
  }, 100)
}

$(document).keydown(function() {
  if (level === 0) {
    $("h1").text("Level 0");
    nextSequence();
  }
})

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] == userClickedPattern[currentLevel]) {
    return true;
  } else {
    return false;
  }
}

function startOver() {
  level = 0;
  gamePattern = [];
}
