var calculateBtn = document.querySelector("#btn-calculate");
var sideInput = document.querySelectorAll(".sides");
var output = document.querySelector("#div-output");

function calculateArea() {
    var base = Number(sideInput[0].value);
    var height = Number(sideInput[1].value);

    if(base > 0 && height > 0){
    var area = 1 / 2 * (base * height);
    output.innerText = "Area of a triangle is : " + area;
    }
    else{
        output.innerText = "Please enter valid lengths in above fields..";
    }
}

calculateBtn.addEventListener("click", calculateArea);