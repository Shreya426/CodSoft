let display = document.getElementById('display');
let currentInput = '';

function appendToDisplay(value) {
    if (display.textContent === '0' && value !== '.' && value !== '/' && value !== '*' && value !== '-' && value !== '+') {
        currentInput = value;
    } else {
        currentInput += value;
    }
    display.textContent = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.textContent = '0';
}

function calculateResult() {
    try {
        // Ensure we handle cases where there are multiple operators or invalid input
        if (currentInput === '') {
            display.textContent = '0';
            return;
        }
        let result = eval(currentInput);
        if (!isFinite(result)) {
            display.textContent = 'Error';
        } else {
            display.textContent = result;
        }
        currentInput = result.toString();
    } catch (error) {
        display.textContent = 'Error';
        currentInput = '';
    }
}
