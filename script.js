var quizTime = 120
var startBtn = document.getElementById("startBtn")

startBtn.addEventListener("click", startTime)
var questionIndex = 0
//set up questions as objects in an array 
var questions = [
    {
        questionText: "what line of code is used to link a local jscript file in html" ,
        answers: ["<jscript>a href = /jscript </jscript>", "<script src = script,js</script>", "<script src = script.js</script>", "link script = true"],
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
    //element for answer buttons
    var answersEl = document.getElementById("answers")
    //element for the question text
    var questionEl = document.getElementById("question")
    //current question from array
    var currentQuestion = questions[questionIndex]
     // clearing the page of any leftover answers
     answersEl.innerHTML=" "

    //display question of question index
    questionEl.textContent = currentQuestion.questionText

    for(var i =0; i<currentQuestion.answers.length; i++){
        
  var button = document.createElement("button");

  
  button.textContent = currentQuestion.answers[i]
  
  
  
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

function displayFinal(){
    var final = document.getElementById("final")
    
}












