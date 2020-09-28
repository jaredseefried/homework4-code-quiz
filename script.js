var hTag = document.querySelector("#mainH");
var para = document.querySelector("#mainPara");
var startButton = document.querySelector("#startBtn");

function startQuiz(){
    
}

function handleClick(e){
    e.preventDefault();
    if( e.target.matches("button") ){
    hTag.style.display = "none";
    para.style.display = "none";
    startButton.style.display = "none";
    }
}

startButton.addEventListener("click", handleClick); 


startQuiz();