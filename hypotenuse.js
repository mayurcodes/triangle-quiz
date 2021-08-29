var calculateBtn = document.querySelector("#btn-calculate");
var sideInput = document.querySelectorAll(".sides");
var output = document.querySelector("#div-output");

function calculateSquareOfSides(sideOne, sideTwo) {
    var sum = (sideOne * sideOne) + (sideTwo * sideTwo);
    return sum;
}

function calculateHypotenuse() {
    var sideOne = Number(sideInput[0].value);
    var sideTwo = Number(sideInput[1].value);

    if (sideOne > 0 && sideTwo > 0) {
        var hypotenuse = calculateSquareOfSides(sideOne, sideTwo);
        output.style.color = "green";
        output.innerText = "Hypotenuse of a triangle is " + hypotenuse;
    } else {
        output.style.color = "red";
        output.innerText = "Please enter valid lengths in above fields..";
    }

}

calculateBtn.addEventListener("click", calculateHypotenuse);