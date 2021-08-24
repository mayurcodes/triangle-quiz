var checkButton = document.querySelector("#btn-check");
var angleInput = document.querySelectorAll(".input-angle");
var outputDiv = document.querySelector("#div-output");

function clickEventHandler() {
    var first_angle = Number(angleInput[0].value);
    var second_angle = Number(angleInput[1].value);
    var third_angle = Number(angleInput[2].value);
    var sumOfAngles = first_angle + second_angle + third_angle;

    if (first_angle > 0 && second_angle > 0 && third_angle > 0) {
        if (sumOfAngles === 180) {
            outputDiv.innerText = "Given 3 angles can make a triangle..✌";
        } else {
            outputDiv.innerText = "Given 3 angles can't make a triangle.. \r\n To make a triangle sum of all angles should be 180°";
        }
    } else {
        outputDiv.innerText = "Please enter valid angles in above fields..";
    }
}

checkButton.addEventListener("click", clickEventHandler);