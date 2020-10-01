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
var timeLeft = 60;
var myTimer;
var finalScore = document.querySelector("#score");
var scoreCounter = localStorage.getItem("score");
localStorage.setItem("Score", score);



//Questions and Answers Array
var questions = [
    {title: "Inside which HTML element do we put the JavaScript?",
    choices: ['<script>', '<js>', '<scripting>', '<javascript>'] ,
    answer: '<script>'},
    {title: "what do we assign a value to?",
    choices: ['loop', 'variable', 'function', 'object'] ,
    answer: 'variable'},
    {title: "what symbol(s) is used to comment javascript?",
    choices: ['*/', '{ }', '//', 'comment -m'] ,
    answer: '//'},
    {title: "what does i stand for?",
    choices: ['iPhone', 'india', 'indent', 'index'] ,
    answer: 'index'},
    {title: "End of Quiz",
    choices: "none",
    answer: "none"}
]

//Countdown function
function startTime(){
    timeRemain.style.display = "block";
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

// Load questions from array function 
function loadChoices(index){
    // show choices loop
    for (var i = 0; i < questions[index].choices.length; i++){
    
        if (ulTag.childElementCount < questions[index].choices.length) {


        // make the answers a button
        var choicesEl = document.createElement("button");

        // give button a class of btn
        choicesEl.setAttribute("class", "btn" + [i]);
        choicesEl.textContent = questions[index].choices[i];

        // give data answer attribute
        choicesEl.setAttribute("data-answer", questions[i].answer);
        
        //Show choices
        ulTag.appendChild(choicesEl);
        console.log(choicesEl);
        
        }   else {
        
        var newChoicesEl = document.querySelector(".btn" + [i]);
        newChoicesEl.textContent = questions[index].choices[i];
            }

        if(index === 4){
        endQuiz();
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
    //get the defined data answer
    var userAnswer = e.target.getAttribute("data-answer");
    //If the defined data-answer is equal to the answer in the array
    if (userAnswer == questions[index].answer){
        // increase score
        score++;
        finalScore.textContent = scoreCounter;
        //Add score to local store
        localStorage.setItem("Score", score);
    } else {
        //decrease counter by 5 seconds if answer is wrong
        timeLeft -= 5;
    }
    //Anytime the user answers whether right or wrong
    if (userAnswer){
        //Move to the next question and answers
        index++;
        loadQuestion();
    }   
}

// End the Quiz Function
function endQuiz(e){

    //stop the timer
    clearInterval(myTimer);

    // Hide answer buttons
    ulTag.style.display = "none";

    // Hide Timer
    timeRemain.style.display = "none";
    finalScore.textContent = ("Your score is " + score);
}

// Event listener on ul Tag
ulTag.addEventListener("click", answerClick);

//event listener on start
startButton.addEventListener("click", startQuiz); 