var hTag = document.querySelector("#mainH");
var para = document.querySelector("#mainPara");
var startButton = document.querySelector("#startBtn");
var timeRemain = document.querySelector("#timer");
var ulTag = document.getElementById("choices");
var timeLeft = 10;
var myTimer

var score = 0;
var index = 0;

var questionsSection = document.querySelector("#questionSection");
var choices = document.querySelector("choices");



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


function loadQuestion(){
    
    var currentQuestion = questions[index]; 
    var titleEl = document.createElement("h3");
    titleEl.textContent = currentQuestion.title;
    questionsSection.append(titleEl);
   

    currentQuestion.choices.forEach(function(choice, i) {
    var choicesEl = document.createElement("button");
    choicesEl.setAttribute("class", "btn");
    // choicesEl.textContent = choice;
    choicesEl.setAttribute("data-answer", currentQuestion.choices[i]);


    //determine if the button as the correct answer
    //if does, set attribute (data-correct) yes or no
    //when button is 
    choicesEl.textContent = currentQuestion.choices[i];
  
    
    questionsSection.appendChild(choicesEl)
    console.log(choice, i);
    
    
    if (userAnswer){
        var correct = questions[index].answer
        console.log(correct)
        var userAnswer = e.target.getAttribute("data-answer");
        console.log(userAnswer);
        index++;
        if (userAnswer === correct){
            console.log("correct Answer");
        } else {
            console.log("incorrect again!!!!")
        }
    }
    
    })
    
}
  
    
function startQuiz(e){
    e.preventDefault();
    
    hTag.style.display = "none";
    para.style.display = "none";
    startButton.style.display = "none";
    startTime();
    } 

function answerClick(e){
    // e.preventDefault();
    // if( e.target.matches("button") ){
    //     console.log("Correct");
    // } else {
    //     console.log("incorrect");
    // }
}

ulTag.addEventListener("click", userAnswer);

startButton.addEventListener("click", startQuiz); 