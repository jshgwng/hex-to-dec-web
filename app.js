// variables
const input = document.querySelector("#hex-character");
const button = document.querySelector("button");
const resultDisplay = document.querySelector("#decimal");


button.addEventListener("click", function(e){
    e.preventDefault();
    let value = input.value;
    if(value.length !== 1) {
        resultDisplay.textContent = "You must enter exactly one character";
        resultDisplay.classList.add("text-danger");
    }
    
    let ch = value.charCodeAt(0);
    if(ch <= 'F'.charCodeAt(0) && ch >= 'A'.charCodeAt(0)) {
        let result = ch - 'A'.charCodeAt(0) + 10;
        resultDisplay.textContent = "The decimal value for hex digit " + value + " is " + result;
        resultDisplay.classList.add("text-success");
    } else if(!isNaN(Number(value))){
        resultDisplay.textContent = "The decimal value for the hex digit " + value + " is " + value;
        resultDisplay.classList.add("text-success");
    } else {
        resultDisplay.textContent = value + " is an invalid input";
        resultDisplay.classList.add("text-danger");
    }
});
