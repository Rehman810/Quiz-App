var heading = document.getElementById("testchoiceh1");
var userName = localStorage.getItem("User Name");

heading.innerHTML = "Mr " + userName;



let totalQuestion = document.getElementById("t-q");
let totalMarks = document.getElementById("t-m");
let Score = document.getElementById("Score");
let Percentage = document.getElementById("percent");

let correct = localStorage.getItem("Score");
let tQuestion = localStorage.getItem("Questions");
let percent = localStorage.getItem("Percentage");


totalQuestion.innerHTML = `Total Questions: ${tQuestion}`;
totalMarks.innerHTML = `Correct Answers: ${correct}`;
Score.innerHTML = `You Score: ${correct} / ${tQuestion}`;
Percentage.innerHTML = `Your Percentage: ${correct / tQuestion * 100}` ;





