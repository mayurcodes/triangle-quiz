var calculateBtn = document.querySelector("#btn-calculate");
var sideInput = document.querySelectorAll(".sides");
var output = document.querySelector("#div-output");

function calculateSquareOfSides(sideOne, sideTwo) {
    var sum = (sideOne * sideOne) + (sideTwo * sideTwo);
    return sum;
}

function calculateHypotenuse() {
    var hypotenuse = calculateSquareOfSides(Number(sideInput[0].value), Number(sideInput[1].value));

    output.innerText = "Hypotenuse of a triangle is : " + hypotenuse;

}

calculateBtn.addEventListener("click", calculateHypotenuse);