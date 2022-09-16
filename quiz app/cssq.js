var quizQuestions = [
    {
        question: "Q1 : What does CSS stand for?",
        a: "Computer Style Sheet",
        b: "Cascading Style Sheet",
        c: "Colorful Style Sheet",
        ans: "ans2"
    },

    {
        question: "Q2 : Which HTML tag is used to define an internal style sheet?",
        a: "<CSS>",
        b: '<Style>',
        c: "<Script>",
        ans: "ans2"
    }
    ,
    {
        question: "Q3 : Which HTML attribute is used to define inline styles?",
        a: "class",
        b: "style",
        c: "styles",
        ans: "ans2"

    }
    ,
    {
        question: "Q4 : Which property is used to change the background color?",
        a: "background-color", 
        b: "bg-color",
        c: "color",
        ans: "ans1"

    }
    ,
    {
        question: "Q5 : Which property is used to change the font color?",
        a: "fgcolor",
        b: "text-color",
        c: "color",
        ans: "ans3"

    }
    ,
    {
        question: "Q6 :  Which CSS property controls the text size?",
        a: "text-style",
        b: "font-style",
        c: "font-size ",
        ans: "ans3"
    }
    ,
    {
        question: "Q7 : Which property is used to change the font of an element?",
        a: "font-style",
        b: "font-family",
        c: "font-weight",
        ans: "ans2"
    }
    ,
    {
        question: "Q8 : How do you make the text bold?",
        a: 'font-weight: bold',
        b: 'font: bold',
        c: 'style: bold',
        ans: "ans1"
    }
    ,
    {
        question: "Q9 : Which property is used to change the left margin of an element?",
        a: "margin-left",
        b: "padding-left",
        c: "indent",
        ans: "ans1"
    }
    ,
    {
        question: "Q10 : How do you select elements with class name 'test'?",
        a: "test",
        b: ".test",
        c: "#test",
        ans: "ans2"
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
        console.log(score)
    }
    else {
        console.log(score)
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




var startingMin = 15;
var time = startingMin * 60;

var timer = document.getElementById("timer");

setInterval(updateTimer, 1000)

function updateTimer(){
    var min = Math.floor(time / 60);
    var sec = time % 60;

    sec = sec < 10 ? '0' + sec : sec;
    timer.innerHTML  =`${min}:${sec}`;
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

