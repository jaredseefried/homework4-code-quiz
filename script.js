//global variables
var hTag = document.querySelector("#mainH");
var para = document.querySelector("#mainPara");
var startButton = document.querySelector("#startBtn");
var timeRemain = document.querySelector("#timer");
var ulTag = document.getElementById("choices");
var questionsSection = document.querySelector("#questionSection");
var choices = document.querySelector("choices");
var score = 0;
var index = 0;
var timeLeft = 10;
var myTimer

//Questions and Answers Array
var questions = [
    {title: "what is up?",
    choices: ['one', 'two', 'three', 'four'] ,
    answer: 'one'},
    {title: "what is down?",
    choices: ['five', 'six', 'seven', 'eight'] ,
    answer: 'six'},
    {title: "what is left?",
    choices: ['nine', 'ten', 'eleven', 'twelve'] ,
    answer: 'eleven'},
    {title: "what is right?",
    choices: ['thirteen', 'fourteen', 'fiveteen', 'sixteen'] ,
    answer: 'sixteen'}
]

//Countdown function
function startTime(){
    
    myTimer = setInterval(function() {
        timeLeft--;
            timeRemain.textContent = timeLeft + " seconds remaining.";
            if(timeLeft === 0) {
            clearInterval(myTimer); 
            } 
        }, 1000)
    
    loadQuestion();
}

// Questions function
function loadQuestion(){
    
    var currentQuestion = questions[index]; 
    // var titleEl = document.createElement("h2");
    questionsSection.textContent = currentQuestion.title;
    // questionsSection.append(titleEl);
    loadChoices(index);
}

// answers function 

// Load questions from array function 
function loadChoices(index){
    // show choices loop
    for (var i = 0; i < questions[index].choices.length; i++){
    
    if (ulTag.childElementCount < questions[index].choices.length) {


    // make answer buttons
    var choicesEl = document.createElement("button");

    // give button a class of btn
    choicesEl.setAttribute("class", "btn" + [i]);
    choicesEl.textContent = questions[index].choices[i];

    // give data answer attribute
    choicesEl.setAttribute("data-answer", questions[index].answer);

    //Show choices
    ulTag.appendChild(choicesEl);
    console.log();

    //determine if the button as the correct answer
    //if does, set attribute (data-correct) yes or no
    //when button is 
    } else {
        var newChoicesEl = document.querySelector(".btn" + [i]);
        newChoicesEl.textContent = questions[index].choices[i];
    }
}
}

// Start Quiz function 
function startQuiz(e){
    e.preventDefault();

    // display none HTML elements
    hTag.style.display = "none";
    para.style.display = "none";
    startButton.style.display = "none";

    // Start countdown
    startTime();
    } 

// user clicks an answer function
function answerClick(e){
    e.preventDefault();
   var userAnswer = e.target.getAttribute("data-answer");
//    console.log(userAnswer);
    if (userAnswer === questions[index].answer){
        // create message of correcxt
        // increase score

    } else {
        // display message of incorrect
        //descrease counter

    }
    if (userAnswer){
        index++;
        loadQuestion();
    }
    
}

// Event listener on ul Tag
ulTag.addEventListener("click", answerClick);

//event listener on start
startButton.addEventListener("click", startQuiz); 