var quizTime = 120
var questionIndex = 0

var questions = [
    {
        questionText: "question1" ,
        answers: ["option1", "option2", "option3", "option4"],
        key: "option3"
    },
    {
        questionText: "question2" ,
        answers: ["option1", "option2", "option3", "option4"],
        key: "option2"
    },
    {
        questionText: "question3" ,
        answers: ["option1", "option2", "option3", "option4"],
        key: "option1"
    }

]


function showQuestion(){
    var answersEl = document.getElementById("answers")
    
    var questionEl = document.getElementById("question")
    
    questionEl.textContent = questions[questionIndex].questionText

    for(var i =0; i<questions[0].answers.length; i++){
          // Creates element based on tag entered by user
  var button = document.createElement("button");

  // Adds text content to created tag
  button.textContent = questions[0].answers[i]
  
  
  // Appends tag as child of document body
  answersEl.appendChild(button);
    }
}

function startTimer(){
    var displayTimer = document.getElementById("timer")
    var interval = setInterval(function(){
        quizTime--
        displayTimer.textContent = "time left: " + quizTime + "seconds"
        if (quizTime <= 0){
            clearInterval(interval)
            displayFinal()
        }
    }, 1000)
}



function startTime(){
    showQuestion()
    startTimer()
    console.log(questions[questionIndex].questionText)
    
}

var startBtn = document.getElementById("startBtn")

startBtn.addEventListener("click", startTime)












