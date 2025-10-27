// Global variables
var currentInput = "";
var previousInput = "";
var operator = "";

// Global functions for calculator operations
function updateScreen() {
    const screen = document.querySelector(".calculator-screen");
    screen.value = currentInput || "0";
}

function appendNumber(number) {
    if (number === '.' && currentInput.includes('.')) return; // Prevent multiple decimals
    currentInput += number;
    updateScreen();
}

function chooseOperator(op) {
    if (currentInput === "") return;
    if (previousInput !== "" && currentInput !== "") {
        calculate();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = "";
}

function calculate() {
    let computation;
    const prev = parseFloat(previousInput);
    const curr = parseFloat(currentInput);
    if (isNaN(prev) || isNaN(curr)) return;
    
    switch (operator) {
        case "+":
            computation = prev + curr;
            break;
        case "-":
            computation = prev - curr;
            break;
        case "*":
            computation = prev * curr;
            break;
        case "/":
            if (curr === 0) {
                alert("Cannot divide by zero!");
                return;
            }
            computation = prev / curr;
            break;
        default:
            return;
    }
    
    currentInput = computation.toString();
    operator = "";
    previousInput = "";
    updateScreen();
}

function clearCalculator() {
    currentInput = "";
    previousInput = "";
    operator = "";
    updateScreen();
}

