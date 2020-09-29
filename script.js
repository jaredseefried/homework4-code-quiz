var hTag = document.querySelector("#mainH");
var para = document.querySelector("#mainPara");
var startButton = document.querySelector("#startBtn");
var timeRemain = document.querySelector("#timer");

var timeLeft = 10;

function startTime(){
    
    var myTimer = setInterval(function() {
        timeRemain--;
            if(timeLeft === 0) {
            clearInterval(myTimer);  
            }
        }, 1000)
    timeRemain.textContent = timeLeft + " seconds remaining.";
    startQuiz();
}

function startQuiz(){
    console.log("question #1")
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


