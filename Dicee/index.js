var randomNumber1 = Math.floor(Math.random()*6)+1
var leftDie = document.querySelector("img.img1")
leftDie.src = "images/dice" + randomNumber1 + ".png";

var randomNumber2 = Math.floor(Math.random()*6)+1
var rightDie = document.querySelector("img.img2")
rightDie.src = "images/dice" + randomNumber2 + ".png";

var headerToUpdate = document.querySelector("h1");
if (randomNumber1 > randomNumber2) {
  headerToUpdate.innerHTML = "😎 Player 1 Wins!"
} else if (randomNumber2 > randomNumber1) {
    headerToUpdate.innerHTML = "Player 2 Wins! 😎"
} else if (randomNumber1 === randomNumber2) {
  headerToUpdate.innerHTML = "😮 Draw! 😮"
}
