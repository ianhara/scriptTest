var quizTime = 120;
var startBtn = document.getElementById("startBtn");
//if start button clicked run startTime
startBtn.addEventListener("click", startTime);
var questionIndex = 0;
//set up questions as objects in an array
var questions = [
    
        {
          questionText:
            "What line of code is used to link a local JavaScript file in HTML?",
          answers: [
            "<jscript>a href = /jscript </jscript>",
            "<script src = script,js</script>",
            "<script src = script.js</script>",
            "link script = true",
          ],
          key: "<script src = script.js</script>",
        },
        {
          questionText:
            "What does the JavaScript function console.log() do?",
          answers: [
            "Display an alert message",
            "Print output to the console",
            "Open a new browser window",
            "Change the page URL",
          ],
          key: "Print output to the console",
        },
        {
          questionText: "Which keyword is used to declare a variable in JavaScript?",
          answers: ["make", "var", "set", "new"],
          key: "var",
        },
        {
          questionText: "What happens when you forget to end a statement in JavaScript?",
          answers: [
            "The computer explodes",
            "The statement is automatically ended for you",
            "An error occurs",
            "Nothing happens"
          ],
          key: "An error occurs",
        },
];

function showQuestion() {

  //element for answer buttons
  var answersEl = document.getElementById("answers");
  //element for the question text
  var questionEl = document.getElementById("question");
  //current question from array
  var currentQuestion = questions[questionIndex];
  // clearing the page of any leftover answers
  answersEl.innerHTML = " ";
  //clearing the previous question
  questionEl.innerHTML=""

  //display question of question index
  questionEl.textContent = currentQuestion.questionText;

  //for loop to iterate through answers
  for (var i = 0; i < currentQuestion.answers.length; i++) {
    var button = document.createElement("button");
    //create button with content of answer at i
    button.textContent = currentQuestion.answers[i];
    //append to be displayed
    answersEl.appendChild(button);

    //on click see if answer == key, else subtract time
    button.addEventListener("click", function(event){
        var choice = event.target.textContent
        var correct = currentQuestion.key

        if(choice === correct){
            alert("correct")
        }else{
            alert("incorrect")
            quizTime-=20
        }
        questionIndex++
        showQuestion()
    })

  }
}
//starts timer and stops upon 0 time left and runs displayFinal
function startTimer() {
  var displayTimer = document.getElementById("timer");
  var interval = setInterval(function () {
    quizTime--;
    displayTimer.textContent = "time left: " + quizTime + "seconds";
    if (quizTime <= 0) {
      clearInterval(interval);
      displayFinal();
    }
  }, 1000);
}
//runs showQuestion and Start timer
function startTime() {
  showQuestion();
  startTimer();
}
//once display final is triggered we want to display score as time left
function displayFinal() {
  var final = document.getElementById("final");
  final.textContent = "final score: " + quizTime;
}
