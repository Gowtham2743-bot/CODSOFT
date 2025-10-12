const display = document.getElementById('display');

// Function to append characters to the display
function appendToDisplay(input) {
    display.value += input;
}

// Function to clear the display
function clearDisplay() {
    display.value = "";
}

// Function to delete the last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Function to calculate the result
function calculateResult() {
    try {
        // Use eval() for calculation. It handles order of operations.
        // For exponents, we use the '**' operator which eval() understands.
        let result = eval(display.value);
        display.value = result;
    } catch (error) {
        display.value = "Error";
    }
}

// --- Scientific Functions ---

function sin() {
    try {
        // Math.sin expects radians, so we convert degrees to radians
        display.value = Math.sin(eval(display.value) * (Math.PI / 180));
    } catch (error) {
        display.value = "Error";
    }
}

function cos() {
    try {
        display.value = Math.cos(eval(display.value) * (Math.PI / 180));
    } catch (error) {
        display.value = "Error";
    }
}

function tan() {
    try {
        display.value = Math.tan(eval(display.value) * (Math.PI / 180));
    } catch (error) {
        display.value = "Error";
    }
}

function log() {
    try {
        display.value = Math.log10(eval(display.value));
    } catch (error) {
        display.value = "Error";
    }
}

function sqrt() {
    try {
        display.value = Math.sqrt(eval(display.value));
    } catch (error) {
        display.value = "Error";
    }
}

function pi() {
    display.value += Math.PI;
}