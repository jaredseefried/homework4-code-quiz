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
var timeLeft = 120;
var myTimer;
var finalScore = document.querySelector("#score");

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
    choicesEl.setAttribute("data-answer", questions[i].answer);
        
    //Show choices
    ulTag.appendChild(choicesEl);
    console.log(choicesEl);

    //determine if the button as the correct answer
    //if does, set attribute (data-correct) yes or no
    //when button is 
    } else {
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
   var userAnswer = e.target.getAttribute("data-answer");

    if (userAnswer == questions[index].answer){
        // create message of correct
        msg = "That's Right!!!"
        // increase score
        score++;
        console.log("added point to score");
    } else {
        // display message of incorrect
        msg = "Sorry, That is Incorrect"
        //decrease counter
        timeLeft -= 5;
    }
    if (userAnswer){
        index++;
        loadQuestion();
    }
    
}


function endQuiz(){
    clearInterval(myTimer);
    ulTag.style.display = "none";
    timeRemain.style.display = "none";
    finalScore.textContent = ("Your score is " + score);

}



// Event listener on ul Tag
ulTag.addEventListener("click", answerClick);

//event listener on start
startButton.addEventListener("click", startQuiz); 