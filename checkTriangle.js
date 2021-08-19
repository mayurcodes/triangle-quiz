var checkButton = document.querySelector("#btn-check");
var angleInput = document.querySelectorAll(".input-angle");
var outputDiv = document.querySelector("#div-output");

function clickEventHandler() {

    var sumOfAngles = Number(angleInput[0].value) +
        Number(angleInput[1].value) +
        Number(angleInput[2].value);

    if(sumOfAngles === 180){
        outputDiv.innerText = "It is triangle.";
    }
    else 
    outputDiv.innerText = "Not a triangle";

}

checkButton.addEventListener("click", clickEventHandler);