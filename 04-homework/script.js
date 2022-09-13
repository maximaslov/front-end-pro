'use strict'

const option = getOperator();
const operandAmound = getOperandAmound();
const num = getOperand(operandAmound);

getResult(num);
showResult();

function getOperator() {
    let option = false;
    do {
        const result = prompt('Enter operator +, -, *, /','+');
        if (result === '+' || result === '-' || result === '*' || result === '/') {
            option = result;
        }
    } while (option === false);
    return option;
};


function getOperandAmound() {
    let count;
    do {
        count = prompt(`Enter operadns count (More than 1 less than 5)`,3);
    } while (isNaN(count) || count < 2 || count > 5);
    while (isDataValid)
    return Number(count);
}

function getOperand(amound) {
  let res = [];

  for (let i = 1; i <= amound; i++) {
    let num;

    do {
      num = Number(prompt(`Enter operand ${i}`, '3'));
    } while (isNaN(num));
      
      res.push(num);
  }

  return res;
}

function getResult(arr) {
    let result = arr[0];
    for (let i = 1; i < arr.length; i++) {
        switch (option) {
            case '+': result += arr[i];
                break;
            case '-': result -= arr[i];
                break;
            case '*': result *= arr[i];
                break;
            case '/': result /= arr[i];
                break;
        }
    } 
    return result;
}

function showResult () {
    alert(`${num.join(option)} = ${getResult(num)}`);
}
