const option = getOperator();
const num1 = getOperand('A');
const num2 = getOperand('B');
const isNotValid = isNaN(num1 && num2);
const result = calc(option, num1, num2);

function getOperator() {
    return prompt('Enter operator +, -, *, /');
}

function getOperand(name) {
    return Number(prompt(`Select operand ${name}`)); 
}

if (isNotValid) {
    console.log('Error number');
    alert('Error number');
}

if (option !== '+' && option !== '-' && option !== '*' && option !== '/') {
    console.log('Error operator');
    alert('Error opetaror');
}

function calc(option, num1, num2) {
    switch (option) {
    case '+' : return add(num1, num2);
    case '-' : return sub(num1, num2);
    case '*' : return mul(num1, num2);
    case '/' : return div(num1, num2);
}
}

function showResult(option, num1, num2, result) {
    alert(`${num1} ${option} ${num2} = ${result}`);
}

function add(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
}
function mul(a, b) {
    return a * b;
}
function div(a, b) {
    return a / b;
}