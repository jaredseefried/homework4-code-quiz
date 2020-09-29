var hTag = document.querySelector("#mainH");
var para = document.querySelector("#mainPara");
var startButton = document.querySelector("#startBtn");
var timeRemain = document.querySelector("#timer");

var timeLeft = 10;
var myTimer

var score;
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
    
    startQuiz();
}

function startQuiz(){
    // console.log(questions[index].title);
    var currentQuestion = questions[index]; 
    var titleEl = document.createElement("h3");
    titleEl.textContent = currentQuestion.title;
    questionsSection.append(titleEl);
   // console.log(questions[index].choices);

    currentQuestion.choices.forEach(function(choice, i) {
        console.log(choice, i);
        var choicesEl = document.createElement("p");
        choicesEl.textContent = choice;

        questionsSection.appendChild(choicesEl)
    })
}
  
    
function handleClick(e){
    e.preventDefault();
    startTime();
    if( e.target.matches("button") ){
    hTag.style.display = "none";
    para.style.display = "none";
    startButton.style.display = "none";
    } 
    
}

startButton.addEventListener("click", handleClick); 


