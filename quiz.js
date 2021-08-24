var btnInput = document.querySelector("#btn-input");
var quizForm = document.querySelector("#quiz-form");
var outputDiv = document.querySelector("#div-output");
var containerColor = document.querySelectorAll(".color-container");

var answers = ["yes", "no", "yes", "80°", "Isosceles", "Scalene", "Both", "5cm"];

function clickHandler() {
    var result = new FormData(quizForm);
    var score = 0;
    var i = 0;

    for (var itr of result.values()) {
        if (itr === answers[i]) {
            containerColor[i].style.backgroundColor = "#71F07C";
            score++;
        } else {
            containerColor[i].style.backgroundColor = "#F3684F";
        }
        i++;
    }

    btnInput.style.display = "none";
    
    if (score == 8) {
        outputDiv.innerText = "Congratulations!!  you got all answers correct..\r\n Your score is  " + score;
    } else {
        outputDiv.innerText = "Your score is  " + score;
    }

}

quizForm.addEventListener("submit", clickHandler);