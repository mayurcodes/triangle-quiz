var btnInput = document.querySelector("#input-btn");
var quizForm = document.querySelector("#quiz-form");
var outputDiv = document.querySelector("#div-output");

var answers = ["yes", "no", "yes", "80°", "Isosceles", "Scalene", "Both", "5cm"];

function clickHandler() {
    var result = new FormData(quizForm);
    var score = 0;
    var i = 0;

    for (var itr of result.values()) {
        if(itr === answers[i]){
            score++;
        }
        i++;
    }
outputDiv.innerText = "Your score is " + score;
}

btnInput.addEventListener("click", clickHandler);