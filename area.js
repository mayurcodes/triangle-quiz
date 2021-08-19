var calculateBtn = document.querySelector("#btn-calculate");
var sideInput = document.querySelectorAll(".sides");
var output = document.querySelector("#div-output");

function calculateArea() {

    var area = 1 / 2 * (Number(sideInput[0].value) * Number(sideInput[1].value));

    output.innerText = "Area of a triangle is : " + area;

}

calculateBtn.addEventListener("click", calculateArea);