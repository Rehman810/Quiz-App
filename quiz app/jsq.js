var quizQuestions = [
    {
        question: "Q1 : Inside which HTML element do we put the JavaScript?",
        a: " <javascript>",
        b: " <script>",
        c: " <scripting>",
        d: " <js>",
        ans: "ans2"
    },

    {
        question: "Q2 : adding or removing the elements from any index by",
        a: "slice",
        b: 'push',
        c: "splice",
        d: "a & b",
        ans: "ans3"
    }
    ,
    {
        question: "Q3 : Where is the correct place to insert a JavaScript?",
        a: "body",
        b: "head",
        c: "div",
        d: "a & b",
        ans: "ans1"

    }
    ,
    {
        question: "Q4 : if a=5; so ++a + a++ ?",
        a: "10",
        b: "6",
        c: "8",
        d: "12",
        ans: "ans4"

    }
    ,
    {
        question: "Q5 : if(a>b) complete the code",
        a: "{",
        b: "}",
        c: "{ code of block }",
        d: "if else",
        ans: "ans3"

    }
    ,
    {
        question: "Q6 :  Which of the below is used in Java script to insert special characters?",
        a: "&",
        b: ".",
        c: "{ ",
        d: "\\",
        ans: "ans4"
    }
    ,
    {
        question: "Q7 :  JavaScript ignores extra spaces",
        a: "True",
        b: "False",
        c: "a & b",
        d: "Not Mentioned",
        ans: "ans2"
    }
    ,
    {
        question: "Q8 :  Which is the correct way to write a JavaScript array?",
        a: 'var txt = new Array(1:"arr",2:"kim",3:"jim")',
        b: 'var txt = new Array:1=(" arr ")2=("kim")3=("jim")',
        c: 'var txt = new Array("arr ","kim","jim")',
        d: 'var txt = new Array=" arr ","kim","jim"',
        ans: "ans3"
    }
    ,
    {
        question: "Q9 :  3 > 2  === false;",
        a: "True",
        b: "False",
        c: "a & b",
        d: "Not Mentioned",
        ans: "ans2"
    }
    ,
    {
        question: "Q10 :  Which of the following is not a valid JavaScript variable name?",
        a: "2java ",
        b: "_java_and_ java _names",
        c: "a & b",
        d: "javaandjava",
        ans: "ans1"
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
