


var quizQuestions = [
    {
        question: "Q1 : What does HTML stand for?",
        a: " Home Tool Markup language",
        b: " Hyper Text Markup Language",
        c: " Hyperlinks and Text Markup language",
        ans: "ans2"
    },

    {
        question: "Q2 : Who is making the Web standards?",
        a: "Mozilla",
        b: 'Microsoft',
        c: "The World Wide Web Consortium",
        ans: "ans3"
    }
    ,
    {
        question: "Q3 : Choose the correct HTML element for the largest heading",
        a: "<h1>",
        b: "<head>",
        c: "<heading>",
        ans: "ans1"

    }
    ,
    {
        question: "Q4 : What is the correct HTML element for inserting a line break?",
        a: "<br />",
        b: "<lb>",
        c: "<break>",
        ans: "ans1"

    }
    ,
    {
        question: "Q5 : Choose the correct HTML element to define important text",
        a: "<strong>",
        b: "<important>",
        c: "<i>",
        ans: "ans1"

    }
    ,
    {
        question: "Q6 :  Choose the correct HTML element to define emphasized text",
        a: "<i>",
        b: "<em>",
        c: "<italic> ",
        ans: "ans2"
    }
    ,
    {
        question: "Q7 :  Which character is used to indicate an end tag?",
        a: "*",
        b: "Not Mentioned",
        c: "/",
        ans: "ans3"
    }
    ,
    {
        question: "Q8 : Inline elements are normally displayed without starting a new line?",
        a: 'true',
        b: 'false',
        ans: "ans1"
    }
    ,
    {
        question: "Q9 : How can you make a numbered list?",
        a: "<ol>",
        b: "<ul>",
        c: "<list>",
        ans: "ans1"
    }
    ,
    {
        question: "Q10 : What is the correct HTML for making a text area?",
        a: "<input type = 'textarea'>",
        b: "<input type = 'textbox'>",
        c: "None of the above",
        ans: "ans3"
    }
]

var question = document.querySelector('#question');
var opt1 = document.querySelector('#op1');
var opt2 = document.querySelector('#op2');
var opt3 = document.querySelector('#op3');

var answers = document.querySelectorAll(".rad-input")
var submit = document.querySelector('#submit');

var scoreboard = document.querySelector('#scoreboard');
var percent = document.querySelector('#percent');


var questionCount = 0;
var score = 0;
function questionLoad() {    
    var questionsList = quizQuestions[questionCount];
    question.innerText = questionsList.question;
    opt1.innerText = questionsList.a;
    opt2.innerText = questionsList.b;
    opt3.innerText = questionsList.c;
}

questionLoad();

function getCheckAnswer() {
    var answer;
    for (i = 0; i < answers.length; i++) {
        if (answers[i].checked) {
            answer = answers[i].id

        }

    }
    return answer;


}
function deselect() {
    var answer;
    for (i = 0; i < answers.length; i++) {
        answers[i].checked = false;

    }

}
submit.addEventListener("click", () => {
    var checkAnswers = getCheckAnswer();
    if (checkAnswers === quizQuestions[questionCount].ans) {
        score++
    }
    else {
    }
    
    localStorage.setItem("Score", score);
    localStorage.setItem("Questions", quizQuestions.length);
    localStorage.setItem("Percentage", percent);
    questionCount++;
    if (questionCount < quizQuestions.length) {
        questionLoad();
        deselect();
    }
    else if (score > 1) {
      window.location.href = "./score.html";
    }
    else{
        window.location.href = "./score.html";
    }
    
})





const startingMin = 15;
let time = startingMin * 60;

const timer = document.getElementById("timer");

setInterval(updateTimer, 1000)

function updateTimer(){
    const min = Math.floor(time / 60);
    let sec = time % 60;

    sec = sec < 10 ? '0' + sec : sec;
    timer.innerHTML  = `${min}:${sec}`;
    time--;
}









var elem = document.documentElement;

/* View in fullscreen */
 function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { 
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { 
    elem.msRequestFullscreen();
  }
}
