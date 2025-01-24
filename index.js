let currentInput = '';
let operator = '';
let previousInput = '';

function appendNumber(number) {
    if (currentInput === '0') {
        currentInput = number.toString();
    } else {
        currentInput += number.toString();
    }
    updateDisplay();
}

function appendOperator(op) {
    if (operator === '') {
        previousInput = currentInput;
        currentInput = '0';
    }
    operator = op;
}

function calculate() {
    if (operator && previousInput) {
        let result;
        const num1 = parseFloat(previousInput);
        const num2 = parseFloat(currentInput);

        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                if (num2 !== 0) {
                    result = num1 / num2;
                } else {
                    result = 'Error';
                }
                break;
            default:
                return;
        }

        currentInput = result.toString();
        operator = '';
        previousInput = '';
        updateDisplay();
    }
}

function clearDisplay() {
    currentInput = '0';
    operator = '';
    previousInput = '';
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').textContent = currentInput;
}

// Fixing issue by listening to button clicks and handling events
document.querySelectorAll('.btn').forEach((button) => {
    button.addEventListener('click', (event) => {
        const value = event.target.textContent;

        if (value >= '0' && value <= '9') {
            appendNumber(value);
        } else if (value === 'C') {
            clearDisplay();
        } else if (value === '=') {
            calculate();
        } else {
            appendOperator(value);
        }
    });
});
