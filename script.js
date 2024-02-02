var userChoice;
var randomNumber;
var computerChoice;

var userChoice = prompt("heads or tails?")

var randomNumber = Math.random();
if (randomNumber < 0.5)
  randomNumber = 0
else
  randomNumber= 1
console.log(randomNumber)

if (randomNumber <= 0) {
    computerChoice = "heads";
}
if(randomNumber >= 1) {
    computerChoice = "tails";
}

if (userChoice === computerChoice) {
    alert("You guessed right! The coin flip landed on " + computerChoice + ".");
}
else {
    alert("Sorry, the coin flip landed on " + computerChoice + ".");
}

var birthYear;

birthYear = prompt("Year you were born?")

if ((2024 - birthYear) > 21) {
    alert("You are old enough to drink in the US");
}   else if ((2024 - birthYear) >= 21) {
    alert("You are old enough to drink in the US...barely");
}
else {
    alert("Sorry, you are not old enough to drink in the US");
}