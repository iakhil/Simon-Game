var buttonColours = ["red", "blue", "green", "yellow"]
var randomChooseColour = buttonColours[nextSequence()]
var gamePattern = []
$("#" + randomChooseColour).fadeOut(400).fadeIn(400)
gamePattern.push(randomChooseColour)
var clicked = false;
$("button").click(function() {
  var userChosenColour = $(this).attr("id")
  userClickedPattern.push(userChosenColour)

})

$(".btn").click(function() {

  var chosenColour = $(this).attr("id")
  animatePress(chosenColour)
})
// if(clicked = true)
// {
//   handler()
// }

// function handler()
// {
//   userChosenColour =
// }

var level = 0
var started = false
$(document).keypress(function () {

  //if(state == 1)
  if(!started)
  {
  $("h1").html("Level " + level)
  nextSequence()
  started = true
}
  //level +=
})
function nextSequence()
{
  randomNumber =  Math.floor(Math.random() * 4)
  return randomNumber;
var audio = new Audio("sounds/" + randomChooseColour + ".mp3");
audio.play();
level += 1;
$("h1").html("Level " + level)
}

function animatePress(currentColour)
{
  $("#" + currentColour).addClass("pressed")

  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);

  }
